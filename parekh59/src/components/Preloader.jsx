import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const C = {
  primary: '#0C1929',       // Deep Navy
  accent: '#D79F88',        // Peach
  gold: '#Bfa37c',          // Warm Gold
  bg: '#0C1929',            // Deep Navy background
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
        return prev + 5;
      });
    }, 45);

    const timer = setTimeout(() => {
      setStartOut(true);
      if (onStartOut) onStartOut();
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 1300);
    }, 2400);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete, onStartOut]);

  // Letters of the brand name AURORA for delay-based staggered entry
  const letters = ["A", "U", "R", "O", "R", "A"];

  return (
    <AnimatePresence>
      {!startOut && (
        <div className="fixed inset-0 z-[9999] overflow-hidden">
          {/* Staggered Vertical Curtain Panels */}
          <div className="absolute inset-0 flex pointer-events-none z-0">
            {[...Array(5)].map((_, idx) => {
              const direction = idx % 2 === 0 ? -1 : 1; // Even columns slide up, Odd slide down
              return (
                <motion.div
                  key={idx}
                  initial={{ y: 0 }}
                  exit={{ y: `${direction * 100}%` }}
                  transition={{
                    duration: 0.9,
                    ease: [0.76, 0, 0.24, 1],
                    delay: idx * 0.08,
                  }}
                  className="h-full bg-[#0C1929] pointer-events-auto"
                  style={{
                    width: '20.2%', // slightly wider than 20% to avoid visual pixel line gaps
                    marginLeft: idx > 0 ? '-0.2%' : '0px',
                  }}
                />
              );
            })}
          </div>

          {/* Central Logo & Loading Content */}
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              scale: 0.95,
              transition: { duration: 0.4, ease: "easeOut" }
            }}
            className="absolute inset-0 flex flex-col justify-center items-center z-10 px-4 pointer-events-none"
          >
            {/* Subtle slow-pulse ambient gold backdrop light */}
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.15, 0.25, 0.15]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none z-[-1]"
              style={{ background: `radial-gradient(circle, rgba(191, 163, 124, 0.3) 0%, transparent 70%)` }}
            />

            {/* Elegant Line-Drawing Geometric SVG Mandala */}
            <div className="w-24 h-24 mb-8 flex items-center justify-center relative pointer-events-auto">
              {/* Outer drawing circle */}
              <svg width="84" height="84" viewBox="0 0 100 100" className="absolute">
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke={C.gold}
                  strokeWidth="1.5"
                  fill="transparent"
                  initial={{ strokeDasharray: "283 283", strokeDashoffset: 283 }}
                  animate={{ strokeDashoffset: 283 - (283 * progress) / 100 }}
                  transition={{ ease: "easeInOut" }}
                />
              </svg>

              {/* Inner geometric lines drawing */}
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" className="z-10">
                <motion.path
                  d="M12 2L2 12h20L12 2zm0 20L2 12h20L12 22z"
                  stroke="#ffffff"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: progress / 100 }}
                  transition={{ duration: 1.5 }}
                />
                <motion.circle
                  cx="12"
                  cy="12"
                  r="4"
                  fill={C.gold}
                  initial={{ scale: 0 }}
                  animate={{ scale: progress >= 60 ? 1 : 0 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
              </svg>
            </div>

            {/* Staggered Brand Text Reveal */}
            <div className="flex gap-1.5 mb-2.5 pointer-events-auto">
              {letters.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6, ease: "easeOut" }}
                  className="text-3xl sm:text-4xl font-semibold font-serif tracking-wider"
                  style={{ color: '#ffffff' }}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Sub-label sliding in */}
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              animate={{ opacity: 0.5, letterSpacing: "0.3em" }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-[9px] uppercase font-bold mb-10 tracking-[0.3em]"
              style={{ color: '#ffffff' }}
            >
              Textile House
            </motion.p>

            {/* Sleek thin line loading bar */}
            <div className="w-48 h-[1px] rounded-full overflow-hidden relative bg-white/10 pointer-events-auto">
              <motion.div
                className="h-full absolute left-0 top-0"
                style={{
                  background: `linear-gradient(90deg, ${C.gold}, ${C.accent})`,
                  width: `${progress}%`
                }}
              />
            </div>
            
            {/* Progress status */}
            <span className="text-[10px] font-semibold mt-3 text-white/40 tracking-widest pointer-events-auto">
              LOADING
            </span>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
