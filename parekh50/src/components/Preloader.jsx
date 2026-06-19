import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const C = {
  primary: '#43533D',        // Olive Green
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
        return prev + 4;
      });
    }, 30);

    const timer = setTimeout(() => {
      setStartOut(true);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 800);
    }, 1800);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  // Curtain animation parameters
  const panelVariants = {
    initial: { y: 0 },
    exit: (i) => ({
      y: '-100%',
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
        delay: i * 0.1,
      }
    })
  };

  return (
    <AnimatePresence>
      {!startOut && (
        <div className="fixed inset-0 z-[9999] overflow-hidden flex flex-col justify-center items-center pointer-events-none">
          {/* Staggered Vertical Curtain Panels */}
          <div className="absolute inset-0 flex z-0">
            {[0, 1, 2, 3].map((panelIndex) => (
              <motion.div
                key={panelIndex}
                custom={panelIndex}
                variants={panelVariants}
                initial="initial"
                exit="exit"
                className="h-full flex-1"
                style={{ background: panelIndex % 2 === 0 ? C.primary : '#3C4B37' }}
              />
            ))}
          </div>

          {/* Central Logo and Typography */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -40, transition: { duration: 0.4 } }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center relative z-10 text-center"
          >
            {/* Spinning Golden Loom Outline */}
            <div className="relative w-28 h-28 mb-6 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
                className="absolute w-24 h-24 border border-dashed rounded-full"
                style={{ borderColor: C.gold, opacity: 0.4 }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 6, ease: 'linear', repeat: Infinity }}
                className="absolute w-20 h-20 border border-double rounded-full"
                style={{ borderColor: C.accent, opacity: 0.6 }}
              />
              {/* Central Logo Mark */}
              <div className="w-14 h-14 bg-white/5 rounded-full backdrop-blur-md flex items-center justify-center shadow-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={C.gold} strokeWidth="2">
                  <path d="M12 2L2 12l10 10 10-10L12 2z" />
                  <path d="M12 6l-6 6 6 6 6-6-6-6z" stroke={C.accent} strokeWidth="1.5" />
                </svg>
              </div>
            </div>

            {/* Typography */}
            <h1 
              className="text-2xl sm:text-3xl font-normal tracking-[0.2em] text-white mb-2 font-serif"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              CHETAN MANKER
            </h1>
            <p 
              className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-semibold mb-8 text-neutral-300"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Textile Mall
            </p>

            {/* Progress indicator */}
            <div className="w-48 h-[2.5px] rounded-full overflow-hidden relative bg-white/10">
              <div 
                className="h-full absolute left-0 top-0 transition-all duration-100"
                style={{ 
                  background: `linear-gradient(90deg, ${C.gold}, ${C.accent})`,
                  width: `${progress}%` 
                }}
              />
            </div>
            <span className="text-[10px] font-bold text-white/50 mt-2.5 tracking-widest">
              {progress}%
            </span>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
