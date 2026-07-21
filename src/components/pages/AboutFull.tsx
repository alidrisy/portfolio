'use client';

import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { fadeIn, slideIn } from '@/lib/motion';
import { StaggerList, StaggerItem } from '@/components/motion/StaggerList';
import { CountUp } from '@/components/ui/CountUp';
import { Download } from 'lucide-react';
import Link from 'next/link';

export function AboutFull() {
  const t = useTranslations('about');
  const tCommon = useTranslations('common');
  const locale = useLocale()

  const stats = [
    { end: 3, label: t('stats.experience'), prefix: '+' },
    { end: 38, label: t('stats.repos') },
    { end: 20, label: t('stats.technologies'), prefix: '+' },
    { end: 2700, label: t('stats.commits'), prefix: '+' },
  ];

  const timeline = t.raw('timeline') as Array<{
    year: string;
    title: string;
    description: string;
  }>;

  return (
    <div className="min-h-screen pt-10 sm:pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          animate="show"
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-accent mb-4 sm:mb-6">{t('title')}</h1>
          <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl max-w-3xl mx-auto px-4">{t('subtitle')}</p>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20 px-4"
        >
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8">{t('description')}</p>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed">{t('fullBio')}</p>
        </motion.div>

        <StaggerList className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {stats.map((stat, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="text-center p-4 sm:p-5 lg:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-gradient mb-2 sm:mb-3 lg:mb-4 font-bold">
                  {stat.prefix}
                  <CountUp end={stat.end} />
                </div>
                <div className="font-primary text-xs sm:text-sm tracking-wider leading-tight px-2">{stat.label}</div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerList>

        <motion.div
          variants={fadeIn('up', 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          {/* <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-accent mb-6 sm:mb-8 text-center">
            {t('achievements')}
          </h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-16 sm:mb-20 lg:mb-24">
            {(t.raw('achievementsList') as Array<{ metric: string; description: string }>).map((achievement, index) => (
              <motion.div
                key={index}
                variants={slideIn('up', index * 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="p-5 sm:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent/50 transition-all"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient mb-3 sm:mb-4">
                  {achievement.metric}
                </div>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div> */}

          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-accent mb-6 sm:mb-8 text-center">
            {t('expertise')}
          </h2>
          <div className="max-w-full mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20 lg:mb-24">
            {(t.raw('expertiseAreas') as Array<{ category: string; skills: string }>).map((area, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', index * 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="p-5 sm:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <h3 className="text-lg sm:text-xl font-bold text-accent mb-3">
                  {area.category}
                </h3>
                <p className="text-sm sm:text-base text-white/75 leading-relaxed">
                  {area.skills}
                </p>
              </motion.div>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-accent mb-6 sm:mb-8 lg:mb-10 xl:mb-12 text-center">
            {t('journey')}
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                variants={slideIn('left', index * 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0 }}
                className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 group relative w-full"
              >
                {/* Timeline line and year circle */}
                <div className="flex flex-col items-center flex-shrink-0 relative min-w-[3.5rem] sm:min-w-[4rem] md:min-w-[4.5rem]">
                  <motion.div
                    className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-full bg-gradient flex items-center justify-center text-white font-bold text-[10px] sm:text-xs md:text-sm lg:text-base z-10 shadow-lg border-2 border-primary/30 shrink-0 px-1"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-center leading-tight">{item.year}</span>
                  </motion.div>
                  {index < timeline.length - 1 && (
                    <div
                      className="mt-3 sm:mt-4 mb-2 flex-1 bg-gradient-to-b from-transparent via-accent/70 to-accent/50"
                      style={{
                        width: '2px',
                        minHeight: '4rem'
                      }}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-4 sm:pb-6 lg:pb-8 min-w-0 pr-2">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-gradient transition-colors leading-tight text-white break-words">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-white/75 sm:text-white/80 leading-relaxed break-words">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 0.8)}
          initial="hidden"
          whileInView="show"
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <a
            href="/Abdulrahman_Alidrisy_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lg flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            {tCommon('seeCV')}
          </a>
          <Link href={`/${locale}/contact`} className="text-gradient text-xl font-semibold btn-link">
            {tCommon('connectWithMe')}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
