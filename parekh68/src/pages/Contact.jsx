import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const C = {
  primary: '#0b3329',
  primaryDark: '#062c22',
  accent: '#bca374',
  accentLight: '#f2ece1',
  bg: '#fcf8f2',
  bgAlt: '#f5eee6',
  border: '#eadacc',
  stone: '#4d5d59',
  card: '#ffffff',
  text: '#0d241f',
};

export default function Contact() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg, minHeight: '85vh' }} className="pt-2 pb-12">
      <div className="max-w-[80rem] mx-auto px-6 lg:px-12">
        
        {/* Minimal gap Page Title */}
        <div className="text-center mb-6 mt-1">
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase mb-1 block" style={{ color: C.accent }}>
            Get in Touch
          </span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '32px', fontWeight: 700, color: C.primary, margin: 0, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
            Contact Us
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.accent, margin: '6px auto 0', borderRadius: 2 }} />
        </div>

        {/* Main Layout: Map Left + Contact Details Right */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch"
        >
          {/* Google Map — takes 3/5 width */}
          <div 
            className="lg:col-span-3 overflow-hidden shadow-sm"
            style={{ 
              borderRadius: 18, 
              border: `1.5px solid ${C.border}`,
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
              title="Zariya House Location Map"
            />
          </div>

          {/* Contact Info Panel — takes 2/5 width */}
          <div className="lg:col-span-2 flex flex-col gap-4">

            {/* Address Card */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex gap-4 items-start p-5 transition-all duration-300"
              style={{ background: C.card, borderRadius: 16, border: `1.5px solid ${C.border}` }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = C.accent; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; }}
            >
              <div style={{ width: 40, height: 40, borderRadius: 10, background: C.bgAlt, border: `1.5px solid ${C.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: C.primary }}>
                <MapPin size={18} />
              </div>
              <div className="text-left">
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 700, color: C.primary, margin: '0 0 4px' }}>
                  Head Office
                </h3>
                <p style={{ fontSize: 13, color: C.stone, lineHeight: 1.6, margin: 0, fontWeight: 400 }}>
                  123, Textile Market,<br/>
                  Ring Road, Surat,<br/>
                  Gujarat - 395002, India
                </p>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.18 }}
              className="flex gap-4 items-start p-5 transition-all duration-300"
              style={{ background: C.card, borderRadius: 16, border: `1.5px solid ${C.border}` }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = C.accent; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; }}
            >
              <div style={{ width: 40, height: 40, borderRadius: 10, background: C.bgAlt, border: `1.5px solid ${C.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: C.primary }}>
                <Phone size={18} />
              </div>
              <div className="text-left">
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 700, color: C.primary, margin: '0 0 4px' }}>
                  Call Us
                </h3>
                <div className="flex flex-col gap-1">
                  <a href="tel:+919876543210" style={{ fontSize: 13, color: C.stone, textDecoration: 'none', fontWeight: 500 }}
                    onMouseEnter={e => e.currentTarget.style.color = C.primary}
                    onMouseLeave={e => e.currentTarget.style.color = C.stone}>
                    +91 98765 43210
                  </a>
                  <a href="tel:+918765432109" style={{ fontSize: 13, color: C.stone, textDecoration: 'none', fontWeight: 500 }}
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
              className="flex gap-4 items-start p-5 transition-all duration-300"
              style={{ background: C.card, borderRadius: 16, border: `1.5px solid ${C.border}` }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = C.accent; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; }}
            >
              <div style={{ width: 40, height: 40, borderRadius: 10, background: C.bgAlt, border: `1.5px solid ${C.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: C.primary }}>
                <Mail size={18} />
              </div>
              <div className="text-left">
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 700, color: C.primary, margin: '0 0 4px' }}>
                  Email Us
                </h3>
                <div className="flex flex-col gap-1">
                  <a href="mailto:info@zariyahouse.com" style={{ fontSize: 13, color: C.primary, textDecoration: 'none', fontWeight: 600 }}
                    onMouseEnter={e => e.currentTarget.style.color = C.accent}
                    onMouseLeave={e => e.currentTarget.style.color = C.primary}>
                    info@zariyahouse.com
                  </a>
                  <a href="mailto:sales@zariyahouse.com" style={{ fontSize: 13, color: C.primary, textDecoration: 'none', fontWeight: 600 }}
                    onMouseEnter={e => e.currentTarget.style.color = C.accent}
                    onMouseLeave={e => e.currentTarget.style.color = C.primary}>
                    sales@zariyahouse.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Business Hours Card */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex gap-4 items-start p-5 transition-all duration-300 animate-fade-in"
              style={{ background: C.primaryDark, borderRadius: 16, border: `1.5px solid rgba(188,163,116,0.15)` }}
            >
              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(188,163,116,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: C.accentLight }}>
                <Clock size={18} />
              </div>
              <div className="text-left">
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 700, color: '#ffffff', margin: '0 0 4px' }}>
                  Business Hours
                </h3>
                <p style={{ fontSize: 13, color: C.accentLight, lineHeight: 1.6, margin: 0, fontWeight: 400, opacity: 0.85 }}>
                  Monday – Saturday: 9:00 AM – 8:00 PM<br/>
                  <span style={{ color: '#ffffff', fontWeight: 600 }}>Sunday: Closed</span>
                </p>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}
