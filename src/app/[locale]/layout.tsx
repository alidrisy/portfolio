import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { locales } from '@/i18n/routing';
import { Orbitron, Rajdhani, Aldrich, Noto_Kufi_Arabic } from 'next/font/google';
import { getDirection } from '@/lib/utils';
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
    verification: {
      google: 'YOUR_GOOGLE_VERIFICATION_CODE',
      // yandex: 'YOUR_YANDEX_VERIFICATION_CODE',
      // bing: 'YOUR_BING_VERIFICATION_CODE',
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />

        {/* Canonical URL */}
        <link rel="canonical" href={`https://www.alidrisy.com/${locale}`} />

        {/* Hreflang Tags for Internationalization */}
        <link rel="alternate" hrefLang="en" href="https://www.alidrisy.com/en" />
        <link rel="alternate" hrefLang="ar" href="https://www.alidrisy.com/ar" />
        <link rel="alternate" hrefLang="x-default" href="https://www.alidrisy.com" />
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

