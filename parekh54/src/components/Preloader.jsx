import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const C = {
  primary: '#5A1827',        // Deep Burgundy
  accent: '#C2A478',         // Gold Accent
  bg: '#FAF6F0',             // Warm Cream
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
      }, 600);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  // Letters for typing/fade animation
  const titleText = "THE TEXTILE LOFT";

  return (
    <AnimatePresence>
      {!startOut && (
        <motion.div 
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col justify-center items-center"
          style={{ background: C.bg }}
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-radial-gradient(circle, rgba(90, 24, 39, 0.03) 0%, transparent 80%)" />

          {/* Central Logo and Typography Container */}
          <div className="flex flex-col items-center relative z-10 text-center">
            
            {/* Elegant Spinning Weaving/Loom Circle */}
            <div className="relative w-36 h-36 mb-8 flex items-center justify-center">
              
              {/* Outer Golden Border with subtle rotation */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, ease: 'linear', repeat: Infinity }}
                className="absolute w-32 h-32 border border-dashed rounded-full"
                style={{ borderColor: C.accent, opacity: 0.5 }}
              />

              {/* Inner Burgundy Ring rotating opposite */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
                className="absolute w-28 h-28 border border-double rounded-full"
                style={{ borderColor: C.primary, opacity: 0.3 }}
              />

              {/* Circular Loom Threads Animation */}
              <svg width="100" height="100" viewBox="0 0 100 100" className="absolute">
                <motion.circle
                  cx="50"
                  cy="50"
                  r="42"
                  stroke={C.accent}
                  strokeWidth="1.5"
                  fill="none"
                  strokeDasharray="260"
                  initial={{ strokeDashoffset: 260 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 1.8, ease: "easeInOut" }}
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="34"
                  stroke={C.primary}
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="210"
                  initial={{ strokeDashoffset: 0 }}
                  animate={{ strokeDashoffset: 210 }}
                  transition={{ duration: 1.8, ease: "easeInOut" }}
                />
              </svg>

              {/* Central Logo Symbol */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="w-16 h-16 bg-white/60 rounded-full backdrop-blur-sm flex items-center justify-center shadow-[0_8px_32px_rgba(90,24,39,0.06)]"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={C.primary} strokeWidth="1.5">
                  <circle cx="12" cy="12" r="9" stroke={C.accent} strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="6" stroke={C.primary} strokeWidth="1" />
                  <path d="M12 3v18M3 12h18" stroke={C.accent} strokeWidth="0.5" />
                </svg>
              </motion.div>

            </div>

            {/* Premium Typography Animation (Letter fade-in) */}
            <h1 
              className="text-2xl sm:text-3xl font-bold tracking-[0.25em] mb-3 font-serif flex gap-0.5 justify-center"
              style={{ color: C.primary }}
            >
              {titleText.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em] font-bold mb-8"
              style={{ color: C.primary, fontFamily: "'Outfit', sans-serif" }}
            >
              Heritage Crafted Textiles
            </motion.p>

            {/* Smooth progress bar */}
            <div className="w-56 h-[2px] rounded-full overflow-hidden relative bg-black/5">
              <motion.div 
                className="h-full absolute left-0 top-0 transition-all duration-100"
                style={{ 
                  background: `linear-gradient(90deg, ${C.accent}, ${C.primary})`,
                  width: `${progress}%` 
                }}
              />
            </div>
            <span className="text-[10px] font-bold text-black/40 mt-3 tracking-widest">
              {progress}%
            </span>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
