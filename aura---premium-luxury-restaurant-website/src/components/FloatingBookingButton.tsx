import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar } from 'lucide-react';

export default function FloatingBookingButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    const bookingSec = document.getElementById('booking');
    if (bookingSec) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = bookingSec.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleClick}
          className="fixed bottom-6 right-6 z-40 flex items-center space-x-2 bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold text-xs uppercase tracking-wider px-5 py-4 rounded-full shadow-[0_4px_25px_rgba(239,68,68,0.35)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500/50"
          aria-label="Quick reserve a table"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
          </span>
          <Calendar className="h-4 w-4" />
          <span className="hidden sm:inline">Reserve Table</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
