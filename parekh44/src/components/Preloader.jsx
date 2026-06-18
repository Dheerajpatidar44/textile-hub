import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const C = {
  primary: '#222842',        // Slate Navy
  accent: '#8D6F97',         // Mauve
  gold: '#D4B26F',           // Gold
  bg: '#FAF9FC',             // Light Lavender-Grey
};

export default function Preloader({ onComplete }) {
  const [startOut, setStartOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Increment progress slowly
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 80);

    const timer = setTimeout(() => {
      setStartOut(true);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 600);
    }, 2200);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  const brandName = "THREADSPHERE";

  return (
    <AnimatePresence>
      {!startOut && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: C.bg }}
        >
          {/* Decorative backdrop mesh grid */}
          <div className="absolute inset-0 opacity-10" style={{ 
            backgroundImage: 'radial-gradient(#8D6F97 1px, transparent 1px)', 
            backgroundSize: '30px 30px' 
          }} />

          <div className="flex flex-col items-center relative z-10">
            {/* Elegant Spinning Yarn Wheel SVG */}
            <div className="relative w-24 h-24 mb-8 flex items-center justify-center">
              {/* Outer Golden Dash Spinning Circle */}
              <motion.svg
                width="80"
                height="80"
                viewBox="0 0 100 100"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                className="absolute"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  stroke={C.gold}
                  strokeWidth="2"
                  strokeDasharray="8 6 4 6"
                  fill="none"
                />
              </motion.svg>

              {/* Inner Reverse Spinning Mauve Circle */}
              <motion.svg
                width="60"
                height="60"
                viewBox="0 0 100 100"
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                className="absolute"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="35"
                  stroke={C.accent}
                  strokeWidth="1.5"
                  strokeDasharray="12 8"
                  fill="none"
                />
              </motion.svg>

              {/* Central Diamond Node (Pulses) */}
              <motion.div
                animate={{ scale: [0.9, 1.2, 0.9], opacity: [0.8, 1, 0.8] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                style={{
                  width: 14,
                  height: 14,
                  background: C.gold,
                  transform: 'rotate(45deg)',
                  boxShadow: '0 0 10px rgba(212, 178, 111, 0.5)',
                }}
              />
            </div>

            {/* Letter by Letter Reveal */}
            <div className="flex gap-1 overflow-hidden h-12 items-center">
              {brandName.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    ease: [0.2, 0.65, 0.3, 0.9]
                  }}
                  className="text-3xl md:text-4xl font-extrabold tracking-wider"
                  style={{ color: C.primary, fontFamily: "'Inter', sans-serif" }}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Subtext Reveal */}
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              animate={{ opacity: 1, letterSpacing: "0.25em" }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-[9px] uppercase font-bold mt-2"
              style={{ color: C.accent, fontFamily: "'Inter', sans-serif" }}
            >
              TEXTILE RETAIL
            </motion.p>

            {/* Minimal Progress Line */}
            <div className="w-48 h-[1px] bg-gray-200 mt-8 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full absolute left-0 top-0"
                style={{ 
                  background: `linear-gradient(90deg, ${C.accent}, ${C.gold})`,
                  width: `${progress}%` 
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
