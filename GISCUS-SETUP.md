# Giscus Comments Setup Guide

Giscus is a comments system powered by GitHub Discussions. It's free, open-source, and privacy-friendly.

## Prerequisites

- A public GitHub repository
- GitHub Discussions enabled on your repository

## Step-by-Step Setup

### 1. Enable GitHub Discussions

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Features** section
4. Check the box for **Discussions**
5. Click **Set up discussions**
6. GitHub will create a welcome discussion - you can customize or delete it

### 2. Install the Giscus App

1. Visit [https://github.com/apps/giscus](https://github.com/apps/giscus)
2. Click **Install**
3. Select the repository where you want to enable comments
4. Authorize the app

### 3. Get Your Giscus Configuration

1. Visit [https://giscus.app](https://giscus.app)
2. Fill in the form:

   **Repository:**
   ```
   yourusername/your-repo-name
   ```

   **Page ↔️ Discussions Mapping:**
   - Select **pathname** (recommended for blogs)

   **Discussion Category:**
   - Select a category (usually "General" or create "Blog Comments")

   **Features:**
   - ✅ Enable reactions for the main post
   - Choose your preferred layout (recommended: "comments")

3. Scroll down to see your configuration
4. Copy the values you need:
   - `data-repo`
   - `data-repo-id`
   - `data-category`
   - `data-category-id`

### 4. Update the Comments Component

Open `src/components/Comments.astro` and update these values:

```astro
const {
  repo = "yourusername/your-repo-name",     // Your repo
  repoId = "R_xxxxxxxxxxxxx",                // From giscus.app
  category = "General",                       // Your category name
  categoryId = "DIC_xxxxxxxxxxxx"            // From giscus.app
} = Astro.props;
```

Example with real values:

```astro
const {
  repo = "john/my-blog",
  repoId = "R_kgDOHj8K1Q",
  category = "Blog Comments",
  categoryId = "DIC_kwDOHj8K1c4CQr8q"
} = Astro.props;
```

### 5. Test Comments

1. Build and deploy your site:
   ```bash
   npm run build
   npm run preview
   ```

2. Navigate to any blog post
3. Scroll to the bottom
4. You should see the Giscus comments widget
5. Try posting a comment (you need to be logged into GitHub)

### 6. Check GitHub Discussions

- Comments will appear as discussions in your repository
- Go to your repository → **Discussions** tab
- You'll see each blog post with its comments

## Features

✅ **Already Configured:**
- Dark mode support (switches with theme)
- Lazy loading (loads when scrolled into view)
- Reactions enabled
- Clean, modern design

## Customization Options

### Change Theme

In `src/components/Comments.astro`, modify the theme:

```javascript
// Current: Auto-switches between light/dark
const theme = document.documentElement.classList.contains('dark')
  ? 'dark'
  : 'light';

// Or use a specific theme:
// 'light', 'dark', 'preferred_color_scheme', 'transparent_dark', etc.
script.setAttribute('data-theme', 'dark');
```

### Change Mapping

To map comments by URL instead of pathname:

```javascript
script.setAttribute('data-mapping', 'url'); // Instead of 'pathname'
```

### Change Category

Use different categories for different types of posts:

```astro
<Comments
  category="Blog Comments"
  categoryId="DIC_xxxxxxxxxxxx"
/>
```

### Disable Comments on Specific Posts

In `src/layouts/BlogPost.astro`:

```astro
<!-- Only show if enabled in config -->
{SITE_CONFIG.features.comments && <Comments />}
```

Or add frontmatter to disable per-post:

```markdown
---
title: "My Post"
comments: false  # Disable comments for this post
---
```

Then update the layout:

```astro
{SITE_CONFIG.features.comments && post.data.comments !== false && <Comments />}
```

## Troubleshooting

### Comments Not Loading

1. **Check repository is public**
   - Giscus only works with public repos

2. **Verify Discussions are enabled**
   - Settings → Features → Discussions checkbox

3. **Check the browser console**
   - Look for error messages
   - Common: wrong repo-id or category-id

4. **Verify Giscus app is installed**
   - GitHub → Settings → Applications → Giscus

### Wrong Theme

If comments don't match your site theme:

1. Hard refresh the page (Cmd/Ctrl + Shift + R)
2. Check the theme toggle is working
3. The component listens for theme changes automatically

### Comments in Wrong Category

1. Update the `category` and `categoryId` in `Comments.astro`
2. You can move discussions in GitHub manually if needed

## Privacy & Moderation

### Privacy
- Comments are stored on GitHub (Microsoft servers)
- Commenters must have a GitHub account
- You can view commenter data in GitHub Discussions

### Moderation
- Manage comments via GitHub Discussions
- You can edit, delete, or lock discussions
- Mark as answered, pin important comments
- Convert discussions to issues if needed

## Alternative: Disable Comments

To disable comments site-wide:

Update `src/config.ts`:

```typescript
features: {
  comments: false,  // Set to false
}
```

## Support

- Giscus Documentation: [https://giscus.app](https://giscus.app)
- Giscus GitHub: [https://github.com/giscus/giscus](https://github.com/giscus/giscus)
- GitHub Discussions Docs: [https://docs.github.com/discussions](https://docs.github.com/discussions)

---

**Quick Start Summary:**
1. Enable Discussions on your repo
2. Install Giscus app
3. Get config from giscus.app
4. Update `src/components/Comments.astro`
5. Build & deploy!
