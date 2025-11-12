'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useState, useTransition } from 'react';
import { submitContactForm } from '@/actions/contact';

export function ContactFull() {
  const t = useTranslations('contact');
  const tCommon = useTranslations('common');
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isFocused, setIsFocused] = useState({ name: false, email: false, message: false });
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);

    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const result = await submitContactForm(formData);

      if (result.success) {
        setStatus({ type: 'success', message: result.message || tCommon('messageSent') });
        setFormState({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: result.error || tCommon('somethingWentWrong') });
      }
    });
  };

  const info = [
    { icon: Phone, title: t('info.phone'), value: t('details.phone') },
    { icon: Mail, title: t('info.email'), value: t('details.email') },
    { icon: MapPin, title: t('info.address'), value: t('details.address') },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          animate="show"
          className="text-center mb-16"
        >
          <h4 className="text-2xl uppercase text-accent font-medium mb-4 tracking-wide">
            {t('title')}
          </h4>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">{t('subtitle')}</h1>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold mb-8">{t('getInTouch')}</h2>
              <p className="text-xl text-white/80 mb-8">
                {t('description')}
              </p>
            </div>

            <div className="space-y-6">
              {info.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-center gap-6 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    <div className="w-16 h-16 bg-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm mb-1">{item.title}</p>
                      <h3 className="text-xl font-semibold">{item.value}</h3>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            animate="show"
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 space-y-6"
          >
            <div>
              <motion.input
                type="text"
                name="name"
                placeholder={t('form.name')}
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                onFocus={() => setIsFocused({ ...isFocused, name: true })}
                onBlur={() => setIsFocused({ ...isFocused, name: false })}
                className="w-full bg-transparent border-b-2 border-white/20 py-4 outline-none placeholder:text-white/50 transition-all"
                required
                disabled={isPending}
              />
            </div>

            <div>
              <motion.input
                type="email"
                name="email"
                placeholder={t('form.email')}
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                onFocus={() => setIsFocused({ ...isFocused, email: true })}
                onBlur={() => setIsFocused({ ...isFocused, email: false })}
                className="w-full bg-transparent border-b-2 border-white/20 py-4 outline-none placeholder:text-white/50 transition-all"
                required
                disabled={isPending}
              />
            </div>

            <div>
              <motion.textarea
                name="message"
                placeholder={t('form.message')}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                onFocus={() => setIsFocused({ ...isFocused, message: true })}
                onBlur={() => setIsFocused({ ...isFocused, message: false })}
                rows={6}
                className="w-full bg-transparent border-b-2 border-white/20 py-4 outline-none placeholder:text-white/50 transition-all resize-none"
                required
                disabled={isPending}
              />
            </div>

            {status && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg ${status.type === 'success'
                  ? 'bg-green-500/20 border border-green-500/50 text-green-300'
                  : 'bg-red-500/20 border border-red-500/50 text-red-300'
                  }`}
              >
                {status.message}
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={isPending}
              className="btn btn-lg w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: isPending ? 1 : 1.02 }}
              whileTap={{ scale: isPending ? 1 : 0.98 }}
            >
              <Send className="w-5 h-5" />
              {isPending ? tCommon('sending') : tCommon('sendMessage')}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
