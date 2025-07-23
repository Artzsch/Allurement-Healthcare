import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'orange' | 'warm' | 'grey';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, variant = 'default', size = 'default', children, asChild, ...props }, ref) => {
    const getVariantStyles = () => {
      switch (variant) {
        case 'orange':
          return 'orange-gradient text-white hover:shadow-lg hover:shadow-orange-500/30 border-0';
        case 'warm':
          return 'warm-gradient text-white hover:shadow-lg hover:shadow-orange-500/30 border-0';
        case 'grey':
          return 'grey-gradient text-white hover:shadow-lg hover:shadow-gray-500/25 border-0';
        default:
          return '';
      }
    };

    const shadowClass = variant === 'orange' ? 'hover:shadow-orange-500/25' :
    variant === 'warm' ? 'hover:shadow-orange-500/25' :
    variant === 'grey' ? 'hover:shadow-gray-500/20' :
    'hover:shadow-primary/25';

    const buttonVariant = variant === 'orange' || variant === 'warm' || variant === 'grey' ? 'default' : variant;

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
          }}>

          <Button
            className={cn(
              'relative overflow-hidden transition-all duration-200',
              `hover:shadow-lg ${shadowClass}`,
              'active:shadow-md',
              getVariantStyles(),
              className
            )}
            variant={buttonVariant}
            size={size}
            ref={ref}
            asChild
            {...props}>

            {children}
          </Button>
        </motion.div>);

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
        }}>

        <Button
          className={cn(
            'relative overflow-hidden transition-all duration-200',
            `hover:shadow-lg ${shadowClass}`,
            'active:shadow-md',
            getVariantStyles(),
            className
          )}
          variant={buttonVariant}
          size={size}
          ref={ref}
          {...props}>

          <motion.div
            className="relative z-10 flex items-center justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}>

            {children}
          </motion.div>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.6 }} />

        </Button>
      </motion.div>);

  }
);

AnimatedButton.displayName = 'AnimatedButton';

export { AnimatedButton };