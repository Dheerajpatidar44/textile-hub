import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const C = {
  primary: '#043B5C',
  accent: '#C29B62',
  bg: '#FAFAFA',
  border: '#EAEAEA',
};

const contactDetails = [
  { icon: MapPin, label: 'Headquarters', lines: ['SAUVORA Textile Retail', '123, Textile Market, Surat', 'Gujarat, India - 395002'] },
  { icon: Phone, label: 'Call Us', lines: ['+91 98765 43210', '1800 123 4567'] },
  { icon: Mail, label: 'Email Enquiries', lines: ['hello@sauvora.com', 'sales@sauvora.com'] },
  { icon: Clock, label: 'Business Hours', lines: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Sunday: Closed'] },
];

export default function Contact() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: C.bg, minHeight: '100vh' }} className="pt-[40px] pb-24">
      <div className="max-w-[85rem] mx-auto px-6 lg:px-12">

        <div className="text-center mb-16">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(40px, 5vw, 56px)', fontWeight: 700, color: C.primary, margin: '0 0 16px' }}>
            Contact <span style={{ color: C.accent }}>Us</span>
          </h1>
          <div style={{ width: 60, height: 2, background: C.accent, margin: '0 auto' }} />
          <p className="mt-6 text-[#6B7280] max-w-2xl mx-auto">We are here to assist you with any inquiries regarding our premium textile collections or bulk orders.</p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactDetails.map(({ icon: Icon, label, lines }, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={label}
              className="flex flex-col items-center text-center p-8 bg-white rounded-[24px] border border-transparent hover:border-[#C29B62] transition-colors"
              style={{
                boxShadow: '0 10px 30px rgba(4, 59, 92, 0.05)',
              }}
            >
              <div 
                style={{ 
                  background: '#F8F5F0',
                  width: 64,
                  height: 64,
                }} 
                className="rounded-full flex items-center justify-center shrink-0 mb-6"
              >
                <Icon size={28} color={C.accent} />
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
          className="w-full h-[400px] lg:h-[550px] overflow-hidden rounded-[40px] shadow-2xl relative"
        >
          <div className="absolute top-8 left-8 z-10 bg-white/90 backdrop-blur-md px-8 py-4 rounded-full shadow-lg">
             <span className="text-[14px] font-bold uppercase tracking-widest" style={{ color: C.primary }}>Find us here</span>
          </div>
          <iframe
            src="https://maps.google.com/maps?q=Surat%20Textile%20Market&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%" height="100%"
            style={{ border: 0, display: 'block', outline: 'none', filter: 'contrast(1.1) grayscale(0.1)' }}
            frameBorder="0"
            allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SAUVORA Location"
          />
        </motion.div>

      </div>
    </div>
  );
}
