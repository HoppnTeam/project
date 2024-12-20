import React, { useState } from 'react';
import { 
  BarChart, Users, FileText, Bell, Settings as SettingsIcon, 
  Calendar, Briefcase, Store, Radio, Rss 
} from 'lucide-react';
import ContentManagement from '../components/admin/ContentManagement';
import UserModeration from '../components/admin/UserModeration';
import Analytics from '../components/admin/Analytics';
import NewsletterManagement from '../components/admin/NewsletterManagement';
import Settings from '../components/admin/Settings';
import RSSManagement from '../components/admin/RSSManagement';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<string>('analytics');

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-black text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:w-64 space-y-2">
            <button
              onClick={() => setActiveTab('analytics')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg ${
                activeTab === 'analytics' ? 'bg-gold text-black' : 'bg-white hover:bg-gray-50'
              }`}
            >
              <BarChart className="w-5 h-5" />
              <span>Analytics</span>
            </button>

            <button
              onClick={() => setActiveTab('rss')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg ${
                activeTab === 'rss' ? 'bg-gold text-black' : 'bg-white hover:bg-gray-50'
              }`}
            >
              <Rss className="w-5 h-5" />
              <span>RSS Management</span>
            </button>

            {/* ... other buttons ... */}
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {activeTab === 'analytics' && <Analytics />}
            {activeTab === 'rss' && <RSSManagement />}
            {activeTab === 'content' && <ContentManagement />}
            {activeTab === 'users' && <UserModeration />}
            {activeTab === 'newsletter' && <NewsletterManagement />}
            {activeTab === 'settings' && <Settings />}
          </main>
        </div>
      </div>
    </div>
  );
}