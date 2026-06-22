import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const C = {
  primary: '#5E3B43',       // Burgundy
  gold: '#D4B26F',          // Gold
  cream: '#FAF6F6',
  stone: '#6E6466',
};

export default function Preloader({ onComplete, onStartOut }) {
  const [startOut, setStartOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress counter
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 4;
      });
    }, 30);

    const timer = setTimeout(() => {
      setStartOut(true);
      if (onStartOut) onStartOut();
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 900); // Wait for the slide up transition to complete
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete, onStartOut]);

  const letters = "NAVYA WEAVES".split("");

  return (
    <AnimatePresence>
      {!startOut && (
        <motion.div 
          className="fixed inset-0 z-[9999] overflow-hidden flex flex-col items-center justify-center bg-transparent"
        >
          {/* Alternating Shutter Panels (Opening in pieces) */}
          <div className="absolute inset-0 z-0 flex pointer-events-none overflow-hidden">
            {/* Column 1 */}
            <motion.div
              initial={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
              className="h-full w-1/4 bg-[#5E3B43] border-r border-[#5E3B43]"
            />
            {/* Column 2 */}
            <motion.div
              initial={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
              className="h-full w-1/4 bg-[#5E3B43] border-r border-[#5E3B43]"
            />
            {/* Column 3 */}
            <motion.div
              initial={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
              className="h-full w-1/4 bg-[#5E3B43] border-r border-[#5E3B43]"
            />
            {/* Column 4 */}
            <motion.div
              initial={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
              className="h-full w-1/4 bg-[#5E3B43]"
            />
          </div>

          {/* Subtle background luxury texture */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-10" 
            style={{ 
              backgroundImage: `radial-gradient(${C.gold} 1px, transparent 1px)`, 
              backgroundSize: '24px 24px' 
            }} 
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: -30 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="relative z-20 flex flex-col items-center pointer-events-none"
          >
            {/* Elegant luxury circular progress ring around motif */}
            <div className="mb-8 relative w-24 h-24 flex items-center justify-center">
              <svg width="90" height="90" viewBox="0 0 100 100" className="absolute rotate-[-90deg]">
                <circle
                  cx="50" cy="50" r="44"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="2"
                  fill="transparent"
                />
                <motion.circle
                  cx="50" cy="50" r="44"
                  stroke={C.gold}
                  strokeWidth="2"
                  fill="transparent"
                  strokeDasharray="276.4"
                  strokeDashoffset={276.4 - (276.4 * progress) / 100}
                  transition={{ ease: "easeInOut" }}
                />
              </svg>
              {/* Luxury Loom Weave Golden Motif */}
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-12 h-12 flex items-center justify-center"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={C.gold} strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
            </div>

            {/* Premium letters animate */}
            <div className="flex justify-center gap-1.5 mb-2 pointer-events-auto px-4">
              {letters.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 15, filter: 'blur(3px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ delay: index * 0.04, duration: 0.5, ease: "easeOut" }}
                  className="text-3xl sm:text-5xl font-bold font-serif tracking-wider text-white"
                  style={{ textShadow: '0 2px 10px rgba(0,0,0,0.15)' }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>

            {/* Sub-label */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.65 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-[10px] uppercase font-bold mb-8 tracking-[0.3em] text-[#FAF6F6]"
            >
              Premium Textile House
            </motion.p>

            {/* Elegant loading percentage number */}
            <div className="flex flex-col items-center">
              <span className="text-[11px] font-bold tracking-widest text-[#FAF6F6] opacity-80">
                {Math.floor(progress)}%
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
