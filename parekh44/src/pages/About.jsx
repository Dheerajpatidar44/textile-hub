import { motion } from 'framer-motion';
import { Award, Sparkles, ShieldCheck } from 'lucide-react';

const C = {
  primary: '#222842',        // Slate Navy
  primaryLight: '#30375E',
  accent: '#8D6F97',         // Mauve
  gold: '#D4B26F',           // Gold
  bg: '#FAF9FC',             // Soft lavender-grey background
  border: '#EAE7ED',
  stone: '#5C627A',
};

export default function About() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: C.bg, minHeight: '90vh' }} className="pt-10 pb-16">
      <div className="max-w-[75rem] mx-auto px-6 lg:px-12">

        {/* Page Title - Small top spacing */}
        <div className="text-center mb-10">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '48px', fontWeight: 500, color: C.primary, margin: 0, letterSpacing: '0.02em' }}>
            About Us
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.gold, margin: '12px auto 0' }} />
        </div>

        {/* Combined Container (Content & Image in one div) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-[24px] p-8 lg:p-12 shadow-sm border border-[#EAE7ED] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
        >
          {/* Image with Changed Shape (Organic Blob Shape) */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div 
              className="relative w-[300px] sm:w-[350px] aspect-[4/5] overflow-hidden shadow-lg border border-[#EAE7ED]"
              style={{
                borderRadius: '30% 70% 70% 30% / 50% 30% 70% 50%',
              }}
            >
              <img
                src="/images/about_showcase.png"
                alt="THREADSPHERE Craftsmanship"
                className="w-full h-full object-cover scale-[1.03] hover:scale-[1.08] transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-[#222842]/10 mix-blend-overlay"></div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 text-left">
            <h2 
              className="text-[36px] lg:text-[44px] font-normal mb-6 leading-tight text-[#222842]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Preserving heritage, <br />
              weaving modern elegance.
            </h2>
            
            <p className="text-[14px] leading-relaxed text-[#5C627A] font-medium mb-8">
              <strong style={{ color: C.primary }}>THREADSPHERE Textile Retail</strong> is India's leading destination for high-quality, handcrafted textiles and elegant apparel. We combine generations of traditional craftsmanship with contemporary aesthetics to offer premium sarees, suitings, home fabrics, and children's collections that represent style, substance, and heritage.
            </p>

            {/* Micro details grid inside same div */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#FAF9FC]">
              {[
                { icon: Award, title: "Authentic Weaves", desc: "100% genuine traditional methods." },
                { icon: Sparkles, title: "Fine Curation", desc: "Handpicked premium designs." },
                { icon: ShieldCheck, title: "Trusted Brand", desc: "Serving bulk and retail clients." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF9FC] flex items-center justify-center text-[#8D6F97] shrink-0 mb-1">
                    <item.icon size={18} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-[12px] font-bold text-[#222842] m-0 tracking-wide uppercase">{item.title}</h4>
                  <p className="text-[11px] text-[#5C627A] leading-normal m-0 font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
