import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Preloader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2500; // Progress takes 2.5s to reach 100%
    const interval = 20; // Update every 20ms
    const step = 100 / (duration / interval);
    
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return Math.min(prev + step, 100);
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: '-100%' }}
      transition={{ delay: 2.6, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#FAF9F6' }}
    >
      {/* Background Decorative Grid lines (Very Subtle) */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#244C73_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          {/* Subtle Decorative Top Line */}
          <div className="w-12 h-[1px] bg-[#C5A880] mb-6 opacity-60" />

          {/* Brand Name in Elegant Serif */}
          <h1
            className="text-3xl sm:text-5xl font-bold tracking-[0.25em] text-[#152E47] mb-3 uppercase"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Urban Fashion
          </h1>
          <h2
            className="text-[12px] sm:text-[14px] tracking-[0.4em] text-[#C5A880] font-bold uppercase mb-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Textile Mall
          </h2>
        </motion.div>

        {/* Progress Bar Container */}
        <div className="w-56 sm:w-64 h-[2px] bg-[#E8E5DC] rounded-full overflow-hidden relative">
          <div
            className="h-full bg-[#244C73] rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage Counter */}
        <span
          className="text-[11px] font-bold text-[#244C73] tracking-[0.15em] mt-3"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          {Math.round(progress)}%
        </span>
      </div>
    </motion.div>
  );
}
