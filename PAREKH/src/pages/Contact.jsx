import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div>
      <PageHeader title="Contact Us" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-serif font-bold text-brand-darkbrown mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              We'd love to hear from you. Whether you have a question about our collections, pricing, or need assistance with your order, our team is ready to answer all your questions.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-brand-light p-3 rounded-full mr-4">
                  <MapPin className="text-brand-maroon w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Corporate Office</h4>
                  <p className="text-gray-600">123 Textile Hub, Market Street, Mumbai, Maharashtra 400001, India</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-brand-light p-3 rounded-full mr-4">
                  <Phone className="text-brand-maroon w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Phone</h4>
                  <p className="text-gray-600">+91 98765 43210 <br/> +91 22 2345 6789</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-brand-light p-3 rounded-full mr-4">
                  <Mail className="text-brand-maroon w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email</h4>
                  <p className="text-gray-600">info@parekhtex.com <br/> sales@parekhtex.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden h-96 lg:h-auto min-h-[400px]">
            <iframe 
              src="https://maps.google.com/maps?q=Mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed" 
              className="w-full h-full"
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
