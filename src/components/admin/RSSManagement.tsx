import React, { useState } from 'react';
import { RefreshCw, Plus, Trash2, ExternalLink, AlertCircle } from 'lucide-react';
import { useRegionalNews } from '../../hooks/useRegionalNews';
import { REGIONS } from '../../services/news/config/regions';
import { ALL_NEWS_SOURCES } from '../../services/news/config/sources';
import LoadingSpinner from '../ui/LoadingSpinner';

export default function RSSManagement() {
  const [selectedRegion, setSelectedRegion] = useState(REGIONS[0].id);
  const { news, loading, error } = useRegionalNews(selectedRegion);
  const [showAddFeed, setShowAddFeed] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">RSS Feed Management</h2>
        <button
          onClick={() => setShowAddFeed(true)}
          className="flex items-center space-x-2 bg-gold text-black px-4 py-2 rounded-lg hover:bg-opacity-90"
        >
          <Plus className="w-5 h-5" />
          <span>Add Feed</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center space-x-4 mb-6">
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent"
          >
            {REGIONS.map((region) => (
              <option key={region.id} value={region.id}>
                {region.name}
              </option>
            ))}
          </select>
          <button
            onClick={() => {/* Refresh feeds */}}
            className="p-2 text-gray-600 hover:text-black rounded-full"
          >
            <RefreshCw className="w-5 h-5" />
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center py-8">
            <LoadingSpinner />
          </div>
        ) : error ? (
          <div className="flex items-center justify-center py-8 text-red-600">
            <AlertCircle className="w-5 h-5 mr-2" />
            <span>{error}</span>
          </div>
        ) : (
          <div className="space-y-4">
            {ALL_NEWS_SOURCES
              .filter(source => source.feeds[selectedRegion])
              .map(source => (
                <div key={source.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-semibold">{source.name}</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <span>{Object.keys(source.feeds).length} feeds</span>
                      <a
                        href={Object.values(source.feeds)[0]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center hover:text-gold"
                      >
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => {/* Remove feed */}}
                    className="p-2 text-red-600 hover:text-red-800 rounded-full"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}