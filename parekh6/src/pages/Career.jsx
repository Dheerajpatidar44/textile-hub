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
    <div className="pb-16 max-w-7xl mx-auto px-4">

      
      <div className="text-center mb-12 py-8">
        <h1 className="font-playfair text-5xl text-vastram-brown">Career Page</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {jobs.map((job, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: idx * 0.1 }}
            key={job.id} 
            className="bg-white rounded-none border border-gray-100 hover:border-vastram-gold hover:shadow-xl transition-all duration-400 flex flex-col overflow-hidden"
          >
            <div className="p-8 md:p-10 flex-grow">
              <h3 className="text-2xl font-playfair font-bold text-vastram-brown mb-6">{job.title}</h3>

              <div className="space-y-3 mb-8 p-5 bg-vastram-cream rounded-none border border-gray-100">
                <div className="flex items-center gap-3 text-sm font-bold text-gray-500">
                  <MapPin size={16} className="text-vastram-gold" /> {job.location}
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-gray-500">
                  <Briefcase size={16} className="text-vastram-gold" /> {job.type} · {job.experience}
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-gray-500">
                  <Mail size={16} className="text-vastram-gold" />
                  <a href="mailto:careers@textilemall.com" className="hover:text-vastram-gold transition-colors">careers@textilemall.com</a>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">{job.description}</p>
            </div>

            <div className="px-8 pb-8 md:px-10 md:pb-10">
              <button className="w-full border-2 border-vastram-brown text-vastram-brown py-4 rounded-none text-xs font-bold uppercase tracking-widest hover:bg-vastram-brown hover:text-white transition-all duration-300">
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
