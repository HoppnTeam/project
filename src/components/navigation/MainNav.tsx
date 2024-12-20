import React from 'react';
import { CATEGORIES } from '../../constants/categories';

export default function MainNav() {
  return (
    <nav className="bg-black border-b border-gray-800">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap justify-center space-x-6">
          {CATEGORIES.map((category) => (
            <li key={category.slug}>
              <a
                href={`/category/${category.slug}`}
                className="inline-block py-4 px-2 text-white hover:text-gold transition-colors"
                style={{ borderBottom: `2px solid ${category.color}` }}
              >
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}