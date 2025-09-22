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
    src="https://images.unsplash.com/photo-1636249253913-40e83d5423e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwbG9nbyUyMGltYWdlJTIwZm9yJTIwQWxsdXJlbWVudCUyMEhlYWx0aGNhcmUlMkMlMjBmZWF0dXJpbmclMjBhJTIwc3R5bGl6ZWQlMjBkZXNpZ24lMjB3aXRoJTIwYSUyMHByb2Zlc3Npb25hbCUyMGFuZCUyMGNsZWFuJTIwYXBwZWFyYW5jZS58ZW58MHx8fHwxNzU4NTQ4NzI2fDA&ixlib=rb-4.1.0&q=80&w=200$w=512"
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