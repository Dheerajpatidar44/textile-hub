import { motion } from 'framer-motion';

const C = {
  primary: '#3B4755',
  primaryLight: '#4E5D6F',
  primaryDark: '#2C3540',
  accent: '#D4B26F',
  gold: '#D4B26F',
  bg: '#F5F6F8',
  border: '#E2E8F0',
  stone: '#5E6A7E',
  soil: '#3B4755',
};

export default function About() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: C.bg, minHeight: '85vh' }} className="pt-2 pb-16">
      <div className="max-w-[85rem] mx-auto px-6 lg:px-12">

        {/* Page Title - Tight spacing at top */}
        <div className="text-center mb-8 mt-2">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '38px', fontWeight: 700, color: C.primary, margin: 0, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
            About Us
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.gold, margin: '12px auto 0' }} />
        </div>

        {/* Combined Card (Content & Image in one div) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#E2E8F0] shadow-sm hover:shadow-lg transition-shadow duration-300 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-stretch"
        >
          {/* Main Image Container with offset rectangle Shape */}
          <div className="relative w-full h-full min-h-[350px] lg:min-h-full rounded-2xl overflow-hidden shadow-sm border border-[#E2E8F0]">
            <img
              src="/images/kumavati_about.png"
              alt="Kumavati Textile Craftsmanship"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3B4755]/60 to-transparent flex flex-col justify-end p-8 text-white">
              <span className="text-[10px] font-bold tracking-widest uppercase mb-1">CRAFTSMANSHIP</span>
              <h3 className="text-[20px] font-serif font-bold">Woven by the Masters</h3>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="flex flex-col justify-center text-left py-4 lg:py-8 pr-0 lg:pr-8">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#D4B26F] uppercase mb-2 block">Our Heritage</span>
            <h2 className="text-[32px] lg:text-[40px] font-bold mb-6 leading-tight text-[#3B4755] font-serif">
              Weaving Tradition, <br />
              <span className="text-[#D4B26F]">Defining Future Style.</span>
            </h2>
            
            <p className="text-[14px] leading-relaxed text-[#5E6A7E] font-medium mb-8">
              <strong style={{ color: C.primary }}>KUMAVATI Textile House</strong> is India's leading destination for premium, handcrafted textiles and elegant apparel. We combine generations of traditional craftsmanship with contemporary aesthetics to offer premium sarees, suitings, home fabrics, and children's collections that represent style, substance, and heritage.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-[#E2E8F0] pt-8">
              <div>
                <h4 className="text-[14px] font-bold text-[#3B4755] uppercase mb-2 font-sans tracking-wide">Authentic Quality</h4>
                <p className="text-[12.5px] text-[#5E6A7E] leading-relaxed">Every thread selected represents generations of weave expertise and strict quality benchmarks.</p>
              </div>
              <div>
                <h4 className="text-[14px] font-bold text-[#3B4755] uppercase mb-2 font-sans tracking-wide">Modern Procurement</h4>
                <p className="text-[12.5px] text-[#5E6A7E] leading-relaxed">Leveraging e-Auctions and e-quotations for seamless, transparent and efficient trade.</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
