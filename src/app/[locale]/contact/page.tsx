import { setRequestLocale, getMessages } from 'next-intl/server';
import { Metadata } from 'next';
import { ContactFull } from '@/components/pages/ContactFull';
import { pageMetadata } from '@/lib/seo-config';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = 'https://www.alidrisy.com';
  const seoMeta = pageMetadata.contact[locale as keyof typeof pageMetadata.contact];

  return {
    title: seoMeta.title,
    description: seoMeta.description,
    keywords: [
      'Contact Abdulrahman Alidrisy',
      'Hire Full Stack Developer',
      'Software Development Inquiry',
      'Web Development Contact',
      'Freelance Developer Saudi Arabia',
      'Riyadh Software Engineer Contact',
      'تواصل مع عبدالرحمن',
      'توظيف مطور',
    ],
    alternates: {
      canonical: `${baseUrl}/${locale}/contact`,
      languages: {
        ar: `${baseUrl}/ar/contact`,
        en: `${baseUrl}/en/contact`,
        'x-default': `${baseUrl}/contact`,
      },
    },
    openGraph: {
      title: seoMeta.ogTitle,
      description: seoMeta.ogDescription,
      url: `${baseUrl}/${locale}/contact`,
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

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ContactFull />;
}
