import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { locales } from '@/i18n/routing';
import { Orbitron, Rajdhani, Aldrich, Noto_Kufi_Arabic } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Nav } from '@/components/layout/Nav';
import { RouteTransition } from '@/components/motion/RouteTransition';
import { StructuredData } from '@/components/seo/StructuredData';
import {
  personStructuredData,
  websiteStructuredData,
  organizationStructuredData,
} from '@/lib/structured-data-enhanced';
import { pageMetadata } from '@/lib/seo-config';
import '../globals.css';

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const rajdhani = Rajdhani({
  subsets: ['latin'],
  variable: '--font-rajdhani',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const aldrich = Aldrich({
  subsets: ['latin'],
  variable: '--font-aldrich',
  display: 'swap',
  weight: ['400'],
});

const kufi = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  variable: '--font-arabic',
  display: 'swap',
  weight: ['400', '700'],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = 'https://www.alidrisy.com';
  const seoMeta = pageMetadata.home[locale as keyof typeof pageMetadata.home];

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: seoMeta.title,
      template: '%s | Abdulrahman Alidrisy',
    },
    description: seoMeta.description,
    keywords: [
      'Abdulrahman Alidrisy',
      'Full Stack Developer',
      'Software Engineer',
      'React Developer',
      'Next.js Developer',
      'Python Developer',
      'Node.js Developer',
      'Frontend Developer',
      'Backend Developer',
      'DevOps Engineer',
      'Web Developer Saudi Arabia',
      'Riyadh Software Engineer',
      'TypeScript Developer',
      'FastAPI Developer',
      'Django Developer',
      'MongoDB Developer',
      'PostgreSQL Developer',
      'Docker',
      'Kubernetes',
      'مطور ويب',
      'مهندس برمجيات',
      'مطور فل ستاك',
    ],
    authors: [
      { name: 'Abdulrahman Alidrisy', url: baseUrl },
    ],
    creator: 'Abdulrahman Alidrisy',
    publisher: 'Abdulrahman Alidrisy',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'en': `${baseUrl}/en`,
        'ar': `${baseUrl}/ar`,
        'x-default': baseUrl,
      },
    },
    openGraph: {
      title: seoMeta.ogTitle,
      description: seoMeta.ogDescription,
      url: `${baseUrl}/${locale}`,
      siteName: 'Abdulrahman Alidrisy Portfolio',
      images: [
        {
          url: `${baseUrl}/og-image.jpeg`,
          width: 1200,
          height: 630,
          alt: 'Abdulrahman Alidrisy - Full Stack Software Engineer',
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
      site: '@AbdulrahmanAdeb',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },

    },
    appleWebApp: {
      capable: true,
      statusBarStyle: 'black-translucent',
      title: 'Abdulrahman Alidrisy',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      className={`${orbitron.variable} ${rajdhani.variable} ${aldrich.variable} ${kufi.variable} antialiased overflow-x-hidden`}
      suppressHydrationWarning
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

        {/* Preconnect to external services */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.alidrisy.com" />

        {/* Favicon & App Icons */}
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        {/* NOTE: /favicon.svg (from the RealFaviconGenerator export) is a 2.8MB
            base64-encoded PNG wrapped in an <svg> tag, not real vector art —
            linking it would ship a ~2.8MB request on every page load, which
            fights the Core Web Vitals work elsewhere in this pass. Using the
            existing small (1KB) real vector icon.svg instead for the same slot. */}
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        {/* The PWA manifest itself is served by src/app/manifest.ts (Next.js
            auto-injects its own <link rel="manifest"> for that route) — it's
            been updated to use these same real PNG icons, so we don't also link
            /site.webmanifest here, which would create two competing manifests. */}

        {/* Canonical URL and hreflang tags are route-specific and are emitted
            per page via each page's generateMetadata (alternates.canonical /
            alternates.languages) — do not hardcode them here, or every page
            would emit two conflicting canonical/hreflang tags pointing at the
            locale root instead of the actual current route. */}
      </head>
      <body
        className={`${orbitron.variable} ${rajdhani.variable} ${aldrich.variable} ${kufi.variable} antialiased overflow-x-hidden`}
        style={locale === 'ar' ? { fontFamily: 'var(--font-arabic)' } : undefined}
      >
        {/* Structured Data */}
        <StructuredData data={personStructuredData} />
        <StructuredData data={websiteStructuredData} />
        <StructuredData data={organizationStructuredData} />

        <NextIntlClientProvider messages={messages}>
          <div className="bg-site bg-no-repeat bg-cover bg-fixed overflow-hidden pb-20">
            <Header />
            <Nav />
            <RouteTransition>
              <main className="space-y-20" role="main">{children}</main>
            </RouteTransition>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

