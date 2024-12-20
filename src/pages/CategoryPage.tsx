import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CATEGORIES } from '../constants/categories';
import PageHeader from '../components/layout/PageHeader';
import CategoryHeader from '../components/category/CategoryHeader';
import RegionNav from '../components/navigation/RegionNav';
import ArticleGrid from '../components/category/ArticleGrid';
import { useArticles } from '../hooks/useArticles';

export default function CategoryPage() {
  const { slug } = useParams();
  const [selectedRegion, setSelectedRegion] = useState('');
  const { articles, loading, error } = useArticles(slug, selectedRegion || undefined);
  
  const category = CATEGORIES.find(cat => cat.slug === slug);
  
  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Category not found</p>
      </div>
    );
  }

  return (
    <div>
      <div className="container mx-auto px-4 py-6">
        <PageHeader title={category.name} />
      </div>
      <CategoryHeader category={category} />
      <RegionNav
        selectedRegion={selectedRegion}
        onRegionChange={setSelectedRegion}
      />
      <main className="container mx-auto px-4 py-8">
        <ArticleGrid
          articles={articles}
          categoryColor={category.color}
          loading={loading}
          error={error}
        />
      </main>
    </div>
  );
}