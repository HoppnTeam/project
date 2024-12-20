import { DOMParser } from '@xmldom/xmldom';
import { NewsItem } from '../types';

export function parseRSSFeed(xml: string, source: string): NewsItem[] {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, 'text/xml');
  const items = doc.getElementsByTagName('item');

  return Array.from(items).map(item => ({
    id: getElementText(item, 'guid') || getElementText(item, 'link') || '',
    title: getElementText(item, 'title') || '',
    description: getElementText(item, 'description') || '',
    url: getElementText(item, 'link') || '',
    publishedAt: getElementText(item, 'pubDate') || new Date().toISOString(),
    source,
    category: getElementText(item, 'category') || '',
    type: 'rss'
  }));
}

function getElementText(parent: Element, tagName: string): string {
  const element = parent.getElementsByTagName(tagName)[0];
  return element?.textContent || '';
}