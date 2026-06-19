import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const C = {
  primary: '#1E3E37',        // Deep Forest Green
  accent: '#E2A93E',         // Gold Accent
  gold: '#E2A93E',
  bg: '#FAF7F0',             // Warm Sand
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
    }, 60);

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

  const brandName = "WEAVECRAFT";

  return (
    <AnimatePresence>
      {!startOut && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: C.bg }}
        >
          {/* Elegant background texture grid */}
          <div className="absolute inset-0 opacity-15" style={{ 
            backgroundImage: 'radial-gradient(#1E3E37 1px, transparent 1px)', 
            backgroundSize: '24px 24px' 
          }} />

          <div className="flex flex-col items-center relative z-10">
            {/* Animated Custom Weaving/Loom Diamond SVG */}
            <div className="relative w-28 h-28 mb-6 flex items-center justify-center">
              {/* Outer Pulsing Glow */}
              <div className="absolute w-24 h-24 rounded-full bg-white/40 blur-xl animate-pulse" />
              
              {/* Gold Weave Diamond Path Drawing */}
              <svg width="80" height="80" viewBox="0 0 100 100" className="absolute">
                {/* Background base diamond path */}
                <path
                  d="M50 10 L90 50 L50 90 L10 50 Z"
                  stroke="rgba(30, 62, 55, 0.1)"
                  strokeWidth="2"
                  fill="none"
                />
                
                {/* Gold animated stroke */}
                <motion.path
                  d="M50 10 L90 50 L50 90 L10 50 Z"
                  stroke={C.gold}
                  strokeWidth="3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                />

                {/* Inner Forest Green woven path */}
                <motion.path
                  d="M50 25 L75 50 L50 75 L25 50 Z"
                  stroke={C.primary}
                  strokeWidth="2.5"
                  fill="none"
                  initial={{ pathLength: 0, rotate: 90 }}
                  animate={{ pathLength: 1, rotate: 90 }}
                  transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: 0.3 }}
                />

                {/* Center Core dot */}
                <circle cx="50" cy="50" r="3" fill={C.gold} />
              </svg>
            </div>

            {/* Letter by Letter Reveal */}
            <div className="flex gap-1 overflow-hidden h-12 items-center">
              {brandName.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    ease: [0.2, 0.65, 0.3, 0.9]
                  }}
                  className="text-3xl md:text-4xl font-extrabold tracking-wider"
                  style={{ color: C.primary, fontFamily: "'Inter', sans-serif" }}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Subtext Reveal */}
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.12em" }}
              animate={{ opacity: 1, letterSpacing: "0.25em" }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="text-[10px] uppercase font-bold mt-2"
              style={{ color: C.gold, fontFamily: "'Inter', sans-serif" }}
            >
              TEXTILE MALL
            </motion.p>

            {/* Minimal Progress Line */}
            <div className="w-56 h-[1.5px] bg-emerald-900/10 mt-8 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full absolute left-0 top-0"
                style={{ 
                  background: `linear-gradient(90deg, ${C.primary}, ${C.gold})`,
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
