import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const C = {
  primary: '#e2b865',        // Gold
  primaryLight: '#1b202c',
  soil: '#e2b865',
  sand: '#12151c',
  cream: '#12151c',
  border: '#2a3142',
  stone: '#a0aec0',
  accent: '#e2b865',         // Gold Accent
};

const teamMembers = [
  { id: 1, name: 'Rajesh Sharma', role: 'Managing Director', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80', expertise: 'Business Strategy & Operations' },
  { id: 2, name: 'Ananya Sharma', role: 'Head of Retail Operations', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80', expertise: 'Retail Management & Customer Experience' },
  { id: 3, name: 'Vikram Mehta', role: 'Supply Chain Director', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80', expertise: 'Logistics & Trade Relations' },
];

export default function RetailManagement() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: C.cream, minHeight: '90vh' }} className="pt-2 pb-16">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 pt-0">

        {/* Page Title Section */}
        <div className="text-center mb-6 mt-1">
          <h1 style={{ fontFamily: "'Cinzel', serif", fontSize: '44px', fontWeight: 500, color: C.soil, margin: 0 }}>
            Our Retail Management
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.accent, margin: '8px auto 0' }} />
        </div>

        <p style={{ textAlign: 'center', fontSize: 14, color: C.stone, marginBottom: 40, fontWeight: 600, maxWidth: 560, margin: '0 auto 40px', lineHeight: 1.6 }}>
          Aura Weaves is administered and governed by highly skilled, experienced and qualified Management with decades of expertise in the textile industry.
        </p>

        {/* Changed grid layout to horizontal row stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-6 max-w-4xl mx-auto w-full"
        >
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              style={{
                background: '#1b202c',
                border: `1px solid ${C.border}`,
                padding: '24px 28px',
                textAlign: 'left',
                borderRadius: '0px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              className="flex flex-col md:flex-row items-center gap-6"
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ position: 'relative', display: 'block' }} className="shrink-0">
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: 90, height: 90,
                    objectFit: 'cover',
                    borderRadius: '0px',
                    border: `3px solid rgba(226, 184, 101, 0.15)`,
                    display: 'block',
                  }}
                />
              </div>

              <div className="flex-grow">
                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: 20, fontWeight: 700, color: C.soil, margin: '0 0 4px' }}>
                  {member.name}
                </h3>
                <p style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.18em', color: C.accent, margin: '0 0 8px', fontWeight: 700 }}>
                  {member.role}
                </p>
                <p style={{ fontSize: 12, color: C.stone, margin: 0, fontWeight: 500, lineHeight: 1.5 }}>
                  {member.expertise}
                </p>
              </div>

              <div className="shrink-0">
                <a
                  href={`mailto:${member.name.toLowerCase().replace(' ', '')}@auraweaves.com`}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    padding: '10px 20px',
                    fontSize: 11, color: '#12151c', textDecoration: 'none', fontWeight: 700,
                    background: C.primary,
                    border: `1px solid ${C.primary}`,
                    borderRadius: '0px',
                    transition: 'all 0.2s ease',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#12151c'; e.currentTarget.style.borderColor = 'white'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = C.primary; e.currentTarget.style.color = '#12151c'; e.currentTarget.style.borderColor = C.primary; }}
                >
                  <Mail size={12} /> Contact
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
