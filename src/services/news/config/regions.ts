import { Region } from '../types';

export const REGIONS: Record<string, Region> = {
  AFRICA: {
    id: 'africa',
    name: 'Africa',
    subregions: {
      EAST: {
        id: 'east-africa',
        name: 'East Africa',
        countries: ['kenya', 'tanzania', 'uganda', 'ethiopia']
      },
      WEST: {
        id: 'west-africa',
        name: 'West Africa',
        countries: ['nigeria', 'ghana', 'senegal']
      },
      SOUTH: {
        id: 'southern-africa',
        name: 'Southern Africa',
        countries: ['south-africa', 'zimbabwe', 'mozambique']
      },
      NORTH: {
        id: 'north-africa',
        name: 'North Africa',
        countries: ['egypt', 'morocco', 'tunisia']
      }
    }
  },
  AMERICAS: {
    id: 'americas',
    name: 'Americas',
    subregions: {
      NORTH: {
        id: 'north-america',
        name: 'North America',
        countries: ['usa', 'canada']
      },
      SOUTH: {
        id: 'south-america',
        name: 'South America',
        countries: ['brazil', 'colombia', 'argentina']
      },
      CENTRAL: {
        id: 'central-america',
        name: 'Central America',
        countries: ['mexico', 'panama', 'costa-rica']
      }
    }
  },
  CARIBBEAN: {
    id: 'caribbean',
    name: 'Caribbean',
    subregions: {
      GREATER_ANTILLES: {
        id: 'greater-antilles',
        name: 'Greater Antilles',
        countries: ['jamaica', 'haiti', 'dominican-republic', 'cuba']
      },
      LESSER_ANTILLES: {
        id: 'lesser-antilles',
        name: 'Lesser Antilles',
        countries: ['barbados', 'trinidad-tobago', 'grenada']
      },
      LUCAYAN: {
        id: 'lucayan',
        name: 'Lucayan Archipelago',
        countries: ['bahamas', 'turks-caicos']
      }
    }
  },
  EUROPE: {
    id: 'europe',
    name: 'Europe',
    subregions: {
      WESTERN: {
        id: 'western-europe',
        name: 'Western Europe',
        countries: ['uk', 'france', 'germany']
      },
      EASTERN: {
        id: 'eastern-europe',
        name: 'Eastern Europe',
        countries: ['poland', 'ukraine', 'romania']
      },
      SOUTHERN: {
        id: 'southern-europe',
        name: 'Southern Europe',
        countries: ['italy', 'spain', 'greece']
      },
      NORTHERN: {
        id: 'northern-europe',
        name: 'Northern Europe',
        countries: ['sweden', 'norway', 'denmark']
      }
    }
  }
};