import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  variant?: 'default' | 'orange' | 'warm';
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  hover = true,
  variant = 'default'
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'orange':
        return {
          base: 'backdrop-blur-xl bg-gradient-to-br from-orange-100/20 to-red-100/20 dark:from-orange-900/10 dark:to-red-900/10',
          border: 'border border-orange-300/30 dark:border-orange-700/30',
          hover: hover && 'hover:from-orange-200/30 hover:to-red-200/30 dark:hover:from-orange-800/20 dark:hover:to-red-800/20',
          shadow: hover && 'hover:shadow-2xl hover:shadow-orange-500/10'
        };
      case 'warm':
        return {
          base: 'backdrop-blur-xl bg-gradient-to-br from-red-100/20 to-pink-100/20 dark:from-red-900/10 dark:to-pink-900/10',
          border: 'border border-red-300/30 dark:border-red-700/30',
          hover: hover && 'hover:from-red-200/30 hover:to-pink-200/30 dark:hover:from-red-800/20 dark:hover:to-pink-800/20',
          shadow: hover && 'hover:shadow-2xl hover:shadow-red-500/10'
        };
      default:
        return {
          base: 'backdrop-blur-xl bg-white/10 dark:bg-white/5',
          border: 'border border-white/20 dark:border-white/10',
          hover: hover && 'hover:bg-white/20 dark:hover:bg-white/10',
          shadow: hover && 'hover:shadow-2xl hover:shadow-primary/10'
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <motion.div
      className={cn(
        styles.base,
        styles.border,
        'rounded-xl shadow-xl',
        'transition-all duration-300',
        styles.hover,
        styles.shadow,
        className
      )}
      whileHover={hover ? { scale: 1.02 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}>

      {children}
    </motion.div>);

};

export default GlassCard;