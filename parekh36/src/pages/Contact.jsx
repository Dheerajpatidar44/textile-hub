import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const C = {
  primary: '#1B2B3F',
  primaryDark: '#0F1E2D',
  primaryLight: '#243B55',
  accent: '#C9A455',
  accentLight: '#F0E4C2',
  bg: '#F8F5EF',
  sand: '#F5EED8',
  border: '#E8E0D0',
  soil: '#1a1a2e',
  stone: '#6B7280',
  cream: '#FDFBF7',
};

const contactDetails = [
  { icon: MapPin, label: 'Headquarters', lines: ['WEAVORA Textile Mall', '123, Textile Market, Surat', 'Gujarat, India - 395002'] },
  { icon: Phone, label: 'Call Us', lines: ['+91 98765 43210', '1800 123 4567'] },
  { icon: Mail, label: 'Email Enquiries', lines: ['hello@weavoratextiles.com', 'sales@weavoratextiles.com'] },
  { icon: Clock, label: 'Business Hours', lines: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Sunday: Closed'] },
];

export default function Contact() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.bg, minHeight: '100vh' }} className="pt-[70px] pb-24">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12">

        {/* Page Title */}
        <div className="text-center mb-6">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 600, color: C.primary, margin: '0 0 12px', letterSpacing: '0.02em' }}>
            Contact Us
          </h1>
          <div style={{ width: 60, height: 2, background: C.accent, borderRadius: 2, margin: '0 auto' }} />
        </div>

        {/* Full Width Map */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full h-[400px] lg:h-[500px] rounded-3xl overflow-hidden border mb-16 shadow-lg"
          style={{ 
            borderColor: C.border, 
          }}
        >
          <iframe
            src="https://maps.google.com/maps?q=Surat%20Textile%20Market&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%" height="100%"
            style={{ border: 0, display: 'block', outline: 'none', filter: 'contrast(1.05) grayscale(0.2)' }}
            frameBorder="0"
            allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="WEAVORA Textile Mall Location"
          />
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactDetails.map(({ icon: Icon, label, lines }, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={label}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-white border"
              style={{
                borderColor: C.border,
                boxShadow: '0 10px 30px rgba(27, 43, 63, 0.04)',
              }}
            >
              <div 
                style={{ 
                  background: 'rgba(201, 164, 85, 0.1)',
                  border: `1px solid rgba(201, 164, 85, 0.3)`,
                  width: 56,
                  height: 56,
                }} 
                className="rounded-full flex items-center justify-center shrink-0 mb-6"
              >
                <Icon size={24} color={C.accent} />
              </div>
              <div>
                <h3 style={{ color: C.primary, margin: '0 0 12px', fontFamily: "'Cormorant Garamond', serif" }} className="text-[22px] font-bold">
                  {label}
                </h3>
                {lines.map((line, i) => (
                  <p key={i} style={{ color: C.stone, fontSize: 14, lineHeight: 1.6 }} className="m-0 font-medium">{line}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
