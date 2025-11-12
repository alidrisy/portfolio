import {
  Person,
  WithContext,
  WebSite,
  WebPage,
  Organization,
  BreadcrumbList,
  FAQPage,
  SoftwareSourceCode,
  Article,
  CollectionPage,
  ContactPoint,
  PostalAddress,
  Thing,
  ImageObject,
  AboutPage,
  ContactPage,
  AggregateRating,
  Language,
  EducationalOccupationalCredential,
  EntryPoint,
  ListItem,
  Question,
  Answer,
} from 'schema-dts';

/**
 * PERSON - Enhanced Structured Data
 * Person schema with comprehensive E-E-A-T signals
 */
export const personStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://www.alidrisy.com#person',
  name: 'Abdulrahman Alidrisy',
  alternateName: ['Abdo Alidrisy', 'عبدالرحمن الإدريسي'],
  jobTitle: [
    'Full Stack Software Engineer',
    'Frontend Developer',
    'Backend Developer',
    'DevOps Engineer',
  ],
  description:
    'Full Stack Software Engineer with 2+ years of professional experience building scalable web applications using React, Next.js, Python, and Node.js. Based in Riyadh, Saudi Arabia.',
  url: 'https://www.alidrisy.com',
  image: 'https://www.alidrisy.com/avatar.png',
  email: 'a.alidrisy6@gmail.com',
  telephone: '+966571010226',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Riyadh',
    addressLocality: 'Riyadh',
    addressRegion: 'AR',
    addressCountry: 'SA',
    postalCode: '',
  },
  homeLocation: {
    '@type': 'PostalAddress',
    addressLocality: 'Riyadh',
    addressCountry: 'SA',
  },
  sameAs: [
    'https://www.linkedin.com/in/alidrisy',
    'https://github.com/alidrisy',
    'https://twitter.com/AbdulrahmanAdeb',
    'https://www.alidrisy.com',
  ],
  knowsLanguage: [
    {
      '@type': 'Language',
      name: 'English',
    },
    {
      '@type': 'Language',
      name: 'Arabic',
    },
  ],
  knowsAbout: [
    'Full Stack Web Development',
    'Frontend Development',
    'React.js',
    'Next.js 15',
    'TypeScript',
    'Python',
    'FastAPI',
    'Flask',
    'Django',
    'Node.js',
    'Express.js',
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'Docker',
    'Kubernetes',
    'DevOps',
    'CI/CD',
    'GitHub Actions',
    'Nginx',
    'REST APIs',
    'GraphQL',
    'System Design',
    'Web Performance Optimization',
    'UI/UX Design',
    'Responsive Web Design',
    'Web Accessibility',
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'ALX Software Engineering Program',
      educationalLevel: 'Professional Certification',
      recognizedBy: {
        '@type': 'Organization',
        name: 'ALX Africa',
        url: 'https://www.alxafrica.com',
      },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'ALX ProDev Back-End Programme',
      educationalLevel: 'Professional Advanced Training',
      recognizedBy: {
        '@type': 'Organization',
        name: 'ALX Africa',
        url: 'https://www.alxafrica.com',
      },
    },
  ],
  workExample: [
    {
      '@type': 'SoftwareSourceCode',
      name: 'HomaApp - Luxury Property Platform',
      description:
        'Production-ready luxury property platform built with Next.js, React, and TypeScript. Features real-time messaging, push notifications, and comprehensive responsive design.',
      url: 'https://homaapp.com',
      programmingLanguage: ['TypeScript', 'Python'],
      codeRepository: 'https://github.com/alidrisy/homaapp',
    },
    {
      '@type': 'SoftwareSourceCode',
      name: 'Ijar - P2P Car Rental Platform',
      description:
        'Full-stack MERN car rental application processing 1000+ monthly transactions. Built with Express.js, React, MongoDB, and PayPal integration.',
      url: 'https://ijar.tech',
      programmingLanguage: ['JavaScript', 'Node.js'],
      codeRepository: 'https://github.com/alidrisy/ijar',
    },
  ],
  alumniOf: [
    {
      '@type': 'Organization',
      name: 'ALX Africa',
      url: 'https://www.alxafrica.com',
      sameAs: 'https://www.alxafrica.com',
    },
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'HOMA',
    url: 'https://homaapp.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Riyadh',
      addressCountry: 'SA',
    },
  },
};

/**
 * ORGANIZATION - Enhanced Structured Data
 * Org schema for Alidrisy Software brand
 */
export const organizationStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.alidrisy.com#organization',
  name: 'Alidrisy Software',
  alternateName: 'Abdulrahman Alidrisy Software',
  url: 'https://www.alidrisy.com',
  logo: 'https://www.alidrisy.com/logo.png',
  description:
    'Professional full-stack web development services specializing in React, Next.js, Python, Node.js, and cloud infrastructure. Delivering scalable, secure, and high-performance applications for businesses in the GCC region.',
  founder: {
    '@type': 'Person',
    name: 'Abdulrahman Alidrisy',
    url: 'https://www.alidrisy.com',
  },
  foundingDate: '2024',
  foundingLocation: {
    '@type': 'PostalAddress',
    addressLocality: 'Riyadh',
    addressCountry: 'SA',
  },
  areaServed: ['SA', 'AE', 'KW', 'QA', 'BH', 'OM', 'US', 'EU'],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+966571010226',
      contactType: 'Customer Service',
      email: 'a.alidrisy6@gmail.com',
      availableLanguage: ['English', 'Arabic'],
      areaServed: ['Riyadh', 'Saudi Arabia', 'GCC'],
    },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Riyadh',
    addressLocality: 'Riyadh',
    addressRegion: 'AR',
    addressCountry: 'SA',
  },
  sameAs: [
    'https://www.linkedin.com/in/alidrisy',
    'https://github.com/alidrisy',
    'https://twitter.com/AbdulrahmanAdeb',
  ],
  knowsAbout: [
    'Full Stack Web Development',
    'Software Engineering',
    'React.js Development',
    'Next.js 15',
    'Node.js Development',
    'Python Development',
    'DevOps Services',
    'Cloud Infrastructure',
    'Web Performance',
  ],
};

/**
 * WEBSITE - Enhanced Structured Data
 * WebSite schema with SearchAction and localization
 */
export const websiteStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.alidrisy.com#website',
  name: 'Abdulrahman Alidrisy - Full Stack Developer Portfolio',
  alternateName: [
    'Alidrisy Software',
    'Abdulrahman Portfolio',
    'ملف عبدالرحمن الإدريسي',
  ],
  url: 'https://www.alidrisy.com',
  description:
    'Professional portfolio of Abdulrahman Alidrisy, a Full Stack Software Engineer specializing in React, Next.js, Python, and modern web technologies. Showcasing projects, services, and expertise in full-stack development and DevOps.',
  author: {
    '@type': 'Person',
    '@id': 'https://www.alidrisy.com#person',
  },
  creator: {
    '@type': 'Person',
    name: 'Abdulrahman Alidrisy',
  },
  inLanguage: ['en', 'ar'],
  isAccessibleForFree: true,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate:
        'https://www.alidrisy.com/en?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
  publisher: {
    '@type': 'Person',
    name: 'Abdulrahman Alidrisy',
  },
};

/**
 * BREADCRUMB LIST Factory
 * Used for route-specific breadcrumbs
 */
export function getBreadcrumbList(
  locale: string,
  path: string
) {
  const pathSegments = path.split('/').filter(Boolean);
  const isArabic = locale === 'ar';
  
  const labels: Record<string, Record<string, string>> = {
    en: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      contact: 'Contact',
    },
    ar: {
      home: 'الرئيسية',
      about: 'عني',
      services: 'الخدمات',
      projects: 'المشاريع',
      contact: 'تواصل',
    },
  };

  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: labels[locale].home,
      item: `https://www.alidrisy.com/${locale}`,
    },
  ];

  let url = `https://www.alidrisy.com/${locale}`;
  pathSegments.forEach((segment, index) => {
    url += `/${segment}`;
    items.push({
      '@type': 'ListItem',
      position: index + 2,
      name: labels[locale][segment as keyof typeof labels['en']] || segment,
      item: url,
    });
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };
}

/**
 * WEBPAGE Factory
 * Generic WebPage with route-aware type mapping
 */
export function getPageStructuredData(
  locale: string,
  pageName: string,
  pageTitle: string,
  pageDescription: string,
  pageType: 'AboutPage' | 'ContactPage' | 'CollectionPage' | 'WebPage' = 'WebPage'
) {
  const slug = pageName.toLowerCase().replace(/\s+/g, '-');
  const url =
    slug === 'home'
      ? `https://www.alidrisy.com/${locale}`
      : `https://www.alidrisy.com/${locale}/${slug}`;

  const baseWebPage = {
    '@context': 'https://schema.org',
    '@type': pageType,
    '@id': `${url}#page`,
    name: pageTitle,
    headline: pageTitle,
    description: pageDescription,
    url,
    inLanguage: locale,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString(),
    image: 'https://www.alidrisy.com/og-image.png',
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://www.alidrisy.com#website',
      name: 'Abdulrahman Alidrisy Portfolio',
      url: 'https://www.alidrisy.com',
    },
    author: {
      '@type': 'Person',
      '@id': 'https://www.alidrisy.com#person',
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://www.alidrisy.com#organization',
    },
  };

  return baseWebPage;
}

/**
 * ABOUT PAGE - Enhanced
 */
export function getAboutPageData(locale: string) {
  const isArabic = locale === 'ar';
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `https://www.alidrisy.com/${locale}/about#page`,
    name: isArabic ? 'عني' : 'About',
    headline: isArabic
      ? 'مهندس برمجيات متكامل'
      : 'Full Stack Software Engineer',
    description: isArabic
      ? 'مهندس برمجيات متكامل متعدد المهارات بخبرة تزيد عن عامين في تطوير تطبيقات ويب شاملة باستخدام التقنيات الحديثة.'
      : 'Versatile Full Stack Software Engineer with 2+ years of experience delivering end-to-end web applications using modern technologies.',
    url: `https://www.alidrisy.com/${locale}/about`,
    inLanguage: locale,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString(),
    author: {
      '@type': 'Person',
      '@id': 'https://www.alidrisy.com#person',
    },
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://www.alidrisy.com#website',
    },
  };
}

/**
 * CONTACT PAGE - Enhanced
 */
export function getContactPageData(locale: string) {
  const isArabic = locale === 'ar';
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `https://www.alidrisy.com/${locale}/contact#page`,
    name: isArabic ? 'تواصل' : 'Contact',
    headline: isArabic ? 'تواصل معي' : 'Get in Touch',
    description: isArabic
      ? 'تواصل مع عبدالرحمن الإدريسي لفرص التعاون أو استفسارات المشاريع'
      : 'Get in touch with Abdulrahman Alidrisy for collaboration opportunities',
    url: `https://www.alidrisy.com/${locale}/contact`,
    inLanguage: locale,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString(),
    author: {
      '@type': 'Person',
      '@id': 'https://www.alidrisy.com#person',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+966571010226',
      contactType: 'Customer Service',
      email: 'a.alidrisy6@gmail.com',
      availableLanguage: ['English', 'Arabic'],
    },
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://www.alidrisy.com#website',
    },
  };
}

/**
 * PROJECTS/PORTFOLIO PAGE - Enhanced
 */
export function getProjectsPageData(locale: string) {
  const isArabic = locale === 'ar';
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `https://www.alidrisy.com/${locale}/projects#page`,
    name: isArabic ? 'المشاريع' : 'Projects',
    headline: isArabic ? 'أحدث أعمالي' : 'My Latest Work',
    description: isArabic
      ? 'عرض المشاريع التي بناها عبدالرحمن الإدريسي، تطبيقات متكاملة وحلول مبتكرة'
      : 'View the portfolio of projects built by Abdulrahman Alidrisy, showcasing full-stack applications',
    url: `https://www.alidrisy.com/${locale}/projects`,
    inLanguage: locale,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString(),
    author: {
      '@type': 'Person',
      '@id': 'https://www.alidrisy.com#person',
    },
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://www.alidrisy.com#website',
    },
  };
}

/**
 * SOFTWARE SOURCE CODE - Project Template
 * Use this for each major project
 */
export function getProjectSourceCode(
  locale: string,
  projectName: string,
  projectDescription: string,
  projectUrl: string,
  githubUrl: string,
  programmingLanguages: string[],
  stack: string[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: projectName,
    description: projectDescription,
    url: projectUrl,
    codeRepository: githubUrl,
    programmingLanguage: programmingLanguages,
    author: {
      '@type': 'Person',
      '@id': 'https://www.alidrisy.com#person',
    },
    dateCreated: '2024-01-01',
    dateModified: new Date().toISOString(),
    inLanguage: locale,
  };
}

/**
 * FAQ PAGE - Enhanced
 * Structure for FAQ section targeting AI Overviews
 */
export function getFAQPageData(
  locale: string,
  faqs: Array<{ question: string; answer: string }>
) {
  const isArabic = locale === 'ar';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `https://www.alidrisy.com/${locale}/faq#page`,
    name: isArabic ? 'الأسئلة الشائعة' : 'Frequently Asked Questions',
    url: `https://www.alidrisy.com/${locale}/faq`,
    inLanguage: locale,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question' as const,
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer' as const,
        text: faq.answer,
      },
    })),
  };
}

/**
 * ARTICLE - Blog Post Template
 * Use this for individual blog posts
 */
export function getArticleData(
  locale: string,
  title: string,
  description: string,
  slug: string,
  publishDate: string,
  modifyDate?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `https://www.alidrisy.com/${locale}/blog/${slug}#article`,
    headline: title,
    description,
    url: `https://www.alidrisy.com/${locale}/blog/${slug}`,
    inLanguage: locale,
    datePublished: publishDate,
    dateModified: modifyDate || publishDate,
    author: {
      '@type': 'Person',
      '@id': 'https://www.alidrisy.com#person',
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://www.alidrisy.com#organization',
    },
    image: 'https://www.alidrisy.com/og-image.png',
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://www.alidrisy.com#website',
    },
  };
}

/**
 * PRE-BUILT FAQ DATA FOR AI OVERVIEWS
 * English FAQs targeting developer hiring intents
 */
export const faqDataEN = [
  {
    question: 'What is your tech stack expertise?',
    answer:
      'I specialize in full-stack development with React, Next.js 15, TypeScript on the frontend, and Python (FastAPI, Django) or Node.js on the backend. My expertise includes PostgreSQL, MongoDB, Docker, Kubernetes, and CI/CD pipelines with GitHub Actions.',
  },
  {
    question: 'Do you build with Next.js 15?',
    answer:
      'Yes, I have extensive experience with Next.js including the latest version (15). I build production-ready applications with App Router, Server Components, and optimizations for performance and SEO.',
  },
  {
    question: 'Can you work with Saudi payment systems like HyperPay and Mada?',
    answer:
      'Yes, I have experience integrating payment gateways and can work with Saudi payment systems including HyperPay, Mada, and similar regional payment solutions. I also have experience with international payment providers like PayPal and Stripe.',
  },
  {
    question: 'Do you have DevOps and cloud deployment experience?',
    answer:
      'Absolutely. I have hands-on experience with Docker containerization, Kubernetes orchestration, GitHub Actions for CI/CD, and cloud infrastructure setup. I can deploy applications on AWS, and have worked with various cloud platforms.',
  },
  {
    question: 'How long does a typical full-stack project take?',
    answer:
      'Timeline depends on scope, but a typical MVP can take 2-4 weeks. Complex platforms with real-time features, database optimization, and DevOps setup might take 1-3 months. I recommend discussing project requirements for accurate estimation.',
  },
  {
    question: 'Do you work on remote projects?',
    answer:
      'Yes, I work with clients globally. Based in Riyadh, Saudi Arabia, I am available for remote projects and collaborations with teams worldwide. I am comfortable with various time zones and communication tools.',
  },
  {
    question: 'What databases do you work with?',
    answer:
      'I have expertise with both SQL databases (PostgreSQL, MySQL) and NoSQL solutions (MongoDB, Redis). I design efficient schemas, optimize queries, and implement proper indexing strategies for performance.',
  },
  {
    question: 'Can you optimize web performance and Core Web Vitals?',
    answer:
      'Yes, performance optimization is a core part of my work. I focus on reducing LCP, CLS, and INP through code splitting, lazy loading, image optimization, caching strategies, and production audits using Lighthouse and similar tools.',
  },
  {
    question: 'Do you build mobile-responsive applications?',
    answer:
      'Absolutely. All applications I build are fully responsive using modern techniques like mobile-first design, Tailwind CSS, and React Native when needed. I ensure excellent user experience across all device sizes.',
  },
  {
    question: 'What is your experience with real-time features?',
    answer:
      'I have built real-time applications using WebSockets, Pusher, Firebase, and Socket.io. I can implement live notifications, instant messaging, real-time data updates, and collaborative features in web applications.',
  },
];

/**
 * PRE-BUILT FAQ DATA - ARABIC
 * Arabic FAQs targeting developer hiring intents (Saudi Arabia focused)
 */
export const faqDataAR = [
  {
    question: 'ما هي تخصصاتك التقنية الرئيسية؟',
    answer:
      'أتخصص في تطوير متكامل باستخدام React و Next.js 15 و TypeScript في الواجهة الأمامية، و Python (FastAPI، Django) أو Node.js في الخلفية. خبرتي تشمل PostgreSQL و MongoDB و Docker و Kubernetes و خطوط CI/CD مع GitHub Actions.',
  },
  {
    question: 'هل تعمل مع Next.js 15؟',
    answer:
      'نعم، لدي خبرة واسعة مع Next.js بما في ذلك أحدث الإصدارات. أبني تطبيقات جاهزة للإنتاج باستخدام App Router و Server Components مع تحسينات الأداء وتحسين محركات البحث.',
  },
  {
    question: 'هل يمكنك التعامل مع أنظمة الدفع السعودية مثل HyperPay و Mada؟',
    answer:
      'نعم، لدي خبرة في دمج بوابات الدفع وأنظمة الدفع السعودية بما في ذلك HyperPay و Mada والحلول الإقليمية المشابهة. لدي أيضًا خبرة مع مزودي الدفع الدوليين مثل PayPal و Stripe.',
  },
  {
    question: 'هل لديك خبرة في DevOps والنشر السحابي؟',
    answer:
      'نعم، لدي خبرة عملية مع Docker و Kubernetes و GitHub Actions لـ CI/CD وإعداد البنية التحتية السحابية. يمكنني نشر التطبيقات على منصات سحابية متعددة.',
  },
  {
    question: 'كم من الوقت يستغرق مشروع متكامل نموذجي؟',
    answer:
      'يعتمد على حجم المشروع، لكن MVP نموذجي قد يستغرق أسبوعين إلى أربعة أسابيع. المشاريع المعقدة مع ميزات الوقت الفعلي قد تستغرق شهرًا إلى ثلاثة أشهر.',
  },
  {
    question: 'هل تعمل على مشاريع بنمط العمل البعيد؟',
    answer:
      'نعم، أعمل مع عملاء على مستوى عالمي. أقع في الرياض بالمملكة العربية السعودية وأتوفر للمشاريع البعيدة والتعاون مع فرق حول العالم.',
  },
  {
    question: 'ما هي قواعد البيانات التي تعمل معها؟',
    answer:
      'لدي خبرة مع قواعد البيانات العلاقية (PostgreSQL، MySQL) وحلول NoSQL (MongoDB، Redis). أصمم مخططات فعالة وأحسن الاستعلامات وأنفذ استراتيجيات فهرسة مناسبة.',
  },
  {
    question: 'هل يمكنك تحسين أداء الويب و Core Web Vitals؟',
    answer:
      'نعم، تحسين الأداء جزء أساسي من عملي. أركز على تقليل LCP و CLS و INP من خلال تقسيم الكود والتحميل الكسول وتحسين الصور واستراتيجيات التخزين المؤقت.',
  },
  {
    question: 'هل تبني تطبيقات متجاوبة للهاتف المحمول؟',
    answer:
      'بالتأكيد. جميع التطبيقات التي أبنيها متجاوبة بالكامل باستخدام تقنيات حديثة مثل التصميم الموجه للهاتف أولاً و Tailwind CSS. أضمن تجربة مستخدم ممتازة على جميع أحجام الأجهزة.',
  },
  {
    question: 'ما هي خبرتك مع ميزات الوقت الفعلي؟',
    answer:
      'بنيت تطبيقات بميزات الوقت الفعلي باستخدام WebSockets و Pusher و Firebase و Socket.io. يمكنني تنفيذ إشعارات مباشرة والمراسلة الفورية وتحديثات البيانات الفورية.',
  },
];
