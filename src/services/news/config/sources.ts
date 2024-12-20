import { NewsSource } from '../types';

export const ALL_NEWS_SOURCES: NewsSource[] = [
  {
    id: 'bbc',
    name: 'BBC News',
    feeds: {
      africa: 'http://feeds.bbci.co.uk/news/world/africa/rss.xml',
      business: 'http://feeds.bbci.co.uk/news/business/rss.xml',
      technology: 'http://feeds.bbci.co.uk/news/technology/rss.xml'
    }
  },
  {
    id: 'reuters',
    name: 'Reuters',
    feeds: {
      africa: 'https://www.reuters.com/world/africa/rss',
      business: 'https://www.reuters.com/business/rss',
      technology: 'https://www.reuters.com/technology/rss'
    }
  },
  {
    id: 'aljazeera',
    name: 'Al Jazeera',
    feeds: {
      africa: 'https://www.aljazeera.com/xml/rss/all.xml'
    }
  }
];

export const MEDIASTACK_CONFIG = {
  apiKey: import.meta.env.VITE_MEDIASTACK_API_KEY || '',
  baseURL: 'http://api.mediastack.com/v1',
  params: {
    languages: 'en',
    limit: 50
  }
};

export default {
  ALL_NEWS_SOURCES,
  MEDIASTACK_CONFIG
};