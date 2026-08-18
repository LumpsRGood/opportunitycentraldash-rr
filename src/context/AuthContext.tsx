import React, { createContext, useContext, useState, useEffect } from 'react';
import { PublicClientApplication, AccountInfo } from '@azure/msal-browser';
import { msalConfig, loginRequest, AZURE_CLIENT_ID } from '../authConfig.ts';

interface UserProfile {
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

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
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
            handleAccount(redirectResponse.account);
            setIsLoading(false);
            return;
          }

          // 2. Check if already signed in via MSAL cache
          const currentAccounts = msalInstance.getAllAccounts();
          if (currentAccounts.length > 0) {
            handleAccount(currentAccounts[0]);
            setIsLoading(false);
            return;
          }
        }

        // 3. Fallback: Check local session storage
        const savedSession = sessionStorage.getItem('opportunity_central_user');
        if (savedSession) {
          const parsed = JSON.parse(savedSession);
          setUser(parsed);
          setIsAuthenticated(true);
        }
      } catch (err: unknown) {
        console.warn('MSAL Initialization:', err);
        const errMsg = err instanceof Error ? err.message : 'Authentication initialization error';
        setError(errMsg);
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, [isConfigured]);

  const handleAccount = (account: AccountInfo) => {
    const userProfile: UserProfile = {
      name: account.name || account.username.split('@')[0] || 'Opportunity Leader',
      email: account.username || 'user@opportunityrestaurantgroup.com',
      role: 'Leader',
      store: 'Opportunity Restaurant Group',
    };
    setUser(userProfile);
    setIsAuthenticated(true);
    sessionStorage.setItem('opportunity_central_user', JSON.stringify(userProfile));
  };

  const login = async () => {
    setIsLoading(true);
    setError(null);

    try {
      if (!msalInstance) {
        msalInstance = new PublicClientApplication(msalConfig);
        await msalInstance.initialize();
      }

      // Use full-page redirect for seamless standard Microsoft 365 login (no popup blocking or nested popup issues)
      await msalInstance.loginRedirect(loginRequest);
    } catch (err: unknown) {
      console.error('MSAL Login error:', err);
      const errMsg = err instanceof Error ? err.message : 'Login failed. Please check your credentials.';
      setError(errMsg);
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsAuthenticated(false);
    setUser(null);
    sessionStorage.removeItem('opportunity_central_user');
    if (msalInstance && isConfigured) {
      try {
        await msalInstance.logoutRedirect();
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
