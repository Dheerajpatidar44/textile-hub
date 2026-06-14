import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Globe, Users, Phone, ShoppingBag, Image as ImageIcon,
  MessageSquare, FileText, Briefcase, Star, Clipboard, Headphones
} from 'lucide-react';

export default function Sidebar({ closeSidebar }) {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', icon: Globe },
    { name: 'About Us', path: '/about', icon: Users },
    { name: 'Contact Us', path: '/contact', icon: Phone },
    { name: 'Product', path: '/products', icon: ShoppingBag },
    { name: 'Our Retail Management', path: '/retail-management', icon: Users },
    { name: 'Trade Enquiry', path: '/trade-enquiry', icon: MessageSquare },
    { name: 'e-Quotation', path: '/e-quotation', icon: FileText },
    { name: 'e-Auction', path: '/e-auction', icon: FileText },
    { name: 'Trade Circular', path: '/trade-circular', icon: FileText },
    { name: 'Blog Page', path: '/blog', icon: MessageSquare },
    { name: 'Notice Board', path: '/notice-board', icon: Clipboard },
    { name: 'Career Page', path: '/career', icon: Briefcase },
    { name: 'Customer Review', path: '/reviews', icon: Star },
    { name: 'Business Media Gallery', path: '/gallery', icon: ImageIcon },
  ];

  const getDisplayName = (name) => {
    if (name === 'e-Quotation') return 'e-Quotation';
    if (name === 'e-Auction') return 'e-Auction';
    return name.toUpperCase();
  };

  return (
    <div className="flex flex-col h-full bg-[#132C20] border-r border-[#ebdcb9]/10 overflow-y-auto custom-scrollbar">
      {/* Logo Area - Styled exactly like the reference image with compact padding */}
      <div className="px-6 pt-6 pb-4 text-center border-b border-[#ebdcb9]/10">
        {/* Elegant Gold Medallion Ornament SVG (Compact w-12 h-12) */}
        <svg className="w-12 h-12 mx-auto mb-2 text-[#C3A87E]" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 5C52 20 62 30 77 33C62 36 52 46 50 61C48 46 38 36 23 33C38 30 48 20 50 5Z" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M50 39C52 49 60 57 70 59C60 61 52 69 50 79C48 69 40 61 30 59C40 57 48 49 50 39Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="50" cy="49" r="3" />
          <path d="M50 20 L50 25 M50 73 L50 78 M21 49 L26 49 M74 49 L79 49" stroke="currentColor" strokeWidth="1.5"/>
        </svg>

        <h1 className="font-playfair text-lg tracking-[0.12em] text-[#C3A87E] font-bold uppercase mb-0.5 border-0 pb-0 w-full text-center">
          ROYAL WEAVES
        </h1>
        
        {/* Subtitle with gold lines */}
        <div className="flex items-center justify-center gap-2 mt-1">
          <div className="w-5 h-[1px] bg-[#C3A87E]/30"></div>
          <span className="text-[9px] tracking-[0.2em] uppercase text-[#eedec9] font-outfit font-semibold">
            TEXTILE MALL
          </span>
          <div className="w-5 h-[1px] bg-[#C3A87E]/30"></div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 py-4 px-4">
        <ul className="space-y-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            const Icon = link.icon;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={closeSidebar}
                  className={`flex items-center gap-3.5 px-4 py-2.5 rounded-lg text-[11px] font-outfit tracking-[0.08em] font-semibold transition-all duration-300 ${
                    isActive 
                      ? 'text-[#132C20] bg-[#eedec9] shadow-sm font-bold' 
                      : 'text-[#dfc39a]/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon size={16} className={isActive ? "text-[#132C20]" : "text-[#dfc39a]/70 group-hover:text-white transition-colors"} />
                  {getDisplayName(link.name)}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Need Help Box and Socials */}
      <div className="p-6 border-t border-[#ebdcb9]/10 bg-[#0f2319] space-y-5">
        {/* Need Help panel */}
        <div className="border border-[#C3A87E]/20 bg-white/5 p-4 rounded-xl flex flex-col gap-2">
          <div className="flex items-center gap-2.5">
            <Headphones size={18} className="text-[#C3A87E]" />
            <span className="text-[11px] font-semibold text-[#eedec9] uppercase tracking-wider">Need Help?</span>
          </div>
          <div className="text-[14px] font-bold text-white font-outfit tracking-wide mt-1">
            +91 98765 43210
          </div>
          <div className="text-[9px] text-[#dfc39a]/60 uppercase tracking-widest mt-0.5">
            Mon - Sat: 10:00 AM - 8:00 PM
          </div>
        </div>

        {/* Social Icons row */}
        <div className="flex items-center justify-center gap-3.5 pt-1">
          {/* Facebook */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
             className="w-8 h-8 rounded-full border border-[#dfc39a]/20 flex items-center justify-center text-[#dfc39a]/80 hover:text-white hover:border-[#dfc39a] hover:bg-white/5 transition-all duration-300">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h3V1H13c-3.3 0-4 1.7-4 4v3z"/>
            </svg>
          </a>
          
          {/* Instagram */}
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
             className="w-8 h-8 rounded-full border border-[#dfc39a]/20 flex items-center justify-center text-[#dfc39a]/80 hover:text-white hover:border-[#dfc39a] hover:bg-white/5 transition-all duration-300">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
             className="w-8 h-8 rounded-full border border-[#dfc39a]/20 flex items-center justify-center text-[#dfc39a]/80 hover:text-white hover:border-[#dfc39a] hover:bg-white/5 transition-all duration-300">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>

          {/* Twitter (X) */}
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
             className="w-8 h-8 rounded-full border border-[#dfc39a]/20 flex items-center justify-center text-[#dfc39a]/80 hover:text-white hover:border-[#dfc39a] hover:bg-white/5 transition-all duration-300">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
