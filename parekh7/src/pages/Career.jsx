import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Mail } from 'lucide-react';

const jobs = [
  { id: 1, title: 'Retail Operations Manager', location: 'Mumbai, India', type: 'Full-time', experience: '5-8 Years', description: 'Oversee daily store operations, manage staff, and ensure a premium customer experience across our flagship retail outlets.' },
  { id: 2, title: 'Senior Fabric Technologist', location: 'Surat, India', type: 'Full-time', experience: '7+ Years', description: 'Lead quality control for incoming fabrics, develop new textile blends, and maintain our high standards of material excellence.' },
  { id: 3, title: 'B2B Sales Executive', location: 'Delhi, India', type: 'Full-time', experience: '2-4 Years', description: 'Expand our wholesale network, acquire new B2B accounts, and maintain strong relationships with our key clients.' },
  { id: 4, title: 'Digital Marketing Specialist', location: 'Remote', type: 'Full-time', experience: '3+ Years', description: 'Drive our online presence, manage social media campaigns, and optimize e-commerce conversion rates.' },
];

const Career = () => {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#FDF6EC' }}>

      {/* Hero Banner */}
      <div className="relative h-32 sm:h-40 overflow-hidden flex items-center justify-center text-center"
        style={{ background: 'linear-gradient(135deg, #1A0A05 0%, #2C1810 60%, #3D2418 100%)' }}>
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle, #C9A227 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          
          <h1 className="font-bold text-5xl sm:text-6xl text-white"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Career Page
          </h1>
        </div>
      </div>

      <div className="pb-16 max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((job, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              key={job.id}
              className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ background: '#FFFBF5', border: '1.5px solid rgba(201,162,39,0.2)' }}
            >
              <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #9B2519, #C9A227)' }} />
              <div className="p-7 md:p-8 flex-grow">
                <h3 className="text-2xl font-bold mb-5 leading-tight"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: '#2C1810' }}>
                  {job.title}
                </h3>

                <div className="space-y-2.5 mb-6 p-4 rounded-xl"
                  style={{ background: '#FDF6EC', border: '1px solid rgba(201,162,39,0.15)' }}>
                  <div className="flex items-center gap-2.5 text-[13px] font-medium" style={{ color: '#7D5A4F' }}>
                    <MapPin size={14} color="#C9A227" /> {job.location}
                  </div>
                  <div className="flex items-center gap-2.5 text-[13px] font-medium" style={{ color: '#7D5A4F' }}>
                    <Briefcase size={14} color="#C9A227" /> {job.type} · {job.experience}
                  </div>
                  <div className="flex items-center gap-2.5 text-[13px] font-medium" style={{ color: '#7D5A4F' }}>
                    <Mail size={14} color="#C9A227" />
                    <a href="mailto:careers@textilemall.com" className="hover:underline" style={{ color: '#B83227' }}>
                      careers@textilemall.com
                    </a>
                  </div>
                </div>

                <p className="text-sm leading-relaxed" style={{ color: '#7D5A4F' }}>{job.description}</p>
              </div>

              <div className="px-7 pb-7 md:px-8 md:pb-8">
                <button
                  className="w-full py-3.5 rounded-xl text-[12px] font-bold uppercase tracking-widest transition-all duration-200 hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #9B2519, #B83227)', color: 'white', boxShadow: '0 4px 12px rgba(184,50,39,0.25)' }}>
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
