import React, { useState } from 'react';
import { RefreshCw, Plus, AlertCircle } from 'lucide-react';
import { REGIONS } from '../../../services/news/config/regions';
import { ALL_NEWS_SOURCES } from '../../../services/news/config/sources';
import LoadingSpinner from '../../ui/LoadingSpinner';
import RSSSourceList from './RSSSourceList';
import RegionSelector from './RegionSelector';
import AddFeedModal from './AddFeedModal';

export default function RSSManagement() {
  // Initialize with first available region
  const firstRegion = Object.keys(REGIONS)[0] || 'AFRICA';
  const [selectedRegion, setSelectedRegion] = useState(firstRegion);
  const [selectedSubregion, setSelectedSubregion] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showAddFeed, setShowAddFeed] = useState(false);
  const [sources, setSources] = useState(ALL_NEWS_SOURCES);

  // Guard against missing REGIONS configuration
  if (!REGIONS || Object.keys(REGIONS).length === 0) {
    return (
      <div className="p-6">
        <div className="flex items-center text-red-600">
          <AlertCircle className="w-5 h-5 mr-2" />
          <span>No regions configured</span>
        </div>
      </div>
    );
  }

  const handleRegionChange = (region: string) => {
    if (REGIONS[region]) {
      setSelectedRegion(region);
      setSelectedSubregion('');
    }
  };

  const handleRefresh = async () => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setError(null);
    } catch (err) {
      setError('Failed to refresh feeds');
    } finally {
      setLoading(false);
    }
  };

  const handleAddFeed = async (newSource: any) => {
    try {
      setSources(prev => [...prev, newSource]);
      setShowAddFeed(false);
    } catch (err) {
      setError('Failed to add feed');
    }
  };

  const handleRemoveSource = async (sourceId: string) => {
    try {
      setSources(prev => prev.filter(source => source.id !== sourceId));
    } catch (err) {
      setError('Failed to remove feed');
    }
  };

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
        <div className="flex items-center justify-between mb-6">
          <RegionSelector
            selectedRegion={selectedRegion}
            selectedSubregion={selectedSubregion}
            onRegionChange={handleRegionChange}
            onSubregionChange={setSelectedSubregion}
            regions={REGIONS}
          />
          <button
            onClick={handleRefresh}
            className="p-2 text-gray-600 hover:text-black rounded-full"
            title="Refresh feeds"
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
          <RSSSourceList
            sources={sources}
            selectedRegion={selectedRegion}
            selectedSubregion={selectedSubregion}
            onRemoveSource={handleRemoveSource}
          />
        )}
      </div>

      {showAddFeed && (
        <AddFeedModal
          onClose={() => setShowAddFeed(false)}
          onAdd={handleAddFeed}
          selectedRegion={selectedRegion}
          selectedSubregion={selectedSubregion}
          existingSources={sources}
          regions={REGIONS}
        />
      )}
    </div>
  );
}