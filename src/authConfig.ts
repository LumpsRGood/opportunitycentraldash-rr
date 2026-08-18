import { Configuration } from "@azure/msal-browser";

// Opportunity Restaurant Group - Microsoft Entra ID Config
export const AZURE_CLIENT_ID = "16922665-0b94-49ad-998e-a648fd871317";
export const AZURE_TENANT_ID = "d654250b-024b-4116-ad8e-36b58a13810a";

const getRedirectUri = () => {
  if (typeof window !== 'undefined') {
    const origin = window.location.origin;
    return origin.endsWith('/') ? origin : `${origin}/`;
  }
  return 'https://bigredrules.com/';
};

export const msalConfig: Configuration = {
  auth: {
    clientId: (import.meta as any).env?.VITE_AZURE_CLIENT_ID || AZURE_CLIENT_ID,
    authority: `https://login.microsoftonline.com/${(import.meta as any).env?.VITE_AZURE_TENANT_ID || AZURE_TENANT_ID}`,
    redirectUri: getRedirectUri(),
    postLogoutRedirectUri: getRedirectUri(),
  },
  cache: {
    cacheLocation: "sessionStorage",
  },
  system: {
    allowPlatformBroker: false,
    allowRedirectInIframe: true,
  },
};

// Scopes requested on login
export const loginRequest = {
  scopes: ["openid", "profile", "User.Read"],
};
