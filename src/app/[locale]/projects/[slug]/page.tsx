import { setRequestLocale, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { locales } from '@/i18n/routing';
import { ProjectDetail, type ProjectData } from '@/components/pages/ProjectDetail';
import { StructuredData } from '@/components/seo/StructuredData';
import { getBreadcrumbList } from '@/lib/structured-data-enhanced';

const PROJECT_SLUGS = [
  'diraya-law-firm',
  'homa',
  'caro-rent',
  'elite-experts',
  'ijar',
  'awamer-website',
  'audiotube',
];

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    PROJECT_SLUGS.map((slug) => ({ locale, slug }))
  );
}

async function getProject(locale: string, slug: string): Promise<ProjectData | undefined> {
  const t = await getTranslations({ locale, namespace: 'projects' });
  const list = t.raw('list') as ProjectData[];
  return list.find((p) => p.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const baseUrl = 'https://www.alidrisy.com';
  const project = await getProject(locale, slug);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  const title = `${project.title} - Abdulrahman Alidrisy`;

  return {
    title,
    description: project.description,
    keywords: [project.title, ...project.stack.split(', '), 'Case Study', 'Portfolio'],
    alternates: {
      canonical: `${baseUrl}/${locale}/projects/${slug}`,
      languages: {
        ar: `${baseUrl}/ar/projects/${slug}`,
        en: `${baseUrl}/en/projects/${slug}`,
        'x-default': `${baseUrl}/projects/${slug}`,
      },
    },
    openGraph: {
      title,
      description: project.description,
      url: `${baseUrl}/${locale}/projects/${slug}`,
      siteName: 'Abdulrahman Alidrisy Portfolio',
      images: [
        {
          url: `${baseUrl}${project.image}`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      locale: locale === 'ar' ? 'ar_SA' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: project.description,
      images: [`${baseUrl}${project.image}`],
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

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const project = await getProject(locale, slug);

  if (!project) {
    notFound();
  }

  const baseUrl = 'https://www.alidrisy.com';
  const pageUrl = `${baseUrl}/${locale}/projects/${slug}`;

  const projectStructuredData = {
    '@context': 'https://schema.org',
    '@type': ['SoftwareApplication', 'CreativeWork'],
    '@id': `${pageUrl}#project`,
    name: project.title,
    headline: project.title,
    description: project.description,
    url: project.live !== '#' ? project.live : pageUrl,
    mainEntityOfPage: pageUrl,
    image: `${baseUrl}${project.image}`,
    applicationCategory: 'WebApplication',
    operatingSystem: 'Any',
    inLanguage: locale,
    ...(project.github !== '#' ? { codeRepository: project.github } : {}),
    keywords: project.stack,
    creator: {
      '@type': 'Person',
      '@id': `${baseUrl}#person`,
    },
    author: {
      '@type': 'Person',
      '@id': `${baseUrl}#person`,
    },
    isPartOf: {
      '@type': 'CollectionPage',
      '@id': `${baseUrl}/${locale}/projects#page`,
    },
  };

  return (
    <>
      <StructuredData data={projectStructuredData} />
      <StructuredData data={getBreadcrumbList(locale, `/projects/${slug}`)} />
      <ProjectDetail project={project} />
    </>
  );
}
