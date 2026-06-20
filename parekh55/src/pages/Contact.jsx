import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const C = {
  primary: '#043e3d',        // Deep Teal Green
  accent: '#C39A58',         // Gold Accent
  gold: '#C39A58',
  bg: '#FAF6F0',             // Cream Background
  border: '#E6E1D8',
  stone: '#4A5A59',
};

export default function Contact() {
  const contactDetails = [
    {
      title: "Our Location",
      icon: MapPin,
      lines: ["Paridhi Textiles", "456, Textile Boulevard", "Surat, Gujarat, India - 395002"]
    },
    {
      title: "Call Us",
      icon: Phone,
      lines: ["Toll Free: 1800 123 4567", "Mobile: +91 98765 01234", "Landline: +91 261 2345678"]
    },
    {
      title: "Email & Hours",
      icon: Mail,
      lines: ["info@paridhitextiles.com", "sales@paridhitextiles.com", "Mon - Sat: 9:00 AM - 6:00 PM"]
    }
  ];

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg, minHeight: '90vh' }} className="pt-2 pb-16">
      <div className="max-w-[85rem] mx-auto px-6 lg:px-12">

        {/* Page Title */}
        <div className="text-center mb-10 mt-1">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '44px', fontWeight: 500, color: C.primary, margin: 0, letterSpacing: '0.02em' }}>
            Contact Us
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.accent, margin: '8px auto 0' }} />
        </div>

        <div className="space-y-8">
          
          {/* Top: Row of Cards (Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactDetails.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-[24px] border border-[#E6E1D8] shadow-sm text-left flex flex-col items-start space-y-4 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-[#C39A58] bg-[#043e3d]/5 border border-[#C39A58]/30">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-bold text-[#043e3d] mb-2">{item.title}</h3>
                    <div className="space-y-1">
                      {item.lines.map((line, lIdx) => (
                        <p key={lIdx} className="text-[13px] text-[#4A5A59] font-medium leading-relaxed m-0">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom: Large Map */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full h-[400px] lg:h-[480px] overflow-hidden rounded-[32px] border border-[#E6E1D8] shadow-md relative bg-white flex"
          >
            <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#E6E1D8] shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#043e3d]">Surat, Gujarat Textile Hub</span>
            </div>
            <iframe
              src="https://maps.google.com/maps?q=Surat%20Textile%20Market&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%" height="100%"
              style={{ border: 0, display: 'block', outline: 'none', filter: 'grayscale(1) contrast(1.05) opacity(0.95)' }}
              frameBorder="0"
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Paridhi Textiles Location"
            />
          </motion.div>

        </div>

      </div>
    </div>
  );
}
