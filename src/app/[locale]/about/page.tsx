import { setRequestLocale, getMessages } from 'next-intl/server';
import { Metadata } from 'next';
import { AboutFull } from '@/components/pages/AboutFull';
import { pageMetadata } from '@/lib/seo-config';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = 'https://www.alidrisy.com';
  const seoMeta = pageMetadata.about[locale as keyof typeof pageMetadata.about];

  return {
    title: seoMeta.title,
    description: seoMeta.description,
    keywords: [
      'About Abdulrahman Alidrisy',
      'Software Engineer Background',
      'Full Stack Developer Experience',
      'ALX Software Engineering',
      'HOMA Developer',
      'Bin Sammar Software Engineer',
      'React Developer Experience',
      'Python Developer Experience',
      'عن عبدالرحمن الإدريسي',
      'خبرة مهندس برمجيات',
    ],
    alternates: {
      canonical: `${baseUrl}/${locale}/about`,
      languages: {
        ar: `${baseUrl}/ar/about`,
        en: `${baseUrl}/en/about`,
        'x-default': `${baseUrl}/about`,
      },
    },
    openGraph: {
      title: seoMeta.ogTitle,
      description: seoMeta.ogDescription,
      url: `${baseUrl}/${locale}/about`,
      siteName: 'Abdulrahman Alidrisy Portfolio',
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: seoMeta.ogTitle,
          type: 'image/png',
        },
      ],
      locale: locale === 'ar' ? 'ar_SA' : 'en_US',
      type: 'profile',
    },
    twitter: {
      card: 'summary_large_image',
      title: seoMeta.ogTitle,
      description: seoMeta.ogDescription,
      images: [`${baseUrl}/og-image.png`],
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

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <AboutFull />;
}
