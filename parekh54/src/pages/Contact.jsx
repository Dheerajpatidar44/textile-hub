import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const C = {
  primary: '#5A1827',        // Royal Burgundy
  accent: '#C2A478',         // Gold Accent
  gold: '#C2A478',
  bg: '#FAF6F0',             // Cream Background
  border: '#E6E1D8',
  stone: '#6B5C5D',
};

export default function Contact() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg, minHeight: '90vh' }} className="pt-2 pb-16">
      <div className="max-w-[85rem] mx-auto px-6 lg:px-12">

        {/* Page Title - minimal spacing at top */}
        <div className="text-center mb-8 mt-1">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '44px', fontweight: 500, color: C.primary, margin: 0, letterSpacing: '0.02em' }}>
            Contact Us
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.accent, margin: '8px auto 0' }} />
        </div>

        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Contact Details (Maroon Card) */}
          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 p-8 rounded-[32px] border border-white/10 shadow-lg text-left flex flex-col justify-between"
            style={{ background: C.primary, color: '#ffffff' }}
          >
            <div className="space-y-8">
              <div>
                <span className="text-[10px] font-extrabold tracking-[0.25em] text-[#C2A478] uppercase mb-2 block">GET IN TOUCH</span>
                <h2 className="text-3xl font-serif text-white font-normal leading-tight">
                  Connect With <br />Our Weaving House
                </h2>
              </div>

              {/* Detail Items */}
              <div className="space-y-6">
                
                {/* Location */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-[#C2A478] bg-white/5 border border-white/10">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold tracking-wider text-white/50 uppercase mb-1">Our Location</h4>
                    <p className="text-[13.5px] text-white/90 font-medium leading-relaxed">
                      The Textile Loft,<br />
                      456, Textile Boulevard, Surat,<br />
                      Gujarat, India - 395002
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-[#C2A478] bg-white/5 border border-white/10">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold tracking-wider text-white/50 uppercase mb-1">Call Us</h4>
                    <p className="text-[13.5px] text-white/90 font-medium">Toll Free: 1800 123 4567</p>
                    <p className="text-[13.5px] text-white/90 font-medium">Mobile: +91 98765 01234</p>
                  </div>
                </div>

                {/* Enquiries */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-[#C2A478] bg-white/5 border border-white/10">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold tracking-wider text-white/50 uppercase mb-1">Email & Hours</h4>
                    <p className="text-[13.5px] text-white/90 font-medium">info@thetextileloft.com</p>
                    <p className="text-[13.5px] text-white/50 font-normal mt-1">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="pt-8 border-t border-white/10 mt-8 text-[11px] text-white/40 tracking-wider font-semibold uppercase">
              The Textile Loft Corporate Office
            </div>
          </motion.div>

          {/* Right Column: Google Map */}
          <motion.div 
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 h-[450px] lg:h-auto overflow-hidden rounded-[32px] border border-[#E6E1D8] shadow-md relative bg-white flex"
          >
            <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#E6E1D8] shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#5A1827]">Surat, Gujarat Textile Hub</span>
            </div>
            <iframe
              src="https://maps.google.com/maps?q=Surat%20Textile%20Market&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%" height="100%"
              style={{ border: 0, display: 'block', outline: 'none', filter: 'grayscale(1) contrast(1.05) opacity(0.95)' }}
              frameBorder="0"
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Textile Loft Location"
            />
          </motion.div>

        </div>

      </div>
    </div>
  );
}
