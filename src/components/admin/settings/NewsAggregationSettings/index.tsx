import React, { useState, useEffect } from 'react';
import { AlertCircle, Plus, RotateCcw } from 'lucide-react';
import { useSettingsStore } from '../../../../stores/useSettingsStore';
import { RSSSource } from '../../../../services/rss/types';
import { triggerFeedFetch } from '../../../../services/rss/api/client';
import LoadingSpinner from '../../../ui/LoadingSpinner';
import SourceList from './SourceList';
import AddSourceForm from './AddSourceForm';
import UpdateIntervalSettings from './UpdateIntervalSettings';

export default function NewsAggregationSettings() {
  const {
    aggregationEnabled,
    updateInterval,
    sources,
    setAggregationEnabled,
    setUpdateInterval,
    addSource,
    updateSource,
    removeSource,
    resetToDefaults
  } = useSettingsStore();

  const [showAddForm, setShowAddForm] = useState(false);
  const [editingSource, setEditingSource] = useState<RSSSource | null>(null);
  const [status, setStatus] = useState<'idle' | 'saving' | 'error'>('idle');
  const [lastUpdate, setLastUpdate] = useState<string | null>(null);

  useEffect(() => {
    // Fetch last update time
    fetch('/api/rss/status')
      .then(res => res.json())
      .then(data => {
        if (data.lastUpdate) {
          setLastUpdate(data.lastUpdate);
        }
      })
      .catch(console.error);
  }, []);

  const handleSettingsChange = async () => {
    try {
      setStatus('saving');
      await triggerFeedFetch();
      setStatus('idle');
    } catch (error) {
      console.error('Failed to apply settings:', error);
      setStatus('error');
    }
  };

  const handleEnableChange = async (enabled: boolean) => {
    setAggregationEnabled(enabled);
    await handleSettingsChange();
  };

  const handleAddSource = async (sourceData: Omit<RSSSource, 'id'>) => {
    addSource(sourceData);
    setShowAddForm(false);
    await handleSettingsChange();
  };

  const handleEditSource = async (source: RSSSource) => {
    updateSource(source.id, source);
    setEditingSource(null);
    await handleSettingsChange();
  };

  const handleDeleteSource = async (id: string) => {
    if (window.confirm('Are you sure you want to remove this source?')) {
      removeSource(id);
      await handleSettingsChange();
    }
  };

  const handleReset = async () => {
    if (window.confirm('Are you sure you want to reset to default settings?')) {
      resetToDefaults();
      await handleSettingsChange();
    }
  };

  return (
    <div className="space-y-6 bg-white p-6 rounded-lg shadow">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">News Aggregation Settings</h3>
        {status === 'saving' && (
          <div className="flex items-center text-blue-600">
            <LoadingSpinner size="small" />
            <span className="ml-2">Updating settings...</span>
          </div>
        )}
        {lastUpdate && (
          <div className="text-sm text-gray-500">
            Last updated: {new Date(lastUpdate).toLocaleString()}
          </div>
        )}
      </div>

      {status === 'error' && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4">
          <div className="flex items-center">
            <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
            <p className="text-red-700">Failed to update settings. Please try again.</p>
          </div>
        </div>
      )}

      {/* Enable/Disable Toggle */}
      <div className="flex items-center justify-between py-4 border-b">
        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={aggregationEnabled}
              onChange={(e) => handleEnableChange(e.target.checked)}
              className="rounded border-gray-300 text-gold focus:ring-gold"
            />
            <span className="ml-2">Enable News Aggregation</span>
          </label>
          <p className="text-sm text-gray-500 mt-1">
            When enabled, the system will automatically fetch and aggregate news from configured sources
          </p>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={handleReset}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset to Defaults</span>
          </button>
          <button
            onClick={() => setShowAddForm(true)}
            className="flex items-center space-x-2 bg-gold text-black px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span>Add Source</span>
          </button>
        </div>
      </div>

      {/* Update Interval */}
      <UpdateIntervalSettings
        interval={updateInterval}
        onIntervalChange={setUpdateInterval}
      />

      {/* Source List */}
      <SourceList
        sources={sources}
        onDeleteSource={handleDeleteSource}
        onEditSource={setEditingSource}
      />

      {/* Add/Edit Source Modal */}
      {(showAddForm || editingSource) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
            <AddSourceForm
              onClose={() => {
                setShowAddForm(false);
                setEditingSource(null);
              }}
              onSubmit={editingSource ? handleEditSource : handleAddSource}
              initialData={editingSource || undefined}
            />
          </div>
        </div>
      )}
    </div>
  );
}