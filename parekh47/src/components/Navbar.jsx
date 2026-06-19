import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const C = {
  primary: '#0D3E3C',        // Elegant Deep Teal/Green
  primaryDark: '#061F1E',
  primaryLight: '#1E5957',
  accent: '#A75D3F',         // Terracotta/Copper Accent
  accentLight: '#C67E5F',
  gold: '#A75D3F',
  bg: '#FAF8F5',
  border: '#E5ECE9',
  stone: '#66807B',
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
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'CONTACT US', path: '/contact' },
    { name: 'PRODUCT', path: '/products' },
    { name: 'OUR RETAIL MANAGEMENT', path: '/retail-management' },
  ];

  const dropdownNavItems = [
    { name: 'Trade Enquiry', path: '/trade-enquiry' },
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
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ── Main Navbar ── */}
      <div
        className="w-full transition-all duration-300 py-4"
        style={{
          background: scrolled ? 'rgba(255, 255, 255, 0.95)' : '#ffffff',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: `1px solid ${scrolled ? 'rgba(34, 40, 66, 0.08)' : 'rgba(34, 40, 66, 0.05)'}`,
          boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.03)' : 'none',
        }}
      >
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 flex justify-between items-center">

          {/* Logo Brand: WEAVECRAFT Textile Mall */}
          <Link to="/" className="flex items-center gap-3 group shrink-0 text-left">
            {/* Logo Icon */}
            <div style={{
              width: 38, height: 38,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={C.accent} strokeWidth="1.5">
                <path d="M12 2L2 12l10 10 10-10L12 2z" strokeWidth="2" />
                <path d="M12 6l-6 6 6 6 6-6-6-6z" stroke={C.gold} strokeWidth="1.5" />
                <circle cx="12" cy="12" r="1.5" fill={C.accent} />
              </svg>
            </div>
            <div className="flex flex-col">
              <span
                className="text-[17px] font-bold leading-none tracking-[0.08em]"
                style={{ fontFamily: "'Inter', sans-serif", color: C.primary, fontWeight: 800 }}
              >
                RIWAAYAT
              </span>
              <span 
                className="text-[7.5px] tracking-[0.22em] font-bold mt-1 uppercase" 
                style={{ color: C.accent, fontFamily: "'Inter', sans-serif" }}
              >
                HUB
              </span>
            </div>
          </Link>

          {/* Center Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-x-8">
            {directNavItems.map((item) => {
              const active = isItemActive(item);
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className="relative px-1 py-1 text-[12px] font-bold tracking-widest transition-all duration-200 whitespace-nowrap shrink-0"
                  style={{ color: active ? C.accent : C.primary }}
                >
                  {item.name}
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
                className="flex items-center gap-1 px-1 py-1 text-[12px] font-bold tracking-widest transition-all duration-200 whitespace-nowrap cursor-pointer bg-transparent border-none"
                style={{ color: isDropdownActive() ? C.accent : C.primary }}
              >
                <span>PAGES</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 shadow-2xl z-[999] text-left overflow-hidden rounded-[16px]"
                    style={{
                      background: '#ffffff',
                      border: `1px solid ${C.border}`,
                    }}
                  >
                    <div style={{ padding: '8px 0', position: 'relative', zIndex: 1 }}>
                      {dropdownNavItems.map((item) => {
                        const active = isItemActive(item);
                        return (
                          <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => setDropdownOpen(false)}
                            className="flex items-center gap-3 px-6 py-2.5 text-[12px] font-semibold transition-all duration-200"
                            style={{
                              color: active ? C.accent : C.primary,
                              background: active ? 'rgba(30, 62, 55, 0.05)' : 'transparent',
                              textDecoration: 'none',
                              letterSpacing: '0.05em',
                            }}
                            onMouseEnter={e => {
                              e.currentTarget.style.background = 'rgba(30, 62, 55, 0.05)';
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

          {/* Right side: Mobile Menu Button */}
          <div className="flex items-center gap-4 shrink-0 lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 transition-all border-none bg-transparent"
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
            transition={{ type: 'tween', duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden fixed inset-0 top-0 z-40 flex flex-col"
            style={{ background: '#ffffff', fontFamily: "'Inter', sans-serif" }}
          >
            {/* Drawer header */}
             <div style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `1px solid ${C.border}` }}>
              <div className="flex-1 flex flex-col">
                <span
                  className="text-[18px] font-extrabold leading-none tracking-wide"
                  style={{ color: C.primary }}
                >
                  RIWAAYAT
                </span>
                <span className="text-[8px] tracking-[0.2em] font-bold mt-1 uppercase" style={{ color: C.accent }}>
                  HUB
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  width: 36, height: 36,
                  background: 'rgba(30, 62, 55, 0.1)',
                  border: 'none',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: C.primary, cursor: 'pointer',
                  borderRadius: '50%',
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
                      className="flex items-center justify-between px-4 py-3.5 text-[13px] font-bold tracking-wider rounded-xl transition-all"
                      style={{
                        background: active ? 'rgba(30, 62, 55, 0.06)' : 'transparent',
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
                    className="w-full flex items-center justify-between px-4 py-3.5 text-[13px] font-bold tracking-wider transition-all cursor-pointer border-none bg-transparent"
                    style={{
                      color: isDropdownActive() ? C.accent : C.primary,
                    }}
                  >
                    <span>PAGES</span>
                    <ChevronDown size={16} className={`transition-transform duration-200 ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {mobileResourcesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        className="overflow-hidden mt-1 space-y-1 pl-4"
                      >
                        {dropdownNavItems.map((item) => {
                          const active = isItemActive(item);
                          return (
                            <Link
                              key={item.name}
                              to={item.path}
                              onClick={() => { setIsOpen(false); setMobileResourcesOpen(false); }}
                              className="flex items-center justify-between px-4 py-3 text-[12px] font-bold tracking-wider rounded-xl transition-all"
                              style={{
                                background: active ? 'rgba(30, 62, 55, 0.04)' : 'transparent',
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
