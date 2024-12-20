import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useThemeStore } from '../../../stores/useThemeStore';

export default function ThemeSettings() {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-bold mb-6">Theme Settings</h3>
      <div className="flex space-x-4">
        <button
          onClick={() => setTheme('light')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg border-2 ${
            theme === 'light' 
              ? 'border-gold bg-gold/10 text-black' 
              : 'border-gray-200 hover:border-gold'
          }`}
        >
          <Sun className="w-5 h-5" />
          <span>Light Mode</span>
        </button>
        <button
          onClick={() => setTheme('dark')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg border-2 ${
            theme === 'dark' 
              ? 'border-gold bg-gold/10 text-black' 
              : 'border-gray-200 hover:border-gold'
          }`}
        >
          <Moon className="w-5 h-5" />
          <span>Dark Mode</span>
        </button>
      </div>
    </div>
  );
}