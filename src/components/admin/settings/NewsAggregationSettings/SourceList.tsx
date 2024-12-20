import React from 'react';
import { Trash2, Edit } from 'lucide-react';
import { Source } from '../../../../types/scraper';

interface SourceListProps {
  sources: Source[];
  onDeleteSource: (url: string) => void;
  onEditSource: (source: Source) => void;
}

export default function SourceList({ sources, onDeleteSource, onEditSource }: SourceListProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Configured Sources</h3>
      <div className="bg-gray-50 rounded-lg p-4">
        {sources.length === 0 ? (
          <p className="text-gray-500">No sources configured yet</p>
        ) : (
          <div className="space-y-3">
            {sources.map((source) => (
              <div
                key={source.url}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm"
              >
                <div>
                  <p className="font-medium">{source.url}</p>
                  <div className="flex space-x-4 text-sm text-gray-500">
                    <span>Category: {source.category}</span>
                    <span>Region: {source.region}</span>
                    <span>Type: {source.type}</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => onEditSource(source)}
                    className="p-2 text-gray-600 hover:text-gold transition-colors"
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => onDeleteSource(source.url)}
                    className="p-2 text-red-500 hover:text-red-600 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}