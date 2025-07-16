import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, variant = 'default', size = 'default', children, asChild, ...props }, ref) => {
    if (asChild) {
      return (
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ 
            type: 'spring', 
            stiffness: 400, 
            damping: 17,
            duration: 0.1
          }}
        >
          <Button
            className={cn(
              'relative overflow-hidden transition-all duration-200',
              'hover:shadow-lg hover:shadow-primary/25',
              'active:shadow-md',
              className
            )}
            variant={variant}
            size={size}
            ref={ref}
            asChild
            {...props}
          >
            {children}
          </Button>
        </motion.div>
      );
    }

    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ 
          type: 'spring', 
          stiffness: 400, 
          damping: 17,
          duration: 0.1
        }}
      >
        <Button
          className={cn(
            'relative overflow-hidden transition-all duration-200',
            'hover:shadow-lg hover:shadow-primary/25',
            'active:shadow-md',
            className
          )}
          variant={variant}
          size={size}
          ref={ref}
          {...props}
        >
          <motion.div
            className="relative z-10 flex items-center justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {children}
          </motion.div>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.6 }}
          />
        </Button>
      </motion.div>
    );
  }
);

AnimatedButton.displayName = 'AnimatedButton';

export { AnimatedButton };