import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [phase, setPhase] = useState('loading'); // 'loading' | 'complete' | 'exiting'
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar loader
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2.5;
      });
    }, 28);

    const timer1 = setTimeout(() => {
      setPhase('complete');
    }, 1800);

    const timer2 = setTimeout(() => {
      setPhase('exiting');
    }, 2400);

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
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
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
            background: '#231F20', // New dark background for dramatic feel
            overflow: 'hidden',
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {/* Subtle gold line pattern overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `radial-gradient(circle at 30% 30%, rgba(163,112,76,0.08) 0%, transparent 60%),
              radial-gradient(circle at 70% 70%, rgba(163,112,76,0.05) 0%, transparent 60%)`,
            pointerEvents: 'none',
          }} />

          {/* Golden abstract weaving animation in center */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 2 }}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              style={{
                width: 100, height: 100,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 24,
                position: 'relative',
              }}
            >
              {/* Outer weaving thread ring 1 */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
                style={{
                  position: 'absolute', inset: 0,
                  borderRadius: '50%',
                  border: '1.5px dashed rgba(163,112,76,0.3)',
                }}
              />
              {/* Inner weaving thread ring 2 */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
                style={{
                  position: 'absolute', inset: 12,
                  borderRadius: '50%',
                  border: '1px dotted rgba(163,112,76,0.5)',
                }}
              />
              {/* Central Geometric Icon */}
              <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="12" stroke="#A3704C" strokeWidth="1.5" fill="none"/>
                <path d="M14 4 C14 4, 22 10, 22 14 C22 18, 14 24, 14 24 C14 24, 6 18, 6 14 C6 10, 14 4, 14 4Z" fill="rgba(163,112,76,0.2)" stroke="#A3704C" strokeWidth="1"/>
                <circle cx="14" cy="14" r="3" fill="#A3704C"/>
              </svg>
            </motion.div>

            {/* Brand Title (glowing gold) */}
            <motion.div
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 28,
                fontWeight: 700,
                color: '#FAF8F5',
                letterSpacing: '0.04em',
                lineHeight: 1.1,
                marginBottom: 6,
                textAlign: 'center',
              }}
            >
              LoomCraft India
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              style={{
                fontSize: 10,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.3em',
                color: '#A3704C',
                marginBottom: 32,
                textAlign: 'center',
              }}
            >
              Textiles of India
            </motion.div>

            {/* Minimal thin loading progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 0.4 }}
              style={{
                width: 140,
                height: 1.5,
                background: 'rgba(250, 248, 245, 0.1)',
                borderRadius: 2,
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                style={{
                  height: '100%',
                  background: '#A3704C',
                  borderRadius: 2,
                  transition: 'width 0.08s linear',
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
