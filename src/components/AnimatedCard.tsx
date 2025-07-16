import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

const AnimatedCard = React.forwardRef<HTMLDivElement, AnimatedCardProps>(
  ({ className, children, delay = 0, hover = true, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay,
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        whileHover={hover ? { 
          y: -8,
          transition: { duration: 0.2 }
        } : {}}
        className={cn('group', className)}
        {...props}
      >
        <Card className={cn(
          'transition-all duration-300 backdrop-blur-sm',
          'hover:shadow-xl hover:shadow-primary/10',
          'border-border/50 bg-card/80',
          'group-hover:border-primary/30',
          className
        )}>
          {children}
        </Card>
      </motion.div>
    );
  }
);

AnimatedCard.displayName = 'AnimatedCard';

export { AnimatedCard };