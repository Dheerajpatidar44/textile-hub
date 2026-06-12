import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const mainLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Product', path: '/products' },
    { name: 'Our Retail Management', path: '/retail-management' },
  ];

  const moreLinks = [
    { name: 'e-Quotation', path: '/e-quotation' },
    { name: 'e-Auction', path: '/e-auction' },
    { name: 'Trade Circular', path: '/trade-circular' },
    { name: 'Blog Page', path: '/blog' },
    { name: 'Notice Board', path: '/notice-board' },
    { name: 'Career Page', path: '/career' },
    { name: 'Customer Review', path: '/reviews' },
    { name: 'Business Media Gallery', path: '/gallery' },
  ];

  const isMoreActive = moreLinks.some(l => location.pathname === l.path);

  return (
    <header className="w-full sticky top-0 z-50 transition-all duration-300">
      {/* ── TOP HEADER BANNER ── */}
      <div className="bg-[#3D4A3C] text-white py-2 px-4 sm:px-6 lg:px-8 border-b border-[#2C362B]/20 hidden md:block">
        <div className="max-w-[90rem] mx-auto flex justify-between items-center text-xs font-semibold tracking-wider">
          <div className="flex items-center gap-2">
            <span>🎁 FESTIVAL OFFER: Flat 15% OFF on Premium Collections</span>
            <Link to="/products" className="bg-white text-[#3D4A3C] px-3 py-0.5 rounded-full font-bold text-[10px] uppercase ml-2 hover:bg-[#F5EFE6] transition-colors">
              Explore Now &rarr;
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C89B5F] transition-colors flex items-center" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C89B5F] transition-colors flex items-center" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C89B5F] transition-colors flex items-center" aria-label="Twitter">
              <TwitterIcon />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C89B5F] transition-colors flex items-center" aria-label="YouTube">
              <YoutubeIcon />
            </a>
          </div>
        </div>
      </div>

      {/* ── MAIN NAVBAR ── */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-md'
            : 'bg-white border-b border-gray-100'
        }`}
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[75px]">
            {/* Mobile Left: Hamburger */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#2C362B] hover:text-[#5F6F5E] focus:outline-none p-1 shrink-0"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Logo - Centered on mobile, Left-aligned on desktop */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 group shrink-0 mx-auto lg:mx-0">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-white group-hover:scale-105 transition-transform duration-200 shadow-sm border border-[#EAE3D9]">
                <svg viewBox="0 0 100 100" className="w-7 h-7 text-[#C89B5F]" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />
                  <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="1" />
                  <path d="M 50,15 A 35,35 0 0,0 50,85 A 35,35 0 0,0 50,15" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M 15,50 A 35,35 0 0,0 85,50 A 35,35 0 0,0 15,50" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="50" cy="50" r="18" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M 50,22 L 50,78 M 22,50 L 78,50" stroke="currentColor" strokeWidth="1" />
                  <path d="M 50,50 C 40,35 40,15 50,15 C 60,15 60,35 50,50 Z" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.08" />
                  <path d="M 50,50 C 40,65 40,85 50,85 C 60,85 60,65 50,50 Z" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.08" />
                  <path d="M 50,50 C 35,40 15,40 15,50 C 15,60 35,60 50,50 Z" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.08" />
                  <path d="M 50,50 C 65,40 85,40 85,50 C 85,60 65,60 50,50 Z" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.08" />
                  <circle cx="50" cy="50" r="5" fill="currentColor" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-[#2C362B] text-[18px] sm:text-[22px] font-bold tracking-[0.05em] leading-none"
                >
                  TEXTILE MALL
                </span>
                <span
                  className="text-[7.5px] sm:text-[8.5px] tracking-[0.2em] uppercase text-[#8A6F4E] leading-tight font-bold mt-1.5"
                >
                  WEAVE · STYLE · EXCELLENCE
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {mainLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative px-3 py-2 text-[12.5px] font-bold tracking-wide uppercase transition-colors duration-200 ${
                      isActive ? 'text-[#5F6F5E]' : 'text-[#2C362B] hover:text-[#5F6F5E]'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-4/5 h-[2px] rounded-full bg-[#5F6F5E]" />
                    )}
                  </Link>
                );
              })}

              {/* More Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsMoreOpen(true)}
                onMouseLeave={() => setIsMoreOpen(false)}
              >
                <button
                  className={`relative flex items-center gap-1 px-3 py-2 text-[12.5px] font-bold tracking-wide uppercase transition-colors duration-200 ${
                    isMoreActive ? 'text-[#5F6F5E]' : 'text-[#2C362B] hover:text-[#5F6F5E]'
                  }`}
                >
                  More
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-200 ${isMoreOpen ? 'rotate-180' : ''}`}
                  />
                  {isMoreActive && (
                    <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-4/5 h-[2px] rounded-full bg-[#5F6F5E]" />
                  )}
                </button>

                {isMoreOpen && (
                  <div className="absolute top-[35px] right-0 w-56 bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden mt-1 py-1 z-50">
                    {moreLinks.map((link) => {
                      const isActive = location.pathname === link.path;
                      return (
                        <Link
                          key={link.name}
                          to={link.path}
                          className={`block px-4 py-2.5 text-[12.5px] font-bold tracking-wide transition-all duration-150 ${
                            isActive
                              ? 'bg-[#5F6F5E]/10 text-[#5F6F5E]'
                              : 'text-[#2C362B] hover:bg-[#5F6F5E]/5 hover:text-[#5F6F5E] hover:pl-5'
                          }`}
                        >
                          {link.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Right Side Icons & CTA */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Desktop Trade Enquiry CTA Button */}
              <Link
                to="/trade-enquiry"
                className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] font-bold tracking-wider uppercase btn-primary shadow-sm hover:shadow-md transition-all duration-300"
              >
                <Phone size={12} />
                Trade Enquiry
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 max-h-[85vh] overflow-y-auto shadow-lg">
            <div className="px-4 py-5 space-y-1">
              {mainLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-lg text-[13px] font-bold tracking-wide uppercase transition-all ${
                      isActive
                        ? 'bg-[#5F6F5E]/10 text-[#5F6F5E] border-l-2 border-[#5F6F5E]'
                        : 'text-[#2C362B] hover:bg-gray-50 hover:text-[#5F6F5E]'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {/* Trade Enquiry Mobile CTA */}
              <Link
                to="/trade-enquiry"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 mt-3 px-4 py-3 rounded-full text-[12px] font-bold tracking-wider uppercase btn-primary shadow-md w-full"
              >
                <Phone size={13} />
                Trade Enquiry
              </Link>

              {/* More Section */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="px-4 text-[9px] font-bold text-[#7E857E] tracking-[0.2em] uppercase mb-2">More Pages</p>
                {moreLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-[12.5px] font-bold tracking-wide transition-all ${
                        isActive
                          ? 'bg-[#5F6F5E]/10 text-[#5F6F5E]'
                          : 'text-[#8A6F4E] hover:bg-gray-50 hover:text-[#2C362B]'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
