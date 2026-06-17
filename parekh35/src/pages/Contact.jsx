import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const C = {
  primary: '#56513E',
  primaryDark: '#3b372a',
  accent: '#a87c5e',
  bg: '#fdfaf6',
  sand: '#efe3d5',
  border: '#e6dacb',
  soil: '#3b2314',
  stone: '#7c6a5e',
};

const contactDetails = [
  { icon: MapPin, label: 'Headquarters', lines: ['AAVANIKA Textile Retail', '123, Textile Market, Surat', 'Gujarat, India - 395002'] },
  { icon: Phone, label: 'Call Us', lines: ['+91 98765 43210', '1800 123 4567'] },
  { icon: Mail, label: 'Email Enquiries', lines: ['hello@aavanikatextiles.com', 'sales@aavanikatextiles.com'] },
  { icon: Clock, label: 'Business Hours', lines: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Sunday: Closed'] },
];

export default function Contact() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.bg, minHeight: '100vh' }} className="pt-[80px] pb-20">
      
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 text-left pt-0">

        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 600, color: C.soil, margin: '0 0 12px' }}>
            Contact Us
          </h1>
          <div style={{ width: 50, height: 2, background: C.accent, borderRadius: 2, margin: '0 auto' }} />
        </div>

        {/* Redesigned Layout: Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Side: Directory Cards */}
          <div className="lg:col-span-5 flex flex-col justify-start gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase" style={{ color: C.accent }}>Connect With Us</span>
                <div style={{ width: 24, height: 1, background: C.accent }} />
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", color: C.soil }} className="text-2xl sm:text-3xl font-bold leading-snug">
                We'd love to hear from you. Reach out today.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
              {contactDetails.map(({ icon: Icon, label, lines }, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  key={label}
                  className="flex gap-4 p-5 rounded-2xl border bg-white"
                  style={{
                    borderColor: C.border,
                    boxShadow: '0 10px 30px rgba(59, 35, 20, 0.04)',
                  }}
                >
                  <div 
                    style={{ 
                      background: '#efe3d5',
                      border: `1.5px solid ${C.border}`,
                      width: 44,
                      height: 44,
                    }} 
                    className="rounded-xl flex items-center justify-center shrink-0"
                  >
                    <Icon size={18} style={{ color: C.primary }} />
                  </div>
                  <div>
                    <p style={{ color: C.accent, margin: '0 0 6px' }} className="text-[10.5px] font-bold uppercase tracking-wider">
                      {label}
                    </p>
                    {lines.map((line, i) => (
                      <p key={i} style={{ color: C.soil, fontSize: 13, lineHeight: 1.5 }} className="font-semibold m-0">{line}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Map Container */}
          <div className="lg:col-span-7 w-full flex flex-col">
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-full min-h-[400px] lg:min-h-0 flex-1 rounded-3xl overflow-hidden border bg-white relative"
              style={{ 
                borderColor: C.border, 
                boxShadow: '0 10px 30px rgba(59, 35, 20, 0.04)',
              }}
            >
              <iframe
                src="https://maps.google.com/maps?q=Surat%20Textile%20Market&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%" height="100%"
                style={{ border: 0, display: 'block', outline: 'none', filter: 'contrast(1.01)' }}
                frameBorder="0"
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AAVANIKA Textile Retail Location"
              />
            </motion.div>
          </div>

        </div>

      </div>
    </div>
  );
}
