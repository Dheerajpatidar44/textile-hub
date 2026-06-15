import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const teamMembers = [
  { id: 1, name: 'Rajesh Sharma', role: 'Managing Director', image: null },
  { id: 2, name: 'Ananya Sharma', role: 'Head of Retail Operations', image: null },
  { id: 3, name: 'Vikram Mehta', role: 'Supply Chain Director', image: null },
];

const RetailManagement = () => {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: '#FAF9F6' }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#152E47]"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Retail Management
          </h1>
        </div>
      </div>

      <div className="pb-24 max-w-7xl mx-auto px-4 pt-1 pb-10">
        <p className="text-center text-[15px] mb-12 max-w-2xl mx-auto leading-relaxed text-[#4B5563] font-medium">
          URBAN FASHION TEXTILE is administered and governed by highly skilled, experienced and qualified Management.
        </p>

        {/* Shrunk and elegant team card grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto text-left"
        >
          {teamMembers.map((member) => (
            <div key={member.id}
              className="group overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-md bg-white border border-[#E8E5DC]"
            >
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={member.image || 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80'}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter saturate-[0.9]"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4"
                  style={{ background: 'rgba(0,0,0,0.55)' }}>
                  <a href={`mailto:${member.name.toLowerCase().replace(' ', '')}@urbanfashiontextile.com`}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-[#152E47] transition-all duration-200 hover:scale-110"
                    style={{ background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.4)' }}
                  >
                    <Mail size={15} className="text-white" />
                  </a>
                </div>
              </div>
              <div className="p-4 text-center border-t border-[#E8E5DC]">
                <h3 className="text-base font-bold mb-0.5 text-[#152E47]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {member.name}
                </h3>
                <p className="text-[9px] uppercase tracking-widest font-bold text-[#C5A880]">{member.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RetailManagement;
