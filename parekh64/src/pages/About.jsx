import { motion } from 'framer-motion';

const C = {
  primary: '#2B2520',       // Dark Charcoal
  primaryLight: '#4A423F',  // Medium Charcoal
  accent: '#C5A880',        // Champagne Gold
  bg: '#FDFBF7',
  border: '#EAE5DB',
  stone: '#6C625C',
};

export default function About() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg, minHeight: '85vh' }} className="pt-2 pb-16">
      <div className="max-w-[85rem] mx-auto px-6 lg:px-12">

        {/* Page Title - minimized top gap */}
        <div className="text-center mb-8 mt-2">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#C5A880] uppercase mb-2 block">
            Our Story
          </span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '38px', fontWeight: 700, color: C.primary, margin: 0, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
            About Us
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.accent, margin: '12px auto 0' }} />
        </div>

        {/* Combined Card (Content & Image in one div) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-[24px] p-6 sm:p-8 lg:p-10 border border-[#EAE5DB] shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center"
        >
          {/* Main Image Container with Sleek Arched/Capsule Shape */}
          <div 
            className="relative w-full h-[380px] lg:h-[480px] overflow-hidden border border-[#EAE5DB] bg-[#FAF7F2] shadow-sm"
            style={{ borderRadius: '200px 200px 24px 24px' }}
          >
            <img
              src="/images/aarohi_about.png"
              alt="Aarohi Fabrics Craftsmanship Showroom"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2B2520]/60 via-[#2B2520]/15 to-transparent flex flex-col justify-end p-8 text-white">
              <span className="text-[10px] font-bold tracking-widest uppercase mb-1 text-[#C5A880]">CRAFTSMANSHIP</span>
              <h3 className="text-[20px] font-serif font-bold text-white tracking-wide">Woven by the Masters</h3>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="flex flex-col justify-center text-left py-4 lg:py-8 pr-0 lg:pr-8">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#C5A880] uppercase mb-2 block">Our Heritage</span>
            <h2 className="text-[32px] lg:text-[40px] font-bold mb-6 leading-tight text-[#2B2520] font-serif uppercase tracking-wide">
              Weaving Tradition, <br />
              <span className="text-[#C5A880] italic font-normal">Defining Style.</span>
            </h2>
            
            <p className="text-[14.5px] leading-relaxed text-[#6C625C] font-medium mb-8">
              <strong style={{ color: C.primary }}>Aarohi Fabrics</strong> is India's leading destination for premium, handcrafted textiles and elegant apparel. We combine generations of traditional craftsmanship with contemporary aesthetics to offer premium sarees, suitings, home fabrics, and children's collections that represent style, substance, and heritage.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-[#EAE5DB] pt-8">
              <div>
                <h4 className="text-[14px] font-bold text-[#2B2520] uppercase mb-2 font-sans tracking-wide">Authentic Quality</h4>
                <p className="text-[12.5px] text-[#6C625C] leading-relaxed">Every thread selected represents generations of weave expertise and strict quality benchmarks.</p>
              </div>
              <div>
                <h4 className="text-[14px] font-bold text-[#2B2520] uppercase mb-2 font-sans tracking-wide">Modern Procurement</h4>
                <p className="text-[12.5px] text-[#6C625C] leading-relaxed">Leveraging e-Auctions and e-quotations for seamless, transparent and efficient trade.</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
