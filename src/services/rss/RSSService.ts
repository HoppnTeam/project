import { supabase } from '../lib/supabase';
import { Database } from '../types/supabase';
import { parseRSSFeed } from './utils/parser';
import { validateFeedItem } from './utils/validator';
import axios from 'axios';

type RSSSource = Database['public']['Tables']['rss_sources']['Row'];
type RSSFeedItem = Database['public']['Tables']['rss_feed_items']['Row'];

export class RSSService {
  private activeFeeds: Map<string, NodeJS.Timeout>;

  constructor() {
    this.activeFeeds = new Map();
    this.initializeActiveFeeds();
  }

  private async initializeActiveFeeds() {
    try {
      const { data: sources, error } = await supabase
        .from('rss_sources')
        .select('*')
        .eq('is_active', true);

      if (error) throw error;

      for (const source of sources || []) {
        await this.startFeedMonitoring(source);
      }
    } catch (error) {
      console.error('Error initializing feeds:', error);
    }
  }

  async addSource(source: Omit<RSSSource, 'id' | 'created_at' | 'updated_at'>) {
    try {
      const { data, error } = await supabase
        .from('rss_sources')
        .insert([source])
        .select()
        .single();

      if (error) throw error;

      if (source.is_active) {
        await this.startFeedMonitoring(data);
      }

      return data;
    } catch (error) {
      console.error('Error adding source:', error);
      throw error;
    }
  }

  async updateSource(id: string, updates: Partial<RSSSource>) {
    try {
      const { data, error } = await supabase
        .from('rss_sources')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      if (updates.is_active !== undefined) {
        if (updates.is_active) {
          await this.startFeedMonitoring(data);
        } else {
          this.stopFeedMonitoring(id);
        }
      }

      return data;
    } catch (error) {
      console.error('Error updating source:', error);
      throw error;
    }
  }

  async removeSource(id: string) {
    try {
      this.stopFeedMonitoring(id);
      const { error } = await supabase
        .from('rss_sources')
        .delete()
        .eq('id', id);

      if (error) throw error;
    } catch (error) {
      console.error('Error removing source:', error);
      throw error;
    }
  }

  private async startFeedMonitoring(source: RSSSource) {
    if (this.activeFeeds.has(source.id)) {
      this.stopFeedMonitoring(source.id);
    }

    const interval = setInterval(
      () => this.fetchAndProcessFeed(source),
      source.fetch_interval * 1000
    );

    this.activeFeeds.set(source.id, interval);
    await this.fetchAndProcessFeed(source); // Initial fetch
  }

  private stopFeedMonitoring(sourceId: string) {
    const interval = this.activeFeeds.get(sourceId);
    if (interval) {
      clearInterval(interval);
      this.activeFeeds.delete(sourceId);
    }
  }

  private async fetchAndProcessFeed(source: RSSSource) {
    try {
      const response = await axios.get(source.url);
      const feedItems = parseRSSFeed(response.data);

      // Update last fetch time
      await supabase
        .from('rss_sources')
        .update({ last_fetch_at: new Date().toISOString() })
        .eq('id', source.id);

      // Process and save feed items
      for (const item of feedItems) {
        if (validateFeedItem(item)) {
          await this.saveFeedItem({
            source_id: source.id,
            guid: item.guid,
            title: item.title,
            description: item.description,
            link: item.link,
            published_at: item.pubDate,
            content: item.content,
            is_processed: false,
            is_published: false
          });
        }
      }
    } catch (error) {
      console.error(`Error processing feed ${source.id}:`, error);
    }
  }

  private async saveFeedItem(item: Omit<RSSFeedItem, 'id' | 'created_at'>) {
    try {
      const { error } = await supabase
        .from('rss_feed_items')
        .upsert([item], {
          onConflict: 'source_id,guid'
        });

      if (error) throw error;
    } catch (error) {
      console.error('Error saving feed item:', error);
    }
  }

  async getSources(region?: string, subregion?: string) {
    try {
      let query = supabase
        .from('rss_sources')
        .select('*');

      if (region) {
        query = query.eq('region', region);
      }

      if (subregion) {
        query = query.eq('subregion', subregion);
      }

      const { data, error } = await query;

      if (error) throw error;

      return data;
    } catch (error) {
      console.error('Error getting sources:', error);
      throw error;
    }
  }
}

export const rssService = new RSSService();