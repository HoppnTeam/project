import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { RSSSource } from '../services/rss/types';
import { RSS_SOURCES, RSS_CONFIG } from '../services/rss/config/sources';

interface SettingsState {
  aggregationEnabled: boolean;
  updateInterval: number;
  sources: RSSSource[];
  setAggregationEnabled: (enabled: boolean) => void;
  setUpdateInterval: (interval: number) => void;
  addSource: (source: Omit<RSSSource, 'id'>) => void;
  updateSource: (id: string, updates: Partial<RSSSource>) => void;
  removeSource: (id: string) => void;
  resetToDefaults: () => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      aggregationEnabled: true,
      updateInterval: RSS_CONFIG.updateInterval / (60 * 1000), // Convert to minutes
      sources: RSS_SOURCES,
      
      setAggregationEnabled: (enabled) => set({ aggregationEnabled: enabled }),
      
      setUpdateInterval: (interval) => set({ updateInterval: interval }),
      
      addSource: (sourceData) => set((state) => ({
        sources: [...state.sources, {
          ...sourceData,
          id: `custom-${Date.now()}`,
          name: sourceData.url.split('/')[2] || 'Custom Source'
        }]
      })),
      
      updateSource: (id, updates) => set((state) => ({
        sources: state.sources.map((source) =>
          source.id === id ? { ...source, ...updates } : source
        )
      })),
      
      removeSource: (id) => set((state) => ({
        sources: state.sources.filter((source) => source.id !== id)
      })),
      
      resetToDefaults: () => set({
        sources: RSS_SOURCES,
        updateInterval: RSS_CONFIG.updateInterval / (60 * 1000),
        aggregationEnabled: true
      })
    }),
    {
      name: 'news-settings-storage',
      version: 1
    }
  )
);