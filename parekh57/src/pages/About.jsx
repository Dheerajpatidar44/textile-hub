import { motion } from 'framer-motion';

const C = {
  primary: '#D28D7A',
  primaryLight: '#E4B5A5',
  accent: '#E5A391',
  gold: '#D28D7A',
  bg: '#FAF8F5',
  border: '#EFE9E5',
  stone: '#6B5B56',
};

export default function About() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg, minHeight: '85vh' }} className="pt-2 pb-16">
      <div className="max-w-[75rem] mx-auto px-6 lg:px-12">

        {/* Page Title */}
        <div className="text-center mb-6 mt-0">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#D28D7A] uppercase block mb-1">WHO WE ARE</span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '38px', fontWeight: 600, color: C.primary, margin: 0, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
            About Us
          </h1>
          <div style={{ width: 40, height: 2, background: C.primary, margin: '8px auto 0' }} />
        </div>

        {/* Combined Card (Content & Image in one div) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-xl p-8 sm:p-10 lg:p-12 shadow-sm border border-[#EFE9E5] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
        >
          {/* Elegant Image Shape (Left) */}
          <div className="lg:col-span-5 flex justify-center w-full relative py-4">
            {/* Background Decorative Frame */}
            <div className="absolute w-full max-w-[380px] aspect-square rounded-[40px] border-2 border-[#E4B5A5]/60 -translate-x-4 -translate-y-4 pointer-events-none" />
            
            {/* Main Image Container */}
            <div 
              className="relative w-full max-w-[380px] aspect-square overflow-hidden shadow-md rounded-[40px] bg-white border border-[#EFE9E5] z-10"
            >
              <img
                src="/images/kaaya_about.png"
                alt="Kaaya Fabrics Craftsmanship"
                className="w-full h-full object-cover scale-[1.01] hover:scale-[1.04] transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-[#D28D7A]/5 mix-blend-overlay"></div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 text-left pl-0 lg:pl-6">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#D28D7A] uppercase mb-3 block">Our Heritage</span>
            <h2 
              className="text-[36px] lg:text-[44px] font-normal mb-6 leading-tight text-[#A56453] font-serif"
            >
              Preserving Heritage, <br />
              <span className="italic">Weaving Modern Elegance.</span>
            </h2>
            
            <p className="text-[14px] leading-relaxed text-[#6B5B56] font-medium mb-8">
              <strong style={{ color: C.primaryDark }}>Kaaya Fabrics</strong> is India's leading destination for premium, handcrafted textiles and elegant apparel. We combine generations of traditional craftsmanship with contemporary aesthetics to offer premium sarees, suitings, home fabrics, and children's collections that represent style, substance, and heritage.
            </p>

            <div className="grid grid-cols-2 gap-6 border-t border-[#EFE9E5] pt-8">
              <div>
                <h4 className="text-[13px] font-bold text-[#A56453] uppercase mb-2 font-sans">Authentic Quality</h4>
                <p className="text-[12px] text-[#6B5B56] leading-relaxed font-medium">Every thread selected represents generations of weave expertise and strict quality benchmarks.</p>
              </div>
              <div>
                <h4 className="text-[13px] font-bold text-[#A56453] uppercase mb-2 font-sans">Modern Procurement</h4>
                <p className="text-[12px] text-[#6B5B56] leading-relaxed font-medium">Leveraging e-auctions and e-quotations for seamless, transparent and efficient trade.</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
