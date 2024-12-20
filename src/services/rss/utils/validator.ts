interface RSSItem {
  guid: string;
  title: string;
  description: string;
  link: string;
  pubDate: string;
}

export function validateFeedItem(item: RSSItem): boolean {
  // Check required fields
  if (!item.guid || !item.title || !item.link || !item.pubDate) {
    return false;
  }

  // Validate URL
  try {
    new URL(item.link);
  } catch {
    return false;
  }

  // Validate publication date
  const pubDate = new Date(item.pubDate);
  if (isNaN(pubDate.getTime())) {
    return false;
  }

  // Check if item is not too old (e.g., within last 30 days)
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  if (pubDate < thirtyDaysAgo) {
    return false;
  }

  return true;
}