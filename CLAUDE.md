# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Kumpul4Semut is a personal blog built with Astro.js, featuring Indonesian content. It's a high-performance static site generator blog with modern features like dark mode, search functionality, and code highlighting.

## Common Development Commands

```bash
# Install dependencies
npm install

# Start development server (localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run Astro CLI commands
npm run astro -- [command]
```

## High-Level Architecture

### Tech Stack
- **Framework**: Astro.js 5.14.1 (Static Site Generator)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with typography plugin
- **Content**: MDX support with enhanced markdown
- **Code Highlighting**: Rehype Pretty Code + Shiki
- **SEO**: Sitemap generation, meta tags optimization
- **Analytics**: Google Analytics integration
- **Monetization**: Google AdSense ready

### Directory Structure
```
src/
├── components/          # Reusable UI components
│   ├── Header.astro         # Navigation with search and theme toggle
│   ├── Footer.astro         # Site footer with social links
│   ├── BlogCard.astro       # Blog post preview cards
│   ├── CodeBlock.astro      # Syntax-highlighted code blocks
│   ├── Comments.astro       # Giscus comments integration
│   ├── Search.astro         # Client-side search functionality
│   ├── SearchModal.astro    # Search modal interface
│   ├── ShareButtons.astro   # Social sharing buttons
│   ├── TableOfContents.astro # Auto-generated TOC
│   └── ThemeSwitcher.astro  # Dark/light mode toggle
├── content/
│   ├── blog/               # Markdown blog posts
│   └── config.ts           # Content schema and utilities
├── layouts/
│   ├── BaseLayout.astro    # Main layout wrapper
│   └── BlogPost.astro      # Individual post layout
├── pages/
│   ├── index.astro         # Homepage with hero section
│   ├── about.astro         # About page
│   ├── blog/               # Blog listing pages
│   ├── tags/               # Tag-based navigation
│   ├── 404.astro           # Custom 404 page
│   └── rss.xml.ts          # RSS feed generation
├── styles/
│   ├── global.css          # Global styles
│   └── code-theme.css      # Code highlighting theme
└── utils/                 # Helper functions
```

## Key Features & Patterns

### Content Management
- **Content Collections**: Type-safe blog posts using Astro's content system (`src/content/config.ts`)
- **Frontmatter Schema**: Enforced structure with Zod validation
- **Draft Support**: Draft posts filtered in production
- **Tag System**: Automatic tag generation and counting

### Modern UI Features
- **Dark Mode**: System-aware theme switching with persistence via `ThemeSwitcher.astro`
- **Client-Side Search**: Fast search with keyboard shortcuts (Cmd/Ctrl+K) via `Search.astro` and `SearchModal.astro`
- **Code Highlighting**: GitHub Dark theme with line highlighting and copy buttons via `CodeBlock.astro`
- **Table of Contents**: Auto-generated for long posts via `TableOfContents.astro`
- **Responsive Design**: Mobile-first approach

### SEO & Optimization
- **Sitemap Generation**: Automatic sitemap creation
- **RSS Feed**: Syndication support via `pages/rss.xml.ts`
- **Meta Tags**: Dynamic Open Graph and Twitter Cards
- **Image Optimization**: Astro's built-in image optimization

## Important Conventions

### Frontmatter Structure
```markdown
---
title: "Post Title"
description: "SEO description"
pubDate: 2025-01-15
heroImage: "/images/hero.jpg"
tags: ["tag1", "tag2"]
draft: false
---
```

### Environment Variables
Create `.env` file based on `.env.example`:
```env
ADSENSE_PUBLISHER_ID=ca-pub-XXXXXXXX
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
SITE_URL=https://kumpul4semut.com
```

### Migration Scripts
The project includes WordPress migration utilities in `scripts/`:
- `migrate-wp-posts.js` - Convert WordPress posts to Astro format
- `fix-image-urls.js` - Fix image URLs after migration
- `cleanup-posts.js` - Clean up post content

## Development Notes

- Uses ESM modules (`"type": "module"` in package.json)
- Strict TypeScript configuration
- Component-based architecture with Astro islands
- Server-side rendering for optimal performance
- Client-side interactivity only where needed (search, theme toggle)
- Content is in Indonesian language

# Project Rules: kumpul4semut

## Context Provider
- This project uses the `context7` MCP server.
- You MUST query `context7` to understand the Astro.js structure and recent changes in this repo.