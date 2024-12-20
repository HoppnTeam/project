import axios from 'axios';
import { NewsItem } from '../types';
import { parseRSSFeed } from '../utils/parser';
import { ALL_NEWS_SOURCES } from '../config/sources';

export async function fetchRSSFeeds(category: string): Promise<NewsItem[]> {
  const sources = ALL_NEWS_SOURCES.filter(source => source.feeds[category]);
  
  const feedPromises = sources.map(async source => {
    try {
      const response = await axios.get(source.feeds[category]);
      return parseRSSFeed(response.data, source.name);
    } catch (error) {
      console.error(`Error fetching RSS from ${source.name}:`, error);
      return [];
    }
  });

  const results = await Promise.allSettled(feedPromises);
  return results
    .filter((result): result is PromiseFulfilledResult<NewsItem[]> => 
      result.status === 'fulfilled'
    )
    .map(result => result.value)
    .flat();
}