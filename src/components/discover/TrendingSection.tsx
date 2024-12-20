import React from 'react';
import { TrendingUp } from 'lucide-react';
import { Article } from '../../types/article';

interface TrendingSectionProps {
  articles: Article[];
}

export default function TrendingSection({ articles }: TrendingSectionProps) {
  return (
    <div>
      <div className="flex items-center space-x-2 mb-4">
        <TrendingUp className="w-5 h-5 text-red-600" />
        <h3 className="text-xl font-semibold">Trending Now</h3>
      </div>
      <div className="space-y-4">
        {articles.map((article, index) => (
          <div key={article.id} className="flex items-start space-x-4">
            <span className="text-2xl font-bold text-gold">{index + 1}</span>
            <div>
              <span className="text-sm text-gray-500">{article.category}</span>
              <h4 className="font-semibold hover:text-gold cursor-pointer">
                {article.title}
              </h4>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span>{new Date(article.date).toLocaleDateString()}</span>
                <span>•</span>
                <span>{article.views} views</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}