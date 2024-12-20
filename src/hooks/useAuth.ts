import { useAuth0 } from '@auth0/auth0-react';
import { useCallback } from 'react';

export function useAuth() {
  const {
    isAuthenticated,
    isLoading,
    error,
    user,
    loginWithRedirect,
    logout
  } = useAuth0();

  const handleLogin = useCallback(() => {
    loginWithRedirect();
  }, [loginWithRedirect]);

  const handleLogout = useCallback(() => {
    logout({ 
      logoutParams: {
        returnTo: window.location.origin 
      }
    });
  }, [logout]);

  return {
    isAuthenticated,
    isLoading,
    error,
    user,
    login: handleLogin,
    logout: handleLogout
  };
}