import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const C = {
  primary: '#D28D7A',
  accent: '#E5A391',
  bg: '#FAF8F5',
  text: '#4A3B36',
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

  const titleText = "KAAYA FABRICS";

  return (
    <AnimatePresence>
      {!startOut && (
          <motion.div
            className="fixed inset-0 z-[9999] flex flex-col justify-center items-center pointer-events-none"
          >
            {/* Split Screen Background */}
            <motion.div
              initial={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="absolute top-0 bottom-0 left-0 z-0 pointer-events-auto"
              style={{ width: '50.1%', background: '#3A2A25' }}
            />
            <motion.div
              initial={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="absolute top-0 bottom-0 right-0 z-0 pointer-events-auto"
              style={{ width: '50.1%', background: '#3A2A25' }}
            />

            <motion.div 
              exit={{ opacity: 0, y: -40, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col items-center relative z-10 text-center px-4 pointer-events-auto"
            >
              {/* Minimal ambient background glow */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-30 blur-[100px] pointer-events-none z-[-1]"
                style={{ background: `radial-gradient(circle, ${C.primary} 0%, transparent 70%)` }}
              />

            {/* Elegant fading ring effect */}
            <div className="relative w-16 h-16 mb-8 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [0.8, 1.2, 0.8], opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-12 h-12 border-2 border-solid rounded-full"
                style={{ borderColor: C.primary }}
              />
              <motion.div
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: [1.2, 0.8, 1.2], opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute w-12 h-12 border-2 border-solid rounded-full"
                style={{ borderColor: C.accent }}
              />
            </div>

            {/* Title text reveal */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-2xl sm:text-3xl font-bold mb-3 font-serif tracking-widest"
              style={{ color: '#E4B5A5' }}
            >
              {titleText}
            </motion.h1>

            {/* Sub-label */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-[10px] uppercase tracking-[0.3em] font-medium mb-8"
              style={{ color: '#FAF8F5' }}
            >
              Premium Quality Textiles
            </motion.p>

            {/* Loader bar */}
            <div className="w-48 h-[2px] rounded-full overflow-hidden relative" style={{ background: 'rgba(255,255,255,0.1)' }}>
              <motion.div
                className="h-full absolute left-0 top-0 transition-all duration-100"
                style={{
                  background: C.primary,
                  width: `${progress}%`
                }}
              />
            </div>
            </motion.div>
          </motion.div>
      )}
    </AnimatePresence>
  );
}
