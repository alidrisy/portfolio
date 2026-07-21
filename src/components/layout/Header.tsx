'use client';

import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Languages } from 'lucide-react';
import { fadeIn } from '@/lib/motion';
import Link from 'next/link';
import Logo from './Logo';

export function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();

  const toggleLocale = () => {
    const newLocale = locale === 'ar' ? 'en' : 'ar';
    const currentPath = pathname.replace(`/${locale}`, '');
    return `/${newLocale}${currentPath}`;
  };

  return (
    <motion.header
      variants={fadeIn('down', 0.2)}
      initial="hidden"
      animate="show"
      className="py-4 sm:py-8 sticky top-0 z-50 "
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href={`/${locale}`} className='w-32 -mr-10'>
           <Logo className="w-32 h-8 sm:w-52 sm:h-16" />
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href={toggleLocale()}
              className="flex items-center gap-2 text-white hover:text-accent transition-colors"
              aria-label={locale === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
            >
              <Languages className="w-5 h-5" />
              <span className="text-sm font-medium">{locale === 'ar' ? 'EN' : 'AR'}</span>
            </Link>

            <Link
              href={`/${locale}/contact`}
              className="btn btn-sm hidden lg:flex items-center justify-center"
            >
              {t('hireme')}
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
