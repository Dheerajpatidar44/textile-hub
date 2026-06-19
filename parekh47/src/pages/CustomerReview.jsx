import { motion } from 'framer-motion';
import { Star, User } from 'lucide-react';

const C = {
  primary: '#0D3E3C',        // Elegant Deep Teal
  primaryDark: '#061F1E',
  soil: '#0D3E3C',
  sand: '#FAF8F5',
  cream: '#FAF8F5',
  border: '#E5ECE9',
  stone: '#66807B',
  accent: '#A75D3F',         // Terracotta/Copper Accent
};

const reviews = [
  { text: "Riwaayat Hub has been our trusted partner for years. The quality, prices and service are unmatched in the entire industry.", name: "Rajesh Sharma", role: "Retailer, Delhi", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" },
  { text: "The export compliance and material quality are world-class. Their zero-defect policy has secured our global supply chain perfectly.", name: "Ahmed Al-Sayed", role: "Gulf Textiles, UAE", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80" },
  { text: "Highly impressed with their R&D. The custom high-tenacity fabric they developed exceeded all our durability benchmarks.", name: "Vikas Kulkarni", role: "National Solutions", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80" },
  { text: "Incredible attention to detail. Every batch of fabric we receive is consistently perfect, saving us a lot of time and rework.", name: "Anita Desai", role: "Design Head, Mumbai", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80" },
];

export default function CustomerReview() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: C.cream, minHeight: '90vh' }} className="pt-2 pb-16">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-14 pt-0">

        {/* Page Title Section */}
        <div className="text-center mb-6">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '44px', fontWeight: 500, color: C.soil, margin: 0 }}>
            Customer Reviews
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.accent, margin: '12px auto 0' }} />
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="card-hover text-left bg-white"
              style={{
                border: `1px solid ${C.border}`, padding: '26px 24px',
                borderRadius: 20,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(13, 62, 60, 0.04)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                {/* Quote mark */}
                <div style={{
                  position: 'absolute', top: 12, right: 22,
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 70, color: 'rgba(30, 62, 55, 0.08)', lineHeight: 1, fontWeight: 700,
                  userSelect: 'none',
                }}>
                  "
                </div>

                {/* Stars */}
                <div style={{ display: 'flex', gap: 3, marginBottom: 14 }}>
                  {[1,2,3,4,5].map(s => (
                    <Star key={s} size={13} fill={C.accent} stroke="none" />
                  ))}
                </div>

                <p style={{ fontSize: 13.5, color: C.stone, lineHeight: 1.7, margin: '0 0 18px', fontWeight: 500, fontStyle: 'italic' }}>
                  "{review.text}"
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                {review.avatar ? (
                  <img
                    src={review.avatar}
                    alt={review.name}
                    style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover', border: `1px solid ${C.border}` }}
                  />
                ) : (
                  <div style={{
                    width: 36, height: 36,
                    background: 'rgba(30, 62, 55, 0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: C.accent,
                    borderRadius: '50%'
                  }}>
                    <User size={16} />
                  </div>
                )}
                <div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: C.soil, margin: 0 }}>{review.name}</p>
                  <p style={{ fontSize: 11, color: C.stone, margin: 0, fontWeight: 500 }}>{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
