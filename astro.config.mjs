// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import fs from 'node:fs';
import path from 'node:path';

// Helper to get redirects
function getBlogRedirects() {
  const blogDir = path.join(process.cwd(), 'src/content/blog');
  /** @type {Record<string, string>} */
  const redirects = {};

  try {
    if (fs.existsSync(blogDir)) {
      const files = fs.readdirSync(blogDir);
      files.forEach(file => {
        if (file.endsWith('.md') || file.endsWith('.mdx')) {
          const slug = file.replace(/\.mdx?$/, '');
          // Redirect from /slug to /blog/slug
          redirects[`/${slug}`] = `/blog/${slug}`;
        }
      });
    }
  } catch (e) {
    console.warn('Could not read blog directory for redirects:', e);
  }

  return redirects;
}

// https://astro.build/config
export default defineConfig({
  site: 'https://kumpul4semut.com',
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
  ],
  markdown: {
    syntaxHighlight: false, // We'll use rehype-pretty-code instead
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, {
        behavior: 'wrap',
        properties: {
          className: ['heading-link'],
        },
      }],
      [rehypePrettyCode, {
        theme: 'github-dark',
        onVisitLine(node) {
          // Prevent lines from collapsing in `display: grid` mode, and allow empty
          // lines to be copy/pasted
          if (node.children.length === 0) {
            node.children = [{ type: 'text', value: ' ' }];
          }
        },
        onVisitHighlightedLine(node) {
          node.properties.className?.push('highlighted');
        },
        onVisitHighlightedChars(node) {
          node.properties.className = ['word'];
        },
      }],
    ],
  },
  image: {
    domains: ['yourdomain.com', 'www.kumpul4semut.com', 'kumpul4semut.com', '45.76.150.118'],
    remotePatterns: [{ protocol: 'https' }, { protocol: 'http' }],
  },
  redirects: getBlogRedirects(),
});
