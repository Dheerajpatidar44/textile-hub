import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const C = {
  primary: '#BC4639',        // Deep Teal Green
  accent: '#C39A58',         // Gold Accent
  bg: '#BC4639',             // Deep luxury teal screen for preloader
  text: '#FAF8F5',           // Cream text
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
      }, 600);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete, onStartOut]);

  const titleText = "SUTRADHAR HUB";

  return (
    <AnimatePresence>
      {!startOut && (
        <motion.div 
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: -30,
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col justify-center items-center"
          style={{ background: C.bg }}
        >
          {/* Minimal ambient golden glow in background */}
          <div 
            className="absolute w-[450px] h-[450px] rounded-full opacity-10 blur-[80px] pointer-events-none"
            style={{ background: `radial-gradient(circle, ${C.accent} 0%, transparent 70%)` }}
          />

          <div className="flex flex-col items-center relative z-10 text-center px-4">
            
            {/* Elegant loom/weaving pulse effect */}
            <div className="relative w-20 h-20 mb-8 flex items-center justify-center">
              {/* Outer delicate ring */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [0.95, 1.15, 0.95], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-16 h-16 border border-solid rounded-full"
                style={{ borderColor: C.accent }}
              />

              {/* Inner core diamond */}
              <motion.div
                animate={{ rotate: 45 }}
                className="w-6 h-6 border border-solid border-white/40 flex items-center justify-center"
              >
                <motion.div 
                  animate={{ scale: [1, 1.25, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-2.5 h-2.5 bg-accent rotate-45"
                  style={{ background: C.accent }}
                />
              </motion.div>
            </div>

            {/* Title text reveal with letter-spacing transition */}
            <motion.h1 
              initial={{ letterSpacing: '0.1em' }}
              animate={{ letterSpacing: '0.3em' }}
              transition={{ duration: 2.2, ease: "easeOut" }}
              className="text-2xl sm:text-3xl font-bold mb-3 font-serif flex gap-0.5 justify-center"
              style={{ color: C.accent }}
            >
              {titleText.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.35 }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.h1>

            {/* Sub-label */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em] font-semibold mb-8 text-[#FAF8F5]"
            >
              Heritage Crafted Textiles
            </motion.p>

            {/* Thin gold loader bar */}
            <div className="w-56 h-[1.5px] rounded-full overflow-hidden relative bg-white/10">
              <motion.div 
                className="h-full absolute left-0 top-0 transition-all duration-100"
                style={{ 
                  background: C.accent,
                  width: `${progress}%` 
                }}
              />
            </div>

            {/* Percentage Indicator */}
            <span className="text-[10px] font-bold text-white/40 mt-3 tracking-widest">
              {progress}%
            </span>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
