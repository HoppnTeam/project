import React from 'react';
import ThemeSettings from './settings/ThemeSettings';

export default function Settings() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-6">Settings</h2>
      
      {/* Theme Settings */}
      <ThemeSettings />
    </div>
  );
}