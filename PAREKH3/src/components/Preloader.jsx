import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 4;
      });
    }, 80);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2400);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.9, ease: [0.43, 0.13, 0.23, 0.96] } }}
            className="fixed inset-0 z-[100] flex items-center justify-center"
            style={{ backgroundColor: '#060F22' }}
          >
            {/* Background decorative rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                transition={{ rotate: { repeat: Infinity, duration: 8, ease: 'linear' }, scale: { repeat: Infinity, duration: 3, ease: 'easeInOut' } }}
                className="absolute w-72 h-72 rounded-full border border-[#D4A853]/10"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
                className="absolute w-56 h-56 rounded-full border border-[#D4A853]/20"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
                className="absolute w-40 h-40 rounded-full border-t-2 border-[#D4A853]/60"
              />
            </div>

            {/* Center content */}
            <div className="relative z-10 flex flex-col items-center">
              {/* Amber diamond ornament */}
              <motion.div
                initial={{ scale: 0, rotate: 45 }}
                animate={{ scale: 1, rotate: 45 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="w-3 h-3 bg-[#D4A853] mb-5"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-center"
              >
                <h1 className="text-5xl font-serif font-light text-white tracking-[0.3em] mb-1">
                  LUMINA
                </h1>
                <p className="text-[0.65rem] uppercase tracking-[0.5em] text-[#D4A853] font-light">
                  Premium Textiles
                </p>
              </motion.div>

              {/* Progress bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-10 w-48"
              >
                <div className="w-full h-px bg-white/10 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-[#D4A853] origin-left"
                    style={{ scaleX: progress / 100 }}
                    transition={{ duration: 0.1, ease: 'linear' }}
                  />
                </div>
                <p className="text-center text-[0.6rem] text-white/30 mt-2 tracking-widest font-light">
                  {Math.min(progress, 100)}%
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
};

export default Preloader;
