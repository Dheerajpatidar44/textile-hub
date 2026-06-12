import { motion } from 'framer-motion';



export default function About() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: '#FAF4EE' }}>

      {/* Hero Banner */}
      <div className="relative h-32 sm:h-40 overflow-hidden flex items-center justify-center text-center"
        >
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          
          <h1 className="font-bold text-5xl sm:text-6xl text-[#303030]"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            About Us
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl"
              style={{ border: '2px solid rgba(225,77,42,0.3)' }} />
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img
                src="images/about.png"
                alt="About Textile Mall"
                className="w-full h-auto max-h-[420px] object-cover block"
              />
              <div className="absolute inset-0"
                 />
            </div>
            
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="w-12 h-0.5 mb-5"  />
            <h2 className="font-bold text-4xl sm:text-5xl mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif", color: '#303030' }}>
              A Legacy of Excellence
            </h2>
            <p className="leading-[1.8] text-[15px] mb-5" style={{ color: '#4B4B4B' }}>
              Since our inception, SAMRIDDHI TEXTILE RETAIL CHAIN has been synonymous with uncompromised quality and visionary design in the textile industry. We began with a simple mission: to weave elegance into the very fabric of everyday life.
            </p>
            <p className="leading-[1.8] text-[15px] mb-5" style={{ color: '#4B4B4B' }}>
              Today, we stand as a beacon of premium manufacturing, utilizing state-of-the-art technology while honoring traditional craftsmanship. Our commitment to sustainability and innovation drives us forward.
            </p>
            <p className="leading-[1.8] text-[15px]" style={{ color: '#4B4B4B' }}>
              Our deep-rooted partnerships with skilled artisans and modern weavers allow us to bring you the finest materials, blending durability with unmatched aesthetic appeal to meet all your retail needs.
            </p>
          </motion.div>
        </div>

       
      </div>
    </div>
  );
}
