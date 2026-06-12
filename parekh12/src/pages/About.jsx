import { motion } from 'framer-motion';

export default function About() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#0A0A0C' }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#F3F4F6]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            About Us
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">

          {/* Image with Accent Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-full h-full"
              style={{ border: '2px solid rgba(200,155,95,0.25)' }} />
            <div className="relative overflow-hidden shadow-md">
              <img
                src="images/heromenwomen.png"
                alt="About Swastik Textile Mall"
                className="w-full h-auto max-h-[420px] object-cover block filter saturate-[0.9]"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-left"
          >
            <div className="w-12 h-[2px] mb-5 bg-[#C89B5F]" />
            <h2 className="font-bold text-3xl sm:text-4xl mb-6 leading-tight text-[#F3F4F6]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              A Legacy of Excellence
            </h2>
            <p className="leading-[1.8] text-[15px] mb-5 text-[#D1D5DB] font-medium">
              Since our inception, Swastik Textile Mall has been synonymous with uncompromised quality and visionary design in the textile industry. We began with a simple mission: to weave elegance into the very fabric of everyday life.
            </p>
            <p className="leading-[1.8] text-[15px] mb-5 text-[#D1D5DB] font-medium">
              Today, we stand as a beacon of premium manufacturing, utilizing state-of-the-art technology while honoring traditional craftsmanship. Our commitment to sustainability and innovation drives us forward.
            </p>
            <p className="leading-[1.8] text-[15px] text-[#D1D5DB] font-medium">
              Our deep-rooted partnerships with skilled artisans and modern weavers allow us to bring you the finest materials, blending durability with unmatched aesthetic appeal to meet all your retail needs.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
