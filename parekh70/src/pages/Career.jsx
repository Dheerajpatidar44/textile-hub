import { motion } from 'framer-motion';
import { Briefcase, MapPin, Mail, Clock } from 'lucide-react';

const C = {
  primary: '#1B2A4A',
  accent: '#D4A842',
  bg: '#F8F7F4',
  border: '#E2DDDA',
  stone: '#5A5560',
};

const jobs = [
  { id: 1, title: 'Retail Operations Manager', location: 'Mumbai, India', type: 'Full-time', experience: '5-8 Years', description: 'Oversee store operations, manage staff, and ensure a premium customer experience across our flagship retail outlets.' },
  { id: 2, title: 'Senior Fabric Technologist', location: 'Surat, India', type: 'Full-time', experience: '7+ Years', description: 'Lead quality control for incoming fabrics, develop new textile blends, and maintain material excellence.' },
  { id: 3, title: 'B2B Sales Executive', location: 'Delhi, India', type: 'Full-time', experience: '2-4 Years', description: 'Expand our wholesale network, acquire new B2B accounts, and maintain strong relationships with key clients.' },
  { id: 4, title: 'Digital Marketing Specialist', location: 'Remote', type: 'Full-time', experience: '3+ Years', description: 'Drive our online presence, manage social media campaigns, and optimize e-commerce conversion rates.' },
];

export default function Career() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.bg, minHeight: '90vh' }} className="pb-16">

      {/* Main Content */}
      <div className="max-w-[90rem] mx-auto px-6 lg:px-14 pt-0">

        {/* Page Title Section - minimized top space */}
        <div className="text-center mb-6 mt-0">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '38px', fontWeight: 700, color: C.primary, margin: 0, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
            Career Opportunities
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.accent, margin: '8px auto 0' }} />
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {jobs.map((job, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              key={job.id}
              className="flex flex-col justify-between p-8"
              style={{
                background: 'white',
                border: `1px solid ${C.border}`,
                borderRadius: 24,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(107, 66, 38, 0.04)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: C.primary }} className="text-[20px] font-bold mb-5 leading-snug">
                  {job.title}
                </h3>
                <div className="flex flex-col gap-3 mb-6">
                  {[
                    { icon: MapPin, val: job.location },
                    { icon: Briefcase, val: `${job.type} · ${job.experience}` },
                    { icon: Clock, val: 'Apply by June 30, 2026' },
                    { icon: Mail, val: 'careers@merakiethnic.com', href: 'mailto:careers@merakiethnic.com' },
                  ].map(({ icon: Icon, val, href }) => (
                    <div key={val} style={{ color: C.stone }} className="flex items-center gap-2.5 text-[12.5px] font-semibold">
                      <Icon size={14} style={{ color: C.accent }} className="shrink-0" />
                      {href ? (
                        <a href={href} style={{ color: C.primary }} className="hover:text-[#D4A842] transition-colors">{val}</a>
                      ) : (
                        <span>{val}</span>
                      )}
                    </div>
                  ))}
                </div>
                <p style={{ color: C.stone }} className="text-[13px] leading-relaxed mb-4 font-medium">
                  {job.description}
                </p>
              </div>

              <div className="pt-6 mt-0 flex flex-col gap-3" style={{ borderTop: `1px solid ${C.border}` }}>
                <button
                  className="w-full py-3 rounded-[12px] font-bold text-xs uppercase tracking-widest text-white transition-colors cursor-pointer"
                  style={{
                    background: C.primary,
                    border: 'none'
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = C.accent}
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
}
