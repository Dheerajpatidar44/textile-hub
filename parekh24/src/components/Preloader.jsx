import { motion } from 'framer-motion';

const BRAND_NAME = "Aura Loom";

// Split name into words for staggered animation
const words = BRAND_NAME.split(' ');

export default function Preloader() {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: '-100%' }}
      transition={{ delay: 3.0, duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#FAF9F5', fontFamily: "'Urbanist', sans-serif" }}
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#6E64B4 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />

      {/* Decorative elegant corner lines */}
      <div className="absolute top-10 left-10 w-16 h-16 border-t-[1.5px] border-l-[1.5px] opacity-40 transition-all duration-1000" style={{ borderColor: '#6E64B4' }} />
      <div className="absolute top-10 right-10 w-16 h-16 border-t-[1.5px] border-r-[1.5px] opacity-40 transition-all duration-1000" style={{ borderColor: '#6E64B4' }} />
      <div className="absolute bottom-10 left-10 w-16 h-16 border-b-[1.5px] border-l-[1.5px] opacity-40 transition-all duration-1000" style={{ borderColor: '#6E64B4' }} />
      <div className="absolute bottom-10 right-10 w-16 h-16 border-b-[1.5px] border-r-[1.5px] opacity-40 transition-all duration-1000" style={{ borderColor: '#6E64B4' }} />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6">

        {/* Decorative top line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-16 h-[1.5px] mb-8 rounded-full"
          style={{ background: 'linear-gradient(90deg, transparent, #6E64B4, transparent)' }}
        />

        {/* Brand Logo/Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl relative"
          style={{ background: 'linear-gradient(135deg, #6E64B4, #252131)', border: '1px solid rgba(110,100,180,0.4)' }}
        >
          {/* Subtle glow behind logo */}
          <div className="absolute inset-0 rounded-2xl blur-md opacity-30" style={{ background: '#6E64B4' }} />
          <svg viewBox="0 0 100 100" className="w-9 h-9 text-[#FAF9F5]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 35 C20 35, 50 20, 80 35 L80 55 C80 70, 65 80, 50 80 C35 80, 20 70, 20 55 Z"
              stroke="currentColor" strokeWidth="4" fill="none" strokeLinejoin="round" />
            <path d="M30 45 L50 55 L70 45" stroke="#FAF9F5" strokeWidth="3" strokeLinecap="round" />
            <circle cx="50" cy="55" r="5" fill="#6E64B4" />
          </svg>
        </motion.div>

        {/* Brand Name - Word by word animation */}
        <div className="flex flex-row flex-wrap justify-center gap-3 mb-2">
          {words.map((word, wIdx) => (
            <motion.div
              key={wIdx}
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                duration: 0.6,
                delay: 0.2 + wIdx * 0.18,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="overflow-hidden"
            >
              <span
                className="inline-block text-3xl sm:text-5xl font-black tracking-[0.08em] text-[#252131] uppercase leading-tight serif-title"
              >
                {word}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-[11px] tracking-[0.35em] uppercase font-bold mb-8"
          style={{ color: '#6E64B4' }}
        >
          Artisan · Sustainable · Textiles
        </motion.p>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="w-48 h-[1px] mb-6 rounded-full"
          style={{ background: 'linear-gradient(90deg, transparent, #252131, transparent)' }}
        />

        {/* Spinning Circular Loader */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col items-center justify-center gap-4 mt-2"
        >
          <div className="relative w-12 h-12">
            {/* Outer static track */}
            <div 
              className="absolute inset-0 rounded-full border-4"
              style={{ borderColor: '#E1DFEB' }}
            />
            {/* Inner spinning lavender arc */}
            <motion.div 
              className="absolute inset-0 rounded-full border-4 border-transparent"
              style={{ 
                borderTopColor: '#6E64B4',
                borderRightColor: '#6E64B4'
              }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, ease: "linear", duration: 1 }}
            />
          </div>
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase" style={{ color: '#6E64B4' }}>
            Curating Elegance
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}

