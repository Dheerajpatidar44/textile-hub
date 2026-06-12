import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Mail } from 'lucide-react';

const RetailManagement = () => {
  const [hasTeamData, setHasTeamData] = useState(false);

  const teamMembers = [
    {
      id: 1,
      name: 'Rajiv Parekh',
      role: 'Managing Director',
      image: null,
    },
    {
      id: 2,
      name: 'Ananya Sharma',
      role: 'Head of Retail Operations',
      image: null,
    },
    {
      id: 3,
      name: 'Vikram Mehta',
      role: 'Supply Chain Director',
      image: null,
    }
  ];

  return (
    <div className="pb-16 -mt-8 max-w-7xl mx-auto px-4">

      
      <div className="text-center pt-0 pb-2 mb-4">
        <h1>Our Retail Management</h1>
        <p className="text-gray-600 text-sm max-w-2xl mx-auto mt-2 leading-relaxed">
          HERITAGE GARMENTS is administered and governed by highly skilled, experienced and qualified Management.
        </p>
      </div>

      <div className="mb-12 flex justify-center">
        <button 
          onClick={() => setHasTeamData(!hasTeamData)}
          className="text-xs bg-rosegold-500 text-white px-5 py-2.5 uppercase tracking-wider hover:bg-rosegold-400 transition-colors shadow-lg flex items-center gap-2 font-bold"
        >
          <Users size={14} />
          {hasTeamData ? "View Empty State" : "View Populated State"}
        </button>
      </div>

      {!hasTeamData ? (
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="bg-white shadow-sm hover:shadow-md transition-shadow border border-gray-200 py-20 px-8 flex flex-col items-center justify-center max-w-3xl mx-auto"
        >
          <div className="w-20 h-20 bg-pearl-50 flex items-center justify-center mb-6">
            <Users size={32} className="text-rosegold-500" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 uppercase tracking-wide mb-4">
            No Leaders Listed
          </h3>
          <div className="bg-pearl-50 px-6 py-2 border border-gray-200">
            <p className="text-rosegold-500 text-xs md:text-sm uppercase tracking-widest font-medium italic">
              ( At present, team details are being updated )
            </p>
          </div>
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white border border-gray-200 shadow-sm">
              <div className="relative overflow-hidden aspect-[3/4]">
                <img 
                  src={member.image || 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80'} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center border-t border-gray-200 relative">
                <h3 className="text-lg font-playfair font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-[10px] uppercase tracking-widest text-rosegold-500 font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default RetailManagement;
