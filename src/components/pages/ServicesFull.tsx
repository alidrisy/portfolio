'use client';

import { useTranslations } from 'next-intl';
import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeIn } from '@/lib/motion';
import { StaggerList, StaggerItem } from '@/components/motion/StaggerList';
import { CheckCircle2, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ServicesFull() {
  const t = useTranslations('services');
  
  const services = [
    t.raw('list.0'),
    t.raw('list.1'),
    t.raw('list.2'),
    t.raw('list.3'),
  ];

  return (
    <div className="min-h-screen pt-10 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
      <div className="container mx-auto px-3 sm:px-4">
        <motion.div
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-8 sm:mb-12 lg:mb-20"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-accent mb-4 sm:mb-6 px-4">{t('title')}</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto text-white/80 leading-relaxed mb-8 sm:mb-12 lg:mb-16 px-4">{t('subtitle')}</p>
          
          
        </motion.div>

        <StaggerList className="grid gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto px-2 sm:px-4">
          {services.map((service: any, index: number) => (
            <StaggerItem key={index}>
              <motion.div
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 hover:border-accent/50 transition-all duration-300 w-full"
                whileHover={{ scale: 1.01, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                  <div className="lg:w-2/5">
                    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-3 sm:mb-4 opacity-80">{service.num}</div>
                    <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-white break-words">{service.title}</h2>
                    <p className="text-sm sm:text-base md:text-base lg:text-lg text-white/70 mb-4 sm:mb-6 leading-relaxed break-words">{service.description}</p>
                  </div>

                  <div className="lg:w-3/5">
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4 md:mb-5 text-accent uppercase tracking-wider">{t('processLabel')}</h3>
                    <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 md:mb-8">
                      {service.process.map((step: string, stepIndex: number) => (
                        <motion.div
                          key={stepIndex}
                          className="flex items-start gap-2 sm:gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, amount: 0 }}
                          transition={{ delay: stepIndex * 0.05, duration: 0.3 }}
                        >
                          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 mt-0.5 sm:mt-1" />
                          <span className="text-sm sm:text-base md:text-base lg:text-lg text-white/90 break-words leading-relaxed">{step}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="max-sm:hidden mt-4 sm:mt-6 p-3 sm:p-4 md:p-5 lg:p-6 bg-gradient-to-br from-white/5 to-white/0 rounded-lg sm:rounded-xl border border-white/10">
                      <p className="text-sm sm:text-base md:text-base lg:text-lg leading-relaxed text-white/80 break-words">{service.details}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerList>
      </div>
    </div>
  );
}
