import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [phase, setPhase] = useState('loading'); // 'loading' | 'complete' | 'exiting'

  useEffect(() => {
    // Elegant loading delay
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
            background: '#0a1c3a',
            overflow: 'hidden',
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {/* Subtle grid pattern overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                rgba(210, 114, 101, 0.02) 0px, rgba(210, 114, 101, 0.02) 1px,
                transparent 1px, transparent 40px
              ),
              repeating-linear-gradient(
                90deg,
                rgba(210, 114, 101, 0.02) 0px, rgba(210, 114, 101, 0.02) 1px,
                transparent 1px, transparent 40px
              )
            `,
            pointerEvents: 'none',
          }} />

          {/* Spinning Circles + Website Name */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            
            {/* Circles wrapper — centered on screen */}
            <div style={{ position: 'relative', width: 170, height: 170 }}>
              
              {/* Outer spinning ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
                style={{
                  position: 'absolute',
                  width: 170,
                  height: 170,
                  borderRadius: '50%',
                  border: '1.5px solid rgba(255, 255, 255, 0.05)',
                  borderTopColor: 'rgba(210, 114, 101, 0.5)',
                  borderBottomColor: 'rgba(210, 114, 101, 0.5)',
                  top: 0, left: 0,
                }}
              />

              {/* Inner dashed ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'linear' }}
                style={{
                  position: 'absolute',
                  width: 130,
                  height: 130,
                  borderRadius: '50%',
                  border: '1px dashed rgba(210, 114, 101, 0.3)',
                  top: 20, left: 20,
                }}
              />
            </div>

            {/* Brand Name — below circles */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 32,
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '0.04em',
                lineHeight: 1,
                marginTop: 24,
                textAlign: 'center',
              }}
            >
              LOOMERA
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
                color: '#ebdcd8',
                marginTop: 10,
                textAlign: 'center',
              }}
            >
              Textile Retail
            </motion.div>
          </div>

          {/* Elegant Loading Thread Line */}
          <div style={{
            position: 'absolute',
            bottom: '10%',
            width: 180,
            height: 2,
            background: 'rgba(255,255,255,0.08)',
            borderRadius: 2,
            overflow: 'hidden',
          }}>
            <motion.div
              initial={{ left: '-100%' }}
              animate={{ left: '100%' }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                width: '60%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, #d27265, transparent)',
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
