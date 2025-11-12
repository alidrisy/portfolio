'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface InkUnderlineProps {
  children: ReactNode;
  className?: string;
  isActive?: boolean;
}

export function InkUnderline({ children, className, isActive }: InkUnderlineProps) {
  return (
    <span className={cn('relative inline-block', className)}>
      {children}
      <motion.span
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#c9b8a3] to-[#e8dcc8]"
        initial={{ width: 0 }}
        animate={{ width: isActive ? '100%' : 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      />
    </span>
  );
}
