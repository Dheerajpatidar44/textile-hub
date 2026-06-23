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
  primary: '#3F5241',
  primaryLight: '#536755',
  primaryDark: '#2C3A2D',
  accent: '#BBA178',
  accentLight: '#FAF5EB',
  bg: '#FAF8F5',
  border: '#E3DAD0',
  stone: '#5A665B',
  card: '#ffffff',
  navBg: 'rgba(250,248,245,0.96)',
};

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null); // 'pages' | 'collections' | 'services' | null

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

  const mainNavItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'CONTACT US', path: '/contact' },
    { name: 'PRODUCTS', path: '/products' },
    { name: 'OUR RETAIL MANAGEMENT', path: '/retail-management' },
  ];

  // Specific categoric dropdown options
  const collectionsDropdownItems = [
    { name: 'Sarees', path: '/products?category=Sarees' },
    { name: 'Leggings', path: '/products?category=Leggings' },
    { name: 'Kurtis', path: '/products?category=Kurtis' },
    { name: 'Dress Suits', path: '/products?category=Dress Suits' },
    { name: 'Bedsheets & Linen', path: '/products?category=Bedsheets & Linen' },
    { name: 'Hosiery Items', path: '/products?category=Hosiery Items' },
  ];

  const tradeServicesItems = [
    { name: 'e-Quotation', path: '/e-quotation', desc: 'Request material quotations', icon: FileText },
    { name: 'e-Auction', path: '/e-auction', desc: 'Procure materials via bidding', icon: Gavel },
    { name: 'TRADE CIRCULAR', path: '/trade-circular', desc: 'Official trade notifications', icon: FileText },
    { name: 'RETAIL MANAGEMENT', path: '/retail-management', desc: 'Store & retail operations', icon: ClipboardList },
  ];

  // Remaining pages go into a 'More Pages' style logic or we keep the list consistent
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

  return (
    <header
      className="w-full fixed top-0 left-0 z-50"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {/* ── Main Navbar ── */}
      <div
        className="w-full transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(250,248,245,0.98)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          boxShadow: scrolled ? '0 2px 20px rgba(6,44,34,0.06)' : 'none',
          padding: scrolled ? '0' : '0',
        }}
      >
        <div
          className="max-w-[95rem] mx-auto flex items-center justify-between"
          style={{ padding: '0 24px' }}
        >
          {/* ── LEFT: Logo Banner with custom background shape ── */}
          <div style={{
            background: C.primaryDark,
            padding: scrolled ? '12px 32px 12px 24px' : '20px 40px 20px 24px',
            borderRadius: '0 0 100px 0',
            marginLeft: '-24px',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 20px rgba(6,44,34,0.15)',
          }}>
            <Link to="/" className="flex items-center gap-2.5 shrink-0 group" style={{ textDecoration: 'none' }}>
              <div style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.08)', borderRadius: '50%' }}>
                <svg width="24" height="24" viewBox="0 0 100 100" fill="none" className="transition-transform group-hover:rotate-[30deg] duration-700">
                  <circle cx="50" cy="50" r="44" stroke={C.accent} strokeWidth="2.5" fill="none" />
                  <path
                    d="M50 18 L54 40 L76 40 L59 54 L65 76 L50 63 L35 76 L41 54 L24 40 L46 40 Z"
                    stroke={C.accent} strokeWidth="3"
                    fill={C.accent} fillOpacity="0.25"
                    strokeLinejoin="round"
                  />
                  <circle cx="50" cy="50" r="6" fill={C.accent} />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 21,
                    fontWeight: 700,
                    color: '#ffffff',
                    letterSpacing: '0.04em',
                    lineHeight: 1.1,
                    whiteSpace: 'nowrap',
                  }}
                >
                  ALANKRIT
                </span>
                <span
                  style={{
                    fontSize: 8.5,
                    fontWeight: 600,
                    letterSpacing: '0.22em',
                    color: C.accent,
                    textTransform: 'uppercase',
                    marginTop: 2,
                    fontFamily: "'Outfit', sans-serif",
                  }}
                >
                  THREADS
                </span>
              </div>
            </Link>
          </div>

          {/* ── CENTER: Floating Pill Navbar ── */}
          <nav
            className="hidden lg:flex items-center"
            style={{
              background: C.navBg,
              borderRadius: 50,
              padding: '6px 8px',
              boxShadow: '0 8px 30px rgba(11,51,41,0.06), 0 2px 8px rgba(11,51,41,0.04)',
              border: `1px solid rgba(234,218,204,0.8)`,
              gap: 2,
            }}
          >
            {/* C            {/* HOME */}
            <Link
              to="/"
              style={{
                padding: '10px 24px',
                borderRadius: 50,
                fontSize: 11.5,
                fontWeight: 700,
                letterSpacing: '0.08em',
                textDecoration: 'none',
                background: isActive('/') ? C.primary : 'transparent',
                color: isActive('/') ? '#fff' : C.stone,
                transition: 'all 0.25s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { if (!isActive('/')) { e.currentTarget.style.color = C.accent; } }}
              onMouseLeave={e => { if (!isActive('/')) { e.currentTarget.style.color = C.stone; } }}
            >
              HOME
            </Link>

            {/* ABOUT US */}
            <Link
              to="/about"
              style={{
                padding: '10px 24px',
                borderRadius: 50,
                fontSize: 11.5,
                fontWeight: 700,
                letterSpacing: '0.08em',
                textDecoration: 'none',
                background: isActive('/about') ? C.primary : 'transparent',
                color: isActive('/about') ? '#fff' : C.stone,
                transition: 'all 0.25s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { if (!isActive('/about')) { e.currentTarget.style.color = C.accent; } }}
              onMouseLeave={e => { if (!isActive('/about')) { e.currentTarget.style.color = C.stone; } }}
            >
              ABOUT US
            </Link>

            {/* CONTACT US */}
            <Link
              to="/contact"
              style={{
                padding: '10px 24px',
                borderRadius: 50,
                fontSize: 11.5,
                fontWeight: 700,
                letterSpacing: '0.08em',
                textDecoration: 'none',
                background: isActive('/contact') ? C.primary : 'transparent',
                color: isActive('/contact') ? '#fff' : C.stone,
                transition: 'all 0.25s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { if (!isActive('/contact')) { e.currentTarget.style.color = C.accent; } }}
              onMouseLeave={e => { if (!isActive('/contact')) { e.currentTarget.style.color = C.stone; } }}
            >
              CONTACT US
            </Link>

            {/* PRODUCTS */}
            <Link
              to="/products"
              style={{
                padding: '10px 24px',
                borderRadius: 50,
                fontSize: 11.5,
                fontWeight: 700,
                letterSpacing: '0.08em',
                textDecoration: 'none',
                background: isActive('/products') ? C.primary : 'transparent',
                color: isActive('/products') ? '#fff' : C.stone,
                transition: 'all 0.25s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { if (!isActive('/products')) { e.currentTarget.style.color = C.accent; } }}
              onMouseLeave={e => { if (!isActive('/products')) { e.currentTarget.style.color = C.stone; } }}
            >
              PRODUCTS
            </Link>

            {/* OUR RETAIL MANAGEMENT */}
            <Link
              to="/retail-management"
              style={{
                padding: '10px 24px',
                borderRadius: 50,
                fontSize: 11.5,
                fontWeight: 700,
                letterSpacing: '0.08em',
                textDecoration: 'none',
                background: isActive('/retail-management') ? C.primary : 'transparent',
                color: isActive('/retail-management') ? '#fff' : C.stone,
                transition: 'all 0.25s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { if (!isActive('/retail-management')) { e.currentTarget.style.color = C.accent; } }}
              onMouseLeave={e => { if (!isActive('/retail-management')) { e.currentTarget.style.color = C.stone; } }}
            >
              OUR RETAIL MANAGEMENT
            </Link>

            {/* PAGES dropdown (remaining subpages) */}
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
                  padding: '10px 24px',
                  borderRadius: 50,
                  fontSize: 11.5,
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  background: 'transparent',
                  color: C.stone,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  whiteSpace: 'nowrap',
                  fontFamily: "'Outfit', sans-serif",
                }}
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
                      width: 240,
                      background: 'rgba(255,255,255,0.98)',
                      borderRadius: 16,
                      boxShadow: '0 16px 40px rgba(11,51,41,0.12)',
                      border: `1px solid ${C.border}`,
                      backdropFilter: 'blur(16px)',
                      overflow: 'hidden',
                      zIndex: 999,
                      padding: '8px',
                    }}
                  >
                    {dropdownNavItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setDropdownOpen(null)}
                        style={{
                          display: 'block',
                          padding: '10px 14px',
                          borderRadius: 10,
                          textDecoration: 'none',
                          fontSize: 12,
                          fontWeight: 600,
                          color: C.stone,
                          transition: 'all 0.15s ease',
                          textAlign: 'left',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = C.accentLight; e.currentTarget.style.color = C.primary; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = C.stone; }}
                      >
                        {item.name.toLowerCase().startsWith('e-') ? (
                          <><span style={{ textTransform: 'lowercase' }}>e</span>-{item.name.slice(2)}</>
                        ) : (
                          item.name
                        )}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* ── RIGHT: TRADE ENQUIRY Button (Desktop) ── */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              to="/trade-enquiry"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: scrolled ? '10px 24px' : '12px 28px',
                borderRadius: 50,
                background: C.primary,
                color: '#fff',
                fontSize: 11.5,
                fontWeight: 700,
                letterSpacing: '0.08em',
                textDecoration: 'none',
                textTransform: 'uppercase',
                transition: 'all 0.25s ease',
                boxShadow: '0 4px 16px rgba(6,44,34,0.2)',
                whiteSpace: 'nowrap',
                fontFamily: "'Outfit', sans-serif",
                border: `1px solid ${C.accent}`,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = C.accent; e.currentTarget.style.boxShadow = '0 6px 20px rgba(188,163,116,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = C.primary; e.currentTarget.style.boxShadow = '0 4px 16px rgba(6,44,34,0.2)'; }}
            >
              TRADE ENQUIRY →
            </Link>
          </div>

          {/* Mobile Right */}
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
                border: `1.5px solid ${C.accent}`,
              }}
            >
              ENQUIRY
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

      {/* ── Mobile Menu ── */}
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
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            {/* Header */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyParagraph: 'space-between',
              padding: '20px 24px',
              borderBottom: `1px solid ${C.border}`,
              flexShrink: 0,
              justifyContent: 'space-between'
            }}>
              <div className="flex flex-col">
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 700, color: C.primary }}>
                  Alankrit Threads
                </span>
                <span style={{ fontSize: 8, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.stone, marginTop: 2 }}>
                  Premium Textile House
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: `rgba(188,163,116,0.1)`, border: 'none',
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
                      background: active ? `rgba(188,163,116,0.1)` : 'transparent',
                      textDecoration: 'none',
                      marginBottom: 4,
                      transition: 'all 0.15s ease',
                    }}
                  >
                    {item.name.toLowerCase().startsWith('e-') ? (
                      <><span style={{ textTransform: 'lowercase' }}>e</span>-{item.name.slice(2)}</>
                    ) : (
                      item.name
                    )}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
