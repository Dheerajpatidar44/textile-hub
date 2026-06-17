import { motion } from 'framer-motion';

const C = {
  primary: '#4A1942',
  primaryLight: '#6B2D5B',
  accent: '#8B5E3C',
  accentLight: '#C49A6C',
  bg: '#FAF6F1',
  sand: '#F5EDE4',
  border: '#E8DDD4',
  soil: '#3D1F35',
  stone: '#7A6670',
};

export default function About() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.bg, minHeight: '100vh' }} className="pt-[80px] pb-20">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-10 text-left pt-0">

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 700, color: C.soil, margin: '0 0 10px' }}>
            About Us
          </h1>
          <div style={{ width: 50, height: 2, background: C.accent, borderRadius: 2, margin: '0 auto' }} />
        </div>
  
        {/* Unified Card — content + image together */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            background: '#ffffff',
            borderRadius: '28px',
            border: `1.5px solid ${C.border}`,
            boxShadow: '0 20px 50px rgba(74, 25, 66, 0.06)',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {/* Decorative accent bar at top */}
          <div style={{ height: 4, background: `linear-gradient(90deg, ${C.primary}, ${C.accent}, ${C.accentLight})` }} />
          
          <div className="flex flex-col lg:flex-row items-stretch">
            {/* Image side */}
            <div className="lg:w-1/2 w-full relative" style={{ minHeight: 350 }}>
              {/* Decorative hexagonal clip shape */}
              <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
                <img
                  src="https://plus.unsplash.com/premium_photo-1663088624029-5886b4fe8960?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRyZXNzJTIwc3VpdHN8ZW58MHx8MHx8fDA%3D"
                  alt="THREADORA Textile Artistry"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                {/* Overlay gradient */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(135deg, rgba(74,25,66,0.15) 0%, transparent 60%)',
                }} />
              </div>
            </div>

            {/* Content side */}
            <div className="lg:w-1/2 w-full p-8 sm:p-10 lg:p-14 flex flex-col justify-center text-left">
              <span style={{ color: C.accent }} className="text-[11px] font-bold tracking-[0.25em] uppercase">Our Story ───</span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", color: C.soil }} className="text-3xl sm:text-4xl font-bold mt-3 mb-6 leading-tight">
                Celebrating Craftsmanship & Modern Luxury
              </h2>
              
              <p style={{ color: C.stone, fontSize: '1.05rem', lineHeight: '1.8' }} className="margin-0 font-normal mb-6">
                THREADORA Textile Retail is India's premier textile destination, dedicated to celebrating handloom weaving traditions and high-quality modern retail textiles. We collaborate directly with master artisans to curate high-quality fabrics, heritage sarees, and luxury home linen for retail and commercial partners nationwide.
              </p>

              {/* Value tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['Heritage Crafts', 'Premium Quality', 'Trusted Partners', 'Pan India'].map(tag => (
                  <span key={tag} style={{
                    padding: '6px 14px', borderRadius: 20,
                    background: C.sand, border: `1px solid ${C.border}`,
                    fontSize: 11, fontWeight: 600, color: C.accent,
                    letterSpacing: '0.04em',
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
