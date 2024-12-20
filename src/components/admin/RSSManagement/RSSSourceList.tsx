import React from 'react';
import { ExternalLink, Trash2 } from 'lucide-react';
import { NewsSource } from '../../../services/news/types';

interface RSSSourceListProps {
  sources: NewsSource[];
  selectedRegion: string;
  selectedSubregion: string;
  onRemoveSource: (id: string) => void;
}

export default function RSSSourceList({ 
  sources, 
  selectedRegion,
  selectedSubregion,
  onRemoveSource 
}: RSSSourceListProps) {
  // Filter sources based on selected region and subregion
  const filteredSources = sources.filter(source => {
    const regionFeeds = source.feeds[selectedRegion.toLowerCase()];
    if (!selectedSubregion) return regionFeeds;
    return regionFeeds && source.feeds[selectedSubregion.toLowerCase()];
  });

  if (filteredSources.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No RSS feeds configured for this region.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {filteredSources.map(source => (
        <div key={source.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <h3 className="font-semibold">{source.name}</h3>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>{Object.keys(source.feeds).length} feeds</span>
              {Object.entries(source.feeds).map(([key, url]) => (
                key === selectedRegion.toLowerCase() && (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-gold"
                  >
                    <ExternalLink className="w-4 h-4 ml-1" />
                    <span className="ml-1">View Feed</span>
                  </a>
                )
              ))}
            </div>
          </div>
          <button
            onClick={() => onRemoveSource(source.id)}
            className="p-2 text-red-600 hover:text-red-800 rounded-full"
            title="Remove feed"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      ))}
    </div>
  );
}