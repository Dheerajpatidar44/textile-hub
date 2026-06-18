import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const C = {
  primary: '#1A2A44',
  accent: '#B56A79',
  bg: '#FFF5F5',
  sand: '#FDECEE',
  border: '#F6D6DA',
};

const contactDetails = [
  { icon: MapPin, label: 'Headquarters', lines: ['Varnika Weaves Textile Studio', '123, Textile Market, Surat', 'Gujarat, India - 395002'] },
  { icon: Phone, label: 'Call Us', lines: ['+91 98765 43210', '1800 123 4567'] },
  { icon: Mail, label: 'Email Enquiries', lines: ['hello@varnikaweaves.com', 'sales@varnikaweaves.com'] },
  { icon: Clock, label: 'Business Hours', lines: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Sunday: Closed'] },
];

export default function Contact() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: C.bg, minHeight: '100vh' }} className="pt-[60px] pb-24">
      <div className="max-w-[85rem] mx-auto px-6 lg:px-12">

        <div className="text-center mb-16">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(40px, 5vw, 56px)', fontWeight: 700, color: C.primary, margin: '0 0 16px' }}>
            Get in Touch
          </h1>
          <div style={{ width: 60, height: 2, background: C.accent, margin: '0 auto' }} />
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactDetails.map(({ icon: Icon, label, lines }, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={label}
              className="flex flex-col items-center text-center p-8 bg-white rounded-2xl border"
              style={{
                borderColor: C.border,
                boxShadow: '0 10px 30px rgba(26,42,68,0.05)',
              }}
            >
              <div 
                style={{ 
                  background: '#FDECEE',
                  width: 56,
                  height: 56,
                }} 
                className="rounded-full flex items-center justify-center shrink-0 mb-6"
              >
                <Icon size={24} color={C.accent} />
              </div>
              <div>
                <h3 style={{ color: C.primary, margin: '0 0 12px', fontFamily: "'Inter', sans-serif" }} className="text-[14px] font-bold tracking-widest uppercase">
                  {label}
                </h3>
                {lines.map((line, i) => (
                  <p key={i} style={{ color: '#6B7280', fontSize: 13, lineHeight: 1.6 }} className="m-0 font-medium">{line}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full-width Map Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full h-[400px] lg:h-[500px] overflow-hidden rounded-[32px] border-4 shadow-xl relative"
          style={{ 
            borderColor: 'white', 
          }}
        >
          <div className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full border shadow-sm" style={{ borderColor: C.border }}>
             <span className="text-[13px] font-bold uppercase tracking-widest" style={{ color: C.primary }}>Find us here</span>
          </div>
          <iframe
            src="https://maps.google.com/maps?q=Surat%20Textile%20Market&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%" height="100%"
            style={{ border: 0, display: 'block', outline: 'none', filter: 'contrast(1.05) grayscale(0.2)' }}
            frameBorder="0"
            allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Varnika Weaves Location"
          />
        </motion.div>

      </div>
    </div>
  );
}
