import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const C = {
  primary: '#0a1c3a',        // Primary Navy
  primaryLight: '#1f3458',  // Light Navy
  accent: '#d27265',         // Accent Coral/Terracotta
  bg: '#ffffff',
  sand: '#f7efe5',           // Soft Warm Sand
  border: '#ebdcd8',         // Soft Warm Border
  soil: '#0a1c3a',           // Deep Slate Navy
  stone: '#536476',          // Muted Slate Text
};

const contactDetails = [
  { icon: MapPin, label: 'Headquarters', lines: ['LOOMERA Textile Retail', '123, Textile Market, Surat', 'Gujarat, India - 395002'] },
  { icon: Phone, label: 'Call Us', lines: ['+91 98765 43210', '1800 123 4567'] },
  { icon: Mail, label: 'Email Enquiries', lines: ['hello@loomera.com', 'sales@loomera.com'] },
  { icon: Clock, label: 'Business Hours', lines: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Sunday: Closed'] },
];

export default function Contact() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.bg, minHeight: '100vh' }} className="pt-16 pb-20">
      
      {/* Main Content */}
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 text-left pt-10">

        {/* Page Title Section */}
        <div className="text-center mb-12">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 40px)', fontWeight: 600, color: C.soil, margin: '0 0 12px' }}>
            Contact Us
          </h1>
          <div style={{ width: 50, height: 2, background: C.accent, borderRadius: 2, margin: '0 auto' }} />
        </div>
  
        {/* Split screen content layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch mt-10">
          
          {/* Left Column: Contact Cards Grid (2x2) */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactDetails.map(({ icon: Icon, label, lines }, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                key={label}
                className="card-hover flex flex-col items-start gap-4 p-6 rounded-2xl bg-white shadow-sm"
                style={{
                  border: `1.5px solid ${C.border}`,
                  background: 'linear-gradient(135deg, #ffffff 0%, #fcf8f2 100%)',
                }}
              >
                <div 
                  style={{ 
                    background: 'rgba(210, 114, 101, 0.1)',
                    border: `1.5px solid rgba(210, 114, 101, 0.2)` 
                  }} 
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                >
                  <Icon size={20} style={{ color: C.accent }} />
                </div>
                <div>
                  <p style={{ color: C.accent, margin: '0 0 6px' }} className="text-[11px] font-bold uppercase tracking-wider">
                    {label}
                  </p>
                  {lines.map((line, i) => (
                    <p key={i} style={{ color: C.soil, fontSize: 13.5, lineHeight: 1.5 }} className="font-semibold m-0">{line}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Google Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div 
              style={{
                borderRadius: '24px',
                border: `1.5px solid ${C.border}`,
                boxShadow: '0 12px 32px rgba(210, 114, 101, 0.05)',
                height: '100%',
                minHeight: '380px'
              }}
              className="overflow-hidden w-full relative"
            >
              <iframe
                src="https://maps.google.com/maps?q=Surat%20Textile%20Market&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%" height="100%"
                style={{ border: 0, display: 'block', filter: 'grayscale(0.1) contrast(1.02)', height: '100%', minHeight: '380px' }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="LOOMERA Textile Retail Location"
              />
            </div>
          </motion.div>
        </div>
      </div>

    </div>
  );
}
