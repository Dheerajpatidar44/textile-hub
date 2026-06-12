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
      style={{ background: '#1C032B' }} // Deep Plum Black
    >
      {/* Background Decorative Grid lines */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#C5A059_1.5px,transparent_1.5px)] [background-size:32px_32px]" />

      {/* Large Blurred Watermark Text in Background */}
      <div 
        className="absolute select-none pointer-events-none opacity-[0.03] text-[9vw] sm:text-[7vw] font-bold tracking-[0.2em] text-[#C5A059] blur-[2px] whitespace-nowrap uppercase z-0"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        MAYURA ROYAL
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          {/* Logo container (Peacock theme SVG) */}
          <div className="mb-8 w-20 h-20 flex items-center justify-center text-[#C5A059]">
            <svg viewBox="0 0 100 100" className="w-20 h-20 fabric-wave" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3,3" className="opacity-50" />
              <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1.2" />
              
              {/* Peacock body silhouette */}
              <path d="M50 22 C43 22 41 32 41 39 C41 46 45 53 50 53 C55 53 59 46 59 39 C59 32 57 22 50 22 Z" strokeWidth="1.8" fill="currentColor" fillOpacity="0.08" />
              <path d="M50 22 C50 16 47 11 50 9 C53 11 50 16 50 22" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="50" cy="8" r="1.5" fill="currentColor" />
              
              {/* Royal peacock feathers */}
              <path d="M33 66 C23 60 18 47 33 47 C40 47 43 58 33 66 Z" strokeWidth="1" fill="currentColor" fillOpacity="0.05" />
              <path d="M67 66 C77 60 82 47 67 47 C60 47 57 58 67 66 Z" strokeWidth="1" fill="currentColor" fillOpacity="0.05" />
              <path d="M50 53 C44 68 32 78 50 90 C68 78 56 68 50 53 Z" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05" />
              
              <circle cx="50" cy="74" r="2.5" fill="currentColor" />
              <circle cx="32" cy="55" r="1.5" fill="currentColor" />
              <circle cx="68" cy="55" r="1.5" fill="currentColor" />
            </svg>
          </div>

          {/* Brand Name in Elegant Serif */}
          <h1
            className="text-3xl sm:text-4xl font-bold tracking-[0.2em] text-[#FAF6F0] mb-3 uppercase"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Mayura Royal
          </h1>
          <h2
            className="text-[10px] sm:text-[11px] tracking-[0.35em] text-[#C5A059] font-bold uppercase mb-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Tradition · Luxury · Royalty
          </h2>
        </motion.div>

        {/* Progress Bar Container */}
        <div className="w-56 sm:w-64 h-[2px] bg-[rgba(255,255,255,0.08)] overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-[#C5A059] to-[#D4AF37]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage Counter */}
        <span
          className="text-[11px] font-bold text-[#C5A059] tracking-[0.2em] mt-3"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          {Math.round(progress)}%
        </span>
      </div>
    </motion.div>
  );
}
