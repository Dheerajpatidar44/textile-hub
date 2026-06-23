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
    <div className="pb-16 w-full max-w-4xl mx-auto px-6 py-6 md:py-8 text-left font-outfit">
      {/* Compact Page Heading */}
      <div className="mb-8 border-b border-gray-200 pb-3">
        <h1 className="text-[#0C2E3A] text-2xl md:text-3xl tracking-wider uppercase font-bold m-0 font-playfair border-0 pb-0">
          Careers
        </h1>
      </div>

      {/* 1 Column Layout of Wide Job Cards */}
      <div className="flex flex-col gap-6">
        {jobs.map((job, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            key={job.id}
            className="bg-white border border-gray-200 rounded-2xl hover:border-[#0A5F73]/30 hover:shadow-md transition-all duration-300 flex flex-col md:flex-row overflow-hidden shadow-xs"
          >
            {/* Left Content Area */}
            <div className="p-6 md:p-8 flex-grow text-left">
              <h3 className="text-lg md:text-xl font-playfair font-semibold text-[#0C2E3A] mb-3 uppercase tracking-wider">
                {job.title}
              </h3>
              <p className="text-[#4F6D7A] text-xs leading-relaxed mb-5 font-outfit">
                {job.description}
              </p>

              <div className="flex flex-wrap gap-2.5 text-[9px] font-bold text-gray-500 uppercase tracking-wider font-outfit">
                <div className="flex items-center gap-1.5 bg-[#F4F8F9] px-3 py-1.5 border border-gray-200 rounded-xl">
                  <MapPin size={12} className="text-[#0A5F73]" /> {job.location}
                </div>
                <div className="flex items-center gap-1.5 bg-[#F4F8F9] px-3 py-1.5 border border-gray-200 rounded-xl">
                  <Briefcase size={12} className="text-[#0A5F73]" /> {job.type} · {job.experience}
                </div>
                <div className="flex items-center gap-1.5 bg-[#F4F8F9] px-3 py-1.5 border border-gray-200 rounded-xl">
                  <Mail size={12} className="text-[#0A5F73]" />
                  <a href="mailto:careers@loomline.com" className="hover:text-[#0A5F73] transition-colors lowercase">Apply via Email</a>
                </div>
              </div>
            </div>

            {/* Right Button Panel */}
            <div className="px-6 pb-6 md:p-8 md:w-52 flex items-center justify-center border-t md:border-t-0 md:border-l border-gray-150 shrink-0">
              <button className="w-full border border-[#0A5F73] text-[#0A5F73] hover:bg-[#0A5F73] hover:text-white py-2.5 rounded-xl text-xs font-semibold uppercase tracking-widest transition-all duration-300 cursor-pointer">
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
