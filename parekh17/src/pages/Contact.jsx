import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="pb-12 w-full">
      {/* Page Header Banner */}
      <div className="w-full bg-rosegold-500 text-white py-12 px-6 mb-10 text-center relative overflow-hidden border-b border-rosegold-400/20">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-0" />
        <div className="relative z-10">
          <h1 className="text-[#F3ECE0] border-0 pb-0 text-3xl md:text-4xl tracking-wider uppercase font-bold m-0 text-center">Contact Us</h1>
          <p className="text-[#C5A880] text-[10px] md:text-xs uppercase tracking-widest mt-2 font-semibold">Get In Touch With Our Offices</p>
        </div>
      </div>

      {/* 1 Column Layout of Wide Spanning Panels */}
      <div className="max-w-5xl mx-auto px-6 flex flex-col gap-8">
        {/* Panel 1: Intro & Quick Contact Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border border-[#C5A880]/15 p-8 md:p-12 shadow-sm rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-8"
        >
          <div className="md:w-1/2 space-y-4">
            <h2 className="font-playfair text-2xl md:text-3xl text-gray-900 font-semibold uppercase tracking-wide leading-tight">
              Let's connect. <br />
              <span className="text-[#C5A880] italic">Get in touch.</span>
            </h2>
            <p className="text-gray-650 text-sm leading-relaxed max-w-md">
              Experience the finest craftsmanship. Our headquarters brings you premium quality and timeless apparel traditions. Reach out for consultations or support.
            </p>
          </div>

          <div className="md:w-1/2 space-y-4 shrink-0">
            {/* Location Pill */}
            <div className="flex items-center gap-4 bg-pearl-100 p-4 border border-[#ebdcb9]/40 rounded w-full">
              <div className="p-3 bg-rosegold-500 text-[#C5A880] border border-[#C5A880]/20 shadow-sm rounded">
                <MapPin size={18} />
              </div>
              <div className="text-left">
                <h4 className="font-playfair font-bold text-sm text-[#C5A880] uppercase tracking-wide">Headquarters</h4>
                <p className="text-gray-650 text-xs mt-0.5 leading-relaxed">123 Premium Apparel Road<br />Fashion Hub, Chennai, TN, 600001</p>
              </div>
            </div>

            {/* Phone Pill */}
            <div className="flex items-center gap-4 bg-pearl-100 p-4 border border-[#ebdcb9]/40 rounded w-full">
              <div className="p-3 bg-rosegold-500 text-[#C5A880] border border-[#C5A880]/20 shadow-sm rounded">
                <Phone size={18} />
              </div>
              <div className="text-left">
                <h4 className="font-playfair font-bold text-sm text-[#C5A880] uppercase tracking-wide">Call Us</h4>
                <p className="text-gray-650 text-xs mt-0.5">+91 6353778329</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Panel 2: Email, Working Hours & Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border border-[#C5A880]/15 p-8 md:p-12 shadow-sm rounded-lg flex flex-col md:flex-row gap-8"
        >
          {/* Details Card */}
          <div className="md:w-1/2 flex flex-col justify-center text-left">
            <h3 className="font-playfair text-xl font-bold mb-6 text-[#C5A880] uppercase tracking-wide">Business Details</h3>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="text-[#C5A880] bg-pearl-100 p-2.5 border border-[#ebdcb9]/40 rounded">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[9px] font-bold tracking-widest uppercase text-gray-400 mb-0.5">Email Enquiries</p>
                  <p className="text-gray-800 text-xs md:text-sm font-semibold">info@varaweaves.com</p>
                  <p className="text-gray-800 text-xs md:text-sm font-semibold">sales@varaweaves.com</p>
                </div>
              </div>

              <div className="h-px w-full bg-[#ebdcb9]/20"></div>

              <div className="flex items-center gap-4">
                <div className="text-[#C5A880] bg-pearl-100 p-2.5 border border-[#ebdcb9]/40 rounded">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-[9px] font-bold tracking-widest uppercase text-gray-400 mb-0.5">Business Hours</p>
                  <p className="text-gray-800 text-xs md:text-sm font-semibold">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-800 text-xs md:text-sm font-semibold">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="md:w-1/2 overflow-hidden rounded shadow-sm h-64 border border-gray-200 bg-pearl-100">
            <iframe
              src="https://maps.google.com/maps?q=Chennai&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
