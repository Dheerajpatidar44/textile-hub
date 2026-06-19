import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [phase, setPhase] = useState('loading');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) { clearInterval(interval); return 100; }
        return prev + 2;
      });
    }, 36);

    const timer1 = setTimeout(() => setPhase('complete'), 2000);
    const timer2 = setTimeout(() => setPhase('exiting'), 2700);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearInterval(interval);
    };
  }, []);

  const rings = [68, 52, 36];

  return (
    <AnimatePresence>
      {phase !== 'exiting' && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          onAnimationComplete={() => { if (onComplete) onComplete(); }}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            background: '#1b3252',
            overflow: 'hidden',
            fontFamily: "'Outfit', sans-serif",
          }}
        >
          {/* Background pattern */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(176,142,91,0.06) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(255,255,255,0.03) 0%, transparent 50%)`,
            pointerEvents: 'none',
          }} />

          {/* Subtle grid lines */}
          {[0.25, 0.5, 0.75].map((pos, i) => (
            <motion.div
              key={i}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 0.05 }}
              transition={{ delay: i * 0.08, duration: 1.4, ease: 'easeOut' }}
              style={{
                position: 'absolute',
                top: `${pos * 100}%`,
                left: 0, right: 0, height: 1,
                background: 'rgba(176,142,91,0.6)',
                transformOrigin: 'left',
              }}
            />
          ))}

          {/* Center content */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 2 }}>

            {/* Concentric rotating rings with diamond logo */}
            <div style={{ position: 'relative', width: 100, height: 100, marginBottom: 32 }}>
              {rings.map((size, i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                  transition={{ repeat: Infinity, duration: 6 + i * 2, ease: 'linear' }}
                  style={{
                    position: 'absolute',
                    top: `${(100 - size) / 2}%`,
                    left: `${(100 - size) / 2}%`,
                    width: size, height: size,
                    borderRadius: '50%',
                    border: `1.5px ${i === 0 ? 'solid' : i === 1 ? 'dashed' : 'dotted'} rgba(176,142,91,${0.6 - i * 0.15})`,
                  }}
                />
              ))}

              {/* Center diamond logo */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
                style={{
                  position: 'absolute',
                  top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 42, height: 42,
                  borderRadius: 8,
                  background: 'rgba(176,142,91,0.15)',
                  border: '1.5px solid rgba(176,142,91,0.5)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <svg width="22" height="22" viewBox="0 0 26 26" fill="none">
                  <path d="M13 3 L22 9 L22 17 L13 23 L4 17 L4 9 Z" stroke="#b08e5b" strokeWidth="1.5" fill="rgba(176,142,91,0.2)"/>
                  <path d="M13 7 L18 10.5 L18 15.5 L13 19 L8 15.5 L8 10.5 Z" stroke="#b08e5b" strokeWidth="1" fill="rgba(176,142,91,0.3)"/>
                  <circle cx="13" cy="13" r="2.5" fill="#b08e5b"/>
                </svg>
              </motion.div>
            </div>

            {/* Brand Name */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              style={{ textAlign: 'center', marginBottom: 4 }}
            >
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 28,
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '0.06em',
                lineHeight: 1.1,
              }}>
                RUHANI WEAVES
              </div>
              <div style={{
                fontSize: 10,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.35em',
                color: '#b08e5b',
                marginTop: 6,
              }}>
                TEXTILE MALL
              </div>
            </motion.div>

            {/* Gold separator line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 80, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              style={{ height: 1, background: 'linear-gradient(90deg, transparent, #b08e5b, transparent)', margin: '16px auto' }}
            />

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{ width: 180, height: 2, background: 'rgba(255,255,255,0.08)', borderRadius: 4, overflow: 'hidden' }}
            >
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, #b08e5b, #d4b07a)',
                  borderRadius: 4,
                  transition: 'width 0.1s linear',
                }}
              />
            </motion.div>

            {/* Weave bar animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{ display: 'flex', gap: 5, marginTop: 18, alignItems: 'center' }}
            >
              {[0, 1, 2, 3, 4, 3, 2, 1, 0].map((h, i) => (
                <motion.div
                  key={i}
                  animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.4, 1, 0.4] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.2,
                    delay: i * 0.08,
                    ease: 'easeInOut',
                  }}
                  style={{
                    width: 2.5,
                    height: 8 + h * 3,
                    borderRadius: 2,
                    background: i % 2 === 0 ? '#b08e5b' : 'rgba(255,255,255,0.35)',
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
