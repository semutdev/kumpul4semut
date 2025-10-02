import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_CONFIG } from '../config';
import { filterDrafts, sortPostsByDate } from '../content/config';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const allPosts = await getCollection('blog');
  const publishedPosts = sortPostsByDate(filterDrafts(allPosts));

  return rss({
    title: SITE_CONFIG.site.title,
    description: SITE_CONFIG.site.description,
    site: context.site || SITE_CONFIG.site.url,
    items: publishedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      pubDate: post.data.pubDate,
      categories: post.data.tags || [],
    })),
    customData: `<language>en-us</language>`,
    stylesheet: '/rss-styles.xsl',
  });
}
