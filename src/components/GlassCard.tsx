import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className, 
  hover = true 
}) => {
  return (
    <motion.div
      className={cn(
        'backdrop-blur-xl bg-white/10 dark:bg-white/5',
        'border border-white/20 dark:border-white/10',
        'rounded-xl shadow-xl',
        'transition-all duration-300',
        hover && 'hover:bg-white/20 dark:hover:bg-white/10',
        hover && 'hover:shadow-2xl hover:shadow-primary/10',
        className
      )}
      whileHover={hover ? { scale: 1.02 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;