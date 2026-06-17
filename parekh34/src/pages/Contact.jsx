import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const C = {
  primary: '#4A1942',
  primaryLight: '#6B2D5B',
  accent: '#8B5E3C',
  bg: '#FAF6F1',
  sand: '#F5EDE4',
  border: '#E8DDD4',
  soil: '#3D1F35',
  stone: '#7A6670',
};

const contactDetails = [
  { icon: MapPin, label: 'Headquarters', lines: ['THREADORA Textile Retail', '123, Textile Market, Surat', 'Gujarat, India - 395002'] },
  { icon: Phone, label: 'Call Us', lines: ['+91 98765 43210', '1800 123 4567'] },
  { icon: Mail, label: 'Email Enquiries', lines: ['hello@threadora.com', 'sales@threadora.com'] },
  { icon: Clock, label: 'Business Hours', lines: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Sunday: Closed'] },
];

export default function Contact() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.bg, minHeight: '100vh' }} className="pt-[80px] pb-20">
      
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 text-left pt-0">

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 40px)', fontWeight: 600, color: C.soil, margin: '0 0 12px' }}>
            Contact Us
          </h1>
          <div style={{ width: 50, height: 2, background: C.accent, borderRadius: 2, margin: '0 auto' }} />
        </div>

        {/* Full-width map with contact overlay */}
        <div style={{ position: 'relative', borderRadius: 24, overflow: 'hidden', border: `1.5px solid ${C.border}`, boxShadow: '0 12px 32px rgba(74,25,66,0.06)' }}>
          {/* Map */}
          <div style={{ height: 500 }}>
            <iframe
              src="https://maps.google.com/maps?q=Surat%20Textile%20Market&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%" height="100%"
              style={{ border: 0, display: 'block', filter: 'grayscale(0.1) contrast(1.02)' }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="THREADORA Textile Retail Location"
            />
          </div>

          {/* Contact cards overlaid on map */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6" style={{ background: 'linear-gradient(0deg, rgba(250,246,241,0.98) 60%, transparent 100%)' }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {contactDetails.map(({ icon: Icon, label, lines }, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  key={label}
                  className="flex flex-col items-start gap-3 p-5 rounded-2xl"
                  style={{
                    background: 'rgba(255,255,255,0.95)',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${C.border}`,
                    boxShadow: '0 4px 16px rgba(74,25,66,0.06)',
                  }}
                >
                  <div 
                    style={{ 
                      background: 'rgba(139,94,60,0.1)',
                      border: `1.5px solid rgba(139,94,60,0.2)` 
                    }} 
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  >
                    <Icon size={18} style={{ color: C.accent }} />
                  </div>
                  <div>
                    <p style={{ color: C.accent, margin: '0 0 4px' }} className="text-[10px] font-bold uppercase tracking-wider">
                      {label}
                    </p>
                    {lines.map((line, i) => (
                      <p key={i} style={{ color: C.soil, fontSize: 12.5, lineHeight: 1.4 }} className="font-semibold m-0">{line}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
