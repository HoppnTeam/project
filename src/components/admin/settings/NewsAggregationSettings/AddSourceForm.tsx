import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Source } from '../../../../types/scraper';
import { CATEGORIES } from '../../../../constants/categories';
import { REGIONS } from '../../../../constants/regions';

interface AddSourceFormProps {
  onClose: () => void;
  onSubmit: (source: Omit<Source, 'id'>) => void;
  initialData?: Source;
}

export default function AddSourceForm({ onClose, onSubmit, initialData }: AddSourceFormProps) {
  const [formData, setFormData] = useState<Omit<Source, 'id'>>({
    url: initialData?.url || '',
    category: initialData?.category || '',
    region: initialData?.region || '',
    type: initialData?.type || 'rss',
    enabled: initialData?.enabled ?? true
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">
          {initialData ? 'Edit Source' : 'Add New Source'}
        </h3>
        <button
          type="button"
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Source URL
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

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent"
            required
          >
            <option value="">Select Category</option>
            {CATEGORIES.map((category) => (
              <option key={category.slug} value={category.slug}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Region
          </label>
          <select
            value={formData.region}
            onChange={(e) => setFormData({ ...formData, region: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent"
            required
          >
            <option value="">Select Region</option>
            {REGIONS.map((region) => (
              <option key={region.id} value={region.id}>
                {region.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Source Type
        </label>
        <select
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value as 'rss' | 'website' })}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent"
          required
        >
          <option value="rss">RSS Feed</option>
          <option value="website">Website</option>
        </select>
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="enabled"
          checked={formData.enabled}
          onChange={(e) => setFormData({ ...formData, enabled: e.target.checked })}
          className="rounded border-gray-300 text-gold focus:ring-gold"
        />
        <label htmlFor="enabled" className="ml-2 text-sm text-gray-700">
          Enable this source
        </label>
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
          {initialData ? 'Save Changes' : 'Add Source'}
        </button>
      </div>
    </form>
  );
}