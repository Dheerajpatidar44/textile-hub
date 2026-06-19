import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const C = {
  primary: '#2A3B4C',        // Olive Green
  accent: '#B8624E',         // Terracotta Accent
  gold: '#C2A478',           // Luxury Gold
  bg: '#FAF8F5',             // Warm Sand
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
    }, 40);

    const timer = setTimeout(() => {
      setStartOut(true);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 1000);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  // Horizontal split slide panels
  const leftPanel = {
    initial: { x: 0 },
    exit: {
      x: '-100%',
      transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] }
    }
  };

  const rightPanel = {
    initial: { x: 0 },
    exit: {
      x: '100%',
      transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] }
    }
  };

  return (
    <AnimatePresence>
      {!startOut && (
        <div className="fixed inset-0 z-[9999] overflow-hidden flex justify-center items-center">
          {/* Split Horizontal Panels */}
          <div className="absolute inset-0 flex z-0">
            <motion.div
              variants={leftPanel}
              initial="initial"
              exit="exit"
              className="h-full w-1/2"
              style={{ background: C.primary }}
            />
            <motion.div
              variants={rightPanel}
              initial="initial"
              exit="exit"
              className="h-full w-1/2"
              style={{ background: C.primary }}
            />
          </div>

          {/* Central Logo, Drawing Lines and Typography */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: 'blur(8px)', transition: { duration: 0.5 } }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center relative z-10 text-center px-4"
          >
            {/* Elegant Minimalist Loom Mark */}
            <div className="relative w-32 h-32 mb-8 flex items-center justify-center">
              {/* Outer Pulsing Golden Ring */}
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity }}
                className="absolute w-28 h-28 border border-dashed rounded-full"
                style={{ borderColor: C.gold }}
              />
              {/* Spinning Accent Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
                className="absolute w-24 h-24 border border-double rounded-full"
                style={{ borderColor: C.accent, borderTopColor: 'transparent', borderBottomColor: 'transparent', opacity: 0.8 }}
              />
              
              {/* Center Icon */}
              <div className="w-16 h-16 bg-white/10 rounded-full backdrop-blur-md flex items-center justify-center shadow-2xl border border-white/20">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={C.gold} strokeWidth="1.5">
                  <path d="M12 2L2 12l10 10 10-10L12 2z" strokeWidth="2" />
                  <path d="M12 6l-6 6 6 6 6-6-6-6z" stroke={C.accent} strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="1.5" fill={C.gold} />
                </svg>
              </div>
            </div>

            {/* Rebranded Typography */}
            <motion.h1 
              initial={{ letterSpacing: '0.1em', opacity: 0 }}
              animate={{ letterSpacing: '0.25em', opacity: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="text-3xl sm:text-4xl font-normal text-white mb-3 font-serif"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Gharana Weaves
            </motion.h1>
            
            <p 
              className="text-[9px] sm:text-[10px] uppercase tracking-[0.35em] font-bold mb-10 text-neutral-300"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Heritage Fabrics
            </p>

            {/* Progress bar */}
            <div className="w-56 h-[2px] rounded-full overflow-hidden relative bg-white/15">
              <div 
                className="h-full absolute left-0 top-0 transition-all duration-150"
                style={{ 
                  background: `linear-gradient(90deg, ${C.gold}, ${C.accent})`,
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
