import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const C = {
  primary: '#8B1A4A',
  primaryLight: '#B02E65',
  accent: '#C4956A',
  bg: '#FDF8F4',
  sand: '#F5EBE0',
  border: '#E8D8CC',
  soil: '#2C1A1A',
  stone: '#7A5E5E',
};

const contactDetails = [
  {
    icon: MapPin,
    label: 'Headquarters',
    lines: ['Ananta Fabrics', '123, Textile Market, Surat', 'Gujarat, India - 395002'],
    color: '#8B1A4A',
  },
  {
    icon: Phone,
    label: 'Call Us',
    lines: ['+91 98765 43210', '1800 123 4567'],
    color: '#C4956A',
  },
  {
    icon: Mail,
    label: 'Email Us',
    lines: ['hello@anantafabrics.com', 'sales@anantafabrics.com'],
    color: '#8B1A4A',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    lines: ['Mon – Sat: 9:00 AM – 6:00 PM', 'Sunday: Closed'],
    color: '#C4956A',
  },
];

export default function Contact() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.bg, minHeight: '100vh' }} className="pt-[70px] pb-20">

      {/* Page Title */}
      <div style={{ background: '#ffffff', borderBottom: `1px solid ${C.border}`, padding: '20px 0 20px' }}>
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, color: C.soil, margin: 0 }}>
            Contact Us
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 8 }}>
            <div style={{ width: 32, height: 2, background: C.primary, borderRadius: 2 }} />
            <div style={{ width: 60, height: 1, background: 'rgba(139,26,74,0.2)', borderRadius: 1 }} />
          </div>
        </div>
      </div>

      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 pt-10">

        {/* Layout: Map left (60%), Contact cards right (40%) */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch">

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-[58%]"
            style={{
              borderRadius: 16,
              overflow: 'hidden',
              border: `1px solid ${C.border}`,
              boxShadow: '0 8px 24px rgba(139,26,74,0.06)',
              minHeight: 380,
            }}
          >
            <iframe
              src="https://maps.google.com/maps?q=Surat%20Textile%20Market&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block', minHeight: 380, filter: 'saturate(0.85)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ananta Fabrics Location"
            />
          </motion.div>

          {/* Contact Info Cards stacked */}
          <div className="w-full lg:w-[42%] flex flex-col gap-4">
            {contactDetails.map(({ icon: Icon, label, lines, color }, idx) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                style={{
                  background: '#ffffff',
                  border: `1px solid ${C.border}`,
                  borderRadius: 14,
                  padding: '18px 20px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 14,
                  boxShadow: '0 2px 12px rgba(139,26,74,0.04)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(139,26,74,0.1)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(139,26,74,0.04)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  width: 42, height: 42, borderRadius: 12,
                  background: `rgba(${color === C.primary ? '139,26,74' : '196,149,106'},0.1)`,
                  border: `1.5px solid rgba(${color === C.primary ? '139,26,74' : '196,149,106'},0.2)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon size={18} style={{ color }} />
                </div>
                <div>
                  <p style={{ color: C.accent, margin: '0 0 4px', fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                    {label}
                  </p>
                  {lines.map((line, i) => (
                    <p key={i} style={{ color: C.soil, fontSize: 13, lineHeight: 1.45, margin: '0 0 2px', fontWeight: i === 0 ? 600 : 400 }}>
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
