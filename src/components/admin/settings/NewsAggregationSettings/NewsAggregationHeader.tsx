import React from 'react';
import { AlertCircle } from 'lucide-react';
import LoadingSpinner from '../../../ui/LoadingSpinner';

interface NewsAggregationHeaderProps {
  status: 'idle' | 'saving' | 'error';
  lastUpdate: string | null;
}

export default function NewsAggregationHeader({ status, lastUpdate }: NewsAggregationHeaderProps) {
  return (
    <>
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
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-4">
          <div className="flex items-center">
            <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
            <p className="text-red-700">Failed to update settings. Please try again.</p>
          </div>
        </div>
      )}
    </>
  );
}