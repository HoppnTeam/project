import { NewsItem } from './types';
import { fetchRSSFeeds } from './fetchers/rssFetcher';
import { calculateNewsScore } from './utils/scoring';
import { getCachedNews, setCachedNews } from './utils/cache';
import { REGIONS } from './config/regions';

export async function getRegionalNews(regionId: string): Promise<NewsItem[]> {
  const cacheKey = `news_${regionId}`;
  const cached = getCachedNews(cacheKey);
  if (cached) return cached;

  const region = REGIONS.find(r => r.id === regionId);
  if (!region) {
    throw new Error(`Invalid region: ${regionId}`);
  }

  try {
    // Fetch news for each country in the region
    const newsPromises = region.countries.map(country => 
      fetchRSSFeeds(country)
    );

    const results = await Promise.all(newsPromises);
    const allNews = results.flat();

    // Score and sort news items
    const scoredNews = allNews.map(item => ({
      ...item,
      score: calculateNewsScore(item)
    }));

    const sortedNews = scoredNews
      .sort((a, b) => b.score - a.score)
      .map(({ score, ...item }) => item);

    setCachedNews(cacheKey, sortedNews);
    return sortedNews;

  } catch (error) {
    console.error('Error aggregating regional news:', error);
    return [];
  }
}