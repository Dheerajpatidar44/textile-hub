import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const C = {
  primary: '#0D6E6E',        // Deep Teal
  accent: '#E6A822',         // Golden Yellow
  gold: '#C2A478',
  bg: '#F8FAF9',             // Light Mint/Teal tint
  border: '#E2EBEB',
  stone: '#5C7A7A',
};

export default function Contact() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg, minHeight: '90vh' }} className="pt-2 pb-16">
      <div className="max-w-[85rem] mx-auto px-6 lg:px-12">

        {/* Page Title - minimized top gap closer to Navbar */}
        <div className="text-center mb-10 mt-1">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '44px', fontWeight: 500, color: C.primary, margin: 0, letterSpacing: '0.02em' }}>
            Contact Us
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.accent, margin: '8px auto 0' }} />
        </div>

        {/* Split Side-by-Side Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left">
          
          {/* Left Column: Stack of Contact Info Cards (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            
            {/* Card 1: Address */}
            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-[24px] p-7 border border-[#E2EBEB] shadow-sm flex items-start gap-5 flex-1"
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-[#E6A822] bg-[#E6A822]/10 shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="text-[12px] font-bold tracking-widest uppercase text-[#0D6E6E] mb-2 font-sans">Our Location</h3>
                <p className="text-[13.5px] text-[#5C7A7A] leading-relaxed font-semibold">
                  SUTRANGI Textiles of India,<br />
                  456, Textile Boulevard, Surat,<br />
                  Gujarat, India - 395002
                </p>
              </div>
            </motion.div>

            {/* Card 2: Phone Info */}
            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-[24px] p-7 border border-[#E2EBEB] shadow-sm flex items-start gap-5 flex-1"
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-[#E6A822] bg-[#E6A822]/10 shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="text-[12px] font-bold tracking-widest uppercase text-[#0D6E6E] mb-2 font-sans">Helpline & Phone</h3>
                <p className="text-[13.5px] text-[#5C7A7A] leading-relaxed font-semibold mb-1">
                  Toll Free: <span className="text-[#0D6E6E]">1800 123 4567</span>
                </p>
                <p className="text-[13.5px] text-[#5C7A7A] leading-relaxed font-semibold">
                  Mobile: <span className="text-[#0D6E6E]">+91 98765 01234</span>
                </p>
              </div>
            </motion.div>

            {/* Card 3: Email & Business Hours */}
            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-[24px] p-7 border border-[#E2EBEB] shadow-sm flex items-start gap-5 flex-1"
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-[#E6A822] bg-[#E6A822]/10 shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <h3 className="text-[12px] font-bold tracking-widest uppercase text-[#0D6E6E] mb-2 font-sans">Enquiries & Hours</h3>
                <p className="text-[13.5px] text-[#5C7A7A] leading-relaxed font-semibold mb-1">
                  Email: <a href="mailto:info@sutrangitextiles.com" className="text-[#0D6E6E] hover:text-[#E6A822] transition-colors">info@sutrangitextiles.com</a>
                </p>
                <p className="text-[13.5px] text-[#5C7A7A] leading-relaxed font-semibold">
                  Hours: Mon - Sat, 9:00 AM - 6:00 PM
                </p>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Google Map Container (7 Cols) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 h-[460px] lg:h-[500px] overflow-hidden rounded-[32px] border border-[#E2EBEB] shadow-md relative bg-white"
          >
            <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#E2EBEB] shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#0D6E6E]">Surat, Gujarat Textile Hub</span>
            </div>
            <iframe
              src="https://maps.google.com/maps?q=Surat%20Textile%20Market&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%" height="100%"
              style={{ border: 0, display: 'block', outline: 'none' }}
              frameBorder="0"
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SUTRANGI Textiles Location Map"
            />
          </motion.div>

        </div>

      </div>
    </div>
  );
}
