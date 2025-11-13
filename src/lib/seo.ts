/**
 * SEO Configuration & Utilities
 * Abdulrahman Alidrisy Portfolio
 * 
 * Centralized SEO strings, metadata, and hreflang generation for EN/AR
 */

export const SEO_CONFIG = {
  baseUrl: 'https://www.alidrisy.com',
  siteName: 'Abdulrahman Alidrisy Portfolio',
  twitterHandle: '@AbdulrahmanAdeb',
  authorEmail: 'a.alidrisy6@gmail.com',
  authorPhone: '+966571010226',
  authorName: 'Abdulrahman Alidrisy',
  authorLocation: 'Riyadh, Saudi Arabia',
  
  // Default OG image (fallback)
  defaultOGImage: {
    url: 'https://www.alidrisy.com/og-image.jpeg',
    width: 1200,
    height: 630,
    alt: 'Abdulrahman Alidrisy - Full Stack Software Engineer',
  },
  
  // Canonical locales
  locales: ['en', 'ar'] as const,
  defaultLocale: 'en' as const,
};

/**
 * Page-specific metadata EN/AR
 */
export const PAGES_METADATA = {
  home: {
    en: {
      title: 'Abdulrahman Alidrisy - Full-Stack Developer Portfolio',
      description: 'Full-stack developer in Riyadh, Saudi Arabia. Specializing in React, Next.js, Python, and DevOps. View portfolio & hire today.',
      keywords: [
        'Abdulrahman Alidrisy',
        'Full Stack Developer',
        'React Developer',
        'Next.js Developer',
        'Software Engineer',
        'Riyadh',
        'Saudi Arabia',
      ],
    },
    ar: {
      title: 'عبدالرحمن الإدريسي - مهندس برمجيات متخصص',
      description: 'مهندس برمجيات بخبرة في الرياض. متخصص في React و Next.js و Python و DevOps. عرض أعمالي وتوظيفي اليوم.',
      keywords: [
        'عبدالرحمن الإدريسي',
        'مهندس برمجيات',
        'مطور فرونتند',
        'مطور بيك إند',
        'مهندس برمجيات',
        'الرياض',
        'السعودية',
      ],
    },
  },
  about: {
    en: {
      title: 'About Abdulrahman Alidrisy - Full-Stack Engineer',
      description: 'Experienced full-stack software engineer with 2+ years delivering React, Next.js, Python solutions. ALX graduate, HOMA Team Lead.',
      keywords: [
        'Full Stack Engineer',
        'Software Engineer Experience',
        'ALX Africa',
        'HOMA',
        'Backend Developer',
        'Frontend Developer',
      ],
    },
    ar: {
      title: 'عني - عبدالرحمن الإدريسي - مهندس برمجيات متكامل',
      description: 'مهندس برمجيات متكامل بخبرة أكثر من عامين. خريج ALX Africa، مطور Frontend في HOMA بالرياض.',
      keywords: [
        'مهندس برمجيات',
        'خبرة برمجة',
        'ALX Africa',
        'HOMA',
        'مطور بك إند',
        'مطور فرونتند',
      ],
    },
  },
  services: {
    en: {
      title: 'Full-Stack Development Services - React, Python, DevOps',
      description: 'Custom full-stack development services: frontend (React, Next.js), backend (Python, Node.js), APIs, databases, DevOps, CI/CD.',
      keywords: [
        'Full Stack Development',
        'Web Development Services',
        'React Development',
        'Python Development',
        'DevOps Services',
        'API Development',
        'Database Design',
      ],
    },
    ar: {
      title: 'خدمات التطوير المتكامل - React و Python و DevOps',
      description: 'خدمات تطوير متكاملة: واجهات أمامية (React، Next.js)، خوادم خلفية (Python، Node.js)، واجهات برمجية، قواعد بيانات، DevOps.',
      keywords: [
        'خدمات تطوير ويب',
        'تطوير متكامل',
        'تطوير React',
        'تطوير Python',
        'خدمات DevOps',
        'تطوير API',
        'تصميم قواعد البيانات',
      ],
    },
  },
  projects: {
    en: {
      title: 'Full-Stack Projects - HomaApp, Ijar, Awamer, AudioTube',
      description: 'View my full-stack project portfolio: HomaApp (luxury real estate), Ijar (car rentals), Awamer IT services, AudioTube.',
      keywords: [
        'Full Stack Projects',
        'Portfolio',
        'Case Studies',
        'HomaApp',
        'Ijar',
        'React Projects',
        'Next.js Projects',
      ],
    },
    ar: {
      title: 'المشاريع - HomaApp و Ijar و Awamer و AudioTube',
      description: 'اعرض محفظة المشاريع الخاصة بي: HomaApp (العقارات الفاخرة)، Ijar (تأجير السيارات)، Awamer و AudioTube.',
      keywords: [
        'مشاريع تطوير',
        'محفظة أعمال',
        'دراسات حالة',
        'HomaApp',
        'Ijar',
        'مشاريع React',
        'مشاريع Next.js',
      ],
    },
  },
  contact: {
    en: {
      title: 'Contact Abdulrahman Alidrisy - Hire Developer',
      description: 'Get in touch with Abdulrahman Alidrisy for full-stack development, freelance projects, or consulting. Riyadh-based, available globally.',
      keywords: [
        'Contact Developer',
        'Hire Full Stack Developer',
        'Freelance Developer',
        'Software Engineer Riyadh',
        'Consulting Services',
      ],
    },
    ar: {
      title: 'تواصل مع عبدالرحمن الإدريسي - مهندس برمجيات',
      description: 'تواصل مع عبدالرحمن الإدريسي لمشاريع التطوير المتكامل أو الاستشارات. بناءً في الرياض، متاح عالميًا.',
      keywords: [
        'تواصل مع مطور',
        'توظيف مطور',
        'مطور مستقل',
        'مهندس برمجيات الرياض',
        'استشارات تقنية',
      ],
    },
  },
  faq: {
    en: {
      title: 'FAQ - Frequently Asked Questions',
      description: 'Answers to common questions about my services, technologies, and hiring practices.',
      keywords: [
        'FAQ',
        'Questions',
        'Hiring Developer',
        'Development Services',
        'Next.js',
        'React',
      ],
    },
    ar: {
      title: 'أسئلة شائعة',
      description: 'إجابات على الأسئلة الشائعة عن خدماتي والتقنيات والممارسات المتعلقة بالعمل.',
      keywords: [
        'أسئلة شائعة',
        'توظيف',
        'خدمات تطوير',
        'Next.js',
        'React',
      ],
    },
  },
} as const;

/**
 * Generate hreflang links for a page
 * @param pathname - current page path (e.g., '/about')
 * @param locale - current locale (en or ar)
 */
export function generateHreflangs(pathname: string, locale: string) {
  const baseUrl = SEO_CONFIG.baseUrl;
  const routes = ['', '/about', '/services', '/projects', '/contact'];
  
  // Ensure pathname is in routes list
  const cleanPathname = routes.includes(pathname) ? pathname : '';
  
  return [
    {
      hreflang: 'en',
      href: `${baseUrl}/en${cleanPathname}`,
    },
    {
      hreflang: 'ar',
      href: `${baseUrl}/ar${cleanPathname}`,
    },
    {
      hreflang: 'x-default',
      href: `${baseUrl}/en${cleanPathname}`,
    },
  ];
}

/**
 * Generate canonical URL
 */
export function getCanonicalUrl(locale: string, pathname: string): string {
  return `${SEO_CONFIG.baseUrl}/${locale}${pathname}`;
}

/**
 * OpenGraph metadata generator
 */
export function generateOGMetadata(
  locale: string,
  title: string,
  description: string,
  pathname: string,
  imageUrl?: string
) {
  return {
    title: title,
    description: description,
    url: getCanonicalUrl(locale, pathname),
    siteName: SEO_CONFIG.siteName,
    locale: locale === 'ar' ? 'ar_SA' : 'en_US',
    type: 'website' as const,
    images: [
      {
        url: imageUrl || SEO_CONFIG.defaultOGImage.url,
        width: SEO_CONFIG.defaultOGImage.width,
        height: SEO_CONFIG.defaultOGImage.height,
        alt: SEO_CONFIG.defaultOGImage.alt,
      },
    ],
  };
}

/**
 * Twitter Card metadata generator
 */
export function generateTwitterMetadata(
  title: string,
  description: string,
  imageUrl?: string
) {
  return {
    card: 'summary_large_image' as const,
    title: title,
    description: description,
    images: [imageUrl || SEO_CONFIG.defaultOGImage.url],
    creator: SEO_CONFIG.twitterHandle,
  };
}

/**
 * SEO-friendly URL generation
 * Usage: seoUrl('projects', 'homaapp') => '/projects/homaapp'
 */
export function seoUrl(...segments: string[]): string {
  return '/' + segments.filter(Boolean).join('/');
}

/**
 * Keywords for AI Overviews optimization
 * These target high-intent queries for AI generative results
 */
export const AI_OVERVIEWS_KEYWORDS = {
  hiring: [
    'hire full stack developer',
    'freelance developer Saudi Arabia',
    'web development services GCC',
    'can you integrate payment gateways',
    'do you build with Next.js 15',
  ],
  technical: [
    'best practices Next.js',
    'React 19 features',
    'DevOps CI/CD pipeline',
    'database optimization',
    'API design patterns',
  ],
  local: [
    'software engineer Riyadh',
    'developer Saudi Arabia',
    'web development Riyadh',
  ],
};

/**
 * Structured data helper: compress for consistent schema.org compliance
 */
export function createStructuredDataSchema(type: string, data: Record<string, any>) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };
}
