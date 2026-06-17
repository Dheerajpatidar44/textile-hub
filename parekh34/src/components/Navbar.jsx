import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const C = {
  primary: '#4A1942',
  primaryDark: '#2E1038',
  accent: '#8B5E3C',
  bg: '#FAF6F1',
  sand: '#F5EDE4',
  sage: '#F3EAE0',
  border: '#E8DDD4',
  soil: '#3D1F35',
  stone: '#7A6670',
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
          background: scrolled ? 'rgba(250,246,241,0.97)' : '#FAF6F1',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: `1px solid ${C.border}`,
          boxShadow: scrolled ? '0 2px 20px rgba(74, 25, 66, 0.06)' : 'none',
        }}
      >
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 flex justify-between items-center">

          {/* Logo Brand: THREADORA */}
          <Link to="/" className="flex items-center gap-3.5 group shrink-0 text-left relative pl-6 pr-10 py-3 sm:pl-8 sm:pr-12 lg:pl-14 lg:pr-16 -ml-6 sm:-ml-8 lg:-ml-14 -my-3 transition-all duration-300" style={{
            background: 'linear-gradient(135deg, #4A1942 0%, #2E1038 100%)',
            borderRadius: '0 0 50px 0',
            boxShadow: '4px 4px 15px rgba(0,0,0,0.1)',
          }}>
            {/* Logo Icon */}
            <div style={{
              width: 30, height: 30,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L17 7L12 12L7 7L12 2Z" fill="#C49A6C" />
                <path d="M17 7L22 12L17 17L12 12L17 7Z" fill="#E8DDD4" opacity="0.8" />
                <path d="M12 12L17 17L12 22L7 17L12 12Z" fill="#C49A6C" />
                <path d="M7 7L12 12L7 17L2 12L7 7Z" fill="#E8DDD4" opacity="0.8" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span
                className="text-[20px] font-bold leading-none tracking-wide text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                THREADORA
              </span>
              <span className="text-[7.5px] tracking-[0.2em] font-semibold mt-1.5 uppercase text-[#E8DDD4]">
                Textile Retail
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
                  style={{ color: active ? C.primary : C.soil }}
                >
                  {item.name}
                  {active && (
                    <span
                      className="absolute bottom-[-3px] left-0 right-0 h-[2px] rounded-full"
                      style={{ background: C.accent }}
                    />
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
                className="flex items-center gap-1 px-1 py-1 text-[11px] lg:text-[12px] font-semibold tracking-wide uppercase transition-all duration-200 whitespace-nowrap cursor-pointer"
                style={{ color: isDropdownActive() ? C.primary : C.soil }}
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
                      background: 'linear-gradient(180deg, #4A1942 0%, #3D1F35 100%)',
                      border: '1px solid rgba(139, 94, 60, 0.2)',
                    }}
                  >
                    {/* Top caret arrow */}
                    <div style={{
                      position: 'absolute', top: -6, left: '50%', transform: 'translateX(-50%)',
                      width: 12, height: 12, background: '#4A1942',
                      borderRadius: 2, transform: 'translateX(-50%) rotate(45deg)',
                      borderTop: '1px solid rgba(139, 94, 60, 0.2)',
                      borderLeft: '1px solid rgba(139, 94, 60, 0.2)',
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
                              color: active ? '#ffffff' : 'rgba(255,255,255,0.75)',
                              background: active ? 'rgba(139, 94, 60, 0.2)' : 'transparent',
                              borderLeft: active ? '3px solid #C49A6C' : '3px solid transparent',
                              textDecoration: 'none',
                            }}
                            onMouseEnter={e => {
                              e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                              e.currentTarget.style.color = '#ffffff';
                              e.currentTarget.style.borderLeftColor = '#C49A6C';
                            }}
                            onMouseLeave={e => {
                              if (!active) {
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.color = 'rgba(255,255,255,0.75)';
                                e.currentTarget.style.borderLeftColor = 'transparent';
                              } else {
                                e.currentTarget.style.background = 'rgba(139, 94, 60, 0.2)';
                                e.currentTarget.style.color = '#ffffff';
                                e.currentTarget.style.borderLeftColor = '#C49A6C';
                              }
                            }}
                          >
                            <span style={{
                              width: 5, height: 5, borderRadius: '50%',
                              background: active ? '#C49A6C' : 'rgba(255,255,255,0.25)',
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
              className="hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-full text-[11px] lg:text-[12px] font-bold tracking-wider uppercase text-white shadow-sm hover:shadow-md transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, ${C.primary} 0%, ${C.accent} 100%)`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Trade Enquiry
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-xl border transition-all"
              style={{
                color: C.soil,
                borderColor: C.border,
                background: C.sage,
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
            style={{ background: '#FAF6F1', fontFamily: "'DM Sans', sans-serif" }}
          >
            {/* Drawer header */}
            <div style={{ background: 'linear-gradient(135deg, #4A1942, #2E1038)', padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontStyle: 'normal', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                  THREADORA
                </p>
                <p style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C49A6C', margin: 0, marginTop: 2, fontWeight: 600 }}>
                  Textile Retail
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.2)',
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
                        background: active ? 'rgba(74, 25, 66, 0.06)' : C.sand,
                        borderColor: active ? C.primary : C.border,
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
                      background: C.sand,
                      borderColor: isDropdownActive() ? C.primary : C.border,
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
                                background: active ? 'rgba(74, 25, 66, 0.05)' : C.sand,
                                borderColor: active ? C.primary : C.border,
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
                  className="flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider text-white"
                  style={{ background: 'linear-gradient(135deg, #4A1942, #8B5E3C)' }}
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
