import { motion } from 'framer-motion';

const C = {
  primary: '#96BADE',       // Dark Classic Blue / Navy
  primaryLight: '#3FA2F6',  // Bright Sky/Pastel Blue
  primaryDark: '#000B58',   // Deep Royal Blue
  accent: '#3FA2F6',        // Bright Sky/Pastel Blue
  bg: '#F4F8FC',
  border: '#D0E1FD',
  stone: '#4A5568',
  soil: '#96BADE',
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
          className="bg-white rounded-[24px] p-6 sm:p-8 lg:p-10 border border-[#D0E1FD] shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center"
        >
          {/* Main Image Container with Asymmetrical Arch / Dome Shape */}
          <div className="relative w-full h-[380px] lg:h-[480px] overflow-hidden rounded-t-[180px] rounded-b-[24px] shadow-sm border border-[#D0E1FD] bg-[#F4F8FC]">
            <img
              src="/images/saanjh_about.png"
              alt="Saanjh Textiles Craftsmanship"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000B58]/60 to-transparent flex flex-col justify-end p-8 text-white">
              <span className="text-[10px] font-bold tracking-widest uppercase mb-1">CRAFTSMANSHIP</span>
              <h3 className="text-[20px] font-serif font-bold text-white">Woven by the Masters</h3>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="flex flex-col justify-center text-left py-4 lg:py-8 pr-0 lg:pr-8">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#3FA2F6] uppercase mb-2 block">Our Heritage</span>
            <h2 className="text-[32px] lg:text-[40px] font-bold mb-6 leading-tight text-[#000B58] font-serif">
              Weaving Tradition, <br />
              <span className="text-[#96BADE]">Defining Future Style.</span>
            </h2>
            
            <p className="text-[14.5px] leading-relaxed text-[#4A5568] font-medium mb-8">
              <strong style={{ color: C.primaryDark }}>Saanjh Textiles</strong> is India's leading destination for premium, handcrafted textiles and elegant apparel. We combine generations of traditional craftsmanship with contemporary aesthetics to offer premium sarees, suitings, home fabrics, and children's collections that represent style, substance, and heritage.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-[#D0E1FD] pt-8">
              <div>
                <h4 className="text-[14px] font-bold text-[#000B58] uppercase mb-2 font-sans tracking-wide">Authentic Quality</h4>
                <p className="text-[12.5px] text-[#4A5568] leading-relaxed">Every thread selected represents generations of weave expertise and strict quality benchmarks.</p>
              </div>
              <div>
                <h4 className="text-[14px] font-bold text-[#000B58] uppercase mb-2 font-sans tracking-wide">Modern Procurement</h4>
                <p className="text-[12.5px] text-[#4A5568] leading-relaxed">Leveraging e-Auctions and e-quotations for seamless, transparent and efficient trade.</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
