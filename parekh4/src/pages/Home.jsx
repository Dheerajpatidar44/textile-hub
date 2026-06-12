import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const categories = [
    { name: 'Sarees', image: '/premium_saree_1781069280684.png' },
    { name: 'Leggings', image: '/hero_fabric_1781069270214.png' },
    { name: 'Kurtis', image: '/premium_saree_1781069280684.png' },
    { name: 'Dress Suits', image: '/hero_fabric_1781069270214.png' },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] rounded-3xl overflow-hidden shadow-2xl group">
        <img 
          src="/hero_fabric_1781069270214.png" 
          alt="Premium Textile Hero" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sapphire-900/90 to-sapphire-900/40" />
        
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-playfair text-5xl md:text-7xl text-pearl-50 leading-tight max-w-2xl"
          >
            Elegance Woven <br />
            <span className="text-rosegold-400 italic">into Reality</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-pearl-100/80 text-lg max-w-xl font-outfit"
          >
            Discover the epitome of premium textile manufacturing. A legacy of quality, sophistication, and uncompromised style for the modern era.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10"
          >
            <a href="/products" className="inline-flex items-center gap-3 bg-rosegold-400 text-sapphire-900 px-8 py-4 rounded-full font-medium tracking-wide hover:bg-rosegold-300 transition-colors">
              Explore Collection <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories Grid */}
      <section>
        <div className="flex justify-between items-end mb-10">
          <div>
            <p className="text-rosegold-500 font-medium tracking-widest uppercase text-sm mb-2">Our Offerings</p>
            <h2 className="font-playfair text-4xl text-sapphire-900">Shop by Categories</h2>
          </div>
          <a href="/products" className="hidden sm:inline-flex items-center gap-2 text-sapphire-700 hover:text-rosegold-500 transition-colors font-medium">
            View All <ArrowRight size={16} />
          </a>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, idx) => (
            <motion.a 
              href="/products" 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col h-[280px] md:h-[320px] rounded-[1.5rem] overflow-hidden cursor-pointer bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-50"
            >
              <div className="relative flex-1 overflow-hidden m-2 md:m-3 rounded-t-[1rem] rounded-b-md">
                <img src={cat.image} alt={cat.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="px-4 py-4 text-center">
                <h3 className="text-sapphire-900 font-playfair text-lg md:text-xl font-bold">{cat.name}</h3>
                <div className="h-0 group-hover:h-4 overflow-hidden transition-all duration-300 ease-in-out mt-0 group-hover:mt-1">
                  <p className="text-rosegold-500 font-bold text-[9px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">Explore</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
      
     
    </div>
  );
}
