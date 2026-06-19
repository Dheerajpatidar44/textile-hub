import { motion } from 'framer-motion';

const C = {
  primary: '#25524B',        // Deep Teal
  primaryLight: '#347067',
  accent: '#C5A880',         // Soft Gold Accent
  gold: '#C5A880',
  bg: '#FAF8F5',             // Warm Cream
  border: '#EFECE6',
  stone: '#5A6E6A',
};

export default function About() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: C.bg, minHeight: '90vh' }} className="pt-2 pb-16">
      <div className="max-w-[75rem] mx-auto px-6 lg:px-12">

        {/* Page Title - minimal spacing at top closer to Navbar */}
        <div className="text-center mb-6 mt-1">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '44px', fontWeight: 500, color: C.primary, margin: 0, letterSpacing: '0.02em' }}>
            About Us
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.gold, margin: '8px auto 0' }} />
        </div>

        {/* Combined Card (Content & Image in one div) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-[32px] p-6 sm:p-10 lg:p-12 shadow-sm border border-[#EFECE6] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
        >
          {/* Asymmetrical Image Shape (Luxury Rounded Design - Swapped to Left) */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div 
              className="relative w-full max-w-[270px] aspect-[4/5] overflow-hidden shadow-lg border border-[#EFECE6] rounded-[20px_100px_20px_100px]"
            >
              <img
                src="/images/about_atelier.png"
                alt="The Fabric Atelier Craftsmanship"
                className="w-full h-full object-cover scale-[1.01] hover:scale-[1.05] transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-[#25524B]/10 mix-blend-overlay"></div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 text-left">
            <span className="text-[10px] font-extrabold tracking-[0.25em] text-[#C5A880] uppercase mb-2 block">Our Heritage</span>
            <h2 
              className="text-[34px] lg:text-[42px] font-normal mb-5 leading-tight text-[#25524B]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Preserving Heritage, <br />
              Weaving Modern Elegance.
            </h2>
            
            <p className="text-[13.5px] leading-relaxed text-[#5A6E6A] font-semibold mb-0">
              <strong style={{ color: C.primary }}>The Fabric Atelier</strong> is India's leading destination for premium, handcrafted textiles and elegant apparel. We combine generations of traditional craftsmanship with contemporary aesthetics to offer premium sarees, suitings, home fabrics, and children's collections that represent style, substance, and heritage.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
