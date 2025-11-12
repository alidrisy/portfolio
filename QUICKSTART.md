# Quick Start Guide

Get your Next.js 15 portfolio running in 5 minutes!

## Prerequisites

- Node.js 18 or higher
- npm, yarn, or pnpm

Check your Node version:
```bash
node --version  # Should be 18.x or higher
```

## Installation

### 1. Install Dependencies
```bash
npm install
```

This installs:
- Next.js 15
- React 19
- Tailwind CSS v4
- Framer Motion
- next-intl
- lucide-react
- TypeScript

### 2. Start Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. View in Different Locales
- Arabic (default): [http://localhost:3000/ar](http://localhost:3000/ar)
- English: [http://localhost:3000/en](http://localhost:3000/en)

## Project Structure

```
portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── [locale]/          # Localized routes
│   │   │   ├── page.tsx       # Home page
│   │   │   ├── about/         # About page
│   │   │   ├── services/      # Services page
│   │   │   ├── projects/      # Projects page
│   │   │   └── contact/       # Contact page
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── layout/           # Header, Nav
│   │   ├── motion/           # Animation primitives
│   │   ├── pages/            # Full page components
│   │   ├── sections/         # Preview sections
│   │   └── ui/               # Reusable UI
│   ├── i18n/                 # Internationalization
│   └── lib/                  # Utilities
├── messages/                  # Translation files
│   ├── ar.json               # Arabic
│   └── en.json               # English
├── public/                    # Static assets
│   ├── images/               # Images
│   ├── avatar.png            # Profile picture
│   └── Abdulrahman_Alidrisy_resume.pdf           # Resume
└── package.json              # Dependencies
```

## Available Scripts

### Development
```bash
npm run dev      # Start dev server (http://localhost:3000)
```

### Production
```bash
npm run build    # Build for production
npm start        # Start production server
```

### Linting
```bash
npm run lint     # Run ESLint
```

## Quick Customization

### 1. Update Personal Info

Edit `messages/en.json` and `messages/ar.json`:
```json
{
  "hero": {
    "name": "Your Name",
    "description": "Your description"
  }
}
```

### 2. Change Colors

Edit `tailwind.config.ts`:
```ts
colors: {
  primary: '#0a0a0a',    // Background
  accent: '#B809C3',     // Accent color
}
```

### 3. Update Projects

Edit `messages/en.json`:
```json
{
  "projects": {
    "list": [
      {
        "title": "Your Project",
        "description": "Description",
        "image": "/images/project.png",
        "live": "https://...",
        "github": "https://..."
      }
    ]
  }
}
```

### 4. Update Services

Edit `messages/en.json`:
```json
{
  "services": {
    "list": [
      {
        "title": "Your Service",
        "description": "Description",
        "details": "Full details"
      }
    ]
  }
}
```

### 5. Add Your Images

Place images in `public/images/`:
- Profile: `public/avatar.png`
- Projects: `public/images/project-name.png`
- Background: `public/images/site-bg.jpg`

### 6. Update Resume

Replace `public/Abdulrahman_Alidrisy_resume.pdf` with your resume.

## Common Tasks

### Add a New Page

1. Create file: `src/app/[locale]/your-page/page.tsx`
2. Add translations to `messages/en.json` and `messages/ar.json`
3. Add navigation link in `src/components/layout/Nav.tsx`

### Add a New Language

1. Add locale to `src/i18n/routing.ts`:
   ```ts
   locales: ['ar', 'en', 'fr']
   ```

2. Create `messages/fr.json` with translations

3. Update metadata in page files

### Change Fonts

Edit `src/app/[locale]/layout.tsx`:
```ts
import { YourFont } from 'next/font/google';

const yourFont = YourFont({
  subsets: ['latin'],
  variable: '--font-your-font',
});
```

### Disable Animations

Users can disable animations via their OS settings (prefers-reduced-motion).

To disable globally for testing:
```css
/* src/app/globals.css */
* {
  animation: none !important;
  transition: none !important;
}
```

## Testing

### Test All Routes
- Home: http://localhost:3000/ar
- About: http://localhost:3000/ar/about
- Services: http://localhost:3000/ar/services
- Projects: http://localhost:3000/ar/projects
- Contact: http://localhost:3000/ar/contact

### Test Locale Switching
Click the language switcher in the header (AR/EN)

### Test Responsive Design
- Mobile: 320px - 640px
- Tablet: 640px - 1024px
- Desktop: 1024px+

Use browser DevTools to test different screen sizes.

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

### Build Errors
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### TypeScript Errors
```bash
# Check types
npx tsc --noEmit
```

### Image Not Loading
- Check file exists in `public/images/`
- Check path is correct (case-sensitive)
- Check file extension matches

## Next Steps

1. **Customize Content**: Update all text in `messages/` files
2. **Add Your Projects**: Update projects list with your work
3. **Update Images**: Replace with your images
4. **Test Everything**: Check all pages and features
5. **Deploy**: Follow DEPLOYMENT.md guide

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [next-intl Documentation](https://next-intl-docs.vercel.app/)

## Getting Help

1. Check README.md for detailed documentation
2. Check MIGRATION_GUIDE.md for migration details
3. Check DEPLOYMENT.md for deployment help
4. Review Next.js documentation
5. Check GitHub Issues

## Quick Commands Reference

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm start               # Start production server
npm run lint            # Run linter

# Useful
npx next info           # Show Next.js info
npx next build --debug  # Debug build
```

---

**Ready to go!** 🚀

Your portfolio is now running with:
✅ Next.js 15 with App Router
✅ TypeScript for type safety
✅ Tailwind CSS v4 for styling
✅ Framer Motion for animations
✅ Arabic/English i18n
✅ SEO optimized
✅ Fully accessible
✅ Production ready

Start customizing and make it yours!
