import React from 'react';
import { Compass } from 'lucide-react';
import { useArticles } from '../../hooks/useArticles';
import TrendingSection from './TrendingSection';
import RecommendedSection from './RecommendedSection';
import LoadingSpinner from '../ui/LoadingSpinner';
import ErrorMessage from '../ui/ErrorMessage';

export default function DiscoverSection() {
  const { articles, loading, error } = useArticles();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  // Get random articles for trending and recommended sections
  const shuffledArticles = [...articles].sort(() => Math.random() - 0.5);
  const trendingArticles = shuffledArticles.slice(0, 3);
  const recommendedArticles = shuffledArticles.slice(3, 6);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-2 mb-8">
          <Compass className="w-6 h-6 text-gold" />
          <h2 className="text-2xl font-bold">Discover</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <TrendingSection articles={trendingArticles} />
          <RecommendedSection articles={recommendedArticles} />
        </div>
      </div>
    </section>
  );
}