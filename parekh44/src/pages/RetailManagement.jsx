import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const C = {
  primary: '#222842',        // Slate Navy
  primaryLight: '#30375E',
  soil: '#222842',
  sand: '#FAF9FC',
  cream: '#FAF9FC',
  border: '#EAE7ED',
  stone: '#5C627A',
  accent: '#8D6F97',         // Mauve
};

const teamMembers = [
  { id: 1, name: 'Rajesh Sharma', role: 'Managing Director', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80', expertise: 'Business Strategy & Operations' },
  { id: 2, name: 'Ananya Sharma', role: 'Head of Retail Operations', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80', expertise: 'Retail Management & Customer Experience' },
  { id: 3, name: 'Vikram Mehta', role: 'Supply Chain Director', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80', expertise: 'Logistics & Trade Relations' },
];

export default function RetailManagement() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: C.cream, minHeight: '90vh' }} className="pt-10 pb-16">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 pt-0">

        {/* Page Title Section */}
        <div className="text-center mb-6">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '48px', fontWeight: 500, color: C.soil, margin: 0 }}>
            Our Retail Management
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.accent, margin: '12px auto 0' }} />
        </div>
  
        <p style={{ textAlign: 'center', fontSize: 15, color: C.stone, marginBottom: 40, fontWeight: 400, maxWidth: 560, margin: '0 auto 40px', lineHeight: 1.7 }}>
          THREADSPHERE Textile Retail is administered and governed by highly skilled, experienced and qualified Management with decades of expertise in the textile industry.
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
                borderRadius: 20,
                textAlign: 'center',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(34, 40, 66, 0.04)';
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
                    border: `3px solid rgba(141, 111, 151, 0.15)`,
                    display: 'block',
                  }}
                />
              </div>

              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 700, color: C.soil, margin: '0 0 4px' }}>
                {member.name}
              </h3>
              <p style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.18em', color: C.accent, margin: '0 0 8px', fontWeight: 700 }}>
                {member.role}
              </p>
              <p style={{ fontSize: 12, color: C.stone, margin: '0 0 18px', fontWeight: 500, lineHeight: 1.5 }}>
                {member.expertise}
              </p>

              <a
                href={`mailto:${member.name.toLowerCase().replace(' ', '')}@threadspheretextile.com`}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '8px 16px',
                  fontSize: 11, color: C.primary, textDecoration: 'none', fontWeight: 700,
                  background: 'rgba(141, 111, 151, 0.08)',
                  border: `1px solid rgba(141, 111, 151, 0.15)`,
                  borderRadius: '50px',
                  transition: 'all 0.2s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
                onMouseEnter={e => { e.currentTarget.style.background = C.accent; e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = C.accent; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(141, 111, 151, 0.08)'; e.currentTarget.style.color = C.primary; e.currentTarget.style.borderColor = 'rgba(141, 111, 151, 0.15)'; }}
              >
                <Mail size={12} /> Contact
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
