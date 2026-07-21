'use client';

import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react';
import { fadeIn } from '@/lib/motion';

export interface ProjectData {
  num: string;
  slug: string;
  category: string;
  title: string;
  description: string;
  stack: string;
  image: string;
  live: string;
  github: string;
  problem: string;
  solution: string;
  impact: string;
}

export function ProjectDetail({ project }: { project: ProjectData }) {
  const t = useTranslations('common');
  const locale = useLocale();
  const isArabic = locale === 'ar';
  const BackIcon = isArabic ? ArrowRight : ArrowLeft;

  return (
    <div className="min-h-screen pt-16 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div variants={fadeIn('down', 0.1)} initial="hidden" animate="show" className="mb-6 sm:mb-8">
          <Link
            href={`/${locale}/projects`}
            className={`inline-flex items-center gap-2 text-gradient hover:gap-3 transition-all text-sm sm:text-base ${isArabic ? 'font-kufi' : ''}`}
          >
            <BackIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>{t('backToProjects')}</span>
          </Link>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate="show"
          className="relative aspect-[2/1] rounded-xl sm:rounded-2xl overflow-hidden border-2 border-white/20 mb-8 sm:mb-10 bg-black/40"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 960px"
          />
        </motion.div>

        <motion.div variants={fadeIn('up', 0.3)} initial="hidden" animate="show">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <span className="text-gradient text-sm sm:text-base lg:text-lg font-semibold">
              {project.category}
            </span>
            <span className="text-accent text-2xl sm:text-3xl font-bold">{project.num}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-accent">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed mb-6 sm:mb-8">
            {project.description}
          </p>

          <div className="mb-8 sm:mb-10">
            <h2 className="text-sm sm:text-base uppercase tracking-wider text-accent font-semibold mb-3">
              {t('techStack')}
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.split(', ').map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm text-accent"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 sm:mb-12">
            {project.live !== '#' && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm flex items-center gap-2 text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                {t('liveDemo')}
              </a>
            )}
            {project.github !== '#' && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm flex items-center gap-2 text-sm"
              >
                <Github className="w-4 h-4" />
                {t('code')}
              </a>
            )}
          </div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8">
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="p-5 sm:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <h3 className="text-lg sm:text-xl font-bold text-accent mb-2 sm:mb-3">
                {t('theProblem')}
              </h3>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed">{project.problem}</p>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="p-5 sm:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <h3 className="text-lg sm:text-xl font-bold text-accent mb-2 sm:mb-3">
                {t('theSolution')}
              </h3>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed">{project.solution}</p>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="p-5 sm:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <h3 className="text-lg sm:text-xl font-bold text-accent mb-2 sm:mb-3">
                {t('theImpact')}
              </h3>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed">{project.impact}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
