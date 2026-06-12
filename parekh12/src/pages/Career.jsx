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
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#0A0A0C' }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#F3F4F6]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Careers
          </h1>
        </div>
      </div>

      <div className="pb-16 max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col gap-5 text-left">
          {jobs.map((job, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              key={job.id}
              className="group flex flex-col lg:flex-row items-start lg:items-center justify-between bg-[#121216] transition-all duration-300 hover:shadow-md p-6 md:p-8"
              style={{ border: '1.5px solid #24252F' }}
            >
              <div className="flex-grow max-w-4xl lg:pr-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 leading-tight text-[#F3F4F6]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {job.title}
                </h3>

                <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-4">
                  <div className="flex items-center gap-2 text-[13px] font-semibold text-[#9CA3AF]">
                    <MapPin size={14} color="#C89B5F" /> {job.location}
                  </div>
                  <div className="flex items-center gap-2 text-[13px] font-semibold text-[#9CA3AF]">
                    <Briefcase size={14} color="#C89B5F" /> {job.type} · {job.experience}
                  </div>
                  <div className="flex items-center gap-2 text-[13px] font-semibold text-[#9CA3AF]">
                    <Mail size={14} color="#C89B5F" />
                    <a href="mailto:careers@swastiktextilemall.com" className="hover:underline text-[#C89B5F]">
                      careers@swastiktextilemall.com
                    </a>
                  </div>
                </div>

                <p className="text-[13.5px] leading-relaxed mb-6 lg:mb-0 text-[#D1D5DB] font-medium">{job.description}</p>
              </div>

              <div className="w-full lg:w-auto shrink-0 border-t lg:border-t-0 lg:border-l pt-5 lg:pt-0 lg:pl-8 border-[#24252F]">
                <button
                  className="w-full lg:w-44 py-3.5 text-[11px] font-bold uppercase tracking-widest transition-all duration-200 hover:opacity-95 text-white btn-primary shadow-sm animate-none"
                >
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
