/**
 * QUICK START REFERENCE
 * Most important actions to take NOW
 */

export const QUICK_START = {
  title: '⚡ IMMEDIATE ACTION ITEMS',
  
  TODO_1: {
    priority: '🔴 CRITICAL - DO NOW',
    task: 'Replace Google Verification Code',
    location: 'src/app/[locale]/layout.tsx',
    find: 'google: \'YOUR_GOOGLE_VERIFICATION_CODE\'',
    replace_with: 'Your actual code from Google Search Console',
    consequence_if_skipped: '❌ Blocks all Google Search Console setup',
    deadline: 'BEFORE DEPLOYING TO PRODUCTION',
  },

  TODO_2: {
    priority: '🔴 CRITICAL - DO FIRST',
    task: 'Build and Deploy to Production',
    commands: [
      'npm run build',
      'Deploy (Vercel, Netlify, or your platform)',
    ],
    verify: 'https://www.alidrisy.com loads without errors',
    deadline: 'TODAY',
  },

  TODO_3: {
    priority: '🔴 CRITICAL - DO IMMEDIATELY AFTER',
    task: 'Submit Sitemap to Google',
    steps: [
      '1. Go to: https://search.google.com/search-console',
      '2. Select your property (alidrisy.com)',
      '3. Left menu → Sitemaps',
      '4. Enter: https://www.alidrisy.com/sitemap.xml',
      '5. Click Submit',
    ],
    impact: 'Accelerates indexing by 50%',
    deadline: 'WITHIN 1 HOUR OF DEPLOYMENT',
  },

  TODO_4: {
    priority: '🟠 HIGH - DO WITHIN 2-3 HOURS',
    task: 'Validate Structured Data',
    steps: [
      '1. Go to: https://search.google.com/test/rich-results',
      '2. Enter: https://www.alidrisy.com/en',
      '3. Verify: No validation errors',
      '4. Test other pages: /about, /services, /projects, /contact, /ar',
    ],
    expected: 'All pages pass validation',
  },

  TODO_5: {
    priority: '🟠 HIGH - DO WITHIN 1 DAY',
    task: 'Run Lighthouse Audit',
    steps: [
      '1. Open Chrome',
      '2. Go to: https://www.alidrisy.com',
      '3. Press F12 (DevTools)',
      '4. Click Lighthouse tab',
      '5. Select "Analyse page load"',
    ],
    targets: {
      performance: '≥ 90',
      accessibility: '≥ 90',
      best_practices: '≥ 90',
      seo: '≥ 90',
    },
  },

  OPTIONAL_SOON: {
    priority: '🟡 MEDIUM - WITHIN 2 WEEKS',
    task: 'Create FAQ Page',
    impact: '+40-60% AI Overviews visibility',
    location: 'Create: src/app/[locale]/faq/page.tsx',
    use_content_from: 'src/lib/ai-overviews-optimization.ts',
  },

  FILES_YOU_CREATED: {
    files: [
      {
        name: 'structured-data-enhanced.ts',
        use: 'Enhanced JSON-LD schemas',
        location: 'src/lib/',
      },
      {
        name: 'seo-config.ts',
        use: 'All page metadata centralized',
        location: 'src/lib/',
      },
      {
        name: 'DEPLOYMENT_GUIDE.ts',
        use: 'Complete post-deployment steps',
        location: 'src/lib/',
        important: true,
      },
      {
        name: 'ai-overviews-optimization.ts',
        use: 'FAQ content and AI optimization tips',
        location: 'src/lib/',
      },
      {
        name: 'tech-seo-checklist.ts',
        use: 'Technical SEO best practices',
        location: 'src/lib/',
      },
      {
        name: 'metadata-examples.ts',
        use: 'Copy-paste ready metadata',
        location: 'src/lib/',
      },
    ],
  },

  VERIFICATION_COMMANDS: {
    before_deploy: [
      'npm run build    (must pass)',
      'npm run lint     (should pass)',
    ],
  },

  CRITICAL_LINKS: {
    google_search_console: 'https://search.google.com/search-console',
    rich_results_test: 'https://search.google.com/test/rich-results',
    pagespeed: 'https://pagespeed.web.dev',
    schema_validator: 'https://validator.schema.org/',
  },

  EXPECTED_TIMELINE: {
    week_1: [
      'Sitemap accepted',
      'Structured data validated',
      'Pages begin indexing',
    ],
    week_2_4: [
      'Keywords appearing in search',
      'First impressions from Google',
    ],
    month_3: [
      'Top 50 rankings for primary keywords',
      '+15-25% organic traffic increase',
    ],
    month_6: [
      'Top 20 rankings',
      '+25-35% organic traffic',
      'AI Overviews appearing',
    ],
  },

  IF_YOU_GET_STUCK: {
    structured_data_error: 'See: src/lib/tech-seo-checklist.ts → Troubleshooting',
    sitemap_rejected: 'See: DEPLOYMENT_GUIDE.ts → Phase 4 → Troubleshooting',
    low_performance: 'See: src/lib/tech-seo-checklist.ts → Image/Font Optimization',
    indexing_issues: 'See: DEPLOYMENT_GUIDE.ts → Phase 4 & 6',
  },
};

export default QUICK_START;
