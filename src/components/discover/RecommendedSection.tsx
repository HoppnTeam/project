import React from 'react';
import { Sparkles } from 'lucide-react';
import { Article } from '../../types/article';

interface RecommendedSectionProps {
  articles: Article[];
}

export default function RecommendedSection({ articles }: RecommendedSectionProps) {
  return (
    <div>
      <div className="flex items-center space-x-2 mb-4">
        <Sparkles className="w-5 h-5 text-gold" />
        <h3 className="text-xl font-semibold">Recommended for You</h3>
      </div>
      <div className="space-y-4">
        {articles.map((article) => (
          <div key={article.id} className="flex items-start space-x-4">
            <img
              src={article.image}
              alt={article.title}
              className="w-20 h-20 object-cover rounded"
            />
            <div>
              <span className="text-sm text-gray-500">{article.category}</span>
              <h4 className="font-semibold hover:text-gold cursor-pointer">
                {article.title}
              </h4>
              <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                {article.excerpt}
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-500 mt-1">
                <span>{new Date(article.date).toLocaleDateString()}</span>
                <span>•</span>
                <span>{article.readingTime} min read</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}