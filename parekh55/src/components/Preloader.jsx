import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const C = {
  primary: '#043e3d',        // Deep Teal Green
  accent: '#C39A58',         // Gold Accent
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
        return prev + 4;
      });
    }, 30);

    const timer = setTimeout(() => {
      setStartOut(true);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 600);
    }, 2200);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  const titleText = "PARIDHI TEXTILES";

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
          <div className="absolute inset-0 bg-radial-gradient(circle, rgba(4, 62, 61, 0.03) 0%, transparent 80%)" />

          {/* Central Logo and Typography Container */}
          <div className="flex flex-col items-center relative z-10 text-center">
            
            {/* Elegant Lotus/Mandala SVG reveal */}
            <div className="relative w-32 h-32 mb-6 flex items-center justify-center">
              
              {/* Outer Golden Border rotating slowly */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
                className="absolute w-28 h-28 border border-dashed rounded-full"
                style={{ borderColor: C.accent, opacity: 0.4 }}
              />

              {/* Inner Teal border rotating opposite */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 14, ease: 'linear', repeat: Infinity }}
                className="absolute w-24 h-24 border rounded-full"
                style={{ borderColor: C.primary, opacity: 0.15, borderStyle: 'dotted' }}
              />

              {/* Weave mandala svg drawing */}
              <svg width="80" height="80" viewBox="0 0 100 100" className="absolute">
                {/* Petals drawing */}
                <motion.path
                  d="M50,15 C55,30 45,45 50,50 C55,45 45,30 50,15 Z"
                  stroke={C.accent}
                  strokeWidth="1.5"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                <motion.path
                  d="M50,85 C55,70 45,55 50,50 C55,55 45,70 50,85 Z"
                  stroke={C.accent}
                  strokeWidth="1.5"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                <motion.path
                  d="M15,50 C30,55 45,45 50,50 C45,45 30,55 15,50 Z"
                  stroke={C.accent}
                  strokeWidth="1.5"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                <motion.path
                  d="M85,50 C70,55 55,45 50,50 C55,45 70,55 85,50 Z"
                  stroke={C.accent}
                  strokeWidth="1.5"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                {/* Diagonal Petals */}
                <motion.path
                  d="M25,25 C38,38 42,42 50,50 C42,42 38,38 25,25 Z"
                  stroke={C.primary}
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1.2 }}
                  transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
                />
                <motion.path
                  d="M75,75 C62,62 58,58 50,50 C58,58 62,62 75,75 Z"
                  stroke={C.primary}
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1.2 }}
                  transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
                />
                <motion.path
                  d="M75,25 C62,38 58,42 50,50 C58,42 62,38 75,25 Z"
                  stroke={C.primary}
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1.2 }}
                  transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
                />
                <motion.path
                  d="M25,75 C38,62 42,58 50,50 C42,58 38,62 25,75 Z"
                  stroke={C.primary}
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1.2 }}
                  transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
                />
              </svg>

              {/* Central small glowing core */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: [0.8, 1.1, 0.9], opacity: 1 }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-4 h-4 rounded-full"
                style={{ background: C.accent, filter: 'blur(1px)' }}
              />

            </div>

            {/* Typography Reveal */}
            <h1 
              className="text-2xl sm:text-3xl font-bold tracking-[0.25em] mb-2 font-serif flex gap-0.5 justify-center"
              style={{ color: C.primary }}
            >
              {titleText.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
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

            {/* Smooth gold and green progress line */}
            <div className="w-48 h-[2px] rounded-full overflow-hidden relative bg-black/5">
              <motion.div 
                className="h-full absolute left-0 top-0 transition-all duration-100"
                style={{ 
                  background: `linear-gradient(90deg, ${C.accent}, ${C.primary})`,
                  width: `${progress}%` 
                }}
              />
            </div>
            <span className="text-[10px] font-bold text-black/30 mt-2.5 tracking-widest">
              {progress}%
            </span>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
