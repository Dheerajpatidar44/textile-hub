import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const C = {
  primary: '#e2b865',        // Gold
  accent: '#e2b865',         // Gold Accent
  gold: '#e2b865',
  bg: '#12151c',             // Dark BG
  border: '#2a3142',
  stone: '#a0aec0',
};

export default function Contact() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: C.bg, minHeight: '90vh' }} className="pt-2 pb-16">
      <div className="max-w-[85rem] mx-auto px-6 lg:px-12">

        {/* Page Title */}
        <div className="text-center mb-10 mt-1">
          <h1 style={{ fontFamily: "'Cinzel', serif", fontSize: '44px', fontWeight: 500, color: C.primary, margin: 0, letterSpacing: '0.02em' }}>
            Contact Us
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.accent, margin: '8px auto 0' }} />
        </div>

        {/* Split Side-by-Side Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left">

          {/* Left Column: Stack of Contact Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">

            {/* Card 1: Address */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#1b202c] rounded-none p-7 border border-[#2a3142] shadow-sm flex items-start gap-5 flex-1"
            >
              <div className="w-12 h-12 rounded-none flex items-center justify-center text-[#e2b865] bg-[#e2b865]/10 shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="text-[12px] font-bold tracking-widest uppercase text-[#e2b865] mb-2">Our Location</h3>
                <p className="text-[13.5px] text-[#a0aec0] leading-relaxed font-semibold">
                  Aura Weaves,<br />
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
              className="bg-[#1b202c] rounded-none p-7 border border-[#2a3142] shadow-sm flex items-start gap-5 flex-1"
            >
              <div className="w-12 h-12 rounded-none flex items-center justify-center text-[#e2b865] bg-[#e2b865]/10 shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="text-[12px] font-bold tracking-widest uppercase text-[#e2b865] mb-2">Helpline & Phone</h3>
                <p className="text-[13.5px] text-[#a0aec0] leading-relaxed font-semibold mb-1">
                  Toll Free: <span className="text-[#e2b865]">1800 123 4567</span>
                </p>
                <p className="text-[13.5px] text-[#a0aec0] leading-relaxed font-semibold">
                  Mobile: <span className="text-[#e2b865]">+91 98765 01234</span>
                </p>
              </div>
            </motion.div>

            {/* Card 3: Email & Business Hours */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#1b202c] rounded-none p-7 border border-[#2a3142] shadow-sm flex items-start gap-5 flex-1"
            >
              <div className="w-12 h-12 rounded-none flex items-center justify-center text-[#e2b865] bg-[#e2b865]/10 shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <h3 className="text-[12px] font-bold tracking-widest uppercase text-[#e2b865] mb-2">Enquiries & Hours</h3>
                <p className="text-[13.5px] text-[#a0aec0] leading-relaxed font-semibold mb-1">
                  Email: <a href="mailto:info@auraweaves.com" className="text-[#e2b865] hover:text-white transition-colors">info@auraweaves.com</a>
                </p>
                <p className="text-[13.5px] text-[#a0aec0] leading-relaxed font-semibold">
                  Hours: Mon - Sat, 9:00 AM - 6:00 PM
                </p>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Google Map Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 h-[460px] lg:h-[500px] overflow-hidden rounded-none border border-[#2a3142] shadow-md relative bg-[#1b202c]"
          >
            <div className="absolute top-4 left-4 z-10 bg-[#1b202c] px-5 py-2.5 rounded-none border border-[#2a3142] shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#e2b865]">Surat, Gujarat Textile Hub</span>
            </div>
            <iframe
              src="https://maps.google.com/maps?q=Surat%20Textile%20Market&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%" height="100%"
              style={{ border: 0, display: 'block', outline: 'none' }}
              frameBorder="0"
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aura Weaves Location Map"
            />
          </motion.div>

        </div>

      </div>
    </div>
  );
}
