import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const C = {
  primary: '#2C1E16',
  accent: '#8A4A51',
  bg: '#F9F5F0',
};

export default function Preloader({ onComplete }) {
  const [startOut, setStartOut] = useState(false);

  useEffect(() => {
    // Keep it on screen for a luxurious 2.5 seconds
    const timer = setTimeout(() => {
      setStartOut(true);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 800); // allow exit animation to finish
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!startOut && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: C.primary }}
        >
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#8A4A51 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

          <div className="flex flex-col items-center relative z-10">
            
            {/* Minimalist Thread Graphic */}
            <div className="relative w-20 h-20 mb-8 flex items-center justify-center">
              <motion.svg 
                width="60" height="60" viewBox="0 0 24 24" fill="none" 
                stroke={C.accent} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                {/* Continuous thread path */}
                <motion.path 
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                  initial={{ pathLength: 0, opacity: 0.5 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                <motion.path 
                  d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
                />
              </motion.svg>
              
              <motion.div 
                className="absolute inset-0  border border-white/10"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              />
            </div>

            {/* Brand Name */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.2, 0.65, 0.3, 0.9] }}
                className="text-4xl md:text-5xl font-bold tracking-wide"
                style={{ fontFamily: "'Playfair Display', serif", color: C.bg }}
              >
                Katha Weaves
              </motion.h1>
            </div>

            {/* Subtitle */}
            <div className="overflow-hidden mt-4">
              <motion.p
                initial={{ opacity: 0, letterSpacing: "0.1em" }}
                animate={{ opacity: 1, letterSpacing: "0.3em" }}
                transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                className="text-[11px] uppercase font-semibold"
                style={{ fontFamily: "'Inter', sans-serif", color: C.accent }}
              >
                Crafting Heritage
              </motion.p>
            </div>
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
