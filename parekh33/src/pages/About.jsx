import { motion } from 'framer-motion';

const C = {
  primary: '#0a1c3a',        // Primary Navy
  primaryLight: '#1f3458',  // Light Navy
  accent: '#d27265',         // Accent Coral/Terracotta
  bg: '#ffffff',
  sand: '#f7efe5',           // Soft Warm Sand
  border: '#ebdcd8',         // Soft Warm Border
  soil: '#0a1c3a',           // Deep Slate Navy
  stone: '#536476',          // Muted Slate Text
};

export default function About() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.bg, minHeight: '100vh' }} className="pt-16 pb-20">
      
      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 text-left pt-10">

        {/* Page Title Section */}
        <div className="text-center mb-12">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 700, color: C.soil, margin: '0 0 10px' }}>
            About Us
          </h1>
          <div style={{ width: 50, height: 2, background: C.accent, borderRadius: 2, margin: '0 auto' }} />
        </div>
  
        {/* Cohesive Unified Design Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            background: 'linear-gradient(135deg, #f7efe5 0%, #ffffff 100%)',
            borderRadius: '24px',
            border: `1.5px solid ${C.border}`,
            boxShadow: '0 20px 45px rgba(210, 114, 101, 0.06)',
            overflow: 'hidden',
          }}
          className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14 p-6 sm:p-10 lg:p-14"
        >
          {/* Left: Content Column */}
          <div className="lg:w-1/2 w-full text-left order-2 lg:order-1">
            <span style={{ color: C.accent }} className="text-[11px] font-bold tracking-[0.25em] uppercase">Our Story ───</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: C.soil }} className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6 leading-tight">
              Celebrating Craftsmanship & Modern Luxury
            </h2>
            
            <p style={{ color: C.stone, fontSize: '1.05rem', lineHeight: '1.8' }} className="margin-0 font-normal">
              LOOMERA Textile Retail is India's premier textile destination, dedicated to celebrating handloom weaving traditions and high-quality modern retail textiles. We collaborate directly with master artisans to curate high-quality fabrics, heritage sarees, and luxury home linen for retail and commercial partners nationwide.
            </p>
          </div>

          {/* Right: Custom Offset Image Design (New Shape, No arch) */}
          <div className="lg:w-1/2 w-full flex-shrink-0 order-1 lg:order-2 flex justify-center relative py-4">
            
            {/* Soft backdrop accent shape */}
            <div style={{
              position: 'absolute',
              top: '15%', left: '15%', width: '75%', height: '75%',
              background: 'rgba(210, 114, 101, 0.1)',
              borderRadius: '24px',
              zIndex: 1,
              transform: 'rotate(-3deg)'
            }} />
            
            {/* Main image container */}
            <div 
              style={{
                width: '85%',
                borderRadius: '24px',
                border: `4px solid #ffffff`,
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.08)',
                overflow: 'hidden',
                position: 'relative',
                zIndex: 2,
                aspectRatio: '4/3'
              }}
              className="hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&auto=format&fit=crop&q=80"
                alt="LOOMERA Textile Artistry"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  );
}
