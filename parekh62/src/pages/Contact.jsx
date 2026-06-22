import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const C = {
  primary: '#8C6239',       // Warm Camel Brown
  primaryLight: '#B08B6B',
  primaryDark: '#5E4023',
  accent: '#5B84B1',        // Slate/Dusty Blue
  bg: '#FAF6F0',
  border: '#E8DFD8',
  stone: '#4A4A4A',
  soil: '#8C6239',
};

export default function Contact() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg, minHeight: '85vh' }} className="pt-2 pb-16">
      <div className="max-w-[85rem] mx-auto px-6 lg:px-12">
        
        {/* Page Title */}
        <div className="text-center mb-8 mt-2">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '38px', fontWeight: 700, color: C.primary, margin: 0, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
            Contact Us
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.primaryLight, margin: '12px auto 0' }} />
        </div>

        {/* Introduction */}
        <p style={{ textAlign: 'center', fontSize: 15, color: C.stone, fontWeight: 600, maxWidth: 580, margin: '0 auto 40px', lineHeight: 1.6 }}>
          Reach out to our representatives for partnership inquiries, vendor associations, and trade questions. We look forward to hearing from you.
        </p>

        {/* Tier 1: 3-column contact details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Address */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white border border-[#E8DFD8] rounded-[20px] p-8 text-center flex flex-col items-center shadow-sm hover:translate-y-[-2px] transition-transform"
          >
            <div className="w-12 h-12 rounded-full bg-[#FAF6F0] flex items-center justify-center text-[#8C6239] mb-4 border border-[#E8DFD8]">
              <MapPin size={20} />
            </div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 700, color: C.primaryDark, margin: '0 0 10px' }}>
              Head Office
            </h3>
            <p style={{ fontSize: 13.5, color: C.stone, lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
              123, Textile Market,<br/>
              Ring Road, Surat,<br/>
              Gujarat - 395002, India
            </p>
          </motion.div>

          {/* Card 2: Communication */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white border border-[#E8DFD8] rounded-[20px] p-8 text-center flex flex-col items-center shadow-sm hover:translate-y-[-2px] transition-transform"
          >
            <div className="w-12 h-12 rounded-full bg-[#FAF6F0] flex items-center justify-center text-[#8C6239] mb-4 border border-[#E8DFD8]">
              <Phone size={20} />
            </div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 700, color: C.primaryDark, margin: '0 0 10px' }}>
              Call & Email
            </h3>
            <div className="flex flex-col gap-1">
              <a href="tel:+919876543210" style={{ fontSize: 13.5, color: C.stone, textDecoration: 'none', fontWeight: 500, hover: { color: C.primary } }}>+91 98765 43210</a>
              <a href="tel:+918765432109" style={{ fontSize: 13.5, color: C.stone, textDecoration: 'none', fontWeight: 500, hover: { color: C.primary } }}>+91 87654 32109</a>
              <div style={{ width: 30, height: 1, background: '#E8DFD8', margin: '8px auto' }} />
              <a href="mailto:info@tanabana.com" style={{ fontSize: 13.5, color: C.primary, textDecoration: 'none', fontWeight: 600 }}>info@tanabana.com</a>
              <a href="mailto:sales@tanabana.com" style={{ fontSize: 13.5, color: C.primary, textDecoration: 'none', fontWeight: 600 }}>sales@tanabana.com</a>
            </div>
          </motion.div>

          {/* Card 3: Working Hours */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-white border border-[#E8DFD8] rounded-[20px] p-8 text-center flex flex-col items-center shadow-sm hover:translate-y-[-2px] transition-transform"
          >
            <div className="w-12 h-12 rounded-full bg-[#FAF6F0] flex items-center justify-center text-[#8C6239] mb-4 border border-[#E8DFD8]">
              <Clock size={20} />
            </div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 700, color: C.primaryDark, margin: '0 0 10px' }}>
              Working Hours
            </h3>
            <p style={{ fontSize: 13.5, color: C.stone, lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
              Monday – Saturday:<br/>
              9:00 AM – 8:00 PM<br/>
              <span style={{ color: C.primary, fontWeight: 600 }}>Sunday: Closed</span>
            </p>
          </motion.div>

        </div>

        {/* Tier 2: Full-width Google map integration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full h-[400px] rounded-[24px] overflow-hidden shadow-sm border border-[#E8DFD8] bg-white relative"
        >
          <iframe
            src="https://maps.google.com/maps?q=Surat%20Textile%20Market&t=&z=14&ie=UTF8&iwloc=&output=embed"
            width="100%" height="100%"
            style={{ border: 0, display: 'block', outline: 'none' }}
            frameBorder="0"
            allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="TANABANA Textile Retail Mall Location Map"
          />
        </motion.div>
      </div>
    </div>
  );
}
