import React from 'react';
import { ArticleFull } from '../../types/article';
import ArticleContent from './ArticleContent';
import AuthorInfo from './AuthorInfo';

interface ArticleContainerProps {
  article: ArticleFull;
}

export default function ArticleContainer({ article }: ArticleContainerProps) {
  return (
    <div className="article-container">
      <ArticleContent article={article} />
      <AuthorInfo author={article.author} />
    </div>
  );
}