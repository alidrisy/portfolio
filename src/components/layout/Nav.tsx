'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { HomeIcon, User, Briefcase, FolderOpen, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { InkUnderline } from '@/components/motion/InkUnderline';


export function Nav() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  
  const navItems = [
    { name: 'home', href: `/${locale}`, icon: HomeIcon },
    { name: 'about', href: `/${locale}/about`, icon: User },
    { name: 'services', href: `/${locale}/services`, icon: Briefcase },
    { name: 'projects', href: `/${locale}/projects`, icon: FolderOpen },
    { name: 'contact', href: `/${locale}/contact`, icon: Mail },
  ];
  const isActive = (href: string) => {
    const localePath = `/${locale}${href === '/' ? '' : href}`;
    return pathname === localePath;
  };

  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="w-full bg-black/20 backdrop-blur-2xl h-[70px] rounded-full max-w-[460px] mx-auto px-2 flex justify-between items-center text-2xl text-white/50"
        >
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const active = isActive(item.href.replace(`/${locale}`, ''));

            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'cursor-pointer w-[60px] h-[60px] flex items-center justify-center group relative transition-all duration-300',
                  active && 'text-white'
                )}
                aria-label={t(item.name)}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  {active && (
                    <motion.div
                      layoutId="activeNav"
                      initial={{ scale: 2 }}
                      animate={{ scale: 2 }}
                      className="absolute inset-0 rounded-full gradient"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <div className="relative z-10 flex items-center justify-center w-full h-full">
                    <Icon
                      className={cn(
                        'w-6 h-6 transition-colors',
                        active ? 'text-white' : 'group-hover:text-accent'
                      )}
                    />
                  </div>
                </motion.div>

                <span className="absolute z-[100] -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs whitespace-nowrap bg-black/80 px-2 py-1 rounded">
                  {t(item.name)}
                </span>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </nav>
  );
}
