import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const COLORS = { primary: '#721C2B', accent: '#CDA75E', bg: '#FAF6F0', border: '#E6D8C5', textDark: '#330A10', textMid: '#554447', textMuted: '#7D6A6D' };

export default function Contact() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: COLORS.bg }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center"
        style={{ background: 'linear-gradient(135deg, #FCEEF1 0%, #FAF6F0 100%)', borderBottom: `1px solid ${COLORS.border}` }}>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-black text-4xl sm:text-5xl serif-title" style={{ color: COLORS.textDark }}>
            Contact Us
          </h1>
          <div className="w-12 h-[2.5px] mx-auto mt-3 rounded-full" style={{ background: COLORS.primary }} />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 pb-20">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

          {/* Left: Contact Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-sm text-left border"
            style={{ background: '#FFFFFF', borderColor: '#E6D8C5' }}
          >
            <div className="p-8 lg:p-10">
              <h2 className="font-black text-3xl mb-2 serif-title" style={{ color: COLORS.textDark }}>
                Contact Details
              </h2>
              <p className="text-[13px] mb-8 font-medium" style={{ color: COLORS.textMid }}>
                We're here to help. Reach out to us through any of the following channels.
              </p>

              <div className="space-y-6">
                {[
                  { icon: MapPin, label: 'Headquarters', lines: ['123 Premium Textile Avenue', 'Fashion District, Chennai, TN, India'] },
                  { icon: Phone, label: 'Call Us', lines: ['+91 6353778329'] },
                  { icon: Mail, label: 'Email Enquiries', lines: ['info@ethnicelegance.com', 'sales@ethnicelegance.com'] },
                  { icon: Clock, label: 'Business Hours', lines: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Sunday: Closed'] },
                ].map(({ icon: Icon, label, lines }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border"
                      style={{ background: `rgba(${parseInt(COLORS.primary.slice(1,3),16)},${parseInt(COLORS.primary.slice(3,5),16)},${parseInt(COLORS.primary.slice(5,7),16)},0.06)`, borderColor: `rgba(${parseInt(COLORS.primary.slice(1,3),16)},${parseInt(COLORS.primary.slice(3,5),16)},${parseInt(COLORS.primary.slice(5,7),16)},0.1)` }}>
                      <Icon size={18} color={COLORS.primary} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black tracking-[0.18em] uppercase mb-1" style={{ color: COLORS.accent }}>{label}</p>
                      {lines.map((line, i) => (
                        <p key={i} className="text-[14px] font-semibold" style={{ color: COLORS.textMid }}>{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="h-full w-full"
          >
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-sm min-h-[350px] border"
              style={{ borderColor: COLORS.border }}>
              <iframe
                src="https://maps.google.com/maps?q=Surat%20Textile%20Market&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '350px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ethnic Elegance Location Map"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
