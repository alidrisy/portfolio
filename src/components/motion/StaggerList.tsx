'use client';

import { motion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
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
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    // Reset animation state on route change
    setIsVisible(false);
    // Small delay to ensure the component is mounted and ready
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 150);
    
    return () => clearTimeout(timer);
  }, [pathname]);
  
  return (
    <motion.div
      key={`${pathname}-stagger`}
      variants={staggerContainer(staggerDelay, initialDelay)}
      initial="hidden"
      animate={isVisible ? "show" : "hidden"}
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
