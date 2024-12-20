import { useState, useEffect } from 'react';
import { NewsItem } from '../services/news/types';
import { getNews } from '../services/news';
import { REGIONS } from '../services/news/config/regions';

export function useRegionalNews(regionId: string) {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRegionalNews() {
      try {
        setLoading(true);
        setError(null);
        
        const region = REGIONS.find(r => r.id === regionId);
        if (!region) {
          throw new Error('Invalid region');
        }

        const promises = region.countries.map(country => getNews(country));
        const results = await Promise.all(promises);
        
        const combinedNews = results
          .flat()
          .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

        setNews(combinedNews);
      } catch (err) {
        setError('Failed to fetch regional news');
        console.error('Error fetching regional news:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchRegionalNews();
  }, [regionId]);

  return { news, loading, error };
}