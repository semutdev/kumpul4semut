# Astro Blog Implementation Guide
## Using Claude Code CLI

---

## Table of Contents
1. [Pre-requisites](#pre-requisites)
2. [Project Setup](#project-setup)
3. [Step-by-Step Prompts](#step-by-step-prompts)
4. [Todo Checklist](#todo-checklist)
5. [Verification Steps](#verification-steps)
6. [Troubleshooting](#troubleshooting)

---

## Pre-requisites

### Required Tools
- [ ] Node.js 18+ installed
- [ ] Git installed
- [ ] Claude Code CLI installed
- [ ] GitHub account (for deployment)
- [ ] Cloudflare account

### WordPress Export
- [ ] Export WordPress content (Tools → Export → All Content)
- [ ] Download all images from WordPress media library
- [ ] Copy AdSense publisher ID
- [ ] Copy ads.txt content

---

## Project Setup

### 1. Create Project Directory
```bash
mkdir astro-blog
cd astro-blog
```

### 2. Initialize Git
```bash
git init
git branch -M main
```

### 3. Create GitHub Repository
- Go to GitHub and create new repository
- Name it `astro-blog` or your preferred name
- Don't initialize with README (we'll push existing code)

---

## Step-by-Step Prompts

Use these prompts sequentially with Claude Code CLI. Each prompt is designed to be self-contained and focused on a specific task.

### Phase 1: Project Initialization

#### Prompt 1: Initialize Astro Project
```
Initialize a new Astro project with the following requirements:
- Use the latest stable Astro version
- Setup with TypeScript support
- Include @astrojs/sitemap, @astrojs/rss integrations
- Configure for static site generation
- Setup Tailwind CSS for styling
- Create basic project structure:
  - src/components (Header, Footer, BlogCard, TableOfContents)
  - src/layouts (BaseLayout, BlogPost)
  - src/pages (index, blog, tags, about)
  - src/content/blog (with config.ts for Content Collections)
  - src/styles (global.css)
  - public folder (favicon, images, ads.txt)

Configure astro.config.mjs with:
- site: 'https://yourdomain.com' (placeholder for now)
- sitemap integration
- markdown with syntax highlighting (github-dark theme)
- image optimization

Create package.json scripts for dev, build, and preview.
```

#### Prompt 2: Setup Content Collections Schema
```
Setup Astro Content Collections for the blog with the following schema:

In src/content/config.ts, define a blog collection with validation for:
- title (string, required)
- description (string, required, for SEO)
- pubDate (date, required)
- updatedDate (date, optional)
- heroImage (string, optional)
- tags (array of strings, optional)
- draft (boolean, default false)

Include helper functions to:
- Sort posts by date (newest first)
- Filter out draft posts in production
- Generate slugs from filenames
```

#### Prompt 3: Create Base Layout Component
```
Create src/layouts/BaseLayout.astro with:

Features needed:
- HTML boilerplate with proper meta tags
- Dynamic title, description, and OG tags (props-based)
- Google AdSense script in head (use env variable for publisher ID)
- Favicon link
- Global CSS import
- Google Analytics 4 script (optional, env variable)
- Responsive viewport meta
- Theme color meta
- Structured data for website

Props interface:
- title: string
- description: string
- image?: string
- type?: 'website' | 'article'

Include modern, semantic HTML5 structure.
```

---

### Phase 2: Core Components

#### Prompt 4: Create Header Component
```
Create src/components/Header.astro for the site header:

Design requirements:
- Clean, minimal design
- Logo/site name on the left
- Navigation menu on the right (Home, Blog, Tags, About)
- Mobile responsive (hamburger menu for mobile)
- Sticky header (optional)
- Use Tailwind CSS for styling
- Active link highlighting

Navigation items:
- Home (/)
- Blog (/blog)
- Tags (/tags)
- About (/about)

Make it reusable and configurable via props if needed.
```

#### Prompt 5: Create Footer Component
```
Create src/components/Footer.astro with:

Content needed:
- Copyright notice with current year (dynamic)
- Social media links (GitHub, Twitter, LinkedIn) - use props/config
- RSS feed link
- "Built with Astro" mention
- Clean, centered design
- Subtle separator line at top

Use Tailwind CSS for styling with neutral colors.
Make social links configurable via a site config file.
```

#### Prompt 6: Create Blog Card Component
```
Create src/components/BlogCard.astro for displaying blog post previews:

Props needed:
- title: string
- description: string
- pubDate: Date
- slug: string
- heroImage?: string
- tags?: string[]

Display:
- Hero image (if available, with lazy loading)
- Title (linked to post)
- Description/excerpt (truncated to ~150 chars)
- Publication date (formatted nicely)
- Reading time estimate
- Tags (as pills/badges)
- Hover effect (subtle scale or shadow)

Use Tailwind CSS for card styling with modern design.
Include proper aspect ratio for images.
```

#### Prompt 7: Create Table of Contents Component
```
Create src/components/TableOfContents.astro:

Features:
- Auto-generate TOC from article headings (h2, h3)
- Sticky positioning on desktop (right side or left side)
- Hide on mobile
- Smooth scroll to sections
- Highlight current section on scroll (client-side JS)
- Clean, minimal design
- Collapsible on mobile (if shown)

Props:
- headings: array of {depth, slug, text}

Use Astro's getHeadings() function to pass data from blog post layout.
```

---

### Phase 3: Page Templates

#### Prompt 8: Create Blog Post Layout
```
Create src/layouts/BlogPost.astro for individual blog posts:

Features needed:
- Extend BaseLayout
- Article header with:
  - Title (h1)
  - Publication date and updated date
  - Reading time estimate
  - Tags
  - Author info (optional)
- Hero image (optimized, with Astro Image component)
- Table of contents (using TableOfContents component)
- Article content area (prose styling)
- Google AdSense ad units:
  - One after title (optional)
  - One mid-article (after 40% of content)
  - One at end of article
- Share buttons (Twitter, LinkedIn, copy link)
- Previous/Next post navigation
- Related posts section (3-4 posts with same tags)

Props from Content Collection:
- title, description, pubDate, updatedDate, heroImage, tags

Use Tailwind typography plugin for article prose.
Ensure ads don't cause layout shift (CLS optimization).
```

#### Prompt 9: Create Homepage (index.astro)
```
Create src/pages/index.astro for the homepage:

Features:
- Hero section with site title and tagline
- Featured/latest post (hero card)
- Grid of recent posts (9-12 posts)
- "View all posts" link to /blog
- Search button/input (placeholder for now)
- Use BlogCard component for posts
- Responsive grid layout (1 col mobile, 2 col tablet, 3 col desktop)

Fetch posts from Content Collections:
- Sort by date (newest first)
- Filter out drafts
- Limit to 12 posts for homepage

Use clean, modern design with generous whitespace.
```

#### Prompt 10: Create Blog Archive Page
```
Create src/pages/blog/index.astro for the blog archive:

Features:
- Page title "All Posts"
- Search functionality (client-side filter)
- Tag filter buttons (show all tags)
- List all posts using BlogCard component
- Pagination (10-15 posts per page)
- Post count display
- Responsive grid layout

Implement client-side search:
- Search by title and description
- Instant filtering
- Clear search button

Fetch all published posts from Content Collections.
Sort by date (newest first).
```

#### Prompt 11: Create Individual Blog Post Page
```
Create src/pages/blog/[...slug].astro for dynamic blog post routes:

Implementation:
- Use getStaticPaths() to generate routes from Content Collections
- Render using BlogPost layout
- Pass all frontmatter as props
- Render markdown content
- Calculate reading time
- Generate structured data (Article schema)
- Include proper canonical URL
- Add social meta tags

Handle edge cases:
- 404 for non-existent posts
- Redirect drafts in production

Use Astro's Content Collection rendering.
```

#### Prompt 12: Create Tags Pages
```
Create two files for tags functionality:

1. src/pages/tags/index.astro - Tags archive
   - Display all unique tags
   - Show post count per tag
   - Styled as pills/cards
   - Clickable to filter posts

2. src/pages/tags/[tag].astro - Tag filter page
   - Show all posts with specific tag
   - Page title: "Posts tagged with {tag}"
   - Use BlogCard component
   - Breadcrumb back to tags index
   - Use getStaticPaths() to generate tag pages

Extract unique tags from all posts using Content Collections.
Sort tags alphabetically.
```

#### Prompt 13: Create About Page
```
Create src/pages/about.astro:

Content structure:
- Page title "About"
- Personal bio section
- Profile image (optional)
- Skills/interests
- Contact information
- Social media links
- "Back to blog" link

Use BaseLayout.
Clean, simple design with good typography.
Make content configurable (consider using a config file or markdown).
```

---

### Phase 4: Utilities & Configuration

#### Prompt 14: Create Site Configuration
```
Create src/config.ts for site-wide configuration:

Export configuration object with:
- site:
  - title: string
  - description: string
  - author: string
  - url: string
  - email: string (optional)
- social:
  - github: string (URL)
  - twitter: string (URL)
  - linkedin: string (URL)
- analytics:
  - googleAnalyticsId: string (from env)
- adsense:
  - publisherId: string (from env)
- pagination:
  - postsPerPage: number
- features:
  - darkMode: boolean
  - comments: boolean

Use this config throughout the app instead of hardcoding values.
```

#### Prompt 15: Setup Global Styles
```
Create src/styles/global.css with:

Styles needed:
- CSS reset/normalize
- Custom properties for colors (light mode)
- Typography scale
- Prose styles for blog content (or use @tailwindcss/typography)
- Code block styling (syntax highlighting)
- Smooth scroll behavior
- Focus states for accessibility
- Print styles for articles

Use modern CSS with:
- CSS Grid and Flexbox
- Custom properties
- Logical properties
- Container queries (if needed)

Ensure dark mode ready (if implementing later).
Keep it minimal and performant.
```

#### Prompt 15b: Setup Advanced Code Highlighting
```
Setup enhanced code block features for technical blog posts:

1. Install required packages:
   - @astrojs/mdx (for MDX support)
   - rehype-pretty-code or shiki (better syntax highlighting)
   - rehype-autolink-headings
   - rehype-slug

2. Configure astro.config.mjs for code highlighting:
   - Enable line numbers
   - Enable line highlighting (highlight specific lines)
   - Enable diff syntax (+/- for added/removed lines)
   - Support for multiple themes (light/dark)
   - File name display in code blocks
   - Copy button for code blocks

3. Supported code block features in Markdown:
   ```javascript title="example.js" {3-5} showLineNumbers
   const greeting = "Hello";
   console.log(greeting);
   // This line is highlighted
   // This line is highlighted
   // This line is highlighted
   ```

4. Create src/components/CodeBlock.astro:
   - Wrapper for pre/code blocks
   - Add copy button (copy to clipboard)
   - Show language badge
   - Show file name if provided
   - Line numbers toggle
   - Wrap/no-wrap toggle

5. Style code blocks in global.css:
   - Theme: Use GitHub Dark or VS Code Dark theme
   - Add border and shadow to code blocks
   - Proper padding and margins
   - Scrollable for long lines
   - Highlighted line background color
   - Line numbers styling
   - Mobile responsive (smaller font on mobile)

6. Add copy button functionality:
   - Icon button in top-right of code block
   - Click to copy entire code
   - Toast/feedback "Copied!"
   - Accessible (keyboard + screen reader support)

This is critical for technical blog posts with lots of code examples.
```

#### Prompt 16: Add Utility Functions
```
Create src/utils/helpers.ts with utility functions:

Functions needed:
1. formatDate(date: Date): string
   - Format to readable date (e.g., "January 15, 2024")

2. readingTime(content: string): string
   - Calculate estimated reading time
   - Return as "X min read"

3. truncateText(text: string, maxLength: number): string
   - Truncate text with ellipsis

4. slugify(text: string): string
   - Convert text to URL-friendly slug

5. getUniqueTags(posts: array): string[]
   - Extract unique tags from posts array
   - Sort alphabetically

6. getRelatedPosts(currentPost, allPosts, limit = 4)
   - Find posts with matching tags
   - Exclude current post
   - Sort by relevance

Add proper TypeScript types.
Include JSDoc comments.
```

---

### Phase 5: SEO & Performance

#### Prompt 17: Setup RSS Feed
```
Create src/pages/rss.xml.ts for RSS feed generation:

Use @astrojs/rss package to:
- Generate RSS 2.0 feed
- Include all published posts
- Add proper metadata (title, description, link)
- Include post content or description
- Add pubDate for each item
- Include categories (tags)

Configure in astro.config.mjs if needed.
Ensure feed validates at https://validator.w3.org/feed/
```

#### Prompt 18: Create Sitemap & Robots.txt
```
1. Ensure sitemap is configured in astro.config.mjs
   - Should auto-generate at /sitemap-index.xml
   - Include all pages and posts
   - Set changefreq and priority

2. Create public/robots.txt:
   - Allow all bots
   - Reference sitemap
   - Disallow nothing (unless you have admin pages)

Content:
```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap-index.xml
```

Verify sitemap generates correctly after build.
```

#### Prompt 19: Add Structured Data
```
Create src/components/StructuredData.astro:

Generate JSON-LD structured data for:
1. Website (for homepage)
2. Article (for blog posts)
3. BreadcrumbList (for navigation)

Props needed:
- type: 'website' | 'article'
- title, description, image, datePublished, dateModified, author

Include in BaseLayout and BlogPost layout.
Use schema.org vocabulary.
Validate with Google's Rich Results Test.
```

#### Prompt 20: Setup AdSense Integration
```
Integrate Google AdSense throughout the site:

Tasks:
1. Add AdSense script to BaseLayout (already done, verify)

2. Create src/components/AdUnit.astro:
   - Props: slot (string), format (string)
   - Render ins.adsbygoogle element
   - Push to adsbygoogle array
   - Support different ad formats (display, in-article, in-feed)

3. Add ads.txt to public/ folder:
   - Content from WordPress ads.txt
   - Format: google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0

4. Place AdUnit components in:
   - BlogPost layout (mid-article, end-article)
   - Homepage (between post rows, optional)

5. Create .env file:
   - ADSENSE_PUBLISHER_ID=ca-pub-XXXXXXXXXXXXXXXX

Ensure no layout shift from ads (reserve space or use min-height).
Test with AdSense testing mode.
```

---

### Phase 6: Search & Interactivity

#### Prompt 21: Implement Client-Side Search
```
Implement search functionality using Pagefind or simple client-side search:

Option A - Using Pagefind (recommended):
1. Install @pagefind/default-ui
2. Add to astro.config.mjs
3. Create search UI component
4. Index builds automatically

Option B - Simple JS search:
1. Create src/components/Search.astro
2. Include client-side script
3. Search through posts JSON
4. Filter and display results
5. Highlight matching text

Features:
- Instant search results
- Search by title, description, tags
- Keyboard navigation
- Clear search button
- Mobile responsive

Add search to Header component.
```

#### Prompt 22: Add Comments System (Giscus)
```
Integrate Giscus for GitHub-based comments:

Tasks:
1. Setup GitHub Discussions on your repository
2. Install Giscus app on GitHub repo
3. Get Giscus configuration from https://giscus.app

4. Create src/components/Comments.astro:
   - Load Giscus script
   - Use repo, repoId, category, categoryId from config
   - Theme: preferred_color_scheme
   - Lazy load (intersection observer)

5. Add to BlogPost layout (after article content)

6. Make configurable via site config (enable/disable)

Use data-strict="1" for privacy.
Support dark mode theme switching.
```

#### Prompt 23: Add Share Buttons
```
Create src/components/ShareButtons.astro:

Share options:
1. Twitter/X - open share dialog with text and URL
2. LinkedIn - open share dialog with URL
3. Copy link - copy to clipboard with feedback

Features:
- Icon-based buttons (use SVG icons or icon library)
- Click handlers (client-side JS)
- Toast notification for "Link copied"
- Accessible (proper ARIA labels)
- Mobile friendly

Props:
- title: string (post title for sharing)
- url: string (canonical URL)

Use share Web API where supported (navigator.share).
Fallback to URL-based sharing.
```

---

### Phase 7: Content Migration

#### Prompt 24: Create Migration Script
```
Create a Node.js script: scripts/migrate-wordpress.js

Features:
1. Read WordPress XML export
2. Parse posts and pages
3. Convert HTML to Markdown
4. Extract frontmatter (title, date, tags, etc.)
5. Download and save images locally
6. Update image paths in content
7. Generate proper slugs
8. Save to src/content/blog/
9. Create index/mapping of old URLs → new URLs

Dependencies needed:
- xml2js (parse WordPress XML)
- turndown (HTML to Markdown)
- node-fetch (download images)
- gray-matter (handle frontmatter)

Usage:
node scripts/migrate-wordpress.js path/to/wordpress-export.xml

Log progress and any errors.
Create redirects.json for URL mapping.
```

#### Prompt 25: Setup URL Redirects
```
Create Cloudflare Pages _redirects file for URL redirects:

Tasks:
1. Create public/_redirects file

2. Use redirects.json from migration script

3. Format (Cloudflare Pages redirect syntax):
   /old-url-1  /new-url-1  301
   /old-url-2  /new-url-2  301

4. Common WordPress → Astro redirects:
   /2024/01/15/post-slug → /blog/post-slug
   /category/* → /tags/:splat
   /author/* → /about
   /feed → /rss.xml

5. Wildcard for old date-based URLs:
   /:year/:month/:day/:slug → /blog/:slug

Test redirects after deployment.
Verify with redirect checker tools.
```

---

### Phase 8: Testing & Optimization

#### Prompt 26: Add Image Optimization
```
Optimize images throughout the site:

Tasks:
1. Use Astro's Image component for all images
2. Define image sizes and formats
3. Create responsive image sets
4. Add lazy loading
5. Generate WebP with fallbacks

Update components to use:
<Image 
  src={heroImage} 
  alt={title}
  width={1200}
  height={630}
  format="webp"
  quality={80}
  loading="lazy"
/>

Create image presets in astro.config.mjs:
- hero: 1200x630
- thumbnail: 400x300
- inline: 800x auto

Compress images in public/ folder before build.
```

#### Prompt 27: Performance Optimization
```
Optimize site performance:

Tasks:
1. Minimize JavaScript (only where needed)
2. Inline critical CSS
3. Defer non-critical CSS
4. Add resource hints (preconnect, dns-prefetch)
5. Optimize fonts (use font-display: swap)
6. Add service worker (optional, for offline)
7. Enable compression in Cloudflare
8. Set proper cache headers

Check:
- Lighthouse score (target >95)
- Core Web Vitals (LCP, FID, CLS)
- First Contentful Paint
- Time to Interactive

Use astro-compress or similar for minification.
Test on mobile and desktop.
```

#### Prompt 28: Accessibility Audit
```
Ensure site is accessible (WCAG 2.1 AA):

Checklist:
1. Semantic HTML everywhere
2. Proper heading hierarchy (h1 → h2 → h3)
3. Alt text for all images
4. ARIA labels where needed
5. Keyboard navigation works
6. Focus indicators visible
7. Color contrast ratios (4.5:1 for text)
8. Skip to main content link
9. No flashing content
10. Form labels properly associated

Tools to use:
- axe DevTools
- WAVE browser extension
- Lighthouse accessibility audit
- Keyboard-only navigation test

Fix any critical or serious issues found.
```

#### Prompt 29: Create Testing Checklist
```
Create TESTING.md with comprehensive testing checklist:

Categories:
1. Functionality
   - All links work
   - Navigation works
   - Search works
   - Forms submit (if any)
   - Comments load
   - AdSense displays

2. Content
   - All posts migrated
   - Images load correctly
   - Code blocks formatted
   - No broken internal links

3. SEO
   - Meta tags present
   - OG tags correct
   - Sitemap generated
   - Robots.txt accessible
   - Structured data validates

4. Performance
   - Lighthouse scores >90
   - Images optimized
   - No console errors
   - Fast page loads

5. Cross-browser
   - Chrome, Firefox, Safari, Edge
   - Mobile browsers (iOS Safari, Chrome Android)

6. Responsive
   - Mobile (320px, 375px, 414px)
   - Tablet (768px, 1024px)
   - Desktop (1440px, 1920px)

7. Analytics
   - GA4 tracking works
   - AdSense impressions recorded

Include manual testing steps for each.
```

---

### Phase 9: Deployment

#### Prompt 30: Setup Cloudflare Pages
```
Create deployment configuration for Cloudflare Pages:

Tasks:
1. Create cloudflare-pages.md with setup instructions

2. Configure build settings:
   - Build command: npm run build
   - Build output directory: dist
   - Root directory: /
   - Node version: 18

3. Environment variables to add:
   - ADSENSE_PUBLISHER_ID
   - GOOGLE_ANALYTICS_ID (if using)

4. Setup custom domain:
   - Add domain to Cloudflare
   - Configure DNS (CNAME to pages.dev)
   - Enable SSL/TLS (Full or Strict)

5. Configure Cloudflare settings:
   - Enable Auto Minify (CSS, JS, HTML)
   - Enable Brotli compression
   - Set Browser Cache TTL
   - Configure security headers

6. Setup preview deployments:
   - Preview branches: all branches
   - Production branch: main

Document entire deployment process.
Include rollback procedure.
```

#### Prompt 31: Create CI/CD Pipeline
```
Setup GitHub Actions for CI/CD (optional but recommended):

Create .github/workflows/deploy.yml:

Workflow:
1. Trigger on push to main
2. Run tests (linting, type checking)
3. Build site
4. Run Lighthouse CI
5. Deploy to Cloudflare Pages (if tests pass)
6. Comment on PR with Lighthouse scores

Additional workflows:
- preview.yml (deploy PR previews)
- test.yml (run tests on PRs)

Use Cloudflare Pages GitHub integration OR
Use wrangler CLI for deployment.

Add status badges to README.md.
```

#### Prompt 32: Create Documentation
```
Create comprehensive documentation:

Files to create:
1. README.md
   - Project overview
   - Features list
   - Tech stack
   - Getting started
   - Development workflow
   - Deployment
   - Contributing guide

2. SETUP.md
   - Prerequisites
   - Installation steps
   - Configuration
   - Environment variables
   - Running locally

3. CONTENT.md
   - How to write posts
   - Frontmatter fields
   - Image guidelines
   - Markdown features
   - Publishing workflow

4. MAINTENANCE.md
   - Update dependencies
   - Backup strategy
   - Monitoring
   - Troubleshooting common issues

Use clear, step-by-step instructions.
Include code examples and screenshots.
Keep docs updated as project evolves.
```

---

### Phase 10: Post-Launch

#### Prompt 33: Setup Monitoring & Analytics
```
Configure monitoring and analytics:

Tasks:
1. Setup Google Analytics 4:
   - Create property
   - Add tracking code
   - Configure events
   - Setup custom dimensions

2. Setup Google Search Console:
   - Verify ownership
   - Submit sitemap
   - Monitor coverage
   - Track search performance

3. Setup Cloudflare Analytics:
   - Enable Web Analytics
   - Monitor traffic
   - Check cache hit rate
   - Review security events

4. Setup UptimeRobot (optional):
   - Monitor site availability
   - Alert on downtime

5. Create analytics dashboard
   - Weekly traffic
   - Top posts
   - AdSense revenue
   - Core Web Vitals

Document how to access and read each dashboard.
```

#### Prompt 34: Create Content Templates
```
Create templates for easier content creation:

1. Post template: src/content/blog/_template.md
```markdown
---
title: "Your Post Title"
description: "SEO-friendly description (150-160 chars)"
pubDate: 2024-01-15
heroImage: "/images/posts/your-image.jpg"
tags: ["tag1", "tag2"]
draft: true
---

## Introduction

Your introduction here...

## Main Content

Your main content here...

## Conclusion

Your conclusion here...
```

2. Quick post script: scripts/new-post.js
   - Prompt for title
   - Generate slug
   - Create file with template
   - Open in editor

Usage: npm run new-post

3. Image optimization script: scripts/optimize-images.js
   - Compress images
   - Convert to WebP
   - Generate thumbnails

Make content creation as smooth as possible.
```

---

## Todo Checklist

Copy this checklist and track your progress:

### Setup & Configuration
- [ ] Install Claude Code CLI
- [ ] Export WordPress content
- [ ] Download WordPress images
- [ ] Copy AdSense info
- [ ] Create GitHub repository
- [ ] Setup Cloudflare account

### Phase 1: Initialization (Prompts 1-3)
- [ ] Initialize Astro project
- [ ] Setup Content Collections
- [ ] Create Base Layout

### Phase 2: Components (Prompts 4-7)
- [ ] Create Header component
- [ ] Create Footer component
- [ ] Create BlogCard component
- [ ] Create TableOfContents component

### Phase 3: Pages (Prompts 8-13)
- [ ] Create BlogPost layout
- [ ] Create Homepage
- [ ] Create Blog archive page
- [ ] Create individual blog post page
- [ ] Create Tags pages
- [ ] Create About page

### Phase 4: Config & Utils (Prompts 14-16)
- [ ] Create site configuration
- [ ] Setup global styles
- [ ] Add utility functions

### Phase 5: SEO (Prompts 17-20)
- [ ] Setup RSS feed
- [ ] Create sitemap & robots.txt
- [ ] Add structured data
- [ ] Setup AdSense integration

### Phase 6: Features (Prompts 21-23)
- [ ] Implement search
- [ ] Add comments system
- [ ] Add share buttons

### Phase 7: Migration (Prompts 24-25)
- [ ] Create migration script
- [ ] Run migration script
- [ ] Setup URL redirects
- [ ] Verify all content migrated

### Phase 8: Testing (Prompts 26-29)
- [ ] Optimize images
- [ ] Performance optimization
- [ ] Accessibility audit
- [ ] Run full testing checklist

### Phase 9: Deployment (Prompts 30-32)
- [ ] Setup Cloudflare Pages
- [ ] Configure domain
- [ ] Setup CI/CD (optional)
- [ ] Create documentation

### Phase 10: Launch (Prompts 33-34)
- [ ] Deploy to production
- [ ] Setup monitoring
- [ ] Create content templates
- [ ] Monitor for 48 hours
- [ ] Verify AdSense working
- [ ] Check analytics

---

## Verification Steps

After completing each phase, verify:

### After Phase 1-2
```bash
npm run dev
```
- [ ] Site runs without errors
- [ ] Can navigate to homepage
- [ ] Components render correctly

### After Phase 3
- [ ] All pages accessible
- [ ] Navigation works
- [ ] Content displays properly
- [ ] Images load

### After Phase 4-5
- [ ] Config loads correctly
- [ ] Styles applied
- [ ] RSS feed generates
- [ ] Sitemap creates

### After Phase 6
- [ ] Search returns results
- [ ] Comments load
- [ ] Share buttons work

### After Phase 7
- [ ] All posts migrated
- [ ] Images migrated
- [ ] Old URLs redirect

### After Phase 8
```bash
npm run build
npm run preview
```
- [ ] Build succeeds
- [ ] No build errors
- [ ] Preview works
- [ ] Lighthouse score >90
- [ ] All tests pass

### After Phase 9
- [ ] Site deployed
- [ ] Domain resolves
- [ ] SSL certificate active
- [ ] All pages load

### After Phase 10
- [ ] Analytics tracking
- [ ] AdSense showing ads
- [ ] No console errors
- [ ] Mobile responsive

---

## Troubleshooting

### Common Issues

**Build fails:**
- Check Node.js version (18+)
- Clear node_modules and reinstall
- Check for syntax errors in Astro files
- Verify all imports are correct

**Images not loading:**
- Check image paths (should start with /)
- Verify images in public/ folder
- Check Image component syntax
- Ensure correct file extensions

**AdSense not showing:**
- Verify publisher ID correct
- Check ads.txt file
- Wait 24-48 hours after approval
- Test with AdSense preview
- Check browser console for errors

**Search not working:**
- Verify Pagefind installed
- Check search index generated
- Test with simple query
- Check browser console

**Slow build times:**
- Reduce image sizes before build
- Use incremental builds (Astro 3+)
- Check for infinite loops in components
- Optimize dependencies

**Redirects not working:**
- Verify _redirects file in public/
- Check redirect syntax
- Test with curl or redirect checker
- Clear Cloudflare cache

---

## Tips for Using Claude Code CLI

1. **One prompt at a time**: Don't rush, complete each prompt fully before moving to next

2. **Review code**: Always review what Claude Code generates before accepting

3. **Test frequently**: Run `npm run dev` after major changes to catch issues early

4. **Ask for clarification**: If output isn't what you expected, ask Claude Code to revise

5. **Save progress**: Commit to Git after completing each phase

6. **Iterate**: If something doesn't work, provide error messages and ask Claude Code to fix

7. **Context matters**: Give Claude Code context about what you're trying to achieve

---

## Environment Variables Template

Create `.env` file in project root:

```env
# Google AdSense
ADSENSE_PUBLISHER_ID=ca-pub-XXXXXXXXXXXXXXXX

# Google Analytics (optional)
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX

# Site URL (for production)
SITE_URL=https://yourdomain.com

# Enable features
ENABLE_COMMENTS=true
ENABLE_SEARCH=true
```

Add `.env` to `.gitignore`!

---

## Quick Commands Reference

```bash
# Development
npm run dev                 # Start dev server
npm run build              # Build for production
npm run preview            # Preview production build

# Content
npm run new-post           # Create new post (if script created)

# Deployment
git push origin main       # Auto-deploy to Cloudflare Pages

# Testing
npm run test               # Run tests (if configured)
npm run lighthouse         # Run Lighthouse audit (if configured)
```

---

## Success Metrics to Track

After launch, monitor these weekly:

- [ ] Page load time (target: <1s)
- [ ] Lighthouse score (target: >95)
- [ ] AdSense revenue (compare to WordPress)
- [ ] Organic traffic (Google Search Console)
- [ ] Bounce rate
- [ ] Average time on page
- [ ] Core Web Vitals (LCP, FID, CLS)
- [ ] Build success rate
- [ ]