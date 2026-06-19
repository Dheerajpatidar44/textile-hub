import { motion } from 'framer-motion';

const C = {
  primary: '#1b3252',
  primaryLight: '#243b61',
  accent: '#b08e5b',
  accentLight: '#ebdcb9',
  bg: '#fdfbf7',
  sand: '#f2e8dc',
  border: '#e6dfd5',
  soil: '#1a2538',
  stone: '#63738a',
};

export default function About() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg, minHeight: '100vh' }} className="pt-[124px] pb-20">

      {/* Page Title - minimal top gap */}
      <div style={{ background: '#ffffff', borderBottom: `1px solid ${C.border}`, padding: '14px 0 16px' }}>
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 700, color: C.soil, margin: 0 }}>
            About Us
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 8 }}>
            <div style={{ width: 32, height: 2, background: C.accent, borderRadius: 2 }} />
            <div style={{ width: 7, height: 7, background: C.accent, transform: 'rotate(45deg)', borderRadius: 1 }} />
            <div style={{ width: 60, height: 1, background: 'rgba(176,142,91,0.3)', borderRadius: 1 }} />
          </div>
        </div>
      </div>

      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 pt-8">

        {/* Main card: image + text side by side in same card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            background: '#ffffff',
            borderRadius: 20,
            border: `1px solid ${C.border}`,
            overflow: 'hidden',
            boxShadow: '0 8px 40px rgba(27,50,82,0.08)',
          }}
        >
          <div className="flex flex-col lg:flex-row items-stretch">
            {/* Image side with arch/rounded top - smaller height and width */}
            <div className="lg:w-[35%] w-full relative" style={{ minHeight: 340 }}>
              <div style={{
                width: '100%', height: '100%', minHeight: 340,
                overflow: 'hidden', position: 'relative',
                borderRadius: '20px 0 0 20px',
              }}>
                <img
                  src="/images/about_artisan.png"
                  alt="RUHANI WEAVES Artisan"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: 340 }}
                />
                {/* Gradient overlay */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, height: '45%',
                  background: 'linear-gradient(to top, rgba(27,50,82,0.6) 0%, transparent 100%)',
                }} />
                {/* Gold arch frame */}
                <div style={{
                  position: 'absolute', top: 12, left: 12, right: 12,
                  height: 4,
                  background: 'linear-gradient(90deg, transparent, #b08e5b, transparent)',
                  borderRadius: 2,
                  opacity: 0.7,
                }} />
              </div>
            </div>

            {/* Content side - wider */}
            <div className="lg:w-[65%] w-full p-8 sm:p-10 lg:p-12 flex flex-col justify-center text-left">
              <span style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', display: 'block', marginBottom: 10 }}>
                Our Story ───
              </span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", color: C.soil, fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 700, margin: '0 0 16px', lineHeight: 1.25 }}>
                Celebrating Craftsmanship &amp; Modern Luxury
              </h2>

              {/* Gold accent divider */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18 }}>
                <div style={{ width: 36, height: 2, background: C.accent, borderRadius: 2 }} />
                <div style={{ width: 7, height: 7, background: C.accent, transform: 'rotate(45deg)', borderRadius: 1 }} />
              </div>

              <p style={{ color: C.stone, fontSize: '15px', lineHeight: '1.8', margin: '0 0 14px' }}>
                RUHANI WEAVES Textile mall is India's premier textile destination, dedicated to celebrating handloom weaving traditions and high-quality modern retail textiles. We collaborate directly with master artisans to curate premium fabrics, heritage sarees, and luxury home linen for retail and commercial partners nationwide.
              </p>

              <p style={{ color: C.stone, fontSize: '14px', lineHeight: '1.75', margin: 0 }}>
                With over 25 years of industry experience, we have built a trusted network across India, bringing the finest textiles closer to retailers and buyers with unmatched quality standards.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
