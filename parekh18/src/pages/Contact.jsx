import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-10 md:py-14">
      {/* Direct Page Heading (No Banner) */}
      <div className="mb-10 text-left">
        <h1 className="text-[#3D223B] border-b border-[#BD7B88]/20 pb-4 text-3xl md:text-4xl tracking-wider uppercase font-bold m-0 font-playfair">
          Contact Us
        </h1>
      </div>

      {/* 2 Column Layout of Split Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Intro & Contact Details (7 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 bg-white border border-[#BD7B88]/15 p-8 md:p-10 shadow-sm rounded-2xl space-y-8 text-left"
        >
          <div className="space-y-3">
            <h2 className="font-playfair text-2xl md:text-3xl text-[#3D223B] font-semibold uppercase tracking-wide leading-tight">
              Let's Connect. <br />
              <span className="text-[#BD7B88] italic font-normal font-playfair">Get in touch with us.</span>
            </h2>
            <p className="text-gray-650 text-xs sm:text-sm leading-relaxed max-w-xl font-outfit">
              Experience the finest craftsmanship. Our corporate headquarters brings you premium quality and timeless apparel traditions. Reach out to our teams for wholesale consultation, export inquiries, or support.
            </p>
          </div>

          <div className="h-px bg-[#BD7B88]/10 w-full" />

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Headquarters Pill */}
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-[#FAF4F6] text-[#BD7B88] border border-[#BD7B88]/20 rounded-xl shrink-0">
                <MapPin size={20} />
              </div>
              <div className="text-left space-y-1">
                <h4 className="font-playfair font-bold text-xs uppercase tracking-wider text-[#3D223B]">Headquarters</h4>
                <p className="text-gray-650 text-xs leading-relaxed font-outfit">
                  123 Premium Apparel Road<br />
                  Fashion Hub, Chennai, TN, 600001
                </p>
              </div>
            </div>

            {/* Call Us Pill */}
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-[#FAF4F6] text-[#BD7B88] border border-[#BD7B88]/20 rounded-xl shrink-0">
                <Phone size={20} />
              </div>
              <div className="text-left space-y-1">
                <h4 className="font-playfair font-bold text-xs uppercase tracking-wider text-[#3D223B]">Call Us</h4>
                <p className="text-gray-650 text-xs font-outfit">
                  +91 63537 78329
                </p>
              </div>
            </div>

            {/* Email Pill */}
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-[#FAF4F6] text-[#BD7B88] border border-[#BD7B88]/20 rounded-xl shrink-0">
                <Mail size={20} />
              </div>
              <div className="text-left space-y-1">
                <h4 className="font-playfair font-bold text-xs uppercase tracking-wider text-[#3D223B]">Email Enquiries</h4>
                <p className="text-gray-650 text-xs font-semibold font-outfit">
                  <a href="mailto:info@royalweaves.com" className="hover:text-[#BD7B88] transition-colors">info@royalweaves.com</a>
                </p>
                <p className="text-gray-650 text-xs font-semibold font-outfit">
                  <a href="mailto:sales@royalweaves.com" className="hover:text-[#BD7B88] transition-colors">sales@royalweaves.com</a>
                </p>
              </div>
            </div>

            {/* Working Hours Pill */}
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-[#FAF4F6] text-[#BD7B88] border border-[#BD7B88]/20 rounded-xl shrink-0">
                <Clock size={20} />
              </div>
              <div className="text-left space-y-1">
                <h4 className="font-playfair font-bold text-xs uppercase tracking-wider text-[#3D223B]">Business Hours</h4>
                <p className="text-gray-650 text-xs font-semibold font-outfit">
                  Mon - Sat: 9:00 AM - 6:00 PM
                </p>
                <p className="text-gray-650 text-xs font-semibold font-outfit">
                  Sunday: Closed
                </p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Right Column: Google Map Container (5 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-5 w-full bg-[#FAF4F6] border border-[#BD7B88]/15 rounded-2xl shadow-sm overflow-hidden min-h-[320px] lg:h-full"
        >
          <iframe
            src="https://maps.google.com/maps?q=Chennai&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
            className="w-full h-full min-h-[320px]"
          ></iframe>
        </motion.div>

      </div>
    </div>
  );
}
