{/* Update Footer component to include Admin Login button */}
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Newspaper, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Existing footer content */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Newspaper className="h-6 w-6 text-gold" />
              <span className="text-xl font-bold">Black Observer</span>
            </div>
            <p className="text-gray-400">Your trusted source for breaking news and in-depth analysis.</p>
          </div>
          
          <div>
            <h3 className="text-gold font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-gold">About Us</a></li>
              <li><a href="/contact" className="hover:text-gold">Contact</a></li>
              <li><a href="/careers" className="hover:text-gold">Careers</a></li>
              <li><a href="/advertise" className="hover:text-gold">Advertise</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gold font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="/politics" className="hover:text-gold">Politics</a></li>
              <li><a href="/business" className="hover:text-gold">Business</a></li>
              <li><a href="/technology" className="hover:text-gold">Technology</a></li>
              <li><a href="/culture" className="hover:text-gold">Culture</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gold font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gold"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="hover:text-gold"><Twitter className="h-6 w-6" /></a>
              <a href="#" className="hover:text-gold"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="hover:text-gold"><Youtube className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex justify-between items-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Black Observer. All rights reserved.</p>
          <Link 
            to="/admin"
            className="flex items-center space-x-2 bg-gold text-black px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            <Lock className="w-4 h-4" />
            <span>Admin Login</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}