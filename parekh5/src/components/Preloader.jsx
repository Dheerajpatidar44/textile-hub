import { motion } from 'framer-motion';

export default function Preloader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#f9f8f6] z-[100]">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center px-4 text-center"
      >
        <h1 className="font-playfair text-3xl sm:text-5xl md:text-7xl text-[#1B484E] font-bold tracking-widest mb-4">
          TEXTILE MALL
        </h1>
        <motion.div 
          className="w-32 h-1 bg-gray-200 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.div 
            className="h-full bg-[#1B484E]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.5, duration: 1.2, ease: "easeInOut" }}
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-6 text-gray-500 font-outfit text-[10px] sm:text-sm tracking-[0.3em] uppercase"
        >
          Premium Textiles
        </motion.p>
      </motion.div>
    </div>
  );
}
