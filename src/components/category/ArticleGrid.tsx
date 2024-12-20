import React from 'react';
import { Clock, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Article } from '../../types';

interface ArticleGridProps {
  articles: Article[];
  categoryColor: string;
  loading?: boolean;
  error?: string | null;
}

export default function ArticleGrid({ articles, categoryColor, loading, error }: ArticleGridProps) {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2" style={{ borderColor: categoryColor }}></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-600">
        <p>{error}</p>
      </div>
    );
  }

  if (!articles || articles.length === 0) {
    return (
      <div className="text-center py-8 text-gray-600">
        <p>No articles found in this category.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <Link
          key={article.id}
          to={`/article/${article.id}`}
          className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <span 
                className="text-sm font-semibold"
                style={{ color: categoryColor }}
              >
                {article.region}
              </span>
              <span className="text-sm text-gray-500">
                {new Date(article.date).toLocaleDateString()}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2 line-clamp-2">{article.title}</h3>
            <p className="text-gray-600 line-clamp-3">{article.excerpt}</p>
            <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{article.readingTime || '5'} min read</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="w-4 h-4" />
                <span>{article.views || '0'} views</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}