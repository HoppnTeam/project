import React from 'react';
import { Plus, RotateCcw } from 'lucide-react';

interface EnableAggregationProps {
  enabled: boolean;
  onEnableChange: (enabled: boolean) => void;
  onReset: () => void;
  onAddSource: () => void;
}

export default function EnableAggregation({ 
  enabled, 
  onEnableChange, 
  onReset, 
  onAddSource 
}: EnableAggregationProps) {
  return (
    <div className="flex items-center justify-between py-4 border-b">
      <div>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={enabled}
            onChange={(e) => onEnableChange(e.target.checked)}
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
          onClick={onReset}
          className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reset to Defaults</span>
        </button>
        <button
          onClick={onAddSource}
          className="flex items-center space-x-2 bg-gold text-black px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>Add Source</span>
        </button>
      </div>
    </div>
  );
}