import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const C = {
  primary: '#6B2D3E',
  primaryDark: '#4A1E2B',
  accent: '#C4706A',
  accentLight: '#E8C4B8',
  bg: '#F8F0EC',
  bgAlt: '#F2E6E0',
  border: '#E0C8C0',
  stone: '#8A5D65',
  card: '#FDFAF8',
  text: '#3D1F28',
};

export default function Contact() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.bg, minHeight: '85vh' }} className="pt-2 pb-16">
      <div className="max-w-[85rem] mx-auto px-6 lg:px-12">
        
        {/* Page Title */}
        <div className="text-center mb-8 mt-2">
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase mb-2 block" style={{ color: C.accent }}>
            Get in Touch
          </span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', fontWeight: 700, color: C.primary, margin: 0, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
            Contact Us
          </h1>
          <div style={{ width: 40, height: 2, background: `linear-gradient(90deg, ${C.primary}, ${C.accent})`, margin: '10px auto 0', borderRadius: 2 }} />
        </div>

        {/* Main Layout: Map Left + Contact Details Right */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch mb-8"
        >
          {/* Google Map — takes 3/5 width */}
          <div 
            className="lg:col-span-3 overflow-hidden shadow-sm"
            style={{ 
              borderRadius: 22, 
              border: `1px solid ${C.border}`,
              minHeight: 420,
            }}
          >
            <iframe
              src="https://maps.google.com/maps?q=Surat%20Textile%20Market&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%" height="100%"
              style={{ border: 0, display: 'block', outline: 'none', minHeight: 420 }}
              frameBorder="0"
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pravaah Fabrics Location Map"
            />
          </div>

          {/* Contact Info Panel — takes 2/5 width */}
          <div className="lg:col-span-2 flex flex-col gap-4">

            {/* Address Card */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex gap-4 items-start p-6 transition-all duration-300"
              style={{ background: C.card, borderRadius: 18, border: `1px solid ${C.border}` }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = C.accent; e.currentTarget.style.boxShadow = `0 8px 24px rgba(196,112,106,0.1)`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.boxShadow = ''; }}
            >
              <div style={{ width: 44, height: 44, borderRadius: 14, background: C.bgAlt, border: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: C.accent }}>
                <MapPin size={20} />
              </div>
              <div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, color: C.primary, margin: '0 0 8px' }}>
                  Head Office
                </h3>
                <p style={{ fontSize: 13.5, color: C.stone, lineHeight: 1.65, margin: 0, fontWeight: 400 }}>
                  123, Textile Market,<br/>
                  Ring Road, Surat,<br/>
                  Gujarat - 395002, India
                </p>
              </div>
            </motion.div>

            {/* Phone & Email Card */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.18 }}
              className="flex gap-4 items-start p-6 transition-all duration-300"
              style={{ background: C.card, borderRadius: 18, border: `1px solid ${C.border}` }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = C.accent; e.currentTarget.style.boxShadow = `0 8px 24px rgba(196,112,106,0.1)`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.boxShadow = ''; }}
            >
              <div style={{ width: 44, height: 44, borderRadius: 14, background: C.bgAlt, border: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: C.accent }}>
                <Phone size={20} />
              </div>
              <div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, color: C.primary, margin: '0 0 8px' }}>
                  Call Us
                </h3>
                <div className="flex flex-col gap-1.5">
                  <a href="tel:+919876543210" style={{ fontSize: 13.5, color: C.stone, textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = C.primary}
                    onMouseLeave={e => e.currentTarget.style.color = C.stone}>
                    +91 98765 43210
                  </a>
                  <a href="tel:+918765432109" style={{ fontSize: 13.5, color: C.stone, textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = C.primary}
                    onMouseLeave={e => e.currentTarget.style.color = C.stone}>
                    +91 87654 32109
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.24 }}
              className="flex gap-4 items-start p-6 transition-all duration-300"
              style={{ background: C.card, borderRadius: 18, border: `1px solid ${C.border}` }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = C.accent; e.currentTarget.style.boxShadow = `0 8px 24px rgba(196,112,106,0.1)`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.boxShadow = ''; }}
            >
              <div style={{ width: 44, height: 44, borderRadius: 14, background: C.bgAlt, border: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: C.accent }}>
                <Mail size={20} />
              </div>
              <div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, color: C.primary, margin: '0 0 8px' }}>
                  Email Us
                </h3>
                <div className="flex flex-col gap-1.5">
                  <a href="mailto:info@pravaahfabrics.com" style={{ fontSize: 13.5, color: C.primary, textDecoration: 'none', fontWeight: 600, transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = C.accent}
                    onMouseLeave={e => e.currentTarget.style.color = C.primary}>
                    info@pravaahfabrics.com
                  </a>
                  <a href="mailto:sales@pravaahfabrics.com" style={{ fontSize: 13.5, color: C.primary, textDecoration: 'none', fontWeight: 600, transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = C.accent}
                    onMouseLeave={e => e.currentTarget.style.color = C.primary}>
                    sales@pravaahfabrics.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Business Hours Card */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex gap-4 items-start p-6 transition-all duration-300"
              style={{ background: C.primaryDark, borderRadius: 18, border: `1px solid rgba(232,196,184,0.15)` }}
            >
              <div style={{ width: 44, height: 44, borderRadius: 14, background: 'rgba(196,112,106,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: C.accentLight }}>
                <Clock size={20} />
              </div>
              <div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, color: '#FDFAF8', margin: '0 0 8px' }}>
                  Business Hours
                </h3>
                <p style={{ fontSize: 13.5, color: C.accentLight, lineHeight: 1.65, margin: 0, fontWeight: 400, opacity: 0.85 }}>
                  Monday – Saturday: 9:00 AM – 8:00 PM<br/>
                  <span style={{ color: '#FDFAF8', fontWeight: 600 }}>Sunday: Closed</span>
                </p>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}
