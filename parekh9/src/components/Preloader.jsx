import { motion } from 'framer-motion';

export default function Preloader() {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: '-100%' }}
      transition={{ delay: 2.2, duration: 0.8, ease: [0.85, 0, 0.15, 1] }}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
      style={{ background: '#FCF5F0' }}
    >
      {/* Background Decorative Floral/Ornament Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
        <svg width="400" height="400" viewBox="0 0 100 100" fill="currentColor" className="text-[#A24E51]">
          <path d="M50 0 C55 20, 70 35, 100 50 C70 65, 55 80, 50 100 C45 80, 30 65, 0 50 C30 35, 45 20, 50 0 Z" />
        </svg>
      </div>

      {/* Swipe Panels for transition depth */}
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: '-100%' }}
        transition={{ delay: 2.1, duration: 0.8, ease: [0.85, 0, 0.15, 1] }}
        className="absolute inset-0 z-10"
        style={{ background: '#A24E51' }}
      />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6">
        {/* Animated Brand Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          {/* Logo Circle */}
          <div className="relative mb-6">
            <div className="absolute -inset-3 rounded-full border border-[#A24E51]/20 gold-pulse" />
            <div
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center shadow-xl relative z-10"
              style={{
                background: 'linear-gradient(135deg, #772629 0%, #A24E51 100%)',
                border: '2px solid #DFCCBF'
              }}
            >
              <svg viewBox="0 0 100 100" className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="4">
                <path d="M50 20 C60 40, 75 50, 80 50 C75 50, 60 60, 50 80 C40 60, 25 50, 20 50 C25 50, 40 40, 50 20 Z" />
                <circle cx="50" cy="50" r="8" fill="white" />
              </svg>
            </div>
          </div>

          {/* Brand Name */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold tracking-[0.2em] text-[#772629] mb-2"
            style={{ fontFamily: "'Marcellus', serif" }}
          >
            VASTRAMALL
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-[#6F5547] text-[10px] sm:text-[11px] tracking-[0.35em] uppercase font-semibold"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            TEXTILES OF INDIA
          </motion.p>
        </motion.div>

        {/* Swipe Loader Line */}
        <div className="mt-8 w-48 h-[1px] bg-[#EADCD2] relative overflow-hidden rounded-full">
          <motion.div
            initial={{ left: '-100%' }}
            animate={{ left: '100%' }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="absolute top-0 bottom-0 w-1/2"
            style={{
              background: 'linear-gradient(90deg, transparent, #A24E51, transparent)'
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
