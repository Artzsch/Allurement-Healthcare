import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ModernButtonProps {
  children: React.ReactNode;
  variant?: 'gradient' | 'glass' | 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  asChild?: boolean;
}

const ModernButton: React.FC<ModernButtonProps> = ({
  children,
  variant = 'gradient',
  size = 'md',
  className,
  onClick,
  disabled = false,
  type = 'button',
  asChild = false,
  ...props
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'gradient':
        return 'gradient-button text-white font-semibold shadow-lg hover:shadow-xl border-0';
      case 'glass':
        return 'glass-button text-white font-semibold hover:text-gray-100';
      case 'primary':
        return 'bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300';
      case 'secondary':
        return 'bg-white/90 backdrop-blur-sm hover:bg-white text-blue-600 font-semibold border border-blue-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300';
      default:
        return '';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'md':
        return 'px-6 py-3 text-base';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3 text-base';
    }
  };

  return (
    <Button
      className={cn(
        'rounded-xl font-medium transition-all duration-300 relative overflow-hidden',
        getVariantClasses(),
        getSizeClasses(),
        className
      )}
      onClick={onClick}
      disabled={disabled}
      type={type}
      asChild={asChild}
      {...props}>

      {children}
    </Button>);

};

export default ModernButton;