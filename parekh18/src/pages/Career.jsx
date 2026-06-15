import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Mail } from 'lucide-react';

const Career = () => {
  const jobs = [
    {
      id: 1,
      title: 'Retail Operations Manager',
      location: 'Mumbai, India',
      type: 'Full-time',
      experience: '5-8 Years',
      description: 'Oversee daily store operations, manage staff, and ensure a premium customer experience across our flagship retail outlets.',
    },
    {
      id: 2,
      title: 'Senior Fabric Technologist',
      location: 'Surat, India',
      type: 'Full-time',
      experience: '7+ Years',
      description: 'Lead quality control for incoming fabrics, develop new textile blends, and maintain our high standards of material excellence.',
    },
    {
      id: 3,
      title: 'B2B Sales Executive',
      location: 'Delhi, India',
      type: 'Full-time',
      experience: '2-4 Years',
      description: 'Expand our wholesale network, acquire new B2B accounts, and maintain strong relationships with our key clients.',
    },
    {
      id: 4,
      title: 'Digital Marketing Specialist',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ Years',
      description: 'Drive our online presence, manage social media campaigns, and optimize e-commerce conversion rates.',
    },
  ];

  return (
    <div className="pb-16 w-full max-w-4xl mx-auto px-6 py-10 md:py-14 text-left">
      {/* Direct Page Heading */}
      <div className="mb-10 border-b border-[#BD7B88]/20 pb-4">
        <h1 className="text-[#3D223B] text-3xl md:text-4xl tracking-wider uppercase font-bold m-0 font-playfair">
          Careers
        </h1>
      </div>

      {/* 1 Column Layout of Wide Job Cards */}
      <div className="flex flex-col gap-6">
        {jobs.map((job, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            key={job.id}
            className="bg-white border border-[#BD7B88]/15 rounded-xl hover:border-[#BD7B88]/40 hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row overflow-hidden shadow-sm"
          >
            {/* Left Content Area */}
            <div className="p-8 md:p-10 flex-grow text-left">
              <h3 className="text-xl md:text-2xl font-playfair font-semibold text-[#3D223B] mb-4 uppercase tracking-wide">
                {job.title}
              </h3>
              <p className="text-gray-650 text-xs sm:text-sm leading-relaxed mb-6 font-outfit">
                {job.description}
              </p>

              <div className="flex flex-wrap gap-3 text-[10px] font-bold text-gray-500 uppercase tracking-wider font-outfit">
                <div className="flex items-center gap-1.5 bg-[#FAF4F6] px-3 py-1.5 border border-[#BD7B88]/15 rounded">
                  <MapPin size={12} className="text-[#BD7B88]" /> {job.location}
                </div>
                <div className="flex items-center gap-1.5 bg-[#FAF4F6] px-3 py-1.5 border border-[#BD7B88]/15 rounded">
                  <Briefcase size={12} className="text-[#BD7B88]" /> {job.type} · {job.experience}
                </div>
                <div className="flex items-center gap-1.5 bg-[#FAF4F6] px-3 py-1.5 border border-[#BD7B88]/15 rounded">
                  <Mail size={12} className="text-[#BD7B88]" />
                  <a href="mailto:careers@royalweaves.com" className="hover:text-[#BD7B88] transition-colors">Apply via Email</a>
                </div>
              </div>
            </div>

            {/* Right Button Panel */}
            <div className="px-8 pb-8 md:p-10 md:w-60 flex items-center justify-center border-t md:border-t-0 md:border-l border-[#BD7B88]/10 shrink-0">
              <button className="w-full border border-[#3D223B] text-[#3D223B] hover:bg-[#3D223B] hover:text-white py-3 rounded-lg text-xs font-semibold uppercase tracking-widest transition-all duration-300 cursor-pointer">
                Apply Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Career;
