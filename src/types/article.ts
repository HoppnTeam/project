import { Region } from './index';

export interface Article {
  id: number;
  title: string;
  category: string;
  region: Region;
  image: string;
  excerpt: string;
  date: string;
  readingTime?: number;
  views?: number;
  content?: string;
}

export interface ArticleFull extends Article {
  content: string;
  author: Author;
  readingTime: number;
  tags: string[];
  relatedArticles: Article[];
  publishedAt: string;
  updatedAt?: string;
}

export interface Author {
  id: number;
  name: string;
  avatar: string;
  bio: string;
  role: string;
}

export interface Comment {
  id: number;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  createdAt: string;
  likes: number;
  replies: Comment[];
}