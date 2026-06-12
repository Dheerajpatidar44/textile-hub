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
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#FCF5F0' }}>

      {/* Hero Banner */}
      <div className="relative h-32 sm:h-40 overflow-hidden flex items-center justify-center text-center">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#3C3430]"
            style={{ fontFamily: "'Marcellus', serif" }}>
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
              className="group flex flex-col lg:flex-row items-start lg:items-center justify-between rounded-2xl bg-white transition-all duration-300 hover:shadow-md p-6 md:p-8"
              style={{ border: '1.5px solid #EADCD2' }}
            >
              <div className="flex-grow max-w-4xl lg:pr-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 leading-tight text-[#3C3430]"
                  style={{ fontFamily: "'Marcellus', serif" }}>
                  {job.title}
                </h3>

                <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-4">
                  <div className="flex items-center gap-2 text-[13px] font-semibold text-[#706863]">
                    <MapPin size={14} color="#A24E51" /> {job.location}
                  </div>
                  <div className="flex items-center gap-2 text-[13px] font-semibold text-[#706863]">
                    <Briefcase size={14} color="#A24E51" /> {job.type} · {job.experience}
                  </div>
                  <div className="flex items-center gap-2 text-[13px] font-semibold text-[#706863]">
                    <Mail size={14} color="#A24E51" />
                    <a href="mailto:careers@textilemall.com" className="hover:underline text-[#A24E51]">
                      careers@textilemall.com
                    </a>
                  </div>
                </div>

                <p className="text-[13.5px] leading-relaxed mb-6 lg:mb-0 text-[#554D48] font-medium">{job.description}</p>
              </div>

              <div className="w-full lg:w-auto shrink-0 border-t lg:border-t-0 lg:border-l pt-5 lg:pt-0 lg:pl-8 border-[#EADCD2]">
                <button
                  className="w-full lg:w-44 py-3.5 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all duration-200 hover:opacity-95 text-white btn-primary shadow-sm animate-none"
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
