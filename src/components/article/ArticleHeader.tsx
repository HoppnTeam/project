import React from 'react';
import { Clock, Calendar } from 'lucide-react';
import { ArticleFull } from '../../types/article';

interface ArticleHeaderProps {
  article: ArticleFull;
}

export default function ArticleHeader({ article }: ArticleHeaderProps) {
  return (
    <header className="relative h-[60vh] mb-8">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${article.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-12">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-4 text-white mb-4">
            <span className="bg-gold px-3 py-1 rounded-full text-black font-semibold">
              {article.category}
            </span>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{article.readingTime} min read</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Helvetica, sans-serif' }}>
            {article.title}
          </h1>
          <p className="text-xl text-gray-200">{article.excerpt}</p>
        </div>
      </div>
    </header>
  );
}