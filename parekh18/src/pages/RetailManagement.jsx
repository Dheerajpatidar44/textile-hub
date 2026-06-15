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
    <div className="pb-16 w-full max-w-4xl mx-auto px-6 py-10 md:py-14 text-left">
      {/* Direct Page Heading */}
      <div className="mb-10 border-b border-[#BD7B88]/20 pb-4">
        <h1 className="text-[#3D223B] text-3xl md:text-4xl tracking-wider uppercase font-bold m-0 font-playfair">
          Our Management
        </h1>
      </div>

      <div className="mb-10 flex justify-center">
        <button
          onClick={() => setHasTeamData(!hasTeamData)}
          className="text-xs bg-[#3D223B] hover:bg-[#4D2D4B] text-white px-5 py-2.5 uppercase tracking-wider transition-colors shadow-md flex items-center gap-2 font-semibold font-outfit rounded-lg cursor-pointer animate-none"
        >
          <Users size={14} />
          {hasTeamData ? "View Empty State" : "View Populated State"}
        </button>
      </div>

      {!hasTeamData ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white shadow-sm border border-[#BD7B88]/15 py-16 px-8 flex flex-col items-center justify-center max-w-3xl mx-auto rounded-xl"
        >
          <div className="w-20 h-20 bg-[#FAF4F6] flex items-center justify-center mb-6 border border-[#BD7B88]/15 rounded-full shadow-inner">
            <Users size={32} className="text-[#3D223B]" />
          </div>
          <h3 className="text-xl font-semibold text-[#3D223B] uppercase tracking-wide mb-4 font-playfair">
            No Leaders Listed
          </h3>
          <div className="bg-[#FAF4F6] px-6 py-2.5 border border-[#BD7B88]/15 rounded-md">
            <p className="text-[#BD7B88] text-xs uppercase tracking-widest font-semibold italic text-center font-outfit">
              ( At present, team details are being updated )
            </p>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-6 max-w-3xl mx-auto"
        >
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white border border-[#BD7B88]/15 rounded-xl shadow-sm flex flex-col md:flex-row hover:border-[#BD7B88]/40 hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              {/* Leader Photo */}
              <div className="relative overflow-hidden w-full md:w-44 aspect-[4/3] md:aspect-square shrink-0 bg-[#FAF4F6]">
                <img
                  src={member.image || 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80'}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Leader Bio */}
              <div className="p-6 md:p-8 flex flex-col justify-center relative flex-grow bg-white text-left">
                <h3 className="text-lg font-playfair font-semibold text-[#3D223B] mb-1 uppercase tracking-wide">
                  {member.name}
                </h3>
                <p className="text-[10px] uppercase tracking-widest text-[#BD7B88] font-bold mb-3 font-outfit">
                  {member.role}
                </p>
                <p className="text-[#7A6273] text-xs leading-relaxed font-outfit">
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
