import { motion } from 'framer-motion';

const C = {
  primary: '#043e3d',        // Deep Teal Green
  primaryLight: '#065452',
  accent: '#C39A58',         // Luxury Gold
  gold: '#C39A58',
  bg: '#FAF6F0',             // Warm Cream
  border: '#E6E1D8',
  stone: '#4A5A59',
};

export default function About() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg, minHeight: '90vh' }} className="pt-2 pb-16">
      <div className="max-w-[75rem] mx-auto px-6 lg:px-12">

        {/* Page Title */}
        <div className="text-center mb-10 mt-1">
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
            {/* Background Decorative Gold Frame */}
            <div className="absolute w-full max-w-[295px] aspect-[4/5] rounded-tl-[80px] rounded-br-[80px] rounded-tr-[24px] rounded-bl-[24px] border border-[#C39A58]/50 translate-x-3 translate-y-3 pointer-events-none" />
            
            {/* Main Image Container with asymmetric leaf/shield corners */}
            <div 
              className="relative w-full max-w-[295px] aspect-[4/5] overflow-hidden shadow-lg rounded-tl-[80px] rounded-br-[80px] rounded-tr-[24px] rounded-bl-[24px] bg-white border border-[#E6E1D8] z-10"
              style={{ boxShadow: '0 20px 40px rgba(4, 62, 61, 0.08)' }}
            >
              <img
                src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGZhc2hpb258ZW58MHwxfDB8fHww"
                alt="Paridhi Textiles Craftsmanship"
                className="w-full h-full object-cover scale-[1.01] hover:scale-[1.05] transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-[#043e3d]/5 mix-blend-overlay"></div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 text-left">
            <span className="text-[10px] font-extrabold tracking-[0.25em] text-[#C39A58] uppercase mb-2.5 block">Our Heritage</span>
            <h2 
              className="text-[34px] lg:text-[42px] font-normal mb-5 leading-tight text-[#043e3d]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Preserving Heritage, <br />
              Weaving Modern Elegance.
            </h2>
            
            <p className="text-[13.5px] leading-relaxed text-[#4A5A59] font-semibold mb-6">
              <strong style={{ color: C.primary }}>Paridhi Textiles</strong> is India's leading destination for premium, handcrafted textiles and elegant apparel. We combine generations of traditional craftsmanship with contemporary aesthetics to offer premium sarees, suitings, home fabrics, and children's collections that represent style, substance, and heritage.
            </p>

            <div className="grid grid-cols-2 gap-4 border-t border-[#E6E1D8] pt-6">
              <div>
                <h4 className="text-[12px] font-bold text-[#043e3d] uppercase mb-1">Authentic Quality</h4>
                <p className="text-[11.5px] text-[#4A5A59] leading-normal">Every thread selected represents generations of weave expertise.</p>
              </div>
              <div>
                <h4 className="text-[12px] font-bold text-[#043e3d] uppercase mb-1">Modern Service</h4>
                <p className="text-[11.5px] text-[#4A5A59] leading-normal">Leveraging e-Auctions and e-Quotations for smooth procurement.</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
