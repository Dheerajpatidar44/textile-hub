import { motion } from 'framer-motion';

export default function Preloader() {
  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ 
        y: "-100%",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
      className="fixed inset-0 flex items-center justify-center bg-[#0C0C0C] z-[100] overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center px-4"
      >
        {/* Elegant Gold Medallion Ornament SVG */}
        <svg className="w-16 h-16 mb-4 text-[#C5A880]" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 5C52 20 62 30 77 33C62 36 52 46 50 61C48 46 38 36 23 33C38 30 48 20 50 5Z" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M50 39C52 49 60 57 70 59C60 61 52 69 50 79C48 69 40 61 30 59C40 57 48 49 50 39Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="50" cy="49" r="3" />
          <path d="M50 20 L50 25 M50 73 L50 78 M21 49 L26 49 M74 49 L79 49" stroke="currentColor" strokeWidth="1.5"/>
        </svg>

        <h1 className="font-playfair text-4xl md:text-6xl text-[#C5A880] tracking-[0.15em] mb-2 font-bold text-center border-b-0 pb-0">
          VARA WEAVES
        </h1>
        <p className="text-[#F3ECE0] font-outfit text-xs md:text-sm tracking-[0.3em] uppercase mb-6 font-semibold">
          TEXTILE MALL
        </p>
        
        <motion.div
          className="w-48 h-[1.5px] bg-[#C5A880]/20 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <motion.div
            className="h-full bg-[#C5A880]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.4, duration: 1.2, ease: "easeInOut" }}
          />
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-6 text-[#F3ECE0]/60 font-outfit text-[10px] tracking-[0.25em] uppercase font-semibold"
        >
          Interweaving Tradition & Heritage
        </motion.p>
      </motion.div>

      {/* Brand accent gold border at the bottom that sweeps out and moves up during exit */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-[#C5A880] to-transparent shadow-[0_-4px_20px_rgba(197,168,128,0.6)]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.2, duration: 1.2, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
