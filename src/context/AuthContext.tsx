import React, { createContext, useContext, useState, useEffect } from 'react';
import { PublicClientApplication, AccountInfo, AuthenticationResult } from '@azure/msal-browser';
import { msalConfig, loginRequest, AZURE_CLIENT_ID, AZURE_TENANT_ID } from '../authConfig.ts';

export interface UserProfile {
  name: string;
  email: string;
  role: string;
  store: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: UserProfile | null;
  login: () => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  error: string | null;
  isConfigured: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

let msalInstance: PublicClientApplication | null = null;

const ALLOWED_ORG_DOMAINS = ['opportunityrestaurantgroup.com', 'bigredrules.com'];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    try {
      const savedSession = sessionStorage.getItem('opportunity_central_user');
      if (savedSession) {
        const parsed: UserProfile = JSON.parse(savedSession);
        const domain = parsed.email?.split('@')[1]?.toLowerCase();
        return ALLOWED_ORG_DOMAINS.some(d => domain?.endsWith(d));
      }
    } catch {
      // Ignore
    }
    return false;
  });

  const [user, setUser] = useState<UserProfile | null>(() => {
    try {
      const savedSession = sessionStorage.getItem('opportunity_central_user');
      if (savedSession) {
        return JSON.parse(savedSession);
      }
    } catch {
      // Ignore
    }
    return null;
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isConfigured = Boolean(AZURE_CLIENT_ID);

  useEffect(() => {
    const initAuth = async () => {
      try {
        if (isConfigured) {
          if (!msalInstance) {
            msalInstance = new PublicClientApplication(msalConfig);
            await msalInstance.initialize();
          }

          // 1. Process redirect response from Microsoft login redirect
          const redirectResponse = await msalInstance.handleRedirectPromise();
          if (redirectResponse?.account) {
            const success = validateAndSetAccount(redirectResponse.account);
            if (success) {
              setIsLoading(false);
              return;
            }
          }

          // 2. Check if already signed in via MSAL cache
          const currentAccounts = msalInstance.getAllAccounts();
          if (currentAccounts.length > 0) {
            const success = validateAndSetAccount(currentAccounts[0]);
            if (success) {
              setIsLoading(false);
              return;
            }
          }
        }

        // 3. Check local session storage if previously validated org user
        const savedSession = sessionStorage.getItem('opportunity_central_user');
        if (savedSession) {
          try {
            const parsed: UserProfile = JSON.parse(savedSession);
            const domain = parsed.email?.split('@')[1]?.toLowerCase();
            const isOrgDomain = ALLOWED_ORG_DOMAINS.some(d => domain?.endsWith(d));
            if (isOrgDomain) {
              setUser(parsed);
              setIsAuthenticated(true);
            }
          } catch {
            // Keep default org user
          }
        }
      } catch (err: unknown) {
        console.warn('MSAL Initialization:', err);
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, [isConfigured]);

  const validateAndSetAccount = (account: AccountInfo): boolean => {
    const email = (account.username || '').toLowerCase();
    const domain = email.split('@')[1] || '';
    const tenantId = account.tenantId || '';

    // Check if user belongs to Opportunity Restaurant Group Tenant or authorized domain
    const isTenantMatch = tenantId === AZURE_TENANT_ID;
    const isDomainMatch = ALLOWED_ORG_DOMAINS.some(d => domain.endsWith(d));

    if (!isTenantMatch && !isDomainMatch && !email.includes('opportunityrestaurantgroup')) {
      setError('Access Restricted: You must sign in with an authorized Opportunity Restaurant Group Microsoft account (@opportunityrestaurantgroup.com).');
      setIsAuthenticated(false);
      setUser(null);
      sessionStorage.removeItem('opportunity_central_user');
      return false;
    }

    const userProfile: UserProfile = {
      name: account.name || email.split('@')[0] || 'Opportunity Team Member',
      email: account.username || 'team@opportunityrestaurantgroup.com',
      role: 'Opportunity Restaurant Group',
      store: 'Opportunity Restaurant Group',
    };

    setUser(userProfile);
    setIsAuthenticated(true);
    setError(null);
    sessionStorage.setItem('opportunity_central_user', JSON.stringify(userProfile));
    return true;
  };

  const login = async () => {
    setIsLoading(true);
    setError(null);

    try {
      if (!msalInstance) {
        msalInstance = new PublicClientApplication(msalConfig);
        await msalInstance.initialize();
      }

      // Check if running in iframe (e.g. preview environment) where top-level redirects might be restricted
      const isInIframe = window !== window.top;

      if (isInIframe) {
        try {
          const popupResult: AuthenticationResult = await msalInstance.loginPopup(loginRequest);
          if (popupResult.account) {
            validateAndSetAccount(popupResult.account);
          }
        } catch (popupErr: unknown) {
          console.warn('Popup login failed, attempting redirect:', popupErr);
          await msalInstance.loginRedirect(loginRequest);
        }
      } else {
        await msalInstance.loginRedirect(loginRequest);
      }
    } catch (err: unknown) {
      console.error('MSAL Login error:', err);
      const errMsg = err instanceof Error ? err.message : 'Login failed. Please check your credentials or organization permissions.';
      setError(errMsg);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsAuthenticated(false);
    setUser(null);
    sessionStorage.removeItem('opportunity_central_user');
    if (msalInstance && isConfigured) {
      try {
        const isInIframe = window !== window.top;
        if (isInIframe) {
          await msalInstance.logoutPopup();
        } else {
          await msalInstance.logoutRedirect();
        }
      } catch (e) {
        console.warn('MSAL logout:', e);
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        logout,
        isLoading,
        error,
        isConfigured,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

