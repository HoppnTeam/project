export interface Source {
  url: string;
  category: string;
  region: string;
  type: 'rss' | 'website';
  selectors?: {
    articles: string;
    title: string;
    excerpt: string;
    image: string;
  };
}

export interface ScrapedArticle {
  title: string;
  content: string;
  excerpt: string;
  link: string;
  publishDate: string;
  category: string;
  region: string;
  source: string;
  image?: string;
}