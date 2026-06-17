import { motion } from 'framer-motion';
import { Sparkles, CheckCircle } from 'lucide-react';

const C = {
  primary: '#1a1a2e',
  accent: '#C9A455',
  bg: '#FDFBF7',
  sand: '#F5EED8',
  border: '#E8E0D0',
};

export default function About() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.bg, minHeight: '100vh' }} className="pt-[80px] pb-24">
      <div className="max-w-[85rem] mx-auto px-6 lg:px-12">

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 600, color: C.primary, margin: '0 0 12px', letterSpacing: '0.02em' }}>
            About Us
          </h1>
          <div style={{ width: 60, height: 2, background: C.accent, borderRadius: 2, margin: '0 auto' }} />
        </div>

        {/* Integrated Image & Content Div */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full rounded-3xl overflow-hidden shadow-sm flex flex-col lg:flex-row bg-white"
          style={{ minHeight: '600px', border: `1px solid ${C.border}` }}
        >
          {/* Content Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center p-10 lg:p-20 text-left relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div style={{ width: 30, height: 1, background: C.accent }} />
              <span className="text-[12px] font-bold tracking-[0.2em] uppercase" style={{ color: C.accent }}>About SareeSutra</span>
            </div>

            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: C.primary }} className="text-4xl lg:text-[48px] font-bold mb-6 leading-[1.15]">
              Preserving heritage,<br />weaving elegance.
            </h2>
            
            <p className="text-[15px] leading-[1.8] text-[#6B7280] mb-6 font-medium">
              <strong style={{ color: C.primary }}>SareeSutra Textile Mall</strong> is India's premier destination for high-quality ethnic textiles. We curate premium sarees, custom fabrics, fine dress materials, and luxury home furnishings that showcase the exquisite heritage of Indian weavers.
            </p>
            
            <p className="text-[15px] leading-[1.8] text-[#6B7280] mb-10 font-medium">
              By bridging traditional craftsmanship with contemporary designs, we deliver textiles that reflect luxury and refinement. Whether for retail patrons or bulk commercial enquiries, we guarantee exceptional material standards and dedicated customer care.
            </p>

            {/* Quality Checklist */}
            <div className="flex flex-col gap-5">
               {[
                 "Authentic Handloom & Traditional Designs",
                 "Premium Grade 100% Cotton & Silk Materials",
                 "Zero-Defect Quality Inspection Process"
               ].map((point, idx) => (
                 <div key={idx} className="flex items-center gap-4">
                   <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(201,164,85,0.1)' }}>
                     <CheckCircle size={16} color={C.accent} />
                   </div>
                   <span className="text-[14px] tracking-wide font-bold" style={{ color: C.primary }}>{point}</span>
                 </div>
               ))}
            </div>
          </div>

          {/* Image Section - Takes full height of its container */}
          <div className="w-full lg:w-1/2 relative h-[400px] lg:h-auto overflow-hidden">
            <img
              src="/images/about.png"
              alt="SareeSutra Craftsmanship"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            />
            {/* Subtle gradient overlay to blend */}
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-black/60 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 right-6 lg:bottom-12 lg:right-12 flex items-center gap-4">
               <div className="text-white text-[13px] font-bold uppercase tracking-widest leading-tight text-right">
                 Heritage<br/>Crafted
               </div>
               <div className="w-14 h-14 rounded-full border border-white/40 flex items-center justify-center bg-white/10 backdrop-blur-md">
                  <Sparkles size={24} color="#ffffff" />
               </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
