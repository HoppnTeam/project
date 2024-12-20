import React from 'react';
import { Radio, Users, MessageCircle } from 'lucide-react';

export default function LiveStream() {
  return (
    <div className="space-y-8">
      {/* Live Stream Player */}
      <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1623177623442-979c1e42c255?auto=format&fit=crop&w=1920"
          alt="Live Stream"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 flex items-center space-x-2">
          <span className="flex items-center bg-red-600 text-white px-3 py-1 rounded-full text-sm">
            <Radio className="w-4 h-4 mr-1 animate-pulse" />
            LIVE
          </span>
          <span className="bg-black bg-opacity-75 text-white px-3 py-1 rounded-full text-sm">
            <Users className="w-4 h-4 inline mr-1" />
            1.2K watching
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black">
          <h2 className="text-white text-xl font-bold">Breaking News Coverage</h2>
          <p className="text-gray-300">Live from the Global Climate Summit</p>
        </div>
      </div>

      {/* Chat Section */}
      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold">Live Chat</h3>
          <span className="text-sm text-gray-500">1.2K participants</span>
        </div>
        <div className="h-64 overflow-y-auto border rounded-lg p-4 mb-4">
          {/* Chat messages would go here */}
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=50"
                alt="User"
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="text-sm font-semibold">Sarah J.</p>
                <p className="text-sm text-gray-600">This is incredible coverage!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
          />
          <button className="px-4 py-2 bg-gold text-black rounded-lg hover:bg-opacity-90 transition-colors">
            <MessageCircle className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}