import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const C = {
  primary: '#5E3B43',       // Burgundy
  primaryLight: '#BD9399',  // Accent Rose
  primaryDark: '#3B2329',   // Deep Burgundy
  accent: '#BD9399',
  bg: '#FAF6F6',
  border: '#EFE6E7',
  stone: '#6E6466',
  soil: '#5E3B43',
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

        {/* Dashboard grid layout (Details left, Map right) */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
          
          {/* Left Column: Contact details (Spans 2 columns) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            
            {/* Card 1: Address */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white border border-[#EFE6E7] rounded-[20px] p-6 text-left flex gap-4 items-start shadow-sm hover:translate-y-[-2px] transition-transform"
            >
              <div className="w-10 h-10 rounded-full shrink-0 bg-[#FAF6F6] flex items-center justify-center text-[#5E3B43] border border-[#EFE6E7]">
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
              className="bg-white border border-[#EFE6E7] rounded-[20px] p-6 text-left flex gap-4 items-start shadow-sm hover:translate-y-[-2px] transition-transform"
            >
              <div className="w-10 h-10 rounded-full shrink-0 bg-[#FAF6F6] flex items-center justify-center text-[#5E3B43] border border-[#EFE6E7]">
                <Phone size={18} />
              </div>
              <div className="flex-grow">
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 700, color: C.primary, margin: '0 0 6px' }}>
                  Call & Email Inquiries
                </h3>
                <div className="flex flex-col gap-1">
                  <a href="tel:+919876543210" style={{ fontSize: 13.5, color: C.stone, textDecoration: 'none', fontWeight: 500 }} className="hover:text-[#5E3B43] transition-colors">+91 98765 43210</a>
                  <a href="tel:+918765432109" style={{ fontSize: 13.5, color: C.stone, textDecoration: 'none', fontWeight: 500 }} className="hover:text-[#5E3B43] transition-colors">+91 87654 32109</a>
                  <div style={{ width: '100%', height: 1, background: '#EFE6E7', margin: '6px 0' }} />
                  <a href="mailto:info@navyaveaves.com" style={{ fontSize: 13.5, color: '#5E3B43', textDecoration: 'none', fontWeight: 600 }} className="hover:text-[#D4B26F] transition-colors">info@navyaveaves.com</a>
                  <a href="mailto:sales@navyaveaves.com" style={{ fontSize: 13.5, color: '#5E3B43', textDecoration: 'none', fontWeight: 600 }} className="hover:text-[#D4B26F] transition-colors">sales@navyaveaves.com</a>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Working Hours */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white border border-[#EFE6E7] rounded-[20px] p-6 text-left flex gap-4 items-start shadow-sm hover:translate-y-[-2px] transition-transform"
            >
              <div className="w-10 h-10 rounded-full shrink-0 bg-[#FAF6F6] flex items-center justify-center text-[#5E3B43] border border-[#EFE6E7]">
                <Clock size={18} />
              </div>
              <div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 700, color: C.primary, margin: '0 0 6px' }}>
                  Business Hours
                </h3>
                <p style={{ fontSize: 13.5, color: C.stone, lineHeight: 1.5, margin: 0, fontWeight: 500 }}>
                  Monday – Saturday: 9:00 AM – 8:00 PM<br/>
                  <span style={{ color: '#5E3B43', fontWeight: 600 }}>Sunday: Closed</span>
                </p>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Google Map (Spans 3 columns) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3 min-h-[350px] lg:min-h-full rounded-[24px] overflow-hidden shadow-sm border border-[#EFE6E7] bg-white relative"
          >
            <iframe
              src="https://maps.google.com/maps?q=Surat%20Textile%20Market&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%" height="100%"
              style={{ border: 0, display: 'block', outline: 'none', minHeight: '380px' }}
              frameBorder="0"
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Navya Weaves Location Map"
            />
          </motion.div>

        </div>
      </div>
    </div>
  );
}
