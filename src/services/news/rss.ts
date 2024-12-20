import axios from 'axios';
import { NewsItem } from './types';
import { NEWS_SOURCES } from './config/sources';

export async function fetchRSSFeed(feedUrl: string, category: string): Promise<NewsItem[]> {
  try {
    const response = await axios.get(feedUrl);
    const parser = new DOMParser();
    const xml = parser.parseFromString(response.data, 'text/xml');
    const items = xml.querySelectorAll('item');

    return Array.from(items).map(item => ({
      id: item.querySelector('guid')?.textContent || item.querySelector('link')?.textContent || '',
      title: item.querySelector('title')?.textContent || '',
      description: item.querySelector('description')?.textContent || '',
      url: item.querySelector('link')?.textContent || '',
      publishedAt: item.querySelector('pubDate')?.textContent || new Date().toISOString(),
      source: xml.querySelector('channel > title')?.textContent || '',
      category,
      type: 'rss'
    }));
  } catch (error) {
    console.error(`Error fetching RSS feed ${feedUrl}:`, error);
    return [];
  }
}

export async function fetchAllRSSNews(category: string): Promise<NewsItem[]> {
  const feedPromises = NEWS_SOURCES
    .filter(source => source.feeds[category])
    .map(source => fetchRSSFeed(source.feeds[category], category));

  const results = await Promise.all(feedPromises);
  return results.flat();
}