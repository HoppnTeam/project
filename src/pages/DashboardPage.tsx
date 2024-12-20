import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { 
  BookmarkPlus, 
  Bell, 
  Globe, 
  Tag,
  ChevronRight,
  Users,
  Film
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DashboardPage() {
  const { user } = useAuth0();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <img
              src={user?.picture}
              alt={user?.name}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h1 className="text-2xl font-bold">{user?.name}</h1>
              <p className="text-gray-600">{user?.email}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Multimedia Link - New Addition */}
            <Link
              to="/multimedia"
              className="flex items-center justify-between p-4 bg-black rounded-lg hover:bg-gray-900 text-white"
            >
              <div className="flex items-center space-x-3">
                <Film className="w-6 h-6 text-gold" />
                <div>
                  <span className="font-semibold block">Multimedia Hub</span>
                  <span className="text-sm text-gray-300">Videos, Podcasts, Photos</span>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gold" />
            </Link>

            {/* Community Link */}
            <Link
              to="/community"
              className="flex items-center justify-between p-4 bg-gold/10 rounded-lg hover:bg-gold/20 border-2 border-gold"
            >
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6 text-gold" />
                <div>
                  <span className="font-semibold block">Community Hub</span>
                  <span className="text-sm text-gray-600">Events, Jobs, Business Directory</span>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gold" />
            </Link>

            {/* Existing Links */}
            <Link
              to="/saved-articles"
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
            >
              <div className="flex items-center space-x-3">
                <BookmarkPlus className="w-6 h-6 text-gold" />
                <span className="font-semibold">Saved Articles</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </Link>

            <Link
              to="/notifications"
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
            >
              <div className="flex items-center space-x-3">
                <Bell className="w-6 h-6 text-gold" />
                <span className="font-semibold">Notifications</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </Link>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Globe className="w-6 h-6 text-gold" />
                <div>
                  <span className="font-semibold block">Followed Regions</span>
                  <span className="text-sm text-gray-600">3 regions</span>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Tag className="w-6 h-6 text-gold" />
                <div>
                  <span className="font-semibold block">Followed Topics</span>
                  <span className="text-sm text-gray-600">5 topics</span>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}