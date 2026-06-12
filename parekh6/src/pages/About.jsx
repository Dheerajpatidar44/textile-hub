import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="pb-20 pt-16 font-outfit bg-vastram-cream">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl text-vastram-text uppercase tracking-widest">Our Story</h1>
          <div className="h-[2px] w-12 bg-vastram-gold mx-auto mt-4"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-2/5 flex justify-center lg:justify-start"
          >
            <div className="relative rounded-none overflow-hidden shadow-lg max-w-[280px] sm:max-w-xs md:max-w-sm w-full mx-auto lg:mx-0 border-4 border-vastram-light group">
              <img 
                src="images/image copy.png" 
                alt="About VASTRAM" 
                className="w-full h-auto max-h-[450px] object-cover block transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-vastram-brown/10 mix-blend-multiply pointer-events-none"></div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-3/5"
          >
            <h2 className="font-playfair text-3xl md:text-4xl text-vastram-brown mb-6 font-bold leading-tight uppercase tracking-wider">
              A Legacy of Excellence
            </h2>
    
            <p className="text-vastram-text/90 leading-[1.8] text-[15px] mb-6 font-medium">
              Since our inception in 1999, VASTRAM has been synonymous with uncompromised quality and visionary design in the textile industry. We began with a simple mission: to weave elegance into the very fabric of everyday life.
            </p>
            <p className="text-vastram-text/90 leading-[1.8] text-[15px] font-medium mb-6">
              Today, we stand as a beacon of premium retail, offering an unmatched collection with premium quality and the finest designs. Truly a one-stop destination for those who appreciate heritage and style.
            </p>
            <p className="text-vastram-text/90 leading-[1.8] text-[15px] font-medium border-l-4 border-vastram-gold pl-6 italic">
              Our deep-rooted partnerships with skilled artisans and modern weavers allow us to bring you the finest materials, blending durability with unmatched aesthetic appeal to meet all your needs.
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
