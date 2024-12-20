import React, { useState } from 'react';
import { Menu, X, Newspaper, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import SearchBar from './search/SearchBar';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Newspaper className="h-8 w-8 text-gold" />
            <span className="text-2xl font-bold">Black Observer</span>
          </Link>

          {/* Search and Profile */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block w-96">
              <SearchBar />
            </div>
            <Link 
              to="/dashboard"
              className="flex items-center space-x-2 bg-gold text-black px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              <User className="w-4 h-4" />
              <span>Profile</span>
            </Link>
            <button 
              className="md:hidden p-2 hover:text-gold transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <SearchBar />
          </div>
        )}
      </div>
    </header>
  );
}