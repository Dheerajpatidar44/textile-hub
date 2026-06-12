import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Store } from 'lucide-react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show preloader for 1.8 seconds on mount
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#022c22]"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex flex-col items-center"
          >
            {/* Logo Icon */}
            <div className="w-24 h-24 bg-[#C48B5D]/10 rounded-full flex items-center justify-center mb-6 border border-[#C48B5D]/30 shadow-[0_0_30px_rgba(196,139,93,0.2)]">
              <Store className="w-12 h-12 text-[#C48B5D]" />
            </div>
            
            {/* Brand Name */}
            <h1 className="text-4xl font-serif text-[#C48B5D] tracking-[0.2em] uppercase mb-8">
              LuminaTex
            </h1>
            
            {/* Loading Dots */}
            <div className="flex space-x-3">
              <motion.div 
                animate={{ y: [0, -8, 0], opacity: [0.5, 1, 0.5] }} 
                transition={{ duration: 1, repeat: Infinity, delay: 0 }} 
                className="w-2 h-2 rounded-full bg-[#C48B5D]" 
              />
              <motion.div 
                animate={{ y: [0, -8, 0], opacity: [0.5, 1, 0.5] }} 
                transition={{ duration: 1, repeat: Infinity, delay: 0.2 }} 
                className="w-2 h-2 rounded-full bg-[#C48B5D]" 
              />
              <motion.div 
                animate={{ y: [0, -8, 0], opacity: [0.5, 1, 0.5] }} 
                transition={{ duration: 1, repeat: Infinity, delay: 0.4 }} 
                className="w-2 h-2 rounded-full bg-[#C48B5D]" 
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
