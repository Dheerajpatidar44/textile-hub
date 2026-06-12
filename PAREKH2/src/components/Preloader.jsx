import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-light"
          >
            <div className="relative flex flex-col items-center">
              {/* Spinning ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="w-32 h-32 rounded-full border-t-2 border-r-2 border-secondary absolute"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                className="w-24 h-24 mt-4 rounded-full border-b-2 border-l-2 border-primary absolute"
              />
              
              {/* Brand Logo Text */}
              <div className="z-10 flex flex-col items-center justify-center h-32">
                <motion.h1 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-4xl font-serif font-bold loader-text tracking-widest"
                >
                  PAREKH
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="text-xs uppercase tracking-[0.3em] text-primary mt-2 font-medium"
                >
                  Premium Textiles
                </motion.p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
};

export default Preloader;
