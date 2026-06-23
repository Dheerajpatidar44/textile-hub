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
    <div className="pb-16 w-full max-w-4xl mx-auto px-6 py-6 md:py-8 text-left font-outfit">
      {/* Compact Page Heading */}
      <div className="mb-8 border-b border-gray-200 pb-3">
        <h1 className="text-[#0C2E3A] text-2xl md:text-3xl tracking-wider uppercase font-bold m-0 font-playfair border-0 pb-0">
          Our Management
        </h1>
      </div>

      <div className="mb-8 flex justify-center">
        <button
          onClick={() => setHasTeamData(!hasTeamData)}
          className="text-xs bg-[#0A5F73] hover:bg-[#084E5F] text-white px-5 py-2.5 uppercase tracking-wider transition-colors shadow-xs flex items-center gap-2 font-semibold font-outfit rounded-xl cursor-pointer"
        >
          <Users size={14} />
          {hasTeamData ? "View Empty State" : "View Populated State"}
        </button>
      </div>

      {!hasTeamData ? (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white shadow-xs border border-gray-200 py-12 px-6 flex flex-col items-center justify-center max-w-2xl mx-auto rounded-3xl"
        >
          <div className="w-16 h-16 bg-[#F4F8F9] flex items-center justify-center mb-4 border border-gray-200 rounded-full shadow-inner">
            <Users size={24} className="text-[#0A5F73]" />
          </div>
          <h3 className="text-lg font-semibold text-[#0C2E3A] uppercase tracking-wider mb-3 font-playfair">
            No Leaders Listed
          </h3>
          <div className="bg-[#F4F8F9] px-6 py-2 border border-gray-200 rounded-xl">
            <p className="text-[#0A5F73] text-[9px] uppercase tracking-widest font-bold italic text-center">
              ( At present, team details are being updated )
            </p>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-6 max-w-3xl mx-auto"
        >
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white border border-gray-200 rounded-2xl shadow-xs flex flex-col md:flex-row hover:border-[#0A5F73]/30 hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              {/* Leader Photo */}
              <div className="relative overflow-hidden w-full md:w-36 aspect-[4/3] md:aspect-square shrink-0 bg-gray-50">
                <img
                  src={member.image || 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80'}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Leader Bio */}
              <div className="p-6 flex flex-col justify-center relative flex-grow bg-white text-left">
                <h3 className="text-base font-playfair font-semibold text-[#0C2E3A] mb-0.5 uppercase tracking-wide">
                  {member.name}
                </h3>
                <p className="text-[9px] uppercase tracking-widest text-[#10859F] font-bold mb-2.5">
                  {member.role}
                </p>
                <p className="text-[#4F6D7A] text-xs leading-relaxed">
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
