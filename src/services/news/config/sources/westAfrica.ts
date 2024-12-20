import { NewsSource } from '../../types';

export const WEST_AFRICA_SOURCES: NewsSource[] = [
  {
    id: 'premiumtimes',
    name: 'Premium Times',
    feeds: {
      main: 'https://www.premiumtimesng.com/feed',
      business: 'https://www.premiumtimesng.com/business/feed'
    }
  },
  {
    id: 'guardian',
    name: 'The Guardian Nigeria',
    feeds: {
      main: 'https://guardian.ng/feed/',
      business: 'https://guardian.ng/category/business/feed/'
    }
  },
  {
    id: 'myjoyonline',
    name: 'Joy Online',
    feeds: {
      main: 'https://www.myjoyonline.com/feed/',
      business: 'https://www.myjoyonline.com/business/feed/'
    }
  }
];