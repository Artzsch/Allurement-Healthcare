import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  className,
  size = 'md',
  animated = false
}) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12'
  };

  const logoContent =
  <img
    src="https://newoaks.s3.us-west-1.amazonaws.com/NewOaks/5500/117d459f-5e23-449c-a69d-19c6a051aefd.png"
    alt="Allurement Healthcare Logo"
    className={cn(
      sizeClasses[size],
      'object-contain',
      className
    )}
    style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }} />;



  if (animated) {
    return (
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: 'spring', stiffness: 300 }}>

        {logoContent}
      </motion.div>);

  }

  return logoContent;
};

export default Logo;