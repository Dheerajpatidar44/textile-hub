import { motion } from 'framer-motion';

const C = {
  primary: '#8B1A4A',
  primaryLight: '#B02E65',
  soil: '#2C1A1A',
  sand: '#F5EBE0',
  cream: '#FDF8F4',
  border: '#E8D8CC',
  stone: '#7A5E5E',
  accent: '#C4956A',
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
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.cream }} className="pt-[70px] pb-20">

      {/* Page Title */}
      <div style={{ background: '#ffffff', borderBottom: `1px solid ${C.border}`, padding: '20px 0 20px' }}>
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, color: C.soil, margin: 0 }}>
            Media Gallery
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 8 }}>
            <div style={{ width: 32, height: 2, background: C.primary, borderRadius: 2 }} />
            <div style={{ width: 60, height: 1, background: 'rgba(139,26,74,0.2)', borderRadius: 1 }} />
          </div>
        </div>
      </div>

      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 pt-10">
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              style={{
                borderRadius: 16, overflow: 'hidden',
                background: 'white', cursor: 'pointer',
                border: `1px solid ${C.border}`,
                display: 'flex', flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(139, 26, 74, 0.08)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', display: 'block' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  loading="lazy"
                />
                <div style={{
                  position: 'absolute', top: 10, left: 10,
                  background: 'rgba(139, 26, 74, 0.85)', backdropFilter: 'blur(6px)',
                  borderRadius: 20, padding: '3px 10px',
                }}>
                  <span style={{ fontSize: 8.5, color: '#FDF8F4', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>
                    {item.category}
                  </span>
                </div>
              </div>

              <div style={{ padding: '16px', flex: 1, textLeft: 'left', textAlign: 'left' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 600, color: C.soil, margin: '0 0 6px', lineHeight: 1.35 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: 12, color: C.stone, lineHeight: 1.5, margin: 0, fontWeight: 400 }}>
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



