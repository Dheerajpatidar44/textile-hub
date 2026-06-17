import { motion } from 'framer-motion';
import { Sparkles, Award, ShieldCheck, CheckCircle } from 'lucide-react';

const C = {
  primary: '#1B2B3F',
  primaryDark: '#0F1E2D',
  primaryLight: '#243B55',
  accent: '#C9A455',
  accentLight: '#F0E4C2',
  bg: '#F8F5EF',
  sand: '#F5EED8',
  border: '#E8E0D0',
  soil: '#1a1a2e',
  stone: '#6B7280',
  cream: '#FDFBF7',
};

export default function About() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.bg, minHeight: '100vh' }} className="pt-[70px] pb-24">
      <div className="max-w-[85rem] mx-auto px-6 lg:px-12">

        {/* Page Title */}
        <div className="text-center mb-6">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 600, color: C.primary, margin: '0 0 12px', letterSpacing: '0.02em' }}>
            Our Story
          </h1>
          <div style={{ width: 60, height: 2, background: C.accent, borderRadius: 2, margin: '0 auto' }} />
        </div>

        {/* Integrated Image & Content Div */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row bg-[#1B2B3F]"
          style={{ minHeight: '600px' }}
        >
          {/* Image Section - Takes full height of its container */}
          <div className="w-full lg:w-1/2 relative h-[400px] lg:h-auto overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1732024007292-c1c37f46fc59?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI5fHx8ZW58MHx8fHx8"
              alt="WEAVORA Craftsmanship"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            />
            {/* Subtle gradient overlay to blend with the dark background */}
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#1B2B3F] to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 lg:bottom-12 lg:left-12 flex items-center gap-3">
               <div className="w-12 h-12 rounded-full border border-[#C9A455] flex items-center justify-center bg-[#1B2B3F]/40 backdrop-blur-sm">
                  <Sparkles size={20} color="#C9A455" />
               </div>
               <div className="text-white text-[12px] font-bold uppercase tracking-widest leading-tight">
                 Heritage<br/>Crafted
               </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center p-10 lg:p-16 text-left relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div style={{ width: 30, height: 1, background: C.accent }} />
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase" style={{ color: C.accent }}>About Weavora</span>
            </div>

            <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-3xl lg:text-[44px] font-medium mb-6 leading-[1.15] text-white">
              Preserving heritage,<br />weaving modern elegance.
            </h2>
            
            <p className="text-[14.5px] leading-[1.8] text-[rgba(255,255,255,0.8)] mb-6 font-light">
              <strong className="text-white font-medium">WEAVORA Textile Mall</strong> is India's premier destination for high-quality ethnic textiles. We curate premium sarees, custom fabrics, fine dress materials, and luxury home furnishings that showcase the exquisite heritage of Indian weavers.
            </p>
            
            <p className="text-[14.5px] leading-[1.8] text-[rgba(255,255,255,0.8)] mb-10 font-light">
              By bridging traditional craftsmanship with contemporary designs, we deliver textiles that reflect luxury and refinement. Whether for retail patrons or bulk commercial enquiries, we guarantee exceptional material standards and dedicated customer care.
            </p>

            {/* Quality Checklist */}
            <div className="flex flex-col gap-4">
               {[
                 "Authentic Handloom & Traditional Designs",
                 "Premium Grade 100% Cotton & Silk Materials",
                 "Zero-Defect Quality Inspection Process"
               ].map((point, idx) => (
                 <div key={idx} className="flex items-center gap-4">
                   <div className="w-6 h-6 rounded-full bg-[rgba(201,164,85,0.15)] flex items-center justify-center shrink-0">
                     <CheckCircle size={14} color="#C9A455" />
                   </div>
                   <span className="text-[13px] text-[rgba(255,255,255,0.9)] tracking-wide font-medium">{point}</span>
                 </div>
               ))}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
