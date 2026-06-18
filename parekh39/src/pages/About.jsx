import { motion } from 'framer-motion';
import { Sparkles, CheckCircle } from 'lucide-react';

const C = {
  primary: '#1A2A44',
  accent: '#B56A79',
  bg: '#FFF5F5',
  sand: '#FDECEE',
  border: '#F6D6DA',
};

export default function About() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: C.bg, minHeight: '100vh' }} className="pt-[60px] pb-24">
      <div className="max-w-[70rem] mx-auto px-6 lg:px-12">

        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 600, color: C.primary, margin: '0 0 12px', letterSpacing: '0.02em' }}>
            About Us
          </h1>
          <div style={{ width: 60, height: 2, background: C.accent, margin: '0 auto' }} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-[32px] p-8 lg:p-12 shadow-sm border border-[#F6D6DA] flex flex-col md:flex-row items-center gap-10 lg:gap-16"
        >
          {/* Smaller Image */}
          <div className="w-full md:w-[30%] shrink-0">
            <div className="relative w-full aspect-square md:aspect-[4/5] rounded-[24px] overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80"
                alt="Varnika Weaves Craftsmanship"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#1A2A44]/10 mix-blend-overlay"></div>
            </div>
          </div>

          {/* Minimal Content */}
          <div className="w-full md:w-[70%]">
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: C.primary }} className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Preserving heritage, weaving elegance.
            </h2>
            
            <p className="text-[15px] leading-relaxed text-[#6B7280] font-medium max-w-lg">
              <strong style={{ color: C.primary }}>Varnika Weaves</strong> is India's premier destination for high-quality ethnic textiles. We bridge traditional craftsmanship with contemporary designs to deliver premium fabrics that reflect luxury, refinement, and our rich cultural heritage.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
