import React from 'react';
import { ArticleFull, Comment } from '../../types/article';
import RelatedArticles from './RelatedArticles';
import Comments from './Comments';

interface RelatedContentProps {
  article: ArticleFull;
  comments: Comment[];
}

export default function RelatedContent({ article, comments }: RelatedContentProps) {
  return (
    <div className="related-content mt-12">
      <RelatedArticles articles={article.relatedArticles} />
      <Comments comments={comments} />
    </div>
  );
}