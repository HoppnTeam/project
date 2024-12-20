/*
  # RSS Feed Management Schema

  1. New Tables
    - `rss_sources`
      - Stores RSS feed source information
      - Includes region and subregion mapping
      - Tracks active status and last fetch time
    
    - `rss_feed_items`
      - Stores individual feed items/articles
      - Links to source via foreign key
      - Includes processing and publishing status
    
  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users
    
  3. Indexes
    - Add indexes for common query patterns
    - Optimize for region/subregion filtering
*/

-- Create RSS sources table
CREATE TABLE rss_sources (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR NOT NULL,
    url TEXT NOT NULL,
    region VARCHAR NOT NULL,
    subregion VARCHAR,
    category VARCHAR NOT NULL,
    is_active BOOLEAN DEFAULT true,
    last_fetch_at TIMESTAMPTZ,
    fetch_interval INTEGER DEFAULT 3600, -- Default 1 hour in seconds
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now(),
    UNIQUE(url, region, subregion)
);

-- Create RSS feed items table
CREATE TABLE rss_feed_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    source_id UUID REFERENCES rss_sources(id) ON DELETE CASCADE,
    guid VARCHAR NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    link TEXT NOT NULL,
    published_at TIMESTAMPTZ NOT NULL,
    content TEXT,
    is_processed BOOLEAN DEFAULT false,
    is_published BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT now(),
    UNIQUE(source_id, guid)
);

-- Create indexes
CREATE INDEX idx_rss_sources_region ON rss_sources(region);
CREATE INDEX idx_rss_sources_subregion ON rss_sources(subregion);
CREATE INDEX idx_rss_sources_active ON rss_sources(is_active);
CREATE INDEX idx_rss_items_published_at ON rss_feed_items(published_at);
CREATE INDEX idx_rss_items_source ON rss_feed_items(source_id);

-- Enable RLS
ALTER TABLE rss_sources ENABLE ROW LEVEL SECURITY;
ALTER TABLE rss_feed_items ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow read access to all authenticated users for RSS sources"
ON rss_sources FOR SELECT TO authenticated USING (true);

CREATE POLICY "Allow read access to all authenticated users for RSS feed items"
ON rss_feed_items FOR SELECT TO authenticated USING (true);

CREATE POLICY "Allow insert/update access to authenticated users for RSS sources"
ON rss_sources FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Allow insert/update access to authenticated users for RSS feed items"
ON rss_feed_items FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for rss_sources
CREATE TRIGGER update_rss_sources_updated_at
    BEFORE UPDATE ON rss_sources
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();