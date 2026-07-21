import { setRequestLocale, getMessages } from 'next-intl/server';
import { Metadata } from 'next';
import { ProjectsFull } from '@/components/pages/ProjectsFull';
import { pageMetadata, keywordMap } from '@/lib/seo-config';
import { StructuredData } from '@/components/seo/StructuredData';
import { getProjectsPageData, getBreadcrumbList } from '@/lib/structured-data-enhanced';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = 'https://www.alidrisy.com';
  const seoMeta = pageMetadata.projects[locale as keyof typeof pageMetadata.projects];

  return {
    title: seoMeta.title,
    description: seoMeta.description,
    keywords: [...keywordMap.projects.en, ...keywordMap.projects.ar],
    alternates: {
      canonical: `${baseUrl}/${locale}/projects`,
      languages: {
        ar: `${baseUrl}/ar/projects`,
        en: `${baseUrl}/en/projects`,
        'x-default': `${baseUrl}/projects`,
      },
    },
    openGraph: {
      title: seoMeta.ogTitle,
      description: seoMeta.ogDescription,
      url: `${baseUrl}/${locale}/projects`,
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

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <StructuredData data={getProjectsPageData(locale)} />
      <StructuredData data={getBreadcrumbList(locale, '/projects')} />
      <ProjectsFull />
    </>
  );
}
