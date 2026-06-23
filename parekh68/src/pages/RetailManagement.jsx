import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const C = {
  primary: '#3F5241',       // Dark Charcoal
  primaryLight: '#536755',  // Medium Charcoal
  primaryDark: '#2C3A2D',   // Deep Charcoal
  accent: '#BBA178',        // Champagne Gold
  gold: '#BBA178',
  bg: '#FAF8F5',
  border: '#E3DAD0',
  stone: '#5A665B',
  soil: '#3F5241',
};

const teamMembers = [
  { id: 1, name: 'Rajesh Sharma', role: 'Managing Director', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80', expertise: 'Business Strategy & Operations' },
  { id: 2, name: 'Ananya Sharma', role: 'Head of Retail Operations', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80', expertise: 'Retail Management & Customer Experience' },
  { id: 3, name: 'Vikram Mehta', role: 'Supply Chain Director', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80', expertise: 'Logistics & Trade Relations' },
];

export default function RetailManagement() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg, minHeight: '90vh' }} className="pt-2 pb-16">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 pt-0">

        {/* Page Title Section - minimized top space */}
        <div className="text-center mb-6 mt-2">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '38px', fontWeight: 700, color: C.soil, margin: 0, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
            Our Retail Management
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.accent, margin: '8px auto 0' }} />
        </div>
  
        <p style={{ textAlign: 'center', fontSize: 14, color: C.stone, marginBottom: 40, fontWeight: 600, maxWidth: 560, margin: '0 auto 40px', lineHeight: 1.6 }}>
          Alankrit Threads is administered and governed by highly skilled, experienced and qualified Management with decades of expertise in the textile industry.
        </p>

        {/* Team Cards - Horizontal Layout Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-6 max-w-3xl mx-auto"
        >
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col sm:flex-row items-center gap-6 p-6 md:p-8 hover:translate-y-[-2px] transition-all"
              style={{ 
                background: 'white',
                border: `1px solid ${C.border}`,
                borderRadius: 24,
                textAlign: 'left',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(43, 37, 32, 0.06)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Profile Image Column (Left) - Arched top shape */}
              <div className="shrink-0 relative">
                <div 
                  style={{
                    width: 110, height: 140,
                    borderRadius: '50px 50px 12px 12px',
                    overflow: 'hidden',
                    border: `2px solid ${C.border}`,
                    background: '#F5EFE6',
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: '100%', height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </div>
              </div>

              {/* Profile Content Column (Right) */}
              <div className="flex-grow flex flex-col justify-between py-1">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 700, color: C.soil, margin: 0 }}>
                      {member.name}
                    </h3>
                    <span 
                      className="px-3 py-1 text-[9px] font-bold tracking-widest uppercase rounded-full shrink-0 text-center"
                      style={{ 
                        background: 'rgba(197, 168, 128, 0.12)', 
                        color: C.accent,
                        maxWidth: 'fit-content'
                      }}
                    >
                      {member.role}
                    </span>
                  </div>
                  <p style={{ fontSize: 13.5, color: C.stone, margin: '0 0 16px', fontWeight: 500, lineHeight: 1.5 }}>
                    <strong>Expertise:</strong> {member.expertise}
                  </p>
                </div>

                <div>
                  <a
                    href={`mailto:${member.name.toLowerCase().replace(' ', '')}@alankritthreads.com`}
                    className="inline-flex items-center gap-2 px-5 py-2 text-[10px] font-bold text-white uppercase tracking-widest transition-all duration-300 rounded-full hover:shadow-md cursor-pointer border-none"
                    style={{
                      background: C.primary,
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = C.accent; }}
                    onMouseLeave={e => { e.currentTarget.style.background = C.primary; }}
                  >
                    <Mail size={12} />
                    <span>Contact {member.name.split(' ')[0]}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
