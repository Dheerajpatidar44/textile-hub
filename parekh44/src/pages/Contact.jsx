import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const C = {
  primary: '#222842',        // Slate Navy
  accent: '#8D6F97',         // Mauve
  gold: '#D4B26F',           // Gold
  bg: '#FAF9FC',             // Light Lavender-Grey
  border: '#EAE7ED',
  stone: '#5C627A',
};

const contactDetails = [
  { icon: MapPin, label: 'Headquarters', lines: ['THREADSPHERE Textile Retail', '456, Textile Boulevard, Surat', 'Gujarat, India - 395002'] },
  { icon: Phone, label: 'Call Us', lines: ['+91 98765 01234', '1800 123 9999'] },
  { icon: Mail, label: 'Email Enquiries', lines: ['hello@threadspheretextile.com', 'sales@threadspheretextile.com'] },
  { icon: Clock, label: 'Business Hours', lines: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Sunday: Closed'] },
];

export default function Contact() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: C.bg, minHeight: '90vh' }} className="pt-10 pb-16">
      <div className="max-w-[85rem] mx-auto px-6 lg:px-12">

        {/* Page Title - minimized top margin */}
        <div className="text-center mb-10">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '48px', fontWeight: 500, color: C.primary, margin: 0, letterSpacing: '0.02em' }}>
            Get in Touch
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.gold, margin: '12px auto 0' }} />
        </div>

        {/* Redesigned Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side: Contact Details Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-white rounded-[24px] p-8 lg:p-10 border border-[#EAE7ED] shadow-sm flex flex-col justify-between"
          >
            <div className="text-left">
              <h2 
                className="text-[26px] font-bold text-[#222842] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Our Contact Information
              </h2>
              <p className="text-[13px] text-[#5C627A] leading-relaxed mb-8 font-medium">
                Whether you are a retailer, wholesale buyer, or looking for e-Quotation/e-Auction partnerships, reach out directly.
              </p>
            </div>

            <div className="space-y-6">
              {contactDetails.map(({ icon: Icon, label, lines }, idx) => (
                <div key={idx} className="flex gap-4 items-start text-left">
                  <div 
                    style={{ background: 'rgba(141, 111, 151, 0.08)' }} 
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  >
                    <Icon size={18} color={C.accent} />
                  </div>
                  <div>
                    <h3 className="text-[11px] font-extrabold tracking-wider uppercase text-[#222842] mb-1">
                      {label}
                    </h3>
                    {lines.map((line, i) => (
                      <p key={i} className="text-[12px] text-[#5C627A] leading-normal m-0 font-semibold">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Interactive Map */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 h-[450px] lg:h-auto min-h-[400px] overflow-hidden rounded-[24px] border border-[#EAE7ED] shadow-sm relative bg-white"
          >
            <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#EAE7ED] shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#222842]">Surat, Gujarat Hub</span>
            </div>
            <iframe
              src="https://maps.google.com/maps?q=Surat%20Textile%20Market&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%" height="100%"
              style={{ border: 0, display: 'block', outline: 'none', filter: 'contrast(1.02) grayscale(0.1)' }}
              frameBorder="0"
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="THREADSPHERE Textile Retail Location"
            />
          </motion.div>

        </div>

      </div>
    </div>
  );
}
