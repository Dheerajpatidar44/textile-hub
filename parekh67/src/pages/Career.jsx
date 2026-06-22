import { motion } from 'framer-motion';
import { Briefcase, MapPin, Mail, Clock, ArrowRight } from 'lucide-react';

const C = {
  primary: '#0b3329',       // Dark Charcoal
  primaryLight: '#15473b',  // Medium Charcoal
  primaryDark: '#062c22',   // Deep Charcoal
  accent: '#bca374',        // Champagne Gold
  gold: '#bca374',
  bg: '#fcf8f2',
  border: '#eadacc',
  stone: '#4d5d59',
  soil: '#0b3329',
};

const jobs = [
  { id: 1, title: 'Retail Operations Manager', location: 'Mumbai, India', type: 'Full-time', experience: '5-8 Years', description: 'Oversee store operations, manage staff, and ensure a premium customer experience across our flagship retail outlets.' },
  { id: 2, title: 'Senior Fabric Technologist', location: 'Surat, India', type: 'Full-time', experience: '7+ Years', description: 'Lead quality control for incoming fabrics, develop new textile blends, and maintain material excellence.' },
  { id: 3, title: 'B2B Sales Executive', location: 'Delhi, India', type: 'Full-time', experience: '2-4 Years', description: 'Expand our wholesale network, acquire new B2B accounts, and maintain strong relationships with key clients.' },
  { id: 4, title: 'Digital Marketing Specialist', location: 'Remote', type: 'Full-time', experience: '3+ Years', description: 'Drive our online presence, manage social media campaigns, and optimize e-commerce conversion rates.' },
];

export default function Career() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg, minHeight: '90vh' }} className="pt-2 pb-16">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-14 pt-0">

        {/* Page Title Section - minimized top space */}
        <div className="text-center mb-6 mt-2">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#bca374] uppercase mb-2 block">
            Careers
          </span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '38px', fontWeight: 700, color: C.soil, margin: 0, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
            Career Opportunities
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.accent, margin: '8px auto 0' }} />
        </div>
  
        {/* Horizontal vacancy rows */}
        <div className="flex flex-col gap-5 max-w-5xl mx-auto">
          {jobs.map((job, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              key={job.id}
              className="flex flex-col lg:flex-row lg:items-center justify-between p-6 md:p-8 hover:translate-y-[-2px] transition-all"
              style={{
                background: 'white',
                border: `1px solid ${C.border}`,
                borderRadius: 20,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = C.accent;
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(43, 37, 32, 0.04)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = C.border;
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Left Column: Job info */}
              <div className="flex-grow text-left pr-0 lg:pr-8">
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", color: C.soil }} className="text-[22px] font-bold mb-3 leading-snug">
                  {job.title}
                </h3>
                <p style={{ color: C.stone }} className="text-[13.5px] leading-relaxed mb-4 max-w-2xl font-medium">
                  {job.description}
                </p>

                {/* Metadata Row */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-4">
                  {[
                    { icon: MapPin, val: job.location },
                    { icon: Briefcase, val: `${job.type} · ${job.experience}` },
                    { icon: Clock, val: 'Closing: June 30, 2026' },
                    { icon: Mail, val: 'careers@pravaahfabrics.com', href: 'mailto:careers@pravaahfabrics.com' },
                  ].map(({ icon: Icon, val, href }, i) => (
                    <div key={i} style={{ color: C.stone }} className="flex items-center gap-2 text-[12px] font-semibold">
                      <Icon size={13} style={{ color: C.accent }} className="shrink-0" />
                      {href ? (
                        <a href={href} style={{ color: C.primary }} className="hover:text-[#bca374] transition-colors">{val}</a>
                      ) : (
                        <span>{val}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Apply CTA Button */}
              <div className="shrink-0 mt-6 lg:mt-0 border-t lg:border-none pt-4 lg:pt-0" style={{ borderColor: C.border }}>
                <button
                  className="px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest text-white transition-all duration-300 cursor-pointer border-none flex items-center gap-2"
                  style={{
                    background: C.primary,
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = C.accent}
                  onMouseLeave={e => e.currentTarget.style.background = C.primary}
                >
                  <span>Apply Now</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
