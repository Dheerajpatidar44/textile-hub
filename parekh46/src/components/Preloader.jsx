import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const C = {
  primary: '#111E38',        // Deep Navy Blue
  accent: '#3B82F6',         // Royal Blue
  bg: '#F0F6FA',             // Light sky blue background matching the theme
  cream: '#FFFFFF',
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
      }, 800);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  // Framer motion variants for name reveal animation
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.08,
      }
    }
  };

  const letterVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const titleText = "Zari Bloom";

  return (
    <AnimatePresence>
      {!startOut && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
            y: '-100%',
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${C.bg} 0%, #E6EEF8 100%)` }}
        >
          {/* Subtle elegant rotating background vectors */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              style={{
                width: '500px',
                height: '500px',
                border: '1px dashed rgba(59, 130, 246, 0.15)',
                borderRadius: '50%',
                position: 'absolute'
              }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              style={{
                width: '350px',
                height: '350px',
                border: '1px solid rgba(59, 130, 246, 0.06)',
                borderRadius: '50%',
                position: 'absolute'
              }}
            />
          </div>

          <div className="flex flex-col items-center relative z-10">
            {/* Elegant logo mark animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="w-16 h-16 mb-6 flex items-center justify-center rounded-full shadow-md bg-white border border-[#E2E8F0]"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={C.accent} strokeWidth="1.5">
                <path d="M12 2L2 12l10 10 10-10L12 2z" strokeWidth="2"/>
                <path d="M12 6l-6 6 6 6 6-6-6-6z" stroke={C.primary} strokeWidth="1.5"/>
                <circle cx="12" cy="12" r="1.5" fill={C.accent}/>
              </svg>
            </motion.div>

            {/* Title text character fade-in */}
            <motion.h1
              variants={containerVariants}
              initial="initial"
              animate="animate"
              className="text-[32px] md:text-[38px] font-bold tracking-wide text-[#111E38] m-0 flex justify-center"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {titleText.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  style={{ display: 'inline-block', marginRight: char === ' ' ? '10px' : '0px' }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            {/* Subheading text reveal */}
            <motion.p
              initial={{ opacity: 0, letterSpacing: '0.15em' }}
              animate={{ opacity: 1, letterSpacing: '0.3em' }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-[10px] uppercase font-extrabold mt-3"
              style={{ color: C.accent, fontFamily: "'Inter', sans-serif" }}
            >
              TEXTILE MALL
            </motion.p>

            {/* Modern micro-progress bar extending from center */}
            <div className="w-40 h-[2px] bg-black/5 mt-10 rounded-full overflow-hidden relative">
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
