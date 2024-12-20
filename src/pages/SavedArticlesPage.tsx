import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Bookmark, Trash2 } from 'lucide-react';
import { useArticles } from '../hooks/useArticles';

export default function SavedArticlesPage() {
  const { user } = useAuth0();
  const articles = useArticles(); // In a real app, fetch saved articles
  const [view, setView] = React.useState<'grid' | 'list'>('grid');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-2">
            <Bookmark className="w-6 h-6 text-gold" />
            <h1 className="text-3xl font-bold">Saved Articles</h1>
          </div>
          <div className="flex items-center space-x-4">
            <select
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
              onChange={(e) => setView(e.target.value as 'grid' | 'list')}
              value={view}
            >
              <option value="grid">Grid View</option>
              <option value="list">List View</option>
            </select>
          </div>
        </div>

        {view === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gold text-sm font-semibold">{article.category}</span>
                    <button className="text-red-500 hover:text-red-600">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <h3 className="font-bold mb-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm">{article.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {articles.map((article) => (
              <article key={article.id} className="bg-white rounded-lg shadow-lg p-4 flex gap-4">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-48 h-32 object-cover rounded"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-gold text-sm font-semibold">{article.category}</span>
                      <h3 className="font-bold mt-1">{article.title}</h3>
                    </div>
                    <button className="text-red-500 hover:text-red-600">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-gray-600 mt-2">{article.excerpt}</p>
                  <span className="text-sm text-gray-500 mt-2 block">{article.date}</span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}