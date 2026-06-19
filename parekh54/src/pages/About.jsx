import { motion } from 'framer-motion';

const C = {
  primary: '#5A1827',        // Royal Burgundy
  primaryLight: '#7A2A39',
  accent: '#C2A478',         // Luxury Gold
  gold: '#C2A478',
  bg: '#FAF6F0',             // Warm Cream
  border: '#E6E1D8',
  stone: '#6B5C5D',
};

export default function About() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg, minHeight: '90vh' }} className="pt-2 pb-16">
      <div className="max-w-[75rem] mx-auto px-6 lg:px-12">

        {/* Page Title - minimal spacing at top closer to Navbar */}
        <div className="text-center mb-6 mt-1">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '44px', fontWeight: 500, color: C.primary, margin: 0, letterSpacing: '0.02em' }}>
            About Us
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.accent, margin: '8px auto 0' }} />
        </div>

        {/* Combined Card (Content & Image in one div) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-[32px] p-8 sm:p-10 lg:p-12 shadow-md border border-[#E6E1D8] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
        >
          {/* Elegant Image Shape (Left) */}
          <div className="lg:col-span-5 flex justify-center w-full relative py-4">
            {/* Background Decorative Gold Arch Frame */}
            <div className="absolute w-full max-w-[290px] aspect-[3/4] rounded-t-full rounded-b-[24px] border border-[#C2A478]/50 translate-x-3 translate-y-3 pointer-events-none" />
            
            {/* Main Image Container */}
            <div 
              className="relative w-full max-w-[290px] aspect-[3/4] overflow-hidden shadow-lg rounded-t-full rounded-b-[24px] bg-white border border-[#E6E1D8] z-10"
              style={{ boxShadow: '0 20px 40px rgba(90, 24, 39, 0.08)' }}
            >
              <img
                src="/images/about_textile_heritage.png"
                alt="The Textile Loft Craftsmanship"
                className="w-full h-full object-cover scale-[1.01] hover:scale-[1.05] transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-[#5A1827]/5 mix-blend-overlay"></div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 text-left">
            <span className="text-[10px] font-extrabold tracking-[0.25em] text-[#C2A478] uppercase mb-2.5 block">Our Heritage</span>
            <h2 
              className="text-[34px] lg:text-[42px] font-normal mb-5 leading-tight text-[#5A1827]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Preserving Heritage, <br />
              Weaving Modern Elegance.
            </h2>
            
            <p className="text-[13.5px] leading-relaxed text-[#6B5C5D] font-semibold mb-6">
              <strong style={{ color: C.primary }}>The Textile Loft</strong> is India's leading destination for premium, handcrafted textiles and elegant apparel. We combine generations of traditional craftsmanship with contemporary aesthetics to offer premium sarees, suitings, home fabrics, and children's collections that represent style, substance, and heritage.
            </p>

            <div className="grid grid-cols-2 gap-4 border-t border-[#E6E1D8] pt-6">
              <div>
                <h4 className="text-[12px] font-bold text-[#5A1827] uppercase mb-1">Authentic Quality</h4>
                <p className="text-[11.5px] text-[#6B5C5D] leading-normal">Every thread selected represents generations of weave expertise.</p>
              </div>
              <div>
                <h4 className="text-[12px] font-bold text-[#5A1827] uppercase mb-1">Modern Service</h4>
                <p className="text-[11.5px] text-[#6B5C5D] leading-normal">Leveraging e-Auctions and e-Quotations for smooth procurement.</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
