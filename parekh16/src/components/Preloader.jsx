import { motion } from 'framer-motion';

export default function Preloader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#132C20] z-[100]">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center px-4"
      >
        <h1 className="font-playfair text-4xl md:text-6xl text-[#C3A87E] tracking-[0.15em] mb-2 font-bold text-center border-b-0 pb-0">
          ROYAL WEAVES
        </h1>
        <p className="text-[#eedec9] font-outfit text-xs md:text-sm tracking-[0.3em] uppercase mb-6 font-semibold">
          TEXTILE MALL
        </p>
        
        <motion.div
          className="w-36 h-[1.5px] bg-[#C3A87E]/20 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <motion.div
            className="h-full bg-[#C3A87E]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.4, duration: 1.2, ease: "easeInOut" }}
          />
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-6 text-[#eedec9]/60 font-outfit text-[10px] tracking-[0.25em] uppercase font-semibold"
        >
          Interweaving Tradition & Heritage
        </motion.p>
      </motion.div>
    </div>
  );
}
