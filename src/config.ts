export const SITE_CONFIG = {
  site: {
    title: "My Blog",
    description: "A modern blog built with Astro",
    author: "Your Name",
    url: import.meta.env.SITE_URL || "https://yourdomain.com",
    email: "your@email.com",
  },
  social: {
    github: "https://github.com/yourusername",
    twitter: "https://twitter.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
  },
  analytics: {
    googleAnalyticsId: import.meta.env.GOOGLE_ANALYTICS_ID || "",
  },
  adsense: {
    publisherId: import.meta.env.ADSENSE_PUBLISHER_ID || "",
  },
  pagination: {
    postsPerPage: 12,
  },
  features: {
    darkMode: false,
    comments: true,
    codeLineNumbers: true,
    codeHighlightTheme: "github-dark",
  },
} as const;

export type SiteConfig = typeof SITE_CONFIG;

export default SITE_CONFIG;
