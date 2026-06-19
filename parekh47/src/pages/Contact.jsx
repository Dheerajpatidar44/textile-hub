import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const C = {
  primary: '#0D3E3C',        // Elegant Deep Teal
  accent: '#A75D3F',         // Terracotta/Copper Accent
  gold: '#A75D3F',
  bg: '#FAF8F5',             // Warm Cream Base
  border: '#E5ECE9',         // Soft Sage border
  stone: '#66807B',
};

const contactDetails = [
  { icon: MapPin, label: 'Headquarters', lines: ['Riwaayat Hub', '456, Textile Boulevard, Surat', 'Gujarat, India - 395002'] },
  { icon: Phone, label: 'Call Us', lines: ['+91 98765 01234', '1800 123 4567'] },
  { icon: Mail, label: 'Email Enquiries', lines: ['hello@riwaayathub.com', 'sales@riwaayathub.com'] },
  { icon: Clock, label: 'Business Hours', lines: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Sunday: Closed'] },
];

export default function Contact() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: C.bg, minHeight: '90vh' }} className="pt-2 pb-16">
      <div className="max-w-[85rem] mx-auto px-6 lg:px-12">

        {/* Page Title - minimal spacing at the top */}
        <div className="text-center mb-10 mt-4">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '44px', fontWeight: 500, color: C.primary, margin: 0, letterSpacing: '0.02em' }}>
            Get in Touch
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.gold, margin: '10px auto 0' }} />
        </div>

        {/* Side-by-side layout for Contact details & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Contact Cards Stack */}
          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="text-left mb-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A75D3F] mb-1.5 block">CONTACT DETAILS</span>
              <h2 className="text-[28px] font-normal leading-tight text-[#0D3E3C] font-serif" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                How Can We Help You?
              </h2>
              <p className="text-[13px] text-[#66807B] mt-2 font-medium leading-relaxed">
                Connect with our team for bulk orders, e-Auctions, and design enquiries. We are here to support your textile needs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactDetails.map(({ icon: Icon, label, lines }, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-3xl p-5 border border-[#E5ECE9] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-start text-left"
                >
                  <div 
                    style={{ background: 'rgba(13, 62, 60, 0.06)' }} 
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 mb-4 text-[#0D3E3C]"
                  >
                    <Icon size={16} color={C.primary} />
                  </div>
                  
                  <h3 className="text-[12px] font-extrabold tracking-wider uppercase text-[#0D3E3C] mb-2.5">
                    {label}
                  </h3>
                  
                  <div className="space-y-1">
                    {lines.map((line, i) => (
                      <p key={i} className="text-[12px] text-[#66807B] leading-normal m-0 font-semibold">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Google Maps Iframe */}
          <motion.div 
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 h-[420px] lg:h-auto min-h-[400px] overflow-hidden rounded-[32px] border border-[#E5ECE9] shadow-sm relative bg-white"
          >
            <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#E5ECE9] shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#0D3E3C]">Surat, Gujarat Textile Hub</span>
            </div>
            <iframe
              src="https://maps.google.com/maps?q=Surat%20Textile%20Market&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%" height="100%"
              style={{ border: 0, display: 'block', outline: 'none', filter: 'grayscale(1) contrast(1.1) opacity(0.95)' }}
              frameBorder="0"
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Riwaayat Hub Location"
            />
          </motion.div>
          
        </div>

      </div>
    </div>
  );
}
