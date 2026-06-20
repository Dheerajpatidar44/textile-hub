import { motion } from 'framer-motion';

const C = {
  primary: '#0a1828',       // Deep Navy
  primaryLight: '#162a43',
  primaryDark: '#040a12',
  accent: '#D79F88',        // Peach
  gold: '#Bfa37c',          // Gold
  bg: '#FAF6F0',
  border: '#E8D5C4',
  stone: '#4A4A4A',
};

export default function About() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg, minHeight: '85vh' }} className="pt-2 pb-16">
      <div className="max-w-[75rem] mx-auto px-6 lg:px-12">

        {/* Page Title - Tight spacing at top */}
        <div className="text-center mb-8 mt-2">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#D79F88] uppercase block mb-1">WHO WE ARE</span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '38px', fontWeight: 700, color: C.primary, margin: 0, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
            About Us
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.gold, margin: '8px auto 0' }} />
        </div>

        {/* Combined Card (Content & Image in one div) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-3xl p-8 sm:p-10 lg:p-12 border border-[#E8D5C4] shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
        >
          {/* Elegant Arch Image Shape (Left) */}
          <div className="lg:col-span-5 flex justify-center w-full relative py-4">
            {/* Background Decorative Frame - Arched style */}
            <div 
              className="absolute w-full max-w-[340px] aspect-[3/4] bg-[#FAF6F0] border border-[#E8D5C4] -translate-x-3 -translate-y-3 pointer-events-none" 
              style={{ borderRadius: '170px 170px 24px 24px' }}
            />
            
            {/* Main Image Container with Arched Window Shape */}
            <div 
              className="relative w-full max-w-[340px] aspect-[3/4] overflow-hidden shadow-xs bg-white border border-[#E8D5C4] z-10"
              style={{ borderRadius: '170px 170px 24px 24px' }}
            >
              <img
                src="/images/premium_fabrics.png"
                alt="AURORA Textile Craftsmanship"
                className="w-full h-full object-cover scale-[1.01] hover:scale-[1.05] transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-[#0a1828]/5 mix-blend-overlay"></div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 text-left pl-0 lg:pl-4">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#D79F88] uppercase mb-2 block">Our Heritage</span>
            <h2 
              className="text-[32px] lg:text-[40px] font-normal mb-5 leading-tight text-[#0a1828] font-serif"
            >
              Weaving Tradition, <br />
              <span className="italic text-[#D79F88]">Defining Future Style.</span>
            </h2>
            
            <p className="text-[14px] leading-relaxed text-[#4A4A4A] font-medium mb-8">
              <strong style={{ color: C.primary }}>AURORA Textile House</strong> is India's leading destination for premium, handcrafted textiles and elegant apparel. We combine generations of traditional craftsmanship with contemporary aesthetics to offer premium sarees, suitings, home fabrics, and children's collections that represent style, substance, and heritage.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-[#E8D5C4] pt-8">
              <div>
                <h4 className="text-[13px] font-bold text-[#0a1828] uppercase mb-2 font-sans tracking-wide">Authentic Quality</h4>
                <p className="text-[12px] text-[#4A4A4A] leading-relaxed font-medium">Every thread selected represents generations of weave expertise and strict quality benchmarks.</p>
              </div>
              <div>
                <h4 className="text-[13px] font-bold text-[#0a1828] uppercase mb-2 font-sans tracking-wide">Modern Procurement</h4>
                <p className="text-[12px] text-[#4A4A4A] leading-relaxed font-medium">Leveraging e-auctions and e-quotations for seamless, transparent and efficient trade.</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
