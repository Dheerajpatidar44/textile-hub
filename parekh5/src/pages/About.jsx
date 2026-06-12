import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="pb-20 pt-10 font-outfit">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-[#1B484E] font-bold tracking-[0.2em] uppercase text-sm mb-2">Our Story</p>
          <h1 className="font-playfair text-5xl text-[#1B484E] font-bold">About Us</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-2/5 flex justify-center lg:justify-start"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg max-w-[280px] sm:max-w-xs md:max-w-sm w-full mx-auto lg:mx-0">
              <img 
                src="images/about.png" 
                alt="About TEXTILE MALL" 
                className="w-full h-auto max-h-[380px] object-contain block"
              />
              <div className="absolute inset-0 bg-[#1B484E]/10 mix-blend-multiply pointer-events-none"></div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-3/5"
          >
            <h2 className="font-playfair text-3xl md:text-4xl text-[#1B484E] mb-6 font-bold leading-tight">
              A Legacy of Excellence
            </h2>
    
            <p className="text-[#4a4a4a] leading-[1.7] text-[16px] mb-6 font-medium">
              Since our inception, TEXTILE MALL has been synonymous with uncompromised quality and visionary design in the textile industry. We began with a simple mission: to weave elegance into the very fabric of everyday life.
            </p>
            <p className="text-[#4a4a4a] leading-[1.7] text-[16px] font-medium mb-6">
              Today, we stand as a beacon of premium manufacturing, utilizing state-of-the-art technology while honoring traditional craftsmanship. Our commitment to sustainability and innovation drives us forward.
            </p>
            <p className="text-[#4a4a4a] leading-[1.7] text-[16px] font-medium">
              Our deep-rooted partnerships with skilled artisans and modern weavers allow us to bring you the finest materials, blending durability with unmatched aesthetic appeal to meet all your retail needs.
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
