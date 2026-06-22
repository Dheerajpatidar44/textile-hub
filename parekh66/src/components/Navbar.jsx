import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  Gavel,
  FileText,
  BookOpen,
  ClipboardList,
  Briefcase,
  Star,
  Image as ImageIcon,
  HelpCircle,
  Home as HomeIcon,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const C = {
  primary: '#6B2D3E',
  primaryLight: '#8B4455',
  primaryDark: '#4A1E2B',
  accent: '#C4706A',
  accentLight: '#E8C4B8',
  bg: '#F8F0EC',
  border: '#E0C8C0',
  stone: '#8A5D65',
  card: '#FDFAF8',
  navBg: 'rgba(255,255,255,0.96)',
};

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null); // 'pages' | null

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Main nav items — keeping existing names as requested
  const mainNavItems = [
    { name: 'HOME', path: '/', icon: HomeIcon },
    { name: 'ABOUT US', path: '/about' },
    { name: 'CONTACT US', path: '/contact' },
    { name: 'PRODUCTS', path: '/products' },
    { name: 'OUR RETAIL MANAGEMENT', path: '/retail-management' },
  ];

  const dropdownNavItems = [
    { name: 'e-Quotation', path: '/e-quotation', desc: 'Request material quotations', icon: FileText },
    { name: 'e-Auction', path: '/e-auction', desc: 'Procure materials via bidding', icon: Gavel },
    { name: 'TRADE CIRCULAR', path: '/trade-circular', desc: 'Official trade notifications', icon: FileText },
    { name: 'BLOG PAGE', path: '/blog', desc: 'Read latest textile trends', icon: BookOpen },
    { name: 'NOTICE BOARD', path: '/notice-board', desc: 'Bulletins & corporate news', icon: ClipboardList },
    { name: 'CAREER PAGE', path: '/career', desc: 'Explore job opportunities', icon: Briefcase },
    { name: 'CUSTOMER REVIEW', path: '/reviews', desc: 'Reviews from retail partners', icon: Star },
    { name: 'MEDIA GALLERY', path: '/gallery', desc: 'View showrooms & events', icon: ImageIcon },
    { name: 'FAQ', path: '/faq', desc: 'Find quick support answers', icon: HelpCircle },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname === path) return true;
    return false;
  };

  const isDropdownActive = () => dropdownNavItems.some(item => isActive(item.path));

  return (
    <header
      className="w-full fixed top-0 left-0 z-50"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ── Main Navbar ── */}
      <div
        className="w-full transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(248,240,236,0.98)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          boxShadow: scrolled ? '0 2px 20px rgba(107,45,62,0.08)' : 'none',
          padding: scrolled ? '10px 0' : '16px 0',
        }}
      >
        <div
          className="max-w-[95rem] mx-auto flex items-center justify-between"
          style={{ padding: '0 24px' }}
        >

          {/* ── LEFT: Logo ── */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0 group" style={{ textDecoration: 'none' }}>
            <div style={{ width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="42" height="42" viewBox="0 0 100 100" fill="none" className="transition-transform group-hover:rotate-[30deg] duration-700">
                <circle cx="50" cy="50" r="44" stroke={C.accent} strokeWidth="1.5" fill={C.bg} />
                <path
                  d="M50 18 L54 40 L76 40 L59 54 L65 76 L50 63 L35 76 L41 54 L24 40 L46 40 Z"
                  stroke={C.primary} strokeWidth="2"
                  fill={C.accent} fillOpacity="0.25"
                  strokeLinejoin="round"
                />
                <circle cx="50" cy="50" r="5" fill={C.primary} />
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 19,
                  fontWeight: 700,
                  color: C.primary,
                  letterSpacing: '0.03em',
                  lineHeight: 1.1,
                  whiteSpace: 'nowrap',
                }}
              >
                PRAVAAH
              </span>
              <span
                style={{
                  fontSize: 9,
                  fontWeight: 600,
                  letterSpacing: '0.16em',
                  color: C.stone,
                  textTransform: 'uppercase',
                  marginTop: 2,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                TEXTILE HOUSE
              </span>
            </div>
          </Link>

          {/* ── CENTER: Floating Pill Navbar (Desktop) ── */}
          <nav
            className="hidden lg:flex items-center"
            style={{
              background: C.navBg,
              borderRadius: 50,
              padding: '6px 8px',
              boxShadow: '0 4px 24px rgba(107,45,62,0.10), 0 1px 4px rgba(107,45,62,0.06)',
              border: `1px solid rgba(224,200,192,0.6)`,
              gap: 2,
            }}
          >
            {/* Home with icon */}
            <Link
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 5,
                padding: '7px 14px',
                borderRadius: 50,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.06em',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                background: isActive('/') ? C.primary : 'transparent',
                color: isActive('/') ? '#fff' : C.stone,
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { if (!isActive('/')) { e.currentTarget.style.background = C.bg; e.currentTarget.style.color = C.primary; } }}
              onMouseLeave={e => { if (!isActive('/')) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = C.stone; } }}
            >
              <HomeIcon size={12} />
              HOME
            </Link>

            {/* Other main nav items */}
            {mainNavItems.slice(1).map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '7px 14px',
                    borderRadius: 50,
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    background: active ? C.primary : 'transparent',
                    color: active ? '#fff' : C.stone,
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={e => { if (!active) { e.currentTarget.style.background = C.bg; e.currentTarget.style.color = C.primary; } }}
                  onMouseLeave={e => { if (!active) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = C.stone; } }}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* PAGES dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen('pages')}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  padding: '7px 14px',
                  borderRadius: 50,
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  background: isDropdownActive() ? C.primary : 'transparent',
                  color: isDropdownActive() ? '#fff' : C.stone,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                  fontFamily: "'DM Sans', sans-serif",
                }}
                onMouseEnter={e => { if (!isDropdownActive()) { e.currentTarget.style.background = C.bg; e.currentTarget.style.color = C.primary; } }}
                onMouseLeave={e => { if (!isDropdownActive()) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = C.stone; } }}
              >
                PAGES
                <ChevronDown
                  size={11}
                  style={{
                    transition: 'transform 0.2s',
                    transform: dropdownOpen === 'pages' ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </button>

              {/* Dropdown Panel */}
              <AnimatePresence>
                {dropdownOpen === 'pages' && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 12px)',
                      right: 0,
                      left: 'auto',
                      transform: 'none',
                      width: 580,
                      background: 'rgba(253,250,248,0.98)',
                      borderRadius: 20,
                      boxShadow: '0 20px 60px rgba(107,45,62,0.14), 0 4px 16px rgba(107,45,62,0.06)',
                      border: `1px solid ${C.border}`,
                      backdropFilter: 'blur(16px)',
                      overflow: 'hidden',
                      zIndex: 999,
                    }}
                  >
                    {/* Top accent */}
                    <div style={{ height: 3, background: `linear-gradient(90deg, ${C.primaryDark}, ${C.accent}, ${C.primaryDark})` }} />
                    <div style={{ padding: '16px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
                      {dropdownNavItems.map((item) => {
                        const IconComp = item.icon;
                        const active = isActive(item.path);
                        return (
                          <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => setDropdownOpen(null)}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 10,
                              padding: '10px 12px',
                              borderRadius: 12,
                              textDecoration: 'none',
                              background: active ? `rgba(196,112,106,0.1)` : 'transparent',
                              transition: 'background 0.15s ease',
                            }}
                            onMouseEnter={e => e.currentTarget.style.background = `rgba(196,112,106,0.08)`}
                            onMouseLeave={e => e.currentTarget.style.background = active ? `rgba(196,112,106,0.1)` : 'transparent'}
                          >
                            <div style={{
                              width: 32, height: 32, borderRadius: 10,
                              background: active ? C.accent : `rgba(196,112,106,0.08)`,
                              border: `1px solid ${active ? C.accent : C.border}`,
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              flexShrink: 0,
                              color: active ? '#fff' : C.primary,
                            }}>
                              <IconComp size={13} />
                            </div>
                            <span style={{
                              fontSize: 11.5,
                              fontWeight: 700,
                              color: active ? C.primary : C.stone,
                              letterSpacing: '0.04em',
                              fontFamily: "'DM Sans', sans-serif",
                            }}>
                              {item.name.toLowerCase().startsWith('e-')
                                ? <><span style={{ textTransform: 'lowercase' }}>e</span>{item.name.slice(1).toUpperCase()}</>
                                : item.name}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* ── RIGHT: E-Quotation + Hamburger (Desktop) ── */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              to="/trade-enquiry"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '9px 20px',
                borderRadius: 50,
                background: C.primary,
                color: '#fff',
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.08em',
                textDecoration: 'none',
                textTransform: 'uppercase',
                transition: 'all 0.25s ease',
                boxShadow: '0 4px 16px rgba(107,45,62,0.25)',
                whiteSpace: 'nowrap',
                fontFamily: "'DM Sans', sans-serif",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = C.accent; e.currentTarget.style.boxShadow = '0 6px 20px rgba(196,112,106,0.35)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = C.primary; e.currentTarget.style.boxShadow = '0 4px 16px rgba(107,45,62,0.25)'; }}
            >
              Trade Enquiry
              <span style={{ fontSize: 14, lineHeight: 1 }}>→</span>
            </Link>
          </div>

          {/* Mobile right */}
          <div className="flex items-center gap-2 lg:hidden shrink-0">
            <Link
              to="/trade-enquiry"
              style={{
                padding: '7px 14px',
                borderRadius: 50,
                background: C.primary,
                color: '#fff',
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '0.08em',
                textDecoration: 'none',
                textTransform: 'uppercase',
              }}
            >
              Trade Enquiry
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{
                width: 36, height: 36, borderRadius: '50%',
                background: C.primaryDark, border: 'none',
                cursor: 'pointer', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                color: '#fff',
              }}
              aria-label="Menu"
            >
              {isOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>

        </div>
      </div>

      {/* ── Mobile / Full-Screen Menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.25, ease: 'easeInOut' }}
            style={{
              position: 'fixed',
              top: 0, left: 0, right: 0,
              height: '100dvh',
              background: C.bg,
              zIndex: 40,
              display: 'flex',
              flexDirection: 'column',
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {/* Header */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '20px 24px',
              borderBottom: `1px solid ${C.border}`,
              flexShrink: 0,
            }}>
              <div className="flex flex-col">
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: C.primary }}>
                  Pravaah Fabrics
                </span>
                <span style={{ fontSize: 8, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.stone, marginTop: 2 }}>
                  Premium Textile House
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: `rgba(196,112,106,0.1)`, border: 'none',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: C.primary, cursor: 'pointer',
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Links */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '16px 24px 100px' }}>
              {[...mainNavItems, ...dropdownNavItems].map((item) => {
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path + item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '13px 16px',
                      borderRadius: 12,
                      fontSize: 13,
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      color: active ? C.primary : C.stone,
                      background: active ? `rgba(196,112,106,0.1)` : 'transparent',
                      textDecoration: 'none',
                      marginBottom: 4,
                      transition: 'all 0.15s ease',
                    }}
                  >
                    {item.name.toLowerCase().startsWith('e-')
                      ? <><span style={{ textTransform: 'lowercase' }}>e</span>{item.name.slice(1)}</>
                      : item.name}
                  </Link>
                );
              })}
            </div>

            {/* Bottom social */}
            <div style={{
              padding: '16px 24px',
              borderTop: `1px solid ${C.border}`,
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 12,
            }}>
              {[
                { n: 'Facebook', svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg> },
                { n: 'Instagram', svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg> },
                { n: 'Pinterest', svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.162 0 7.397 2.967 7.397 6.93 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" /></svg> },
              ].map(s => (
                <a key={s.n} href="#" aria-label={s.n}
                  style={{ width: 36, height: 36, borderRadius: '50%', border: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.stone, textDecoration: 'none' }}
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
