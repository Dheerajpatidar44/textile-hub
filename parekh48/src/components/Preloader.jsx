import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const C = {
  primary: '#25524B',        // Deep Teal
  accent: '#C5A880',         // Soft Gold Accent
  bg: '#FAF8F5',             // Warm Sand/Cream
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
      }, 600);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!startOut && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: C.bg }}
        >
          {/* Subtle background luxury mesh grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ 
            backgroundImage: `radial-gradient(${C.primary} 1px, transparent 1px)`, 
            backgroundSize: '32px 32px' 
          }} />

          <div className="flex flex-col items-center relative z-10">
            {/* Spinning Loom / Spool Rings Animation */}
            <div className="relative w-36 h-36 mb-8 flex items-center justify-center">
              {/* Outer Glow */}
              <div 
                className="absolute w-28 h-28 rounded-full blur-2xl opacity-20"
                style={{ background: C.accent }}
              />
              
              {/* Monogram inside */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute text-center z-10"
              >
                <span 
                  className="text-4xl font-light tracking-widest font-serif block"
                  style={{ color: C.primary, fontFamily: "'Cormorant Garamond', serif" }}
                >
                  FA
                </span>
              </motion.div>

              {/* Outer Golden Spinner Ring (Clockwise) */}
              <motion.svg 
                className="absolute w-32 h-32" 
                viewBox="0 0 100 100"
                animate={{ rotate: 360 }}
                transition={{ duration: 3.5, ease: "linear", repeat: Infinity }}
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke={C.accent}
                  strokeWidth="1.5"
                  fill="none"
                  strokeDasharray="90 120"
                  strokeLinecap="round"
                />
              </motion.svg>

              {/* Inner Teal Spinner Ring (Counter-Clockwise) */}
              <motion.svg 
                className="absolute w-24 h-24" 
                viewBox="0 0 100 100"
                animate={{ rotate: -360 }}
                transition={{ duration: 2.5, ease: "linear", repeat: Infinity }}
              >
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  stroke={C.primary}
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="60 100"
                  strokeLinecap="round"
                />
              </motion.svg>
            </div>

            {/* Premium Typography Brand Name Fade-in */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <h1 
                className="text-2xl md:text-3xl font-normal tracking-[0.15em] mb-1 font-serif"
                style={{ color: C.primary, fontFamily: "'Cormorant Garamond', serif" }}
              >
                THE FABRIC ATELIER
              </h1>
              <p 
                className="text-[9px] uppercase tracking-[0.3em] font-semibold"
                style={{ color: C.accent, fontFamily: "'Inter', sans-serif" }}
              >
                Artisanal Textile Destination
              </p>
            </motion.div>

            {/* Linear Progress Bar */}
            <div 
              className="w-48 h-[2px] mt-10 rounded-full overflow-hidden relative"
              style={{ background: 'rgba(37, 82, 75, 0.08)' }}
            >
              <motion.div
                className="h-full absolute left-0 top-0"
                style={{ 
                  background: C.accent,
                  width: `${progress}%` 
                }}
              />
            </div>
            
            <span 
              className="text-[10px] font-bold mt-2 tracking-widest"
              style={{ color: C.primary, opacity: 0.6 }}
            >
              {progress}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
