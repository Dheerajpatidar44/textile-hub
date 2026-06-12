import { motion } from 'framer-motion';

export default function Preloader() {
  return (
    <motion.div 
      className="fixed inset-0 flex flex-col items-center justify-center bg-vastram-brown z-[100] origin-top"
      initial={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <h1 className="font-playfair text-4xl md:text-6xl text-vastram-gold tracking-widest mb-4 uppercase">
            Vastram
          </h1>
          <p className="font-outfit text-vastram-cream/80 tracking-[0.2em] uppercase text-sm mb-8">
            Textile Retail Mall
          </p>
        </motion.div>
        
        <motion.div 
          className="w-48 h-[2px] bg-vastram-cream/20 overflow-hidden relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.div 
            className="absolute top-0 left-0 h-full bg-vastram-gold"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
