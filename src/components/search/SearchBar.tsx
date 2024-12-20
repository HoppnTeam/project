import React, { useState } from 'react';
import { Search, Calendar, Tag, MapPin, X } from 'lucide-react';
import { CATEGORIES } from '../../constants/categories';
import { REGIONS } from '../../constants/regions';

interface SearchFilters {
  date: string;
  category: string;
  region: string;
  contentType: string;
}

export default function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({
    date: '',
    category: '',
    region: '',
    contentType: ''
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search with filters
  };

  return (
    <div className="relative">
      <form onSubmit={handleSearch} className="w-full">
        <div className="relative">
          <input
            type="search"
            placeholder="Search articles, topics, or keywords..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-gold text-white"
            onFocus={() => setIsExpanded(true)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          {isExpanded && (
            <button
              type="button"
              onClick={() => setIsExpanded(false)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {isExpanded && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl p-4 z-50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  Date
                </label>
                <select
                  value={filters.date}
                  onChange={(e) => setFilters({ ...filters, date: e.target.value })}
                  className="w-full px-3 py-1 rounded border focus:ring-2 focus:ring-gold focus:border-transparent"
                >
                  <option value="">Any time</option>
                  <option value="today">Today</option>
                  <option value="week">This week</option>
                  <option value="month">This month</option>
                  <option value="year">This year</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <Tag className="w-4 h-4 inline mr-1" />
                  Category
                </label>
                <select
                  value={filters.category}
                  onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                  className="w-full px-3 py-1 rounded border focus:ring-2 focus:ring-gold focus:border-transparent"
                >
                  <option value="">All categories</option>
                  {CATEGORIES.map((category) => (
                    <option key={category.slug} value={category.slug}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  Region
                </label>
                <select
                  value={filters.region}
                  onChange={(e) => setFilters({ ...filters, region: e.target.value })}
                  className="w-full px-3 py-1 rounded border focus:ring-2 focus:ring-gold focus:border-transparent"
                >
                  <option value="">All regions</option>
                  {REGIONS.map((region) => (
                    <option key={region.id} value={region.id}>
                      {region.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Content Type
                </label>
                <select
                  value={filters.contentType}
                  onChange={(e) => setFilters({ ...filters, contentType: e.target.value })}
                  className="w-full px-3 py-1 rounded border focus:ring-2 focus:ring-gold focus:border-transparent"
                >
                  <option value="">All types</option>
                  <option value="article">Articles</option>
                  <option value="video">Videos</option>
                  <option value="podcast">Podcasts</option>
                  <option value="photo">Photos</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={() => setFilters({ date: '', category: '', region: '', contentType: '' })}
                className="px-4 py-2 text-gray-600 hover:text-black"
              >
                Clear filters
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-gold text-black rounded hover:bg-opacity-90 transition-colors"
              >
                Search
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}