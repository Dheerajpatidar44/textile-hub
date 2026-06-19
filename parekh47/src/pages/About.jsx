import { motion } from 'framer-motion';
import { Award, Sparkles, ShieldCheck } from 'lucide-react';

const C = {
  primary: '#1E3E37',        // Deep Forest Green
  primaryLight: '#2C5A50',
  accent: '#E2A93E',         // Gold Accent
  gold: '#E2A93E',
  bg: '#FAF7F0',             // Warm Sand
  border: '#EFECE6',
  stone: '#536E67',
};

export default function About() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: C.bg, minHeight: '90vh' }} className="pt-4 pb-16">
      <div className="max-w-[75rem] mx-auto px-6 lg:px-12">

        {/* Page Title - minimized top margin closer to Navbar */}
        <div className="text-center mb-8 mt-2">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '48px', fontWeight: 500, color: C.primary, margin: 0, letterSpacing: '0.02em' }}>
            About Us
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.gold, margin: '10px auto 0' }} />
        </div>

        {/* Combined Card (Content & Image in one div) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-[32px] p-6 sm:p-10 lg:p-12 shadow-sm border border-[#EFECE6] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
        >
          {/* Asymmetrical Image Shape (Luxury Rounded Design) */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div 
              className="relative w-full max-w-[340px] aspect-[4/5] overflow-hidden shadow-lg border border-[#EFECE6] rounded-[60px_20px_60px_20px]"
            >
              <img
                src="/images/about_weavecraft.png"
                alt="WEAVECRAFT Craftsmanship"
                className="w-full h-full object-cover scale-[1.01] hover:scale-[1.05] transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-[#1E3E37]/10 mix-blend-overlay"></div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 text-left">
            <h2 
              className="text-[34px] lg:text-[42px] font-normal mb-5 leading-tight text-[#1E3E37]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Preserving Heritage, <br />
              Weaving Modern Elegance.
            </h2>
            
            <p className="text-[13.5px] leading-relaxed text-[#536E67] font-semibold mb-8">
              <strong style={{ color: C.primary }}>WEAVECRAFT Textile Mall</strong> is India's leading destination for premium, handcrafted textiles and elegant apparel. We combine generations of traditional craftsmanship with contemporary aesthetics to offer premium sarees, suitings, home fabrics, and children's collections that represent style, substance, and heritage.
            </p>

            {/* Micro details grid inside same div */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#FAF7F0]">
              {[
                { icon: Award, title: "Authentic Weaves", desc: "100% genuine traditional methods." },
                { icon: Sparkles, title: "Fine Curation", desc: "Handpicked premium designs." },
                { icon: ShieldCheck, title: "Trusted Brand", desc: "Serving bulk and retail clients." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#E2A93E]/10 flex items-center justify-center text-[#E2A93E] shrink-0 mb-1">
                    <item.icon size={18} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-[11px] font-bold text-[#1E3E37] m-0 tracking-wide uppercase">{item.title}</h4>
                  <p className="text-[11.5px] text-[#536E67] leading-normal m-0 font-semibold">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
