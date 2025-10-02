# My Astro Blog

A modern, high-performance blog built with Astro.js, featuring advanced code highlighting, SEO optimization, and Google AdSense integration.

## ✨ Features

### Core Features
- ⚡ **Lightning Fast** - Built with Astro for optimal performance
- 🎨 **Modern Design** - Clean and professional UI with Tailwind CSS
- 📝 **Advanced Code Highlighting** - GitHub Dark theme with copy buttons
- 🔍 **SEO Optimized** - Meta tags, Open Graph, Twitter Cards, structured data
- 📱 **Fully Responsive** - Mobile-first design
- ♿ **Accessible** - WCAG 2.1 AA compliant

### New Features! 🎉
- 🌓 **Dark Mode** - Beautiful dark theme with toggle button (saves preference)
- 🔎 **Client-Side Search** - Fast search with Cmd/Ctrl+K shortcut
- 💬 **Giscus Comments** - GitHub Discussions-powered comments
- ⚡ **Instant Search** - Find posts by title, description, or tags
- 🎯 **Theme Persistence** - Remembers your dark/light mode choice

### Additional Features
- 📊 **Google Analytics** - Track your visitors
- 💰 **Google AdSense** - Monetization ready
- 🗂️ **Tags System** - Organize posts by topics
- 📡 **RSS Feed** - Let readers subscribe
- 🗺️ **Sitemap** - Auto-generated for SEO
- 📄 **Content Collections** - Type-safe content management

## 🚀 Tech Stack

- [Astro.js](https://astro.build) - Static Site Generator
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [MDX](https://mdxjs.com/) - Enhanced Markdown
- [Rehype Pretty Code](https://github.com/atomiks/rehype-pretty-code) - Syntax Highlighting
- [Shiki](https://github.com/shikijs/shiki) - Code Themes

## 📋 Prerequisites

- Node.js 18+
- npm or pnpm
- Git

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/your-blog.git
cd your-blog
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Update environment variables in `.env`:
```env
ADSENSE_PUBLISHER_ID=ca-pub-YOUR_ID
GOOGLE_ANALYTICS_ID=G-YOUR_ID
SITE_URL=https://yourdomain.com
```

5. Update site configuration in `src/config.ts`:
   - Site title, description, author
   - Social media links
   - Email address

## 🏃 Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:4321`

## 📝 Writing Content

### Create a New Post

1. Create a new `.md` or `.mdx` file in `src/content/blog/`
2. Add frontmatter:

```markdown
---
title: "Your Post Title"
description: "SEO-friendly description"
pubDate: 2025-01-15
heroImage: "/images/your-image.jpg"
tags: ["tag1", "tag2"]
draft: false
---

Your content here...
```

### Code Blocks

Use enhanced code blocks with syntax highlighting:

\`\`\`javascript title="example.js" {3-5}
// Your code here
const greeting = "Hello";
// Lines 3-5 will be highlighted
console.log(greeting);
\`\`\`

## 🏗️ Building

Build for production:
```bash
npm run build
```

Preview the build:
```bash
npm run preview
```

## 🚀 Deployment

### Cloudflare Pages

1. Push your code to GitHub
2. Connect your repository to Cloudflare Pages
3. Configure build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node version: 18
4. Add environment variables in Cloudflare dashboard
5. Deploy!

### Other Platforms

This blog can be deployed to:
- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [GitHub Pages](https://pages.github.com)
- Any static hosting provider

## 📁 Project Structure

```
/
├── public/              # Static assets
│   ├── images/         # Images
│   ├── fonts/          # Custom fonts
│   ├── robots.txt      # Robots file
│   └── ads.txt         # AdSense verification
├── src/
│   ├── components/     # Reusable components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── BlogCard.astro
│   │   ├── CodeBlock.astro
│   │   ├── TableOfContents.astro
│   │   └── ShareButtons.astro
│   ├── content/
│   │   ├── blog/       # Blog posts (.md files)
│   │   └── config.ts   # Content Collections schema
│   ├── layouts/        # Page layouts
│   │   ├── BaseLayout.astro
│   │   └── BlogPost.astro
│   ├── pages/          # Routes
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── blog/
│   │   ├── tags/
│   │   └── rss.xml.ts
│   ├── styles/         # Global styles
│   │   ├── global.css
│   │   └── code-theme.css
│   ├── utils/          # Helper functions
│   │   └── helpers.ts
│   └── config.ts       # Site configuration
├── astro.config.mjs    # Astro configuration
├── tailwind.config.js  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
└── package.json
```

## ⚙️ Configuration

### Site Config (`src/config.ts`)

Update your site information:
- Title, description, author
- Social media URLs
- Analytics IDs
- Feature flags

### Astro Config (`astro.config.mjs`)

Configure:
- Site URL
- Integrations (Tailwind, MDX, Sitemap)
- Markdown/MDX settings
- Image optimization

## 🎨 Customization

### Colors

Edit `tailwind.config.js` or `src/styles/global.css` to change colors.

### Code Theme

The code highlighting theme is in `src/styles/code-theme.css`. You can switch to other themes by changing the color variables.

### Layouts

Modify components in `src/components/` and layouts in `src/layouts/`.

## 📊 Analytics & Monetization

### Google Analytics

Add your GA4 ID to `.env`:
```env
GOOGLE_ANALYTICS_ID=G-YOUR_ID
```

### Google AdSense

1. Add your publisher ID to `.env`:
```env
ADSENSE_PUBLISHER_ID=ca-pub-YOUR_ID
```

2. Update `public/ads.txt` with your AdSense details

3. Ad units are in `BlogPost.astro` layout

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 📝 Writing Guidelines

See [CONTENT.md](./CONTENT.md) for detailed content writing guidelines.

## 🚀 Deployment Guide

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Code highlighting by [Rehype Pretty Code](https://rehype-pretty.pages.dev/)
- Icons from [Heroicons](https://heroicons.com)

## 📞 Support

If you have questions or need help:
- Check the [Setup Guide](./SETUP.md)
- Read the [Astro documentation](https://docs.astro.build)

---

**Built with ❤️ using Astro**

## 🆕 New Features Setup

### Dark Mode
Dark mode works out of the box! Visitors can toggle between light and dark themes using the button in the header. Their preference is automatically saved.

### Search
Press `Cmd+K` (Mac) or `Ctrl+K` (Windows/Linux) to open search, or click the search icon. Start typing to find posts instantly!

### Comments (Giscus)
To enable comments, you need to configure Giscus:

1. See [GISCUS-SETUP.md](./GISCUS-SETUP.md) for detailed setup instructions
2. Enable GitHub Discussions on your repository
3. Install the Giscus app
4. Get your configuration from [giscus.app](https://giscus.app)
5. Update `src/components/Comments.astro` with your repo details

For a complete guide to all new features, see [NEW-FEATURES.md](./NEW-FEATURES.md)
