import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const C = {
  primary: '#1C362B',
  primaryLight: '#2A4F40',
  primaryDark: '#12241D',
  accent: '#B8A9CB',
  gold: '#Bfa37c',
  bg: '#F9F6F0',
  border: '#D5DBCB',
  stone: '#4A4A4A',
  soil: '#1C362B',
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
      }, 1500); // Wait for exit animation
    }, 2400);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete, onStartOut]);

  const letters = ["K", "U", "M", "A", "V", "A", "T", "I"];

  return (
    <AnimatePresence>
      {!startOut && (
        <div className="fixed inset-0 z-[9999] overflow-hidden flex items-center justify-center">
          
          {/* Main Background Panel - Expanding Circle Exit */}
          <motion.div
            initial={{ clipPath: 'circle(150% at 50% 50%)' }}
            exit={{ clipPath: 'circle(0% at 50% 50%)' }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 bg-[#F9F6F0] pointer-events-auto"
          />

          {/* Central Logo & Loading Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 flex flex-col items-center pointer-events-none"
          >
            {/* Elegant Line-Drawing */}
            <div className="mb-6 relative w-20 h-20 flex items-center justify-center">
              <svg width="80" height="80" viewBox="0 0 100 100" className="absolute">
                <motion.rect
                  x="10" y="10" width="80" height="80"
                  stroke={C.primary}
                  strokeWidth="2"
                  fill="transparent"
                  initial={{ strokeDasharray: "320 320", strokeDashoffset: 320 }}
                  animate={{ strokeDashoffset: 320 - (320 * progress) / 100 }}
                  transition={{ ease: "easeInOut" }}
                  rx="40"
                />
              </svg>
              {/* Inner graphic */}
              <motion.div 
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: progress >= 50 ? 1 : 0, rotate: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="w-8 h-8 border border-[#Bfa37c] rounded-md flex items-center justify-center"
              >
                <div className="w-2 h-2 bg-[#Bfa37c] rounded-full" />
              </motion.div>
            </div>

            {/* Staggered Brand Text Reveal */}
            <div className="flex gap-1.5 mb-2 pointer-events-auto">
              {letters.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  transition={{ delay: index * 0.08, duration: 0.6 }}
                  className="text-2xl sm:text-3xl font-bold font-serif tracking-widest text-[#1C362B]"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Sub-label */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-[10px] uppercase font-bold mb-8 tracking-[0.3em] text-[#4A4A4A]"
            >
              Textile House
            </motion.p>

            {/* Progress Percentage & Bar */}
            <div className="flex flex-col items-center w-48">
              <span className="text-[10px] font-bold tracking-widest text-[#1C362B] mb-2">
                {Math.floor(progress)}%
              </span>
              <div className="w-full h-[2px] bg-[#EBE5F1] overflow-hidden rounded-full">
                <motion.div
                  className="h-full bg-[#1C362B]"
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
