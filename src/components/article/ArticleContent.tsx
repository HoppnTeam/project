import React from 'react';
import { ArticleFull } from '../../types/article';

interface ArticleContentProps {
  article: ArticleFull;
}

export default function ArticleContent({ article }: ArticleContentProps) {
  return (
    <article className="prose prose-lg mx-auto px-4 py-8" style={{ fontFamily: 'Helvetica, sans-serif' }}>
      <div 
        dangerouslySetInnerHTML={{ __html: article.content }}
        className="article-content"
      />
    </article>
  );
}