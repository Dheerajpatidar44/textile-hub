import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const C = { 
  primary: '#C5A377', 
  primaryDark: '#3D3025', 
  accent: '#C5A377', 
  bg: '#F6F1EA', 
  bgLight: '#FAF7F2', 
  border: '#E8E2D7', 
  textDark: '#3D3025', 
  textMid: '#3D3025', 
  textMuted: '#C5A377' 
};

const teamMembers = [
  { id: 1, name: 'Rajesh Sharma', role: 'Managing Director', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80' },
  { id: 2, name: 'Ananya Sharma', role: 'Head of Retail Operations', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80' },
  { id: 3, name: 'Vikram Mehta', role: 'Supply Chain Director', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80' },
];

const RetailManagement = () => {
  return (
    <div style={{ fontFamily: "'Jost', sans-serif", background: C.bg }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center"
        style={{ background: 'linear-gradient(135deg, #F6F1EA 0%, #E8E2D7 100%)', borderBottom: `1px solid ${C.border}` }}>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-normal text-4xl sm:text-5xl serif-title" style={{ color: C.textDark }}>Our Retail Management</h1>
          <div className="w-12 h-[2px] mx-auto mt-3 rounded-full" style={{ background: C.primary }} />
        </div>
      </div>

      <div className="pb-24 max-w-7xl mx-auto px-4 pt-10">
        <p className="text-center text-[15px] mb-12 max-w-2xl mx-auto leading-relaxed font-semibold opacity-80" style={{ color: C.textDark }}>
          SHREE TEXTILE MALL is administered and governed by highly skilled, experienced and qualified Management.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto text-left px-4"
        >
          {teamMembers.map((member) => (
            <div key={member.id}
              className="group flex flex-col items-center p-6 bg-white border rounded-2xl transition-all duration-300 hover:shadow-md hover:-translate-y-1 text-center"
              style={{ borderColor: C.border }}
            >
              {/* Smaller Rounded Image container */}
              <div 
                className="relative w-24 h-24 rounded-full overflow-hidden border-2 mx-auto mb-4 group-hover:scale-105 transition-transform duration-300 shadow-sm"
                style={{ borderColor: C.primary }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col items-center">
                <h3 className="text-base font-bold mb-0.5" style={{ color: C.textDark }}>{member.name}</h3>
                <p className="text-[10px] uppercase tracking-widest font-bold mb-4" style={{ color: C.accent }}>{member.role}</p>
                
                <a href={`mailto:${member.name.toLowerCase().replace(' ', '')}@shreetextilemall.com`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[10px] font-bold tracking-wider uppercase transition-all duration-200"
                  style={{ background: 'rgba(197, 163, 119, 0.1)', color: C.primary }}
                  onMouseEnter={e => { e.currentTarget.style.background = C.primary; e.currentTarget.style.color = '#FFFFFF'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(197, 163, 119, 0.1)'; e.currentTarget.style.color = C.primary; }}
                >
                  <Mail size={12} /> Contact
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RetailManagement;
