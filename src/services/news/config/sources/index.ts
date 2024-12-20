import { NewsSource } from '../../types';
import { EAST_AFRICA_SOURCES } from './eastAfrica';
import { WEST_AFRICA_SOURCES } from './westAfrica';
import { SOUTHERN_AFRICA_SOURCES } from './southernAfrica';
import { NORTH_AFRICA_SOURCES } from './northAfrica';
import { PAN_AFRICAN_SOURCES } from './panAfrican';
import { CARIBBEAN_SOURCES } from './caribbean';

// Combine all sources into a single array
export const ALL_NEWS_SOURCES: NewsSource[] = [
  ...EAST_AFRICA_SOURCES,
  ...WEST_AFRICA_SOURCES,
  ...SOUTHERN_AFRICA_SOURCES,
  ...NORTH_AFRICA_SOURCES,
  ...PAN_AFRICAN_SOURCES,
  ...CARIBBEAN_SOURCES
];

// Re-export individual region sources
export {
  EAST_AFRICA_SOURCES,
  WEST_AFRICA_SOURCES,
  SOUTHERN_AFRICA_SOURCES,
  NORTH_AFRICA_SOURCES,
  PAN_AFRICAN_SOURCES,
  CARIBBEAN_SOURCES
};