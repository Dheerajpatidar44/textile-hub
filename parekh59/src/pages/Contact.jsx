import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const C = {
  primary: '#0a1828',       // Deep Navy
  primaryDark: '#040a12',
  accent: '#D79F88',        // Peach
  gold: '#Bfa37c',          // Gold
  bg: '#FAF6F0',             
  border: '#E8D5C4',
  stone: '#4A4A4A',
};

export default function Contact() {
  const contactDetails = [
    {
      title: "Our Location",
      icon: MapPin,
      lines: ["AURORA Textile House", "123, Textile Market", "Surat, Gujarat, India - 395002"]
    },
    {
      title: "Call Us",
      icon: Phone,
      lines: ["Toll Free: 1800 123 4567", "Mobile: +91 98765 43210", "Landline: +91 261 2345678"]
    },
    {
      title: "Email & Hours",
      icon: Mail,
      lines: ["info@auroratextile.com", "sales@auroratextile.com", "Mon - Sat: 9:00 AM - 6:00 PM"]
    }
  ];

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg, minHeight: '85vh' }} className="pt-2 pb-20">
      
      {/* ── Page Header - Minimal gap above heading ── */}
      <div className="text-center mb-10 mt-2">
        <span className="text-[11px] font-bold tracking-[0.25em] text-[#D79F88] uppercase block mb-1">GET IN TOUCH</span>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '38px', fontWeight: 700, color: C.primary, margin: 0, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
          Contact Us
        </h1>
        <div style={{ width: 40, height: 1.5, background: C.gold, margin: '8px auto 0' }} />
      </div>

      <div className="max-w-[85rem] mx-auto px-6 lg:px-12 flex flex-col gap-10">
        
        {/* Top: Large Map Section (Redesigned shape and placement) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full rounded-[32px] overflow-hidden border border-[#E8D5C4] shadow-xs relative bg-white h-[420px]"
        >
          <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-full border border-[#E8D5C4] shadow-xs">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#0a1828]">Surat, Gujarat Textile Market</span>
          </div>
          <iframe
            src="https://maps.google.com/maps?q=Surat%20Textile%20Market&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%" height="100%"
            style={{ border: 0, display: 'block', outline: 'none', filter: 'sepia(0.1) contrast(1.02) opacity(0.95)' }}
            frameBorder="0"
            allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="AURORA Textile House Location Map"
          />
        </motion.div>

        {/* Bottom: 3-Column Detail Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactDetails.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-white p-8 rounded-2xl border border-[#E8D5C4] shadow-xs flex flex-col items-center text-center gap-5 hover:shadow-sm transition-shadow"
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-[#0a1828] bg-[#FAF6F0] border border-[#E8D5C4] shrink-0">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-[#0a1828] uppercase tracking-wider mb-3 font-sans">{item.title}</h3>
                  <div className="space-y-1.5">
                    {item.lines.map((line, lIdx) => (
                      <p key={lIdx} className="text-[13px] text-[#4A4A4A] font-medium leading-relaxed m-0">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
