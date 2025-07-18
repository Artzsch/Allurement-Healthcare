import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, Mail, X } from 'lucide-react';

const FloatingActionButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const actions = [
  {
    icon: Phone,
    label: 'Call Us',
    href: 'tel:+14372202025',
    color: 'bg-green-500 hover:bg-green-600'
  },
  {
    icon: Mail,
    label: 'Email Us',
    href: 'mailto:enquire@allurementhealthcares.com',
    color: 'bg-blue-500 hover:bg-blue-600'
  }];


  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="mb-4 space-y-2">

            {actions.map((action, index) =>
          <motion.div
            key={action.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-end">

                <span className="mr-3 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg shadow-lg">
                  {action.label}
                </span>
                <Button
              size="icon"
              className={`rounded-full w-12 h-12 shadow-lg ${action.color}`}
              onClick={action.onClick}
              asChild={!!action.href}>

                  {action.href ?
              <a href={action.href} target="_blank" rel="noopener noreferrer">
                      <action.icon className="h-5 w-5" />
                    </a> :

              <action.icon className="h-5 w-5" />
              }
                </Button>
              </motion.div>
          )}
          </motion.div>
        }
      </AnimatePresence>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}>

        <Button
          onClick={toggleOpen}
          size="icon"
          className="rounded-full w-14 h-14 bg-primary hover:bg-primary/90 shadow-lg">

          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}>

            {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
          </motion.div>
        </Button>
      </motion.div>
    </div>);

};

export default FloatingActionButton;