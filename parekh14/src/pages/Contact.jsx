import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="pb-10 -mt-8 max-w-6xl mx-auto px-4">
      <div className="text-center pt-0 pb-2 mb-10">
        <h1>Contact Us</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left Column */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="font-playfair text-4xl lg:text-5xl text-gray-900 font-bold leading-tight">
            Let's connect. <br/>
            <span className="text-rosegold-500 italic">Get in touch.</span>
          </div>
          
          <p className="text-gray-600 text-sm max-w-sm leading-relaxed">
            Experience the finest craftsmanship. Our headquarters brings you premium quality and timeless traditions.
          </p>

          <div className="space-y-4 pt-2">
            {/* Location Pill */}
            <div className="flex items-center gap-4 bg-white p-3 lg:p-4 border border-gray-200 w-full max-w-sm">
              <div className="p-3 bg-rosegold-500 text-white shadow-md">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-playfair font-bold text-base text-rosegold-500 uppercase tracking-wide">Headquarters</h4>
                <p className="text-gray-600 text-xs mt-0.5">123 Premium Apparel Road<br/>Fashion Hub, Chennai, TN, 600001</p>
              </div>
            </div>

            {/* Phone Pill */}
            <div className="flex items-center gap-4 bg-white p-3 lg:p-4 border border-gray-200 w-full max-w-sm">
              <div className="p-3 bg-rosegold-500 text-white shadow-md">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-playfair font-bold text-base text-rosegold-500 uppercase tracking-wide">Call Us</h4>
                <p className="text-gray-600 text-xs mt-0.5">+91 6353778329</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          {/* Dark Contact Details Card */}
          <div className="bg-pearl-50 p-6 lg:p-8 border border-gray-200 text-gray-800 shadow-lg relative overflow-hidden">
            <h3 className="font-playfair text-2xl font-bold mb-6 text-rosegold-500 uppercase tracking-wide">Contact Details</h3>
            
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="text-rosegold-500 bg-gray-100 p-2">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-0.5">Email Enquiries</p>
                  <p className="text-gray-700 text-sm">info@heritagegarments.com</p>
                  <p className="text-gray-700 text-sm">sales@heritagegarments.com</p>
                </div>
              </div>
              
              <div className="h-px w-full bg-gray-200"></div>
              
              <div className="flex items-center gap-4">
                <div className="text-rosegold-500 bg-gray-100 p-2">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-0.5">Business Hours</p>
                  <p className="text-gray-700 text-sm">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-700 text-sm">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="overflow-hidden shadow-lg h-[240px] border border-gray-200 bg-white">
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
