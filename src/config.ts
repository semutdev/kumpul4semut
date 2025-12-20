export const SITE_CONFIG = {
  site: {
    title: "Kumpul4Semut",
    description: "Catatan ringan seorang programmer otodidak.",
    author: "Jujun Jamaludin",
    url: import.meta.env.SITE_URL || "https://kumpul4semut.com",
    email: "jamaludinjujun6@gmail.com",
  },
  social: {
    github: "https://github.com/semutdev",
    instagram: "https://instagram.com/semutdev",
    facebook: "https://facebook.com/semutdev",
    threads: "https://threads.net/@semutdev",
    youtube: "https://youtube.com/@semutdev",
  },
  analytics: {
    googleAnalyticsId: import.meta.env.GOOGLE_ANALYTICS_ID || "",
  },
  adsense: {
    publisherId: import.meta.env.ADSENSE_PUBLISHER_ID || "",
    slotIds: {
      home: import.meta.env.ADSENSE_SLOT_HOME || "",
      article: import.meta.env.ADSENSE_SLOT_ARTICLE || "",
      inArticle: import.meta.env.ADSENSE_SLOT_IN_ARTICLE || "",
    },
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
