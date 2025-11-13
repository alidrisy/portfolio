import { setRequestLocale, getMessages } from 'next-intl/server';
import { Metadata } from 'next';
import { ServicesFull } from '@/components/pages/ServicesFull';
import { pageMetadata } from '@/lib/seo-config';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = 'https://www.alidrisy.com';
  const seoMeta = pageMetadata.services[locale as keyof typeof pageMetadata.services];

  return {
    title: seoMeta.title,
    description: seoMeta.description,
    keywords: [
      'Full Stack Development Services',
      'Frontend Development React Next.js',
      'Backend Development Python Node.js',
      'API Development RESTful GraphQL',
      'Database Architecture PostgreSQL MongoDB',
      'DevOps Services Docker Kubernetes',
      'CI/CD Pipeline Setup',
      'Web Development Services Saudi Arabia',
      'Software Development Riyadh',
      'خدمات تطوير ويب',
      'تطوير تطبيقات',
      'خدمات برمجة',
    ],
    alternates: {
      canonical: `${baseUrl}/${locale}/services`,
      languages: {
        ar: `${baseUrl}/ar/services`,
        en: `${baseUrl}/en/services`,
        'x-default': `${baseUrl}/services`,
      },
    },
    openGraph: {
      title: seoMeta.ogTitle,
      description: seoMeta.ogDescription,
      url: `${baseUrl}/${locale}/services`,
      siteName: 'Abdulrahman Alidrisy Portfolio',
      images: [
        {
          url: `${baseUrl}/og-image.jpeg`,
          width: 1200,
          height: 630,
          alt: seoMeta.ogTitle,
          type: 'image/png',
        },
      ],
      locale: locale === 'ar' ? 'ar_SA' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seoMeta.ogTitle,
      description: seoMeta.ogDescription,
      images: [`${baseUrl}/og-image.jpeg`],
      creator: '@AbdulrahmanAdeb',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
      },
    },
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ServicesFull />;
}
