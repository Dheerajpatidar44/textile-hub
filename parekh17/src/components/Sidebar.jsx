import { Link, useLocation } from 'react-router-dom';
import {
  Globe, Users, Phone, ShoppingBag, Image as ImageIcon,
  MessageSquare, FileText, Briefcase, Star, Clipboard, HelpCircle
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
    { name: 'FAQ', path: '/faq', icon: HelpCircle },
    { name: 'Business Media Gallery', path: '/gallery', icon: ImageIcon },
  ];

  const getDisplayName = (name) => {
    if (name === 'e-Quotation') return 'e-Quotation';
    if (name === 'e-Auction') return 'e-Auction';
    return name.toUpperCase();
  };

  return (
    <div className="flex flex-col h-full bg-[#0C0C0C] border-r border-[#C5A880]/10 overflow-hidden">
      {/* Logo Area - Static, doesn't scroll */}
      <div className="px-6 pt-6 pb-4 text-center border-b border-[#C5A880]/10 shrink-0">
        {/* Elegant Gold Medallion Ornament SVG */}
        <svg className="w-12 h-12 mx-auto mb-2 text-[#C5A880]" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 5C52 20 62 30 77 33C62 36 52 46 50 61C48 46 38 36 23 33C38 30 48 20 50 5Z" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M50 39C52 49 60 57 70 59C60 61 52 69 50 79C48 69 40 61 30 59C40 57 48 49 50 39Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="50" cy="49" r="3" />
          <path d="M50 20 L50 25 M50 73 L50 78 M21 49 L26 49 M74 49 L79 49" stroke="currentColor" strokeWidth="1.5"/>
        </svg>

        <h1 className="font-playfair text-lg tracking-[0.12em] text-[#C5A880] font-bold uppercase mb-0.5 border-0 pb-0 w-full text-center">
          VARA WEAVES
        </h1>
        
        {/* Subtitle with gold lines */}
        <div className="flex items-center justify-center gap-2 mt-1">
          <div className="w-5 h-[1px] bg-[#C5A880]/30"></div>
          <span className="text-[9px] tracking-[0.2em] uppercase text-[#F3ECE0] font-outfit font-semibold">
            TEXTILE MALL
          </span>
          <div className="w-5 h-[1px] bg-[#C5A880]/30"></div>
        </div>
      </div>

      {/* Scrollable Container for navigation links and social icons */}
      <div className="flex-grow overflow-y-auto custom-scrollbar flex flex-col justify-between">
        {/* Navigation Links */}
        <nav className="py-4 px-4">
          <ul className="space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              const Icon = link.icon;
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={closeSidebar}
                    className={`flex items-center gap-3 px-4 py-2 rounded-lg text-[10px] font-outfit tracking-[0.08em] font-semibold transition-all duration-300 ${
                      isActive 
                        ? 'text-[#0C0C0C] bg-[#C5A880] shadow-sm font-bold' 
                        : 'text-[#dfc39a]/80 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon size={14} className={isActive ? "text-[#0C0C0C]" : "text-[#dfc39a]/70 group-hover:text-white transition-colors"} />
                    {getDisplayName(link.name)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Sidebar Footer: Socials Only (Instagram, Facebook, LinkedIn, Twitter) */}
        <div className="p-5 border-t border-[#C5A880]/10 bg-[#121212] shrink-0 text-left">
          <span className="text-[8px] font-bold text-[#C5A880] uppercase tracking-widest block mb-2">FOLLOW US</span>
          <div className="flex items-center gap-2.5">
            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
               className="w-7 h-7 rounded-full border border-[#C5A880]/20 flex items-center justify-center text-[#dfc39a]/80 hover:text-[#C5A880] hover:border-[#C5A880] hover:bg-white/5 transition-all duration-300"
               title="Instagram">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
               className="w-7 h-7 rounded-full border border-[#C5A880]/20 flex items-center justify-center text-[#dfc39a]/80 hover:text-[#C5A880] hover:border-[#C5A880] hover:bg-white/5 transition-all duration-300"
               title="Facebook">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h3V1H13c-3.3 0-4 1.7-4 4v3z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
               className="w-7 h-7 rounded-full border border-[#C5A880]/20 flex items-center justify-center text-[#dfc39a]/80 hover:text-[#C5A880] hover:border-[#C5A880] hover:bg-white/5 transition-all duration-300"
               title="LinkedIn">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* Twitter */}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
               className="w-7 h-7 rounded-full border border-[#C5A880]/20 flex items-center justify-center text-[#dfc39a]/80 hover:text-[#C5A880] hover:border-[#C5A880] hover:bg-white/5 transition-all duration-300"
               title="Twitter (X)">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
