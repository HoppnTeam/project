import { Article } from '../types/article';
import { RSSArticle } from '../services/rss/types';

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800';

export function mapRSSToArticle(rssArticle: RSSArticle): Article {
  if (!rssArticle) {
    throw new Error('Invalid RSS article data');
  }

  const id = parseInt(rssArticle.guid.split('-')[1]) || Date.now();
  const readingTime = Math.ceil((rssArticle.content?.length || 0) / 1000) || 5;
  const views = Math.floor(Math.random() * 1000);

  return {
    id,
    title: rssArticle.title || 'Untitled Article',
    category: rssArticle.category,
    region: rssArticle.region as any,
    image: rssArticle.imageUrl || DEFAULT_IMAGE,
    excerpt: rssArticle.description || '',
    date: rssArticle.pubDate,
    readingTime,
    views,
    content: rssArticle.content || ''
  };
}

export function mapRSSArticles(articles: RSSArticle[]): Article[] {
  if (!Array.isArray(articles)) {
    console.error('Invalid articles data:', articles);
    return [];
  }

  return articles
    .filter(article => article && article.title)
    .map(article => {
      try {
        return mapRSSToArticle(article);
      } catch (error) {
        console.error('Error mapping article:', error);
        return null;
      }
    })
    .filter((article): article is Article => article !== null);
}