import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const C = {
  primary: '#0D3E3C',        // Elegant Deep Teal
  accent: '#A75D3F',         // Terracotta/Copper
  bg: '#FAF8F5',             // Warm Sand/Off-white
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
    }, 50);

    const timer = setTimeout(() => {
      setStartOut(true);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 700);
    }, 1800);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  const brandText = "RIWAAYAT HUB";

  return (
    <AnimatePresence>
      {!startOut && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: C.bg }}
        >
          {/* Subtle luxurious background canvas */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
            backgroundImage: `radial-gradient(${C.primary} 1.5px, transparent 1.5px)`,
            backgroundSize: '32px 32px'
          }} />

          {/* Glowing central halo */}
          <div 
            className="absolute w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none opacity-20"
            style={{ background: `radial-gradient(circle, ${C.accent} 0%, transparent 70%)` }}
          />

          <div className="flex flex-col items-center relative z-10">
            {/* Elegant Serif Text Reveal */}
            <div className="overflow-hidden flex items-center justify-center py-2">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '40px',
                  fontWeight: 500,
                  color: C.primary,
                  letterSpacing: '0.18em',
                  margin: 0,
                  lineHeight: 1.2
                }}
              >
                RIWAAYAT
              </motion.h1>
            </div>

            {/* Subtext sliding fade */}
            <motion.div
              initial={{ opacity: 0, letterSpacing: '0.1em' }}
              animate={{ opacity: 1, letterSpacing: '0.4em' }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '10px',
                fontWeight: 700,
                color: C.accent,
                textTransform: 'uppercase',
                marginTop: '8px',
                marginLeft: '4px',
              }}
            >
              PREMIUM TEXTILES
            </motion.div>

            {/* Progress line */}
            <div className="w-48 h-[1.5px] bg-[#E5ECE9] mt-10 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full absolute left-0 top-0"
                style={{
                  background: `linear-gradient(90deg, ${C.primary}, ${C.accent})`,
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
