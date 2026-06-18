import { motion } from 'framer-motion';

const C = {
  primary: '#A3704C',      // Gold/Bronze accent
  primaryLight: '#C49272',
  accent: '#A3704C',
  accentLight: '#F4EFEA',
  bg: '#FAF8F5',
  sand: '#F4EDE4',
  border: '#EAE5DE',
  soil: '#231F20',
  stone: '#5B5653',
};

export default function About() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.bg, minHeight: '100vh' }} className="pt-[110px] pb-20">
      
      {/* Page Title inside section with minimal gap */}
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 mb-8 text-left">
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, color: C.soil, margin: 0 }}>
          About Us
        </h1>
        <div style={{ width: 44, height: 2, background: C.primary, borderRadius: 2, marginTop: 10 }} />
      </div>

      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14">
        
        {/* Main single wrapper div with premium UI */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            background: '#ffffff',
            borderRadius: 16,
            border: `1px solid ${C.border}`,
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(163, 112, 76, 0.05)',
          }}
          className="p-6 sm:p-10 lg:p-12"
        >
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Image side with asymmetric arched shape */}
            <div className="lg:w-[45%] w-full relative shrink-0">
              <div style={{
                borderRadius: '160px 160px 16px 16px', // Beautiful arched shape matching hero
                overflow: 'hidden',
                border: `1px solid ${C.border}`,
                aspectRatio: '3/4',
              }}>
                <img
                  src="/images/loomcraft_about_heritage.png"
                  alt="LoomCraft India Heritage Loom Weaving"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              {/* Badge on image */}
              <div style={{
                position: 'absolute', bottom: 20, left: 20,
                background: 'rgba(250,248,245,0.96)',
                backdropFilter: 'blur(8px)',
                borderRadius: 12,
                padding: '10px 16px',
                border: `1px solid ${C.border}`,
                boxShadow: '0 4px 16px rgba(35,31,32,0.08)',
              }} className="text-left">
                <p style={{ fontSize: 9, color: C.accent, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', margin: '0 0 2px' }}>ESTABLISHED</p>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: C.soil, margin: 0, lineHeight: 1 }}>Since 2000</p>
              </div>
            </div>

            {/* Content side */}
            <div className="lg:w-[55%] w-full flex flex-col justify-center text-left">
              <span style={{ color: C.accent, fontSize: 10, fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>
                ABOUT OUR BRAND ────
              </span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", color: C.soil, fontSize: 'clamp(24px, 3.2vw, 34px)', fontWeight: 700, margin: '0 0 16px', lineHeight: 1.2 }}>
                LoomCraft India
              </h2>
              
              <div style={{ width: 44, height: 2, background: C.primary, borderRadius: 2, marginBottom: 20 }} />

              <h3 style={{ fontFamily: "'Playfair Display', serif", color: C.accent, fontSize: '18px', fontWeight: 600, margin: '0 0 12px', lineHeight: 1.4 }}>
                Celebrating Weaving Craftsmanship & Modern Textiles
              </h3>

              <p style={{ color: C.stone, fontSize: '14.5px', lineHeight: '1.75', margin: '0 0 16px' }}>
                LoomCraft India is a premier destination for fine textiles, dedicated to preserving traditional handloom heritage and offering state-of-the-art fabrics for commercial and retail segments. We partner with expert weavers and artisan communities across India to deliver exceptional-quality materials.
              </p>

              <p style={{ color: C.stone, fontSize: '14px', lineHeight: '1.7', margin: '0 0 28px' }}>
                From heritage sarees and customized suiting/shirting products to premium home bed linen, our designs weave together comfort, culture, and high durability to support your business requirements.
              </p>

              {/* Value tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8.5 }}>
                {['Heritage Weaves', 'Premium Quality', 'Direct Sourcing', 'Pan India Reach', 'Trade Support'].map(tag => (
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
