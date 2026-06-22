import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const C = {
  primary: '#1C362B',
  primaryLight: '#2A4F40',
  primaryDark: '#12241D',
  accent: '#B8A9CB',
  gold: '#Bfa37c',
  bg: '#F9F6F0',
  border: '#D5DBCB',
  stone: '#4A4A4A',
  soil: '#1C362B',
};

export default function Contact() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg, minHeight: '85vh' }} className="pt-2 pb-16">
      <div className="max-w-[85rem] mx-auto px-6 lg:px-12">
        
        {/* Page Title */}
        <div className="text-center mb-10 mt-2">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '38px', fontWeight: 700, color: C.primary, margin: 0, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
            Contact Us
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.gold, margin: '12px auto 0' }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Contact Information Details */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-[#D5DBCB] rounded-2xl p-8 sm:p-12 shadow-sm flex flex-col justify-center h-full"
          >
            <h2 className="text-[28px] font-serif font-bold text-[#1C362B] mb-2">Visit Our Headquarters</h2>
            <p className="text-[14px] text-[#4A4A4A] mb-10 font-medium">We're always open for new business partnerships, wholesale inquiries, and e-quotation requests.</p>
            
            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-full bg-[#F9F6F0] flex items-center justify-center text-[#1C362B] shrink-0 border border-[#D5DBCB] group-hover:bg-[#1C362B] group-hover:text-white transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-[13px] font-bold text-[#1C362B] uppercase tracking-wider mb-1">Our Address</h4>
                  <p className="text-[14px] text-[#4A4A4A] leading-relaxed">
                    123, Kumavati Textile Market,<br/>
                    Ring Road, Surat,<br/>
                    Gujarat - 395002, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-full bg-[#F9F6F0] flex items-center justify-center text-[#1C362B] shrink-0 border border-[#D5DBCB] group-hover:bg-[#1C362B] group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-[13px] font-bold text-[#1C362B] uppercase tracking-wider mb-1">Phone</h4>
                  <a href="tel:+919876543210" className="text-[14px] text-[#4A4A4A] hover:text-[#1C362B] transition-colors decoration-transparent">+91 98765 43210</a><br/>
                  <a href="tel:+918765432109" className="text-[14px] text-[#4A4A4A] hover:text-[#1C362B] transition-colors decoration-transparent">+91 87654 32109</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-full bg-[#F9F6F0] flex items-center justify-center text-[#1C362B] shrink-0 border border-[#D5DBCB] group-hover:bg-[#1C362B] group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-[13px] font-bold text-[#1C362B] uppercase tracking-wider mb-1">Email Support</h4>
                  <a href="mailto:info@kumavatitextile.com" className="text-[14px] text-[#4A4A4A] hover:text-[#1C362B] transition-colors decoration-transparent block mb-1">info@kumavatitextile.com</a>
                  <a href="mailto:sales@kumavatitextile.com" className="text-[14px] text-[#4A4A4A] hover:text-[#1C362B] transition-colors decoration-transparent block">sales@kumavatitextile.com</a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-full bg-[#F9F6F0] flex items-center justify-center text-[#1C362B] shrink-0 border border-[#D5DBCB] group-hover:bg-[#1C362B] group-hover:text-white transition-all">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-[13px] font-bold text-[#1C362B] uppercase tracking-wider mb-1">Working Hours</h4>
                  <p className="text-[14px] text-[#4A4A4A] m-0">Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p className="text-[14px] text-[#4A4A4A] m-0">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Visual */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full h-[450px] lg:h-full rounded-2xl overflow-hidden shadow-sm border border-[#D5DBCB] bg-white relative"
          >
            <iframe
              src="https://maps.google.com/maps?q=Surat%20Textile%20Market&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%" height="100%"
              style={{ border: 0, display: 'block', outline: 'none' }}
              frameBorder="0"
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KUMAVATI Textile House Location Map"
            />
          </motion.div>
        </div>

      </div>
    </div>
  );
}
