import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-6 md:py-8 font-outfit text-left">
      {/* Compact Page Heading */}
      <div className="mb-8 border-b border-gray-200 pb-3">
        <h1 className="text-[#0C2E3A] text-2xl md:text-3xl tracking-wider uppercase font-bold m-0 font-playfair border-0 pb-0">
          Contact Us
        </h1>
      </div>

      <div className="space-y-8">
        {/* Intro Block */}
        <div className="space-y-2 max-w-2xl">
          <h2 className="font-playfair text-xl md:text-2xl text-[#0C2E3A] font-semibold uppercase tracking-wider">
            Let's Connect.
          </h2>
          <p className="text-[#4F6D7A] text-xs leading-relaxed">
            Experience the finest craftsmanship. LoomLine retail mall brings you premium quality and timeless apparel traditions. Reach out to our corporate teams for wholesale consultation, export inquiries, or support.
          </p>
        </div>

        {/* 4 Column Contact Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Headquarters Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="bg-white border border-gray-200 p-5 rounded-2xl shadow-xs space-y-4 flex flex-col items-start"
          >
            <div className="p-3 bg-[#E5EFF2] text-[#0A5F73] border border-[#0A5F73]/10 rounded-xl shrink-0">
              <MapPin size={18} />
            </div>
            <div className="space-y-1">
              <h4 className="font-outfit font-bold text-xs uppercase tracking-wider text-[#0C2E3A]">Headquarters</h4>
              <p className="text-[#4F6D7A] text-[10px] leading-relaxed">
                LoomLine Retail House<br />
                123 Textile Hub, Ring Road<br />
                Surat, GJ, 395002
              </p>
            </div>
          </motion.div>

          {/* Call Us Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white border border-gray-200 p-5 rounded-2xl shadow-xs space-y-4 flex flex-col items-start"
          >
            <div className="p-3 bg-[#E5EFF2] text-[#0A5F73] border border-[#0A5F73]/10 rounded-xl shrink-0">
              <Phone size={18} />
            </div>
            <div className="space-y-1">
              <h4 className="font-outfit font-bold text-xs uppercase tracking-wider text-[#0C2E3A]">Call Us</h4>
              <p className="text-[#4F6D7A] text-[10px] leading-relaxed">
                General Enquiry: +91 63537 78329<br />
                Support Line: +91 98765 43210
              </p>
            </div>
          </motion.div>

          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="bg-white border border-gray-200 p-5 rounded-2xl shadow-xs space-y-4 flex flex-col items-start"
          >
            <div className="p-3 bg-[#E5EFF2] text-[#0A5F73] border border-[#0A5F73]/10 rounded-xl shrink-0">
              <Mail size={18} />
            </div>
            <div className="space-y-1">
              <h4 className="font-outfit font-bold text-xs uppercase tracking-wider text-[#0C2E3A]">Emails</h4>
              <p className="text-[#4F6D7A] text-[10px] font-semibold flex flex-col gap-0.5 lowercase">
                <a href="mailto:info@loomline.com" className="hover:text-[#0A5F73] transition-colors">info@loomline.com</a>
                <a href="mailto:sales@loomline.com" className="hover:text-[#0A5F73] transition-colors">sales@loomline.com</a>
              </p>
            </div>
          </motion.div>

          {/* Hours Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-white border border-gray-200 p-5 rounded-2xl shadow-xs space-y-4 flex flex-col items-start"
          >
            <div className="p-3 bg-[#E5EFF2] text-[#0A5F73] border border-[#0A5F73]/10 rounded-xl shrink-0">
              <Clock size={18} />
            </div>
            <div className="space-y-1">
              <h4 className="font-outfit font-bold text-xs uppercase tracking-wider text-[#0C2E3A]">Working Hours</h4>
              <p className="text-[#4F6D7A] text-[10px] leading-relaxed">
                Mon - Sat: 9:00 AM - 6:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </motion.div>
        </div>

        {/* Full-width Map Container below cards */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="w-full h-[360px] bg-white border border-gray-200 rounded-3xl shadow-sm overflow-hidden"
        >
          <iframe
            src="https://maps.google.com/maps?q=Surat&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
            className="w-full h-full"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
}
