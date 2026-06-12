import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#0A0A0C' }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#F3F4F6]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Contact Us
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 pb-20">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

          {/* Left: Contact Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden shadow-sm text-left"
            style={{ background: '#121216', border: '1.5px solid #24252F' }}
          >
            <div className="p-8 lg:p-10">
              <h2 className="font-bold text-3xl text-[#F3F4F6] mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Contact Details
              </h2>
              <p className="text-[13px] mb-8 text-[#9CA3AF] font-medium">
                We're here to help. Reach out to us through any of the following channels.
              </p>

              <div className="space-y-6">
                {[
                  { icon: MapPin, label: 'Headquarters', lines: ['123 Premium Textile Avenue', 'Fashion District, Chennai, TN, India'] },
                  { icon: Phone, label: 'Call Us', lines: ['+91 6353778329'] },
                  { icon: Mail, label: 'Email Enquiries', lines: ['info@swastiktextilemall.com', 'sales@swastiktextilemall.com'] },
                  { icon: Clock, label: 'Business Hours', lines: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Sunday: Closed'] },
                ].map(({ icon: Icon, label, lines }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(200, 155, 95, 0.1)', border: '1px solid rgba(200, 155, 95, 0.2)' }}>
                      <Icon size={18} color="#C89B5F" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.18em] uppercase mb-1" style={{ color: '#C89B5F' }}>{label}</p>
                      {lines.map((line, i) => (
                        <p key={i} className="text-[14px] text-[#D1D5DB] font-semibold">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="h-full w-full"
          >
            <div className="w-full h-full overflow-hidden shadow-sm min-h-[350px]"
              style={{ border: '1.5px solid #24252F' }}>
              <iframe
                src="https://maps.google.com/maps?q=Surat%20Textile%20Market&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '350px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Surat Textile Market Map"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
