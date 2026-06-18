import { motion } from 'framer-motion';
import { Award, Sparkles, ShieldCheck } from 'lucide-react';

const C = {
  primary: '#111E38',        // Deep Navy Blue
  primaryLight: '#1E2D4A',
  accent: '#DE5B49',         // Terracotta Red
  gold: '#DE5B49',
  bg: '#FAF9F5',             // Ivory Background
  border: '#EAEAEA',
  stone: '#5A6F8F',
};

export default function About() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: C.bg, minHeight: '90vh' }} className="pt-2 pb-16">
      <div className="max-w-[75rem] mx-auto px-6 lg:px-12">

        {/* Page Title - minimized top margin closer to Navbar */}
        <div className="text-center mb-6 mt-1">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '48px', fontWeight: 500, color: C.primary, margin: 0, letterSpacing: '0.02em' }}>
            About Us
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.gold, margin: '8px auto 0' }} />
        </div>

        {/* Combined Card (Content & Image in one div) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-[32px] p-6 sm:p-10 lg:p-12 shadow-sm border border-[#EAEAEA] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center text-left"
        >
          {/* Asymmetrical Image Shape (Luxury Rounded Design - organic dome/leaf shape) */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div 
              className="relative w-full max-w-[340px] aspect-[4/5] overflow-hidden shadow-lg border border-[#EAEAEA]"
              style={{ borderRadius: '140px 24px 140px 24px' }}
            >
              <img
                src="https://images.unsplash.com/photo-1606744824163-985d376605aa?w=1000&auto=format&fit=crop&q=80"
                alt="Veda Weaves Traditional Loom Craftsmanship"
                className="w-full h-full object-cover scale-[1.01] hover:scale-[1.05] transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-[#111E38]/10 mix-blend-overlay"></div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#DE5B49] uppercase mb-2.5 block">OUR HERITAGE</span>
            <h2 
              className="text-[34px] lg:text-[42px] font-normal mb-5 leading-tight text-[#111E38]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Preserving Heritage, <br />
              Weaving Modern Elegance.
            </h2>
            
            <p className="text-[13.5px] leading-relaxed text-[#5A6F8F] font-semibold mb-8">
              <strong style={{ color: C.primary }}>Veda Weaves Textile Mall</strong> is India's leading destination for premium, handcrafted textiles and elegant apparel. We combine generations of traditional craftsmanship with contemporary aesthetics to offer premium sarees, suitings, home fabrics, and children's collections that represent style, substance, and heritage.
            </p>

            {/* Micro details grid inside same div */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#FAF9F5]">
              {[
                { icon: Award, title: "Authentic Weaves", desc: "100% genuine traditional methods." },
                { icon: Sparkles, title: "Fine Curation", desc: "Handpicked premium designs." },
                { icon: ShieldCheck, title: "Trusted Brand", desc: "Serving bulk and retail clients." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-2 text-left">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center text-[#DE5B49] shrink-0 mb-1"
                    style={{ background: 'rgba(222, 91, 73, 0.08)' }}
                  >
                    <item.icon size={18} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-[11px] font-bold text-[#111E38] m-0 tracking-wide uppercase">{item.title}</h4>
                  <p className="text-[11.5px] text-[#5A6F8F] leading-normal m-0 font-semibold">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
