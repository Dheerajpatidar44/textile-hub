import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const C = {
  primary: '#1b3252',
  primaryLight: '#243b61',
  accent: '#b08e5b',
  bg: '#fdfbf7',
  sand: '#f2e8dc',
  border: '#e6dfd5',
  soil: '#1a2538',
  stone: '#63738a',
};

const contactDetails = [
  {
    icon: MapPin,
    label: 'Headquarters',
    lines: ['RUHANI WEAVES Textile mall', '123, Textile Market, Surat', 'Gujarat, India - 395002'],
    color: C.primary,
  },
  {
    icon: Phone,
    label: 'Call Us',
    lines: ['+91 98765 43210', '1800 123 4567'],
    color: C.accent,
  },
  {
    icon: Mail,
    label: 'Email Us',
    lines: ['hello@ruhaniweaves.com', 'sales@ruhaniweaves.com'],
    color: C.primary,
  },
  {
    icon: Clock,
    label: 'Business Hours',
    lines: ['Mon – Sat: 9:00 AM – 6:00 PM', 'Sunday: Closed'],
    color: C.accent,
  },
];

export default function Contact() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg, minHeight: '100vh' }} className="pt-[124px] pb-20">

      {/* Page Title - minimal top gap */}
      <div style={{ background: '#ffffff', borderBottom: `1px solid ${C.border}`, padding: '14px 0 16px' }}>
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 700, color: C.soil, margin: 0 }}>
            Contact Us
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 8 }}>
            <div style={{ width: 32, height: 2, background: C.accent, borderRadius: 2 }} />
            <div style={{ width: 7, height: 7, background: C.accent, transform: 'rotate(45deg)', borderRadius: 1 }} />
            <div style={{ width: 60, height: 1, background: 'rgba(176,142,91,0.3)', borderRadius: 1 }} />
          </div>
        </div>
      </div>

      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 pt-8">

        {/* 4 contact info cards in a row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {contactDetails.map(({ icon: Icon, label, lines, color }, idx) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              style={{
                background: '#ffffff',
                border: `1px solid ${C.border}`,
                borderRadius: 14,
                padding: '22px 20px',
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                boxShadow: '0 2px 12px rgba(27,50,82,0.04)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 8px 28px rgba(27,50,82,0.1)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(27,50,82,0.04)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Top accent line */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${color}, transparent)`, borderRadius: '14px 14px 0 0' }} />

              <div style={{
                width: 46, height: 46, borderRadius: 12,
                background: color === C.primary ? 'rgba(27,50,82,0.08)' : 'rgba(176,142,91,0.1)',
                border: `1.5px solid ${color === C.primary ? 'rgba(27,50,82,0.15)' : 'rgba(176,142,91,0.2)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Icon size={20} style={{ color }} />
              </div>
              <div>
                <p style={{ color: C.accent, margin: '0 0 6px', fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em' }}>
                  {label}
                </p>
                {lines.map((line, i) => (
                  <p key={i} style={{ color: C.soil, fontSize: 13.5, lineHeight: 1.5, margin: '0 0 2px', fontWeight: i === 0 ? 600 : 400 }}>
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full-width map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            borderRadius: 16, overflow: 'hidden',
            border: `1px solid ${C.border}`,
            boxShadow: '0 8px 32px rgba(27,50,82,0.06)',
          }}
        >
          <iframe
            src="https://maps.google.com/maps?q=Surat%20Textile%20Market&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="420"
            style={{ border: 0, display: 'block', filter: 'saturate(0.8) hue-rotate(180deg) invert(5%)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="RUHANI WEAVES Location"
          />
        </motion.div>

      </div>
    </div>
  );
}
