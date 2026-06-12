import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Our Retail Management', path: '/retail-management' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const resourceLinks = [
    { name: 'Trade Enquiry', path: '/trade-enquiry' },
    { name: 'e-Quotation', path: '/e-quotation' },
    { name: 'e-Auction', path: '/e-auction' },
    { name: 'Trade Circular', path: '/trade-circular' },
    { name: 'Career', path: '/career' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <footer className="bg-[#060F22] text-white">
      {/* Top amber line */}
      <div className="h-px bg-[#D4A853]" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-7 h-7 border border-[#D4A853] flex items-center justify-center rotate-45">
                <span className="rotate-[-45deg] text-[#D4A853] text-xs font-serif font-bold">P</span>
              </div>
              <div>
                <span className="text-xl font-serif font-semibold text-white tracking-[0.2em]">LUMINA</span>
                <span className="block text-[0.5rem] uppercase tracking-[0.35em] text-[#D4A853]/70 font-light">Est. Heritage Textiles</span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-7 font-light">
              A legacy of weaving excellence. From heirloom silks to modern home furnishings, we bring the finest textiles to discerning buyers across India.
            </p>
            <div className="flex gap-3">
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="w-9 h-9 border border-white/15 flex items-center justify-center hover:border-[#D4A853] hover:bg-[#D4A853]/10 text-white/50 hover:text-[#D4A853] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="w-9 h-9 border border-white/15 flex items-center justify-center hover:border-[#D4A853] hover:bg-[#D4A853]/10 text-white/50 hover:text-[#D4A853] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 border border-white/15 flex items-center justify-center hover:border-[#D4A853] hover:bg-[#D4A853]/10 text-white/50 hover:text-[#D4A853] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              {/* YouTube */}
              <a href="#" aria-label="YouTube" className="w-9 h-9 border border-white/15 flex items-center justify-center hover:border-[#D4A853] hover:bg-[#D4A853]/10 text-white/50 hover:text-[#D4A853] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links + Resources — side by side on mobile */}
          <div className="grid grid-cols-2 gap-6 lg:contents">

            {/* Quick Links */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#D4A853] mb-6 font-medium">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors group"
                    >
                      <span className="w-3 h-px bg-[#D4A853]/40 group-hover:w-5 group-hover:bg-[#D4A853] transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#D4A853] mb-6 font-medium">Resources</h3>
              <ul className="space-y-3">
                {resourceLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors group"
                    >
                      <span className="w-3 h-px bg-[#D4A853]/40 group-hover:w-5 group-hover:bg-[#D4A853] transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#D4A853] mb-6 font-medium">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#D4A853] shrink-0 mt-0.5" />
                <span className="text-sm text-white/50 leading-relaxed">123 Textile Hub, Fashion Street,<br/>Mumbai, Maharashtra 400001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#D4A853] shrink-0" />
                <span className="text-sm text-white/50">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#D4A853] shrink-0" />
                <span className="text-sm text-white/50">info@luminatextiles.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/25 tracking-wider">
            © {new Date().getFullYear()} LUMINA Premium Textiles. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="text-xs text-white/25 hover:text-[#D4A853] transition-colors tracking-wider">Privacy Policy</Link>
            <Link to="#" className="text-xs text-white/25 hover:text-[#D4A853] transition-colors tracking-wider">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
