import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

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

  const mainLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Product ', path: '/products' },
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
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#1A0A05]/98 shadow-2xl'
          : 'bg-[#1A0A05]'
      }`}
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >


      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[70px]">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9A227] to-[#9B2519] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200">
              <span style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-white font-bold text-lg leading-none">T</span>
            </div>
            <div className="flex flex-col">
              <span style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[#C9A227] text-xl font-bold tracking-wider leading-tight">
                TEXTILE MALL
              </span>
              <span className="text-[9px] tracking-[0.18em] uppercase text-[#A68B7C] leading-tight">
                Threads of Trust, Style for Generations
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
                  className={`relative px-3 py-2 text-[12.5px] font-medium tracking-wide uppercase transition-colors duration-200 ${
                    isActive ? 'text-[#C9A227]' : 'text-[#D4BDB6] hover:text-[#E2C65A]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-[2px] rounded-full bg-gradient-to-r from-[#C9A227] to-[#E2C65A]" />
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
                className={`relative flex items-center gap-1 px-3 py-2 text-[12.5px] font-medium tracking-wide uppercase transition-colors duration-200 ${
                  isMoreActive ? 'text-[#C9A227]' : 'text-[#D4BDB6] hover:text-[#E2C65A]'
                }`}
              >
                More
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 ${isMoreOpen ? 'rotate-180' : ''}`}
                />
                {isMoreActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-[2px] rounded-full bg-gradient-to-r from-[#C9A227] to-[#E2C65A]" />
                )}
              </button>

              {isMoreOpen && (
                <div className="absolute top-full right-0 w-56 bg-[#2C1810] border border-[#C9A227]/20 rounded-xl shadow-2xl overflow-hidden mt-1">
                  
                  <div className="py-1">
                    {moreLinks.map((link) => {
                      const isActive = location.pathname === link.path;
                      return (
                        <Link
                          key={link.name}
                          to={link.path}
                          className={`block px-4 py-2.5 text-[12.5px] font-medium tracking-wide transition-all duration-150 ${
                            isActive
                              ? 'bg-[#9B2519]/40 text-[#C9A227]'
                              : 'text-[#D4BDB6] hover:bg-[#9B2519]/20 hover:text-[#E2C65A] hover:pl-5'
                          }`}
                        >
                          {link.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Trade Enquiry CTA Button */}
            <Link
              to="/trade-enquiry"
              className="ml-3 flex items-center gap-2 px-5 py-2.5 rounded-full text-[12px] font-bold tracking-wider uppercase text-[#1A0A05] btn-gold shadow-md"
            >
              <Phone size={13} />
              Trade Enquiry
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#C9A227] hover:text-[#E2C65A] focus:outline-none p-1"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#2C1810] border-t border-[#C9A227]/15 max-h-[85vh] overflow-y-auto">
          <div className="px-4 py-5 space-y-1">
            {mainLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg text-[14px] font-medium tracking-wide uppercase transition-all ${
                    isActive
                      ? 'bg-[#9B2519]/30 text-[#C9A227] border-l-2 border-[#C9A227]'
                      : 'text-[#D4BDB6] hover:bg-[#9B2519]/15 hover:text-[#E2C65A]'
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
              className="flex items-center justify-center gap-2 mt-3 px-4 py-3 rounded-full text-[13px] font-bold tracking-wider uppercase text-[#1A0A05] btn-gold shadow-md w-full"
            >
              <Phone size={14} />
              Trade Enquiry
            </Link>

            {/* More Section */}
            <div className="mt-4 pt-4 border-t border-[#C9A227]/15">
              <p className="px-4 text-[10px] font-bold text-[#A68B7C] tracking-[0.2em] uppercase mb-2">More Pages</p>
              {moreLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-[13px] font-medium tracking-wide transition-all ${
                      isActive
                        ? 'bg-[#9B2519]/30 text-[#C9A227]'
                        : 'text-[#A68B7C] hover:bg-[#9B2519]/15 hover:text-[#D4BDB6]'
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
  );
}
