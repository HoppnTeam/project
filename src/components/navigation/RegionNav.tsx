import React from 'react';
import { REGIONS } from '../../constants/regions';

interface RegionNavProps {
  selectedRegion: string;
  onRegionChange: (region: string) => void;
}

export default function RegionNav({ selectedRegion, onRegionChange }: RegionNavProps) {
  return (
    <nav className="bg-gray-100 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap justify-center space-x-8">
          <li>
            <button
              onClick={() => onRegionChange('')}
              className={`py-3 px-4 ${
                selectedRegion === '' ? 'text-gold font-semibold' : 'text-gray-600'
              }`}
            >
              All Regions
            </button>
          </li>
          {REGIONS.map((region) => (
            <li key={region.id}>
              <button
                onClick={() => onRegionChange(region.id)}
                className={`py-3 px-4 ${
                  selectedRegion === region.id ? 'text-gold font-semibold' : 'text-gray-600'
                }`}
              >
                {region.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}