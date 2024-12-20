import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { AUTH_CONFIG } from '../../config/auth';
import { useNavigate } from 'react-router-dom';

interface AuthProviderProps {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate();

  const onRedirectCallback = (appState: any) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={AUTH_CONFIG.domain}
      clientId={AUTH_CONFIG.clientId}
      authorizationParams={{
        redirect_uri: AUTH_CONFIG.redirectUri,
        audience: AUTH_CONFIG.audience,
        scope: AUTH_CONFIG.scope
      }}
      onRedirectCallback={onRedirectCallback}
      useRefreshTokens={true}
      cacheLocation="localstorage"
    >
      {children}
    </Auth0Provider>
  );
}