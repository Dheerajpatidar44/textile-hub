import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const COLORS = { 
  primary: '#6E64B4', 
  accent: '#6E64B4', 
  bg: '#FAF9F5', 
  border: '#E1DFEB', 
  textDark: '#252131', 
  textMid: '#252131', 
};

export default function Contact() {
  const contactDetails = [
    { icon: MapPin, label: 'Headquarters', lines: ['123 Premium Textile Avenue', 'Fashion District, Chennai, TN, India'] },
    { icon: Phone, label: 'Call Us', lines: ['+91 6353778329'] },
    { icon: Mail, label: 'Email Enquiries', lines: ['info@auraloom.com', 'sales@auraloom.com'] },
    { icon: Clock, label: 'Business Hours', lines: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Sunday: Closed'] },
  ];

  return (
    <div style={{ fontFamily: "'Urbanist', sans-serif", background: COLORS.bg, minHeight: '100vh' }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center animate-fade-in"
        style={{ background: 'linear-gradient(135deg, #FAF9F5 0%, #E1DFEB 100%)', borderBottom: `1px solid ${COLORS.border}` }}>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-black text-4xl sm:text-5xl serif-title" style={{ color: COLORS.textDark }}>
            Contact us
          </h1>
          <div className="w-12 h-[2.5px] mx-auto mt-3 rounded-full" style={{ background: COLORS.primary }} />
        </div>
      </div>

      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 py-12 pb-24 space-y-12">
        
        {/* Top Section: Contact Info Blocks in Full-Width Row Grid */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left"
        >
          {contactDetails.map(({ icon: Icon, label, lines }) => (
            <div 
              key={label} 
              className="rounded-2xl p-6 bg-white border shadow-sm transition-all duration-300 hover:shadow-md flex flex-col justify-start"
              style={{ borderColor: COLORS.border }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border mb-4"
                style={{ background: 'rgba(110, 100, 180, 0.06)', borderColor: 'rgba(110, 100, 180, 0.1)' }}>
                <Icon size={18} color={COLORS.primary} />
              </div>
              <div>
                <p className="text-[10px] font-extrabold tracking-[0.18em] uppercase mb-1.5" style={{ color: COLORS.primary }}>
                  {label}
                </p>
                {lines.map((line, i) => (
                  <p key={i} className="text-sm font-semibold leading-relaxed" style={{ color: COLORS.textDark }}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom Section: Map Stretching Full-Width */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="w-full"
        >
          <div className="w-full rounded-3xl overflow-hidden shadow-sm h-[380px] sm:h-[450px] border"
            style={{ borderColor: COLORS.border }}>
            <iframe
              src="https://maps.google.com/maps?q=Surat%20Textile%20Market&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aura Loom Location Map"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
}
