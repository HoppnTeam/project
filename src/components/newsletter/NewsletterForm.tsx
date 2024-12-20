import React, { useState } from 'react';
import { Mail, Bell, Globe, Tag } from 'lucide-react';
import { CATEGORIES } from '../../constants/categories';
import { REGIONS } from '../../constants/regions';
import { NewsletterPreferences } from '../../types/newsletter';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<NewsletterPreferences>({
    frequency: 'daily',
    categories: [],
    regions: [],
    format: 'html',
    pushNotifications: true
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription
    setShowPreferences(true);
  };

  return (
    <div className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <Mail className="h-12 w-12 text-gold mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Stay Informed</h2>
            <p className="text-gray-300">
              Subscribe to our newsletter and never miss important updates
            </p>
          </div>

          {!showPreferences ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-gold text-white"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-gold text-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gold text-black px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Customize Your Newsletter</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Newsletter Frequency
                  </label>
                  <div className="grid grid-cols-3 gap-4">
                    {['daily', 'weekly', 'breaking'].map((freq) => (
                      <label
                        key={freq}
                        className="flex items-center space-x-2 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="frequency"
                          value={freq}
                          checked={preferences.frequency === freq}
                          onChange={(e) => setPreferences({
                            ...preferences,
                            frequency: e.target.value as 'daily' | 'weekly' | 'breaking'
                          })}
                          className="text-gold focus:ring-gold"
                        />
                        <span className="capitalize">{freq}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    <Tag className="inline w-4 h-4 mr-2" />
                    Categories of Interest
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {CATEGORIES.map((category) => (
                      <label
                        key={category.slug}
                        className="flex items-center space-x-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={preferences.categories.includes(category.slug)}
                          onChange={(e) => {
                            const newCategories = e.target.checked
                              ? [...preferences.categories, category.slug]
                              : preferences.categories.filter(c => c !== category.slug);
                            setPreferences({ ...preferences, categories: newCategories });
                          }}
                          className="rounded border-gray-600 text-gold focus:ring-gold"
                        />
                        <span>{category.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    <Globe className="inline w-4 h-4 mr-2" />
                    Regions to Follow
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {REGIONS.map((region) => (
                      <label
                        key={region.id}
                        className="flex items-center space-x-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={preferences.regions.includes(region.id as Region)}
                          onChange={(e) => {
                            const newRegions = e.target.checked
                              ? [...preferences.regions, region.id as Region]
                              : preferences.regions.filter(r => r !== region.id);
                            setPreferences({ ...preferences, regions: newRegions });
                          }}
                          className="rounded border-gray-600 text-gold focus:ring-gold"
                        />
                        <span>{region.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    <Bell className="inline w-4 h-4 mr-2" />
                    Push Notifications
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.pushNotifications}
                      onChange={(e) => setPreferences({
                        ...preferences,
                        pushNotifications: e.target.checked
                      })}
                      className="rounded border-gray-600 text-gold focus:ring-gold"
                    />
                    <span>Receive breaking news alerts</span>
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Format
                  </label>
                  <div className="flex space-x-4">
                    {['html', 'text'].map((format) => (
                      <label
                        key={format}
                        className="flex items-center space-x-2 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="format"
                          value={format}
                          checked={preferences.format === format}
                          onChange={(e) => setPreferences({
                            ...preferences,
                            format: e.target.value as 'html' | 'text'
                          })}
                          className="text-gold focus:ring-gold"
                        />
                        <span className="uppercase">{format}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    // Save preferences
                    console.log('Preferences saved:', preferences);
                  }}
                  className="w-full bg-gold text-black px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}