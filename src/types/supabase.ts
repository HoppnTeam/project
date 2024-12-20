export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      rss_sources: {
        Row: {
          id: string
          name: string
          url: string
          region: string
          subregion: string | null
          category: string
          is_active: boolean
          last_fetch_at: string | null
          fetch_interval: number
          created_at: string
          updated_at: string
        }
        Insert: Omit<Tables['rss_sources']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Tables['rss_sources']['Insert']>
      }
      rss_feed_items: {
        Row: {
          id: string
          source_id: string
          guid: string
          title: string
          description: string | null
          link: string
          published_at: string
          content: string | null
          is_processed: boolean
          is_published: boolean
          created_at: string
        }
        Insert: Omit<Tables['rss_feed_items']['Row'], 'id' | 'created_at'>
        Update: Partial<Tables['rss_feed_items']['Insert']>
      }
    }
  }
}