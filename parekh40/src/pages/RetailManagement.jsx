import { motion } from 'framer-motion';
import { Mail, Users, TrendingUp, Award } from 'lucide-react';

const C = {
  primary: '#043B5C',
  primaryLight: '#065485',
  soil: '#043B5C',
  sand: '#F8F5F0',
  cream: '#FFFFFF',
  border: '#EAEAEA',
  stone: '#6B7280',
  accent: '#C29B62',
};

const teamMembers = [
  { id: 1, name: 'Rajesh Sharma', role: 'Managing Director', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80', expertise: 'Business Strategy & Operations' },
  { id: 2, name: 'Ananya Sharma', role: 'Head of Retail Operations', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80', expertise: 'Retail Management & Customer Experience' },
  { id: 3, name: 'Vikram Mehta', role: 'Supply Chain Director', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80', expertise: 'Logistics & Trade Relations' },
];

export default function RetailManagement() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: C.cream }} className="pt-[40px] pb-20">

      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 pt-0">

        {/* Page Title Section */}
        <div className="text-center mb-6">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 600, color: C.soil, margin: '0 0 16px' }}>
            Our Retail Management
          </h1>
          <div style={{ width: 50, height: 2, background: C.accent, margin: '0 auto' }} />
        </div>
  
        <p style={{ textAlign: 'center', fontSize: 15, color: C.stone, marginBottom: 40, fontWeight: 400, maxWidth: 560, margin: '0 auto 40px', lineHeight: 1.7 }}>
          SAUVORA is administered and governed by highly skilled, experienced and qualified Management with decades of expertise in the textile industry.
        </p>

        {/* Team Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              style={{ background: 'white',
                border: `1px solid ${C.border}`,
                padding: '28px 22px',
                borderRadius: 24,
                textAlign: 'center',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(59, 35, 20, 0.08)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ position: 'relative', display: 'inline-block', marginBottom: 18 }}>
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: 90, height: 90,
                    objectFit: 'cover',
                    borderRadius: '50%',
                    border: `3px solid rgba(181, 106, 121, 0.2)`,
                    display: 'block',
                  }}
                />
                <div style={{
                  position: 'absolute', bottom: 0, right: 0,
                  width: 24, height: 24,
                  background: C.accent, border: '2px solid white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <div style={{ width: 8, height: 8, background: 'white' }} />
                </div>
              </div>

              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 600, color: C.soil, margin: '0 0 4px' }}>
                {member.name}
              </h3>
              <p style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.18em', color: C.accent, margin: '0 0 8px', fontWeight: 600 }}>
                {member.role}
              </p>
              <p style={{ fontSize: 12, color: C.stone, margin: '0 0 18px', fontWeight: 400, lineHeight: 1.5 }}>
                {member.expertise}
              </p>

              <a
                href={`mailto:${member.name.toLowerCase().replace(' ', '')}@varnikaweaves.com`}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '8px 16px',
                  fontSize: 12, color: C.primary, textDecoration: 'none', fontWeight: 500,
                  background: 'rgba(139, 94, 60, 0.1)',
                  border: `1px solid rgba(139, 94, 60, 0.25)`,
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = C.accent; e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = C.accent; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(139, 94, 60, 0.1)'; e.currentTarget.style.color = C.primary; e.currentTarget.style.borderColor = 'rgba(139, 94, 60, 0.25)'; }}
              >
                <Mail size={13} /> Contact
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}




