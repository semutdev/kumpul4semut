import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_DIR = path.join(__dirname, '../src/content/blog');

function cleanupPost(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const filename = path.basename(filePath);

  // Split frontmatter and content
  const parts = content.split('---');
  if (parts.length < 3) {
    console.log(`⚠️  Skipping ${filename} - Invalid format`);
    return;
  }

  let frontmatter = parts[1];
  let postContent = parts.slice(2).join('---');

  // Extract tags from categories in frontmatter
  const categoryMatch = frontmatter.match(/tags: \["([^"]+)"\]/);
  if (categoryMatch) {
    const tags = categoryMatch[1].split('", "').filter(t => t.length > 0);
    // Extract actual tags from WordPress format
    const cleanTags = tags.map(t => {
      // Remove WordPress category names that are too generic
      if (t.toLowerCase() === 'uncategorized') return null;
      return t.trim();
    }).filter(t => t !== null);

    frontmatter = frontmatter.replace(/tags: \[.*\]/, `tags: ${JSON.stringify(cleanTags)}`);
  }

  // Clean post content

  // Remove WordPress caption shortcodes
  postContent = postContent.replace(/\\\[caption[^\]]*\\\]/g, '');
  postContent = postContent.replace(/\\\[\/caption\\\]/g, '');
  postContent = postContent.replace(/\[caption[^\]]*\]/g, '');
  postContent = postContent.replace(/\[\/caption\]/g, '');

  // Fix escaped backslashes before markdown links
  postContent = postContent.replace(/\\\[/g, '[');
  postContent = postContent.replace(/\\\]/g, ']');

  // Clean up WordPress code blocks
  postContent = postContent.replace(/<pre class="[^"]*">\s*```/g, '\n```bash');
  postContent = postContent.replace(/```\s*<\/pre>/g, '```\n');
  postContent = postContent.replace(/<pre class="[^"]*">/g, '\n```\n');
  postContent = postContent.replace(/<\/pre>/g, '\n```\n');

  // Fix code blocks without language
  postContent = postContent.replace(/```\s*```\s*\n/g, '```bash\n');

  // Remove HTML entities
  postContent = postContent.replace(/&nbsp;/g, ' ');
  postContent = postContent.replace(/&amp;/g, '&');
  postContent = postContent.replace(/&lt;/g, '<');
  postContent = postContent.replace(/&gt;/g, '>');

  // Remove WordPress HTML comments
  postContent = postContent.replace(/<!-- wp:[^>]+ -->/g, '');
  postContent = postContent.replace(/<!-- \/wp:[^>]+ -->/g, '');

  // Clean HTML tags
  postContent = postContent.replace(/<html>/g, '');
  postContent = postContent.replace(/<\/html>/g, '');
  postContent = postContent.replace(/<body>/g, '');
  postContent = postContent.replace(/<\/body>/g, '');
  postContent = postContent.replace(/<figure[^>]*>/g, '');
  postContent = postContent.replace(/<\/figure>/g, '');
  postContent = postContent.replace(/<div[^>]*>/g, '');
  postContent = postContent.replace(/<\/div>/g, '');

  // Fix spacing issues
  postContent = postContent.replace(/\n{4,}/g, '\n\n');
  postContent = postContent.replace(/## \s+/g, '## ');
  postContent = postContent.replace(/### \s+/g, '### ');
  postContent = postContent.replace(/#### \s+/g, '#### ');

  // Remove leading/trailing whitespace
  postContent = postContent.trim();

  // Rebuild file
  const cleaned = `---${frontmatter}---\n\n${postContent}\n`;

  // Write back
  fs.writeFileSync(filePath, cleaned, 'utf-8');

  console.log(`✅ Cleaned: ${filename}`);
}

// Run cleanup
console.log('Starting post cleanup...\n');

const files = fs.readdirSync(CONTENT_DIR)
  .filter(file => file.endsWith('.md') && !file.startsWith('getting-started') && !file.startsWith('building-modern') && !file.startsWith('advanced-code'))
  .map(file => path.join(CONTENT_DIR, file));

console.log(`Found ${files.length} posts to clean\n`);

files.forEach(cleanupPost);

console.log(`\n✨ Cleanup complete!`);
