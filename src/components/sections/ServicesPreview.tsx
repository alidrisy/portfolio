'use client';

import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function ServicesPreview() {
  const t = useTranslations('services');
  const tCommon = useTranslations('common');
  const locale = useLocale()

  const services = [
    t.raw('list.0'),
    t.raw('list.1'),
    t.raw('list.2'),
  ].slice(0, 3);

  return (
    <section id="services" className="section min-h-[90vh]">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col lg:flex-row ${locale === "ar" ? "lg:space-x-reverse lg:space-x-10" : "lg:space-x-10"}`}>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="mb-12 lg:mb-0 flex-1"
          >
            <h2 className={`h2 max-sm:text-[35px] font-bold text-accent mb-6 max-sm:mb-3 ${locale === "ar" ? "font-kufi" : ""}`}>
              {t('title')}
            </h2>
            <h3 className={`h3 max-sm:text-[25px] max-w-[455px] mb-10 max-sm:mb-5 ${locale === "ar" ? "font-kufi" : ""}`}>
              {t('subtitle')}
            </h3>
            <Link  href={`/${locale}/services`} className={`btn btn-sm p-3 cursor-pointer ${locale === "ar" ? "font-kufi" : ""}`}>
              {tCommon('seeMyWork')}
            </Link>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {services.map((service: any, index: number) => (
                <motion.div
                  key={index}
                  className="border-b border-white/20 min-h-[120px] sm:min-h-[146px] mb-6 sm:mb-[38px] pb-4"
                  whileHover={{ x: locale === "ar" ? -10 : 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6 ${locale === "ar" ? "flex-row-reverse" : ""}`}>
                    <div className="text-accent text-2xl sm:text-3xl lg:text-[40px] self-start pt-1 font-bold flex-shrink-0">
                      {service.num}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className={`text-base sm:text-lg lg:text-[20px] hover:text-gradient font-semibold tracking-wider ${locale === "en" ? "font-primary" : "font-kufi"} mb-3 sm:mb-6 ${locale === "ar" ? "text-right" : ""}`}>
                        {service.title}
                      </h4>
                      <p className={`text-sm sm:text-base leading-tight line-clamp-2 ${locale === "ar" ? "font-kufi text-right" : "font-secondary"}`}>
                        {service.description}
                      </p>
                    </div>
                    <Link
                      href={`/${locale}/services`}
                      className="btn h-8 w-8 sm:h-9 sm:w-9 transition-all duration-300 flex justify-center items-center hover:rotate-45 cursor-pointer flex-shrink-0"
                    >
                      <ArrowUpRight className="text-lg sm:text-xl lg:text-2xl" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
