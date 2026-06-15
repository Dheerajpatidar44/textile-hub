import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BRAND_NAME = "Ethnic Elegance";

// Split name into words for staggered animation
const words = BRAND_NAME.split(' ');

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [, setPhase] = useState('intro'); // 'intro' | 'running' | 'done'

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
      style={{ background: '#FAF6F0', fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#721C2B 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />

      {/* Decorative corner lines */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 opacity-30" style={{ borderColor: '#721C2B' }} />
      <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 opacity-30" style={{ borderColor: '#721C2B' }} />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 opacity-30" style={{ borderColor: '#721C2B' }} />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 opacity-30" style={{ borderColor: '#721C2B' }} />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6">

        {/* Decorative top line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-16 h-[1.5px] mb-8 rounded-full"
          style={{ background: 'linear-gradient(90deg, transparent, #CDA75E, transparent)' }}
        />

        {/* Brand Logo/Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
          style={{ background: 'linear-gradient(135deg, #721C2B, #4A0E17)', border: '1px solid rgba(205,167,94,0.3)' }}
        >
          <svg viewBox="0 0 100 100" className="w-9 h-9 text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 35 C20 35, 50 20, 80 35 L80 55 C80 70, 65 80, 50 80 C35 80, 20 70, 20 55 Z"
              stroke="currentColor" strokeWidth="4" fill="none" strokeLinejoin="round" />
            <path d="M30 45 L50 55 L70 45" stroke="#CDA75E" strokeWidth="3" strokeLinecap="round" />
            <circle cx="50" cy="55" r="5" fill="#CDA75E" />
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
                className="inline-block text-3xl sm:text-5xl font-black tracking-[0.08em] text-[#330A10] uppercase leading-tight serif-title"
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
          style={{ color: '#CDA75E' }}
        >
          Premium · Textiles · Since Generations
        </motion.p>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="w-44 h-[1.5px] mb-5 rounded-full"
          style={{ background: 'linear-gradient(90deg, transparent, #721C2B, transparent)' }}
        />

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="w-52 sm:w-64"
        >
          <div className="w-full h-[3px] rounded-full overflow-hidden mb-2" style={{ background: '#E6D8C5' }}>
            <div
              className="h-full rounded-full transition-all duration-100"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #721C2B, #CDA75E)'
              }}
            />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: '#CDA75E' }}>
              Loading
            </span>
            <span className="text-[11px] font-black" style={{ color: '#721C2B' }}>
              {Math.round(progress)}%
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
