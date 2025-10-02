# Astro Blog Implementation Tasks
## Automated Step-by-Step Guide for Claude Code CLI

---

## Instructions for Claude Code CLI

Read this entire file and execute all tasks sequentially from Task 1 to Task 50. Each task should be completed fully before moving to the next task. After completing each task, verify it works before proceeding.

**Project Goal**: Build a clean, modern, high-performance blog using Astro.js + Cloudflare Pages with advanced code highlighting features for technical content.

**Key Requirements**:
- Clean, simple, modern design
- Fast performance (Lighthouse >95)
- Google AdSense integration
- Advanced code syntax highlighting with copy buttons
- SEO optimized
- Mobile responsive

---

## Task 1: Initialize Astro Project

Create a new Astro project with TypeScript support.

**Requirements**:
- Use latest stable Astro version
- Enable TypeScript
- Install these integrations: `@astrojs/sitemap`, `@astrojs/rss`, `@astrojs/mdx`, `@astrojs/tailwind`
- Install syntax highlighting: `rehype-pretty-code`, `rehype-slug`, `rehype-autolink-headings`
- Configure `package.json` with scripts: `dev`, `build`, `preview`

**Deliverable**: Working Astro project that runs with `npm run dev`

---

## Task 2: Configure Project Structure

Create the following folder structure:

```
src/
├── components/
├── layouts/
├── pages/
├── content/
│   └── blog/
├── styles/
└── utils/

public/
├── images/
└── fonts/
```

**Deliverable**: All folders created and empty

---

## Task 3: Configure astro.config.mjs

Set up Astro configuration with:
- Site URL: `https://yourdomain.com` (placeholder)
- Sitemap integration enabled
- MDX integration enabled
- Tailwind integration enabled
- Markdown config with:
  - Syntax highlighting theme: `github-dark`
  - Enable line numbers
  - Enable code title support
  - rehype plugins: rehype-slug, rehype-autolink-headings
- Image optimization enabled

**Deliverable**: Configured `astro.config.mjs`

---

## Task 4: Setup Content Collections Schema

Create `src/content/config.ts` with:

**Schema for blog collection**:
- `title`: string (required)
- `description`: string (required, for SEO)
- `pubDate`: date (required)
- `updatedDate`: date (optional)
- `heroImage`: string (optional)
- `tags`: array of strings (optional)
- `draft`: boolean (default: false)

**Helper functions**:
- Function to sort posts by date (newest first)
- Function to filter out drafts in production
- Function to get unique tags from all posts

**Deliverable**: `src/content/config.ts` with type-safe content collections

---

## Task 5: Create Site Configuration

Create `src/config.ts` with site-wide settings:

**Configuration object**:
```typescript
{
  site: {
    title: "My Blog",
    description: "A modern blog built with Astro",
    author: "Your Name",
    url: "https://yourdomain.com",
    email: "your@email.com"
  },
  social: {
    github: "https://github.com/yourusername",
    twitter: "https://twitter.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername"
  },
  analytics: {
    googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID
  },
  adsense: {
    publisherId: process.env.ADSENSE_PUBLISHER_ID
  },
  pagination: {
    postsPerPage: 12
  },
  features: {
    darkMode: false,
    comments: true,
    codeLineNumbers: true,
    codeHighlightTheme: "github-dark"
  }
}
```

**Deliverable**: `src/config.ts` with TypeScript types exported

---

## Task 6: Create Utility Functions

Create `src/utils/helpers.ts` with:

1. `formatDate(date: Date): string` - Format date to readable string
2. `readingTime(content: string): string` - Calculate reading time (words/200)
3. `truncateText(text: string, maxLength: number): string` - Truncate with ellipsis
4. `slugify(text: string): string` - Convert text to URL slug
5. `getUniqueTags(posts: array): string[]` - Extract and sort unique tags
6. `getRelatedPosts(currentPost, allPosts, limit)` - Find posts with matching tags

**Deliverable**: Utility functions with TypeScript types and JSDoc comments

---

## Task 7: Setup Global Styles

Create `src/styles/global.css` with:

- CSS reset/normalize
- CSS custom properties for colors (light theme)
- Typography system (font-family, sizes, line-heights)
- Base styles for html, body
- Smooth scroll behavior
- Focus states for accessibility
- Print styles for articles

**Deliverable**: `src/styles/global.css`

---

## Task 8: Setup Code Block Styles

Create `src/styles/code-theme.css` with:

- Syntax highlighting styles (GitHub Dark theme)
- Code block container styles (border, shadow, padding)
- Line numbers styling
- Highlighted line background
- Language badge styling
- Copy button positioning and styling
- Mobile responsive adjustments (smaller font)
- Scrollbar styling for code overflow

**Deliverable**: `src/styles/code-theme.css`

---

## Task 9: Create Base Layout

Create `src/layouts/BaseLayout.astro` with:

**Props interface**:
- `title`: string
- `description`: string
- `image?`: string
- `type?`: 'website' | 'article'

**Features**:
- HTML boilerplate with proper doctype
- Dynamic meta tags (title, description)
- Open Graph tags (OG:title, OG:description, OG:image, OG:type)
- Twitter Card tags
- Favicon link
- Google AdSense script in `<head>` (use env variable)
- Import global CSS and code-theme CSS
- Semantic HTML5 structure (header, main, footer slots)
- Viewport meta for responsive
- Theme color meta

**Deliverable**: `src/layouts/BaseLayout.astro`

---

## Task 10: Create Header Component

Create `src/components/Header.astro` with:

**Features**:
- Site logo/title on left (link to homepage)
- Navigation menu on right:
  - Home (/)
  - Blog (/blog)
  - Tags (/tags)
  - About (/about)
- Active link highlighting (check current path)
- Sticky header (position: sticky)
- Mobile responsive with hamburger menu
- Use Tailwind CSS for styling
- Semantic HTML (nav, ul, li)

**Deliverable**: `src/components/Header.astro`

---

## Task 11: Create Footer Component

Create `src/components/Footer.astro` with:

**Content**:
- Copyright notice with current year (use JavaScript `new Date().getFullYear()`)
- Social media links (GitHub, Twitter, LinkedIn) from site config
- RSS feed link (/rss.xml)
- "Built with Astro" credit
- Centered layout with subtle top border
- Use Tailwind CSS for styling

**Deliverable**: `src/components/Footer.astro`

---

## Task 12: Create Blog Card Component

Create `src/components/BlogCard.astro` for blog post previews.

**Props**:
- `title`: string
- `description`: string
- `pubDate`: Date
- `slug`: string
- `heroImage?`: string
- `tags?`: string[]

**Display**:
- Hero image with lazy loading (if provided)
- Title linked to `/blog/${slug}`
- Description truncated to 150 characters
- Formatted publication date
- Reading time estimate
- Tags as colored pills
- Card hover effect (subtle scale and shadow)
- Use Tailwind CSS
- Proper aspect ratio for images (16:9)

**Deliverable**: `src/components/BlogCard.astro`

---

## Task 13: Create Code Block Component

Create `src/components/CodeBlock.astro` for enhanced code display.

**Features**:
- Wrapper for code blocks with file title bar
- Copy to clipboard button (top-right corner)
- Language badge (bottom-right)
- Line numbers toggle option
- File name display (if title provided)
- Client-side script for copy functionality:
  - Click button copies code to clipboard
  - Show "Copied!" feedback for 2 seconds
  - Accessible with keyboard (button focus)

**Deliverable**: `src/components/CodeBlock.astro` with client-side script

---

## Task 14: Create Table of Contents Component

Create `src/components/TableOfContents.astro`.

**Props**:
- `headings`: array of `{depth: number, slug: string, text: string}`

**Features**:
- Generate nested list from headings (h2, h3 only)
- Links with smooth scroll behavior
- Sticky positioning on desktop (top: 100px)
- Hidden on mobile (use media queries)
- Highlight current section on scroll (client-side JS)
- Clean, minimal design with Tailwind CSS

**Deliverable**: `src/components/TableOfContents.astro`

---

## Task 15: Create Blog Post Layout

Create `src/layouts/BlogPost.astro` for individual articles.

**Props** (from frontmatter):
- `title`, `description`, `pubDate`, `updatedDate`, `heroImage`, `tags`

**Structure**:
1. Use BaseLayout with article meta tags
2. Article header:
   - Title (h1)
   - Publication date and updated date
   - Reading time
   - Tags as links
3. Hero image (if provided, use Astro Image component)
4. Table of contents sidebar (pass headings)
5. Article content with prose styling (use @tailwindcss/typography)
6. Google AdSense ad units:
   - After first paragraph (optional)
   - Mid-article (after 40% content)
   - End of article
7. Share buttons (Twitter, LinkedIn, Copy link)
8. Previous/Next post navigation
9. Related posts section (3 posts)

**Deliverable**: `src/layouts/BlogPost.astro` with full article layout

---

## Task 16: Create Homepage

Create `src/pages/index.astro`.

**Features**:
- Hero section:
  - Site title (from config)
  - Tagline/description
- Featured post section (latest post as hero card)
- Grid of recent posts (12 posts)
  - 1 column on mobile
  - 2 columns on tablet
  - 3 columns on desktop
  - Use BlogCard component
- "View All Posts" button linking to /blog
- Search button (placeholder, no functionality yet)

**Data**:
- Fetch all posts from Content Collections
- Sort by pubDate (newest first)
- Filter out drafts
- Limit to 12 posts

**Deliverable**: `src/pages/index.astro` with responsive layout

---

## Task 17: Create Blog Archive Page

Create `src/pages/blog/index.astro`.

**Features**:
- Page title "All Posts"
- Post count display ("Showing X posts")
- Search input (client-side filter by title/description)
- Tag filter buttons (show all available tags)
- Grid layout (same as homepage)
- Pagination if more than 15 posts
- Clear filters button

**Data**:
- Fetch all published posts
- Sort by date
- Client-side JS for search/filter functionality

**Deliverable**: `src/pages/blog/index.astro` with search and filters

---

## Task 18: Create Dynamic Blog Post Page

Create `src/pages/blog/[...slug].astro`.

**Implementation**:
- Use `getStaticPaths()` to generate routes from Content Collections
- Render post using BlogPost layout
- Pass all frontmatter as props to layout
- Render markdown/MDX content
- Calculate reading time using utility function
- Generate structured data (Article schema JSON-LD)
- Add canonical URL
- Handle 404 for non-existent posts

**Deliverable**: `src/pages/blog/[...slug].astro` with dynamic routing

---

## Task 19: Create Tags Index Page

Create `src/pages/tags/index.astro`.

**Features**:
- Page title "Tags"
- Display all unique tags as cards or pills
- Show post count per tag
- Clickable to filter by tag (links to `/tags/[tag]`)
- Sort tags alphabetically
- Use grid layout
- Hover effects on tag cards

**Data**:
- Extract all unique tags from posts
- Count posts per tag

**Deliverable**: `src/pages/tags/index.astro`

---

## Task 20: Create Tag Filter Page

Create `src/pages/tags/[tag].astro`.

**Implementation**:
- Use `getStaticPaths()` to generate page for each tag
- Page title: "Posts tagged with {tag}"
- Display all posts with that tag
- Use BlogCard component
- Breadcrumb: Tags → {current tag}
- Link back to /tags

**Deliverable**: `src/pages/tags/[tag].astro` with dynamic routing

---

## Task 21: Create About Page

Create `src/pages/about.astro`.

**Content**:
- Page title "About"
- Personal bio section (placeholder text)
- Profile image placeholder
- Skills/interests section
- Contact information (email from config)
- Social media links (from config)
- "Back to Blog" button
- Use BaseLayout

**Deliverable**: `src/pages/about.astro` with clean layout

---

## Task 22: Create Share Buttons Component

Create `src/components/ShareButtons.astro`.

**Props**:
- `title`: string (post title)
- `url`: string (post URL)

**Buttons**:
1. Twitter/X - Open share dialog: `https://twitter.com/intent/tweet?text={title}&url={url}`
2. LinkedIn - Open share: `https://www.linkedin.com/sharing/share-offsite/?url={url}`
3. Copy Link - Copy URL to clipboard

**Features**:
- Icon-based buttons (use SVG or Lucide icons)
- Client-side script for copy functionality
- Toast notification "Link copied!" (2 seconds)
- Accessible (ARIA labels, keyboard support)
- Horizontal layout with spacing
- Use Web Share API if available: `navigator.share()`

**Deliverable**: `src/components/ShareButtons.astro` with working share functionality

---

## Task 23: Create Comments Component (Giscus)

Create `src/components/Comments.astro`.

**Implementation**:
- Embed Giscus (GitHub Discussions-based comments)
- Configuration:
  - repo: placeholder (user will configure)
  - repo-id: placeholder
  - category: "General"
  - mapping: "pathname"
  - theme: "preferred_color_scheme"
  - lazy loading with Intersection Observer
- Add script tag with Giscus configuration
- Make configurable via site config (enable/disable)

**Note**: Include instructions comment for user to setup GitHub Discussions

**Deliverable**: `src/components/Comments.astro` with Giscus integration

---

## Task 24: Setup RSS Feed

Create `src/pages/rss.xml.ts`.

**Implementation**:
- Use `@astrojs/rss` package
- Generate RSS 2.0 feed
- Include:
  - Site title and description (from config)
  - All published posts
  - Post title, link, pubDate, description
  - Categories (tags)
- Sort by date (newest first)

**Deliverable**: `src/pages/rss.xml.ts` that generates valid RSS feed

---

## Task 25: Create Sitemap Configuration

Ensure sitemap auto-generation is configured.

**Tasks**:
- Verify `@astrojs/sitemap` is in astro.config.mjs
- Configure with site URL
- Should auto-generate `/sitemap-index.xml`
- Include all pages and blog posts
- Set `changefreq` and `priority` if needed

**Deliverable**: Sitemap generates on build at `/sitemap-index.xml`

---

## Task 26: Create robots.txt

Create `public/robots.txt`.

**Content**:
```
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap-index.xml
```

**Deliverable**: `public/robots.txt`

---

## Task 27: Create Structured Data Component

Create `src/components/StructuredData.astro`.

**Props**:
- `type`: 'website' | 'article'
- `title`, `description`, `image`, `datePublished`, `dateModified`, `author`

**Generate JSON-LD** for:
1. Website schema (for homepage)
2. Article schema (for blog posts)
3. BreadcrumbList (for navigation)

**Output**: `<script type="application/ld+json">` with structured data

**Deliverable**: `src/components/StructuredData.astro` with schema.org markup

---

## Task 28: Create AdSense Ad Unit Component

Create `src/components/AdUnit.astro`.

**Props**:
- `slot`: string (ad slot ID)
- `format`: 'auto' | 'rectangle' | 'horizontal'
- `className?`: string

**Implementation**:
- Render `<ins class="adsbygoogle">` element with:
  - `data-ad-client` from env variable
  - `data-ad-slot` from props
  - `data-ad-format` from props
  - `style` for display
- Client-side script to push to `(adsbygoogle = window.adsbygoogle || []).push({})`
- Reserve min-height to prevent layout shift (CLS)

**Deliverable**: `src/components/AdUnit.astro` for AdSense integration

---

## Task 29: Create ads.txt File

Create `public/ads.txt`.

**Content** (placeholder):
```
google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
```

**Note**: Add instruction comment that user needs to replace with their actual AdSense publisher ID

**Deliverable**: `public/ads.txt`

---

## Task 30: Setup Environment Variables

Create `.env.example` file with:

```
# Google AdSense
ADSENSE_PUBLISHER_ID=ca-pub-XXXXXXXXXXXXXXXX

# Google Analytics
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX

# Site URL (production)
SITE_URL=https://yourdomain.com

# Features
ENABLE_COMMENTS=true
```

Create `.env` file (add to .gitignore).

**Deliverable**: `.env.example` and `.env` files

---

## Task 31: Update .gitignore

Ensure `.gitignore` includes:
- `node_modules/`
- `dist/`
- `.env`
- `.DS_Store`
- `.astro/`
- `npm-debug.log*`

**Deliverable**: Updated `.gitignore`

---

## Task 32: Implement Client-Side Search

Create `src/components/Search.astro`.

**Features**:
- Search input field
- Search button/icon
- Real-time filtering as user types
- Search through post titles and descriptions
- Display results count
- Clear search button
- Keyboard shortcut (Cmd/Ctrl + K to open)
- Escape to close
- Client-side JavaScript implementation

**Data**:
- Fetch all posts and pass as JSON to client script
- Filter on client-side for instant results

**Deliverable**: `src/components/Search.astro` with working search

---

## Task 33: Add Image Optimization

Update all image usages to use Astro's `<Image>` component.

**Tasks**:
- Replace `<img>` tags with `<Image>` component
- Configure with:
  - `width`, `height` attributes
  - `format="webp"`
  - `quality={80}`
  - `loading="lazy"` (except above-the-fold)
  - `alt` text for accessibility
- Create image size presets:
  - hero: 1200x630
  - thumbnail: 400x300
  - inline: 800xauto

**Deliverable**: All images optimized with Astro Image component

---

## Task 34: Create Sample Blog Posts

Create 3 sample blog posts in `src/content/blog/`:

1. `sample-post-1.md` - "Getting Started with Astro"
   - Include code examples (JavaScript, HTML)
   - Use line highlighting
   - Use file titles in code blocks
   
2. `sample-post-2.md` - "Advanced Code Highlighting Features"
   - Show different language examples
   - Demonstrate diff syntax
   - Show inline code usage
   
3. `sample-post-3.md` - "Building a Modern Blog"
   - Include images
   - Multiple headings (for TOC)
   - Various tags

**Deliverable**: 3 sample markdown files with proper frontmatter

---

## Task 35: Add Tailwind Typography Plugin

Install and configure `@tailwindcss/typography`.

**Tasks**:
- Install package: `@tailwindcss/typography`
- Add to `tailwind.config.mjs` plugins array
- Apply `prose` class to article content in BlogPost layout
- Customize typography styles if needed (headings, links, code)

**Deliverable**: Prose styling applied to blog content

---

## Task 36: Create 404 Page

Create `src/pages/404.astro`.

**Content**:
- "404 - Page Not Found" heading
- Friendly message
- Link back to homepage
- Optional: Search functionality
- Use BaseLayout
- Fun illustration or animation (optional)

**Deliverable**: `src/pages/404.astro`

---

## Task 37: Add Reading Progress Bar

Create `src/components/ReadingProgress.astro`.

**Features**:
- Fixed position at top of page
- Shows reading progress (0-100%)
- Updates on scroll
- Smooth animation
- Only show on blog posts
- Use client-side JavaScript with scroll event
- Thin bar (2-3px height) with accent color

**Deliverable**: `src/components/ReadingProgress.astro`

---

## Task 38: Optimize Performance

Review and optimize:

**Tasks**:
1. Minify CSS and JS (configure in astro.config.mjs)
2. Add resource hints (preconnect, dns-prefetch) for external domains
3. Inline critical CSS in BaseLayout
4. Defer non-critical scripts
5. Add font-display: swap for custom fonts
6. Enable compression in build
7. Ensure no render-blocking resources
8. Optimize LCP, FID, CLS metrics

**Deliverable**: Optimized build configuration

---

## Task 39: Accessibility Audit

Ensure accessibility standards (WCAG 2.1 AA):

**Checklist**:
1. All images have alt text
2. Proper heading hierarchy (h1 → h2 → h3)
3. Links have descriptive text (no "click here")
4. Color contrast ratios meet 4.5:1 for text
5. Form labels properly associated
6. Keyboard navigation works (test with Tab key)
7. Focus indicators visible
8. ARIA labels where needed (icon buttons)
9. Skip to main content link
10. Semantic HTML (nav, main, article, footer)

**Deliverable**: Accessible site passing WCAG AA standards

---

## Task 40: Create Migration Script

Create `scripts/migrate-wordpress.js` (Node.js script).

**Purpose**: Convert WordPress XML export to Markdown files

**Features**:
1. Read WordPress XML export file (pass as argument)
2. Parse XML (use xml2js package)
3. Extract posts (title, content, date, tags, categories)
4. Convert HTML content to Markdown (use turndown package)
5. Generate frontmatter for each post
6. Download images from WordPress (use node-fetch)
7. Save images to `public/images/posts/`
8. Update image paths in content
9. Create slug from title
10. Save to `src/content/blog/{slug}.md`
11. Create `redirects.json` mapping old URLs to new URLs
12. Log progress and errors

**Usage**: `node scripts/migrate-wordpress.js wordpress-export.xml`

**Dependencies**: Install `xml2js`, `turndown`, `node-fetch`, `gray-matter`

**Deliverable**: `scripts/migrate-wordpress.js` migration script

---

## Task 41: Create Redirects File

Create `public/_redirects` for Cloudflare Pages URL redirects.

**Format** (Cloudflare Pages syntax):
```
/old-url-path  /new-url-path  301
```

**Common redirects**:
```
/:year/:month/:day/:slug  /blog/:slug  301
/category/*  /tags/:splat  301
/feed  /rss.xml  301
/feed/  /rss.xml  301
/author/*  /about  301
```

**Note**: Will be populated by migration script with actual URLs

**Deliverable**: `public/_redirects` file

---

## Task 42: Create README Documentation

Create `README.md` with:

**Sections**:
1. Project title and description
2. Features list
3. Tech stack
4. Prerequisites (Node.js 18+, npm)
5. Installation steps
6. Development workflow (`npm run dev`)
7. Building for production (`npm run build`)
8. Environment variables needed
9. Deployment instructions (Cloudflare Pages)
10. Project structure overview
11. Contributing guidelines (optional)
12. License (optional)

**Deliverable**: Comprehensive `README.md`

---

## Task 43: Create Setup Documentation

Create `SETUP.md` with detailed setup instructions:

**Content**:
1. Clone repository steps
2. Install dependencies: `npm install`
3. Configure environment variables (copy `.env.example` to `.env`)
4. Update site config in `src/config.ts`
5. Setup Google AdSense:
   - Create AdSense account
   - Get publisher ID
   - Update ads.txt
   - Add to .env file
6. Setup Giscus comments:
   - Enable GitHub Discussions on repo
   - Configure at giscus.app
   - Update Comments component
7. Run development server: `npm run dev`
8. Access at `http://localhost:4321`

**Deliverable**: `SETUP.md` file

---

## Task 44: Create Content Writing Guide

Create `CONTENT.md` with guide for writing posts:

**Sections**:
1. Creating new posts (file naming, location)
2. Frontmatter fields explained
3. Markdown syntax guide
4. Code blocks with features:
   - Basic code block
   - With title: ` ```js title="file.js" `
   - With line numbers: ` ```js showLineNumbers `
   - With highlighting: ` ```js {3-5} `
   - Diff syntax: ` ```diff `
5. Image guidelines (size, format, paths)
6. Internal linking between posts
7. SEO best practices (titles, descriptions, headings)
8. Publishing workflow (draft → published)

**Deliverable**: `CONTENT.md` guide

---

## Task 45: Create Deployment Documentation

Create `DEPLOYMENT.md` with Cloudflare Pages setup:

**Steps**:
1. Create Cloudflare account
2. Go to Pages section
3. Connect GitHub repository
4. Configure build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `/`
   - Node version: 18
5. Add environment variables in Cloudflare dashboard
6. Configure custom domain:
   - Add domain to Cloudflare
   - Update DNS records (CNAME to pages.dev)
   - Enable SSL/TLS (Full/Strict)
7. Enable build optimizations:
   - Auto Minify (CSS, JS, HTML)
   - Brotli compression
8. Setup preview deployments (all branches)
9. First deployment steps
10. Verify deployment works

**Deliverable**: `DEPLOYMENT.md` guide

---

## Task 46: Create Testing Checklist

Create `TESTING.md` with comprehensive testing checklist:

**Pre-deployment tests**:

1. **Functionality**:
   - [ ] All navigation links work
   - [ ] Search functionality works
   - [ ] Tag filtering works
   - [ ] Pagination works (if implemented)
   - [ ] Share buttons work
   - [ ] Comments load (if enabled)
   - [ ] RSS feed generates
   - [ ] Sitemap generates

2. **Content**:
   - [ ] All posts display correctly
   - [ ] Images load
   - [ ] Code blocks render with syntax highlighting
   - [ ] Copy button works on code blocks
   - [ ] Table of contents links work
   - [ ] Internal links work
   - [ ] External links open in new tab

3. **SEO**:
   - [ ] Meta tags present on all pages
   - [ ] OG tags correct
   - [ ] Structured data validates (use Google Rich Results Test)
   - [ ] Sitemap accessible at /sitemap-index.xml
   - [ ] robots.txt accessible
   - [ ] Canonical URLs correct

4. **Performance**:
   - [ ] Lighthouse score >90 all categories
   - [ ] Core Web Vitals pass (LCP <2.5s, FID <100ms, CLS <0.1)
   - [ ] Images optimized (WebP format)
   - [ ] No console errors

5. **Responsive**:
   - [ ] Mobile (320px, 375px, 414px)
   - [ ] Tablet (768px, 1024px)
   - [ ] Desktop (1440px, 1920px)

6. **Cross-browser**:
   - [ ] Chrome
   - [ ] Firefox
   - [ ] Safari
   - [ ] Edge

7. **Accessibility**:
   - [ ] Keyboard navigation works
   - [ ] Screen reader compatible
   - [ ] Color contrast sufficient
   - [ ] Focus indicators visible

8. **AdSense**:
   - [ ] Ads display correctly
   - [ ] No layout shift from ads
   - [ ] ads.txt accessible

**Deliverable**: `TESTING.md` checklist

---

## Task 47: Run Build Test

Execute build and verify:

**Commands**:
```bash
npm run build
npm run preview
```

**Verify**:
- Build completes without errors
- No TypeScript errors
- All pages generate
- Assets optimized
- Preview server runs
- Site accessible at preview URL
- All features work in production build

**Deliverable**: Successful production build

---

## Task 48: Run Lighthouse Audit

Test site performance with Lighthouse:

**Tasks**:
1. Build and preview site
2. Open Chrome DevTools
3. Run Lighthouse audit (Desktop and Mobile)
4. Check scores:
   - Performance: target >95
   - Accessibility: target >95
   - Best Practices: target >95
   - SEO: target >95
5. Review opportunities and diagnostics
6. Fix critical issues if any

**Deliverable**: Lighthouse scores >90 in all categories

---

## Task 49: Create Post Template

Create `src/content/blog/_template.md` as template for new posts:

**Template**:
```markdown
---
title: "Your Post Title"
description: "SEO-friendly description (150-160 characters)"
pubDate: 2024-01-15
heroImage: "/images/posts/your-image.jpg"
tags: ["tag1", "tag2", "tag3"]
draft: true
---

## Introduction

Write your introduction here...

## Main Content

### Code Examples

Show code with features:

```javascript title="example.js" showLineNumbers {3-5}
// Your code here
const greeting = "Hello World";
// Lines 3-5 will be highlighted
console.log(greeting);
const sum = (a, b) => a + b;
```

### Multiple Languages

```python title="script.py"
def greet(name):
    return f"Hello, {name}!"

print(greet("World"))
```

### Show Code Changes

```diff title="changes.js"
  const original = "code";
- const removed = "old line";
+ const added = "new line";
  const unchanged = "stays same";
```

### Inline Code

Use `inline code` for short snippets.

## Conclusion

Wrap up your