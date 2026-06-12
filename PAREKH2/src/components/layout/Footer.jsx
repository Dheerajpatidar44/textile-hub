import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#022c22] text-[#f8fafc] border-t-4 border-[#C48B5D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold tracking-wider text-[#C48B5D]">PAREKH<span className="text-white font-light">TEX</span></h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Premium quality textiles and garments for modern retail. Delivering excellence in every thread.
            </p>
            <div className="flex space-x-4 mt-8">
              <a href="#" className="text-[#C48B5D] hover:text-white hover:-translate-y-1 transition-all bg-white/5 p-2.5 rounded-full hover:bg-[#C48B5D]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="text-[#C48B5D] hover:text-white hover:-translate-y-1 transition-all bg-white/5 p-2.5 rounded-full hover:bg-[#C48B5D]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="text-[#C48B5D] hover:text-white hover:-translate-y-1 transition-all bg-white/5 p-2.5 rounded-full hover:bg-[#C48B5D]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" className="text-[#C48B5D] hover:text-white hover:-translate-y-1 transition-all bg-white/5 p-2.5 rounded-full hover:bg-[#C48B5D]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-serif text-[#C48B5D] mb-6">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-sm hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/retail-management" className="text-sm hover:text-white transition-colors">Retail Management</Link></li>
              <li><Link to="/career" className="text-sm hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-serif text-[#C48B5D] mb-6">Business</h3>
            <ul className="space-y-2">
              <li><Link to="/trade-enquiry" className="text-sm hover:text-white transition-colors">Trade Enquiry</Link></li>
              <li><Link to="/e-quotation" className="text-sm hover:text-white transition-colors">e-Quotation</Link></li>
              <li><Link to="/e-auction" className="text-sm hover:text-white transition-colors">e-Auction</Link></li>
              <li><Link to="/trade-circular" className="text-sm hover:text-white transition-colors">Trade Circular</Link></li>
              <li><Link to="/notice-board" className="text-sm hover:text-white transition-colors">Notice Board</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-serif text-[#C48B5D] mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-[#C48B5D] shrink-0" />
                <span className="text-sm">123 Textile Hub, Market Street, Mumbai, India - 400001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-[#C48B5D] shrink-0" />
                <span className="text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-[#C48B5D] shrink-0" />
                <span className="text-sm">info@parekhtex.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Parekh Textiles. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
