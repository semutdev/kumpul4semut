import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WP_POSTS_DIR = path.join(__dirname, '../wp-exported/_posts');
const ASTRO_CONTENT_DIR = path.join(__dirname, '../src/content/blog');

// Function to convert WordPress frontmatter to Astro format
function convertFrontmatter(wpFrontmatter, filename) {
  const lines = wpFrontmatter.split('\n');
  const data = {};

  lines.forEach(line => {
    const match = line.match(/^(\w+):\s*(.+)$/);
    if (match) {
      const key = match[1];
      let value = match[2].trim();

      // Remove quotes if present
      if (value.startsWith("'") && value.endsWith("'")) {
        value = value.slice(1, -1);
      }

      data[key] = value;
    }
  });

  // Extract date from filename if not in frontmatter
  const dateMatch = filename.match(/^(\d{4}-\d{2}-\d{2})/);
  const postDate = data.date || (dateMatch ? dateMatch[1] : new Date().toISOString().split('T')[0]);

  // Convert categories to tags array
  const tags = [];
  if (data.categories) {
    const cats = data.categories.split(',').map(c => c.trim());
    tags.push(...cats);
  }
  if (data.tags) {
    const postTags = data.tags.replace(/'/g, '').split(',').map(t => t.trim());
    tags.push(...postTags);
  }

  // Remove duplicates and clean tags
  const uniqueTags = [...new Set(tags)].filter(t => t && t.length > 0);

  // Build Astro frontmatter
  const astroFrontmatter = {
    title: data.title || 'Untitled Post',
    description: data.title ? data.title.substring(0, 160) : 'Post description',
    pubDate: postDate,
    heroImage: data.image || undefined,
    tags: uniqueTags,
    draft: false
  };

  return astroFrontmatter;
}

// Function to clean content
function cleanContent(content) {
  let cleaned = content;

  // Remove WordPress shortcodes like [caption]
  cleaned = cleaned.replace(/\[caption[^\]]*\]/g, '');
  cleaned = cleaned.replace(/\[\/caption\]/g, '');

  // Fix WordPress image syntax
  cleaned = cleaned.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, url) => {
    // Keep the markdown image syntax but clean the URL
    return `![${alt}](${url})`;
  });

  // Remove HTML tags but keep content
  cleaned = cleaned.replace(/<\/?html>/g, '');
  cleaned = cleaned.replace(/<\/?body>/g, '');

  // Clean up WordPress code blocks
  cleaned = cleaned.replace(/<pre class="[^"]*">/g, '\n```\n');
  cleaned = cleaned.replace(/<\/pre>/g, '\n```\n');

  // Fix spacing
  cleaned = cleaned.replace(/\n{3,}/g, '\n\n');
  cleaned = cleaned.trim();

  return cleaned;
}

// Function to create slug from filename
function createSlug(filename) {
  // Remove date prefix and .md extension
  return filename.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.md$/, '');
}

// Main migration function
function migratePost(wpFile) {
  const filename = path.basename(wpFile);
  const slug = createSlug(filename);
  const content = fs.readFileSync(wpFile, 'utf-8');

  // Split frontmatter and content
  const parts = content.split('---');
  if (parts.length < 3) {
    console.log(`⚠️  Skipping ${filename} - Invalid format`);
    return;
  }

  const wpFrontmatter = parts[1];
  const wpContent = parts.slice(2).join('---');

  // Convert frontmatter
  const astroFrontmatter = convertFrontmatter(wpFrontmatter, filename);

  // Clean content
  const cleanedContent = cleanContent(wpContent);

  // Build new file content
  const astroContent = `---
title: "${astroFrontmatter.title.replace(/"/g, '\\"')}"
description: "${astroFrontmatter.description.replace(/"/g, '\\"')}"
pubDate: ${astroFrontmatter.pubDate}
${astroFrontmatter.heroImage ? `heroImage: "${astroFrontmatter.heroImage}"` : ''}
tags: ${JSON.stringify(astroFrontmatter.tags)}
draft: false
---

${cleanedContent}
`;

  // Write to Astro content directory
  const astroFile = path.join(ASTRO_CONTENT_DIR, `${slug}.md`);
  fs.writeFileSync(astroFile, astroContent, 'utf-8');

  console.log(`✅ Migrated: ${filename} -> ${slug}.md`);
}

// Run migration
console.log('Starting WordPress to Astro migration...\n');

// Create content directory if it doesn't exist
if (!fs.existsSync(ASTRO_CONTENT_DIR)) {
  fs.mkdirSync(ASTRO_CONTENT_DIR, { recursive: true });
}

// Get all markdown files
const wpFiles = fs.readdirSync(WP_POSTS_DIR)
  .filter(file => file.endsWith('.md'))
  .map(file => path.join(WP_POSTS_DIR, file));

console.log(`Found ${wpFiles.length} WordPress posts to migrate\n`);

// Migrate each post
wpFiles.forEach(migratePost);

console.log(`\n✨ Migration complete! Migrated ${wpFiles.length} posts.`);
console.log(`\nPosts are now in: ${ASTRO_CONTENT_DIR}`);
