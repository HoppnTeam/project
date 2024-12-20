import React from 'react';
import { Play, Volume2, Settings } from 'lucide-react';

interface VideoPlayerProps {
  filter: string;
}

export default function VideoPlayer({ filter }: VideoPlayerProps) {
  const videos = [
    {
      id: 1,
      title: "Breaking News: Global Climate Summit",
      thumbnail: "https://images.unsplash.com/photo-1623177623442-979c1e42c255?auto=format&fit=crop&w=800",
      duration: "10:25",
      category: "news",
      views: "125K"
    },
    {
      id: 2,
      title: "Cultural Festival Highlights",
      thumbnail: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800",
      duration: "15:30",
      category: "culture",
      views: "98K"
    }
  ];

  const filteredVideos = filter === 'all' 
    ? videos 
    : videos.filter(video => video.category === filter);

  return (
    <div className="space-y-8">
      {/* Featured Video Player */}
      <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
        <img
          src={videos[0].thumbnail}
          alt={videos[0].title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <button className="p-4 bg-gold rounded-full hover:bg-opacity-90 transition-colors">
            <Play className="w-8 h-8 text-black" fill="currentColor" />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black">
          <h3 className="text-white text-xl font-bold">{videos[0].title}</h3>
          <div className="flex items-center space-x-4 text-gray-300 mt-2">
            <span>{videos[0].duration}</span>
            <span>{videos[0].views} views</span>
          </div>
        </div>
        <div className="absolute bottom-4 right-4 flex items-center space-x-4">
          <button className="p-2 text-white hover:text-gold">
            <Volume2 className="w-5 h-5" />
          </button>
          <button className="p-2 text-white hover:text-gold">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video) => (
          <div key={video.id} className="group cursor-pointer">
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center transition-opacity">
                <Play className="w-12 h-12 text-gold opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" />
              </div>
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 px-2 py-1 rounded text-white text-sm">
                {video.duration}
              </div>
            </div>
            <h3 className="mt-2 font-semibold group-hover:text-gold transition-colors">
              {video.title}
            </h3>
            <div className="text-sm text-gray-600">
              {video.views} views
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}