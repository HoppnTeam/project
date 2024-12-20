import { useState, useEffect } from 'react';
import axios from 'axios';
import { Article } from '../types/article';

const API_BASE_URL = '/api';

export function useNewsApi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchArticles(category?: string, region?: string) {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams();
      if (category) params.append('category', category);
      if (region) params.append('region', region);

      const response = await axios.get(`${API_BASE_URL}/articles?${params}`);
      return response.data;
    } catch (err) {
      setError('Failed to fetch articles');
      return [];
    } finally {
      setLoading(false);
    }
  }

  async function fetchArticleById(id: string): Promise<Article | null> {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${API_BASE_URL}/articles/${id}`);
      return response.data;
    } catch (err) {
      setError('Failed to fetch article');
      return null;
    } finally {
      setLoading(false);
    }
  }

  return {
    fetchArticles,
    fetchArticleById,
    loading,
    error
  };
}