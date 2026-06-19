import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const C = {
  primary: '#12151c',        // Deep Charcoal Dark
  accent: '#e2b865',         // Gold
  gold: '#e2b865',           // Luxury Gold
  bg: '#12151c',             // Dark BG
};

export default function Preloader({ onComplete }) {
  const [startOut, setStartOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 45);

    const timer = setTimeout(() => {
      setStartOut(true);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 1200);
    }, 2200);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  // Blind panels slide away upwards
  const panelVariants = {
    initial: { y: 0 },
    exit: (i) => ({
      y: '-100vh',
      transition: { 
        duration: 0.9, 
        ease: [0.76, 0, 0.24, 1],
        delay: i * 0.08
      }
    })
  };

  return (
    <AnimatePresence>
      {!startOut && (
        <div className="fixed inset-0 z-[9999] overflow-hidden flex justify-center items-center">
          {/* Staggered Vertical Blinds that slide up */}
          <div className="absolute inset-0 flex z-0">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                custom={i}
                variants={panelVariants}
                initial="initial"
                exit="exit"
                className="h-full w-1/5"
                style={{ background: C.primary }}
              />
            ))}
          </div>

          {/* Central Logo, Drawing Lines and Typography */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ 
              opacity: 0, 
              y: '-80vh', 
              transition: { 
                duration: 0.8, 
                ease: [0.76, 0, 0.24, 1] 
              } 
            }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center relative z-10 text-center px-4"
          >
            {/* Elegant Minimalist Square Frame Mark */}
            <div className="relative w-32 h-32 mb-8 flex items-center justify-center">
              {/* Outer Pulsing Golden Square */}
              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2.5, ease: 'easeInOut', repeat: Infinity }}
                className="absolute w-28 h-28 border border-dashed rounded-none"
                style={{ borderColor: C.gold }}
              />
              {/* Spinning Accent Square */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
                className="absolute w-22 h-22 border border-double rounded-none"
                style={{ borderColor: C.accent, borderTopColor: 'transparent', borderBottomColor: 'transparent', opacity: 0.8 }}
              />
              
              {/* Center Square Icon */}
              <div className="w-16 h-16 bg-white/5 rounded-none backdrop-blur-md flex items-center justify-center shadow-2xl border border-white/10">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={C.gold} strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" strokeWidth="2" />
                  <rect x="7" y="7" width="10" height="10" stroke={C.accent} strokeWidth="1.5" />
                  <rect x="11" y="11" width="2" height="2" fill={C.gold} />
                </svg>
              </div>
            </div>

            {/* Rebranded Typography */}
            <motion.h1 
              initial={{ letterSpacing: '0.1em', opacity: 0 }}
              animate={{ letterSpacing: '0.25em', opacity: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="text-3xl sm:text-4xl font-normal text-white mb-3 font-serif"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              AURA WEAVES
            </motion.h1>
            
            <p 
              className="text-[9px] sm:text-[10px] uppercase tracking-[0.35em] font-bold mb-10 text-[#a0aec0]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Heritage Loom Fabrics
            </p>

            {/* Progress bar */}
            <div className="w-56 h-[2px] rounded-none overflow-hidden relative bg-white/15">
              <div 
                className="h-full absolute left-0 top-0 transition-all duration-150"
                style={{ 
                  background: C.gold,
                  width: `${progress}%` 
                }}
              />
            </div>
            <span className="text-[10px] font-bold text-white/40 mt-3 tracking-widest">
              {progress}%
            </span>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
