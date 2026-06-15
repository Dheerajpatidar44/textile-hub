import { motion } from 'framer-motion';
import { Briefcase, MapPin, Mail } from 'lucide-react';

const C = { 
  primary: '#6E64B4', 
  primaryDark: '#252131', 
  accent: '#6E64B4', 
  bg: '#FAF9F5', 
  bgLight: '#FAF9F5', 
  border: '#E1DFEB', 
  textDark: '#252131', 
  textMid: '#252131', 
  textMuted: '#6E64B4' 
};

const jobs = [
  { id: 1, title: 'Retail Operations Manager', location: 'Mumbai, India', type: 'Full-time', experience: '5-8 Years', description: 'Oversee daily store operations, manage staff, and ensure a premium customer experience across our flagship retail outlets.' },
  { id: 2, title: 'Senior Fabric Technologist', location: 'Surat, India', type: 'Full-time', experience: '7+ Years', description: 'Lead quality control for incoming fabrics, develop new textile blends, and maintain our high standards of material excellence.' },
  { id: 3, title: 'B2B Sales Executive', location: 'Delhi, India', type: 'Full-time', experience: '2-4 Years', description: 'Expand our wholesale network, acquire new B2B accounts, and maintain strong relationships with our key clients.' },
  { id: 4, title: 'Digital Marketing Specialist', location: 'Remote', type: 'Full-time', experience: '3+ Years', description: 'Drive our online presence, manage social media campaigns, and optimize e-commerce conversion rates.' },
];

const Career = () => {
  return (
    <div style={{ fontFamily: "'Urbanist', sans-serif", background: C.bg }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center"
        style={{ background: 'linear-gradient(135deg, #FAF9F5 0%, #E1DFEB 100%)', borderBottom: `1px solid ${C.border}` }}>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-black text-4xl sm:text-5xl serif-title" style={{ color: C.textDark }}>Career Page</h1>
          <div className="w-12 h-[2.5px] mx-auto mt-3 rounded-full" style={{ background: C.primary }} />
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
              className="group flex flex-col lg:flex-row items-start lg:items-center justify-between rounded-2xl bg-white transition-all duration-300 hover:shadow-md p-6 md:p-8 border"
              style={{ borderColor: C.border }}
            >
              <div className="flex-grow max-w-4xl lg:pr-8">
                <h3 className="text-xl sm:text-2xl font-black mb-3 leading-tight serif-title" style={{ color: C.textDark }}>
                  {job.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-4">
                  <div className="flex items-center gap-2 text-[13px] font-semibold opacity-75" style={{ color: C.textDark }}>
                    <MapPin size={14} color={C.primary} /> {job.location}
                  </div>
                  <div className="flex items-center gap-2 text-[13px] font-semibold opacity-75" style={{ color: C.textDark }}>
                    <Briefcase size={14} color={C.primary} /> {job.type} · {job.experience}
                  </div>
                  <div className="flex items-center gap-2 text-[13px] font-semibold opacity-75" style={{ color: C.textDark }}>
                    <Mail size={14} color={C.primary} />
                    <a href="mailto:careers@auraloom.com" className="hover:underline" style={{ color: C.primary }}>
                      careers@auraloom.com
                    </a>
                  </div>
                </div>
                <p className="text-[13.5px] leading-relaxed mb-6 lg:mb-0 font-medium opacity-80" style={{ color: C.textMid }}>{job.description}</p>
              </div>

              <div className="w-full lg:w-auto shrink-0 border-t lg:border-t-0 lg:border-l pt-5 lg:pt-0 lg:pl-8" style={{ borderColor: C.border }}>
                <button
                  className="w-full lg:w-44 py-3.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all duration-200 hover:opacity-95 text-white shadow-sm cursor-pointer"
                  style={{ background: C.primary }}
                  onMouseEnter={e => e.currentTarget.style.background = C.primaryDark}
                  onMouseLeave={e => e.currentTarget.style.background = C.primary}
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
