import React from 'react';
import { Article } from '../../types/article';

interface RelatedArticlesProps {
  articles: Article[];
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <article key={article.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold mb-2">{article.title}</h3>
              <p className="text-gray-600 text-sm">{article.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}