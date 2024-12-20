import React from 'react';
import { Clock } from 'lucide-react';
import { useSettingsStore } from '../../../../stores/useSettingsStore';

export default function UpdateIntervalSettings() {
  const { updateInterval, setUpdateInterval } = useSettingsStore();

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Clock className="w-5 h-5 text-gold" />
        <h3 className="text-lg font-semibold">Update Interval</h3>
      </div>
      
      <div className="flex items-center space-x-4">
        <select
          value={updateInterval}
          onChange={(e) => setUpdateInterval(Number(e.target.value))}
          className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent"
        >
          <option value={15}>Every 15 minutes</option>
          <option value={30}>Every 30 minutes</option>
          <option value={60}>Every hour</option>
          <option value={120}>Every 2 hours</option>
          <option value={360}>Every 6 hours</option>
          <option value={720}>Every 12 hours</option>
          <option value={1440}>Every 24 hours</option>
        </select>
        
        <p className="text-sm text-gray-500">
          Content will be fetched from all enabled sources at this interval
        </p>
      </div>
    </div>
  );
}