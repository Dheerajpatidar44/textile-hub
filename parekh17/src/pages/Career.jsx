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
    <div className="pb-16 w-full">
      {/* Page Header Banner */}
      <div className="w-full bg-rosegold-500 text-white py-12 px-6 mb-10 text-center relative overflow-hidden border-b border-rosegold-400/20">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-0" />
        <div className="relative z-10">
          <h1 className="text-[#F3ECE0] border-0 pb-0 text-3xl md:text-4xl tracking-wider uppercase font-bold m-0 text-center">Careers</h1>
          <p className="text-[#C5A880] text-[10px] md:text-xs uppercase tracking-widest mt-2 font-semibold">Join Our Legacy of Excellence</p>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6">

      {/* 1 Column Layout of Wide Job Cards */}
      <div className="flex flex-col gap-8">
        {jobs.map((job, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            key={job.id}
            className="bg-white border border-gray-200 hover:border-rosegold-500 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row overflow-hidden shadow-md"
          >
            {/* Left Content Area */}
            <div className="p-8 md:p-10 flex-grow">
              <h3 className="text-xl md:text-2xl font-playfair font-semibold text-rosegold-500 mb-4">{job.title}</h3>
              <p className="text-gray-650 text-sm leading-relaxed mb-6">{job.description}</p>

              <div className="flex flex-wrap gap-4 text-xs font-bold text-gray-500">
                <div className="flex items-center gap-1.5 bg-pearl-100 px-3 py-1.5 border border-gray-200">
                  <MapPin size={14} className="text-rosegold-500" /> {job.location}
                </div>
                <div className="flex items-center gap-1.5 bg-pearl-100 px-3 py-1.5 border border-gray-200">
                  <Briefcase size={14} className="text-rosegold-500" /> {job.type} · {job.experience}
                </div>
                <div className="flex items-center gap-1.5 bg-pearl-100 px-3 py-1.5 border border-gray-200">
                  <Mail size={14} className="text-rosegold-500" />
                  <a href="mailto:careers@urbantextilehub.com" className="hover:text-rosegold-400 transition-colors">Apply via Email</a>
                </div>
              </div>
            </div>

            {/* Right Button Panel */}
            <div className="px-8 pb-8 md:p-10 md:w-64 flex items-center justify-center border-t md:border-t-0 md:border-l border-gray-100 shrink-0">
              <button className="w-full border-2 border-rosegold-500 text-rosegold-500 py-3.5 text-xs font-semibold uppercase tracking-widest hover:bg-rosegold-500 hover:text-white transition-all duration-300">
                Apply Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
      </div>
  );
};

export default Career;
