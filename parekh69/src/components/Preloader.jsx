import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 10;
      });
    }, 150);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.05,
        transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }
      }}
      className="fixed inset-0 flex items-center justify-center bg-[#0C2E3A] z-[100] overflow-hidden"
    >
      {/* Background elegant abstract weave lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center px-4 z-10"
      >
        {/* Weaving Threads Geometric Icon */}
        <div className="relative mb-6">
          <svg className="w-14 h-14 text-[#10859F]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <motion.path 
              d="M 10,50 C 30,20 70,80 90,50" 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />
            <motion.path 
              d="M 10,30 C 30,60 70,40 90,70" 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />
            <circle cx="50" cy="50" r="4" fill="#0A5F73" />
          </svg>
        </div>

        <h1 className="font-playfair text-3xl md:text-5xl text-[#E9F2F5] tracking-[0.2em] mb-1 font-bold text-center border-b-0 pb-0 uppercase">
          LoomLine
        </h1>
        <p className="text-[#10859F] font-outfit text-xs md:text-sm tracking-[0.4em] uppercase mb-8 font-semibold">
          retail mall
        </p>
        
        {/* Progress bar container */}
        <div className="w-48 h-[1px] bg-white/10 rounded-full overflow-hidden relative">
          <motion.div
            className="h-full bg-gradient-to-r from-[#10859F] to-[#0A5F73]"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <p className="mt-4 text-[#E9F2F5]/40 font-outfit text-[8px] tracking-[0.25em] uppercase font-bold">
          Interweaving Quality & Innovation
        </p>
      </motion.div>
    </motion.div>
  );
}
