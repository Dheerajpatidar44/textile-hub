import { motion } from 'framer-motion';

const C = {
  primary: '#0D6E6E',        // Deep Teal
  primaryLight: '#E2F0ED',   // Light Mint/Teal
  primaryDark: '#064040',    // Dark Forest Teal
  accent: '#C2A478',         // Gold Accent
  bg: '#FCFCFA',             // Warm Soft Linen
  stone: '#576F6F',          // Muted slate text
};

export default function About() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg, minHeight: '80vh' }} className="pt-4 pb-16">
      <div className="max-w-[65rem] mx-auto px-6 sm:px-8 lg:px-12 text-left">

        {/* Page Title */}
        <div className="text-center mb-10 mt-1">
          <h1 
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '42px', fontWeight: 500, color: C.primaryDark, margin: 0, letterSpacing: '0.02em' }}
            className="font-display"
          >
            About Us
          </h1>
          <div style={{ width: 48, height: 1.5, background: C.primary, margin: '8px auto 0' }} />
        </div>

        {/* Content & Image displayed directly on main page */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
        >
          {/* Smaller Circular Image */}
          <div className="md:col-span-4 flex justify-center">
            <div 
              className="relative w-56 h-56 rounded-full overflow-hidden shadow-md border-2 border-white"
              style={{ boxShadow: '0 12px 24px rgba(13, 110, 110, 0.08)' }}
            >
              <img
                src="/images/about_us_weaving.png"
                alt="Sutrangi Handloom Weaving"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#0D6E6E]/5 mix-blend-overlay"></div>
            </div>
          </div>

          {/* Simple Shortened Text Content */}
          <div className="md:col-span-8 text-left">
            <p className="text-[17px] leading-relaxed text-[#576F6F] font-medium mb-2">
              <strong style={{ color: C.primaryDark }}>SUTRANGI Textiles of India</strong> is dedicated to preserving the rich textile heritage of our country. We collaborate directly with master artisans to bring you authentic sarees, fine fabric suitings, and home furnishings that merge traditional quality with digital services like e-Auctions and e-Quotations for wholesale buyers.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
