import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const C = {
  primary: '#3F5241',
  primaryDark: '#2C3A2D',
  accent: '#BBA178',
  accentLight: '#FAF5EB',
  bg: '#FAF8F5',
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
        return prev + 4;
      });
    }, 35);

    const timer = setTimeout(() => {
      setStartOut(true);
      if (onStartOut) onStartOut();
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 800);
    }, 1800);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete, onStartOut]);

  return (
    <AnimatePresence>
      {!startOut && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: C.primaryDark }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          {/* Weaving lines background grid effect */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `radial-gradient(ellipse 50% 50% at 50% 50%, ${C.accent} 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />

          {/* Minimalist Rotating Ring representing thread spooling */}
          <div className="relative flex items-center justify-center" style={{ width: 180, height: 180 }}>
            {/* Outermost slow rotating dashed ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute',
                width: 150,
                height: 150,
                borderRadius: '50%',
                border: `1px dashed ${C.accent}`,
                opacity: 0.35,
              }}
            />

            {/* Inner solid thread ring that scales slowly */}
            <motion.div
              animate={{ scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                width: 120,
                height: 120,
                borderRadius: '50%',
                border: `1.5px solid ${C.accent}`,
                opacity: 0.6,
              }}
            />

            {/* Glowing Logo Icon */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              style={{ zIndex: 10 }}
            >
              <svg width="64" height="64" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="44" stroke={C.accent} strokeWidth="2.5" fill="none" />
                <path d="M50 15 L54 38 L76 38 L58 52 L64 75 L50 62 L36 75 L42 52 L24 38 L46 38 Z" 
                  stroke={C.accentLight} strokeWidth="2" 
                  fill={C.accent} fillOpacity="0.2" 
                  strokeLinejoin="round" 
                />
                <text x="50" y="56" fill={C.accentLight} fontSize="17" fontWeight="bold" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" letterSpacing="0.05em">AT</text>
              </svg>
            </motion.div>
          </div>

          {/* Brand Typography */}
          <div className="text-center mt-6 z-10">
            <motion.h1
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 34,
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '0.12em',
                margin: 0,
                textTransform: 'uppercase'
              }}
            >
              ALANKRIT THREADS
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: '0.3em',
                color: C.accentLight,
                textTransform: 'uppercase',
                marginTop: 6,
              }}
            >
              Weaving Heritage & Premium Textiles
            </motion.p>
          </div>

          {/* Sleek Line Thread Loading Progress */}
          <div style={{ width: 220, marginTop: 44, zIndex: 10 }}>
            <div style={{ height: 2, background: 'rgba(255,255,255,0.08)', borderRadius: 2, overflow: 'hidden', position: 'relative' }}>
              <motion.div
                style={{
                  height: '100%',
                  background: `linear-gradient(90deg, ${C.primaryDark}, ${C.accent}, ${C.accentLight})`,
                  width: `${progress}%`,
                }}
                transition={{ ease: 'linear' }}
              />
            </div>
            <div className="flex justify-between mt-2" style={{ fontSize: 9, color: 'rgba(255,255,255,0.35)', fontWeight: 600, letterSpacing: '0.08em' }}>
              <span>WEAVING HERITAGE</span>
              <span>{Math.floor(progress)}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
