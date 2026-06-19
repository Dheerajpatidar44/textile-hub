import { motion } from 'framer-motion';
import { Briefcase, MapPin, Mail, Clock } from 'lucide-react';

const C = {
  primary: '#e2b865',        // Gold
  primaryDark: '#0a0c10',
  soil: '#e2b865',
  sand: '#12151c',
  bg: '#12151c',
  border: '#2a3142',
  stone: '#a0aec0',
  accent: '#e2b865',         // Gold Accent
};

const jobs = [
  { id: 1, title: 'Retail Operations Manager', location: 'Mumbai, India', type: 'Full-time', experience: '5-8 Years', description: 'Oversee store operations, manage staff, and ensure a premium customer experience across our flagship retail outlets.' },
  { id: 2, title: 'Senior Fabric Technologist', location: 'Surat, India', type: 'Full-time', experience: '7+ Years', description: 'Lead quality control for incoming fabrics, develop new textile blends, and maintain material excellence.' },
  { id: 3, title: 'B2B Sales Executive', location: 'Delhi, India', type: 'Full-time', experience: '2-4 Years', description: 'Expand our wholesale network, acquire new B2B accounts, and maintain strong relationships with key clients.' },
  { id: 4, title: 'Digital Marketing Specialist', location: 'Remote', type: 'Full-time', experience: '3+ Years', description: 'Drive our online presence, manage social media campaigns, and optimize e-commerce conversion rates.' },
];

export default function Career() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: C.bg, minHeight: '90vh' }} className="pt-2 pb-16">

      {/* Main Content */}
      <div className="max-w-[90rem] mx-auto px-6 lg:px-14 pt-0">

        {/* Page Title Section */}
        <div className="text-center mb-6 mt-1">
          <h1 style={{ fontFamily: "'Cinzel', serif", fontSize: '44px', fontWeight: 500, color: C.soil, margin: 0 }}>
            Career Opportunities
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.accent, margin: '8px auto 0' }} />
        </div>

        {/* Changed grid layout to horizontal row stack */}
        <div className="flex flex-col gap-6">
          {jobs.map((job, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              key={job.id}
              className="flex flex-col md:flex-row justify-between items-start md:items-center p-8 gap-6"
              style={{
                background: '#1b202c',
                border: `1px solid ${C.border}`,
                borderRadius: '0px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.2)';
                e.currentTarget.style.borderColor = C.primary;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = C.border;
              }}
            >
              <div className="flex-grow text-left">
                <h3 style={{ fontFamily: "'Cinzel', serif", color: C.soil }} className="text-[20px] font-bold mb-3 leading-snug">
                  {job.title}
                </h3>
                <p style={{ color: C.stone }} className="text-[13px] leading-relaxed mb-4 font-medium max-w-[650px]">
                  {job.description}
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {[
                    { icon: MapPin, val: job.location },
                    { icon: Briefcase, val: `${job.type} · ${job.experience}` },
                    { icon: Clock, val: 'Apply by June 30, 2026' },
                    { icon: Mail, val: 'careers@auraweaves.com', href: 'mailto:careers@auraweaves.com' },
                  ].map(({ icon: Icon, val, href }) => (
                    <div key={val} style={{ color: C.stone }} className="flex items-center gap-2.5 text-[12.5px] font-semibold">
                      <Icon size={14} style={{ color: C.accent }} className="shrink-0" />
                      {href ? (
                        <a href={href} className="hover:text-white transition-colors">{val}</a>
                      ) : (
                        <span>{val}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="shrink-0 flex flex-col justify-center min-w-[150px]">
                <button
                  className="w-full py-3 rounded-none font-bold text-xs uppercase tracking-widest text-[#12151c] transition-colors cursor-pointer"
                  style={{
                    background: C.primary,
                    border: 'none'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#12151c'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = C.primary; e.currentTarget.style.color = '#12151c'; }}
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
}
