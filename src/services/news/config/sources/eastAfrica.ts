import { NewsSource } from '../../types';

export const EAST_AFRICA_SOURCES: NewsSource[] = [
  {
    id: 'nation',
    name: 'Nation Media',
    feeds: {
      main: 'https://nation.africa/kenya/rss',
      business: 'https://nation.africa/kenya/business/rss',
      counties: 'https://nation.africa/kenya/counties/rss'
    }
  },
  {
    id: 'standardmedia',
    name: 'Standard Media',
    feeds: {
      main: 'https://www.standardmedia.co.ke/rss/headlines.php',
      business: 'https://www.standardmedia.co.ke/rss/business.php',
      sports: 'https://www.standardmedia.co.ke/rss/sports.php'
    }
  },
  {
    id: 'thecitizen',
    name: 'The Citizen',
    feeds: {
      main: 'https://www.thecitizen.co.tz/feed',
      news: 'https://www.thecitizen.co.tz/tanzania/news/feed'
    }
  },
  {
    id: 'monitor',
    name: 'Daily Monitor',
    feeds: {
      main: 'https://www.monitor.co.ug/-/691150/691150/-/view/asFeed/-/11emxavz/-/index.xml',
      business: 'https://www.monitor.co.ug/Business/-/688322/688322/-/view/asFeed/-/11w3g8m/-/index.xml'
    }
  }
];