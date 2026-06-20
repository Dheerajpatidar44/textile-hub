import { motion } from 'framer-motion';

const C = {
  primary: '#BC4639',        // Deep Teal Green
  primaryLight: '#2C6E6E',
  accent: '#C39A58',         // Luxury Gold
  gold: '#C39A58',
  bg: '#FAF8F5',             // Warm Cream
  border: '#E6E1D8',
  stone: '#4A5A59',
};

export default function About() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg, minHeight: '85vh' }} className="pt-4 pb-16">
      <div className="max-w-[75rem] mx-auto px-6 lg:px-12">

        {/* Page Title */}
        <div className="text-center mb-8 mt-1">
          <span className="text-[10px] font-bold tracking-[0.25em] text-[#C39A58] uppercase block mb-1">WHO WE ARE</span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '40px', fontWeight: 500, color: C.primary, margin: 0, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
            About Us
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.accent, margin: '8px auto 0' }} />
        </div>

        {/* Combined Card (Content & Image in one div) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-xl p-8 sm:p-10 lg:p-12 shadow-sm border border-[#E6E1D8] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
        >
          {/* Elegant Image Shape (Left) */}
          <div className="lg:col-span-5 flex justify-center w-full relative py-4">
            {/* Background Decorative Gold Frame */}
            <div className="absolute w-full max-w-[350px] aspect-[4/5] rounded-t-[160px] rounded-b-xl border border-[#C39A58]/35 translate-x-3 translate-y-3 pointer-events-none" />
            
            {/* Main Image Container with elegant Arch shape */}
            <div 
              className="relative w-full max-w-[350px] aspect-[4/5] overflow-hidden shadow-sm rounded-t-[160px] rounded-b-xl bg-white border border-[#E6E1D8] z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80"
                alt="Sutradhar Hub Craftsmanship"
                className="w-full h-full object-cover scale-[1.01] hover:scale-[1.04] transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-[#BC4639]/5 mix-blend-overlay"></div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 text-left">
            <span className="text-[10px] font-extrabold tracking-[0.25em] text-[#C39A58] uppercase mb-2.5 block">Our Heritage</span>
            <h2 
              className="text-[34px] lg:text-[40px] font-normal mb-5 leading-tight text-[#BC4639] font-serif"
            >
              Preserving Heritage, <br />
              Weaving Modern Elegance.
            </h2>
            
            <p className="text-[13.5px] leading-relaxed text-[#4A5A59] font-medium mb-6">
              <strong style={{ color: C.primary }}>Sutradhar Hub</strong> is India's leading destination for premium, handcrafted textiles and elegant apparel. We combine generations of traditional craftsmanship with contemporary aesthetics to offer premium sarees, suitings, home fabrics, and children's collections that represent style, substance, and heritage.
            </p>

            <div className="grid grid-cols-2 gap-4 border-t border-[#E6E1D8] pt-6">
              <div>
                <h4 className="text-[12.5px] font-bold text-[#BC4639] uppercase mb-1 font-sans">Authentic Quality</h4>
                <p className="text-[11.5px] text-[#4A5A59] leading-normal font-medium">Every thread selected represents generations of weave expertise and strict quality benchmarks.</p>
              </div>
              <div>
                <h4 className="text-[12.5px] font-bold text-[#BC4639] uppercase mb-1 font-sans">Modern Procurement</h4>
                <p className="text-[11.5px] text-[#4A5A59] leading-normal font-medium">Leveraging e-auctions and e-quotations for seamless, transparent and efficient trade.</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
