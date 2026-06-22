import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const C = {
  primary: '#2B2520',       // Dark Charcoal
  accent: '#C5A880',        // Gold
  bg: '#FDFBF7',
  border: '#EAE5DB',
  stone: '#6C625C',
};

export default function Contact() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg, minHeight: '85vh' }} className="pt-2 pb-16">
      <div className="max-w-[85rem] mx-auto px-6 lg:px-12">
        
        {/* Page Title */}
        <div className="text-center mb-8 mt-2">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#C5A880] uppercase mb-2 block">
            Get in Touch
          </span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '38px', fontWeight: 700, color: C.primary, margin: 0, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
            Contact Us
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.accent, margin: '12px auto 0' }} />
        </div>

        {/* Introduction */}
        <p style={{ textAlign: 'center', fontSize: 15, color: C.stone, fontWeight: 600, maxWidth: 580, margin: '0 auto 40px', lineHeight: 1.6 }}>
          Reach out to our representatives for partnership inquiries, vendor associations, and trade questions. We look forward to hearing from you.
        </p>

        {/* 3-Column horizontal row of cards for Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-8">
          
          {/* Card 1: Address */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white border border-[#EAE5DB] rounded-[20px] p-6 text-left flex gap-4 items-start shadow-sm hover:translate-y-[-2px] transition-transform"
          >
            <div className="w-10 h-10 rounded-full shrink-0 bg-[#FAF7F2] flex items-center justify-center text-[#C5A880] border border-[#EAE5DB]">
              <MapPin size={18} />
            </div>
            <div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 700, color: C.primary, margin: '0 0 6px' }}>
                Head Office Address
              </h3>
              <p style={{ fontSize: 13.5, color: C.stone, lineHeight: 1.5, margin: 0, fontWeight: 500 }}>
                123, Textile Market,<br/>
                Ring Road, Surat,<br/>
                Gujarat - 395002, India
              </p>
            </div>
          </motion.div>

          {/* Card 2: Communication */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white border border-[#EAE5DB] rounded-[20px] p-6 text-left flex gap-4 items-start shadow-sm hover:translate-y-[-2px] transition-transform"
          >
            <div className="w-10 h-10 rounded-full shrink-0 bg-[#FAF7F2] flex items-center justify-center text-[#C5A880] border border-[#EAE5DB]">
              <Phone size={18} />
            </div>
            <div className="flex-grow">
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 700, color: C.primary, margin: '0 0 6px' }}>
                Call & Email Inquiries
              </h3>
              <div className="flex flex-col gap-1">
                <a href="tel:+919876543210" style={{ fontSize: 13.5, color: C.stone, textDecoration: 'none', fontWeight: 500 }} className="hover:text-[#2B2520] transition-colors">+91 98765 43210</a>
                <a href="tel:+918765432109" style={{ fontSize: 13.5, color: C.stone, textDecoration: 'none', fontWeight: 500 }} className="hover:text-[#2B2520] transition-colors">+91 87654 32109</a>
                <div style={{ width: '100%', height: 1, background: '#EAE5DB', margin: '6px 0' }} />
                <a href="mailto:info@aarohifabrics.com" style={{ fontSize: 13.5, color: C.primary, textDecoration: 'none', fontWeight: 600 }} className="hover:text-[#C5A880] transition-colors">info@aarohifabrics.com</a>
                <a href="mailto:sales@aarohifabrics.com" style={{ fontSize: 13.5, color: C.primary, textDecoration: 'none', fontWeight: 600 }} className="hover:text-[#C5A880] transition-colors">sales@aarohifabrics.com</a>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Working Hours */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-white border border-[#EAE5DB] rounded-[20px] p-6 text-left flex gap-4 items-start shadow-sm hover:translate-y-[-2px] transition-transform"
          >
            <div className="w-10 h-10 rounded-full shrink-0 bg-[#FAF7F2] flex items-center justify-center text-[#C5A880] border border-[#EAE5DB]">
              <Clock size={18} />
            </div>
            <div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 700, color: C.primary, margin: '0 0 6px' }}>
                Business Hours
              </h3>
              <p style={{ fontSize: 13.5, color: C.stone, lineHeight: 1.5, margin: 0, fontWeight: 500 }}>
                Monday – Saturday: 9:00 AM – 8:00 PM<br/>
                <span style={{ color: '#2B2520', fontWeight: 600 }}>Sunday: Closed</span>
              </p>
            </div>
          </motion.div>

        </div>

        {/* Large Full-Width Google Map at the bottom */}
        <motion.div
          initial={{ opacity: 0, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full h-[400px] rounded-[24px] overflow-hidden shadow-sm border border-[#EAE5DB] bg-white relative"
        >
          <iframe
            src="https://maps.google.com/maps?q=Surat%20Textile%20Market&t=&z=14&ie=UTF8&iwloc=&output=embed"
            width="100%" height="100%"
            style={{ border: 0, display: 'block', outline: 'none' }}
            frameBorder="0"
            allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Aarohi Fabrics Location Map"
          />
        </motion.div>

      </div>
    </div>
  );
}
