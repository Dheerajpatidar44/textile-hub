import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const C = {
  primary: '#1a1a2e',
  primaryDark: '#0f0f1c',
  primaryLight: '#2c2c44',
  accent: '#C9A455',
  accentLight: '#F0E4C2',
  bg: '#F8F5EF',
  sand: '#F5EED8',
  border: '#E8E0D0',
  soil: '#2d1a13',
  stone: '#6B7280',
  cream: '#FDFBF7',
};

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const directNavItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Product', path: '/products' },
    { name: 'Our Retail Management', path: '/retail-management' },
    { name: 'Trade Enquiry', path: '/trade-enquiry' },
  ];

  const dropdownNavItems = [
    { name: 'e-Quotation', path: '/e-quotation' },
    { name: 'e-Auction', path: '/e-auction' },
    { name: 'Trade Circular', path: '/trade-circular' },
    { name: 'Blog Page', path: '/blog' },
    { name: 'Notice Board', path: '/notice-board' },
    { name: 'Career Page', path: '/career' },
    { name: 'Customer Review', path: '/reviews' },
    { name: 'Business Media Gallery', path: '/gallery' },
    { name: 'FAQ', path: '/faq' },
  ];

  const isItemActive = (item) => {
    if (item.path === '/' && location.pathname === '/') return true;
    if (item.path !== '/' && location.pathname === item.path) return true;
    if (item.path !== '/' && item.path !== '#' && location.pathname.startsWith(item.path) && item.path !== '/products') {
      return true;
    }
    if (item.path === '/products' && location.pathname === '/products') {
      return true;
    }
    return false;
  };

  const isDropdownActive = () => dropdownNavItems.some(item => isItemActive(item));

  return (
    <header
      className="w-full fixed top-0 left-0 z-50 transition-all duration-300"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ── Main Navbar ── */}
      <div
        className="w-full transition-all duration-300 py-3"
        style={{
          background: scrolled ? 'rgba(253, 251, 247, 0.98)' : C.cream,
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? `1px solid rgba(201,164,85,0.15)` : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.05)' : 'none',
        }}
      >
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 flex justify-between items-center">

          {/* Logo Brand: SareeSutra */}
          <Link to="/" className="flex items-center gap-3 group shrink-0 text-left">
            {/* Logo Icon */}
            <div style={{
              width: 32, height: 32,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'rgba(201,164,85,0.1)',
              borderRadius: '50%',
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A455" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span
                className="text-[20px] font-bold leading-none tracking-wide"
                style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: '0.05em', color: C.primary }}
              >
                SareeSutra
              </span>
              <span className="text-[8px] tracking-[0.15em] font-medium mt-1 uppercase" style={{ color: C.stone }}>
                Textile Mall
              </span>
            </div>
          </Link>

          {/* Center Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-x-6">
            {directNavItems.filter(item => item.name !== 'Trade Enquiry').map((item) => {
              const active = isItemActive(item);
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className="relative px-1 py-1 text-[13px] font-semibold tracking-wide transition-all duration-200 whitespace-nowrap shrink-0"
                  style={{ color: active ? C.accent : C.primary }}
                >
                  {item.name}
                  {active && (
                    <div style={{ position: 'absolute', bottom: -2, left: 0, right: 0, height: 2, background: C.accent, borderRadius: 2 }} />
                  )}
                </Link>
              );
            })}

            {/* Pages Dropdown */}
            <div
              className="relative shrink-0"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1 px-1 py-1 text-[13px] font-semibold tracking-wide transition-all duration-200 whitespace-nowrap cursor-pointer bg-transparent border-none"
                style={{ color: isDropdownActive() ? C.accent : C.primary }}
              >
                <span>More</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 rounded-xl shadow-2xl z-[999] text-left overflow-hidden"
                    style={{
                      background: C.cream,
                      border: '1px solid rgba(201, 164, 85, 0.2)',
                    }}
                  >
                    {/* Top caret arrow */}
                    <div style={{
                      position: 'absolute', top: -6, left: '50%',
                      width: 12, height: 12, background: C.cream,
                      borderRadius: 2, transform: 'translateX(-50%) rotate(45deg)',
                      borderTop: '1px solid rgba(201, 164, 85, 0.2)',
                      borderLeft: '1px solid rgba(201, 164, 85, 0.2)',
                    }} />
                    <div style={{ padding: '8px 0', position: 'relative', zIndex: 1 }}>
                      {dropdownNavItems.map((item) => {
                        const active = isItemActive(item);
                        return (
                          <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => setDropdownOpen(false)}
                            className="flex items-center gap-3 px-5 py-2.5 text-[13px] font-medium transition-all duration-200"
                            style={{
                              color: active ? C.accent : C.primary,
                              background: active ? 'rgba(201, 164, 85, 0.05)' : 'transparent',
                              textDecoration: 'none',
                            }}
                            onMouseEnter={e => {
                              e.currentTarget.style.background = 'rgba(201, 164, 85, 0.05)';
                              e.currentTarget.style.color = C.accent;
                            }}
                            onMouseLeave={e => {
                              if (!active) {
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.color = C.primary;
                              }
                            }}
                          >
                            {item.name}
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4 shrink-0">
            {/* Trade Enquiry Button (Desktop) */}
            <Link
              to="/trade-enquiry"
              className="hidden lg:inline-flex items-center justify-center px-6 py-2.5 rounded-full text-[12px] font-bold tracking-wider uppercase shadow-sm hover:shadow-md transition-all duration-300"
              style={{
                background: C.accent,
                color: '#ffffff',
                border: 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = C.primary;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = C.accent;
              }}
            >
              Trade Enquiry
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl transition-all border-none bg-transparent"
              style={{ color: C.primary }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed inset-0 top-0 z-40 flex flex-col"
            style={{ background: C.cream, fontFamily: "'DM Sans', sans-serif" }}
          >
            {/* Drawer header */}
            <div style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `1px solid ${C.border}` }}>
              <div className="flex-1 flex flex-col">
                <span
                  className="text-[20px] font-bold leading-none tracking-wide"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: C.primary }}
                >
                  SareeSutra
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'rgba(201,164,85,0.1)',
                  border: 'none',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: C.primary, cursor: 'pointer',
                }}
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6 pb-28 space-y-2">
              <div className="grid grid-cols-1 gap-2">
                {directNavItems.map((item) => {
                  const active = isItemActive(item);
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between px-4 py-3.5 rounded-xl text-[14px] font-semibold tracking-wide transition-all"
                      style={{
                        background: active ? 'rgba(201, 164, 85, 0.1)' : 'transparent',
                        color: active ? C.accent : C.primary,
                      }}
                    >
                      <span>{item.name}</span>
                    </Link>
                  );
                })}

                {/* Mobile Pages Accordion */}
                <div className="w-full">
                  <button
                    onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                    className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-[14px] font-semibold tracking-wide transition-all cursor-pointer border-none bg-transparent"
                    style={{
                      color: isDropdownActive() ? C.accent : C.primary,
                    }}
                  >
                    <span>More</span>
                    <ChevronDown size={16} className={`transition-transform duration-200 ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {mobileResourcesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden mt-1 space-y-1 pl-4"
                      >
                        {dropdownNavItems.map((item) => {
                          const active = isItemActive(item);
                          return (
                            <Link
                              key={item.name}
                              to={item.path}
                              onClick={() => { setIsOpen(false); setMobileResourcesOpen(false); }}
                              className="flex items-center justify-between px-4 py-3 rounded-xl text-[13px] font-medium transition-all"
                              style={{
                                background: active ? 'rgba(201, 164, 85, 0.05)' : 'transparent',
                                color: active ? C.accent : C.stone,
                              }}
                            >
                              <span>{item.name}</span>
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  to="/trade-enquiry"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 py-4 rounded-full text-[13px] font-bold uppercase tracking-wider"
                  style={{ background: C.accent, color: '#ffffff' }}
                >
                  Trade Enquiry
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
