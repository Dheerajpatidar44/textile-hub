import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const C = {
  primary: '#25524B',        // Deep Teal
  accent: '#C5A880',         // Gold Accent
  gold: '#C5A880',
  bg: '#FAF8F5',             // Light Warm Sand
  border: '#EFECE6',
  stone: '#5A6E6A',
};

const contactDetails = [
  { icon: MapPin, label: 'Atelier Head Office', lines: ['The Fabric Atelier', '456, Textile Boulevard, Surat', 'Gujarat, India - 395002'] },
  { icon: Phone, label: 'Helpline Number', lines: ['+91 98765 01234', '1800 123 4567'] },
  { icon: Mail, label: 'Email Enquiries', lines: ['hello@fabricatelier.com', 'sales@fabricatelier.com'] },
  { icon: Clock, label: 'Business Hours', lines: ['Monday - Saturday: 9:00 AM - 6:00 PM', 'Sunday: Closed'] },
];

export default function Contact() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: C.bg, minHeight: '90vh' }} className="pt-2 pb-16">
      <div className="max-w-[85rem] mx-auto px-6 lg:px-12">

        {/* Page Title - minimized top gap closer to Navbar */}
        <div className="text-center mb-8 mt-1">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '44px', fontWeight: 500, color: C.primary, margin: 0, letterSpacing: '0.02em' }}>
            Contact Us
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.gold, margin: '8px auto 0' }} />
        </div>

        {/* Redesigned Contact Page: Side-by-side Details & Map Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Contact Details Card (takes 5/12 width) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-white rounded-[32px] p-8 border border-[#EFECE6] shadow-sm flex flex-col justify-between text-left"
          >
            <div>
              <span className="text-[10px] font-extrabold tracking-[0.2em] text-[#C5A880] uppercase mb-2.5 block">GET IN TOUCH</span>
              <h2 className="text-[32px] font-normal text-[#25524B] mb-6 font-serif" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Visit The Atelier
              </h2>
              <p className="text-[13px] text-[#5A6E6A] leading-relaxed mb-8 font-semibold">
                Have inquiries about our collections, customized e-auctions, or wholesale e-quotations? Reach out to us through our direct contact channels.
              </p>
              
              <div className="space-y-6">
                {contactDetails.map(({ icon: Icon, label, lines }, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div 
                      style={{ background: 'rgba(37, 82, 75, 0.06)' }} 
                      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-[#25524B]"
                    >
                      <Icon size={18} color={C.primary} />
                    </div>
                    <div>
                      <h3 className="text-[11.5px] font-extrabold tracking-wider uppercase text-[#25524B] mb-1">
                        {label}
                      </h3>
                      <div className="space-y-0.5">
                        {lines.map((line, i) => (
                          <p key={i} className="text-[13px] text-[#5A6E6A] leading-snug m-0 font-semibold">{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#FAF8F5] text-center">
              <span className="text-[11px] font-extrabold text-[#C5A880] tracking-widest uppercase">
                THE FABRIC ATELIER
              </span>
            </div>
          </motion.div>

          {/* Right Column: Interactive Map (takes 7/12 width) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 h-[450px] lg:h-auto min-h-[400px] overflow-hidden rounded-[32px] border border-[#EFECE6] shadow-sm relative bg-white"
          >
            <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#EFECE6] shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#25524B]">Surat, Gujarat Textile Hub</span>
            </div>
            <iframe
              src="https://maps.google.com/maps?q=Surat%20Textile%20Market&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%" height="100%"
              style={{ border: 0, display: 'block', outline: 'none', filter: 'grayscale(1) contrast(1.05) opacity(0.9)' }}
              frameBorder="0"
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Fabric Atelier Location"
            />
          </motion.div>

        </div>

      </div>
    </div>
  );
}
