import { useState, useEffect } from 'react';
import { Article } from '../types/article';
import { mockArticles } from '../utils/mockArticles';

export function useArticles(category?: string, region?: string) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API call with mock data
    setLoading(true);
    try {
      let filteredArticles = Object.values(mockArticles).flat();
      
      if (category) {
        filteredArticles = filteredArticles.filter(
          article => article.category.toLowerCase().includes(category.toLowerCase())
        );
      }
      
      if (region) {
        filteredArticles = filteredArticles.filter(
          article => article.region.toLowerCase() === region.toLowerCase()
        );
      }
      
      setArticles(filteredArticles);
      setError(null);
    } catch (err) {
      console.error('Error loading articles:', err);
      setError('Failed to load articles');
      setArticles([]);
    } finally {
      setLoading(false);
    }
  }, [category, region]);

  return { articles, loading, error };
}