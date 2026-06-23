import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const C = {
  primary: '#3F5241',
  primaryDark: '#2C3A2D',
  accent: '#BBA178',
  accentLight: '#FAF5EB',
  bg: '#FAF8F5',
  bgAlt: '#F5EFE6',
  border: '#E3DAD0',
  stone: '#5A665B',
  card: '#ffffff',
  text: '#2C2520',
};

export default function Contact() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg, minHeight: '85vh' }} className="pt-2 pb-12">
      <div className="max-w-[80rem] mx-auto px-6 lg:px-12">
        
        {/* Page Title with minimal gap */}
        <div className="text-center mb-8 mt-1">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '32px', fontWeight: 700, color: C.primary, margin: 0, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
            Contact Us
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.accent, margin: '6px auto 0', borderRadius: 2 }} />
        </div>

        {/* New Layout: 4 Details cards in a grid on top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 text-left">
          
          {/* Card 1: Address */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="flex flex-col gap-4 p-6 transition-all duration-300"
            style={{ background: C.card, borderRadius: 20, border: `1.5px solid ${C.border}` }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = C.accent; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.transform = ''; }}
          >
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: C.bgAlt, border: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.primary }}>
              <MapPin size={18} />
            </div>
            <div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 700, color: C.primary, margin: '0 0 8px' }}>
                Head Office
              </h3>
              <p style={{ fontSize: 13, color: C.stone, lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                123, Textile Market,<br/>
                Ring Road, Surat,<br/>
                Gujarat - 395002, India
              </p>
            </div>
          </motion.div>

          {/* Card 2: Phone */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-4 p-6 transition-all duration-300"
            style={{ background: C.card, borderRadius: 20, border: `1.5px solid ${C.border}` }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = C.accent; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.transform = ''; }}
          >
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: C.bgAlt, border: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.primary }}>
              <Phone size={18} />
            </div>
            <div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 700, color: C.primary, margin: '0 0 8px' }}>
                Call Us
              </h3>
              <div className="flex flex-col gap-1">
                <a href="tel:+919876543210" style={{ fontSize: 13, color: C.stone, textDecoration: 'none', fontWeight: 600 }}
                  onMouseEnter={e => e.currentTarget.style.color = C.primary}
                  onMouseLeave={e => e.currentTarget.style.color = C.stone}>
                  +91 98765 43210
                </a>
                <a href="tel:+918765432109" style={{ fontSize: 13, color: C.stone, textDecoration: 'none', fontWeight: 600 }}
                  onMouseEnter={e => e.currentTarget.style.color = C.primary}
                  onMouseLeave={e => e.currentTarget.style.color = C.stone}>
                  +91 87654 32109
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Email */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="flex flex-col gap-4 p-6 transition-all duration-300"
            style={{ background: C.card, borderRadius: 20, border: `1.5px solid ${C.border}` }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = C.accent; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.transform = ''; }}
          >
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: C.bgAlt, border: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.primary }}>
              <Mail size={18} />
            </div>
            <div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 700, color: C.primary, margin: '0 0 8px' }}>
                Email Us
              </h3>
              <div className="flex flex-col gap-1">
                <a href="mailto:info@alankritthreads.com" style={{ fontSize: 13, color: C.primary, textDecoration: 'none', fontWeight: 750 }}
                  onMouseEnter={e => e.currentTarget.style.color = C.accent}
                  onMouseLeave={e => e.currentTarget.style.color = C.primary}>
                  info@alankritthreads.com
                </a>
                <a href="mailto:sales@alankritthreads.com" style={{ fontSize: 13, color: C.primary, textDecoration: 'none', fontWeight: 750 }}
                  onMouseEnter={e => e.currentTarget.style.color = C.accent}
                  onMouseLeave={e => e.currentTarget.style.color = C.primary}>
                  sales@alankritthreads.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Business Hours */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-4 p-6 transition-all duration-300"
            style={{ background: C.primaryDark, borderRadius: 20, border: `1.5px solid rgba(187,161,120,0.15)` }}
          >
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(187,161,120,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.accentLight }}>
              <Clock size={18} />
            </div>
            <div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 700, color: '#ffffff', margin: '0 0 8px' }}>
                Business Hours
              </h3>
              <p style={{ fontSize: 13, color: C.accentLight, lineHeight: 1.6, margin: 0, fontWeight: 500, opacity: 0.9 }}>
                Monday – Saturday: 9:00 AM – 8:00 PM<br/>
                <span style={{ color: '#ffffff', fontWeight: 700 }}>Sunday: Closed</span>
              </p>
            </div>
          </motion.div>

        </div>

        {/* Full-width Map on Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="w-full overflow-hidden shadow-sm"
          style={{ 
            borderRadius: 24, 
            border: `1.5px solid ${C.border}`,
            height: 480,
          }}
        >
          <iframe
            src="https://maps.google.com/maps?q=Surat%20Textile%20Market&t=&z=14&ie=UTF8&iwloc=&output=embed"
            width="100%" height="100%"
            style={{ border: 0, display: 'block', outline: 'none' }}
            frameBorder="0"
            allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Alankrit Threads Location Map"
          />
        </motion.div>

      </div>
    </div>
  );
}
