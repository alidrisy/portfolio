'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/motion';
import { StaggerList, StaggerItem } from '@/components/motion/StaggerList';
import Link from 'next/link';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function ProjectsFull() {
  const t = useTranslations('projects');
  const tCommon = useTranslations('common');

  const projects = [
    t.raw('list.0'),
    t.raw('list.1'),
    t.raw('list.2'),
    t.raw('list.3'),
  ];

  return (
    <div className="min-h-screen pt-16 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          animate="show"
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-accent mb-4 sm:mb-6 px-2">
            {t('title')}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-3xl mx-auto px-4">
            {t('subtitle')}
          </p>
        </motion.div>

        <StaggerList className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {projects.map((project: any, index: number) => (
            <StaggerItem key={index}>
              <motion.div
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl border-2 border-white/20 bg-white/5 backdrop-blur-sm h-full flex flex-col"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                </div>

                <div className="p-5 sm:p-6 md:p-8 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="text-gradient text-sm sm:text-base lg:text-lg font-semibold">
                      {project.category}
                    </span>
                    <span className="text-accent text-2xl sm:text-3xl font-bold">{project.num}</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 group-hover:text-gradient transition-all">
                    {project.title}
                  </h2>

                  <p className="text-sm sm:text-base lg:text-lg text-white/80 mb-4 sm:mb-6 line-clamp-3 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {project.stack.split(', ').map((tech: string, i: number) => (
                      <span
                        key={i}
                        className="px-2 sm:px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                    {project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-sm flex items-center gap-2 text-xs sm:text-sm"
                      >
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                        {tCommon('liveDemo')}
                      </a>
                    )}
                    {project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-sm flex items-center gap-2 text-xs sm:text-sm"
                      >
                        <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                        {tCommon('code')}
                      </a>
                    )}
                    <Link
                      href={`/projects/${project.slug}`}
                      className="ml-auto text-gradient hover:gap-2 inline-flex items-center gap-1 transition-all text-sm sm:text-base"
                    >
                      <span>{tCommon('details')}</span>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerList>

        <motion.div
          variants={fadeIn('up', 0.8)}
          initial="hidden"
          whileInView="show"
          className="text-center px-4"
        >
          <a
            href="https://github.com/alidrisy?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="btn btn-lg inline-flex items-center gap-2 text-sm sm:text-base"
          >
            <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            {tCommon('viewAllOnGitHub')}
          </a>
        </motion.div>
      </div>
    </div>
  );
}
