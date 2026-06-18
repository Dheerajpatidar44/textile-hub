import { motion } from 'framer-motion';

const C = {
  primary: '#8B1A4A',
  primaryLight: '#B02E65',
  accent: '#C4956A',
  accentLight: '#E0B88A',
  bg: '#FDF8F4',
  sand: '#F5EBE0',
  border: '#E8D8CC',
  soil: '#2C1A1A',
  stone: '#7A5E5E',
};


export default function About() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.bg, minHeight: '100vh' }} className="pt-[70px] pb-20">

      {/* Page Title */}
      <div style={{ background: '#ffffff', borderBottom: `1px solid ${C.border}`, padding: '20px 0 20px' }}>
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, color: C.soil, margin: 0 }}>
            About Us
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 8 }}>
            <div style={{ width: 32, height: 2, background: C.primary, borderRadius: 2 }} />
            <div style={{ width: 60, height: 1, background: 'rgba(139,26,74,0.2)', borderRadius: 1 }} />
          </div>
        </div>
      </div>

      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 pt-10">

        {/* Main card: Image + Content side by side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            background: '#ffffff',
            borderRadius: 20,
            border: `1px solid ${C.border}`,
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(139,26,74,0.06)',
          }}
        >
          <div className="flex flex-col lg:flex-row items-stretch">
            {/* Image side */}
            <div className="lg:w-[48%] w-full relative" style={{ minHeight: 400 }}>
              <img
                src="/images/about_artisan.png"
                alt="Ananta Fabrics Artisan"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: 400 }}
              />
              {/* Subtle gradient overlay on bottom for text readability */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%',
                background: 'linear-gradient(to top, rgba(139,26,74,0.5) 0%, transparent 100%)',
              }} />
              {/* Badge on image */}
              <div style={{
                position: 'absolute', bottom: 20, left: 20,
                background: 'rgba(253,248,244,0.95)',
                backdropFilter: 'blur(8px)',
                borderRadius: 12,
                padding: '12px 18px',
                border: `1px solid ${C.border}`,
              }}>
                <p style={{ fontSize: 11, color: C.accent, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', margin: '0 0 3px' }}>Established</p>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: C.soil, margin: 0, lineHeight: 1 }}>Since 2000</p>
              </div>
            </div>

            {/* Content side */}
            <div className="lg:w-[52%] w-full p-8 sm:p-10 lg:p-12 flex flex-col justify-center text-left">
              <span style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', display: 'block', marginBottom: 10 }}>
                Our Story ───
              </span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", color: C.soil, fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 700, margin: '0 0 16px', lineHeight: 1.25 }}>
                Celebrating Craftsmanship & Modern Luxury
              </h2>

              <div style={{ width: 40, height: 2, background: C.primary, borderRadius: 2, marginBottom: 18 }} />

              <p style={{ color: C.stone, fontSize: '15px', lineHeight: '1.8', margin: '0 0 14px' }}>
                Ananta Fabrics is India's premier textile destination, dedicated to celebrating handloom weaving traditions and high-quality modern retail textiles. We collaborate directly with master artisans to curate premium fabrics, heritage sarees, and luxury home linen for retail and commercial partners nationwide.
              </p>

              <p style={{ color: C.stone, fontSize: '14px', lineHeight: '1.75', margin: '0 0 24px' }}>
                With over 25 years of industry experience, we have built a trusted network across India, bringing the finest textiles closer to retailers and buyers with unmatched quality standards.
              </p>

              {/* Value tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['Heritage Crafts', 'Premium Quality', 'Trusted Partners', 'Pan India', 'Bulk Supply'].map(tag => (
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
