/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.alidrisy.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  // Non-page resources and the bare "/" redirect stub shouldn't appear as
  // indexable sitemap entries — the real, locale-prefixed pages already cover them.
  exclude: ['/api/*', '/manifest.webmanifest', '/robots.txt', '/'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  // NOTE on hreflang: next-sitemap's `alternateRefs` feature always appends the
  // current entry's own `loc` onto whatever href you give it (it assumes `loc`
  // is locale-neutral and hrefs are per-locale domain roots). Our routes already
  // carry their own locale prefix (/en/about, /ar/about as distinct top-level
  // pages), so that concatenation always doubles up into nonsense like
  // "/en/about/ar/about". There's no href we can pass here that fixes it, so we
  // deliberately emit no sitemap-level alternateRefs. hreflang is instead
  // correctly served per-page via each page's generateMetadata
  // (alternates.languages), rendered as real <link rel="alternate"> tags in
  // <head> — which is the mechanism Google actually reads it from.
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: 'weekly',
      priority: path.includes('/projects/') ? 0.7 : path.endsWith('/projects') ? 0.9 : 0.8,
      lastmod: new Date().toISOString(),
    };
  },
};
