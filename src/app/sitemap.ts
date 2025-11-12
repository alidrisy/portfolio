import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.alidrisy.com';
  const locales = ['en', 'ar'];
  const lastModified = new Date();

  // Define all routes with priorities
  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/services', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/projects', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
  ];

  // Generate sitemap entries for all locales with hreflang alternates
  const sitemapEntries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    routes.forEach(({ path, priority, changeFrequency }) => {
      const url = `${baseUrl}/${locale}${path}`;
      
      sitemapEntries.push({
        url,
        lastModified,
        changeFrequency,
        priority,
        alternates: {
          languages: {
            en: `${baseUrl}/en${path}`,
            ar: `${baseUrl}/ar${path}`,
            'x-default': `${baseUrl}${path}`,
          },
        },
      });
    });
  });

  return sitemapEntries;
}
