import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const C = {
  primary: '#1E3E37',        // Deep Forest Green
  accent: '#E2A93E',         // Gold Accent
  gold: '#E2A93E',
  bg: '#FAF7F0',             // Light Sand
  border: '#EFECE6',
  stone: '#536E67',
};

const contactDetails = [
  { icon: MapPin, label: 'Headquarters', lines: ['WEAVECRAFT Textile Mall', '456, Textile Boulevard, Surat', 'Gujarat, India - 395002'] },
  { icon: Phone, label: 'Call Us', lines: ['+91 98765 01234', '1800 123 9999'] },
  { icon: Mail, label: 'Email Enquiries', lines: ['hello@weavecrafttextile.com', 'sales@weavecrafttextile.com'] },
  { icon: Clock, label: 'Business Hours', lines: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Sunday: Closed'] },
];

export default function Contact() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: C.bg, minHeight: '90vh' }} className="pt-4 pb-16">
      <div className="max-w-[85rem] mx-auto px-6 lg:px-12">

        {/* Page Title - minimized top margin closer to Navbar */}
        <div className="text-center mb-8 mt-2">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '48px', fontWeight: 500, color: C.primary, margin: 0, letterSpacing: '0.02em' }}>
            Get in Touch
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.gold, margin: '10px auto 0' }} />
        </div>

        {/* Redesigned Contact Page: Map on Top, Info Cards on Bottom */}
        <div className="flex flex-col gap-8">
          
          {/* Top Section: Interactive Map Banner */}
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full h-[380px] sm:h-[450px] overflow-hidden rounded-[32px] border border-[#EFECE6] shadow-sm relative bg-white"
          >
            <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#EFECE6] shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#1E3E37]">Surat, Gujarat Textile Hub</span>
            </div>
            <iframe
              src="https://maps.google.com/maps?q=Surat%20Textile%20Market&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%" height="100%"
              style={{ border: 0, display: 'block', outline: 'none', filter: 'grayscale(1) contrast(1.1) opacity(0.9)' }}
              frameBorder="0"
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="WEAVECRAFT Textile Mall Location"
            />
          </motion.div>

          {/* Bottom Section: 4 Contact Info Grid Cards */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactDetails.map(({ icon: Icon, label, lines }, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-3xl p-6 border border-[#EFECE6] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-start text-left"
              >
                <div 
                  style={{ background: 'rgba(30, 62, 55, 0.08)' }} 
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 mb-4 text-[#1E3E37]"
                >
                  <Icon size={18} color={C.primary} />
                </div>
                
                <h3 className="text-[12px] font-extrabold tracking-wider uppercase text-[#1E3E37] mb-2.5">
                  {label}
                </h3>
                
                <div className="space-y-1">
                  {lines.map((line, i) => (
                    <p key={i} className="text-[12px] text-[#536E67] leading-normal m-0 font-semibold">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </div>
  );
}
