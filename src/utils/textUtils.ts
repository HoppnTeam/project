export function formatReadingTime(minutes: number): string {
  return `${minutes} min read`;
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

export function stripHtml(html: string): string {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
}

export function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const words = stripHtml(text).split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}