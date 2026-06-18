import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const C = {
  primary: '#2C1E16',
  accent: '#8A4A51',
  bg: '#F9F5F0',
  sand: '#F5EED8',
  border: '#E8DCC8',
};

const contactDetails = [
  { icon: MapPin, label: 'Headquarters', lines: ['Katha Weaves Textile Mall', '123, Textile Market, Surat', 'Gujarat, India - 395002'] },
  { icon: Phone, label: 'Call Us', lines: ['+91 98765 43210', '1800 123 4567'] },
  { icon: Mail, label: 'Email Enquiries', lines: ['hello@kathaweaves.com', 'sales@kathaweaves.com'] },
  { icon: Clock, label: 'Business Hours', lines: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Sunday: Closed'] },
];

export default function Contact() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: C.bg, minHeight: '100vh' }} className="pt-[80px] pb-24">
      <div className="max-w-[85rem] mx-auto px-6 lg:px-12">

        <div className="text-center mb-16">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(40px, 5vw, 56px)', fontWeight: 700, color: C.primary, margin: '0 0 16px' }}>
            Get in Touch
          </h1>
          <div style={{ width: 60, height: 2, background: C.accent, margin: '0 auto' }} />
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact Info Cards */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            {contactDetails.map(({ icon: Icon, label, lines }, idx) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={label}
                className="flex items-start p-6  bg-white border"
                style={{
                  borderColor: C.border,
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)',
                }}
              >
                <div 
                  style={{ 
                    background: 'rgba(138, 74, 81, 0.1)',
                    width: 48,
                    height: 48,
                  }} 
                  className=" flex items-center justify-center shrink-0 mr-5"
                >
                  <Icon size={20} color={C.accent} />
                </div>
                <div>
                  <h3 style={{ color: C.primary, margin: '0 0 6px', fontFamily: "'Inter', sans-serif" }} className="text-[15px] font-bold tracking-wide uppercase">
                    {label}
                  </h3>
                  {lines.map((line, i) => (
                    <p key={i} style={{ color: '#6B7280', fontSize: 14, lineHeight: 1.6 }} className="m-0 font-medium">{line}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Map Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-2/3 h-[500px] lg:h-auto  overflow-hidden border shadow-sm relative"
            style={{ 
              borderColor: C.border, 
            }}
          >
            <div className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur-md px-6 py-3  border shadow-sm" style={{ borderColor: C.border }}>
               <span className="text-[13px] font-bold uppercase tracking-widest" style={{ color: C.primary }}>Find us here</span>
            </div>
            <iframe
              src="https://maps.google.com/maps?q=Surat%20Textile%20Market&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%" height="100%"
              style={{ border: 0, display: 'block', outline: 'none', filter: 'contrast(1.05) grayscale(0.2)' }}
              frameBorder="0"
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Katha Weaves Textile Mall Location"
            />
          </motion.div>
        </div>

      </div>
    </div>
  );
}
