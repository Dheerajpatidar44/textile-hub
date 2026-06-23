import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const C = {
  accent: '#D4B26F',
  gold: '#D4B26F',
  darkBg: '#11161B',
};

export default function Preloader({ onComplete, onStartOut }) {
  const [startOut, setStartOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Increment progress counter
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 45);

    // Trigger exit animation
    const timer = setTimeout(() => {
      setStartOut(true);
      if (onStartOut) onStartOut();
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 2500); // Slower exit animation: Wait 2.5s before unmounting Preloader completely
    }, 2400);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete, onStartOut]);

  const letters = ["K", "U", "M", "A", "V", "A", "T", "I"];

  // Create grid cells (4x4)
  const blocks = Array.from({ length: 16 }).map((_, idx) => {
    const row = Math.floor(idx / 4);
    const col = idx % 4;
    return { idx, row, col };
  });

  const letterVariants = {
    initial: { opacity: 0, filter: 'blur(4px)', y: 0, rotate: 0, scale: 1 },
    animate: (index) => ({
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: { delay: index * 0.05, duration: 0.5 }
    }),
    exit: (index) => {
      // Explode radially/upwards from center
      const angle = (index - 3.5) * 0.4 - Math.PI / 2; // arc spraying upwards
      const distance = 250 + Math.random() * 250;
      return {
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        rotate: (Math.random() - 0.5) * 720,
        scale: 0,
        opacity: 0,
        filter: 'blur(8px)',
        transition: {
          duration: 1.8, // Slower letter explosion
          ease: [0.16, 1, 0.3, 1], // Custom slow easeOutQuart
          delay: Math.random() * 0.25
        }
      };
    }
  };

  return (
    <AnimatePresence>
      {!startOut && (
        <div className="fixed inset-0 z-[9999] overflow-hidden flex items-center justify-center">
          
          {/* Shattering Dark Background Grid (4x4 blocks) */}
          <div 
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gridTemplateRows: 'repeat(4, 1fr)',
            }}
          >
            {blocks.map((block) => {
              const dx = block.col - 1.5;
              const dy = block.row - 1.5;
              const centerDist = Math.sqrt(dx * dx + dy * dy);
              
              // Calculate direction outwards from center
              const angle = Math.atan2(dy || 0.1, dx || 0.1) + (Math.random() - 0.5) * 0.3;
              const distance = 130 + Math.random() * 70; // percentage distance
              const targetX = Math.cos(angle) * distance;
              const targetY = Math.sin(angle) * distance;
              
              // Slower ripple delay expansion
              const delay = centerDist * 0.12 + Math.random() * 0.15;

              return (
                <motion.div
                  key={block.idx}
                  initial={{ opacity: 1, scale: 1.03, borderRadius: '0px' }}
                  exit={{
                    x: `${targetX}vw`,
                    y: `${targetY}vh`,
                    rotate: (Math.random() - 0.5) * 720,
                    scale: 0,
                    opacity: 0,
                    borderRadius: '50%',
                  }}
                  transition={{
                    duration: 2.0, // Slower block shatter animation
                    ease: [0.16, 1, 0.3, 1], // Slow easeOutQuart
                    delay: delay
                  }}
                  className="w-full h-full bg-[#11161B]"
                  style={{
                    outline: '1.5px solid #11161B', // overlap to prevent rendering lines
                  }}
                />
              );
            })}
          </div>

          {/* Central Logo & Loading Content */}
          <div className="relative z-10 flex flex-col items-center pointer-events-none">
            {/* Elegant Line-Drawing Logo */}
            <div className="mb-6 relative w-20 h-20 flex items-center justify-center">
              <svg width="80" height="80" viewBox="0 0 100 100" className="absolute">
                {/* Decorative background ring in gold opacity */}
                <rect
                  x="10" y="10" width="80" height="80"
                  stroke="rgba(214, 178, 111, 0.15)"
                  strokeWidth="2"
                  fill="transparent"
                  rx="40"
                />
                <motion.rect
                  x="10" y="10" width="80" height="80"
                  stroke={C.accent}
                  strokeWidth="2"
                  fill="transparent"
                  initial={{ strokeDasharray: "320 320", strokeDashoffset: 320 }}
                  animate={{ strokeDashoffset: 320 - (320 * progress) / 100 }}
                  exit={{
                    scale: 0,
                    rotate: -360,
                    opacity: 0,
                  }}
                  transition={{
                    strokeDashoffset: { ease: "easeInOut" },
                    exit: { duration: 1.5, ease: "easeInOut" } // Slower outer ring exit
                  }}
                  rx="40"
                />
              </svg>
              {/* Inner graphic */}
              <motion.div 
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: progress >= 50 ? 1 : 0, rotate: 0 }}
                exit={{ scale: 0, rotate: 180, y: 80, opacity: 0 }}
                transition={{ 
                  scale: { type: "spring", stiffness: 100 },
                  rotate: { type: "spring", stiffness: 100 },
                  exit: { duration: 1.5, ease: "easeInOut" } // Slower inner diamond exit
                }}
                className="w-8 h-8 border border-[#D4B26F] rounded-md flex items-center justify-center"
              >
                <div className="w-2 h-2 bg-[#D4B26F] rounded-full" />
              </motion.div>
            </div>

            {/* Staggered Brand Text Reveal */}
            <div className="flex gap-1.5 mb-2 pointer-events-auto">
              {letters.map((char, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={letterVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="text-2xl sm:text-3xl font-bold font-serif tracking-widest text-[#D4B26F]"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Sub-label */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.7, y: 0 }}
              exit={{ y: -80, scale: 0.8, opacity: 0 }}
              transition={{ 
                animate: { delay: 0.8, duration: 0.8 },
                exit: { duration: 1.5, ease: "easeInOut" } // Slower sub-label exit
              }}
              className="text-[10px] uppercase font-bold mb-8 tracking-[0.3em] text-white/60"
            >
              Textile House
            </motion.p>

            {/* Progress Percentage & Bar */}
            <motion.div 
              exit={{ y: 120, opacity: 0, scale: 0.8 }}
              transition={{ duration: 1.5, ease: "easeInOut" }} // Slower progress section exit
              className="flex flex-col items-center w-48"
            >
              <span className="text-[10px] font-bold tracking-widest text-white/80 mb-2">
                {Math.floor(progress)}%
              </span>
              <div className="w-full h-[2px] bg-white/10 overflow-hidden rounded-full">
                <motion.div
                  className="h-full bg-[#D4B26F]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
