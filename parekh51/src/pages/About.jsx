import { motion } from 'framer-motion';

const C = {
  primary: '#321437',        // Premium Olive Green
  primaryLight: '#4E2A52',
  accent: '#B8624E',         // Terracotta Accent
  gold: '#C2A478',           // Gold Accent
  bg: '#FAF8F5',             // Warm Cream
  border: '#E6E4DF',
  stone: '#6C576E',
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
          className="bg-white rounded-[32px] p-8 sm:p-10 lg:p-12 shadow-md border border-[#E6E4DF] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
        >
          {/* Custom Wavy Image Shape (Leaf/Curved design - Left) */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div 
              className="relative w-full max-w-[320px] aspect-[3/4] overflow-hidden shadow-lg border-4 border-white rounded-[140px_24px_140px_24px]"
              style={{ boxShadow: '0 20px 40px rgba(67, 83, 61, 0.08)' }}
            >
              <img
                src="/images/why_choose_fabrics.png"
                alt="Gharana Weaves Craftsmanship"
                className="w-full h-full object-cover scale-[1.01] hover:scale-[1.05] transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-[#321437]/10 mix-blend-overlay"></div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 text-left">
            <span className="text-[10px] font-extrabold tracking-[0.25em] text-[#B8624E] uppercase mb-2.5 block">Our Heritage</span>
            <h2 
              className="text-[34px] lg:text-[42px] font-normal mb-5 leading-tight text-[#321437]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Preserving Heritage, <br />
              Weaving Modern Elegance.
            </h2>
            
            <p className="text-[13.5px] leading-relaxed text-[#6C576E] font-semibold mb-6">
              <strong style={{ color: C.primary }}>Gharana Weaves</strong> is India's leading destination for premium, handcrafted textiles and elegant apparel. We combine generations of traditional craftsmanship with contemporary aesthetics to offer premium sarees, suitings, home fabrics, and children's collections that represent style, substance, and heritage.
            </p>

            <div className="grid grid-cols-2 gap-4 border-t border-[#E6E4DF] pt-6">
              <div>
                <h4 className="text-[12px] font-bold text-[#321437] uppercase mb-1">Authentic Quality</h4>
                <p className="text-[11.5px] text-[#6C576E] leading-normal font-semibold">Every thread selected represents generations of weave expertise.</p>
              </div>
              <div>
                <h4 className="text-[12px] font-bold text-[#321437] uppercase mb-1">Modern Service</h4>
                <p className="text-[11.5px] text-[#6C576E] leading-normal font-semibold">Leveraging e-auctions and e-quotations for smooth procurement.</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
