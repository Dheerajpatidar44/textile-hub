import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const C = { primary: '#721C2B', primaryDark: '#4A0E17', accent: '#CDA75E', bg: '#FAF6F0', bgLight: '#FCEEF1', border: '#E6D8C5', textDark: '#330A10', textMid: '#554447', textMuted: '#7D6A6D' };

const teamMembers = [
  { id: 1, name: 'Rajesh Sharma', role: 'Managing Director', image: null },
  { id: 2, name: 'Ananya Sharma', role: 'Head of Retail Operations', image: null },
  { id: 3, name: 'Vikram Mehta', role: 'Supply Chain Director', image: null },
];

const RetailManagement = () => {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center"
        style={{ background: `linear-gradient(135deg, ${C.bgLight} 0%, ${C.bg} 100%)`, borderBottom: `1px solid ${C.border}` }}>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-black text-4xl sm:text-5xl" style={{ color: C.textDark }}>Our Retail Management</h1>
          <div className="w-12 h-[2.5px] mx-auto mt-3 rounded-full" style={{ background: C.primary }} />
        </div>
      </div>

      <div className="pb-24 max-w-7xl mx-auto px-4 pt-10">
        <p className="text-center text-[15px] mb-12 max-w-2xl mx-auto leading-relaxed font-medium" style={{ color: '#4B5563' }}>
          GRAND TEXTILE MART is administered and governed by highly skilled, experienced and qualified Management.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto text-left"
        >
          {teamMembers.map((member) => (
            <div key={member.id}
              className="group overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-md bg-white"
              style={{ border: `1px solid ${C.border}` }}
            >
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={member.image || 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80'}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4"
                  style={{ background: 'rgba(0,0,0,0.5)' }}>
                  <a href={`mailto:${member.name.toLowerCase().replace(' ', '')}@grandtextilemart.com`}
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                    style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)' }}
                  >
                    <Mail size={15} className="text-white" />
                  </a>
                </div>
              </div>
              <div className="p-4 text-center" style={{ borderTop: `1px solid ${C.border}` }}>
                <h3 className="text-base font-black mb-0.5" style={{ color: C.textDark }}>{member.name}</h3>
                <p className="text-[9px] uppercase tracking-widest font-black" style={{ color: C.accent }}>{member.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RetailManagement;
