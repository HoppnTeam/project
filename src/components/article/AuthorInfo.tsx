import React from 'react';
import { Author } from '../../types/article';

interface AuthorInfoProps {
  author: Author;
}

export default function AuthorInfo({ author }: AuthorInfoProps) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg my-8">
      <div className="flex items-center space-x-4">
        <img
          src={author.avatar}
          alt={author.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="text-xl font-bold">{author.name}</h3>
          <p className="text-gold">{author.role}</p>
        </div>
      </div>
      <p className="mt-4 text-gray-600">{author.bio}</p>
    </div>
  );
}