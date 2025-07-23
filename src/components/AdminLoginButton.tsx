import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface AdminLoginButtonProps {
  variant?: 'default' | 'ghost' | 'outline' | 'secondary' | 'destructive' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  showIcon?: boolean;
}

const AdminLoginButton: React.FC<AdminLoginButtonProps> = ({
  variant = 'ghost',
  size = 'default',
  className = '',
  showIcon = true
}) => {
  const handleAdminLogin = () => {
    window.open('https://app.titan.email/login/', '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Button
        onClick={handleAdminLogin}
        variant={variant}
        size={size}
        className={`${className} transition-colors duration-200`}
      >
        {showIcon && <ExternalLink className="mr-2 h-4 w-4" />}
        Admin Login
      </Button>
    </motion.div>
  );
};

export default AdminLoginButton;