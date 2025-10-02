---
title: "Getting Started with Astro"
description: "Learn how to build fast, content-focused websites with Astro.js. A complete guide to getting started with this modern static site generator."
pubDate: 2025-01-15
heroImage: "/images/astro-hero.jpg"
tags: ["astro", "webdev", "javascript", "tutorial"]
draft: false
---

## Introduction

Astro is a modern static site generator that helps you build faster websites. It's designed for content-focused sites like blogs, marketing pages, and documentation.

## Why Astro?

Astro offers several advantages over traditional frameworks:

1. **Zero JavaScript by Default** - Ships only HTML and CSS, loading JavaScript only when needed
2. **Component Islands** - Interactive components load independently
3. **Framework Agnostic** - Use React, Vue, Svelte, or any framework you prefer
4. **Built for Speed** - Optimized for performance out of the box

## Getting Started

To create a new Astro project, run:

```bash
npm create astro@latest
```

### Project Structure

Astro projects follow a simple structure:

```plaintext
/
├── public/
├── src/
│   ├── components/
│   ├── layouts/
│   └── pages/
└── package.json
```

## Creating Your First Page

Create a new file in `src/pages/index.astro`:

```astro
---
const greeting = "Hello, Astro!";
---

<html lang="en">
  <head>
    <title>My Astro Site</title>
  </head>
  <body>
    <h1>{greeting}</h1>
  </body>
</html>
```

## Adding Components

Components make your code reusable. Create a component:

```astro title="src/components/Card.astro"
---
const { title, description } = Astro.props;
---

<div class="card">
  <h2>{title}</h2>
  <p>{description}</p>
</div>

<style>
  .card {
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
</style>
```

## Markdown Support

Astro has built-in markdown support. Just create `.md` files in your `pages` directory:

```markdown
---
title: My Post
---

# Hello World

This is a markdown post!
```

## Conclusion

Astro is perfect for building fast, content-focused websites. Its unique approach to JavaScript and component islands makes it stand out from other frameworks.

Give it a try and see how fast your sites can be!
