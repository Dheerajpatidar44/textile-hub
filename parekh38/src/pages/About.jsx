import { motion } from 'framer-motion';
import { Sparkles, CheckCircle } from 'lucide-react';

const C = {
  primary: '#2C1E16',
  accent: '#8A4A51',
  bg: '#F9F5F0',
  sand: '#F5EED8',
  border: '#E8DCC8',
};

export default function About() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: C.bg, minHeight: '100vh' }} className="pt-[80px] pb-24">
      <div className="max-w-[85rem] mx-auto px-6 lg:px-12">

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 600, color: C.primary, margin: '0 0 12px', letterSpacing: '0.02em' }}>
            About Us
          </h1>
          <div style={{ width: 60, height: 2, background: C.accent, margin: '0 auto' }} />
        </div>

        {/* Integrated Image & Content Div - New Overlapping Shape */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full flex flex-col lg:flex-row items-center justify-center gap-0 lg:gap-8"
        >
          {/* Image Section - large  arch shape */}
          <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[700px] overflow-hidden z-10 ] lg:] lg:]" style={{ border: `8px solid ${C.bg}`, boxShadow: '0 20px 60px rgba(44,30,22,0.1)' }}>
            <img
              src="/images/katha_about.png"
              alt="Katha Weaves Craftsmanship"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C1E16]/80 via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-8 left-8 flex items-center gap-4">
               <div className="w-14 h-14  border border-white/40 flex items-center justify-center bg-white/10 backdrop-blur-md">
                  <Sparkles size={24} color="#F9F5F0" />
               </div>
               <div className="text-[#F9F5F0] text-[15px] font-bold uppercase tracking-widest leading-tight">
                 Heritage<br/>Crafted
               </div>
            </div>
          </div>

          {/* Content Section - overlapping card */}
          <div className="w-full lg:w-[55%] relative z-20 bg-white p-10 lg:p-16 ] shadow-xl mt-[-80px] lg:mt-0 lg:-ml-24" style={{ border: `1px solid ${C.border}` }}>
            <div className="flex items-center gap-3 mb-6">
              <div style={{ width: 40, height: 2, background: C.accent }} />
              <span className="text-[12px] font-bold tracking-[0.2em] uppercase" style={{ color: C.accent }}>About Katha Weaves</span>
            </div>

            <h2 style={{ fontFamily: "'Playfair Display', serif", color: C.primary }} className="text-4xl lg:text-[52px] font-bold mb-8 leading-[1.1]">
              Preserving heritage,<br />weaving elegance.
            </h2>
            
            <p className="text-[16px] leading-[1.8] text-[#6B7280] mb-6 font-medium">
              <strong style={{ color: C.primary }}>Katha Weaves</strong> is India's premier destination for high-quality ethnic textiles. We curate premium sarees, custom fabrics, fine dress materials, and luxury home furnishings that showcase the exquisite heritage of Indian weavers.
            </p>
            
            <p className="text-[16px] leading-[1.8] text-[#6B7280] mb-10 font-medium">
              By bridging traditional craftsmanship with contemporary designs, we deliver textiles that reflect luxury and refinement. Whether for retail patrons or bulk commercial enquiries, we guarantee exceptional material standards and dedicated customer care.
            </p>

            {/* Quality Checklist */}
            <div className="flex flex-col gap-6">
               {[
                 "Authentic Handloom & Traditional Designs",
                 "Premium Grade 100% Cotton & Silk Materials",
                 "Zero-Defect Quality Inspection Process"
               ].map((point, idx) => (
                 <div key={idx} className="flex items-center gap-4">
                   <div className="w-10 h-10  flex items-center justify-center shrink-0" style={{ background: 'rgba(138, 74, 81, 0.1)' }}>
                     <CheckCircle size={18} color={C.accent} />
                   </div>
                   <span className="text-[15px] tracking-wide font-bold" style={{ color: C.primary }}>{point}</span>
                 </div>
               ))}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
