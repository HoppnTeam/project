// Basic interfaces
export interface NewsSource {
  id: string;
  name: string;
  feeds: Record<string, string>;
}

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  source: string;
  category: string;
  type: 'rss' | 'api';
}

export interface NewsCategory {
  id: string;
  name: string;
  keywords: string[];
}

// Region interfaces
export interface SubRegion {
  id: string;
  name: string;
  countries: string[];
}

export interface Region {
  id: string;
  name: string;
  subregions: Record<string, SubRegion>;
}

// Define and export REGIONS constant
export const REGIONS = {
  AFRICA: {
    id: 'africa',
    name: 'Africa',
    subregions: {
      EAST: {
        id: 'east-africa',
        name: 'East Africa',
        countries: ['kenya', 'tanzania', 'uganda', 'ethiopia']
      },
      WEST: {
        id: 'west-africa',
        name: 'West Africa',
        countries: ['nigeria', 'ghana', 'senegal']
      },
      SOUTH: {
        id: 'southern-africa',
        name: 'Southern Africa',
        countries: ['south-africa', 'zimbabwe', 'mozambique']
      },
      NORTH: {
        id: 'north-africa',
        name: 'North Africa',
        countries: ['egypt', 'morocco', 'tunisia']
      }
    }
  },
  CARIBBEAN: {
    id: 'caribbean',
    name: 'Caribbean',
    subregions: {
      GREATER_ANTILLES: {
        id: 'greater-antilles',
        name: 'Greater Antilles',
        countries: ['jamaica', 'haiti', 'dominican-republic']
      },
      LESSER_ANTILLES: {
        id: 'lesser-antilles',
        name: 'Lesser Antilles',
        countries: ['trinidad-tobago', 'barbados', 'grenada']
      }
    }
  }
} as const;

// Source collection type
export interface NewsSourceCollection {
  [key: string]: NewsSource;
}

// Export the ALL_NEWS_SOURCES constant
export const ALL_NEWS_SOURCES: NewsSourceCollection = {
  'bbc': {
    id: 'bbc',
    name: 'BBC News',
    feeds: {
      africa: 'http://feeds.bbci.co.uk/news/world/africa/rss.xml',
      business: 'http://feeds.bbci.co.uk/news/business/rss.xml',
      technology: 'http://feeds.bbci.co.uk/news/technology/rss.xml'
    }
  },
  'reuters': {
    id: 'reuters',
    name: 'Reuters',
    feeds: {
      africa: 'https://www.reuters.com/world/africa/rss',
      business: 'https://www.reuters.com/business/rss',
      technology: 'https://www.reuters.com/technology/rss'
    }
  },
  'aljazeera': {
    id: 'aljazeera',
    name: 'Al Jazeera',
    feeds: {
      africa: 'https://www.aljazeera.com/xml/rss/all.xml'
    }
  }
};

// Helper functions
export function getSourceById(id: string): NewsSource | undefined {
  return ALL_NEWS_SOURCES[id];
}

export function getSourcesByCategory(category: string): NewsSource[] {
  return Object.values(ALL_NEWS_SOURCES).filter(
    source => source.feeds[category]
  );
}

// Region helper functions
export function getRegionById(id: string): Region | undefined {
  return Object.values(REGIONS).find(region => region.id === id);
}

export function getSubRegionById(regionId: string, subRegionId: string): SubRegion | undefined {
  const region = getRegionById(regionId);
  return region?.subregions[subRegionId];
}

// Default export
export default {
  ALL_NEWS_SOURCES,
  REGIONS,
  getSourceById,
  getSourcesByCategory,
  getRegionById,
  getSubRegionById
};