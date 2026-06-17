import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const C = {
  primary: '#1B2B3F',
  primaryDark: '#0F1E2D',
  primaryLight: '#243B55',
  accent: '#C9A455',
  accentLight: '#F0E4C2',
  bg: '#F8F5EF',
  sand: '#F5EED8',
  border: '#E8E0D0',
  soil: '#1a1a2e',
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
          background: scrolled ? 'rgba(15, 30, 45, 0.97)' : C.primary,
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: `1px solid rgba(201,164,85,0.15)`,
          boxShadow: scrolled ? '0 2px 20px rgba(0, 0, 0, 0.3)' : 'none',
        }}
      >
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 flex justify-between items-center">

          {/* Logo Brand: WEAVORA */}
          <Link to="/" className="flex items-center gap-3 group shrink-0 text-left">
            {/* Logo Icon */}
            <div style={{
              width: 32, height: 32,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <polygon points="14,2 26,9 26,19 14,26 2,19 2,9" stroke="#C9A455" strokeWidth="1.5" fill="none"/>
                <polygon points="14,7 21,11 21,17 14,21 7,17 7,11" fill="#C9A455" opacity="0.3"/>
                <circle cx="14" cy="14" r="3" fill="#C9A455"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span
                className="text-[19px] font-bold leading-none tracking-widest text-white"
                style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: '0.15em' }}
              >
                WEAVORA
              </span>
              <span className="text-[7px] tracking-[0.22em] font-semibold mt-1 uppercase" style={{ color: C.accent }}>
                Textile Mall
              </span>
            </div>
          </Link>

          {/* Center Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-x-4 lg:gap-x-5">
            {directNavItems.filter(item => item.name !== 'Trade Enquiry').map((item) => {
              const active = isItemActive(item);
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className="relative px-1 py-0.5 text-[11px] lg:text-[12px] font-semibold tracking-wide uppercase transition-all duration-200 whitespace-nowrap shrink-0"
                  style={{ color: active ? '#C9A455' : 'rgba(255,255,255,0.75)' }}
                >
                  {item.name}
                  {active && (
                    <div style={{ position: 'absolute', bottom: -4, left: 0, right: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ width: '100%', height: 1, background: 'rgba(201,164,85,0.4)' }} />
                      <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#C9A455', position: 'absolute' }} />
                    </div>
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
                className="flex items-center gap-1 px-3 py-1.5 text-[11px] lg:text-[12px] font-semibold tracking-wide uppercase transition-all duration-200 whitespace-nowrap cursor-pointer rounded-md"
                style={{ color: '#1a1a2e', background: C.accent }}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span>Pages</span>
                <ChevronDown size={11} className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.96 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 rounded-2xl shadow-2xl z-[999] text-left overflow-hidden"
                    style={{
                      background: 'linear-gradient(180deg, #1B2B3F 0%, #0F1E2D 100%)',
                      border: '1px solid rgba(201, 164, 85, 0.2)',
                    }}
                  >
                    {/* Top caret arrow */}
                    <div style={{
                      position: 'absolute', top: -6, left: '50%',
                      width: 12, height: 12, background: '#1B2B3F',
                      borderRadius: 2, transform: 'translateX(-50%) rotate(45deg)',
                      borderTop: '1px solid rgba(201, 164, 85, 0.2)',
                      borderLeft: '1px solid rgba(201, 164, 85, 0.2)',
                    }} />
                    <div style={{ padding: '6px 0' }}>
                      {dropdownNavItems.map((item) => {
                        const active = isItemActive(item);
                        return (
                          <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => setDropdownOpen(false)}
                            className="flex items-center gap-3 px-5 py-2.5 text-[12.5px] font-medium transition-all duration-200"
                            style={{
                              color: active ? '#C9A455' : 'rgba(255,255,255,0.75)',
                              background: active ? 'rgba(201, 164, 85, 0.1)' : 'transparent',
                              borderLeft: active ? '3px solid #C9A455' : '3px solid transparent',
                              textDecoration: 'none',
                            }}
                            onMouseEnter={e => {
                              e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
                              e.currentTarget.style.color = '#C9A455';
                              e.currentTarget.style.borderLeftColor = '#C9A455';
                            }}
                            onMouseLeave={e => {
                              if (!active) {
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.color = 'rgba(255,255,255,0.75)';
                                e.currentTarget.style.borderLeftColor = 'transparent';
                              } else {
                                e.currentTarget.style.background = 'rgba(201, 164, 85, 0.1)';
                                e.currentTarget.style.color = '#C9A455';
                                e.currentTarget.style.borderLeftColor = '#C9A455';
                              }
                            }}
                          >
                            <span style={{
                              width: 5, height: 5, borderRadius: '50%',
                              background: active ? '#C9A455' : 'rgba(255,255,255,0.25)',
                              flexShrink: 0, display: 'inline-block',
                              transition: 'background 0.2s',
                            }} />
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
              className="hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-full text-[11px] lg:text-[12px] font-bold tracking-wider uppercase shadow-sm hover:shadow-md transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, ${C.accent} 0%, #A88035 100%)`,
                color: '#1a1a2e',
                border: '1px solid rgba(201,164,85,0.3)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(201,164,85,0.3)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              Trade Enquiry
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-xl border transition-all"
              style={{
                color: '#ffffff',
                borderColor: 'rgba(201,164,85,0.3)',
                background: 'rgba(201,164,85,0.1)',
              }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
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
            className="md:hidden fixed inset-0 top-0 z-40 flex flex-col"
            style={{ background: '#F8F5EF', fontFamily: "'DM Sans', sans-serif" }}
          >
            {/* Drawer header */}
            <div style={{ background: 'linear-gradient(135deg, #1B2B3F, #0F1E2D)', padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 700, color: '#ffffff', margin: 0, letterSpacing: '0.15em' }}>
                  WEAVORA
                </p>
                <p style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C9A455', margin: 0, marginTop: 2, fontWeight: 600 }}>
                  Textile Mall
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'rgba(201,164,85,0.15)',
                  border: '1px solid rgba(201,164,85,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#ffffff', cursor: 'pointer',
                }}
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-6 pb-28 space-y-2">
              <div className="grid grid-cols-1 gap-1.5">
                {directNavItems.map((item) => {
                  const active = isItemActive(item);
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between px-4 py-3 rounded-xl text-[13px] font-semibold tracking-wide border transition-all uppercase"
                      style={{
                        background: active ? 'rgba(27, 43, 63, 0.06)' : '#F5EED8',
                        borderColor: active ? C.primary : '#E8E0D0',
                        color: active ? C.primary : C.soil,
                      }}
                    >
                      <span>{item.name}</span>
                      {active && <span className="w-2 h-2 rounded-full" style={{ background: C.accent }} />}
                    </Link>
                  );
                })}

                {/* Mobile Pages Accordion */}
                <div className="w-full">
                  <button
                    onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-[13px] font-semibold uppercase tracking-wide border transition-all cursor-pointer"
                    style={{
                      background: '#F5EED8',
                      borderColor: isDropdownActive() ? C.primary : '#E8E0D0',
                      color: isDropdownActive() ? C.primary : C.soil,
                    }}
                  >
                    <span>Pages</span>
                    <ChevronDown size={14} className={`transition-transform duration-200 ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {mobileResourcesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden mt-1.5 space-y-1.5 pl-3"
                      >
                        {dropdownNavItems.map((item) => {
                          const active = isItemActive(item);
                          return (
                            <Link
                              key={item.name}
                              to={item.path}
                              onClick={() => { setIsOpen(false); setMobileResourcesOpen(false); }}
                              className="flex items-center justify-between px-4 py-2.5 rounded-xl text-[12px] font-semibold uppercase tracking-wide border transition-all"
                              style={{
                                background: active ? 'rgba(27, 43, 63, 0.05)' : '#F5EED8',
                                borderColor: active ? C.primary : '#E8E0D0',
                                color: active ? C.primary : C.soil,
                              }}
                            >
                              <span>{item.name}</span>
                              {active && <span className="w-1.5 h-1.5 rounded-full" style={{ background: C.accent }} />}
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider"
                  style={{ background: 'linear-gradient(135deg, #1B2B3F, #C9A455)', color: '#ffffff' }}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
