import React, { useState } from 'react';
import { X } from 'lucide-react';
import { NewsSource } from '../../../services/news/types';
import { REGIONS } from '../../../services/news/config/regions';

interface AddFeedModalProps {
  onClose: () => void;
  onAdd: (feed: NewsSource) => void;
  selectedRegion: string;
  selectedSubregion: string;
  existingSources: NewsSource[];
}

export default function AddFeedModal({
  onClose,
  onAdd,
  selectedRegion,
  selectedSubregion,
  existingSources
}: AddFeedModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    source: ''
  });

  const region = REGIONS[selectedRegion];
  const subregion = selectedSubregion ? region?.subregions[selectedSubregion] : null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const feedKey = subregion ? subregion.id : region.id;
    
    if (formData.source) {
      // Add feed to existing source
      const source = existingSources.find(s => s.id === formData.source);
      if (source) {
        const updatedSource = {
          ...source,
          feeds: {
            ...source.feeds,
            [feedKey]: formData.url
          }
        };
        onAdd(updatedSource);
      }
    } else {
      // Create new source
      const newSource: NewsSource = {
        id: formData.name.toLowerCase().replace(/\s+/g, '-'),
        name: formData.name,
        feeds: {
          [feedKey]: formData.url
        }
      };
      onAdd(newSource);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Add RSS Feed</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Source Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent"
              required
              placeholder="Enter source name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              RSS Feed URL
            </label>
            <input
              type="url"
              value={formData.url}
              onChange={(e) => setFormData({ ...formData, url: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent"
              required
              placeholder="https://example.com/feed.xml"
            />
          </div>

          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-gold text-black rounded-lg hover:bg-opacity-90"
            >
              Add Feed
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}