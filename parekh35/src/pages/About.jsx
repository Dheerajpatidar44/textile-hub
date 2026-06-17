import { motion } from 'framer-motion';
import { Sparkles, Award, Users, ShieldCheck } from 'lucide-react';

const C = {
  primary: '#56513E',
  primaryDark: '#3b372a',
  accent: '#a87c5e',
  bg: '#fdfaf6',
  sand: '#efe3d5',
  border: '#e6dacb',
  soil: '#3b2314',
  stone: '#7c6a5e',
};

export default function About() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.bg, minHeight: '100vh' }} className="pt-[80px] pb-20">
      
      <div className="max-w-[85rem] mx-auto px-6 sm:px-10 text-left pt-0">

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 4vw, 46px)', fontWeight: 700, color: C.soil, margin: '0 0 10px' }}>
            About Us
          </h1>
          <div style={{ width: 50, height: 2, background: C.accent, borderRadius: 2, margin: '0 auto' }} />
        </div>
  
        {/* Unified Card — content + image together in a single custom container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{
            background: '#ffffff',
            borderRadius: '32px',
            border: `1.5px solid ${C.border}`,
            boxShadow: '0 30px 70px rgba(59, 35, 20, 0.06)',
            overflow: 'hidden',
            position: 'relative',
          }}
          className="p-8 sm:p-10 lg:p-12"
        >
          {/* Top subtle decorative pattern */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 6,
            background: `linear-gradient(90deg, ${C.primary}, ${C.accent}, ${C.sand})`
          }} />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Image side: Arched Shape, different image */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div 
                style={{ 
                  position: 'relative', 
                  width: '100%', 
                  maxWidth: '380px',
                  height: '480px',
                  overflow: 'hidden',
                  borderRadius: '240px 240px 24px 24px', // Modern Arch Window shape
                  border: '8px solid #fffdfb',
                  boxShadow: '0 20px 45px rgba(59, 35, 20, 0.12)',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww" // High-end traditional Indian fabric rolls
                  alt="AAVANIKA Textile Craftsmanship"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(59,35,20,0.15) 0%, transparent 60%)',
                }} />
              </div>
            </div>

            {/* Content side */}
            <div className="lg:col-span-7 w-full flex flex-col justify-center text-left">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[11px] font-bold tracking-[0.25em] uppercase" style={{ color: C.accent }}>Our Story</span>
                <div style={{ width: 30, height: 1, background: C.accent }} />
              </div>

              <h2 style={{ fontFamily: "'Playfair Display', serif", color: C.soil }} className="text-3xl sm:text-4xl lg:text-[40px] font-bold mb-6 leading-tight">
                Preserving heritage, weaving modern elegance.
              </h2>
              
              <p style={{ color: C.stone, fontSize: '14.5px', lineHeight: '1.8' }} className="m-0 mb-6 font-normal">
                <strong>AAVANIKA Textile Retail</strong> is India's premier destination for high-quality ethnic textiles. We curate premium sarees, custom fabrics, fine dress materials, and luxury home furnishings that showcase the exquisite heritage of Indian weavers.
              </p>
              
              <p style={{ color: C.stone, fontSize: '14.5px', lineHeight: '1.8' }} className="m-0 mb-8 font-normal">
                By bridging traditional craftsmanship with contemporary designs, we deliver textiles that reflect luxury and refinement. Whether for retail patrons or bulk commercial enquiries, we guarantee exceptional material standards and dedicated customer care.
              </p>

              {/* Grid of Key Features/Stats */}
              <div className="grid grid-cols-3 gap-4 border-t pt-8" style={{ borderColor: 'rgba(230,218,203,0.5)' }}>
                {[
                  { icon: Sparkles, label: "Heritage Designs", val: "Traditional" },
                  { icon: Award, label: "Premium Grade", val: "100% Cotton/Silk" },
                  { icon: ShieldCheck, label: "Quality Inspected", val: "Zero-defect" }
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col items-start">
                    <div className="mb-2 p-1.5 rounded-lg" style={{ background: '#fcf8f2' }}>
                      <stat.icon size={16} style={{ color: C.accent }} />
                    </div>
                    <h4 className="text-[12.5px] font-bold" style={{ color: C.soil }}>{stat.val}</h4>
                    <p className="text-[10px] mt-0.5" style={{ color: C.stone }}>{stat.label}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
