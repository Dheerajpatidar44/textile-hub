import { motion } from 'framer-motion';

const C = {
  primary: '#3B4755',
  primaryLight: '#4E5D6F',
  primaryDark: '#2C3540',
  accent: '#D4B26F',
  gold: '#D4B26F',
  bg: '#F5F6F8',
  border: '#E2E8F0',
  stone: '#5E6A7E',
  soil: '#3B4755',
};

const galleryItems = [
  { title: "Global Textile Summit 2026", desc: "Our leadership team presenting the future of sustainable fabrics to international delegates and industry leaders.", category: "Event", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60" },
  { title: "New Manufacturing Unit Inauguration", desc: "Expanding our footprint with a state-of-the-art facility in Gujarat, boosting our production capacity by 40%.", category: "Infrastructure", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60" },
  { title: "Award for Excellence in Exports", desc: "Receiving the national award for outstanding contribution to textile exports from the Ministry of Commerce.", category: "Achievement", image: "https://images.unsplash.com/photo-1561489422-45de3d015e3e?w=800&auto=format&fit=crop&q=60" },
  { title: "Annual Retailers Meet", desc: "Celebrating success and building stronger bonds with our 50,000+ retail partners across India.", category: "Community", image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800&auto=format&fit=crop&q=60" },
  { title: "Launch of Eco-Weave Collection", desc: "A milestone event marking our commitment to 100% organic materials and environmentally friendly dyes.", category: "Product Launch", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=60" },
  { title: "Skill Development Workshop", desc: "Empowering local artisans and weavers with modern textile technologies to preserve heritage crafts.", category: "CSR Initiative", image: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=800&auto=format&fit=crop&q=60" },
];

export default function BusinessMediaGallery() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: C.cream, minHeight: '90vh' }} className="pt-2 pb-16">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-14 pt-0">

        {/* Page Title Section - minimized top space */}
        <div className="text-center mb-6 mt-2">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '38px', fontWeight: 700, color: C.soil, margin: 0, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
            Media Gallery
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.accent, margin: '8px auto 0' }} />
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              style={{ overflow: 'hidden',
                background: 'white', cursor: 'pointer',
                border: `1px solid ${C.border}`,
                borderRadius: 16,
                display: 'flex', flexDirection: 'column',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#D4B26F';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(59, 71, 85, 0.08)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = C.border;
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', display: 'block' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  loading="lazy"
                />
                <div style={{
                  position: 'absolute', top: 12, left: 12,
                  background: 'rgba(59, 71, 85, 0.9)', backdropFilter: 'blur(6px)', padding: '4px 12px',
                  borderRadius: '50px'
                }}>
                  <span style={{ fontSize: 9, color: '#ffffff', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700 }}>
                    {item.category}
                  </span>
                </div>
              </div>

              <div style={{ padding: '20px', flex: 1, textLeft: 'left', textAlign: 'left' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: C.soil, margin: '0 0 8px', lineHeight: 1.4 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: 13, color: C.stone, lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
