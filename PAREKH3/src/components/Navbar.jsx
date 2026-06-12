import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  const moreLinks = [
    { name: 'Retail Management', path: '/retail-management' },
    { name: 'Trade Enquiry', path: '/trade-enquiry' },
    { name: 'e-Quotation', path: '/e-quotation' },
    { name: 'e-Auction', path: '/e-auction' },
    { name: 'Trade Circular', path: '/trade-circular' },
    { name: 'Notice Board', path: '/notice-board' },
    { name: 'Career', path: '/career' },
    { name: 'Customer Review', path: '/customer-review' },
    { name: 'Media Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-primary shadow-lg py-3' : 'bg-primary/95 backdrop-blur-sm py-5'
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex flex-col items-start z-50">
          <span className="text-2xl md:text-3xl font-serif font-bold text-secondary tracking-widest">Textile</span>
          <span className="text-[0.6rem] uppercase tracking-[0.2em] text-white/70">Premium Textiles</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm uppercase tracking-wider font-medium hover:text-secondary transition-colors ${location.pathname === link.path ? 'text-secondary' : 'text-white/90'
                }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center space-x-1 text-sm uppercase tracking-wider font-medium text-white/90 hover:text-secondary transition-colors">
              <span>Business</span>
              <ChevronDown size={16} className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full right-0 mt-4 w-56 bg-white shadow-xl rounded-b-md overflow-hidden border-t-2 border-secondary"
                >
                  <div className="py-2 flex flex-col">
                    {moreLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.path}
                        className="px-4 py-2 text-sm text-primary hover:bg-neutral-light hover:text-secondary transition-colors"
                      >
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
          className="lg:hidden text-white hover:text-secondary transition-colors z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed inset-0 top-0 pt-24 bg-primary z-40 overflow-y-auto"
          >
            <div className="flex flex-col items-center space-y-6 pb-20">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-xl text-white hover:text-secondary font-serif"
                >
                  {link.name}
                </Link>
              ))}
              <div className="w-16 h-px bg-secondary/30 my-4"></div>
              {moreLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-lg text-white/80 hover:text-secondary font-sans font-light"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
