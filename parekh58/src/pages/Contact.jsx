import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const C = {
  primary: '#7E1242',       // Premium Burgundy
  primaryDark: '#5C0C2F',
  accent: '#C17D91',        // Dusty Rose
  gold: '#Bfa37c',          // Warm Gold
  bg: '#FAF5F7',             
  border: '#F0E5E9',
  stone: '#5F5558',
};

export default function Contact() {
  const contactDetails = [
    {
      title: "Our Location",
      icon: MapPin,
      lines: ["KASTURI Textile Retail Mall", "123, Textile Market", "Surat, Gujarat, India - 395002"]
    },
    {
      title: "Call Us",
      icon: Phone,
      lines: ["Toll Free: 1800 123 4567", "Mobile: +91 98765 43210", "Landline: +91 261 2345678"]
    },
    {
      title: "Email & Hours",
      icon: Mail,
      lines: ["hello@kasturitextile.com", "sales@kasturitextile.com", "Mon - Sat: 9:00 AM - 6:00 PM"]
    }
  ];

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg, minHeight: '85vh' }} className="pt-2 pb-20">
      
      {/* ── Page Header - Minimal gap above heading ── */}
      <div className="text-center mb-10 mt-2">
        <span className="text-[11px] font-bold tracking-[0.25em] text-[#C17D91] uppercase block mb-1">GET IN TOUCH</span>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '38px', fontWeight: 700, color: C.primary, margin: 0, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
          Contact Us
        </h1>
        <div style={{ width: 40, height: 1.5, background: C.gold, margin: '8px auto 0' }} />
      </div>

      <div className="max-w-[85rem] mx-auto px-6 lg:px-12">
        
        {/* ── Split Screen Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Contact Cards Stack */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {contactDetails.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-2xl border border-[#F0E5E9] shadow-sm flex items-start gap-5 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[#7E1242] bg-[#FAF5F7] border border-[#F0E5E9] shrink-0">
                    <Icon size={22} />
                  </div>
                  <div className="text-left">
                    <h3 className="text-[16px] font-bold text-[#7E1242] uppercase tracking-wider mb-2 font-sans">{item.title}</h3>
                    <div className="space-y-1">
                      {item.lines.map((line, lIdx) => (
                        <p key={lIdx} className="text-[13px] text-[#5F5558] font-medium leading-relaxed m-0">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Large Rounded Map Box */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#F0E5E9] shadow-sm relative bg-white h-[450px] lg:h-auto min-h-[400px]"
          >
            <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-full border border-[#F0E5E9] shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#7E1242]">Surat, Gujarat Textile Market</span>
            </div>
            <iframe
              src="https://maps.google.com/maps?q=Surat%20Textile%20Market&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%" height="100%"
              style={{ border: 0, display: 'block', outline: 'none', filter: 'sepia(0.1) contrast(1.02) opacity(0.95)' }}
              frameBorder="0"
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KASTURI Textile Retail Mall Location Map"
            />
          </motion.div>

        </div>

      </div>
    </div>
  );
}
