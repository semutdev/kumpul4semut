/**
 * Format a date to a readable string
 * @param date - The date to format
 * @returns Formatted date string (e.g., "January 15, 2024")
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

/**
 * Calculate estimated reading time
 * @param content - The content to analyze
 * @returns Reading time string (e.g., "5 min read")
 */
export function readingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

/**
 * Truncate text with ellipsis
 * @param text - The text to truncate
 * @param maxLength - Maximum length before truncating
 * @returns Truncated text with ellipsis if needed
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

/**
 * Convert text to URL-friendly slug
 * @param text - The text to slugify
 * @returns URL-friendly slug
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Extract unique tags from posts array and sort alphabetically
 * @param posts - Array of posts
 * @returns Sorted array of unique tags
 */
export function getUniqueTags(posts: any[]): string[] {
  const tags = new Set<string>();
  posts.forEach(post => {
    if (post.data?.tags) {
      post.data.tags.forEach((tag: string) => tags.add(tag));
    }
  });
  return Array.from(tags).sort();
}

/**
 * Find related posts based on matching tags
 * @param currentPost - The current post
 * @param allPosts - All available posts
 * @param limit - Maximum number of related posts to return
 * @returns Array of related posts sorted by relevance
 */
export function getRelatedPosts(currentPost: any, allPosts: any[], limit: number = 4): any[] {
  const currentTags = currentPost.data?.tags || [];

  if (currentTags.length === 0) {
    return allPosts
      .filter(post => post.slug !== currentPost.slug)
      .slice(0, limit);
  }

  const relatedPosts = allPosts
    .filter(post => post.slug !== currentPost.slug)
    .map(post => {
      const matchingTags = post.data?.tags?.filter((tag: string) =>
        currentTags.includes(tag)
      ) || [];
      return {
        post,
        relevance: matchingTags.length,
      };
    })
    .filter(item => item.relevance > 0)
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, limit)
    .map(item => item.post);

  // If we don't have enough related posts, fill with recent posts
  if (relatedPosts.length < limit) {
    const additionalPosts = allPosts
      .filter(post =>
        post.slug !== currentPost.slug &&
        !relatedPosts.includes(post)
      )
      .slice(0, limit - relatedPosts.length);

    return [...relatedPosts, ...additionalPosts];
  }

  return relatedPosts;
}
