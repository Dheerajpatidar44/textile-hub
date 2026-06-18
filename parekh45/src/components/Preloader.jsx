import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const C = {
  primary: '#111E38',        // Deep Navy Blue
  accent: '#DE5B49',         // Terracotta Red
  bg: '#111E38',             // Deep Navy screen background
  lightBg: '#FAF9F5',
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
      }, 700);
    }, 1800);

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
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: C.bg }}
        >
          {/* Subtle elegant rotating lines decoration */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              style={{
                width: '600px',
                height: '600px',
                border: '1px dashed rgba(250, 249, 245, 0.1)',
                borderRadius: '50%',
                position: 'absolute'
              }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              style={{
                width: '450px',
                height: '450px',
                border: '1px solid rgba(250, 249, 245, 0.05)',
                borderRadius: '50%',
                position: 'absolute'
              }}
            />
          </div>

          <div className="flex flex-col items-center relative z-10">
            {/* Elegant glowing spinner */}
            <div className="relative w-24 h-24 mb-8 flex items-center justify-center">
              {/* Outer pulsing glow */}
              <div 
                className="absolute w-16 h-16 rounded-full blur-md opacity-35"
                style={{ background: C.accent }} 
              />
              
              {/* Spinning circular vector */}
              <svg width="60" height="60" viewBox="0 0 100 100" className="absolute">
                <circle 
                  cx="50" 
                  cy="50" 
                  r="40" 
                  stroke="rgba(250,249,245,0.05)" 
                  strokeWidth="2" 
                  fill="none" 
                />
                <motion.circle 
                  cx="50" 
                  cy="50" 
                  r="40" 
                  stroke={C.accent} 
                  strokeWidth="4" 
                  strokeLinecap="round"
                  fill="none" 
                  initial={{ pathLength: 0.1 }}
                  animate={{ pathLength: 0.8, rotate: 360 }}
                  transition={{ 
                    pathLength: { duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
                    rotate: { duration: 2, repeat: Infinity, ease: "linear" }
                  }}
                />
              </svg>

              {/* Central static icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FAF9F5" strokeWidth="1.5">
                <path d="M12 2L2 12l10 10 10-10L12 2z" strokeWidth="2" />
              </svg>
            </div>

            {/* Typography Animation */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-[32px] md:text-[38px] font-medium tracking-wide text-white m-0"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Veda Weaves
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.15em" }}
              animate={{ opacity: 1, letterSpacing: "0.3em" }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-[10px] uppercase font-bold mt-2"
              style={{ color: C.accent, fontFamily: "'Inter', sans-serif" }}
            >
              TEXTILE MALL
            </motion.p>

            {/* Minimal Progress Line expanding from center */}
            <div className="w-48 h-[1px] bg-white/10 mt-10 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full absolute left-1/2 -translate-x-1/2"
                style={{ 
                  background: C.accent,
                  width: `${progress}%` 
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
