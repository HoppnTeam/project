export type Region = 'Africa' | 'Americas' | 'Europe' | 'Caribbean';

export interface Article {
  id: number;
  title: string;
  category: string;
  region: Region;
  image: string;
  excerpt: string;
  date: string;
}

export interface CategoryMeta {
  name: string;
  slug: string;
  color: string;
  headerImage: string;
  description: string;
}