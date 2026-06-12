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
      <div className="bg-[#A24E51] text-white py-2 px-4 sm:px-6 lg:px-8 border-b border-[#772729]/20 hidden md:block">
        <div className="max-w-[90rem] mx-auto flex justify-between items-center text-xs font-semibold tracking-wider">
          <div className="flex items-center gap-4">
            <span>India's Most Trusted Textile Retail Mall</span>
            <span className="opacity-40">|</span>
            <a href="tel:+916353778329" className="flex items-center gap-1.5 hover:underline text-white">
              <Phone size={12} />
              +91 6353778329
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#F2E2E1] transition-colors"><FacebookIcon /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#F2E2E1] transition-colors"><InstagramIcon /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#F2E2E1] transition-colors"><TwitterIcon /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-[#F2E2E1] transition-colors"><YoutubeIcon /></a>
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
                className="text-[#3C3430] hover:text-[#A24E51] focus:outline-none p-1 shrink-0"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Logo - Centered on mobile, Left-aligned on desktop */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 group shrink-0 mx-auto lg:mx-0">
              <div
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200"
                style={{
                  background: 'linear-gradient(135deg, #772629 0%, #A24E51 100%)',
                  border: '1.5px solid #DFCCBF'
                }}
              >
                <svg viewBox="0 0 100 100" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="4">
                  <path d="M50 20 C60 40, 75 50, 80 50 C75 50, 60 60, 50 80 C40 60, 25 50, 20 50 C25 50, 40 40, 50 20 Z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span
                  style={{ fontFamily: "'Marcellus', serif" }}
                  className="text-[#772629] text-base sm:text-xl font-bold tracking-widest leading-none"
                >
                  VASTRAMALL
                </span>
                <span
                  className="text-[7.5px] sm:text-[9px] tracking-[0.22em] uppercase text-[#6F5547] leading-tight font-bold mt-1"
                >
                  Textiles of India
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
                      isActive ? 'text-[#A24E51]' : 'text-[#3C3430] hover:text-[#A24E51]'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-4/5 h-[2px] rounded-full bg-[#A24E51]" />
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
                    isMoreActive ? 'text-[#A24E51]' : 'text-[#3C3430] hover:text-[#A24E51]'
                  }`}
                >
                  More
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-200 ${isMoreOpen ? 'rotate-180' : ''}`}
                  />
                  {isMoreActive && (
                    <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-4/5 h-[2px] rounded-full bg-[#A24E51]" />
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
                              ? 'bg-[#A24E51]/10 text-[#A24E51]'
                              : 'text-[#3C3430] hover:bg-[#A24E51]/5 hover:text-[#A24E51] hover:pl-5'
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
                        ? 'bg-[#A24E51]/10 text-[#A24E51] border-l-2 border-[#A24E51]'
                        : 'text-[#3C3430] hover:bg-gray-50 hover:text-[#A24E51]'
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
                <p className="px-4 text-[9px] font-bold text-[#908882] tracking-[0.2em] uppercase mb-2">More Pages</p>
                {moreLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-[12.5px] font-bold tracking-wide transition-all ${
                        isActive
                          ? 'bg-[#A24E51]/10 text-[#A24E51]'
                          : 'text-[#6F5547] hover:bg-gray-50 hover:text-[#3C3430]'
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
