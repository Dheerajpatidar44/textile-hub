import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Gem } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
    setMobileResourcesOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  const resourceLinks = [
    { name: 'Our Retail Management', path: '/retail-management' },
    { name: 'Trade Enquiry', path: '/trade-enquiry' },
    { name: 'e-Quotation', path: '/e-quotation' },
    { name: 'e-Auction', path: '/e-auction' },
    { name: 'Trade Circular', path: '/trade-circular' },
    { name: 'Notice Board', path: '/notice-board' },
    { name: 'Career', path: '/career' },
    { name: 'Customer Review', path: '/customer-review' },
    { name: 'Media Gallery', path: '/media-gallery' },
    { name: 'Blog', path: '/blog' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0B1C3E] shadow-[0_4px_30px_rgba(0,0,0,0.35)] py-3'
          : 'bg-[#0B1C3E]/95 backdrop-blur-md py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 z-50 group">
          <div className="w-8 h-8 border border-[#D4A853] flex items-center justify-center rotate-45 group-hover:bg-[#D4A853] transition-colors duration-300">
            <span className="rotate-[-45deg] text-[#D4A853] group-hover:text-[#0B1C3E] text-xs font-serif font-bold transition-colors duration-300">P</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-serif font-semibold text-white tracking-[0.2em] leading-none">LUMINA</span>
            <span className="text-[0.5rem] uppercase tracking-[0.35em] text-[#D4A853]/80 font-light">Est. Heritage Textiles</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xs uppercase tracking-[0.12em] font-medium transition-all duration-200 relative group ${
                isActive(link.path) ? 'text-[#D4A853]' : 'text-white/85 hover:text-[#D4A853]'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-px bg-[#D4A853] transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>
          ))}

          {/* Resources Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className={`flex items-center gap-1.5 text-xs uppercase tracking-[0.12em] font-medium transition-colors ${dropdownOpen ? 'text-[#D4A853]' : 'text-white/85 hover:text-[#D4A853]'}`}>
              <span>Resources</span>
              <ChevronDown size={14} className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full right-0 mt-5 w-64 bg-[#0B1C3E] border border-[#D4A853]/20 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                >
                  {/* Top accent */}
                  <div className="h-0.5 bg-[#D4A853]" />
                  <div className="py-3">
                    {resourceLinks.map((link, i) => (
                      <Link
                        key={link.name}
                        to={link.path}
                        className="flex items-center px-5 py-2.5 text-[13px] text-white/75 hover:text-[#D4A853] hover:bg-white/5 transition-all duration-150 tracking-wider group"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#D4A853]/40 group-hover:bg-[#D4A853] mr-3 transition-colors" />
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white hover:text-[#D4A853] transition-colors z-50 p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className="lg:hidden fixed inset-0 top-0 pt-24 bg-[#060F22] z-40 overflow-y-auto"
          >
            <div className="flex flex-col px-8 pb-20">
              <div className="h-px bg-[#D4A853]/20 mb-8" />

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-2xl font-serif font-light py-3 border-b border-white/5 ${isActive(link.path) ? 'text-[#D4A853]' : 'text-white/80 hover:text-[#D4A853]'} transition-colors`}
                >
                  {link.name}
                </Link>
              ))}

              <button
                onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                className="text-2xl font-serif font-light py-3 border-b border-white/5 text-white/80 flex justify-between items-center"
              >
                <span>Resources</span>
                <ChevronDown size={18} className={`transition-transform duration-300 ${mobileResourcesOpen ? 'rotate-180 text-[#D4A853]' : 'text-white/40'}`} />
              </button>

              <AnimatePresence>
                {mobileResourcesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    {resourceLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.path}
                        className="block py-2.5 pl-5 text-sm text-[#D4A853]/70 hover:text-[#D4A853] border-b border-white/5 tracking-wide transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
