import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const C = {
  primary: '#043B5C',
  accent: '#C29B62',
  bg: '#FAFAFA',
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
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: C.primary }}
        >
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

          <div className="flex flex-col items-center relative z-10">
            
            {/* Minimalist Graphic */}
            <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
              <motion.div
                className="absolute inset-0 border-2 rounded-full"
                style={{ borderColor: 'rgba(194, 155, 98, 0.2)' }}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1.2, opacity: 1 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              />
              <motion.div
                className="absolute inset-2 border border-dashed rounded-full"
                style={{ borderColor: C.accent }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <motion.svg 
                width="40" height="40" viewBox="0 0 24 24" fill="none" 
                stroke={C.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </motion.svg>
            </div>

            {/* Brand Name */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.65, 0.3, 0.9] }}
                className="text-4xl md:text-5xl font-bold tracking-[0.2em] uppercase"
                style={{ fontFamily: "'Playfair Display', serif", color: '#ffffff' }}
              >
                SAUVORA
              </motion.h1>
            </div>

            {/* Loading text */}
            <div className="overflow-hidden mt-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: C.accent }}
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
