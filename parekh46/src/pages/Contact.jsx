import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const C = {
  primary: '#111E38',        // Deep Navy Blue
  accent: '#3B82F6',         // Periwinkle/Royal Blue Highlight
  gold: '#8F94FB',
  bg: '#F0F6FA',             // Light Ice Blue
  border: '#E2E8F0',
  stone: '#64748B',
};

const contactDetails = [
  { icon: MapPin, label: 'Headquarters', lines: ['Zari Bloom Textile Mall', '456, Textile Boulevard, Surat', 'Gujarat, India - 395002'] },
  { icon: Phone, label: 'Call Us', lines: ['+91 98765 01234', '1800 123 9999'] },
  { icon: Mail, label: 'Email Enquiries', lines: ['hello@zaribloom.com', 'sales@zaribloom.com'] },
  { icon: Clock, label: 'Business Hours', lines: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Sunday: Closed'] },
];

export default function Contact() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: '#FAFBFD', minHeight: '90vh' }} className="pt-2 pb-16">
      <div className="max-w-[85rem] mx-auto px-6 lg:px-12">

        {/* Page Title - minimized top margin closer to Navbar */}
        <div className="text-center mb-10 mt-1">
          <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '38px', fontWeight: 800, color: C.primary, margin: 0, letterSpacing: '0.01em' }}>
            Contact Us
          </h1>
          <div style={{ width: 40, height: 4, background: C.accent, margin: '8px auto 0', borderRadius: '2px' }} />
        </div>

        {/* Redesigned Contact Page: Grid row of cards + full width map */}
        <div className="flex flex-col gap-10">
          
          {/* Top Row: Contact Details Cards (4 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left"
          >
            {contactDetails.map(({ icon: Icon, label, lines }, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-[24px] p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4 items-start"
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-blue-500"
                  style={{ background: 'rgba(59, 130, 246, 0.08)' }}
                >
                  <Icon size={20} />
                </div>
                
                <div>
                  <h3 className="text-[12.5px] font-extrabold tracking-wider uppercase text-[#111E38] mb-2">
                    {label}
                  </h3>
                  
                  <div className="space-y-1">
                    {lines.map((line, i) => (
                      <p key={i} className="text-[12.5px] text-slate-500 leading-normal m-0 font-semibold">{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Bottom Row: Interactive Map (Full Width) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full h-[400px] sm:h-[450px] overflow-hidden rounded-[24px] border border-slate-100 shadow-sm relative bg-white"
          >
            <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full border border-slate-100 shadow-sm">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#111E38]">Surat, Gujarat Textile Hub</span>
            </div>
            <iframe
              src="https://maps.google.com/maps?q=Surat%20Textile%20Market&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%" height="100%"
              style={{ border: 0, display: 'block', outline: 'none', filter: 'grayscale(0.3) contrast(1.05) opacity(0.95)' }}
              frameBorder="0"
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Zari Bloom Textile Mall Location"
            />
          </motion.div>

        </div>

      </div>
    </div>
  );
}
