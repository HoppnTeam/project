import React, { useState } from 'react';
import { Play, Mic, Image, Radio, Filter } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import VideoPlayer from '../components/multimedia/VideoPlayer';
import PodcastDirectory from '../components/multimedia/PodcastDirectory';
import PhotoGallery from '../components/multimedia/PhotoGallery';
import LiveStream from '../components/multimedia/LiveStream';

export default function MultimediaPage() {
  const [activeTab, setActiveTab] = useState<'videos' | 'podcasts' | 'photos' | 'live'>('videos');
  const [selectedFilter, setSelectedFilter] = useState('all');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        <PageHeader title="Multimedia Hub" />
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-8">
            <button
              onClick={() => setActiveTab('videos')}
              className={`py-4 px-2 flex items-center space-x-2 border-b-2 ${
                activeTab === 'videos' ? 'border-gold text-gold' : 'border-transparent'
              }`}
            >
              <Play className="w-5 h-5" />
              <span>Videos</span>
            </button>
            {/* ... rest of the tabs ... */}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {activeTab === 'videos' && <VideoPlayer filter={selectedFilter} />}
        {activeTab === 'podcasts' && <PodcastDirectory filter={selectedFilter} />}
        {activeTab === 'photos' && <PhotoGallery filter={selectedFilter} />}
        {activeTab === 'live' && <LiveStream />}
      </div>
    </div>
  );
}