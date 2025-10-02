import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };

// Helper functions

/**
 * Sort posts by publication date (newest first)
 */
export function sortPostsByDate(posts: any[]) {
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/**
 * Filter out draft posts in production
 */
export function filterDrafts(posts: any[]) {
  const isDev = import.meta.env.DEV;
  return posts.filter(post => isDev || !post.data.draft);
}

/**
 * Get unique tags from all posts
 */
export function getUniqueTags(posts: any[]) {
  const tags = new Set<string>();
  posts.forEach(post => {
    post.data.tags?.forEach((tag: string) => tags.add(tag));
  });
  return Array.from(tags).sort();
}

/**
 * Get tag counts
 */
export function getTagCounts(posts: any[]) {
  const tagCounts = new Map<string, number>();
  posts.forEach(post => {
    post.data.tags?.forEach((tag: string) => {
      tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
    });
  });
  return tagCounts;
}
