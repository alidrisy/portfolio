/**
 * TECHNICAL SEO & PERFORMANCE CHECKLIST
 * Comprehensive guide for maintaining SEO excellence and Core Web Vitals
 */

export const TECHNICAL_SEO_CHECKLIST = {
  CORE_WEB_VITALS: {
    title: 'Core Web Vitals Optimization',
    metrics: {
      LCP: {
        name: 'Largest Contentful Paint',
        target: '< 2.5 seconds',
        howToImprove: [
          'Optimize images with next/image component',
          'Preload critical fonts with link rel="preload"',
          'Minimize critical rendering path CSS',
          'Cache static assets aggressively',
          'Use dynamic imports for above-the-fold content only',
          'Optimize web fonts: Use woff2, font-display: swap',
          'Defer non-critical JavaScript',
          'Enable gzip/brotli compression on server',
        ],
        implementation: [
          'Use Next.js Image Optimization: <Image priority={true} />',
          'Add font preload: <link rel="preload" href="/fonts/..." as="font" />',
          'Load scripts with defer: <script defer src="..." />',
          'Implement CDN for static assets (images, fonts)',
        ],
      },
      CLS: {
        name: 'Cumulative Layout Shift',
        target: '< 0.1',
        howToImprove: [
          'Reserve space for images: set explicit width/height',
          'Avoid inserting content above existing content',
          'Use transform: translate() instead of margin changes',
          'Avoid web fonts that cause FOUT/FOIT',
          'Lazy load ads, embeds, iframes with margin',
          'Preload web fonts with font-display: swap',
          'Set explicit dimensions on all images/videos',
        ],
        implementation: [
          'Use aspect-ratio CSS: aspect-ratio: 16 / 9;',
          'Use size attributes on images: <img width="400" height="300" />',
          'Set fixed heights on dynamic content containers',
          'Use CSS containment: contain: layout;',
        ],
      },
      INP: {
        name: 'Interaction to Next Paint',
        target: '< 200 milliseconds',
        howToImprove: [
          'Break up long JavaScript execution',
          'Use requestIdleCallback for non-urgent tasks',
          'Minimize main thread work',
          'Code-split JavaScript by route',
          'Defer non-critical JavaScript',
          'Use web workers for heavy computation',
          'Optimize event handlers (debounce, throttle)',
          'Profile with Chrome DevTools',
        ],
        implementation: [
          'Use React lazy + Suspense for code splitting',
          'Implement debounce for search inputs',
          'Use requestIdleCallback for analytics',
          'Profile in Chrome DevTools: Performance panel',
        ],
      },
    },
  },

  IMAGE_OPTIMIZATION: {
    title: 'Image Optimization Strategy',
    best_practices: [
      'Always use next/image for automatic optimization',
      'Provide multiple image formats: WebP, AVIF, JPEG fallback',
      'Use responsive images with srcSet (next/image handles this)',
      'Set explicit width and height to prevent CLS',
      'Lazy load below-fold images (loading="lazy")',
      'Use priority={true} for LCP-critical images',
      'Compress images: use TinyPNG, Squoosh, or similar',
      'Use SVG for icons and logos (no rasterization)',
      'Serve different sizes for mobile vs desktop',
      'Add alt text for accessibility and SEO',
    ],
    next_config_settings: {
      formats: ['image/avif', 'image/webp'],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      quality: 80,
      minimumCacheTTL: 60,
    },
  },

  FONT_OPTIMIZATION: {
    title: 'Web Fonts & Font Loading Strategy',
    best_practices: [
      'Use next/font for self-hosted fonts (best for performance)',
      'Load only needed font weights and subsets',
      'Use font-display: swap (or fallback) to avoid FOUT',
      'Preload critical fonts with <link rel="preload">',
      'Limit font requests: 1-2 primary, 1 secondary max',
      'Use variable fonts to reduce HTTP requests',
      'Use system fonts for fallback stack',
      'Serve fonts from CDN when self-hosting not viable',
    ],
    example_preload: '<link rel="preload" href="/fonts/font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />',
    current_setup: [
      'Orbitron (display font)',
      'Rajdhani (sans-serif)',
      'Aldrich (sans-serif)',
      'Noto Kufi Arabic (Arabic support)',
    ],
  },

  METADATA_BEST_PRACTICES: {
    title: 'Metadata & Canonical URLs',
    checklist: [
      '✓ Title tag: 50-60 characters, include primary keyword',
      '✓ Meta description: 150-160 characters, include CTA',
      '✓ Canonical URL: prevent duplicate content issues',
      '✓ Alternate hreflang: for multilingual (en/ar)',
      '✓ x-default hreflang: default language fallback',
      '✓ OpenGraph tags: for social sharing',
      '✓ Twitter Card: summary_large_image for max impact',
      '✓ Robots meta: index, follow for public pages',
      '✓ Viewport meta: width=device-width, initial-scale=1',
      '✓ Charset: UTF-8 for international support',
    ],
    canonical_pattern: 'https://www.alidrisy.com/{locale}/{page}',
    hreflang_pattern: [
      '<link rel="alternate" hrefLang="en" href="https://www.alidrisy.com/en/{page}" />',
      '<link rel="alternate" hrefLang="ar" href="https://www.alidrisy.com/ar/{page}" />',
      '<link rel="alternate" hrefLang="x-default" href="https://www.alidrisy.com/{page}" />',
    ],
  },

  STRUCTURED_DATA_VALIDATION: {
    title: 'JSON-LD Schema Validation & Testing',
    tools: [
      'Google Rich Results Test: https://search.google.com/test/rich-results',
      'Schema.org Validator: https://validator.schema.org/',
      'Bing Markup Validator: https://www.bing.com/webmaster/tools/markup-validator',
      'Yandex Metrica: https://webmaster.yandex.com/',
    ],
    validation_checklist: [
      '✓ No validation errors in Google Rich Results Test',
      '✓ Person schema includes sameAs links',
      '✓ Organization logo has explicit width/height',
      '✓ ContactPoint includes telephone and email',
      '✓ BreadcrumbList has sequential positions',
      '✓ WebPage includes dateModified (dynamic)',
      '✓ All URLs are absolute (not relative)',
      '✓ Images have width/height and caption',
      '✓ Text fields respect length limits (headline ≤110 chars)',
      '✓ @id properties are unique and consistent',
    ],
  },

  SECURITY_HEADERS: {
    title: 'Security Headers (via Next.js)',
    headers_to_implement: [
      'X-Content-Type-Options: nosniff',
      'X-Frame-Options: SAMEORIGIN',
      'X-XSS-Protection: 1; mode=block',
      'Referrer-Policy: strict-origin-when-cross-origin',
      'Permissions-Policy: geolocation=(), microphone=(), camera=()',
      'Content-Security-Policy: default-src \'self\'',
    ],
    next_config_example: `
export async function headers() {
  return [
    {
      source: '/:path*',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      ],
    },
  ];
}
    `,
  },

  SITEMAP_ROBOTS_BEST_PRACTICES: {
    title: 'Sitemaps & Robots.txt Optimization',
    sitemap_checklist: [
      '✓ Main sitemap.xml with all routes',
      '✓ Per-locale sitemaps (sitemap-en.xml, sitemap-ar.xml)',
      '✓ Hreflang alternates in each entry',
      '✓ lastModified dates are accurate',
      '✓ Priority reflects importance (0.0-1.0)',
      '✓ changeFrequency matches actual updates',
      '✓ Limit per file: 50,000 URLs or 50MB',
      '✓ Submit sitemap to Google Search Console',
    ],
    robots_checklist: [
      '✓ Allow all public pages',
      '✓ Disallow /api/, /_next/, /admin/',
      '✓ Set crawl-delay for Googlebot: 0',
      '✓ Block bad bots (Semrush, Ahrefs, etc.) if needed',
      '✓ Include sitemap index URL',
      '✓ Set host (canonical domain)',
    ],
    priority_guide: {
      homepage: 1.0,
      main_pages: 0.9,
      subpages: 0.8,
      projects: 0.85,
      blog_posts: 0.7,
    },
    change_frequency_guide: {
      homepage: 'weekly',
      about_page: 'monthly',
      projects: 'monthly',
      blog: 'weekly',
      contact: 'monthly',
    },
  },

  SEO_AUDIT_TOOLS: {
    title: 'Free & Paid SEO Audit Tools',
    free_tools: [
      'Google Lighthouse: Built into Chrome DevTools',
      'Google PageSpeed Insights: pagespeed.web.dev',
      'Google Search Console: search.google.com/search-console',
      'Bing Webmaster Tools: bing.com/webmaster',
      'Google SERP Simulator: searchengineland.com/serp-simulator',
      'GTmetrix: gtmetrix.com (free version)',
      'SitemapBot: sitemapbot.io (free tier)',
      'SEMrush SEO Audit (free limited): semrush.com',
      'Screaming Frog (free up to 500 URLs): screamingfrog.co.uk',
    ],
    paid_tools: [
      'Ahrefs: https://ahrefs.com/',
      'SEMrush: https://www.semrush.com/',
      'Moz Pro: https://moz.com/products/pro',
      'Screaming Frog (Enterprise)',
      'Sitebulb: https://www.sitebulb.com/',
    ],
  },

  MONITORING_CHECKLIST: {
    title: 'Ongoing SEO & Performance Monitoring',
    monthly_tasks: [
      'Check Google Search Console for indexing issues',
      'Review Core Web Vitals trends',
      'Monitor keyword rankings (top 20-30)',
      'Check for 404 errors and redirects',
      'Verify structured data validation',
      'Analyze click-through rate (CTR) in SERP',
      'Review backlink profile',
    ],
    quarterly_tasks: [
      'Full technical SEO audit',
      'Content audit (freshness, relevance)',
      'Competitor analysis',
      'Update metadata for low-performing pages',
      'Analyze user behavior (GA, heatmaps)',
      'Test new schema markup opportunities',
      'Review mobile usability',
    ],
    annual_tasks: [
      'Comprehensive site SEO audit',
      'Update keyword strategy',
      'Analyze conversion funnel',
      'Plan new content opportunities',
      'Assess E-E-A-T signals',
      'Review domain authority trends',
      'Plan technical debt reduction',
    ],
  },

  AI_SEARCH_OPTIMIZATION: {
    title: 'AI Search Overviews Optimization',
    best_practices: [
      'Create content directly answering user questions',
      'Use FAQ schema for common questions',
      'Maintain high E-E-A-T signals (credentials, links)',
      'Keep content factual, well-cited, authoritative',
      'Use clear headers (H2, H3) for content structure',
      'Include your expertise/credentials near top of page',
      'Link to authoritative sources',
      'Update content regularly with latest info',
      'Use natural language (not keyword-stuffed)',
      'Include your unique perspective/case studies',
    ],
    your_differentiators: [
      'Real project experience (HomaApp, Ijar, etc.)',
      'Professional credentials (ALX Africa certification)',
      'Hands-on experience with production systems',
      'Experience with GCC/Saudi Arabia tech stack',
      'Proven performance improvements (metrics)',
    ],
  },

  NEXT_JS_SPECIFIC_TIPS: {
    title: 'Next.js 15+ SEO Best Practices',
    tips: [
      'Use generateMetadata for dynamic per-page meta',
      'Implement generateStaticParams for all dynamic routes',
      'Use robots.ts and sitemap.ts (not .xml files)',
      'Enable ISR (Incremental Static Regeneration) for CMS content',
      'Use next/image with priority for LCP images',
      'Set experimental.optimizePackageImports in next.config.ts',
      'Use dynamic imports for above-fold code splitting',
      'Implement preloading for critical resources',
      'Use getServerSideProps sparingly (prefer static)',
      'Monitor Build Analysis to identify JS bloat',
    ],
    middleware_seo: 'Use middleware.ts for hreflang and canonical redirects',
  },

  INTERNATIONAL_SEO: {
    title: 'English + Arabic SEO Optimization',
    checklist: [
      '✓ hreflang links for all en/ar variants',
      '✓ Separate crawl stats per language',
      '✓ lang attribute on <html> tag',
      '✓ dir attribute for RTL (Arabic)',
      '✓ Language-specific meta descriptions',
      '✓ Localized content (not machine-translated)',
      '✓ Native Arabic speaker review (quality)',
      '✓ Separate keywords for each language',
      '✓ Country/region targeting in GSC',
      '✓ Proper encoding (UTF-8) for Arabic',
      '✓ RTL CSS and design considerations',
      '✓ Currency/date format per locale',
    ],
  },

  PERFORMANCE_BUDGET: {
    title: 'Performance Budget Guidelines',
    target_metrics: {
      javascript_size: '< 200KB (gzipped)',
      css_size: '< 50KB (gzipped)',
      images: '< 1MB total (optimized)',
      fonts: '< 100KB (all fonts)',
      lcp_time: '< 2.5s',
      cls_score: '< 0.1',
      inp_score: '< 200ms',
    },
    monitoring: 'Use CI/CD to enforce budgets in pull requests',
  },
};

/**
 * QUICK ACTION ITEMS FOR YOUR SITE
 */
export const QUICK_WINS = [
  {
    task: 'Add Google Verification Code',
    file: 'src/app/[locale]/layout.tsx',
    status: 'TODO - Replace YOUR_GOOGLE_VERIFICATION_CODE',
  },
  {
    task: 'Add Bing & Yandex Verification',
    file: 'src/app/[locale]/layout.tsx',
    status: 'TODO - Optional but recommended for global reach',
  },
  {
    task: 'Submit Sitemaps to Google Search Console',
    url: 'https://search.google.com/search-console',
    status: 'TODO - Critical for indexing',
  },
  {
    task: 'Test Structured Data',
    url: 'https://search.google.com/test/rich-results',
    status: 'TODO - Validate all schema markup',
  },
  {
    task: 'Run Lighthouse Audit',
    tool: 'Chrome DevTools',
    status: 'TODO - Aim for 90+ scores',
  },
  {
    task: 'Monitor Core Web Vitals',
    url: 'https://web.dev/measure/',
    status: 'Ongoing - Use PageSpeed Insights',
  },
  {
    task: 'Create FAQ Section',
    recommendation: 'Add /faq route with FAQPage schema',
    status: 'TODO - Improves AI Overviews visibility',
  },
  {
    task: 'Implement Security Headers',
    file: 'next.config.ts',
    status: 'TODO - Add via headers() function',
  },
];
