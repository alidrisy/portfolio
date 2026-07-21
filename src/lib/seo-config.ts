/**
 * SEO Configuration & Constants
 * Centralized SEO metadata, canonical URLs, hreflang, and multilingual support
 */

export const SEO_CONFIG = {
  baseUrl: 'https://www.alidrisy.com',
  domain: 'www.alidrisy.com',
  brandName: 'Abdulrahman Alidrisy',
  shortBrand: 'Alidrisy',
  locale: ['en', 'ar'],
  defaultLocale: 'en',
  twitterHandle: '@AbdulrahmanAdeb',
  twitterCreator: '@AbdulrahmanAdeb',
} as const;

/**
 * PAGE METADATA - English & Arabic
 * Includes: title (≤60 chars), description (150-160 chars), OG text
 */
export const pageMetadata = {
  home: {
    en: {
      title: 'Abdulrahman Alidrisy - Product Engineer & Full-Stack Developer',
      description:
        'Product Engineer & Full-Stack Developer in Riyadh, Saudi Arabia specializing in Next.js, React, and Node.js. 2+ years shipping production platforms end-to-end for freelance clients and HOMA.',
      ogTitle: 'Abdulrahman Alidrisy - Product Engineer & Full-Stack Developer',
      ogDescription:
        'Product Engineer & Full-Stack Developer building and owning web platforms end-to-end. Next.js • React • Node.js • Product Management',
    },
    ar: {
      title: 'عبدالرحمن الإدريسي - مهندس منتج ومطور متكامل',
      description:
        'مهندس منتج ومطور متكامل بالرياض، السعودية، متخصص في Next.js و React و Node.js. خبرة +2 سنة في بناء منصات إنتاجية كاملة لعملاء فريلانس ولشركة HOMA.',
      ogTitle: 'عبدالرحمن الإدريسي - مهندس منتج ومطور متكامل',
      ogDescription:
        'مهندس منتج ومطور متكامل يبني منصات ويب ويقودها من الألف إلى الياء. Next.js • React • Node.js • إدارة المنتج',
    },
  },
  about: {
    en: {
      title: 'About - Abdulrahman Alidrisy | Product Engineer',
      description:
        'Learn about my 2+ years shipping full-stack products end-to-end with Next.js, React, Node.js, and Python. Currently Technical Product Manager & Lead Engineer at HOMA, Riyadh.',
      ogTitle: 'About Abdulrahman Alidrisy',
      ogDescription:
        'Product Engineer with expertise across frontend, backend, cloud/DevOps, and product management. Building and owning production-grade web applications.',
    },
    ar: {
      title: 'عني - عبدالرحمن الإدريسي | مهندس منتج',
      description:
        'تعرّف على خبرتي +2 سنة في بناء منتجات متكاملة من الألف إلى الياء باستخدام Next.js و React و Node.js و Python. أعمل حاليًا كمدير منتج تقني ومهندس رئيسي في HOMA بالرياض.',
      ogTitle: 'معلومات عبدالرحمن الإدريسي',
      ogDescription:
        'مهندس منتج بخبرة تشمل الواجهة الأمامية والخلفية والسحابة/DevOps وإدارة المنتج. بناء وقيادة تطبيقات ويب جاهزة للإنتاج.',
    },
  },
  services: {
    en: {
      title: 'Services - Full Stack Development & DevOps Solutions',
      description:
        'Frontend development with React & Next.js, backend with Python & Node.js, API design, databases, and cloud DevOps infrastructure.',
      ogTitle: 'Full Stack Development Services',
      ogDescription:
        'End-to-end web development services: React, Next.js, Python, Node.js, PostgreSQL, Docker, Kubernetes, and CI/CD pipelines.',
    },
    ar: {
      title: 'الخدمات - التطوير المتكامل و DevOps',
      description:
        'تطوير واجهة أمامية مع React و Next.js، وخلفية مع Python و Node.js، تصميم API، قواعد البيانات، والبنية التحتية السحابية.',
      ogTitle: 'خدمات التطوير المتكامل',
      ogDescription:
        'خدمات تطوير ويب شاملة: React و Next.js و Python و Node.js و PostgreSQL و Docker و Kubernetes و خطوط CI/CD.',
    },
  },
  projects: {
    en: {
      title: 'Projects - Full Stack Applications & Portfolio',
      description:
        'View 7 production, live projects: Diraya Law Firm, HomaApp, Caro car rental, Elite Experts, Ijar, Awamer, and AudioTube. Built end-to-end with Next.js, React, Node.js, and Python.',
      ogTitle: 'My Full Stack Projects',
      ogDescription:
        'Portfolio of live, production platforms: Diraya, HomaApp, Caro, Elite Experts, Ijar, Awamer, AudioTube. Real-world, end-to-end implementations.',
    },
    ar: {
      title: 'المشاريع - تطبيقات متكاملة و ملف أعمالي',
      description:
        'شاهد 7 مشاريع حية وجاهزة للإنتاج: دراية للمحاماة، HomaApp، كارو لتأجير السيارات، إيليت إكسبرتس، إيجار، أوامر، وأوديو تيوب. مبنية بالكامل مع Next.js و React و Node.js و Python.',
      ogTitle: 'مشاريعي المتكاملة',
      ogDescription:
        'ملف مشاريع حية وجاهزة للإنتاج: دراية، HomaApp، كارو، إيليت إكسبرتس، إيجار، أوامر، أوديو تيوب. تطبيقات عملية كاملة من الألف إلى الياء.',
    },
  },
  contact: {
    en: {
      title: 'Contact - Hire Abdulrahman Alidrisy | Full Stack Dev',
      description:
        'Get in touch for full-stack development projects, consulting, or collaboration. Based in Riyadh, available for remote work worldwide.',
      ogTitle: 'Contact - Full Stack Developer for Hire',
      ogDescription:
        'Reach out for project inquiries, collaboration, or consulting. Remote-friendly, available globally from Saudi Arabia.',
    },
    ar: {
      title: 'تواصل - استأجر عبدالرحمن الإدريسي | مهندس برمجيات',
      description:
        'تواصل لمشاريع التطوير المتكامل أو الاستشارات أو التعاون. مقيم بالرياض، متوفر للعمل البعيد حول العالم.',
      ogTitle: 'تواصل - مهندس برمجيات للاستئجار',
      ogDescription:
        'تواصل لاستفسارات المشاريع أو التعاون أو الاستشارات. متوفر للعمل البعيد من جميع أنحاء العالم.',
    },
  },
} as const;

/**
 * KEYWORDS - Per Page (EN/AR)
 * Primary, secondary, and long-tail keywords
 */
export const keywordMap = {
  home: {
    en: [
      'Product Engineer',
      'Full-Stack Engineer Saudi Arabia',
      'Next.js Developer Riyadh',
      'React Developer KSA',
      'Freelance Web Developer Saudi Arabia',
      'Full Stack Developer',
      'Software Engineer',
      'Node.js Developer',
      'Web Developer Saudi Arabia',
      'Riyadh Software Engineer',
      'TypeScript Developer',
      'freelance developer',
      'hire developer riyadh',
    ],
    ar: [
      'مهندس منتج',
      'مطور فل ستاك السعودية',
      'مطور Next.js الرياض',
      'مطور React السعودية',
      'مطور ويب فريلانس السعودية',
      'مهندس برمجيات',
      'مطور React',
      'مطور Next.js',
      'مطور Node.js',
      'مطور ويب السعودية',
      'مهندس البرمجيات الرياض',
      'مطور TypeScript',
      'مطور فريلانس',
      'استأجر مطور الرياض',
    ],
  },
  about: {
    en: [
      'About',
      'Biography',
      'Experience',
      'Skills',
      'Expertise',
      'Background',
      'Software engineer profile',
      'developer experience',
      'technical skills',
      'professional experience',
    ],
    ar: [
      'عني',
      'السيرة الذاتية',
      'الخبرة',
      'المهارات',
      'الاختصاص',
      'الخلفية',
      'ملف مهندس برمجيات',
      'خبرة مطور',
      'المهارات التقنية',
      'الخبرة المهنية',
    ],
  },
  services: {
    en: [
      'Full Stack Development',
      'Frontend Development',
      'Backend Development',
      'API Development',
      'DevOps Services',
      'Web Application Development',
      'Custom Software Development',
      'React Development Services',
      'Next.js Development',
      'Python Web Development',
      'Node.js Services',
      'Cloud Infrastructure',
      'Database Design',
      'CI/CD Pipeline Setup',
      'Web Development Services Riyadh',
      'Web Design Company Saudi Arabia',
      'Hire Full Stack Developer Riyadh',
      'Website Development Saudi Arabia',
      'Web App Developer KSA',
      'E-commerce Website Development Riyadh',
      'Freelance Web Developer Riyadh',
      'Build a Website Saudi Arabia',
      'Software Development Company Riyadh',
      'React & Next.js Developer for Hire',
      'MERN Stack Development Services',
      'Landing Page Development Saudi Arabia',
      'WhatsApp Business API Integration',
    ],
    ar: [
      'التطوير المتكامل',
      'تطوير الواجهة الأمامية',
      'تطوير الخلفية',
      'تطوير API',
      'خدمات DevOps',
      'تطوير تطبيقات الويب',
      'تطوير برمجيات مخصصة',
      'خدمات تطوير React',
      'تطوير Next.js',
      'تطوير ويب Python',
      'خدمات Node.js',
      'البنية التحتية السحابية',
      'تصميم قواعد البيانات',
      'إعداد خطوط CI/CD',
      'تصميم مواقع الرياض',
      'تصميم مواقع السعودية',
      'شركة تصميم مواقع الرياض',
      'برمجة مواقع الرياض',
      'مطور مواقع الرياض',
      'تصميم متجر إلكتروني الرياض',
      'تصميم موقع إلكتروني السعودية',
      'برمجة تطبيقات ويب السعودية',
      'مبرمج مواقع فريلانس السعودية',
      'تطوير مواقع احترافية الرياض',
      'عمل موقع الكتروني السعودية',
      'تصميم صفحة هبوط الرياض',
      'ربط واتساب للأعمال',
    ],
  },
  projects: {
    en: [
      'Portfolio',
      'Projects',
      'Case Studies',
      'Web Applications',
      'Project Showcase',
      'Full Stack Projects',
      'Diraya Law Firm Platform',
      'Caro Car Rental Platform',
      'Elite Experts Consulting Platform',
      'React Applications',
      'Next.js Projects',
      'MERN Stack',
      'Real World Applications',
      'Production Ready Apps',
    ],
    ar: [
      'ملف الأعمال',
      'المشاريع',
      'دراسات الحالات',
      'تطبيقات الويب',
      'عرض المشاريع',
      'مشاريع متكاملة',
      'منصة دراية للمحاماة',
      'منصة كارو لتأجير السيارات',
      'منصة إيليت إكسبرتس',
      'تطبيقات React',
      'مشاريع Next.js',
      'مشاريع MERN',
      'تطبيقات حقيقية',
      'تطبيقات جاهزة للإنتاج',
    ],
  },
  contact: {
    en: [
      'Contact',
      'Get in Touch',
      'Hire Developer',
      'Collaboration',
      'Project Inquiry',
      'Email Contact',
      'Schedule Meeting',
      'Freelance Hire',
      'Available for Work',
      'Professional Consultation',
    ],
    ar: [
      'تواصل',
      'تواصل معي',
      'استأجر مطور',
      'التعاون',
      'استفسار مشروع',
      'التواصل البريدي',
      'حجز اجتماع',
      'استأجر فريلانسر',
      'متوفر للعمل',
      'استشارة مهنية',
    ],
  },
} as const;

/**
 * HREFLANG MAPPING
 * Canonical and alternate language pairs for all routes
 */
export const getHreflangs = (pathname: string, locale: string) => {
  const baseUrl = 'https://www.alidrisy.com';
  const path = pathname.replace(/^\/(en|ar)/, '');

  return [
    {
      hrefLang: 'en',
      href: `${baseUrl}/en${path}`,
    },
    {
      hrefLang: 'ar',
      href: `${baseUrl}/ar${path}`,
    },
    {
      hrefLang: 'x-default',
      href: `${baseUrl}${path}`,
    },
  ];
};

/**
 * SOCIAL PROFILES
 * For sameAs and social linking
 */
export const socialProfiles = {
  github: 'https://github.com/alidrisy',
  linkedin: 'https://www.linkedin.com/in/alidrisy',
  twitter: 'https://twitter.com/AbdulrahmanAdeb',
  portfolio: 'https://www.alidrisy.com',
} as const;

/**
 * AI OVERVIEWS OPTIMIZATION CONTENT
 * Short, impactful copy for AI Search results
 */
export const aiOptimizedContent = {
  aboutEN: `Abdulrahman Alidrisy is a Full Stack Software Engineer with 2+ years of experience based in Riyadh, Saudi Arabia. He specializes in building scalable, production-grade web applications using React, Next.js 15, TypeScript, Python (FastAPI, Django), Node.js, and modern DevOps practices. Currently serving as a Frontend Developer and Backend Consultant at HOMA, leading the development of a luxury property platform. Certified through ALX Africa's Software Engineering and ProDev Back-End programmes.`,

  aboutAR: `عبدالرحمن الإدريسي مهندس برمجيات متكامل بخبرة تزيد عن سنتين مقيم بالرياض، المملكة العربية السعودية. يتخصص في بناء تطبيقات ويب قابلة للتوسع وجاهزة للإنتاج باستخدام React و Next.js 15 و TypeScript و Python (FastAPI و Django) و Node.js وممارسات DevOps الحديثة. يعمل حاليًا كمطوّر واجهة أمامية ومستشار خلفية في HOMA، حيث يقود تطوير منصة عقارات فاخرة. حاصل على شهادات من برنامج ALX Africa للهندسة البرمجية والتطوير المتقدم.`,

  skillsBulletEN: [
    '✓ Full-Stack Development: React, Next.js 15, Node.js, Python',
    '✓ Backend: FastAPI, Django, Flask, Express.js, REST APIs, GraphQL',
    '✓ Databases: PostgreSQL, MongoDB, MySQL, Redis',
    '✓ DevOps & Cloud: Docker, Kubernetes, GitHub Actions, CI/CD',
    '✓ Performance: Web optimization, Core Web Vitals, SEO',
    '✓ Current Role: Frontend Lead & Backend Consultant at HOMA',
  ],

  skillsBulletAR: [
    '✓ التطوير المتكامل: React و Next.js 15 و Node.js و Python',
    '✓ الخلفية: FastAPI و Django و Flask و Express.js و REST APIs و GraphQL',
    '✓ قواعس البيانات: PostgreSQL و MongoDB و MySQL و Redis',
    '✓ DevOps والسحابة: Docker و Kubernetes و GitHub Actions و CI/CD',
    '✓ الأداء: تحسين الويب و Core Web Vitals و SEO',
    '✓ الدور الحالي: قائد الواجهة الأمامية ومستشار الخلفية في HOMA',
  ],
};

/**
 * STRUCTURED ROUTES FOR SITEMAP
 * All routes that should appear in sitemap
 */
export const routes = [
  {
    path: '',
    label: 'Home',
    priority: 1.0,
    changeFreq: 'weekly' as const,
  },
  {
    path: '/about',
    label: 'About',
    priority: 0.9,
    changeFreq: 'monthly' as const,
  },
  {
    path: '/services',
    label: 'Services',
    priority: 0.85,
    changeFreq: 'monthly' as const,
  },
  {
    path: '/projects',
    label: 'Projects',
    priority: 0.9,
    changeFreq: 'monthly' as const,
  },
  {
    path: '/contact',
    label: 'Contact',
    priority: 0.8,
    changeFreq: 'monthly' as const,
  },
] as const;

/**
 * OPEN GRAPH IMAGE DIMENSIONS
 * Recommended: 1200x630 for OG:image
 */
export const ogImageDimensions = {
  width: 1200,
  height: 630,
} as const;

/**
 * TWITTER CARD SETTINGS
 */
export const twitterCard = {
  card: 'summary_large_image',
  site: '@AbdulrahmanAdeb',
  creator: '@AbdulrahmanAdeb',
} as const;
