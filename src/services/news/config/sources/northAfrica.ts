import { NewsSource } from '../../types';

export const NORTH_AFRICA_SOURCES: NewsSource[] = [
  {
    id: 'egypttoday',
    name: 'Egypt Today',
    feeds: {
      main: 'https://www.egypttoday.com/Feed',
      business: 'https://www.egypttoday.com/Section/Business/Feed'
    }
  },
  {
    id: 'moroccoworldnews',
    name: 'Morocco World News',
    feeds: {
      main: 'https://www.moroccoworldnews.com/feed/'
    }
  }
];