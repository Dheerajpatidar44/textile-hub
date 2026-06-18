import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const C = {
  primary: '#111E38',        // Deep Navy Blue
  accent: '#DE5B49',         // Terracotta Red
  gold: '#DE5B49',
  bg: '#FAF9F5',             // Ivory Background
  border: '#EAEAEA',
  stone: '#5A6F8F',
};

const contactDetails = [
  { icon: MapPin, label: 'Headquarters', lines: ['Veda Weaves Textile Mall', '456, Textile Boulevard, Surat', 'Gujarat, India - 395002'] },
  { icon: Phone, label: 'Call Us', lines: ['+91 98765 01234', '1800 123 9999'] },
  { icon: Mail, label: 'Email Enquiries', lines: ['hello@vedaweaves.com', 'sales@vedaweaves.com'] },
  { icon: Clock, label: 'Business Hours', lines: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Sunday: Closed'] },
];

export default function Contact() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: C.bg, minHeight: '90vh' }} className="pt-2 pb-16">
      <div className="max-w-[85rem] mx-auto px-6 lg:px-12">

        {/* Page Title - minimized top margin closer to Navbar */}
        <div className="text-center mb-8 mt-1">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '48px', fontWeight: 500, color: C.primary, margin: 0, letterSpacing: '0.02em' }}>
            Contact Us
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.gold, margin: '8px auto 0' }} />
        </div>

        {/* Redesigned Contact Page: Split Screen Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Map (Col span 7) */}
          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 min-h-[380px] sm:min-h-[450px] lg:min-h-full overflow-hidden rounded-[24px] border border-[#EAEAEA] shadow-sm relative bg-white"
          >
            <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#EAEAEA] shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#111E38]">Surat, Gujarat Textile Hub</span>
            </div>
            <iframe
              src="https://maps.google.com/maps?q=Surat%20Textile%20Market&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%" height="100%"
              style={{ border: 0, display: 'block', outline: 'none', filter: 'grayscale(1) contrast(1.1) opacity(0.9)', minHeight: '380px' }}
              frameBorder="0"
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Veda Weaves Textile Mall Location"
            />
          </motion.div>

          {/* Right Column: Contact Details Cards (Col span 5) */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-4 text-left"
          >
            {contactDetails.map(({ icon: Icon, label, lines }, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-[20px] p-5 border border-[#EAEAEA] shadow-sm hover:shadow-md transition-all duration-300 flex gap-4 items-start"
              >
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-[#111E38]"
                  style={{ background: 'rgba(17, 30, 56, 0.06)' }}
                >
                  <Icon size={18} color={C.primary} />
                </div>
                
                <div>
                  <h3 className="text-[12px] font-extrabold tracking-wider uppercase text-[#111E38] mb-1.5">
                    {label}
                  </h3>
                  
                  <div className="space-y-0.5">
                    {lines.map((line, i) => (
                      <p key={i} className="text-[12px] text-[#5A6F8F] leading-normal m-0 font-semibold">{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </div>
  );
}
