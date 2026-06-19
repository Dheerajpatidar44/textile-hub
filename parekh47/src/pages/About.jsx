import { motion } from 'framer-motion';

const C = {
  primary: '#0D3E3C',        // Elegant Deep Teal
  primaryLight: '#1E5957',
  accent: '#A75D3F',         // Terracotta/Copper Accent
  gold: '#A75D3F',
  bg: '#FAF8F5',             // Warm Cream Base
  border: '#E5ECE9',         // Soft Sage border
  stone: '#66807B',
};

export default function About() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: C.bg, minHeight: '90vh' }} className="pt-2 pb-16">
      <div className="max-w-[75rem] mx-auto px-6 lg:px-12">

        {/* Page Title - minimal spacing at the top */}
        <div className="text-center mb-8 mt-4">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '44px', fontWeight: 500, color: C.primary, margin: 0, letterSpacing: '0.02em' }}>
            About Us
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.gold, margin: '10px auto 0' }} />
        </div>

        {/* merged single div card layout */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-[32px] p-6 sm:p-10 lg:p-12 shadow-[0_12px_36px_rgba(13,62,60,0.02)] border border-[#E5ECE9] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
        >
          {/* Asymmetrical organic leaf shape image mask */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div 
              className="relative w-full max-w-[340px] aspect-[4/5] overflow-hidden shadow-md border border-[#E5ECE9] rounded-[160px_40px_160px_40px]"
            >
              <img
                src="/images/about_riwaayat.png"
                alt="Riwaayat Hub Craftsmanship"
                className="w-full h-full object-cover scale-[1.01] hover:scale-[1.05] transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-[#0D3E3C]/10 mix-blend-overlay"></div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 text-left">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#A75D3F] uppercase mb-2 block">OUR HERITAGE</span>
            <h2 
              className="text-[34px] lg:text-[42px] font-normal mb-5 leading-tight text-[#0D3E3C]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Preserving Heritage, <br />
              Weaving Modern Elegance.
            </h2>
            
            <p className="text-[13.5px] leading-relaxed text-[#66807B] font-semibold mb-8">
              <strong style={{ color: C.primary }}>Riwaayat Hub</strong> is India's leading destination for premium, handcrafted textiles and elegant apparel. We combine generations of traditional craftsmanship with contemporary aesthetics to offer premium sarees, suitings, home fabrics, and children's collections that represent style, substance, and heritage.
            </p>


          </div>
        </motion.div>

      </div>
    </div>
  );
}
