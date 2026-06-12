import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#FDF6EC' }}>

      {/* Hero Banner */}
      <div className="relative h-32 sm:h-40 overflow-hidden flex items-center justify-center text-center"
        style={{ background: 'linear-gradient(135deg, #1A0A05 0%, #2C1810 60%, #3D2418 100%)' }}>
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle, #C9A227 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          
          <h1 className="font-bold text-5xl sm:text-6xl text-white"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Contact Us
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

          {/* Left: Contact Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-xl"
            style={{ background: 'linear-gradient(160deg, #2C1810 0%, #1A0A05 100%)', border: '1px solid rgba(201,162,39,0.2)' }}
          >
            <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #9B2519, #C9A227, #E2C65A, #C9A227, #9B2519)' }} />
            <div className="p-8 lg:p-10">
              <h2 className="font-bold text-3xl text-white mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Contact Details
              </h2>
              <p className="text-[13px] mb-8" style={{ color: '#A68B7C' }}>
                We're here to help. Reach out to us through any of the following channels.
              </p>

              <div className="space-y-6">
                {[
                  { icon: MapPin, label: 'Headquarters', lines: ['123 Premium Textile Avenue', 'Fashion District, Chennai, TN, India'] },
                  { icon: Phone, label: 'Call Us', lines: ['+91 6353778329'] },
                  { icon: Mail, label: 'Email Enquiries', lines: ['info@textilemall.com', 'sales@textilemall.com'] },
                  { icon: Clock, label: 'Business Hours', lines: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Sunday: Closed'] },
                ].map(({ icon: Icon, label, lines }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(201,162,39,0.15)', border: '1px solid rgba(201,162,39,0.3)' }}>
                      <Icon size={18} color="#C9A227" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.18em] uppercase mb-1" style={{ color: '#C9A227' }}>{label}</p>
                      {lines.map((line, i) => (
                        <p key={i} className="text-[14px]" style={{ color: '#D4BDB6' }}>{line}</p>
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
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl min-h-[350px]"
              style={{ border: '2px solid rgba(201,162,39,0.25)' }}>
              <iframe
                src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '200px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
