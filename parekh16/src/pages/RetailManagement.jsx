import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

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
    <div className="pb-16 -mt-6 lg:-mt-10 max-w-4xl mx-auto px-4">
      {/* Page Header Banner */}
      <div className="w-full bg-rosegold-500 text-white py-10 px-6 mb-8 text-center relative overflow-hidden border-b-4 border-rosegold-400 shadow-md">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-transparent to-slate-900/40 z-0" />
        <div className="relative z-10">
          <h1 className="text-white border-0 pb-0 text-3xl md:text-4xl tracking-wider uppercase font-semibold m-0">Our Management</h1>
          <p className="text-teal-100 text-[10px] md:text-xs uppercase tracking-widest mt-2 font-medium">Experienced Leadership & Vision</p>
        </div>
      </div>

      <div className="mb-10 flex justify-center">
        <button
          onClick={() => setHasTeamData(!hasTeamData)}
          className="text-xs bg-rosegold-500 text-white px-5 py-2.5 uppercase tracking-wider hover:bg-rosegold-400 transition-colors shadow-lg flex items-center gap-2 font-semibold"
        >
          <Users size={14} />
          {hasTeamData ? "View Empty State" : "View Populated State"}
        </button>
      </div>

      {!hasTeamData ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="bg-white shadow-md border border-gray-200 py-16 px-8 flex flex-col items-center justify-center max-w-3xl mx-auto"
        >
          <div className="w-20 h-20 bg-pearl-100 flex items-center justify-center mb-6 border border-gray-200">
            <Users size={32} className="text-rosegold-500" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 uppercase tracking-wide mb-4">
            No Leaders Listed
          </h3>
          <div className="bg-pearl-100 px-6 py-2.5 border border-gray-200">
            <p className="text-rosegold-500 text-xs uppercase tracking-widest font-semibold italic text-center">
              ( At present, team details are being updated )
            </p>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-6 max-w-3xl mx-auto"
        >
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white border border-gray-200 shadow-md flex flex-col md:flex-row hover:border-rosegold-500 transition-all duration-300">
              {/* Leader Photo */}
              <div className="relative overflow-hidden w-full md:w-44 aspect-[4/3] md:aspect-square shrink-0 bg-pearl-100">
                <img
                  src={member.image || 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80'}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Leader Bio */}
              <div className="p-6 md:p-8 flex flex-col justify-center border-t md:border-t-0 md:border-l border-gray-200 relative flex-grow bg-white">
                <h3 className="text-lg font-playfair font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-[10px] uppercase tracking-widest text-rosegold-500 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Oversees brand initiatives, managing core growth and retail strategy to expand our operations while maintaining textile heritage and quality standards.
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default RetailManagement;
