import { setRequestLocale, getMessages } from 'next-intl/server';
import { Metadata } from 'next';
import { AboutFull } from '@/components/pages/AboutFull';
import { pageMetadata, keywordMap } from '@/lib/seo-config';
import { StructuredData } from '@/components/seo/StructuredData';
import { getAboutPageData, getBreadcrumbList } from '@/lib/structured-data-enhanced';

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
    keywords: [...keywordMap.about.en, ...keywordMap.about.ar],
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
          url: `${baseUrl}/og-image.jpeg`,
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

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <StructuredData data={getAboutPageData(locale)} />
      <StructuredData data={getBreadcrumbList(locale, '/about')} />
      <AboutFull />
    </>
  );
}
