'use client';

import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Github, Linkedin, Download } from 'lucide-react';
import { fadeIn } from '@/lib/motion';
import Link from 'next/link';
import { TypeAnimation } from '@/components/ui/TypeAnimation';
import Photo from './Photo';

export function HeroSection() {
  const t = useTranslations('hero');
  const tCommon = useTranslations('common');
  const locale = useLocale()

  return (
    <section id="home" className="min-h-[88vh] lg:min-h-[90vh] flex items-center pt-16 sm:pt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-y-8 lg:gap-x-12">
          <div className={`flex-1 text-center ${locale === "ar" ? "lg:text-right" : "lg:text-left"} w-full`}>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              animate="show"
              className={`text-2xl sm:text-3xl lg:text-5xl font-bold uppercase leading-tight mb-4 ${locale === "ar" ? "font-kufi" : ""}`}
            >
              {t('name')}
            </motion.h1>

            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              className={`mb-6 text-xl sm:text-2xl lg:text-4xl font-semibold uppercase ${locale === "ar" ? "font-kufi" : ""}`}
            >
              <span className={`text-white ${locale === "ar" ? "ml-2 sm:ml-3" : "mr-2 sm:mr-3"}`}>{t('iAm')}</span>
              <TypeAnimation
                sequence={[
                  t('roles.frontend'),
                  2000 as any,
                  t('roles.backend'),
                  2000 as any,
                  t('roles.fullstack'),
                  2000 as any,
                ]}
                className="text-accent"
              />
            </motion.div>

            <motion.p
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              animate="show"
              className={`mb-8 max-w-lg mx-auto lg:mx-0 text-sm sm:text-base ${locale === "ar" ? "font-kufi" : ""}`}
            >
              {t('description')}
            </motion.p>

            <motion.div
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              animate="show"
              className="flex flex-col sm:flex-row gap-4 sm:gap-x-6 max-w-max mb-8 mx-auto lg:mx-0 items-center"
            >
              <a
                className={`btn btn-sm flex justify-center  hover:text-primary items-center gap-2 w-full sm:w-auto ${locale === "ar" ? "flex-row-reverse font-kufi" : ""}`}
                href="/Abdulrahman_Alidrisy_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                
              >
                <Download className="w-4 h-4" />
                {tCommon('seeCV')}
              </a>
              <Link
                href={`/${locale}/contact`}
                className={`text-gradient cursor-pointer btn-link text-center sm:text-left w-full sm:w-auto ${locale === "ar" ? "font-kufi" : ""}`}
              >
                {tCommon('connectWithMe')}
              </Link>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.7)}
              initial="hidden"
              animate="show"
              className="flex justify-center lg:justify-start text-2xl gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <motion.a
                href="https://github.com/alidrisy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/alidrisy/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://x.com/AbdulrahmanAdeb"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn('down', 0.5)}
            initial="hidden"
            animate="show"
            className="flex-1 max-w-[280px] sm:max-w-[320px] lg:max-w-[482px] mx-auto"
          >

            <Photo />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
