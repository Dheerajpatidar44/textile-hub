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
      style={{ background: '#0A0A0C' }}
    >
      {/* Background Decorative Grid lines (Very Subtle) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#C89B5F_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Large Blurred Watermark Text in Background */}
      <div 
        className="absolute select-none pointer-events-none opacity-[0.04] text-[10vw] sm:text-[8vw] font-bold tracking-[0.15em] text-[#C89B5F] blur-[2.5px] whitespace-nowrap uppercase z-0"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        SWASTIK TEXTILE MALL
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          {/* Logo container */}
          <div className="mb-6 w-16 h-16 flex items-center justify-center text-[#C89B5F]">
            <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" y="5" width="90" height="90" stroke="currentColor" strokeWidth="2" />
              <rect x="12" y="12" width="76" height="76" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3,3" className="opacity-70" />
              <path d="M 50 22 L 50 78 M 22 50 L 78 50" strokeWidth="3" />
              <path d="M 50 22 L 78 22" strokeWidth="3" />
              <path d="M 78 50 L 78 78" strokeWidth="3" />
              <path d="M 50 78 L 22 78" strokeWidth="3" />
              <path d="M 22 50 L 22 22" strokeWidth="3" />
              <circle cx="36" cy="36" r="2.5" fill="currentColor" stroke="none" />
              <circle cx="64" cy="36" r="2.5" fill="currentColor" stroke="none" />
              <circle cx="64" cy="64" r="2.5" fill="currentColor" stroke="none" />
              <circle cx="36" cy="64" r="2.5" fill="currentColor" stroke="none" />
            </svg>
          </div>

          {/* Brand Name in Elegant Serif */}
          <h1
            className="text-3xl sm:text-4xl font-bold tracking-[0.15em] text-[#F3F4F6] mb-3 uppercase"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Swastik Textile Mall
          </h1>
          <h2
            className="text-[10px] sm:text-[11px] tracking-[0.3em] text-[#C89B5F] font-bold uppercase mb-8"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Tradition · Elegance · Excellence
          </h2>
        </motion.div>

        {/* Progress Bar Container */}
        <div className="w-56 sm:w-64 h-[2px] bg-[#24252F] overflow-hidden relative">
          <div
            className="h-full bg-[#C89B5F]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage Counter */}
        <span
          className="text-[11px] font-bold text-[#C89B5F] tracking-[0.15em] mt-3"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {Math.round(progress)}%
        </span>
      </div>
    </motion.div>
  );
}
