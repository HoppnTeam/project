import React from 'react';
import { Mic, Play, Pause } from 'lucide-react';

interface PodcastDirectoryProps {
  filter: string;
}

export default function PodcastDirectory({ filter }: PodcastDirectoryProps) {
  const podcasts = [
    {
      id: 1,
      title: "The Daily Observer",
      host: "Sarah Johnson",
      thumbnail: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800",
      category: "news",
      duration: "45:00",
      episodes: 125
    },
    {
      id: 2,
      title: "Cultural Conversations",
      host: "Michael Chen",
      thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800",
      category: "culture",
      duration: "30:00",
      episodes: 89
    }
  ];

  const filteredPodcasts = filter === 'all'
    ? podcasts
    : podcasts.filter(podcast => podcast.category === filter);

  return (
    <div className="space-y-6">
      {filteredPodcasts.map((podcast) => (
        <div key={podcast.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex">
            <div className="w-48 h-48">
              <img
                src={podcast.thumbnail}
                alt={podcast.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">{podcast.title}</h3>
                  <p className="text-gray-600">Hosted by {podcast.host}</p>
                </div>
                <button className="p-3 bg-gold rounded-full text-black hover:bg-opacity-90 transition-colors">
                  <Play className="w-5 h-5" fill="currentColor" />
                </button>
              </div>
              <div className="mt-4 flex items-center text-sm text-gray-500 space-x-4">
                <span className="flex items-center">
                  <Mic className="w-4 h-4 mr-1" />
                  {podcast.episodes} episodes
                </span>
                <span>{podcast.duration} avg.</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}