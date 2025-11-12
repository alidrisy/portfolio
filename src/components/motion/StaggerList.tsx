'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { staggerContainer } from '@/lib/motion';
import { cn } from '@/lib/utils';

interface StaggerListProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  initialDelay?: number;
}

export function StaggerList({
  children,
  className,
  staggerDelay = 0.1,
  initialDelay = 0,
}: StaggerListProps) {
  return (
    <motion.div
      variants={staggerContainer(staggerDelay, initialDelay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
