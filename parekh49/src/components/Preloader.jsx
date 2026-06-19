import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [phase, setPhase] = useState('loading'); // 'loading' | 'complete' | 'exiting'
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 36);

    const timer1 = setTimeout(() => {
      setPhase('complete');
    }, 2000);

    const timer2 = setTimeout(() => {
      setPhase('exiting');
    }, 2700);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {phase !== 'exiting' && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          onAnimationComplete={() => {
            if (onComplete) onComplete();
          }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#FDF8F4',
            overflow: 'hidden',
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {/* Subtle background pattern */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `radial-gradient(circle at 20% 20%, rgba(139,26,74,0.04) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(196,149,106,0.06) 0%, transparent 50%)`,
            pointerEvents: 'none',
          }} />

          {/* Decorative horizontal lines */}
          {[0.2, 0.4, 0.6, 0.8].map((pos, i) => (
            <motion.div
              key={i}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 0.06 }}
              transition={{ delay: i * 0.1, duration: 1.2, ease: 'easeOut' }}
              style={{
                position: 'absolute',
                top: `${pos * 100}%`,
                left: 0, right: 0,
                height: 1,
                background: '#8B1A4A',
                transformOrigin: 'left',
              }}
            />
          ))}

          {/* Main content */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 2 }}>

            {/* Logo icon - lotus/fabric motif */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              style={{
                width: 80, height: 80,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #8B1A4A 0%, #5E0F30 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 28,
                boxShadow: '0 12px 40px rgba(139,26,74,0.25)',
                position: 'relative',
              }}
            >
              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
                style={{
                  position: 'absolute', inset: -6,
                  borderRadius: '50%',
                  border: '1.5px dashed rgba(196,149,106,0.4)',
                }}
              />
              {/* SVG Lotus/Fabric icon */}
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M18 6 C18 6, 28 12, 28 18 C28 24, 18 30, 18 30 C18 30, 8 24, 8 18 C8 12, 18 6, 18 6Z" fill="rgba(196,149,106,0.3)" stroke="#C4956A" strokeWidth="1.5"/>
                <path d="M18 10 C18 10, 24 14, 24 18 C24 22, 18 26, 18 26 C18 26, 12 22, 12 18 C12 14, 18 10, 18 10Z" fill="rgba(196,149,106,0.5)" stroke="#C4956A" strokeWidth="1"/>
                <circle cx="18" cy="18" r="3" fill="#C4956A"/>
              </svg>
            </motion.div>

            {/* Brand Name */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 32,
                fontWeight: 700,
                color: '#2C1A1A',
                letterSpacing: '0.02em',
                lineHeight: 1.1,
                marginBottom: 8,
                textAlign: 'center',
              }}
            >
              Ananta Fabrics
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              style={{
                fontSize: 11,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.3em',
                color: '#C4956A',
                marginBottom: 36,
                textAlign: 'center',
              }}
            >
              Premium Textile
            </motion.div>

            {/* Elegant thin progress bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              style={{
                width: 200,
                height: 2,
                background: 'rgba(139,26,74,0.1)',
                borderRadius: 4,
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, #8B1A4A, #C4956A)',
                  borderRadius: 4,
                  transition: 'width 0.1s linear',
                }}
              />
            </motion.div>

            {/* Fabric weave dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{ display: 'flex', gap: 6, marginTop: 20 }}
            >
              {[0, 1, 2, 3, 4].map(i => (
                <motion.div
                  key={i}
                  animate={{ scaleY: [1, 2, 1], opacity: [0.3, 1, 0.3] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                    delay: i * 0.1,
                    ease: 'easeInOut',
                  }}
                  style={{
                    width: 3,
                    height: 12,
                    borderRadius: 2,
                    background: '#8B1A4A',
                    opacity: 0.3,
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
