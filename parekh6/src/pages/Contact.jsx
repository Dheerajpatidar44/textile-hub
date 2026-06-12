import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="pt-12 flex flex-col bg-vastram-cream">
      <div className="max-w-6xl mx-auto px-4 w-full mb-12">
        <div className="text-center mb-10">
          <h1 className="font-playfair text-4xl text-vastram-text uppercase tracking-widest">Get In Touch</h1>
          <div className="h-[2px] w-12 bg-vastram-gold mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-6 h-full"
          >
            {/* Location Card */}
            <div className="flex items-center gap-6 bg-vastram-light p-6 lg:p-8 rounded-none border border-vastram-border w-full h-full hover:border-vastram-gold transition-colors">
              <div className="p-4 bg-vastram-brown text-vastram-gold border border-vastram-gold">
                <MapPin size={28} />
              </div>
              <div>
                <h4 className="font-playfair font-bold text-xl text-vastram-text uppercase tracking-wide">Headquarters</h4>
                <p className="text-vastram-text/80 text-sm mt-1 leading-relaxed">Vastram Textile Retail Mall, B/h. New Textile Market,<br/>Ring Road, Surat - 395002, India</p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="flex items-center gap-6 bg-vastram-light p-6 lg:p-8 rounded-none border border-vastram-border w-full h-full hover:border-vastram-gold transition-colors">
              <div className="p-4 bg-vastram-brown text-vastram-gold border border-vastram-gold">
                <Phone size={28} />
              </div>
              <div>
                <h4 className="font-playfair font-bold text-xl text-vastram-text uppercase tracking-wide">Call Us</h4>
                <p className="text-vastram-text/80 text-sm mt-1 leading-relaxed">+91 79 6622 5500</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6 h-full"
          >
            {/* Dark Contact Details Card */}
            <div className="bg-vastram-brown p-6 lg:p-8 rounded-none text-vastram-cream border border-vastram-gold h-full flex flex-col justify-center relative overflow-hidden">
              <h3 className="font-playfair text-2xl font-bold mb-6 text-vastram-gold uppercase tracking-widest">Contact Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="text-vastram-brown bg-vastram-gold p-2 rounded-none">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-vastram-cream/60 mb-0.5">Email Enquiries</p>
                    <p className="text-vastram-cream text-sm">info@vastramtextile.com</p>
                  </div>
                </div>
                
                <div className="h-px w-full bg-vastram-gold/30"></div>
                
                <div className="flex items-center gap-4">
                  <div className="text-vastram-brown bg-vastram-gold p-2 rounded-none">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-vastram-cream/60 mb-0.5">Business Hours</p>
                    <p className="text-vastram-cream text-sm">Mon - Sat: 9:00 AM - 8:00 PM</p>
                    <p className="text-vastram-cream text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full Width Map Section - Touching Footer */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full h-[350px] md:h-[450px] mt-auto"
      >
        <iframe 
          src="https://maps.google.com/maps?q=Surat,India&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </motion.div>
    </div>
  );
}
