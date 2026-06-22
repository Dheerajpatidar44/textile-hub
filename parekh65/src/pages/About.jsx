import { motion } from 'framer-motion';

const C = {
  primary: '#5E3B43',       // Burgundy
  primaryLight: '#BD9399',  // Accent Rose
  primaryDark: '#3B2329',   // Deep Burgundy
  accent: '#BD9399',
  bg: '#FAF6F6',
  border: '#EFE6E7',
  stone: '#6E6466',
  soil: '#5E3B43',
};

export default function About() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg, minHeight: '85vh' }} className="pt-2 pb-16">
      <div className="max-w-[85rem] mx-auto px-6 lg:px-12">

        {/* Page Title - Tight spacing at top */}
        <div className="text-center mb-8 mt-2">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '38px', fontWeight: 700, color: C.primary, margin: 0, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
            About Us
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.primaryLight, margin: '12px auto 0' }} />
        </div>

        {/* Combined Card (Content & Image in one div) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-[24px] p-6 sm:p-8 lg:p-10 border border-[#EFE6E7] shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center"
        >
          {/* Main Image Container with Sleek Rounded Corners Shape */}
          <div className="relative w-full h-[380px] lg:h-[480px] overflow-hidden rounded-[20px] shadow-sm border border-[#EFE6E7] bg-[#FAF6F6]">
            <img
              src="/images/navya_about.png"
              alt="Navya Weaves Craftsmanship Showroom"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3B2329]/60 to-transparent flex flex-col justify-end p-8 text-white">
              <span className="text-[10px] font-bold tracking-widest uppercase mb-1 text-[#D4B26F]">CRAFTSMANSHIP</span>
              <h3 className="text-[20px] font-serif font-bold text-white">Woven by the Masters</h3>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="flex flex-col justify-center text-left py-4 lg:py-8 pr-0 lg:pr-8">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#BD9399] uppercase mb-2 block">Our Heritage</span>
            <h2 className="text-[32px] lg:text-[40px] font-bold mb-6 leading-tight text-[#5E3B43] font-serif">
              Weaving Tradition, <br />
              <span className="text-[#BD9399]">Defining Future Style.</span>
            </h2>
            
            <p className="text-[14.5px] leading-relaxed text-[#6E6466] font-medium mb-8">
              <strong style={{ color: C.primary }}>Navya Weaves</strong> is India's leading destination for premium, handcrafted textiles and elegant apparel. We combine generations of traditional craftsmanship with contemporary aesthetics to offer premium sarees, suitings, home fabrics, and children's collections that represent style, substance, and heritage.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-[#EFE6E7] pt-8">
              <div>
                <h4 className="text-[14px] font-bold text-[#5E3B43] uppercase mb-2 font-sans tracking-wide">Authentic Quality</h4>
                <p className="text-[12.5px] text-[#6E6466] leading-relaxed">Every thread selected represents generations of weave expertise and strict quality benchmarks.</p>
              </div>
              <div>
                <h4 className="text-[14px] font-bold text-[#5E3B43] uppercase mb-2 font-sans tracking-wide">Modern Procurement</h4>
                <p className="text-[12.5px] text-[#6E6466] leading-relaxed">Leveraging e-Auctions and e-quotations for seamless, transparent and efficient trade.</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
