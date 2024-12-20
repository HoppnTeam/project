import React from 'react';
import { CategoryMeta } from '../../types';

interface CategoryHeaderProps {
  category: CategoryMeta;
}

export default function CategoryHeader({ category }: CategoryHeaderProps) {
  return (
    <div className="relative h-64 mb-8">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${category.headerImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <h1 
          className="text-4xl font-bold text-white mb-2"
          style={{ textShadow: `2px 2px 4px ${category.color}` }}
        >
          {category.name}
        </h1>
        <p className="text-lg text-gray-200">{category.description}</p>
      </div>
    </div>
  );
}