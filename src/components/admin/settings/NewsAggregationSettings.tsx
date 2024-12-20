import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Save, AlertCircle } from 'lucide-react';
import { useSettingsStore, Source } from '../../../stores/useSettingsStore';
import { CATEGORIES } from '../../../constants/categories';
import { REGIONS } from '../../../constants/regions';

export default function NewsAggregationSettings() {
  const {
    aggregationEnabled,
    updateInterval,
    sources,
    setAggregationEnabled,
    setUpdateInterval,
    addSource,
    updateSource,
    removeSource
  } = useSettingsStore();

  const [scrapingStatus, setScrapingStatus] = useState<'idle' | 'running' | 'error'>('idle');
  const [lastUpdate, setLastUpdate] = useState<string | null>(null);

  const [newSource, setNewSource] = useState<Omit<Source, 'id'>>({
    url: '',
    category: '',
    region: '',
    type: 'rss',
    enabled: true
  });

  const handleAddSource = async () => {
    if (!isValidSource()) return;
    
    addSource(newSource);
    // Reset form after adding
    setNewSource({
      url: '',
      category: '',
      region: '',
      type: 'rss',
      enabled: true
    });

    // Trigger immediate scrape for the new source
    try {
      setScrapingStatus('running');
      await fetch('/api/scrape', { method: 'POST' });
      setScrapingStatus('idle');
      setLastUpdate(new Date().toISOString());
    } catch (error) {
      setScrapingStatus('error');
      console.error('Failed to trigger scraping:', error);
    }
  };

  const isValidSource = () => {
    return newSource.url && newSource.category && newSource.region;
  };

  useEffect(() => {
    // Fetch last update time on component mount
    fetch('/api/scrape/status')
      .then(res => res.json())
      .then(data => {
        if (data.lastUpdate) {
          setLastUpdate(data.lastUpdate);
        }
      })
      .catch(console.error);
  }, []);

  return (
    <div className="space-y-6 bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">News Aggregation Settings</h3>
        {scrapingStatus === 'running' && (
          <div className="flex items-center text-blue-600">
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-600 border-t-transparent mr-2" />
            Updating content...
          </div>
        )}
        {lastUpdate && (
          <div className="text-sm text-gray-500">
            Last updated: {new Date(lastUpdate).toLocaleString()}
          </div>
        )}
      </div>

      {/* Rest of the component remains the same */}
      {/* ... */}
    </div>
  );
}