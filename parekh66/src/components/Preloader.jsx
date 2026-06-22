import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const C = {
  primary: '#6B2D3E',
  primaryDark: '#4A1E2B',
  accent: '#C4706A',
  accentLight: '#E8C4B8',
  bg: '#F8F0EC',
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
    }, 42);

    const timer = setTimeout(() => {
      setStartOut(true);
      if (onStartOut) onStartOut();
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 900);
    }, 2400);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete, onStartOut]);

  return (
    <AnimatePresence>
      {!startOut && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ background: C.primaryDark }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
        >

          {/* Animated fabric stripes background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${(i / 12) * 100}%`,
                  top: 0,
                  bottom: 0,
                  width: `${100 / 12}%`,
                  background: i % 2 === 0 
                    ? `rgba(196,112,106,0.04)` 
                    : `rgba(107,45,62,0.08)`,
                  transformOrigin: 'bottom',
                }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.8, delay: i * 0.04, ease: [0.76, 0, 0.24, 1] }}
              />
            ))}
          </div>

          {/* Radial gradient overlay */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{ background: `radial-gradient(ellipse at center, rgba(196,112,106,0.06) 0%, transparent 70%)` }}
          />

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="relative z-10 flex flex-col items-center"
          >
            {/* Mandala / Logo Icon */}
            <div className="relative mb-8" style={{ width: 110, height: 110 }}>
              {/* Outer rotating ring */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              >
                <svg width="110" height="110" viewBox="0 0 110 110" fill="none">
                  {[...Array(24)].map((_, i) => (
                    <circle
                      key={i}
                      cx={55 + 50 * Math.cos((i / 24) * Math.PI * 2)}
                      cy={55 + 50 * Math.sin((i / 24) * Math.PI * 2)}
                      r="1.5"
                      fill={C.accent}
                      opacity={i % 3 === 0 ? 0.8 : 0.3}
                    />
                  ))}
                </svg>
              </motion.div>

              {/* Progress ring */}
              <svg className="absolute inset-0" width="110" height="110" viewBox="0 0 110 110">
                <circle cx="55" cy="55" r="42" stroke={`rgba(196,112,106,0.15)`} strokeWidth="2" fill="none" />
                <motion.circle
                  cx="55" cy="55" r="42"
                  stroke={C.accent}
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 42}`}
                  strokeDashoffset={`${2 * Math.PI * 42 * (1 - progress / 100)}`}
                  style={{ transformOrigin: '55px 55px', transform: 'rotate(-90deg)' }}
                  transition={{ ease: 'easeInOut' }}
                />
              </svg>

              {/* Center logo motif */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <svg width="48" height="48" viewBox="0 0 100 100" fill="none">
                    <path d="M50 18 L54 40 L76 40 L59 54 L65 76 L50 63 L35 76 L41 54 L24 40 L46 40 Z" 
                      stroke={C.accentLight} strokeWidth="2.5" 
                      fill={C.accent} fillOpacity="0.2" 
                      strokeLinejoin="round" />
                    <circle cx="50" cy="50" r="6" fill={C.accentLight} />
                  </svg>
                </motion.div>
              </div>
            </div>

            {/* Brand Name - fade-in word by word */}
            <div className="flex flex-col items-center gap-1 mb-2">
              <motion.div
                className="flex items-baseline gap-2"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
              >
                <span 
                  style={{ 
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(28px, 6vw, 40px)', 
                    fontWeight: 700, 
                    color: '#FDFAF8', 
                    letterSpacing: '0.04em',
                    textShadow: `0 2px 20px rgba(196,112,106,0.3)`
                  }}
                >
                  Pravaah
                </span>
                <span 
                  style={{ 
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(28px, 6vw, 40px)', 
                    fontWeight: 400,
                    fontStyle: 'italic',
                    color: C.accent,
                    letterSpacing: '0.04em',
                  }}
                >
                  Fabrics
                </span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.65 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                style={{ 
                  fontSize: 10, 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.28em', 
                  color: C.accentLight,
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  margin: 0,
                }}
              >
                Premium Textile House
              </motion.p>
            </div>

            {/* Thin animated divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
              style={{ 
                width: 120, height: 1.5, 
                background: `linear-gradient(90deg, transparent, ${C.accent}, transparent)`,
                margin: '16px 0 20px',
                transformOrigin: 'center',
              }}
            />

            {/* Progress bar */}
            <div style={{ width: 180, position: 'relative' }}>
              <div style={{ height: 2, background: 'rgba(232,196,184,0.15)', borderRadius: 2, overflow: 'hidden' }}>
                <motion.div
                  style={{ 
                    height: '100%', 
                    background: `linear-gradient(90deg, ${C.accent}, ${C.accentLight})`,
                    borderRadius: 2,
                    width: `${progress}%`,
                    transition: 'width 0.1s ease',
                  }}
                />
              </div>
              <div className="flex justify-between mt-2">
                <span style={{ fontSize: 10, color: 'rgba(232,196,184,0.5)', fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>Loading</span>
                <span style={{ fontSize: 10, color: C.accent, fontWeight: 700, fontFamily: "'DM Sans', sans-serif" }}>{Math.floor(progress)}%</span>
              </div>
            </div>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
