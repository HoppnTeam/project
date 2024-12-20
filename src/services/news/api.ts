import axios from 'axios';
import { NewsItem } from './types';
import { MEDIASTACK_CONFIG } from './config/sources';

export async function fetchMediaStackNews(category: string): Promise<NewsItem[]> {
  try {
    const response = await axios.get(`${MEDIASTACK_CONFIG.baseURL}/news`, {
      params: {
        access_key: MEDIASTACK_CONFIG.apiKey,
        categories: category,
        ...MEDIASTACK_CONFIG.params
      }
    });

    return response.data.data.map((item: any) => ({
      id: item.url,
      title: item.title,
      description: item.description,
      url: item.url,
      publishedAt: item.published_at,
      source: item.source,
      category,
      type: 'api'
    }));
  } catch (error) {
    console.error('MediaStack API Error:', error);
    return [];
  }
}