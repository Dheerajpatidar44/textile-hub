import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [phase, setPhase] = useState('loading'); // 'loading' | 'complete' | 'exiting'

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setPhase('complete');
    }, 2200);

    const timer2 = setTimeout(() => {
      setPhase('exiting');
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const brandName = "AAVANIKA";

  return (
    <AnimatePresence>
      {phase !== 'exiting' && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
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
            background: '#3b2314', // Rich luxury dark chocolate
            overflow: 'hidden',
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {/* Subtle grid pattern overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(rgba(168, 124, 94, 0.08) 1.5px, transparent 1.5px)',
            backgroundSize: '30px 30px',
            pointerEvents: 'none',
          }} />

          {/* Central Logo & Thread Animation Container */}
          <div className="flex flex-col items-center relative">
            {/* SVG Weaving Needle & Golden Thread Path */}
            <div className="relative w-36 h-28 mb-4 flex items-center justify-center">
              <svg width="150" height="100" viewBox="0 0 150 100" fill="none" className="overflow-visible">
                {/* Horizontal weaving baseline */}
                <line x1="10" y1="50" x2="140" y2="50" stroke="rgba(168, 124, 94, 0.2)" strokeWidth="1" />
                
                {/* Sine wave representing the thread being sewn */}
                <motion.path
                  d="M 10 50 Q 30 20, 50 50 T 90 50 T 130 50"
                  stroke="#a87c5e"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.8, ease: "easeInOut" }}
                />

                {/* Animated Needle head */}
                <motion.polygon
                  points="0,-6 -3,6 3,6"
                  fill="#efe3d5"
                  stroke="#a87c5e"
                  strokeWidth="1"
                  initial={{ offsetDistance: "0%" }}
                  animate={{ offsetDistance: "100%" }}
                  style={{
                    offsetPath: "path('M 10 50 Q 30 20, 50 50 T 90 50 T 130 50')",
                    offsetRotate: "auto",
                  }}
                  transition={{ duration: 1.8, ease: "easeInOut" }}
                />
              </svg>
            </div>

            {/* Brand Letters Reveal */}
            <div className="flex gap-1.5 justify-center">
              {brandName.split("").map((letter, idx) => (
                <motion.span
                  key={idx}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.4 + idx * 0.1,
                    duration: 0.6,
                    ease: [0.215, 0.61, 0.355, 1]
                  }}
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 32,
                    fontWeight: 700,
                    color: '#ffffff',
                    letterSpacing: '0.05em',
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Subtext */}
            <motion.div
              initial={{ opacity: 0, tracking: '0.1em' }}
              animate={{ opacity: 0.75, tracking: '0.3em' }}
              transition={{ delay: 1.3, duration: 0.7 }}
              style={{
                fontSize: 9,
                fontWeight: 600,
                textTransform: 'uppercase',
                color: '#efe3d5',
                marginTop: 12,
                letterSpacing: '0.3em',
              }}
            >
              Textile Retail
            </motion.div>
          </div>

          {/* Simple premium slider line indicator */}
          <div style={{
            position: 'absolute',
            bottom: '12%',
            width: 140,
            height: 1.5,
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: 2,
            overflow: 'hidden',
          }}>
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.2, ease: "linear" }}
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #a87c5e, #efe3d5)',
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
