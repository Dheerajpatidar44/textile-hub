import React, { useState } from 'react';
import PageHeader from '../components/ui/PageHeader';
import { Users, Mail } from 'lucide-react';
import dummyLeader from '../assets/dummy_leader.png';

const RetailManagement = () => {
  // Demo toggle: set to false to see the empty state, true to see the populated layout
  const [hasTeamData, setHasTeamData] = useState(false);

  // Dummy data for when the team is added
  const teamMembers = [
    {
      id: 1,
      name: 'Rajiv Lumina',
      role: 'Managing Director',
      image: dummyLeader,
    },
    {
      id: 2,
      name: 'Ananya Sharma',
      role: 'Head of Retail Operations',
      image: dummyLeader,
    },
    {
      id: 3,
      name: 'Vikram Mehta',
      role: 'Supply Chain Director',
      image: dummyLeader,
    }
  ];

  return (
    <div>
      <PageHeader title="Our Retail Management" />

      <div className="bg-[#FAF7F0] py-24 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-5 md:px-8 text-center">
          
          {/* Section Description */}
          <p className="text-[#6B7A99] font-light text-sm md:text-base max-w-2xl mx-auto mb-12 -mt-4">
            Lumina Textiles is administered and governed by highly skilled, experienced and qualified Management.
          </p>

          {/* DEMO BUTTON: Just to help you see both layouts easily. Remove this in final production. */}
          <div className="mb-12 flex justify-center">
            <button 
              onClick={() => setHasTeamData(!hasTeamData)}
              className="text-xs bg-[#0B1C3E] text-white px-5 py-2.5 rounded-full uppercase tracking-wider hover:bg-[#D4A853] transition-colors shadow-lg flex items-center gap-2"
            >
              <Users size={14} />
              {hasTeamData ? "View Empty State (No Leaders)" : "View Populated State (With Team)"}
            </button>
          </div>

          {/* Conditional Layout Rendering */}
          {!hasTeamData ? (
            
            /* 1. EMPTY STATE BOX */
            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(11,28,62,0.06)] border border-[#0B1C3E]/5 py-20 px-8 flex flex-col items-center justify-center max-w-3xl mx-auto">
              <div className="w-20 h-20 bg-[#FAF7F0] rounded-full flex items-center justify-center mb-6">
                <Users size={32} className="text-[#D4A853]" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-[#0B1C3E] uppercase tracking-wide mb-4">
                No Leaders Listed
              </h3>
              
              <div className="bg-[#FAF7F0] px-6 py-2 rounded-full border border-[#D4A853]/20">
                <p className="text-[#D4A853] text-xs md:text-sm uppercase tracking-widest font-medium italic">
                  ( At present, team details are being updated )
                </p>
              </div>
            </div>

          ) : (

            /* 2. POPULATED TEAM GRID (Future Layout) */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
              {teamMembers.map((member) => (
                <div key={member.id} className="bg-white group overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 rounded-sm">
                  <div className="relative overflow-hidden aspect-[3/4]">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Hover Overlay with Social Icons */}
                    <div className="absolute inset-0 bg-[#0B1C3E]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#D4A853] rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                      </a>
                      <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#D4A853] rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm">
                        <Mail size={18} />
                      </a>
                    </div>
                  </div>
                  <div className="p-6 text-center border-t border-[#D4A853]/20 relative">
                    <h3 className="text-xl font-serif text-[#0B1C3E] mb-1">{member.name}</h3>
                    <p className="text-xs uppercase tracking-widest text-[#D4A853] font-medium">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>

          )}

        </div>
      </div>
    </div>
  );
};

export default RetailManagement;
