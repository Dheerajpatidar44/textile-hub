import { motion } from 'framer-motion';

export default function BusinessMediaGallery() {
  return (
    <div className="space-y-16">
      <div className="text-center py-12">
        <p className="text-rosegold-500 font-medium tracking-widest uppercase text-sm mb-4">Media</p>
        <h1 className="font-playfair text-5xl text-sapphire-900">Business Gallery</h1>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {[1, 2, 3, 4, 5, 6].map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="break-inside-avoid relative group rounded-2xl overflow-hidden"
          >
            <img 
              src={idx % 2 === 0 ? '/hero_fabric_1781069270214.png' : '/premium_saree_1781069280684.png'} 
              alt="Gallery item"
              className="w-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-sapphire-900/0 group-hover:bg-sapphire-900/40 transition-colors duration-300 flex items-center justify-center">
              <span className="text-white font-playfair text-lg opacity-0 group-hover:opacity-100 transition-opacity">View Details</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
