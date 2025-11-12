'use client';

import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CountUp } from '@/components/ui/CountUp';

export function AboutPreview() {
    const t = useTranslations('about');
    const locale = useLocale()

    const stats = [
        { end: 2, label: t('stats.experience'), prefix: '+' },
        { end: 38, label: t('stats.repos') },
        { end: 20, label: t('stats.technologies'), prefix: '+' },
        { end: 2700, label: t('stats.commits'), prefix: '+' },
    ];

    return (
        <section id="about" className="section min-h-[90vh]">
            <div className="container mx-auto">
                <div className="flex flex-col gap-y-10">
                    <motion.div
                        variants={fadeIn('left', 0.4)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.7 }}
                        className="flex-1"
                    >
                        <h2 className={`h2 text-3xl sm:text-4xl lg:text-[50px] text-accent font-bold mb-4 sm:mb-6 ${locale === "ar" ? "font-kufi" : ""}`}>
                            {t('title')}
                        </h2>
                        <h3 className={`h3 text-xl sm:text-2xl lg:text-[30px] mb-4 sm:mb-6 ${locale === "ar" ? "font-kufi" : ""}`}>
                            {t('subtitle')}
                        </h3>
                        <p className={`text-base sm:text-lg lg:text-xl line-clamp-4 ${locale === "ar" ? "font-kufi" : ""}`}>{t('description')}</p>

                        <div className="flex flex-wrap font-tertiary gap-6 sm:gap-8 mt-8 sm:mt-12 lg:gap-x-10">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: false, amount: 0.7 }}
                                    transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                                >
                                    <div className="text-3xl sm:text-4xl lg:text-[45px] font-tertiary text-gradient mb-1 sm:mb-2">
                                        {stat.prefix}
                                        <CountUp end={stat.end} />
                                    </div>
                                    <div className={`${locale === "en" ? "font-primary" : "font-kufi"} text-xs sm:text-sm lg:text-md tracking-[2px]`}>
                                        {stat.label.split(' ').map((word, i) => (
                                            <span key={i}>
                                                {word}
                                                <br />
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            variants={fadeIn('up', 0.8)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.7 }}
                            className="mt-8 sm:mt-12"
                        >
                            <Link
                                href={`/${locale}/about`}
                                className={`inline-flex items-center gap-2 text-gradient hover:gap-4 transition-all ${locale === "ar" ? "flex-row-reverse font-kufi" : ""}`}
                            >
                                <span className="text-base sm:text-lg font-semibold">{t('learnMore')}</span>
                                <ArrowRight className={`w-4 h-4 sm:w-5 sm:h-5 ${locale === "ar" ? "rotate-180" : ""}`} />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
