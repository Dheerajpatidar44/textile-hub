import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Mail } from 'lucide-react';

const teamMembers = [
  { id: 1, name: 'Rajesh Sharma', role: 'Managing Director', image: null },
  { id: 2, name: 'Ananya Sharma', role: 'Head of Retail Operations', image: null },
  { id: 3, name: 'Vikram Mehta', role: 'Supply Chain Director', image: null },
];

const RetailManagement = () => {
  const [hasTeamData, setHasTeamData] = useState(false);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#FDF6EC' }}>

      {/* Hero Banner */}
      <div className="relative h-32 sm:h-40 overflow-hidden flex items-center justify-center text-center"
        style={{ background: 'linear-gradient(135deg, #1A0A05 0%, #2C1810 60%, #3D2418 100%)' }}>
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle, #C9A227 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          
          <h1 className="font-bold text-5xl sm:text-6xl text-white"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Our Retail Management
          </h1>
        </div>
      </div>

      <div className="pb-16 max-w-7xl mx-auto px-4 py-10">
        <p className="text-center text-[15px] mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: '#7D5A4F' }}>
          TEXTILE MALL is administered and governed by highly skilled, experienced and qualified Management.
        </p>

        <div className="mb-8 flex justify-center">
          <button
            onClick={() => setHasTeamData(!hasTeamData)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-[12px] font-bold uppercase tracking-wider transition-all duration-200 hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #C9A227, #E2C65A)', color: '#1A0A05', boxShadow: '0 4px 12px rgba(201,162,39,0.3)' }}
          >
            <Users size={14} />
            {hasTeamData ? "View Empty State" : "View Populated State"}
          </button>
        </div>

        {!hasTeamData ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl py-20 px-8 flex flex-col items-center justify-center max-w-3xl mx-auto"
            style={{ background: '#FFFBF5', border: '1.5px solid rgba(201,162,39,0.2)' }}
          >
            <div className="w-20 h-20 rounded-full flex items-center justify-center mb-5"
              style={{ background: 'rgba(201,162,39,0.1)', border: '2px solid rgba(201,162,39,0.25)' }}>
              <Users size={32} color="#C9A227" />
            </div>
            <h3 className="text-2xl font-bold uppercase tracking-wide mb-3"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: '#2C1810' }}>
              No Leaders Listed
            </h3>
            <div className="px-6 py-2 rounded-full"
              style={{ background: 'rgba(201,162,39,0.08)', border: '1px solid rgba(201,162,39,0.2)' }}>
              <p className="text-[12px] uppercase tracking-widest font-medium italic" style={{ color: '#A68B7C' }}>
                ( At present, team details are being updated )
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {teamMembers.map((member) => (
              <div key={member.id}
                className="group overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                style={{ background: '#FFFBF5', border: '1.5px solid rgba(201,162,39,0.2)' }}>
                <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #9B2519, #C9A227)' }} />
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img
                    src={member.image || 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80'}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4"
                    style={{ background: 'rgba(26,10,5,0.55)' }}>
                    <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
                      style={{ background: 'rgba(201,162,39,0.3)', border: '1px solid rgba(201,162,39,0.5)' }}>
                      <Mail size={17} />
                    </a>
                  </div>
                </div>
                <div className="p-5 text-center border-t" style={{ borderColor: 'rgba(201,162,39,0.15)' }}>
                  <h3 className="text-xl font-bold mb-0.5" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#2C1810' }}>
                    {member.name}
                  </h3>
                  <p className="text-[11px] uppercase tracking-widest font-medium" style={{ color: '#C9A227' }}>{member.role}</p>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default RetailManagement;
