import { motion } from 'framer-motion';

const C = {
  primary: '#1B2A4A',
  accent: '#D4A842',
  crimson: '#8B1A2D',
  bg: '#F8F7F4',
  border: '#E2DDDA',
  stone: '#5A5560',
};

export default function About() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.bg, minHeight: '85vh' }} className="pb-16">
      <div className="max-w-[85rem] mx-auto px-6 lg:px-12">

        {/* Page Title */}
        <div className="text-center mb-8 mt-0">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '38px', fontWeight: 700, color: C.primary, margin: 0, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
            About Us
          </h1>
          <div style={{ width: 40, height: 1.5, background: `linear-gradient(90deg, ${C.crimson}, ${C.accent})`, margin: '12px auto 0' }} />
        </div>

        {/* Combined Content inside one single shaped card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative bg-white rounded-[40px] overflow-hidden border border-[#E2DDDA] shadow-sm flex flex-col lg:flex-row"
        >
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative h-[400px] lg:h-auto">
            <img
              src="/images/meraki_about_image.png"
              alt="Meraki Ethnic Craftsmanship"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Elegant overlay fade */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/90 hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent lg:hidden" />
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 p-8 lg:p-14 flex flex-col justify-center text-left z-10 relative bg-white">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase mb-3 block" style={{ color: C.accent }}>Our Heritage</span>
            <h2 className="text-[36px] lg:text-[44px] font-bold mb-6 leading-tight" style={{ color: C.primary, fontFamily: "'Playfair Display', serif" }}>
              Weaving Tradition, <br />
              <span style={{ color: C.crimson, fontStyle: 'italic' }}>Defining Future Style.</span>
            </h2>
            
            <p className="text-[14.5px] leading-relaxed font-medium mb-8" style={{ color: C.stone }}>
              <strong style={{ color: C.primary }}>Meraki Ethnic</strong> is India's leading destination for premium, handcrafted textiles and elegant apparel. We combine generations of traditional craftsmanship with contemporary aesthetics to offer premium sarees, suitings, home fabrics, and children's collections that represent style, substance, and heritage.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8" style={{ borderTop: `1px solid ${C.border}` }}>
              <div>
                <h4 className="text-[14px] font-bold uppercase mb-2 tracking-wide" style={{ color: C.primary }}>Authentic Quality</h4>
                <p className="text-[13px] leading-relaxed m-0" style={{ color: C.stone }}>Every thread selected represents generations of weave expertise and strict quality benchmarks.</p>
              </div>
              <div>
                <h4 className="text-[14px] font-bold uppercase mb-2 tracking-wide" style={{ color: C.primary }}>Modern Procurement</h4>
                <p className="text-[13px] leading-relaxed m-0" style={{ color: C.stone }}>Leveraging e-auctions and e-quotations for seamless, transparent and efficient trade.</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
