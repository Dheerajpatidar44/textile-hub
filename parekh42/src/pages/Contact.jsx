import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const C = {
  primary: '#A3704C',      // Gold/Bronze accent
  primaryLight: '#C49272',
  accent: '#A3704C',
  bg: '#FAF8F5',
  sand: '#F4EDE4',
  border: '#EAE5DE',
  soil: '#231F20',
  stone: '#5B5653',
};

const contactDetails = [
  {
    icon: MapPin,
    label: 'Headquarters',
    lines: ['LoomCraft India', '123, Textile Market, Surat', 'Gujarat, India - 395002'],
    color: '#A3704C',
  },
  {
    icon: Phone,
    label: 'Call Us',
    lines: ['+91 98765 43210', '1800 123 4567'],
    color: '#231F20',
  },
  {
    icon: Mail,
    label: 'Email Us',
    lines: ['hello@loomcraftindia.com', 'sales@loomcraftindia.com'],
    color: '#A3704C',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    lines: ['Mon – Sat: 9:00 AM – 6:00 PM', 'Sunday: Closed'],
    color: '#231F20',
  },
];

export default function Contact() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.bg, minHeight: '100vh' }} className="pt-[110px] pb-20">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14">
        
        {/* Title Block inside section with minimal gap */}
        <div className="text-left mb-8">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, color: C.soil, margin: 0 }}>
            Contact Us
          </h1>
          <div style={{ width: 44, height: 2, background: C.primary, borderRadius: 2, marginTop: 10 }} />
        </div>

        {/* Layout: Info cards container on the left, map on the right */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          
          {/* Contact details grid in a unified card (Left Side) */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-[45%] flex flex-col gap-4 p-6 sm:p-8 bg-white border border-[#EAE5DE] rounded-[16px] shadow-sm justify-between"
          >
            {contactDetails.map(({ icon: Icon, label, lines, color }, idx) => (
              <div
                key={label}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 14,
                  paddingBottom: idx !== contactDetails.length - 1 ? '20px' : '0px',
                  borderBottom: idx !== contactDetails.length - 1 ? '1px solid #EAE5DE' : 'none',
                }}
                className="text-left"
              >
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: 'rgba(163, 112, 76, 0.1)',
                  border: '1.5px solid rgba(163, 112, 76, 0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon size={16} style={{ color: '#A3704C' }} />
                </div>
                <div>
                  <p style={{ color: C.accent, margin: '0 0 4px', fontSize: 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                    {label}
                  </p>
                  {lines.map((line, i) => (
                    <p key={i} style={{ color: C.soil, fontSize: 13, lineHeight: 1.5, margin: '0 0 2px', fontWeight: i === 0 ? 600 : 400 }}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Map on the right with custom border shadow */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-[55%] h-[380px] sm:h-auto min-h-[380px] rounded-[16px] overflow-hidden border border-[#EAE5DE] shadow-sm"
          >
            <iframe
              src="https://maps.google.com/maps?q=Surat%20Textile%20Market&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block', minHeight: '100%', filter: 'saturate(0.95) contrast(1.02)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="LoomCraft India Location Map"
            />
          </motion.div>

        </div>

      </div>
    </div>
  );
}
