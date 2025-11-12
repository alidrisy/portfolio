# Performance & Tech SEO Checklist
**Abdulrahman Alidrisy Portfolio** | Next.js 15 + TypeScript + Tailwind CSS

---

## 1. CORE WEB VITALS (CWV)

### Targets (Google's 2025 recommendations)
- **LCP (Largest Contentful Paint):** < 2.5s (Good)
- **CLS (Cumulative Layout Shift):** < 0.1 (Good)
- **INP (Interaction to Next Paint):** < 200ms (Good)
- **TTFB (Time to First Byte):** < 600ms (baseline)

### Monitoring
- [ ] Set up Google Search Console CWV report
- [ ] Use PageSpeed Insights (Google) for diagnostics
- [ ] Test with WebPageTest.org for waterfall analysis
- [ ] Monitor with Lighthouse CI in CI/CD pipeline
- [ ] Set up Vercel Analytics or Datadog for real-user metrics

### Optimization Tactics (Next.js 15 specific)

#### LCP Optimization
```typescript
// 1. Use next/image for hero images (automatic optimization)
import Image from 'next/image';

export function HeroImage() {
  return (
    <Image
      src="/hero.jpg"
      alt="Abdulrahman Alidrisy"
      width={1200}
      height={600}
      priority  // Preload LCP image
      quality={75}  // Optimize quality
    />
  );
}

// 2. Preload critical fonts
// In app/layout.tsx or _document.tsx:
<link
  rel="preload"
  as="font"
  href="/fonts/orbitron.woff2"
  type="font/woff2"
  crossOrigin="anonymous"
/>

// 3. Preconnect to critical third-party origins
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

// 4. Defer non-critical JavaScript
// Use dynamic imports with ssr: false for below-fold components
import dynamic from 'next/dynamic';

const ContactForm = dynamic(
  () => import('@/components/ContactForm'),
  { ssr: false, loading: () => <p>Loading...</p> }
);

// 5. Minimize CSS (Tailwind is already optimized in production)
// Ensure purge is enabled in tailwind.config.js
```

#### CLS Optimization
```typescript
// 1. Reserve space for dynamic content
<div style={{ width: 300, height: 400 }}>
  {/* Image or component that loads later */}
</div>

// 2. Avoid inserting content above existing content
// Place ads, notifications below fold initially

// 3. Use CSS containment
<div style={{ contain: 'layout style paint' }}>
  {/* Complex component */}
</div>

// 4. For web fonts: use font-display: swap
@font-face {
  font-family: 'Orbitron';
  src: url('/fonts/orbitron.woff2') format('woff2');
  font-display: swap;  // Prevent FOIT
}
```

#### INP Optimization
```typescript
// 1. Break up long tasks (>50ms) with setTimeout
async function processLargeList(items: unknown[]) {
  for (let i = 0; i < items.length; i += 100) {
    // Process 100 items
    const batch = items.slice(i, i + 100);
    // ... process batch
    
    // Yield to browser
    await new Promise(resolve => setTimeout(resolve, 0));
  }
}

// 2. Use useTransition for non-blocking updates (React 18+)
import { useTransition } from 'react';

export function SearchResults() {
  const [isPending, startTransition] = useTransition();
  
  const handleSearch = (query: string) => {
    startTransition(() => {
      // Fetch & update UI without blocking interaction
    });
  };
  
  return <div>{isPending ? 'Loading...' : <Results />}</div>;
}

// 3. Minimize JavaScript: defer non-critical bundles
// In next.config.ts:
export default {
  experimental: {
    optimizePackageImports: ['@mui/icons-material'],
  },
};
```

---

## 2. IMAGE OPTIMIZATION (Next.js)

### Best Practices

```typescript
// ✓ GOOD: Using next/image
import Image from 'next/image';

export function ProjectCard({ project }) {
  return (
    <Image
      src={project.imageUrl}
      alt={project.title}  // Descriptive alt text
      width={600}
      height={400}
      quality={85}  // 85 = good balance
      priority={project.featured}  // Only for hero/LCP
      loading="lazy"  // Default for below-fold
      sizes="(max-width: 768px) 100vw, 50vw"  // Responsive
      className="rounded-lg"
    />
  );
}

// ✗ BAD: Using <img> without optimization
<img src="/project.jpg" alt="Project" />

// Optimizations included automatically:
// - AVIF/WebP format selection
// - Automatic srcset generation
// - Responsive image sizing
// - Lazy loading
// - Blur placeholder (optional)
```

### Image Format & Size Guidelines

| Type | Format | Max Size | Quality |
|------|--------|----------|---------|
| Hero/LCP | AVIF/WebP | 150-300 KB | 85-90 |
| Thumbnail | WebP | 30-50 KB | 75-80 |
| Avatar | WebP | 20-30 KB | 80 |
| OG/Social | JPEG | 50-100 KB | 80 |

### Image Checklist
- [ ] All images use `next/image`
- [ ] `alt` text is descriptive (SEO + accessibility)
- [ ] `width` and `height` specified (prevent CLS)
- [ ] `priority` used only for LCP images (hero, first fold)
- [ ] Lazy loading used for below-fold images
- [ ] `sizes` prop for responsive images
- [ ] WebP format with JPEG fallback
- [ ] Compressed with imagemin or similar

---

## 3. FONT OPTIMIZATION

### Current Setup (Good!)
Your portfolio uses Google Fonts with `next/font`:

```typescript
// In layout.tsx (already good)
import { Orbitron, Rajdhani, Noto_Kufi_Arabic } from 'next/font/google';

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',  // ✓ Good: prevents FOIT
  weight: ['400', '500', '600', '700', '800', '900'],
});

// Apply via CSS variable
export default function Layout({ children }) {
  return (
    <html className={`${orbitron.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

### Enhancements

```typescript
// 1. Reduce font weights shipped (if possible)
// Only load weights actually used
const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700'],  // Fewer weights = smaller
  display: 'swap',
});

// 2. Preload critical fonts in head
// In layout.tsx or _document
<link
  rel="preload"
  as="font"
  href="/fonts/orbitron-400.woff2"
  type="font/woff2"
  crossOrigin="anonymous"
/>

// 3. For Arabic font: consider system fonts as fallback
// In Tailwind config:
theme: {
  fontFamily: {
    arabic: [
      'Noto Kufi Arabic',
      'Arial',  // Fallback
      'system-ui',
    ],
  },
}

// 4. Limit font variants to reduce bandwidth
// Don't load italic + bold + italic-bold if not used
```

---

## 4. CANONICAL & DUPLICATE CONTENT

### Current Setup (Good!)
Your layout already includes canonical:

```typescript
// In generateMetadata (already implemented)
alternates: {
  canonical: `/${locale}`,
  languages: {
    ar: '/ar',
    en: '/en',
  },
}
```

### Checklist
- [x] Canonical URL per page
- [x] Self-referential canonicals (`/en` → `<link rel="canonical" href="...">`)
- [x] hreflang for locale alternates
- [x] No indexing of duplicate parameters (e.g., `?utm_` variants)
- [ ] robots.txt blocks duplicate paths
- [ ] No www/non-www duplicates (redirect one to other)

### Redirect Policy (if needed)

```typescript
// next.config.ts
export default {
  redirects: async () => [
    // Redirect www to non-www
    {
      source: '/:path*',
      destination: 'https://www.alidrisy.com/:path*',
      permanent: true,
    },
    // Old routes to new
    {
      source: '/portfolio',
      destination: '/en/projects',
      permanent: true,
    },
  ],
};
```

---

## 5. XML SITEMAPS & robots.txt

### Current Setup (Good!)
Your `robots.ts` and `sitemap.ts` are implemented. Verify:

```typescript
// app/robots.ts (already done)
- ✓ Allow all
- ✓ Disallow /api, /_next, /admin
- ✓ Sitemap URL included
- ✓ Host specified

// app/sitemap.ts (already done)
- ✓ Includes en/ and ar/ routes
- ✓ hreflang alternates per URL
- ✓ Priorities set (1.0 home, 0.9 pages, 0.8 contact)
- ✓ Change frequency set
```

### Enhancement: Sitemap Index

```typescript
// app/sitemap-index.ts (optional, for large sites)
export default function sitemapIndex(): MetadataRoute.SitemapIndex {
  return [
    {
      url: 'https://www.alidrisy.com/sitemap.xml',
      lastModified: new Date(),
    },
    {
      url: 'https://www.alidrisy.com/sitemap-blog.xml',  // If blog added
      lastModified: new Date(),
    },
  ];
}
```

### Checklist
- [x] robots.txt in /public or via app/robots.ts
- [x] sitemap.xml includes all crawlable routes
- [x] Sitemap max 50,000 URLs (yours ~10-20, fine)
- [x] lastModified timestamps accurate
- [x] hreflang in sitemap for locale pairs
- [x] Sitemap URL in robots.txt and GSC
- [ ] Monitor crawl stats in Google Search Console

---

## 6. PAGINATION & ARCHIVE HANDLING

### Current State
Your portfolio doesn't have pagination (projects are limited), but if you add a **Blog section**, follow these rules:

```typescript
// Example: /en/blog?page=2
// In blog sitemap or robots.txt:

// ✓ GOOD: Don't noindex paginated pages
// ✓ GOOD: Include all pages in sitemap
// ✓ GOOD: Use rel="next" and rel="prev" (optional, but helpful)

// For blog posts:
export function generateMetadata({
  params: { page },
}: {
  params: { page: string };
}) {
  return {
    robots: page === '1' ? 'index, follow' : 'index, follow',  // All crawlable
    alternates: {
      canonical: `/blog?page=${page}`,
    },
  };
}

// ✓ Add rel="next" / rel="prev" in head
<link rel="next" href={`/blog?page=${page + 1}`} />
<link rel="prev" href={`/blog?page=${page - 1}`} />
```

---

## 7. STRUCTURED DATA VALIDATION

### Tools to Test
1. **Google Rich Results Test:** https://search.google.com/test/rich-results
2. **Schema.org Validator:** https://validator.schema.org/
3. **Bing Markup Validator:** https://www.bing.com/webmaster/tools/markup-validator

### Validation Checklist

```bash
# Before deployment, test all pages with:
curl https://www.alidrisy.com/en | grep "ld+json"

# Validate with schema.org validator:
# Paste JSON-LD from page source
```

- [ ] Person schema: valid, no errors
- [ ] Organization schema: valid, no errors
- [ ] WebSite schema: SearchAction working
- [ ] Page schemas (AboutPage, ContactPage, etc.): correct types
- [ ] BreadcrumbList: all items linked properly
- [ ] FAQPage: questions & answers valid
- [ ] No `@type` mismatches or missing required fields

---

## 8. SECURITY HEADERS (For SEO & Safety)

### Recommended Headers (Vercel auto-sets many)

```typescript
// next.config.ts
export default {
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN',
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin',
        },
        {
          key: 'Permissions-Policy',
          value: 'geolocation=(), microphone=(), camera=()',
        },
      ],
    },
  ],
};
```

### HTTPS Check
- [x] HTTPS enforced (default on Vercel)
- [x] HSTS header set (Vercel auto)
- [x] No mixed content (HTTP resources on HTTPS page)

---

## 9. INTERNATIONALIZATION (i18n) & HREFLANG

### Current Implementation (Good!)
Using `next-intl` with locale-based routing: `/en/...` and `/ar/...`

### SEO Verification Checklist
- [x] Locale routing: `/en/page` and `/ar/page`
- [x] hreflang in `<head>` for each page
- [x] hreflang in sitemap (xhtml:link)
- [x] x-default set to English (primary audience)
- [ ] Metadata translated (titles, descriptions, OG text)
- [ ] Language specified in `<html lang="en">` or `<html lang="ar">`

### Verify hreflang Syntax

```html
<!-- Correct (each locale links all alternates) -->
<link rel="alternate" hreflang="en" href="https://www.alidrisy.com/en/about" />
<link rel="alternate" hreflang="ar" href="https://www.alidrisy.com/ar/about" />
<link rel="alternate" hreflang="x-default" href="https://www.alidrisy.com/en/about" />

<!-- Wrong (one-way links) -->
<link rel="alternate" hreflang="en" href="..." /> (missing ar & x-default)
```

---

## 10. PERFORMANCE MONITORING & ALERTS

### Set Up Observability

```typescript
// Use Vercel Web Analytics (built-in)
// In layout.tsx:
import { Analytics } from '@vercel/analytics/react';

export default function Layout() {
  return (
    <>
      {/* ... */}
      <Analytics />
    </>
  );
}

// Or Google Analytics + Google Search Console
```

### Monthly SEO Health Checklist
- [ ] GSC: Check indexation (all pages indexed?)
- [ ] GSC: Review Core Web Vitals
- [ ] GSC: Check for crawl errors
- [ ] GSC: Monitor Top Queries
- [ ] Bing Webmaster: Similar checks
- [ ] PageSpeed Insights: Run full audit
- [ ] Backlink checker: Any new links?
- [ ] Social media: Engagement metrics

---

## 11. NEXT.JS 15 SPECIFIC OPTIMIZATIONS

### App Router (Already Using - Good!)
- [x] App router enabled
- [x] Server Components default (faster, better SEO)
- [ ] Use `generateMetadata` (already doing)
- [ ] Use `generateStaticParams` for dynamic routes
- [ ] ISR (Incremental Static Regeneration) for heavy pages

### Example: Static Generation with ISR

```typescript
// app/[locale]/projects/[slug]/page.tsx
export const revalidate = 3600;  // Revalidate every hour

export async function generateStaticParams() {
  return [
    { locale: 'en', slug: 'homaapp' },
    { locale: 'en', slug: 'ijar' },
    { locale: 'ar', slug: 'homaapp' },
    { locale: 'ar', slug: 'ijar' },
  ];
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  // Fetch project data
  return <ProjectDetail />;
}
```

### Next.js 15 Edge Optimizations
```typescript
// next.config.ts
export default {
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
};
```

---

## 12. FINAL SEO DEPLOYMENT CHECKLIST

Before going live:

- [ ] Metadata: All titles ≤60 chars, descriptions 150–160 chars
- [ ] Images: All use next/image with alt text, quality optimization
- [ ] Fonts: Preloaded, display: swap enabled
- [ ] Canonical URLs: Correct for all pages
- [ ] hreflang: Implemented in layout + sitemap
- [ ] robots.txt: Correct disallows, sitemap listed
- [ ] sitemap.xml: Includes all routes, hreflang pairs
- [ ] JSON-LD: Person, Organization, WebSite, Page types valid
- [ ] Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms
- [ ] Mobile: Responsive, touch-friendly, no layout shifts
- [ ] Security: HTTPS, CSP headers, no mixed content
- [ ] Google Search Console: Property verified, sitemap submitted
- [ ] Bing Webmaster: Property verified, sitemap submitted
- [ ] Analytics: GA4 or similar configured
- [ ] 404 Page: Custom 404 with links to main sections
- [ ] Not Found: /not-found.tsx returns 404 status

---

**End of Performance & Tech SEO Checklist**
