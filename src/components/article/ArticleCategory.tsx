import React from 'react';
import { Link } from 'react-router-dom';
import { getCategoryColor } from '../../utils/categoryUtils';

interface ArticleCategoryProps {
  category: string;
  className?: string;
}

export default function ArticleCategory({ category, className = '' }: ArticleCategoryProps) {
  const color = getCategoryColor(category);
  
  return (
    <Link
      to={`/category/${category.toLowerCase()}`}
      className={`inline-flex px-3 py-1 rounded-full text-sm font-semibold ${className}`}
      style={{ 
        backgroundColor: `${color}20`,
        color: color 
      }}
    >
      {category}
    </Link>
  );
}