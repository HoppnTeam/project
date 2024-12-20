import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Bell, Globe, Palette, Shield } from 'lucide-react';
import { CATEGORIES } from '../constants/categories';
import { REGIONS } from '../constants/regions';
import { UserPreferences } from '../types/user';

export default function SettingsPage() {
  const { user } = useAuth0();
  const [preferences, setPreferences] = React.useState<UserPreferences>({
    regions: [],
    categories: [],
    notifications: {
      breakingNews: true,
      followedTopics: true,
      newsletter: true,
    },
    theme: 'light',
  });

  const handleNotificationChange = (key: keyof typeof preferences.notifications) => {
    setPreferences(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [key]: !prev.notifications[key],
      },
    }));
  };

  const handleRegionToggle = (regionId: string) => {
    setPreferences(prev => ({
      ...prev,
      regions: prev.regions.includes(regionId)
        ? prev.regions.filter(r => r !== regionId)
        : [...prev.regions, regionId],
    }));
  };

  const handleCategoryToggle = (categorySlug: string) => {
    setPreferences(prev => ({
      ...prev,
      categories: prev.categories.includes(categorySlug)
        ? prev.categories.filter(c => c !== categorySlug)
        : [...prev.categories, categorySlug],
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Settings</h1>

        <div className="space-y-8">
          {/* Profile Section */}
          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <img
                  src={user?.picture}
                  alt={user?.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <p className="font-semibold">{user?.name}</p>
                  <p className="text-gray-600">{user?.email}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Notifications Section */}
          <section className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Bell className="w-5 h-5 text-gold" />
              <h2 className="text-xl font-semibold">Notification Preferences</h2>
            </div>
            <div className="space-y-4">
              {Object.entries(preferences.notifications).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <span className="capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={value}
                      onChange={() => handleNotificationChange(key as keyof typeof preferences.notifications)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gold/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold"></div>
                  </label>
                </div>
              ))}
            </div>
          </section>

          {/* Regions Section */}
          <section className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Globe className="w-5 h-5 text-gold" />
              <h2 className="text-xl font-semibold">Region Preferences</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {REGIONS.map((region) => (
                <label
                  key={region.id}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={preferences.regions.includes(region.id)}
                    onChange={() => handleRegionToggle(region.id)}
                    className="rounded border-gray-300 text-gold focus:ring-gold"
                  />
                  <span>{region.name}</span>
                </label>
              ))}
            </div>
          </section>

          {/* Categories Section */}
          <section className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-5 h-5 text-gold" />
              <h2 className="text-xl font-semibold">Category Preferences</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {CATEGORIES.map((category) => (
                <label
                  key={category.slug}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={preferences.categories.includes(category.slug)}
                    onChange={() => handleCategoryToggle(category.slug)}
                    className="rounded border-gray-300 text-gold focus:ring-gold"
                  />
                  <span>{category.name}</span>
                </label>
              ))}
            </div>
          </section>

          {/* Theme Section */}
          <section className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Palette className="w-5 h-5 text-gold" />
              <h2 className="text-xl font-semibold">Theme Preferences</h2>
            </div>
            <div className="flex space-x-4">
              {['light', 'dark'].map((theme) => (
                <label
                  key={theme}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="theme"
                    value={theme}
                    checked={preferences.theme === theme}
                    onChange={(e) => setPreferences(prev => ({ ...prev, theme: e.target.value as 'light' | 'dark' }))}
                    className="text-gold focus:ring-gold"
                  />
                  <span className="capitalize">{theme}</span>
                </label>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}