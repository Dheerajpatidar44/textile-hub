import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Preloader({ onComplete }) {
  const [startOut, setStartOut] = useState(false);

  useEffect(() => {
    // Keep it on screen for a luxurious 2.8 seconds
    const timer = setTimeout(() => {
      setStartOut(true);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 800); // allow exit animation to finish
    }, 2800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  // Framer Motion Variants for staggered text
  const letterContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.8 }
    }
  };

  const letterAnim = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] }
    }
  };

  const text = "SareeSutra".split("");

  return (
    <AnimatePresence>
      {!startOut && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: '#FDFBF7' }}
        >
          <div className="flex flex-col items-center">
            
            {/* Elegant SVG Animation */}
            <div className="relative w-24 h-24 mb-10 flex items-center justify-center">
              <motion.svg 
                width="80" height="80" viewBox="0 0 24 24" fill="none" 
                stroke="#C9A455" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                {/* Top layer */}
                <motion.path 
                  d="M12 2L2 7l10 5 10-5-10-5z"
                  initial={{ pathLength: 0, fill: "rgba(201, 164, 85, 0)" }}
                  animate={{ pathLength: 1, fill: "rgba(201, 164, 85, 0.15)" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                {/* Middle layer */}
                <motion.path 
                  d="M2 12l10 5 10-5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
                />
                {/* Bottom layer */}
                <motion.path 
                  d="M2 17l10 5 10-5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
                />
              </motion.svg>

              {/* Glowing behind the logo */}
              <motion.div 
                className="absolute inset-0 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(201,164,85,0.2) 0%, transparent 70%)' }}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1.5, opacity: 1 }}
                transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
              />
            </div>

            {/* Brand Name with Staggered Letters */}
            <motion.div
              variants={letterContainer}
              initial="hidden"
              animate="visible"
              className="flex overflow-hidden pb-2"
            >
              {text.map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterAnim}
                  className="text-5xl font-bold tracking-wider"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: '#1a1a2e' }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>

            {/* Subtitle with expanding letter spacing */}
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              animate={{ opacity: 1, letterSpacing: "0.35em" }}
              transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
              className="mt-4 text-[12px] uppercase font-semibold"
              style={{ fontFamily: "'DM Sans', sans-serif", color: '#C9A455' }}
            >
              Weaving Elegance
            </motion.p>
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
