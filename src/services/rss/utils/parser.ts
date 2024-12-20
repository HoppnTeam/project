import { DOMParser } from '@xmldom/xmldom';

interface RSSItem {
  guid: string;
  title: string;
  description: string;
  link: string;
  pubDate: string;
  content?: string;
}

export function parseRSSFeed(xml: string): RSSItem[] {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, 'text/xml');
  const items = doc.getElementsByTagName('item');

  return Array.from(items).map(item => ({
    guid: getElementText(item, 'guid') || getElementText(item, 'link'),
    title: getElementText(item, 'title'),
    description: getElementText(item, 'description'),
    link: getElementText(item, 'link'),
    pubDate: getElementText(item, 'pubDate'),
    content: getElementText(item, 'content:encoded') || getElementText(item, 'content')
  }));
}

function getElementText(parent: Element, tagName: string): string {
  const element = parent.getElementsByTagName(tagName)[0];
  return element?.textContent || '';
}