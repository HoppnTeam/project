import { NewsItem } from '../types';

export function calculateNewsScore(item: NewsItem): number {
  const age = getAgeScore(new Date(item.publishedAt));
  const relevance = getRelevanceScore(item.description);
  
  return (age * 0.6) + (relevance * 0.4);
}

function getAgeScore(publishDate: Date): number {
  const now = new Date();
  const hoursDiff = (now.getTime() - publishDate.getTime()) / (1000 * 60 * 60);
  return Math.max(0, 1 - (hoursDiff / 24)); // Newer is better
}

function getRelevanceScore(content: string): number {
  if (!content) return 0;
  
  const wordCount = content.split(/\s+/).length;
  const hasQuotes = content.includes('"');
  const hasNumbers = /\d+/.test(content);
  
  let score = 0;
  if (wordCount > 50) score += 0.4;
  if (hasQuotes) score += 0.3;
  if (hasNumbers) score += 0.3;
  
  return Math.min(1, score);
}