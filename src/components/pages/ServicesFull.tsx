'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/motion';
import { StaggerList, StaggerItem } from '@/components/motion/StaggerList';
import { CheckCircle2 } from 'lucide-react';

const WHATSAPP_NUMBER = '966571010226';

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function ServicesFull() {
  const t = useTranslations('services');

  const services = [
    t.raw('list.0'),
    t.raw('list.1'),
    t.raw('list.2'),
    t.raw('list.3'),
  ];

  const waLink = (message: string) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

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
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto text-white/80 leading-relaxed mb-6 sm:mb-8 px-4">{t('subtitle')}</p>

          <a
            href={waLink(t('cta.whatsappGeneral'))}
            target="_blank"
            rel="noreferrer"
            className="btn btn-lg inline-flex items-center gap-2 sm:gap-3"
          >
            <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            {t('cta.button')}
          </a>
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
                    <a
                      href={waLink(t('cta.whatsappMessage', { service: service.title }))}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm mt-5 sm:mt-6 w-full sm:w-auto"
                    >
                      <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                      {t('cta.serviceButton')}
                    </a>
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
