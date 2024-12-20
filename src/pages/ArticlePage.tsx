import React from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../components/layout/PageHeader';
import ArticleHeader from '../components/article/ArticleHeader';
import ArticleProgress from '../components/article/ArticleProgress';
import ArticleContent from '../components/article/ArticleContent';
import AuthorInfo from '../components/article/AuthorInfo';
import SocialShare from '../components/article/SocialShare';
import RelatedArticles from '../components/article/RelatedArticles';
import Comments from '../components/article/Comments';
import { mockArticle, mockComments } from '../utils/mockData';
import '../styles/article.css';

export default function ArticlePage() {
  const { slug } = useParams();
  const article = mockArticle; // In a real app, fetch article data based on slug

  return (
    <div className="min-h-screen bg-white">
      <ArticleProgress />
      <div className="container mx-auto px-4 py-6">
        <PageHeader 
          title={article.category}
          showBack={true}
        />
      </div>
      
      <ArticleHeader article={article} />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto relative">
          <SocialShare url={window.location.href} title={article.title} />
          
          <div className="article-container">
            <ArticleContent article={article} />
            <AuthorInfo author={article.author} />
          </div>

          <div className="related-content mt-12">
            <RelatedArticles articles={article.relatedArticles} />
            <Comments comments={mockComments} />
          </div>
        </div>
      </div>
    </div>
  );
}