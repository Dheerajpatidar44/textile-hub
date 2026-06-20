import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const C = {
  primary: '#7E1242',       // Burgundy
  accent: '#C17D91',        // Dusty Rose
  gold: '#Bfa37c',          // Warm Gold
  bg: '#7E1242',            // Burgundy fullscreen background
  text: '#ffffff',
};

export default function Preloader({ onComplete, onStartOut }) {
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
      if (onStartOut) onStartOut();
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 700);
    }, 2200);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete, onStartOut]);

  return (
    <AnimatePresence>
      {!startOut && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col justify-center items-center"
          style={{ background: C.bg }}
        >
          {/* Minimal ambient background glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px] pointer-events-none z-[-1]"
            style={{ background: `radial-gradient(circle, ${C.gold} 0%, transparent 70%)` }}
          />

          <motion.div 
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center relative z-10 text-center px-4"
          >
            {/* Elegant rotating floral mandala loader */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 mb-8 flex items-center justify-center"
            >
              <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke={C.gold} strokeWidth="1">
                <circle cx="12" cy="12" r="10" stroke={C.gold} strokeWidth="1" strokeDasharray="4, 2" />
                <path d="M12 2v20M2 12h20M5 5l14 14M5 19L14 10" stroke={C.gold} strokeWidth="0.8" />
                {/* Petals */}
                <path d="M12 12c0-3.5 2-5 2-5s-2 1.5-2 5zm0 0c0 3.5-2 5-2 5s2-1.5 2-5z" fill={C.gold} opacity="0.3" />
                <path d="M12 12c3.5 0 5 2 5 2s-1.5-2-5-2zm-0 0c-3.5 0-5-2-5-2s1.5 2 5 2z" fill={C.gold} opacity="0.3" />
                <circle cx="12" cy="12" r="2.5" fill="#ffffff" />
              </svg>
            </motion.div>

            {/* Title text reveal */}
            <motion.h1
              initial={{ opacity: 0, tracking: '0.1em' }}
              animate={{ opacity: 1, tracking: '0.3em' }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-3xl sm:text-4xl font-bold mb-2 font-serif uppercase"
              style={{ color: '#ffffff', letterSpacing: '0.3em' }}
            >
              KASTURI
            </motion.h1>

            {/* Sub-label */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-[9px] uppercase tracking-[0.25em] font-bold mb-8"
              style={{ color: '#ffffff' }}
            >
              Textile Retail Mall
            </motion.p>

            {/* Loader bar */}
            <div className="w-40 h-[1.5px] rounded-full overflow-hidden relative" style={{ background: 'rgba(255,255,255,0.15)' }}>
              <motion.div
                className="h-full absolute left-0 top-0 transition-all duration-100"
                style={{
                  background: C.gold,
                  width: `${progress}%`
                }}
              />
            </div>
            
            {/* Percentage indicator */}
            <span className="text-[10px] font-bold mt-2" style={{ color: C.gold, letterSpacing: '0.1em' }}>
              {progress}%
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
