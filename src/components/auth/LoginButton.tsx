import React from 'react';
import { LogIn } from 'lucide-react';
import { useAuth0 } from '@auth0/auth0-react';

export default function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    try {
      await loginWithRedirect({
        authorizationParams: {
          connection: 'google-oauth2',
          prompt: 'login',
          redirect_uri: window.location.origin
        }
      });
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <button
      onClick={handleLogin}
      className="flex items-center space-x-2 bg-gold text-black px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
    >
      <LogIn className="w-4 h-4" />
      <span>Sign in with Google</span>
    </button>
  );
}