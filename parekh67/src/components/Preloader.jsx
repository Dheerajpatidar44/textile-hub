import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const C = {
  primary: '#0b3329',
  primaryDark: '#062c22',
  accent: '#bca374',
  accentLight: '#f2ece1',
  bg: '#fcf8f2',
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
        return prev + 5;
      });
    }, 45);

    const timer = setTimeout(() => {
      setStartOut(true);
      if (onStartOut) onStartOut();
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 800);
    }, 2000);

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
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          {/* Animated Background Ornaments */}
          <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              style={{
                width: '60vw',
                height: '60vw',
                borderRadius: '50%',
                border: `1.5px dashed ${C.accent}`,
              }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute',
                width: '45vw',
                height: '45vw',
                borderRadius: '50%',
                border: `1px solid ${C.accent}`,
                opacity: 0.5,
              }}
            />
          </div>

          {/* Luxury Ripple Rings */}
          <div className="relative flex items-center justify-center" style={{ width: 160, height: 160 }}>
            <motion.div
              style={{
                position: 'absolute',
                width: 120,
                height: 120,
                borderRadius: '50%',
                border: `1.5px solid ${C.accent}`,
              }}
              animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.1, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              style={{
                position: 'absolute',
                width: 90,
                height: 90,
                borderRadius: '50%',
                border: `1px solid ${C.accent}`,
              }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.2, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
            />

            {/* Glowing Logo Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              style={{ zIndex: 10 }}
            >
              <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="44" stroke={C.accent} strokeWidth="3" fill="none" />
                <path d="M50 15 L54 38 L76 38 L58 52 L64 75 L50 62 L36 75 L42 52 L24 38 L46 38 Z" 
                  stroke={C.accentLight} strokeWidth="2.5" 
                  fill={C.accent} fillOpacity="0.25" 
                  strokeLinejoin="round" 
                />
                <text x="50" y="56" fill={C.accentLight} fontSize="18" fontWeight="bold" textAnchor="middle" fontFamily="'Cormorant Garamond', serif">ZH</text>
              </svg>
            </motion.div>
          </div>

          {/* Typography Branding */}
          <div className="text-center mt-6 z-10">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 32,
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '0.08em',
                margin: 0,
              }}
            >
              ZARIYA HOUSE
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: '0.3em',
                color: C.accentLight,
                textTransform: 'uppercase',
                marginTop: 4,
              }}
            >
              Heritage & Premium Fabrics
            </motion.p>
          </div>

          {/* Minimalist Linear Progress Bar */}
          <div style={{ width: 200, marginTop: 40, zIndex: 10 }}>
            <div style={{ height: 2, background: 'rgba(255,255,255,0.1)', borderRadius: 2, overflow: 'hidden' }}>
              <motion.div
                style={{
                  height: '100%',
                  background: C.accent,
                  width: `${progress}%`,
                }}
                transition={{ ease: 'linear' }}
              />
            </div>
            <div className="flex justify-between mt-2" style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)', fontWeight: 600, letterSpacing: '0.05em' }}>
              <span>LOADING COLLECTIONS</span>
              <span>{Math.floor(progress)}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
