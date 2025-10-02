# New Features Guide

## 🎨 Dark Mode

### What's New
Your blog now has a dark mode that can be toggled with a button in the header!

### Features
- ✅ Dark/Light mode toggle button (sun/moon icon)
- ✅ Persists user preference in localStorage
- ✅ Respects system preference by default
- ✅ Smooth transitions between modes
- ✅ All components support dark mode

### Usage

**As a Visitor:**
- Click the sun/moon icon in the header to toggle dark mode
- Your preference is saved automatically
- Works on mobile and desktop

**As a Developer:**
- Dark mode uses Tailwind's `dark:` classes
- Theme is stored in `localStorage.theme`
- System preference is detected on first visit

### Customization

**Change Default Theme:**

Edit `src/components/ThemeSwitcher.astro`:

```javascript
// Default to dark mode instead of system preference
const theme = 'dark';
```

**Customize Dark Mode Colors:**

Edit `src/styles/global.css`:

```css
.dark {
  --color-text: #e4e4e7;        /* Text color */
  --color-bg: #09090b;          /* Background */
  --color-primary: #60a5fa;     /* Links/accents */
  /* ...customize as needed */
}
```

**Add Dark Mode to New Components:**

```astro
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
  Your content
</div>
```

---

## 🔍 Search Functionality

### What's New
Fast client-side search to find posts instantly!

### Features
- ✅ Search by post title, description, or tags
- ✅ Instant results (no page reload)
- ✅ Keyboard shortcut: `Cmd/Ctrl + K`
- ✅ Press `ESC` to close
- ✅ Works on mobile and desktop
- ✅ Dark mode support

### Usage

**Opening Search:**
1. Click the search icon in the header, OR
2. Press `Cmd + K` (Mac) or `Ctrl + K` (Windows/Linux)

**Searching:**
1. Type your search query
2. Results appear instantly
3. Click any result to view that post
4. Press `ESC` to close the search modal

**Search Tips:**
- Search for keywords in titles: "astro", "blog", "code"
- Search by tag: "tutorial", "javascript"
- Partial matches work: "mod" finds "modern"

### Customization

**Modify Search Behavior:**

Edit `src/components/Search.astro`:

```javascript
// Change number of results shown
const results = searchData.filter(...).slice(0, 10); // Show 10 results

// Make search case-sensitive
const results = searchData.filter(post =>
  post.title.includes(query) // Remove .toLowerCase()
);

// Search in content (requires adding content field)
post.content.toLowerCase().includes(lowerQuery)
```

**Change Keyboard Shortcut:**

```javascript
// Change from Cmd+K to Cmd+F
if ((e.metaKey || e.ctrlKey) && e.key === 'f') {
  e.preventDefault();
  openSearch();
}
```

**Styling:**

The search modal uses Tailwind classes. Customize in `Search.astro`:

```astro
<div class="fixed inset-0 bg-black bg-opacity-50"> <!-- Backdrop -->
  <div class="w-full max-w-2xl bg-white dark:bg-gray-900"> <!-- Modal -->
```

---

## 💬 Giscus Comments

### What's New
GitHub-powered comments system using GitHub Discussions!

### Features
- ✅ Free and open-source
- ✅ No ads or tracking
- ✅ Markdown support in comments
- ✅ Reactions and replies
- ✅ GitHub authentication
- ✅ Dark mode support
- ✅ Lazy loading (loads when needed)

### Setup Required

Comments require GitHub setup. See [GISCUS-SETUP.md](./GISCUS-SETUP.md) for detailed instructions.

**Quick Setup:**
1. Enable GitHub Discussions on your repository
2. Install Giscus app from [github.com/apps/giscus](https://github.com/apps/giscus)
3. Get config from [giscus.app](https://giscus.app)
4. Update `src/components/Comments.astro` with your repo details

### Usage

**For Visitors:**
- Scroll to the bottom of any blog post
- Sign in with GitHub to comment
- Use Markdown formatting in comments
- React to posts and comments

**For You (Blog Owner):**
- Comments appear as GitHub Discussions in your repo
- Moderate via GitHub Discussions interface
- Edit, delete, or lock discussions
- Get email notifications (configure in GitHub)

### Disable Comments

**Site-wide:**

Edit `src/config.ts`:

```typescript
features: {
  comments: false,
}
```

**Per-post:**

Add to frontmatter:

```markdown
---
title: "My Post"
comments: false
---
```

Then update `src/layouts/BlogPost.astro` to check this field.

---

## 🎯 All Features Together

### Combined Experience

1. **Visitor arrives** → System/saved theme applied automatically
2. **Visitor searches** → Press `Cmd+K`, find post, click to read
3. **Visitor toggles dark mode** → Smooth transition, preference saved
4. **Visitor reads post** → Beautiful dark mode if enabled
5. **Visitor comments** → Giscus loads, uses matching dark mode theme
6. **Visitor returns** → Theme preference remembered

### Performance

- ✅ **Search**: Client-side, instant results
- ✅ **Theme**: No flash, preference cached
- ✅ **Comments**: Lazy loaded when scrolled into view
- ✅ **Build**: All features work in static build

---

## 🚀 Testing Checklist

- [ ] Toggle dark mode - saves preference
- [ ] Search with `Cmd+K` - shows results
- [ ] Search finds posts by title
- [ ] Search finds posts by tags
- [ ] Comments load at bottom of posts (after setup)
- [ ] Comments match theme (light/dark)
- [ ] Theme persists on page reload
- [ ] Mobile: search, theme toggle work
- [ ] Mobile: hamburger menu works
- [ ] All transitions smooth

---

## 🐛 Troubleshooting

### Dark Mode Issues

**Theme not saving:**
- Check browser allows localStorage
- Try incognito/private mode

**Flash of wrong theme:**
- Theme switcher loads theme before page render
- Check browser cache

### Search Issues

**No results found:**
- Check search data is loading (console.log)
- Verify posts exist in `src/content/blog/`
- Try exact post title

**Search doesn't open:**
- Check JavaScript console for errors
- Verify `Cmd+K` isn't blocked by browser

### Comments Issues

**Comments not loading:**
- See [GISCUS-SETUP.md](./GISCUS-SETUP.md)
- Check repository is public
- Verify Discussions enabled
- Check browser console

**Wrong theme:**
- Hard refresh (`Cmd+Shift+R`)
- Check theme toggle event listener

---

## 📝 Next Steps

1. **Customize colors** for dark mode
2. **Set up Giscus** for comments
3. **Test search** with your posts
4. **Deploy** and share!

---

## 🎉 Enjoy Your New Features!

Your blog now has:
- 🌓 Beautiful dark mode
- 🔍 Lightning-fast search
- 💬 Community comments

All working together seamlessly! 🚀
