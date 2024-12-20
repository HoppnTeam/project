import React from 'react';
import GoogleLoginButton from '../components/auth/GoogleLoginButton';

export default function TestAuthPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-8">Auth0 Google Login Test</h1>
        <GoogleLoginButton />
      </div>
    </div>
  );
}