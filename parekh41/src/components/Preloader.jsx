import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [phase, setPhase] = useState('loading'); // 'loading' | 'complete' | 'exiting'

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setPhase('complete');
    }, 2000);

    const timer2 = setTimeout(() => {
      setPhase('exiting');
    }, 2700);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <AnimatePresence>
      {phase !== 'exiting' && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: '-100%' }}
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
            background: 'linear-gradient(135deg, #4A1942 0%, #2E1038 50%, #3D1F35 100%)',
            overflow: 'hidden',
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {/* Elegant diamond pattern overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `
              linear-gradient(45deg, rgba(139,94,60,0.03) 25%, transparent 25%),
              linear-gradient(-45deg, rgba(139,94,60,0.03) 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, rgba(139,94,60,0.03) 75%),
              linear-gradient(-45deg, transparent 75%, rgba(139,94,60,0.03) 75%)
            `,
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px',
            pointerEvents: 'none',
          }} />

          {/* Central diamond animation */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            
            <div style={{ position: 'relative', width: 140, height: 140 }}>
              
              {/* Outer rotating diamond */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
                style={{
                  position: 'absolute',
                  width: 140,
                  height: 140,
                  top: 0, left: 0,
                }}
              >
                <svg width="140" height="140" viewBox="0 0 140 140" fill="none">
                  <rect x="70" y="5" width="92" height="92" rx="4" transform="rotate(45 70 5)" stroke="rgba(196,154,108,0.3)" strokeWidth="1" strokeDasharray="8 4" fill="none" />
                </svg>
              </motion.div>

              {/* Inner rotating diamond */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
                style={{
                  position: 'absolute',
                  width: 100,
                  height: 100,
                  top: 20, left: 20,
                }}
              >
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                  <rect x="50" y="5" width="64" height="64" rx="3" transform="rotate(45 50 5)" stroke="rgba(196,154,108,0.5)" strokeWidth="1.5" fill="none" />
                </svg>
              </motion.div>

              {/* Center static diamond with glow */}
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                style={{
                  position: 'absolute',
                  width: 40,
                  height: 40,
                  top: 50, left: 50,
                }}
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect x="20" y="2" width="25" height="25" rx="2" transform="rotate(45 20 2)" fill="rgba(196,154,108,0.25)" stroke="#C49A6C" strokeWidth="1" />
                </svg>
              </motion.div>

              {/* Thread lines crossing */}
              <svg width="140" height="140" viewBox="0 0 140 140" style={{ position: 'absolute', top: 0, left: 0 }}>
                <motion.line
                  x1="0" y1="70" x2="140" y2="70"
                  stroke="#C49A6C" strokeWidth="0.5" opacity="0.4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                />
                <motion.line
                  x1="70" y1="0" x2="70" y2="140"
                  stroke="#C49A6C" strokeWidth="0.5" opacity="0.4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              </svg>
            </div>

            {/* Brand Name */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 34,
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '0.08em',
                lineHeight: 1,
                marginTop: 28,
                textAlign: 'center',
              }}
            >
              THREADORA
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              style={{
                fontSize: 10,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.35em',
                color: '#C49A6C',
                marginTop: 10,
                textAlign: 'center',
              }}
            >
              Textile Retail
            </motion.div>
          </div>

          {/* Elegant Loading bar at bottom */}
          <div style={{
            position: 'absolute',
            bottom: '10%',
            width: 200,
            height: 1.5,
            background: 'rgba(255,255,255,0.06)',
            borderRadius: 2,
            overflow: 'hidden',
          }}>
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                width: '50%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, #C49A6C, transparent)',
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
