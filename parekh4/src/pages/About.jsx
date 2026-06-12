import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="pb-12">
      {/* Page Header */}
      <div className="text-center py-10">
        <h1 className="font-playfair text-4xl text-sapphire-900 font-bold">About Us</h1>
      </div>

      {/* Story Section Card */}
      <section className="max-w-5xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white shadow-xl flex flex-col md:flex-row overflow-hidden border-l-[10px] border-[#c88a93] rounded-r-xl"
        >
          {/* Text Content */}
          <div className="md:w-1/2 p-8 md:p-14 flex flex-col justify-center">
            
            <h2 className="font-playfair text-3xl md:text-4xl text-sapphire-900 mb-6 font-bold">
              A Legacy of <span className="text-sapphire-800">Excellence</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-[15px] mb-5">
              Since our inception, TEXMART has been synonymous with uncompromised quality and visionary design in the textile industry. We began with a simple mission: to weave elegance into the very fabric of everyday life.
            </p>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              Today, we stand as a beacon of premium manufacturing, utilizing state-of-the-art technology while honoring traditional craftsmanship. Our commitment to sustainability and innovation drives us forward.
            </p>
          </div>

          {/* Image Content */}
          <div className="md:w-1/2 relative min-h-[350px] md:min-h-full">
            <img 
              src="/hero_fabric_1781069270214.png" 
              alt="About TEXMART" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
