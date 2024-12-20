import { NewsItem } from './types';
import { fetchRSSFeeds } from './fetchers/rssFetcher';
import { calculateNewsScore } from './utils/scoring';
import { getCachedNews, setCachedNews } from './utils/cache';
import { ALL_NEWS_SOURCES } from './config/sources';
import { REGIONS } from './config/regions';

/**
 * Fetches news for a specific category or region
 */
export async function getNews(category: string): Promise<NewsItem[]> {
  const cacheKey = `news_${category}`;
  const cached = getCachedNews(cacheKey);
  
  if (cached) {
    return cached;
  }

  try {
    // Fetch news from RSS feeds
    const newsItems = await fetchRSSFeeds(category);

    // Score and sort news items
    const scoredNews = newsItems
      .map(item => ({
        ...item,
        score: calculateNewsScore(item)
      }))
      .sort((a, b) => b.score - a.score)
      .map(({ score, ...item }) => item);

    // Cache the results
    setCachedNews(cacheKey, scoredNews);
    
    return scoredNews;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
}

/**
 * Re-export core configurations and types
 */
export {
  ALL_NEWS_SOURCES,
  REGIONS,
  type NewsItem,
  type NewsSource
} from './types';

export { NEWS_CATEGORIES } from './config/categories';