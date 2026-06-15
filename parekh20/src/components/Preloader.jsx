import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BRAND_NAME = "Grand Textile Mart";

// Split name into words for staggered animation
const words = BRAND_NAME.split(' ');

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('intro'); // 'intro' | 'running' | 'done'

  useEffect(() => {
    // Phase 1: Show brand name animation (0 - 800ms)
    const introTimer = setTimeout(() => setPhase('running'), 800);

    // Phase 2: Progress bar runs from 800ms to 3200ms
    const duration = 2200;
    const interval = 18;
    const step = 100 / (duration / interval);

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return Math.min(prev + step, 100);
      });
    }, interval);

    return () => {
      clearTimeout(introTimer);
      clearInterval(progressTimer);
    };
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: '-100%' }}
      transition={{ delay: 3.0, duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#F8F5EF', fontFamily: "'Outfit', sans-serif" }}
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#5F6F5E 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />

      {/* Decorative corner lines */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 opacity-30" style={{ borderColor: '#5F6F5E' }} />
      <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 opacity-30" style={{ borderColor: '#5F6F5E' }} />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 opacity-30" style={{ borderColor: '#5F6F5E' }} />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 opacity-30" style={{ borderColor: '#5F6F5E' }} />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6">

        {/* Decorative top line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-16 h-[1.5px] mb-8 rounded-full"
          style={{ background: 'linear-gradient(90deg, transparent, #C5A880, transparent)' }}
        />

        {/* Brand Logo/Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
          style={{ background: 'linear-gradient(135deg, #5F6F5E, #3B4A32)', border: '1px solid rgba(197,168,128,0.3)' }}
        >
          <svg viewBox="0 0 100 100" className="w-9 h-9 text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 35 C20 35, 50 20, 80 35 L80 55 C80 70, 65 80, 50 80 C35 80, 20 70, 20 55 Z"
              stroke="currentColor" strokeWidth="4" fill="none" strokeLinejoin="round" />
            <path d="M30 45 L50 55 L70 45" stroke="#C5A880" strokeWidth="3" strokeLinecap="round" />
            <circle cx="50" cy="55" r="5" fill="#C5A880" />
          </svg>
        </motion.div>

        {/* Brand Name - Word by word animation */}
        <div className="flex flex-row flex-wrap justify-center gap-3 mb-2">
          {words.map((word, wIdx) => (
            <motion.div
              key={wIdx}
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                duration: 0.6,
                delay: 0.2 + wIdx * 0.18,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="overflow-hidden"
            >
              <span
                className="inline-block text-3xl sm:text-5xl font-black tracking-[0.08em] text-[#2A3325] uppercase leading-tight"
              >
                {word}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-[11px] tracking-[0.35em] uppercase font-bold mb-8"
          style={{ color: '#C5A880' }}
        >
          Premium · Textiles · Since Generations
        </motion.p>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="w-44 h-[1.5px] mb-5 rounded-full"
          style={{ background: 'linear-gradient(90deg, transparent, #5F6F5E, transparent)' }}
        />

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="w-52 sm:w-64"
        >
          <div className="w-full h-[3px] rounded-full overflow-hidden mb-2" style={{ background: '#E2D9CC' }}>
            <div
              className="h-full rounded-full transition-all duration-100"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #5F6F5E, #C5A880)'
              }}
            />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: '#8A9E7E' }}>
              Loading
            </span>
            <span className="text-[11px] font-black" style={{ color: '#5F6F5E' }}>
              {Math.round(progress)}%
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
