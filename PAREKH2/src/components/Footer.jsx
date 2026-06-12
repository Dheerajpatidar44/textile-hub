import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t-4 border-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div>
            <Link to="/" className="flex flex-col items-start mb-6">
              <span className="text-3xl font-serif font-bold text-secondary tracking-widest">PAREKH</span>
              <span className="text-[0.6rem] uppercase tracking-[0.2em] text-white/70">Premium Textiles</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Defining elegance in the textile and garment retail industry. We offer a curated collection of premium fabrics and readymade apparel for all occasions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors text-white">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors text-white">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors text-white">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-secondary mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Products', 'Retail Management', 'Contact Us'].map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-white/80 hover:text-secondary text-sm transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2"></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-secondary mb-6">Business</h3>
            <ul className="space-y-3">
              {['Trade Enquiry', 'e-Quotation', 'e-Auction', 'Trade Circular', 'Career'].map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-white/80 hover:text-secondary text-sm transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2"></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-secondary mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-white/80 text-sm">
                <MapPin size={18} className="text-secondary mr-3 flex-shrink-0 mt-0.5" />
                <span>123 Textile Hub, Fashion Street, <br/>Mumbai, Maharashtra 400001</span>
              </li>
              <li className="flex items-center text-white/80 text-sm">
                <Phone size={18} className="text-secondary mr-3 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center text-white/80 text-sm">
                <Mail size={18} className="text-secondary mr-3 flex-shrink-0" />
                <span>info@parekhtextiles.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} PAREKH Premium Textiles. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-secondary">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-secondary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
