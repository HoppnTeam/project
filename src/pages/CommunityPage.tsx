import React, { useState } from 'react';
import { Calendar, Briefcase, Store, Filter } from 'lucide-react';
import EventsCalendar from '../components/community/EventsCalendar';
import JobBoard from '../components/community/JobBoard';
import BusinessDirectory from '../components/community/BusinessDirectory';
import { REGIONS } from '../constants/regions';

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState<'events' | 'jobs' | 'business'>('events');
  const [selectedRegion, setSelectedRegion] = useState<string>('');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Community Hub</h1>
          <p className="text-xl text-gray-300">Connect, Share, and Grow with Black Observer Community</p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-8">
            <button
              onClick={() => setActiveTab('events')}
              className={`py-4 px-2 flex items-center space-x-2 border-b-2 ${
                activeTab === 'events' ? 'border-gold text-gold' : 'border-transparent'
              }`}
            >
              <Calendar className="w-5 h-5" />
              <span>Events</span>
            </button>
            <button
              onClick={() => setActiveTab('jobs')}
              className={`py-4 px-2 flex items-center space-x-2 border-b-2 ${
                activeTab === 'jobs' ? 'border-gold text-gold' : 'border-transparent'
              }`}
            >
              <Briefcase className="w-5 h-5" />
              <span>Jobs</span>
            </button>
            <button
              onClick={() => setActiveTab('business')}
              className={`py-4 px-2 flex items-center space-x-2 border-b-2 ${
                activeTab === 'business' ? 'border-gold text-gold' : 'border-transparent'
              }`}
            >
              <Store className="w-5 h-5" />
              <span>Business Directory</span>
            </button>
          </div>
        </div>
      </div>

      {/* Region Filter */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Filter className="w-5 h-5 text-gray-500" />
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent"
            >
              <option value="">All Regions</option>
              {REGIONS.map((region) => (
                <option key={region.id} value={region.id}>
                  {region.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {activeTab === 'events' && <EventsCalendar region={selectedRegion} />}
        {activeTab === 'jobs' && <JobBoard region={selectedRegion} />}
        {activeTab === 'business' && <BusinessDirectory region={selectedRegion} />}
      </div>
    </div>
  );
}