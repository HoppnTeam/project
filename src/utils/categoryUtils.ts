import { CATEGORIES } from '../constants/categories';

export function getCategoryColor(categoryName: string): string {
  const category = CATEGORIES.find(
    cat => cat.name.toLowerCase() === categoryName.toLowerCase()
  );
  return category?.color || '#000000';
}

export function getCategoryBySlug(slug: string) {
  return CATEGORIES.find(category => category.slug === slug);
}

export function validateCategory(category: string): boolean {
  return CATEGORIES.some(cat => 
    cat.name.toLowerCase() === category.toLowerCase() || 
    cat.slug === category.toLowerCase()
  );
}