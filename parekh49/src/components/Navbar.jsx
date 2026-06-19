import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const C = {
  primary: '#1b3252',
  primaryDark: '#0e192c',
  primaryLight: '#243b61',
  accent: '#b08e5b',
  accentLight: '#ebdcb9',
  bg: '#fdfbf7',
  sand: '#f2e8dc',
  border: '#e6dfd5',
  soil: '#1a2538',
  stone: '#63738a',
};

// All nav links displayed directly in navbar
const mainNavItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'Product', path: '/products' },
  { name: 'Our Retail Management', path: '/retail-management' },
  { name: 'e-Quotation', path: '/e-quotation' },
  { name: 'e-Auction', path: '/e-auction' },
  { name: 'Trade Circular', path: '/trade-circular' },
  { name: 'Blog', path: '/blog' },
];

// Overflow items go into "More" dropdown
const moreNavItems = [
  { name: 'Notice Board', path: '/notice-board' },
  { name: 'Career Page', path: '/career' },
  { name: 'Customer Review', path: '/reviews' },
  { name: 'Business Media Gallery', path: '/gallery' },
  { name: 'FAQ', path: '/faq' },
];

// All items for mobile drawer
const allNavItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'Product', path: '/products' },
  { name: 'Our Retail Management', path: '/retail-management' },
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

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const isMoreActive = () => moreNavItems.some(item => isActive(item.path));

  return (
    <header
      className="w-full fixed top-0 left-0 z-50"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {/* ── Row 1: Brand Logo + Trade Enquiry ── */}
      <div style={{
        background: '#ffffff',
        borderBottom: `1px solid ${C.border}`,
        padding: '10px 0',
        transition: 'all 0.3s',
      }}>
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0" style={{ textDecoration: 'none' }}>
            <div style={{
              width: 42, height: 42,
              borderRadius: 10,
              background: `linear-gradient(135deg, ${C.primary} 0%, ${C.primaryLight} 100%)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(27,50,82,0.18)',
              flexShrink: 0,
            }}>
              <svg width="24" height="24" viewBox="0 0 26 26" fill="none">
                <path d="M13 3 L22 9 L22 17 L13 23 L4 17 L4 9 Z" stroke="#b08e5b" strokeWidth="1.5" fill="rgba(176,142,91,0.15)"/>
                <path d="M13 7 L18 10.5 L18 15.5 L13 19 L8 15.5 L8 10.5 Z" stroke="#b08e5b" strokeWidth="1" fill="rgba(176,142,91,0.25)"/>
                <circle cx="13" cy="13" r="2.5" fill="#b08e5b"/>
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 17, fontWeight: 700,
                letterSpacing: '0.04em', color: C.soil, lineHeight: 1.1,
              }}>
                RUHANI WEAVES
              </span>
              <span style={{
                fontSize: 8, letterSpacing: '0.28em',
                fontWeight: 600, textTransform: 'uppercase',
                color: C.accent, marginTop: 2,
              }}>
                TEXTILE MALL
              </span>
            </div>
          </Link>

          {/* Right side: Trade Enquiry + Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Trade Enquiry button — desktop only */}
            <Link
              to="/trade-enquiry"
              className="hidden md:inline-flex items-center gap-2"
              style={{
                padding: '9px 20px',
                background: C.accent,
                color: '#ffffff',
                borderRadius: 8,
                fontSize: 12, fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                border: `2px solid ${C.accent}`,
                transition: 'all 0.25s',
                boxShadow: '0 3px 12px rgba(176,142,91,0.3)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = C.primary;
                e.currentTarget.style.borderColor = C.primary;
                e.currentTarget.style.boxShadow = '0 3px 12px rgba(27,50,82,0.25)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = C.accent;
                e.currentTarget.style.borderColor = C.accent;
                e.currentTarget.style.boxShadow = '0 3px 12px rgba(176,142,91,0.3)';
              }}
            >
              <ArrowRight size={13} />
              Trade Enquiry
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg border transition-all"
              style={{
                color: C.primary,
                borderColor: C.border,
                background: C.sand,
              }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Row 2: Floating Rounded Navigation Bar Row ── */}
      <div
        className="w-full hidden md:block transition-all duration-300"
        style={{
          background: 'transparent',
          padding: scrolled ? '0px 24px 6px 24px' : '0px 24px 10px 24px',
        }}
      >
        <div 
          className="max-w-[85rem] mx-auto px-6 flex items-center justify-center transition-all duration-300" 
          style={{ 
            minHeight: 52,
            background: scrolled ? 'rgba(27, 50, 82, 0.97)' : C.primary,
            backdropFilter: scrolled ? 'blur(12px)' : 'none',
            borderRadius: '9999px',
            boxShadow: '0 6px 20px rgba(27,50,82,0.15)',
            border: '1.5px solid rgba(176,142,91,0.2)',
          }}
        >

          {/* Main nav links — centered */}
          <nav className="flex items-center justify-center flex-wrap" style={{ overflow: 'visible' }}>
            {mainNavItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="shrink-0 flex items-center px-3 py-3 text-[13.5px] font-semibold tracking-wide transition-all duration-200 whitespace-nowrap"
                  style={{
                    color: active ? '#ffffff' : 'rgba(255,255,255,0.7)',
                    borderBottom: active ? '2px solid #b08e5b' : '2px solid transparent',
                    textDecoration: 'none',
                    lineHeight: 1,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#ffffff'; }}
                  onMouseLeave={e => { if (!active) e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* ── "More" Dropdown for overflow items ── */}
            <div
              className="relative shrink-0"
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
            >
              <button
                className="flex items-center gap-1 px-3 py-3 text-[13.5px] font-semibold tracking-wide transition-all duration-200 whitespace-nowrap cursor-pointer"
                style={{
                  color: isMoreActive() ? '#ffffff' : 'rgba(255,255,255,0.7)',
                  borderBottom: isMoreActive() ? '2px solid #b08e5b' : '2px solid transparent',
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                }}
                onClick={() => setMoreOpen(!moreOpen)}
              >
                <span>More</span>
                <ChevronDown size={11} className={`transition-transform duration-200 ${moreOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 4, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 2px)',
                      left: 0,
                      minWidth: 220,
                      background: 'linear-gradient(180deg, #1b3252 0%, #0e192c 100%)',
                      border: '1px solid rgba(176,142,91,0.25)',
                      borderRadius: 12,
                      boxShadow: '0 24px 60px rgba(0,0,0,0.4)',
                      zIndex: 9999,
                      overflow: 'visible',
                    }}
                  >
                    <div style={{ padding: '6px 0' }}>
                      {moreNavItems.map((item) => {
                        const active = isActive(item.path);
                        return (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setMoreOpen(false)}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 10,
                              padding: '10px 18px',
                              fontSize: 12.5,
                              fontWeight: 500,
                              color: active ? '#ffffff' : 'rgba(255,255,255,0.75)',
                              background: active ? 'rgba(176,142,91,0.18)' : 'transparent',
                              borderLeft: active ? '3px solid #b08e5b' : '3px solid transparent',
                              textDecoration: 'none',
                              transition: 'all 0.18s',
                              letterSpacing: '0.02em',
                            }}
                            onMouseEnter={e => {
                              e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                              e.currentTarget.style.color = '#ffffff';
                              e.currentTarget.style.borderLeftColor = '#b08e5b';
                            }}
                            onMouseLeave={e => {
                              e.currentTarget.style.background = active ? 'rgba(176,142,91,0.18)' : 'transparent';
                              e.currentTarget.style.color = active ? '#ffffff' : 'rgba(255,255,255,0.75)';
                              e.currentTarget.style.borderLeftColor = active ? '#b08e5b' : 'transparent';
                            }}
                          >
                            <span style={{
                              width: 5, height: 5, borderRadius: '50%',
                              background: active ? '#b08e5b' : 'rgba(255,255,255,0.3)',
                              flexShrink: 0,
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
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-0 top-0 z-40 flex flex-col"
            style={{ background: '#fdfbf7', fontFamily: "'Outfit', sans-serif" }}
          >
            {/* Drawer header */}
            <div style={{
              background: `linear-gradient(135deg, ${C.primary}, ${C.primaryDark})`,
              padding: '16px 20px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <div>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: '#ffffff', margin: 0 }}>
                  RUHANI WEAVES
                </p>
                <p style={{ fontSize: 9, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#b08e5b', margin: 0, marginTop: 2, fontWeight: 600 }}>
                  TEXTILE MALL
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.12)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#ffffff', cursor: 'pointer',
                }}
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-5 pb-28 space-y-2">
              <div className="grid grid-cols-1 gap-1.5">
                {allNavItems.map((item) => {
                  const active = isActive(item.path);
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between px-4 py-3 rounded-xl text-[13px] font-semibold tracking-wide border transition-all"
                      style={{
                        background: active ? 'rgba(27,50,82,0.07)' : C.sand,
                        borderColor: active ? C.primary : C.border,
                        color: active ? C.primary : C.soil,
                        textDecoration: 'none',
                      }}
                    >
                      <span>{item.name}</span>
                      {active && <span className="w-2 h-2 rounded-full" style={{ background: C.accent }} />}
                    </Link>
                  );
                })}
              </div>

              <div className="pt-3">
                <Link
                  to="/trade-enquiry"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider text-white"
                  style={{ background: `linear-gradient(135deg, ${C.primary}, ${C.accent})`, textDecoration: 'none' }}
                >
                  <ArrowRight size={15} /> Trade Enquiry
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
