import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const C = {
  primary: '#A3704C',      // Gold/Bronze accent
  primaryLight: '#C49272',
  soil: '#231F20',
  sand: '#F4EDE4',
  cream: '#FAF8F5',
  border: '#EAE5DE',
  stone: '#5B5653',
  accent: '#A3704C',
};

const teamMembers = [
  { id: 1, name: 'Rajesh Sharma', role: 'Managing Director', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80', expertise: 'Business Strategy & Operations' },
  { id: 2, name: 'Ananya Sharma', role: 'Head of Retail Operations', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80', expertise: 'Retail Management & Customer Experience' },
  { id: 3, name: 'Vikram Mehta', role: 'Supply Chain Director', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80', expertise: 'Logistics & Trade Relations' },
];

export default function RetailManagement() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.cream, minHeight: '100vh' }} className="pt-[110px] pb-20">
      
      {/* Page Title inside section with minimal gap */}
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 mb-8 text-left">
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, color: C.soil, margin: 0 }}>
          Our Retail Management
        </h1>
        <div style={{ width: 44, height: 2, background: C.primary, borderRadius: 2, marginTop: 10 }} />
      </div>

      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14">

        <p style={{ fontSize: 14.5, color: C.stone, marginBottom: 36, fontWeight: 400, maxWidth: 600, lineHeight: 1.7 }} className="text-left">
          LoomCraft India is administered by highly skilled, experienced and qualified management with decades of expertise in the textile industry.
        </p>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              style={{
                borderRadius: 16, background: 'white',
                border: `1px solid ${C.border}`,
                padding: '28px 22px',
                textAlign: 'center',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(163,112,76,0.08)';
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
                    width: 90, height: 90, borderRadius: '50%',
                    objectFit: 'cover',
                    border: `3px solid rgba(163,112,76,0.25)`,
                    display: 'block',
                  }}
                />
                <div style={{
                  position: 'absolute', bottom: 0, right: 0,
                  width: 22, height: 22, borderRadius: '50%',
                  background: C.accent, border: '2px solid white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'white' }} />
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
                href={`mailto:${member.name.toLowerCase().replace(' ', '')}@loomcraftindia.com`}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '8px 16px', borderRadius: 10,
                  fontSize: 12, color: C.primary, textDecoration: 'none', fontWeight: 600,
                  background: 'rgba(163,112,76,0.08)',
                  border: `1px solid rgba(163,112,76,0.15)`,
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = C.primary; e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = C.primary; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(163,112,76,0.08)'; e.currentTarget.style.color = C.primary; e.currentTarget.style.borderColor = 'rgba(163,112,76,0.15)'; }}
              >
                <Mail size={13} /> Contact
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
