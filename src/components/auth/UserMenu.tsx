import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  User, 
  Settings, 
  BookmarkPlus, 
  Bell, 
  LogOut,
  ChevronDown 
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

export default function UserMenu() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-white"
      >
        <img
          src={user?.picture}
          alt={user?.name}
          className="w-8 h-8 rounded-full"
        />
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
          <Link
            to="/dashboard"
            className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100"
          >
            <User className="w-4 h-4" />
            <span>Dashboard</span>
          </Link>
          <Link
            to="/saved-articles"
            className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100"
          >
            <BookmarkPlus className="w-4 h-4" />
            <span>Saved Articles</span>
          </Link>
          <Link
            to="/notifications"
            className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100"
          >
            <Bell className="w-4 h-4" />
            <span>Notifications</span>
          </Link>
          <Link
            to="/settings"
            className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100"
          >
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </Link>
          <button
            onClick={() => logout()}
            className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 w-full text-left text-red-600"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      )}
    </div>
  );
}