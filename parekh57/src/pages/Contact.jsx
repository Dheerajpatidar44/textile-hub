import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const C = {
  primary: '#D28D7A',        
  primaryDark: '#A56453',
  accent: '#E5A391',         
  gold: '#D28D7A',
  bg: '#FAF8F5',             
  border: '#EFE9E5',
  stone: '#6B5B56',
};

export default function Contact() {
  const contactDetails = [
    {
      title: "Our Location",
      icon: MapPin,
      lines: ["Kaaya Fabrics", "456, Textile Boulevard", "Surat, Gujarat, India - 395002"]
    },
    {
      title: "Call Us",
      icon: Phone,
      lines: ["Toll Free: 1800 123 4567", "Mobile: +91 98765 01234", "Landline: +91 261 2345678"]
    },
    {
      title: "Email & Hours",
      icon: Mail,
      lines: ["info@kaayafabrics.com", "sales@kaayafabrics.com", "Mon - Sat: 9:00 AM - 6:00 PM"]
    }
  ];

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg, minHeight: '85vh' }} className="pt-0 pb-20">
      
      {/* ── Page Header ── */}
      <div className="bg-white border-b border-[#EFE9E5] pt-8 pb-10 mb-12 text-center">
        <div className="max-w-[85rem] mx-auto px-6 lg:px-12">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#D28D7A] uppercase block mb-1">GET IN TOUCH</span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '40px', fontWeight: 600, color: C.primaryDark, margin: 0, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
            Contact Us
          </h1>
          <div style={{ width: 40, height: 2, background: C.primary, margin: '8px auto 0' }} />
        </div>
      </div>

      <div className="max-w-[85rem] mx-auto px-6 lg:px-12">
        
        {/* ── Full Width Map ── */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden border border-[#EFE9E5] shadow-md relative bg-white h-[400px] lg:h-[450px] mb-12 w-full"
        >
          <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full border border-[#EFE9E5] shadow-sm">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#A56453]">Surat, Gujarat Textile Hub Location</span>
          </div>
          <iframe
            src="https://maps.google.com/maps?q=Surat%20Textile%20Market&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%" height="100%"
            style={{ border: 0, display: 'block', outline: 'none', filter: 'sepia(0.2) contrast(1.05) opacity(0.9) hue-rotate(-20deg)' }}
            frameBorder="0"
            allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kaaya Fabrics Location Map"
          />
        </motion.div>

        {/* ── Contact Information Cards (Horizontal Layout) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactDetails.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-[#EFE9E5] shadow-sm text-center flex flex-col items-center gap-5 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-[#D28D7A] bg-[#FAF8F5] border border-[#EFE9E5]">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#A56453] mb-3">{item.title}</h3>
                  <div className="space-y-1.5">
                    {item.lines.map((line, lIdx) => (
                      <p key={lIdx} className="text-[14px] text-[#6B5B56] font-medium leading-relaxed m-0">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
