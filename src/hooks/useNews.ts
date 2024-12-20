import { useState, useEffect } from 'react';
import { NewsItem, getNews } from '../services/news';

export function useNews(category: string) {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        setLoading(true);
        setError(null);
        const data = await getNews(category);
        setNews(data);
      } catch (err) {
        setError('Failed to fetch news');
        console.error('Error fetching news:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, [category]);

  return { news, loading, error };
}