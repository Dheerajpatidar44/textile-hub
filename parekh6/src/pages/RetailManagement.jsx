import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Mail } from 'lucide-react';

const RetailManagement = () => {
  const [hasTeamData, setHasTeamData] = useState(false);

  const teamMembers = [
    {
      id: 1,
      name: 'Rajesh Sharma',
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
    <div className="pb-16 max-w-7xl mx-auto px-4">

      
      <div className="text-center py-10 mb-8">
        <h1 className="font-playfair text-4xl lg:text-5xl text-vastram-brown font-bold">Our Retail Management</h1>
        <p className="text-gray-600 text-sm max-w-2xl mx-auto mt-4 leading-relaxed">
          TEXTILE MALL is administered and governed by highly skilled, experienced and qualified Management.
        </p>
      </div>

      <div className="mb-12 flex justify-center">
        <button 
          onClick={() => setHasTeamData(!hasTeamData)}
          className="text-xs bg-vastram-brown text-white px-5 py-2.5 rounded-none uppercase tracking-wider hover:bg-vastram-gold transition-colors shadow-lg flex items-center gap-2"
        >
          <Users size={14} />
          {hasTeamData ? "View Empty State" : "View Populated State"}
        </button>
      </div>

      {!hasTeamData ? (
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-none shadow-sm hover:shadow-md transition-shadow border border-gray-100 py-20 px-8 flex flex-col items-center justify-center max-w-3xl mx-auto"
        >
          <div className="w-20 h-20 bg-vastram-cream rounded-none flex items-center justify-center mb-6">
            <Users size={32} className="text-vastram-gold" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-vastram-brown uppercase tracking-wide mb-4">
            No Leaders Listed
          </h3>
          <div className="bg-vastram-cream px-6 py-2 rounded-none border border-vastram-gold/20">
            <p className="text-vastram-gold text-xs md:text-sm uppercase tracking-widest font-medium italic">
              ( At present, team details are being updated )
            </p>
          </div>
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto"
        >
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white group overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 rounded-none">
              <div className="relative overflow-hidden aspect-[3/4]">
                <img 
                  src={member.image || 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80'} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-vastram-brown/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href="#" className="w-10 h-10 bg-white/10 hover:bg-vastram-gold rounded-none flex items-center justify-center text-white transition-colors backdrop-blur-sm">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
              <div className="p-6 text-center border-t border-vastram-gold/20 relative">
                <h3 className="text-xl font-playfair font-bold text-vastram-brown mb-1">{member.name}</h3>
                <p className="text-xs uppercase tracking-widest text-vastram-gold font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default RetailManagement;
