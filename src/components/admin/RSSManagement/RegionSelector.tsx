import React from 'react';
import { Region } from '../../../services/news/types';

interface RegionSelectorProps {
  selectedRegion: string;
  selectedSubregion: string;
  onRegionChange: (region: string) => void;
  onSubregionChange: (subregion: string) => void;
  regions: Record<string, Region>;
}

export default function RegionSelector({
  selectedRegion,
  selectedSubregion,
  onRegionChange,
  onSubregionChange,
  regions
}: RegionSelectorProps) {
  const currentRegion = regions[selectedRegion];
  
  // Guard against missing region
  if (!currentRegion) return null;
  
  return (
    <div className="flex space-x-4">
      <select
        value={selectedRegion}
        onChange={(e) => onRegionChange(e.target.value)}
        className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent"
      >
        {Object.entries(regions).map(([key, region]) => (
          <option key={key} value={key}>
            {region.name}
          </option>
        ))}
      </select>

      {currentRegion.subregions && Object.keys(currentRegion.subregions).length > 0 && (
        <select
          value={selectedSubregion}
          onChange={(e) => onSubregionChange(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent"
        >
          <option value="">All Subregions</option>
          {Object.entries(currentRegion.subregions).map(([key, subregion]) => (
            <option key={key} value={key}>
              {subregion.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}