import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_DIR = path.join(__dirname, '../src/content/blog');

function fixImageUrls(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const filename = path.basename(filePath);

  // Replace external image URLs with local paths
  content = content.replace(/https:\/\/www\.kumpul4semut\.com\/wp-content/g, '/wp-content');
  content = content.replace(/https:\/\/kumpul4semut\.com\/wp-content/g, '/wp-content');
  content = content.replace(/https:\/\/45\.76\.150\.118\/wp-content/g, '/wp-content');
  content = content.replace(/http:\/\/45\.76\.150\.118\/wp-content/g, '/wp-content');

  fs.writeFileSync(filePath, content, 'utf-8');

  console.log(`✅ Fixed images: ${filename}`);
}

// Run fix
console.log('Fixing image URLs...\n');

const files = fs.readdirSync(CONTENT_DIR)
  .filter(file => file.endsWith('.md'))
  .map(file => path.join(CONTENT_DIR, file));

files.forEach(fixImageUrls);

console.log(`\n✨ Fixed image URLs in ${files.length} files!`);
