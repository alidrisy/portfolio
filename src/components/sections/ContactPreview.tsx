'use client';

import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/motion';
import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export function ContactPreview() {
  const t = useTranslations('contact');
  const locale = useLocale();

  const info = [
    { icon: Phone, title: t('info.phone'), value: t('details.phone') },
    { icon: Mail, title: t('info.email'), value: t('details.email') },
    { icon: MapPin, title: t('info.address'), value: t('details.address') },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:section">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 flex justify-start items-center"
        >
          <div className="w-full">
            <h4 className={`text-lg sm:text-xl lg:text-2xl uppercase text-accent font-medium mb-2 tracking-wide ${locale === "ar" ? "font-kufi" : ""}`}>
              {t('title')}
            </h4>
            <h2 className={`text-3xl sm:text-5xl lg:text-[90px] leading-none mb-8 sm:mb-12 ${locale === "ar" ? "font-kufi" : ""}`}>
              {t('subtitle')}
            </h2>

            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              <ul className="flex flex-col gap-6 sm:gap-8 lg:gap-10 w-full">
                {info.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.li
                      key={index}
                      className={`flex items-center gap-4 sm:gap-6`}
                      initial={{ opacity: 0, x: locale === "ar" ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      dir={locale === "ar" ? "rtl" : "ltr"}
                    >
                      <div className="w-12 h-12 sm:w-[52px] sm:h-[52px] xl:w-[72px] xl:h-[72px] bg-gradient text-white rounded-md flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 xl:w-7 xl:h-7" />
                      </div>
                      <div className="flex-1">
                        <p className={`text-white/60 text-sm sm:text-base ${locale === "ar" ? "font-kufi" : ""}`}>{item.title}</p>
                        <h3 className={`text-base sm:text-lg lg:text-xl break-words ${locale === "ar" ? "font-kufi" : ""}`}>{item.value}</h3>
                      </div>
                    </motion.li>
                  );
                })}
              </ul>
            </div>

            <motion.div
              variants={fadeIn('up', 0.8)}
              initial="hidden"
              whileInView="show"
              className="mt-8 sm:mt-12"
            >
              <Link
                href={`/${locale}/contact`}
                className={`inline-flex items-center gap-2 text-gradient hover:gap-4 transition-all text-base sm:text-lg font-semibold ${locale === "ar" ? "flex-row-reverse font-kufi" : ""}`}
              >
                <span>{t('getInTouch')}</span>
                <ArrowRight className={`w-4 h-4 sm:w-5 sm:h-5 ${locale === "ar" ? "rotate-180" : ""}`} />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
