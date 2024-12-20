/**
 * Browser-compatible caching implementation using localStorage
 */
class BrowserCache {
  private defaultTTL: number;
  private checkPeriod: number;
  private lastCleanup: number;

  constructor(options: { stdTTL?: number; checkperiod?: number } = {}) {
    this.defaultTTL = options.stdTTL || 1800; // 30 minutes default
    this.checkPeriod = options.checkperiod || 120; // 2 minutes default
    this.lastCleanup = Date.now();
    this.cleanup();
  }

  private cleanup(): void {
    if (Date.now() - this.lastCleanup < this.checkPeriod * 1000) {
      return;
    }

    const now = Date.now();
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith('news_cache_')) {
        try {
          const item = JSON.parse(localStorage.getItem(key) || '');
          if (item.expires < now) {
            localStorage.removeItem(key);
          }
        } catch (error) {
          console.error('Cache cleanup error:', error);
          localStorage.removeItem(key);
        }
      }
    }
    this.lastCleanup = now;
  }

  get<T>(key: string): T | undefined {
    this.cleanup();
    const cacheKey = `news_cache_${key}`;
    try {
      const item = localStorage.getItem(cacheKey);
      if (!item) return undefined;

      const { value, expires } = JSON.parse(item);
      if (expires < Date.now()) {
        localStorage.removeItem(cacheKey);
        return undefined;
      }
      return value as T;
    } catch (error) {
      console.error('Cache get error:', error);
      return undefined;
    }
  }

  set<T>(key: string, value: T, ttl: number = this.defaultTTL): boolean {
    const cacheKey = `news_cache_${key}`;
    try {
      const item = {
        value,
        expires: Date.now() + (ttl * 1000)
      };
      localStorage.setItem(cacheKey, JSON.stringify(item));
      return true;
    } catch (error) {
      console.error('Cache set error:', error);
      return false;
    }
  }

  del(key: string): boolean {
    const cacheKey = `news_cache_${key}`;
    try {
      localStorage.removeItem(cacheKey);
      return true;
    } catch (error) {
      console.error('Cache delete error:', error);
      return false;
    }
  }

  clear(): boolean {
    try {
      const keys = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key?.startsWith('news_cache_')) {
          keys.push(key);
        }
      }
      keys.forEach(key => localStorage.removeItem(key));
      return true;
    } catch (error) {
      console.error('Cache clear error:', error);
      return false;
    }
  }
}

// Create and export cache instance
export const newsCache = new BrowserCache({
  stdTTL: parseInt(import.meta.env.VITE_CACHE_TTL || '1800'),
  checkperiod: parseInt(import.meta.env.VITE_RSS_CHECK_PERIOD || '120')
});

// Helper functions
export function getCachedNews<T>(key: string): T | undefined {
  return newsCache.get<T>(key);
}

export function setCachedNews<T>(key: string, data: T): boolean {
  return newsCache.set(key, data);
}