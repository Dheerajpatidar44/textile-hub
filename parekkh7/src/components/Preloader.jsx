import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1A0A05 0%, #2C1810 50%, #1A0A05 100%)' }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gold radial glow center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #C9A227 0%, transparent 70%)' }}
        />
        {/* Corner ornaments */}
        {[
          'top-4 left-4',
          'top-4 right-4',
          'bottom-4 left-4',
          'bottom-4 right-4',
        ].map((pos, i) => (
          <div key={i} className={`absolute ${pos} w-16 h-16 opacity-20`}>
            <svg viewBox="0 0 64 64" fill="none">
              <path d="M2 2 L2 20 M2 2 L20 2" stroke="#C9A227" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="32" cy="32" r="4" fill="#C9A227" opacity="0.5"/>
            </svg>
          </div>
        ))}
        {/* Subtle pattern lines */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-0 right-0 h-px opacity-[0.04]"
            style={{ top: `${20 + i * 15}%`, background: 'linear-gradient(90deg, transparent, #C9A227, transparent)' }}
            animate={{ opacity: [0.02, 0.06, 0.02] }}
            transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative flex flex-col items-center text-center px-6">

        {/* Logo circle */}
        <motion.div
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          className="mb-8 w-20 h-20 rounded-full flex items-center justify-center shadow-2xl gold-pulse"
          style={{ background: 'linear-gradient(135deg, #C9A227 0%, #E2C65A 50%, #9A7D0A 100%)' }}
        >
          <span
            className="text-[#1A0A05] font-bold text-3xl"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            T
          </span>
        </motion.div>

        {/* Brand Name with shimmer */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
          className="shimmer-text text-5xl sm:text-6xl md:text-7xl font-bold tracking-[0.15em] uppercase mb-2"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Textile Mall
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-[#A68B7C] text-[11px] tracking-[0.3em] uppercase mb-10"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Premium Textiles · Timeless Elegance
        </motion.p>

        {/* Gold progress bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          className="w-64 sm:w-80 h-[3px] rounded-full overflow-hidden"
          style={{ background: 'rgba(201,162,39,0.15)' }}
        >
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ delay: 0.8, duration: 1.2, ease: 'easeInOut' }}
            className="h-full rounded-full"
            style={{ background: 'linear-gradient(90deg, #9B2519, #C9A227, #E2C65A, #C9A227)' }}
          />
        </motion.div>

        {/* Decorative dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex gap-2 mt-6"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: '#C9A227' }}
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 1, delay: 1.2 + i * 0.2, repeat: Infinity }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
