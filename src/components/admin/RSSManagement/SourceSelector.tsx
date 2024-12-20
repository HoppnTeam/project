import React from 'react';
import { ExternalLink } from 'lucide-react';
import { NewsSource } from '../../../services/news/types';

interface SourceSelectorProps {
  sources: NewsSource[];
  selectedSource: string;
  onSourceChange: (sourceId: string) => void;
}

export default function SourceSelector({
  sources,
  selectedSource,
  onSourceChange
}: SourceSelectorProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Select News Source
      </label>
      <div className="flex space-x-4">
        <select
          value={selectedSource}
          onChange={(e) => onSourceChange(e.target.value)}
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent"
        >
          <option value="">Select a source</option>
          {sources.map((source) => (
            <option key={source.id} value={source.id}>
              {source.name}
            </option>
          ))}
        </select>
        {selectedSource && (
          <a
            href={sources.find(s => s.id === selectedSource)?.feeds.main}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 text-gold hover:text-black transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  );
}