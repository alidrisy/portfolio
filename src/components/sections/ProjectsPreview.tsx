'use client';

import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/motion';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export function ProjectsPreview() {
  const t = useTranslations('projects');
  const tCommon = useTranslations('common');
  const locale = useLocale();

  const projects = [t.raw('list.0'), t.raw('list.1')].slice(0, 2);

  return (
    <section id="projects" className="section">
      <div className="container mx-auto px-4">
        <div className="flex-1 flex-col gap-y-12 mb-10 lg:mb-0">
          <motion.div variants={fadeIn('left', 0.3)} initial="hidden" whileInView="show">
            <h2 className={`h2 text-3xl sm:text-4xl lg:text-5xl leading-tight text-accent font-bold ${locale === "ar" ? "font-kufi" : ""}`}>{t('title')}</h2>
            <p className={`max-w-2xl text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 line-clamp-2 ${locale === "ar" ? "font-kufi" : ""}`}>{t('subtitle')}</p>
            <div className="mb-8 sm:mb-10">
              <Link
                href={`/${locale}/projects`}
                className={`btn btn-sm p-3 cursor-pointer mb-16 font-bold ${locale === "ar" ? "font-kufi" : ""}`}
              >
                {tCommon('seeAllProjects')}
              </Link>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('right', 0.5)}
            initial="hidden"
            whileInView="show"
            className="flex flex-col xl:flex-row gap-6 sm:gap-8 lg:gap-10"
          >
            {projects.map((project: any, index: number) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden border-2 border-white/20 rounded-xl min-h-[300px] sm:min-h-[350px] lg:min-h-[400px]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="group-hover:bg-black/70 w-full h-full absolute inset-0 z-40 transition-all duration-300" />
                <Image
                  className="group-hover:scale-125 transition-all duration-500 object-cover w-full h-full"
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  sizes="(max-width: 1280px) 100vw, 50vw"
                />

                <div className={`absolute -bottom-full ${locale === "ar" ? "right-6 sm:right-12" : "left-6 sm:left-12"} group-hover:bottom-16 sm:group-hover:bottom-20 transition-all duration-700 text-white z-50 max-w-[90%] sm:max-w-[500px]`}>
                  <span className={`text-gradient text-sm sm:text-base lg:text-lg ${locale === "ar" ? "font-kufi" : ""}`}>{project.category}</span>
                  <h3 className={`text-xl sm:text-2xl lg:text-3xl font-bold mt-2 ${locale === "ar" ? "font-kufi" : ""}`}>{project.title}</h3>
                  <p className={`text-sm sm:text-base lg:text-lg mt-2 sm:mt-4 line-clamp-2 sm:line-clamp-3 ${locale === "ar" ? "font-kufi" : ""}`}>{project.description}</p>
                </div>

                <div className={`flex items-end ${locale === "ar" ? "justify-start left-4 sm:left-8 space-x-reverse" : "justify-end right-4 sm:right-8"} space-x-2 absolute -bottom-full group-hover:bottom-5 transition-all duration-1000 z-50`}>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn h-8 w-8 sm:h-9 sm:w-9 flex justify-center items-center hover:rotate-45 hover:scale-110"
                  >
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn h-8 w-8 sm:h-9 sm:w-9 flex justify-center items-center hover:scale-110"
                  >
                    <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
