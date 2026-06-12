import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="pb-10 max-w-6xl mx-auto px-4">

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left Column */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <h1 className="font-playfair text-4xl lg:text-5xl text-[#2d0a4e] font-bold leading-tight">
            Let's weave your <br/>
            <span className="text-[#d8a5ad] italic">vision together.</span>
          </h1>
          
          <p className="text-gray-600 text-sm max-w-sm leading-relaxed">
            Experience the finest craftsmanship. Our headquarters brings you premium quality and timeless traditions.
          </p>

          <div className="space-y-4 pt-2">
            {/* Location Pill */}
            <div className="flex items-center gap-4 bg-white p-3 lg:p-4 rounded-2xl shadow-sm border border-gray-100 w-full max-w-sm">
              <div className="p-3 bg-[#2d0a4e] rounded-xl text-white shadow-md">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-playfair font-bold text-base text-[#2d0a4e] uppercase tracking-wide">Headquarters</h4>
                <p className="text-gray-600 text-xs mt-0.5">123 Premium Textile Avenue<br/>Fashion District, NY 10001</p>
              </div>
            </div>

            {/* Phone Pill */}
            <div className="flex items-center gap-4 bg-white p-3 lg:p-4 rounded-2xl shadow-sm border border-gray-100 w-full max-w-sm">
              <div className="p-3 bg-[#2d0a4e] rounded-xl text-white shadow-md">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-playfair font-bold text-base text-[#2d0a4e] uppercase tracking-wide">Call Us</h4>
                <p className="text-gray-600 text-xs mt-0.5">+1 234 567 8900</p>
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
          <div className="bg-[#2d0a4e] p-6 lg:p-8 rounded-[2rem] text-white shadow-lg relative overflow-hidden">
            <h3 className="font-playfair text-2xl font-bold mb-6">Contact Details</h3>
            
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="text-[#d8a5ad] bg-white/10 p-2 rounded-lg">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-white/60 mb-0.5">Email Enquiries</p>
                  <p className="text-pearl-50 text-sm">info@texmart.com</p>
                  <p className="text-pearl-50 text-sm">sales@texmart.com</p>
                </div>
              </div>
              
              <div className="h-px w-full bg-white/10"></div>
              
              <div className="flex items-center gap-4">
                <div className="text-[#d8a5ad] bg-white/10 p-2 rounded-lg">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-white/60 mb-0.5">Business Hours</p>
                  <p className="text-pearl-50 text-sm">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  <p className="text-pearl-50 text-sm">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="rounded-[2rem] overflow-hidden shadow-lg h-[240px] border-4 border-white bg-white">
            <iframe 
              src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
