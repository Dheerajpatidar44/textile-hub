import { motion } from 'framer-motion';

const C = {
  primary: '#7E1242',       // Premium Burgundy
  primaryLight: '#9C2A5C',
  primaryDark: '#5C0C2F',
  accent: '#C17D91',        // Dusty Rose
  gold: '#Bfa37c',          // Warm Gold
  bg: '#FAF5F7',
  border: '#F0E5E9',
  stone: '#5F5558',
};

export default function About() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg, minHeight: '85vh' }} className="pt-2 pb-16">
      <div className="max-w-[75rem] mx-auto px-6 lg:px-12">

        {/* Page Title - Tight spacing at top */}
        <div className="text-center mb-8 mt-2">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#C17D91] uppercase block mb-1">WHO WE ARE</span>
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
          className="bg-white rounded-3xl p-8 sm:p-10 lg:p-12 border border-[#F0E5E9] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
        >
          {/* Elegant Image Shape (Left) */}
          <div className="lg:col-span-5 flex justify-center w-full relative py-4">
            {/* Background Decorative Frame - Octagonal/Polygonal style using clip-path */}
            <div 
              className="absolute w-full max-w-[360px] aspect-square bg-[#FAF5F7] border border-[#F0E5E9] -translate-x-4 -translate-y-4 pointer-events-none" 
              style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}
            />
            
            {/* Main Image Container with customized shape */}
            <div 
              className="relative w-full max-w-[360px] aspect-square overflow-hidden shadow-md bg-white border border-[#F0E5E9] z-10"
              style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}
            >
              <img
                src="/images/kasturi_about_us.png"
                alt="KASTURI Textile Craftsmanship"
                className="w-full h-full object-cover scale-[1.01] hover:scale-[1.05] transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-[#7E1242]/5 mix-blend-overlay"></div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 text-left pl-0 lg:pl-4">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#C17D91] uppercase mb-2 block">Our Heritage</span>
            <h2 
              className="text-[32px] lg:text-[40px] font-normal mb-5 leading-tight text-[#7E1242] font-serif"
            >
              Preserving Heritage, <br />
              <span className="italic text-[#C17D91]">Weaving Modern Elegance.</span>
            </h2>
            
            <p className="text-[14px] leading-relaxed text-[#5F5558] font-medium mb-8">
              <strong style={{ color: C.primary }}>KASTURI Textile Retail Mall</strong> is India's leading destination for premium, handcrafted textiles and elegant apparel. We combine generations of traditional craftsmanship with contemporary aesthetics to offer premium sarees, suitings, home fabrics, and children's collections that represent style, substance, and heritage.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-[#F0E5E9] pt-8">
              <div>
                <h4 className="text-[13px] font-bold text-[#7E1242] uppercase mb-2 font-sans tracking-wide">Authentic Quality</h4>
                <p className="text-[12px] text-[#5F5558] leading-relaxed font-medium">Every thread selected represents generations of weave expertise and strict quality benchmarks.</p>
              </div>
              <div>
                <h4 className="text-[13px] font-bold text-[#7E1242] uppercase mb-2 font-sans tracking-wide">Modern Procurement</h4>
                <p className="text-[12px] text-[#5F5558] leading-relaxed font-medium">Leveraging e-auctions and e-quotations for seamless, transparent and efficient trade.</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
