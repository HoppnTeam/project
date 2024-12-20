import { NewsSource } from '../../types';

export const SOUTHERN_AFRICA_SOURCES: NewsSource[] = [
  {
    id: 'news24',
    name: 'News24',
    feeds: {
      main: 'https://feeds.24.com/articles/news24/TopStories/rss',
      business: 'https://feeds.24.com/articles/fin24/news/rss',
      tech: 'https://feeds.24.com/articles/fin24/tech/rss'
    }
  },
  {
    id: 'timeslive',
    name: 'Times Live',
    feeds: {
      main: 'https://www.timeslive.co.za/rss/',
      business: 'https://www.timeslive.co.za/sunday-times/business/rss'
    }
  },
  {
    id: 'herald',
    name: 'The Herald',
    feeds: {
      main: 'https://www.herald.co.zw/feed/',
      business: 'https://www.herald.co.zw/category/business/feed/'
    }
  }
];