import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const C = {
  primary: '#1B2A4A',
  accent: '#D4A842',
  crimson: '#8B1A2D',
  bg: '#F8F7F4',
  border: '#E2DDDA',
  stone: '#5A5560',
};

export default function Contact() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.bg, minHeight: '85vh' }} className="pb-16">
      <div className="max-w-[85rem] mx-auto px-6 lg:px-12">
        
        {/* Page Title */}
        <div className="text-center mb-8 mt-0">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '38px', fontWeight: 700, color: C.primary, margin: 0, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
            Contact Us
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.accent, margin: '12px auto 0' }} />
        </div>

        {/* Introduction */}
        <p style={{ textAlign: 'center', fontSize: 15, color: C.stone, fontWeight: 500, maxWidth: 580, margin: '0 auto 40px', lineHeight: 1.6 }}>
          Reach out to our representatives for partnership inquiries, vendor associations, and trade questions. We look forward to hearing from you.
        </p>

        {/* Contact Layout */}
        <div className="bg-white rounded-[24px] border border-[#E2DDDA] shadow-sm overflow-hidden flex flex-col lg:flex-row">
          
          {/* Contact Details Panel */}
          <div className="w-full lg:w-[40%] p-8 lg:p-12" style={{ background: C.primary }}>
            <h2 className="text-[28px] font-bold text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              Get in Touch
            </h2>

            <div className="flex flex-col gap-8">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center text-[#D4A842] bg-white/10">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-[14px] font-bold text-white mb-2 uppercase tracking-wider" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Head Office
                  </h3>
                  <p className="text-[13.5px] leading-relaxed m-0 text-white/80 font-medium">
                    123, Textile Market,<br/>
                    Ring Road, Surat,<br/>
                    Gujarat - 395002, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center text-[#D4A842] bg-white/10">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-[14px] font-bold text-white mb-2 uppercase tracking-wider" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Phone & Email
                  </h3>
                  <div className="flex flex-col gap-1 text-[13.5px] text-white/80 font-medium">
                    <a href="tel:+919717543210" className="text-white hover:text-[#D4A842] transition-colors text-decoration-none">+91 97175 43210</a>
                    <a href="mailto:info@merakiethnic.com" className="text-white hover:text-[#D4A842] transition-colors text-decoration-none">info@merakiethnic.com</a>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center text-[#D4A842] bg-white/10">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="text-[14px] font-bold text-white mb-2 uppercase tracking-wider" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Business Hours
                  </h3>
                  <p className="text-[13.5px] leading-relaxed m-0 text-white/80 font-medium">
                    Monday – Saturday: 9:00 AM – 8:00 PM<br/>
                    <span className="text-[#D4A842] font-bold">Sunday: Closed</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-[12px] text-white/60 font-medium uppercase tracking-wider mb-4">Follow Us</p>
              <div className="flex gap-4">
                  {['Facebook', 'Instagram', 'Pinterest', 'Twitter'].map((s) => (
                    <a key={s} href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white text-[10px] hover:border-[#C5A059] hover:text-[#C5A059] transition-colors font-bold">
                    {s[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map Panel */}
          <div className="w-full lg:w-[60%] min-h-[400px] lg:min-h-full relative bg-[#F8F7F4]">
            <iframe
              src="https://maps.google.com/maps?q=Surat%20Textile%20Market&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%" height="100%"
              style={{ border: 0, position: 'absolute', inset: 0 }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Meraki Ethnic Location Map"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
