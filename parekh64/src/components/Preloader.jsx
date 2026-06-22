import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const C = {
  primary: '#1E1A17',       // Deep Dark Charcoal
  accent: '#C5A880',        // Gold
  cream: '#FDFBF7',
  stone: '#6C625C',
};

export default function Preloader({ onComplete, onStartOut }) {
  const [startOut, setStartOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress counter
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
      if (onStartOut) onStartOut();
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 1000); // Shutter slide duration
    }, 2200);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete, onStartOut]);

  const letters = "AAROHI FABRICS".split("");

  return (
    <AnimatePresence>
      {!startOut && (
        <motion.div 
          className="fixed inset-0 z-[9999] overflow-hidden flex flex-col items-center justify-center bg-transparent"
        >
          {/* Horizontal Split Shutters */}
          <div className="absolute inset-0 z-0 flex flex-col pointer-events-none overflow-hidden">
            {/* Top Shutter */}
            <motion.div
              initial={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.95, ease: [0.76, 0, 0.24, 1] }}
              className="h-1/2 w-full bg-[#1E1A17]"
            />
            {/* Bottom Shutter */}
            <motion.div
              initial={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.95, ease: [0.76, 0, 0.24, 1] }}
              className="h-1/2 w-full bg-[#1E1A17]"
            />
          </div>

          {/* Golden pattern background texture */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-10" 
            style={{ 
              backgroundImage: `radial-gradient(${C.accent} 1px, transparent 1px)`, 
              backgroundSize: '32px 32px' 
            }} 
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92, y: -20 }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
            className="relative z-20 flex flex-col items-center pointer-events-none"
          >
            {/* SVG mandala motif with path drawing animation */}
            <div className="mb-6 relative w-24 h-24 flex items-center justify-center">
              <svg width="96" height="96" viewBox="0 0 100 100" className="absolute">
                {/* Circular track */}
                <circle
                  cx="50" cy="50" r="45"
                  stroke="rgba(197, 168, 128, 0.08)"
                  strokeWidth="1.5"
                  fill="transparent"
                />
                {/* Progress bar */}
                <motion.circle
                  cx="50" cy="50" r="45"
                  stroke={C.accent}
                  strokeWidth="2"
                  fill="transparent"
                  strokeDasharray="282.7"
                  strokeDashoffset={282.7 - (282.7 * progress) / 100}
                  transition={{ ease: "easeInOut" }}
                />
              </svg>

              {/* Glowing flower geometric design */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                className="w-14 h-14 flex items-center justify-center"
              >
                <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
                  {/* Mandala petals */}
                  <path d="M50 15 L56 38 L80 38 L60 52 L68 76 L50 62 L32 76 L40 52 L20 38 L44 38 Z" stroke={C.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="50" cy="50" r="12" stroke="#FFFFFF" strokeWidth="1" />
                  <circle cx="50" cy="50" r="4" fill={C.accent} />
                </svg>
              </motion.div>
            </div>

            {/* Letter reveal animation */}
            <div className="flex justify-center gap-1 sm:gap-2 mb-3 pointer-events-auto px-4">
              {letters.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ delay: index * 0.05, duration: 0.6, ease: "easeOut" }}
                  className="text-2xl sm:text-4xl font-bold font-serif tracking-widest text-white"
                  style={{ textShadow: '0 2px 12px rgba(197, 168, 128, 0.2)' }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-[10px] uppercase font-bold mb-6 tracking-[0.3em] text-[#FAF7F2]"
            >
              Premium Textile House
            </motion.p>

            {/* Loading text percentage */}
            <div className="flex flex-col items-center">
              <span className="text-[11px] font-bold tracking-widest text-[#FAF7F2] opacity-75">
                {Math.floor(progress)}%
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
