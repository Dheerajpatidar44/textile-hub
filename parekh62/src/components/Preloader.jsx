import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const C = {
  primary: '#96BADE',
  primaryLight: '#4B70F5',
  primaryDark: '#000B58',
  accent: '#3FA2F6',
  bg: '#F4F8FC',
  stone: '#4A5568',
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
    }, 40);

    const timer = setTimeout(() => {
      setStartOut(true);
      if (onStartOut) onStartOut();
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 1000); // curtain slide duration
    }, 2400);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete, onStartOut]);

  const letters = "SAANJH TEXTILES".split("");

  return (
    <AnimatePresence>
      {!startOut && (
        <div className="fixed inset-0 z-[9999] overflow-hidden flex items-center justify-center">
          
          {/* Top Left Panel */}
          <motion.div
            initial={{ x: 0, y: 0 }}
            exit={{ x: '-100%', y: '-100%' }}
            transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-0 left-0 w-1/2 h-1/2 bg-[#F4F8FC]"
          />

          {/* Top Right Panel */}
          <motion.div
            initial={{ x: 0, y: 0 }}
            exit={{ x: '100%', y: '-100%' }}
            transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#F4F8FC]"
          />

          {/* Bottom Left Panel */}
          <motion.div
            initial={{ x: 0, y: 0 }}
            exit={{ x: '-100%', y: '100%' }}
            transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
            className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#F4F8FC]"
          />

          {/* Bottom Right Panel */}
          <motion.div
            initial={{ x: 0, y: 0 }}
            exit={{ x: '100%', y: '100%' }}
            transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
            className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#F4F8FC]"
          />

          {/* Central Logo & Loading Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40, scale: 0.95 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center pointer-events-none"
          >
            {/* Elegant Line-Drawing Spindle/Mandala */}
            <div className="mb-6 relative w-20 h-20 flex items-center justify-center">
              <svg width="80" height="80" viewBox="0 0 100 100" className="absolute">
                <motion.circle
                  cx="50" cy="50" r="40"
                  stroke={C.primary}
                  strokeWidth="2.5"
                  fill="transparent"
                  initial={{ strokeDasharray: "251.2", strokeDashoffset: 251.2 }}
                  animate={{ strokeDashoffset: 251.2 - (251.2 * progress) / 100 }}
                  transition={{ ease: "easeInOut" }}
                />
              </svg>
              {/* Inner graphic - Rotating flower/mandala icon */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                className="w-10 h-10 flex items-center justify-center"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={C.primary} strokeWidth="2">
                  <path d="M12 2v20M2 12h20M5.6 5.6l12.8 12.8M5.6 18.4L18.4 5.6" />
                  <circle cx="12" cy="12" r="3" fill={C.primary} />
                </svg>
              </motion.div>
            </div>

            {/* Staggered Brand Text Reveal */}
            <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-2 pointer-events-auto px-4">
              {letters.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="text-2xl sm:text-4xl font-bold font-serif tracking-wide text-[#000B58]"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>

            {/* Sub-label */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-[10px] uppercase font-bold mb-8 tracking-[0.25em] text-[#4A5568]"
            >
              Premium Textile House
            </motion.p>

            {/* Progress Percentage & Bar */}
            <div className="flex flex-col items-center w-48">
              <span className="text-[10px] font-bold tracking-widest text-[#000B58] mb-2">
                {Math.floor(progress)}%
              </span>
              <div className="w-full h-[2.5px] bg-[#D0E1FD] overflow-hidden rounded-full">
                <motion.div
                  className="h-full bg-[#96BADE]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
