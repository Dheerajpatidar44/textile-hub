import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const C = {
  primary: '#1B2A4A',
  gold: '#D4A842',
  crimson: '#8B1A2D',
  cream: '#F8F7F4',
  stone: '#5A5560',
};

export default function Preloader({ onComplete, onStartOut }) {
  const [startOut, setStartOut] = useState(false);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0); // 0: lines appear, 1: logo, 2: done

  useEffect(() => {
    // Progress counter
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 3;
      });
    }, 30);

    // Phase 1 - show fabric lines
    const phase1 = setTimeout(() => setPhase(1), 300);

    const timer = setTimeout(() => {
      setStartOut(true);
      if (onStartOut) onStartOut();
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 1000);
    }, 2200);

    return () => {
      clearInterval(interval);
      clearTimeout(phase1);
      clearTimeout(timer);
    };
  }, [onComplete, onStartOut]);

  // Fabric weave thread lines (horizontal)
  const threadCount = 12;

  const panels = [
    { left: '0%', yTarget: '-100%' },
    { left: '25%', yTarget: '100%' },
    { left: '50%', yTarget: '-100%' },
    { left: '75%', yTarget: '100%' }
  ];

  return (
    <div 
      className="fixed inset-0 z-[9999] overflow-hidden flex flex-col items-center justify-center pointer-events-none"
    >
      {/* 4 Alternating Splitting Background Panels */}
      {panels.map((panel, idx) => (
        <motion.div
          key={idx}
          initial={{ y: 0 }}
          animate={startOut ? { y: panel.yTarget } : { y: 0 }}
          transition={{ duration: 0.95, ease: [0.85, 0, 0.15, 1], delay: idx * 0.05 }}
          className="absolute top-0 h-full w-[25.2%] pointer-events-auto"
          style={{ 
            left: panel.left,
            background: idx % 2 === 0 ? C.primary : '#0D1828',
          }}
        />
      ))}

      {/* Decorative & Text Content (Fades and lifts as the panels slide away) */}
      <motion.div
        animate={startOut ? { opacity: 0, scale: 0.96, y: -30 } : { opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
        className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none"
      >
        {/* Animated fabric weave threads background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: threadCount }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: i % 2 === 0 ? 0.06 : 0.04 }}
              transition={{ 
                delay: i * 0.04,
                duration: 0.8,
                ease: 'easeOut'
              }}
              style={{
                position: 'absolute',
                top: `${(i / threadCount) * 100}%`,
                left: 0,
                right: 0,
                height: i % 3 === 0 ? 2 : 1,
                background: i % 2 === 0 ? '#D4A842' : '#8B1A2D',
                transformOrigin: 'left center',
              }}
            />
          ))}
          {/* Vertical threads */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={`v-${i}`}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 0.04 }}
              transition={{ 
                delay: 0.3 + i * 0.06,
                duration: 0.9,
                ease: 'easeOut'
              }}
              style={{
                position: 'absolute',
                left: `${(i / 8) * 100}%`,
                top: 0,
                bottom: 0,
                width: 1,
                background: '#D4A842',
                transformOrigin: 'center top',
              }}
            />
          ))}
        </div>

        {/* Dot pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#D4A842 1px, transparent 1px)`,
            backgroundSize: '28px 28px'
          }}
        />

        {/* Center content */}
        <div className="relative flex flex-col items-center">
          {/* Diamond mandala SVG spinner */}
          <div className="relative w-28 h-28 flex items-center justify-center mb-6">
            {/* Outer ring */}
            <svg width="112" height="112" viewBox="0 0 112 112" className="absolute inset-0">
              <circle
                cx="56" cy="56" r="50"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="1.5"
                fill="none"
              />
              <motion.circle
                cx="56" cy="56" r="50"
                stroke={C.gold}
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="314"
                initial={{ strokeDashoffset: 314 }}
                animate={{ strokeDashoffset: 314 - (314 * progress) / 100 }}
                transition={{ ease: "easeInOut" }}
                style={{ transform: 'rotate(-90deg)', transformOrigin: '56px 56px' }}
              />
            </svg>

            {/* Inner mandala motif */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
              className="absolute"
            >
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <polygon points="24,4 28,20 44,24 28,28 24,44 20,28 4,24 20,20" 
                  stroke={C.gold} strokeWidth="1.5" fill="rgba(212,168,66,0.08)" />
                <circle cx="24" cy="24" r="6" fill="none" stroke={C.crimson} strokeWidth="1" />
                <circle cx="24" cy="24" r="2.5" fill={C.gold} />
              </svg>
            </motion.div>
          </div>

          {/* Brand Name */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-[42px] sm:text-[52px] font-bold text-white tracking-[0.08em] uppercase"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Meraki Ethnic
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-[10px] uppercase tracking-[0.35em] font-bold mb-10"
            style={{ color: C.gold }}
          >
            Premium Textile House
          </motion.div>

          {/* Progress bar */}
          <div className="relative w-48 h-[2px] rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{ background: `linear-gradient(90deg, ${C.crimson}, ${C.gold}, #E8D490)` }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.4 }}
            className="text-[10px] font-bold mt-2 tracking-widest"
            style={{ color: C.gold }}
          >
            {Math.floor(progress)}%
          </motion.span>
        </div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.4, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 text-[10px] tracking-widest font-semibold uppercase"
          style={{ color: 'rgba(255,255,255,0.5)' }}
        >
          Woven with Care. Made for Today.
        </motion.p>
      </motion.div>
    </div>
  );
}
