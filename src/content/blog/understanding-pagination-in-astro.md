---
title: "Understanding Pagination in Astro"
description: "Learn how to implement efficient pagination in your Astro blog using the built-in paginate helper and dynamic routes."
pubDate: 2025-12-12
tags: ["astro", "pagination", "tutorial", "web development"]
---

Pagination is a crucial feature for any blog with a growing number of posts. It improves performance by loading only a subset of your content at a time and enhances user experience by making navigation easier. In this article, we'll explore how Astro makes pagination simple and efficient.

## Why Pagination Matters

As your content library grows, displaying all posts on a single page becomes impractical. It slows down page load times and overwhelms users. Pagination solves this by breaking your content into manageable chunks, or "pages."

## Astro's Built-in Pagination

Astro provides a powerful `paginate()` helper function that automatically handles the logic of splitting your content into pages. This is typically used within `getStaticPaths()` in a dynamic route file.

### Setting Up the Dynamic Route

To create a paginated blog, you usually need a file named `[...page].astro` (or `[page].astro`). The rest parameter `...` allows the route to match `/blog`, `/blog/2`, `/blog/3`, etc.

Here is a simplified example of how we implement pagination in this project:

```typescript title="src/pages/blog/[...page].astro"
import type { GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';

export const getStaticPaths = (async ({ paginate }) => {
  const allPosts = await getCollection('blog');
  // Sort posts by date
  const sortedPosts = allPosts.sort((a, b) =>
    b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  // Return the paginated collection
  return paginate(sortedPosts, { pageSize: 12 });
}) satisfies GetStaticPaths;
```

In this example:
1. We fetch all blog posts using `getCollection`.
2. We sort them so the newest posts come first.
3. We call `paginate()` with the sorted posts and a `pageSize` of 12.

### The `page` Prop

When you use `paginate()`, Astro automatically passes a `page` prop to your component. This object contains everything you need to render the current page and navigation controls:

- `page.data`: The array of items (posts) for the current page.
- `page.start`: The index of the first item on the page.
- `page.end`: The index of the last item on the page.
- `page.total`: The total number of items.
- `page.currentPage`: The current page number.
- `page.lastPage`: The total number of pages.
- `page.url`: An object containing `prev` and `next` URLs (if they exist).

### Rendering the Posts

Once you have the `page` prop, rendering the posts is straightforward:

```astro
---
const { page } = Astro.props;
---

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {page.data.map((post) => (
    <BlogCard post={post} />
  ))}
</div>
```

### Adding Navigation Controls

To allow users to navigate between pages, you can use the `page.url` and `page.currentPage` properties:

```astro
<nav class="pagination">
  {page.url.prev ? (
    <a href={page.url.prev}>Previous</a>
  ) : (
    <span class="disabled">Previous</span>
  )}

  <span>Page {page.currentPage} of {page.lastPage}</span>

  {page.url.next ? (
    <a href={page.url.next}>Next</a>
  ) : (
    <span class="disabled">Next</span>
  )}
</nav>
```

## Conclusion

Astro's pagination system is both powerful and easy to use. By leveraging `getStaticPaths` and the `paginate` helper, you can create a seamless browsing experience for your readers without writing complex logic. Check out the source code of this blog to see a production-ready implementation!
