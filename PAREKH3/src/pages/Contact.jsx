import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div>
      <PageHeader title="Contact Us" />

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

            {/* Left info panel */}
            <div className="bg-[#0B1C3E] p-12 md:p-16">
              <p className="text-[#D4A853] text-xs uppercase tracking-[0.4em] font-medium mb-5">Get in Touch</p>
              <h2 className="text-4xl font-serif font-light text-white leading-tight mb-6">
                We'd Love to<br />
                <em className="not-italic italic text-[#D4A853]">Hear from You</em>
              </h2>
              <div className="w-10 h-0.5 bg-[#D4A853] mb-10" />

              <p className="text-white/50 text-sm leading-relaxed font-light mb-12">
                Whether you have a question about our collections, pricing, or need assistance with your order, our team is ready to answer all your questions.
              </p>

              <div className="space-y-7">
                <div className="flex items-start gap-5">
                  <div className="w-11 h-11 border border-[#D4A853]/30 flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-[#D4A853]" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium mb-1">Corporate Office</h4>
                    <p className="text-white/45 text-sm font-light">123 Textile Hub, Market Street,<br />Mumbai, Maharashtra 400001, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-11 h-11 border border-[#D4A853]/30 flex items-center justify-center shrink-0">
                    <Phone size={16} className="text-[#D4A853]" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium mb-1">Phone</h4>
                    <p className="text-white/45 text-sm font-light">+91 98765 43210<br />+91 22 2345 6789</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-11 h-11 border border-[#D4A853]/30 flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-[#D4A853]" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium mb-1">Email</h4>
                    <p className="text-white/45 text-sm font-light">info@luminatex.com<br />sales@luminatex.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Map */}
            <div className="h-[500px] lg:h-auto min-h-[400px] border-t-4 border-[#D4A853]">
              <iframe
                src="https://maps.google.com/maps?q=Mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
