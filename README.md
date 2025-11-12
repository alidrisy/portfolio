# Abdulrahman Alidrisy - Portfolio (Next.js 15)

A modern, multilingual portfolio built with Next.js 15, featuring advanced animations, i18n support, and pixel-perfect design preservation from the original React app.

## 🚀 Features

- **Next.js 15** with App Router and Server Components
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling with custom design system
- **Framer Motion** for advanced animations and transitions
- **next-intl** for Arabic/English i18n with RTL support
- **lucide-react** for icons
- **SEO optimized** with metadata, OpenGraph, and JSON-LD
- **Accessibility** compliant (WCAG 2.1 AA)
- **Performance** optimized (Lighthouse 90+)

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx          # Locale-specific layout
│   │   │   ├── page.tsx             # Home page with previews
│   │   │   ├── about/page.tsx       # Full about page
│   │   │   ├── services/page.tsx    # Services listing
│   │   │   ├── projects/page.tsx    # Projects listing
│   │   │   └── contact/page.tsx     # Contact page
│   │   ├── layout.tsx               # Root layout
│   │   └── globals.css              # Global styles
│   ├── components/
│   │   ├── layout/                  # Header, Nav
│   │   ├── motion/                  # Animation primitives
│   │   ├── pages/                   # Full page components
│   │   ├── sections/                # Preview sections
│   │   └── ui/                      # Reusable UI components
│   ├── i18n/
│   │   ├── routing.ts               # i18n routing config
│   │   └── request.ts               # Request config
│   └── lib/
│       ├── motion.ts                # Motion variants
│       └── utils.ts                 # Utility functions
├── messages/
│   ├── ar.json                      # Arabic translations
│   └── en.json                      # English translations
├── public/
│   ├── images/                      # Project images
│   ├── avatar.png                   # Profile picture
│   └── Abdulrahman_Alidrisy_resume.pdf                  # Resume
├── middleware.ts                    # i18n middleware
├── next.config.ts                   # Next.js config
├── tailwind.config.ts               # Tailwind config
└── next-sitemap.config.js           # Sitemap config
```

## 🎨 Motion Architecture

### Global Transitions
- **Route transitions**: Smooth page transitions with fade + slide (350ms)
- **Layout boundary**: Shared element transitions between pages
- **Respects reduced motion**: Automatically disables animations for users who prefer reduced motion

### Animation Primitives

#### `AnimatedSection`
Animates sections on scroll with IntersectionObserver:
```tsx
<AnimatedSection delay={0.2}>
  <YourContent />
</AnimatedSection>
```

#### `RouteTransition`
Wraps page content for smooth route transitions:
```tsx
<RouteTransition>
  <PageContent />
</RouteTransition>
```

#### `StaggerList` & `StaggerItem`
Creates staggered animations for lists:
```tsx
<StaggerList staggerDelay={0.1}>
  <StaggerItem>Item 1</StaggerItem>
  <StaggerItem>Item 2</StaggerItem>
</StaggerList>
```

#### `InkUnderline`
Animated underline effect:
```tsx
<InkUnderline isActive={isActive}>
  Link Text
</InkUnderline>
```

### Motion Variants
Pre-built variants in `src/lib/motion.ts`:
- `fadeIn(direction, delay)` - Fade with directional slide
- `slideIn(direction, delay)` - Slide from direction
- `scaleIn(delay)` - Scale up animation
- `staggerContainer(stagger, delay)` - Container for staggered children

### Page-Specific Animations

#### Home
- Staged hero reveal with parallax
- Staggered preview cards
- Hover micro-physics on interactive elements

#### About
- Timeline with slide/scale animations
- Counter animations with spring damping
- Stats cards with hover effects

#### Services
- Card hover micro-interactions
- Process steps with stagger reveal
- Ink underline on navigation

#### Projects
- Grid to detail transitions
- Image scale on hover
- Shared element morphing (ready for detail pages)

#### Contact
- Field focus micro-states
- Form validation animations
- Success celebration (motion-safe)

## 🌍 Internationalization (i18n)

### Adding a New Locale

1. **Add locale to routing config** (`src/i18n/routing.ts`):
```ts
export const routing = defineRouting({
  locales: ['ar', 'en', 'fr'], // Add 'fr'
  defaultLocale: 'ar',
});
```

2. **Create message file** (`messages/fr.json`):
```json
{
  "common": { ... },
  "nav": { ... },
  ...
}
```

3. **Update metadata** in each page's `generateMetadata`:
```ts
alternates: {
  languages: {
    ar: '/ar',
    en: '/en',
    fr: '/fr', // Add new locale
  },
}
```

### RTL Support
- Automatic `dir` attribute based on locale
- Logical properties in CSS (padding-inline, margin-inline)
- Tailwind utilities work with both LTR and RTL

### Translation Structure
Messages are organized by namespace:
- `common`: Shared strings (buttons, CTAs)
- `nav`: Navigation labels
- `hero`: Hero section content
- `about`: About page content
- `services`: Services content
- `projects`: Projects content
- `contact`: Contact page content
- `metadata`: SEO metadata

## 📝 Content Management

### Adding a Service

1. **Update messages** (`messages/en.json` and `messages/ar.json`):
```json
{
  "services": {
    "list": [
      {
        "num": "05",
        "title": "New Service",
        "description": "Short description",
        "details": "Full description",
        "process": ["Step 1", "Step 2", ...]
      }
    ]
  }
}
```

2. The service will automatically appear on:
   - Home page (if in first 3)
   - Services listing page
   - Service detail page (create route if needed)

### Adding a Project

1. **Add project images** to `public/images/`

2. **Update messages**:
```json
{
  "projects": {
    "list": [
      {
        "num": "03",
        "slug": "project-slug",
        "category": "Full-Stack",
        "title": "Project Name",
        "description": "Short description",
        "stack": "Tech1, Tech2, Tech3",
        "image": "/images/project.png",
        "live": "https://...",
        "github": "https://...",
        "problem": "Problem statement",
        "solution": "Solution description",
        "impact": "Impact metrics"
      }
    ]
  }
}
```

3. Projects automatically appear on:
   - Home page (first 2)
   - Projects listing page
   - Project detail page (create route if needed)

## 🔍 SEO

### Per-Page Metadata
Each page has `generateMetadata` with:
- Localized title and description
- Canonical URLs
- Language alternates (`hreflang`)
- OpenGraph tags
- Twitter Card tags

### JSON-LD Structured Data
Add to pages as needed:
```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Abdulrahman Alidrisy",
      ...
    }),
  }}
/>
```

### Sitemap & Robots
- `next-sitemap` generates sitemap.xml and robots.txt
- Runs automatically on build
- Includes all localized routes
- Configured in `next-sitemap.config.js`

## 🎯 Performance

### Image Optimization
- `next/image` with proper `sizes` attribute
- AVIF and WebP formats
- Lazy loading by default
- Priority loading for hero images

### Font Optimization
- `next/font` for Google Fonts
- Font display: swap
- Preconnect to font CDN
- Variable fonts for Orbitron, Rajdhani, Aldrich

### Code Splitting
- Server Components by default
- Client Components only when needed
- Dynamic imports for heavy components
- Route-based code splitting

### CLS Prevention
- Fixed dimensions for images
- Skeleton loaders where needed
- No layout shift on animations
- Proper aspect ratios

## ♿ Accessibility

### Keyboard Navigation
- All interactive elements focusable
- Visible focus indicators
- Skip to content link
- Logical tab order

### Screen Readers
- Semantic HTML
- ARIA labels where needed
- Alt text for images
- Proper heading hierarchy

### Motion
- Respects `prefers-reduced-motion`
- Animations disabled for users who prefer reduced motion
- No flashing or strobing effects
- Smooth, predictable transitions

### Color Contrast
- WCAG AA compliant
- Minimum 4.5:1 for text
- Accent color tested for contrast
- Focus indicators visible

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Environment Variables
Create `.env.local`:
```env
SITE_URL=https://alidrisy.com
```

## 📦 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Set environment variables
4. Deploy

### Other Platforms
```bash
npm run build
npm start
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts`:
```ts
colors: {
  primary: '#0a0a0a',
  accent: '#B809C3',
  'accent-hover': '#9607a3',
}
```

### Fonts
Edit `src/app/[locale]/layout.tsx`:
```ts
import { YourFont } from 'next/font/google';
```

### Animations
Edit `src/lib/motion.ts` for global variants or create custom variants in components.

## 📊 Quality Gates

### Lighthouse Scores (Target: 90+)
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### Type Safety
```bash
npm run build  # TypeScript check included
```

### Linting
```bash
npm run lint
```

## 🐛 Troubleshooting

### Hydration Errors
- Ensure Server and Client components render the same
- Use `suppressHydrationWarning` on `<html>` for locale/dir

### Animation Performance
- Use `will-change` sparingly
- Prefer `transform` and `opacity`
- Check for layout thrashing

### i18n Issues
- Verify locale in routing config
- Check message file structure
- Ensure `setRequestLocale` is called

## 📄 License

Private - All rights reserved

## 👤 Author

**Abdulrahman Alidrisy**
- GitHub: [@alidrisy](https://github.com/alidrisy)
- LinkedIn: [abdulrahman-alidrisy](https://www.linkedin.com/in/alidrisy/)
- Twitter: [@AbdulrahmanAdeb](https://x.com/AbdulrahmanAdeb)

---

Built with ❤️ using Next.js 15, TypeScript, and Tailwind CSS v4
