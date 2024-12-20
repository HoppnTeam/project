import { NewsSource } from '../../types';

export const CARIBBEAN_SOURCES: NewsSource[] = [
  {
    id: 'jamaicagleaner',
    name: 'Jamaica Gleaner',
    feeds: {
      main: 'http://jamaica-gleaner.com/feed/rss.xml',
      business: 'http://jamaica-gleaner.com/feed/business/rss.xml',
      sports: 'http://jamaica-gleaner.com/feed/sports/rss.xml'
    }
  },
  {
    id: 'jamaicaobserver',
    name: 'Jamaica Observer',
    feeds: {
      main: 'http://www.jamaicaobserver.com/rss/news/',
      business: 'http://www.jamaicaobserver.com/rss/business/'
    }
  },
  {
    id: 'trinidadguardian',
    name: 'Trinidad Guardian',
    feeds: {
      main: 'https://guardian.co.tt/feed/rss.xml',
      business: 'https://guardian.co.tt/business/feed/rss.xml'
    }
  },
  {
    id: 'barbadostoday',
    name: 'Barbados Today',
    feeds: {
      main: 'https://barbadostoday.bb/feed/',
      business: 'https://barbadostoday.bb/category/business/feed/'
    }
  },
  {
    id: 'caribbeannewsglobal',
    name: 'Caribbean News Global',
    feeds: {
      main: 'https://www.caribbeannewsglobal.com/feed/',
      business: 'https://www.caribbeannewsglobal.com/category/business/feed/'
    }
  }
];