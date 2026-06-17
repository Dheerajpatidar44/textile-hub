import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [phase, setPhase] = useState('loading'); // 'loading' | 'exiting'

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase('exiting'), 2800);
    return () => clearTimeout(timer1);
  }, []);

  return (
    <AnimatePresence>
      {phase !== 'exiting' && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          onAnimationComplete={() => { if (onComplete) onComplete(); }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#0F1E2D',
            overflow: 'hidden',
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {/* Animated background rings */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.12, 0.05] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              width: 420, height: 420, borderRadius: '50%',
              border: '1px solid rgba(201,164,85,0.25)',
              pointerEvents: 'none',
            }}
          />
          <motion.div
            animate={{ scale: [1.15, 1, 1.15], opacity: [0.08, 0.18, 0.08] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            style={{
              position: 'absolute',
              width: 280, height: 280, borderRadius: '50%',
              border: '1px solid rgba(201,164,85,0.4)',
              pointerEvents: 'none',
            }}
          />

          {/* Central Content */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 10 }}>
            {/* Hexagon Logo */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              style={{ marginBottom: 28 }}
            >
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <motion.polygon
                  points="32,4 58,18 58,46 32,60 6,46 6,18"
                  stroke="#C9A455"
                  strokeWidth="1.5"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, ease: 'easeInOut' }}
                />
                <motion.polygon
                  points="32,14 50,24 50,40 32,50 14,40 14,24"
                  fill="rgba(201,164,85,0.12)"
                  stroke="rgba(201,164,85,0.4)"
                  strokeWidth="1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                />
                <motion.circle
                  cx="32" cy="32" r="6"
                  fill="#C9A455"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.0, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                />
              </svg>
            </motion.div>

            {/* Brand Name Letter Animation */}
            <div style={{ display: 'flex', gap: 3, marginBottom: 10 }}>
              {'WEAVORA'.split('').map((letter, idx) => (
                <motion.span
                  key={idx}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.5 + idx * 0.08,
                    duration: 0.5,
                    ease: [0.215, 0.61, 0.355, 1]
                  }}
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 34,
                    fontWeight: 700,
                    color: '#ffffff',
                    letterSpacing: '0.1em',
                    lineHeight: 1,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, letterSpacing: '0.1em' }}
              animate={{ opacity: 0.7, letterSpacing: '0.3em' }}
              transition={{ delay: 1.2, duration: 0.8 }}
              style={{
                fontSize: 9,
                fontWeight: 600,
                textTransform: 'uppercase',
                color: '#C9A455',
                marginBottom: 36,
              }}
            >
              Textile Mall
            </motion.div>

            {/* Gold loading bar */}
            <div style={{
              width: 160, height: 2,
              background: 'rgba(255,255,255,0.06)',
              borderRadius: 2, overflow: 'hidden',
            }}>
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2.5, ease: 'linear' }}
                style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, #C9A455, #F0E4C2, #C9A455)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 1.5s linear infinite',
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
