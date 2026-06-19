import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const C = {
  primary: '#5A1827',        // Royal Maroon/Burgundy
  primaryDark: '#3D0B15',
  primaryLight: '#7A2A39',
  accent: '#C2A478',         // Luxury Gold
  accentLight: '#E8DCC4',
  gold: '#C2A478',
  bg: '#FAF6F0',
  border: '#E6E1D8',
  stone: '#6B5C5D',
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
    { name: 'PRODUCT GALLERY', path: '/products' },
    { name: 'OUR RETAIL MANAGEMENT', path: '/retail-management' },
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
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {/* ── Top Announcement Bar ── */}
      <div 
        className="w-full py-2 px-4 sm:px-8 text-white text-[10px] sm:text-[11px] font-semibold tracking-wider flex justify-between items-center transition-all duration-300"
        style={{ background: C.primary, borderBottom: `1px solid ${C.primaryDark}` }}
      >
        <span>India's Most Trusted Textile Retail Mall</span>
        <div className="flex items-center gap-5">
          <span className="text-white/80 hover:text-white cursor-pointer transition-colors">Investor Relations</span>
          <div className="hidden sm:flex items-center gap-2 border-l border-white/20 pl-4">
            {[
              { name: 'Facebook', svg: (<svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>) },
              { name: 'Instagram', svg: (<svg className="w-3 h-3 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>) },
              { name: 'Pinterest', svg: (<svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.162 0 7.397 2.967 7.397 6.93 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" /></svg>) },
              { name: 'Twitter', svg: (<svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.986 0-.213 0-.427-.015-.64A9.936 9.936 0 0024 4.59z" /></svg>) },
            ].map((social) => (
              <a
                key={social.name}
                href="#"
                aria-label={social.name}
                className="w-5 h-5 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer text-white/70 hover:text-white hover:bg-white/10"
              >
                {social.svg}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <div
        className="w-full transition-all duration-300 py-3 lg:py-4"
        style={{
          background: scrolled ? 'rgba(255, 255, 255, 0.95)' : '#ffffff',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: `1px solid ${scrolled ? 'rgba(90, 24, 39, 0.08)' : 'rgba(90, 24, 39, 0.05)'}`,
          boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.02)' : 'none',
        }}
      >
        <div className="max-w-[95rem] mx-auto px-4 sm:px-8 lg:pl-6 lg:pr-14 flex justify-between items-center">

          {/* Logo Brand: The Textile Loft */}
          <Link to="/" className="flex items-center gap-3 group shrink-0 text-left">
            {/* Logo Icon */}
            <div style={{
              width: 38, height: 38,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke={C.gold} strokeWidth="1.5">
                <circle cx="12" cy="12" r="9" stroke={C.gold} strokeWidth="1.5" />
                <circle cx="12" cy="12" r="6" stroke={C.primary} strokeWidth="1.2" />
                <path d="M12 3v18M3 12h18" stroke={C.gold} strokeWidth="0.5" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span
                className="text-[20px] font-semibold leading-none tracking-[0.02em] font-serif"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: C.primary, fontWeight: 700 }}
              >
                The Textile Loft
              </span>
            </div>
          </Link>

          {/* Center Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-x-1 xl:gap-x-2">
            {directNavItems.map((item) => {
              const active = isItemActive(item);
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className="px-2 py-1 xl:px-3 xl:py-1.5 text-[10.5px] xl:text-[11px] font-bold tracking-widest transition-all duration-300 whitespace-nowrap shrink-0 rounded-full"
                  style={{ 
                    color: active ? '#ffffff' : C.primary,
                    background: active ? C.primary : 'transparent'
                  }}
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
                className="flex items-center gap-1 px-2 py-1 xl:px-3 xl:py-1.5 text-[10.5px] xl:text-[11px] font-bold tracking-widest transition-all duration-300 whitespace-nowrap cursor-pointer bg-transparent border-none rounded-full"
                style={{ 
                  color: isDropdownActive() ? '#ffffff' : C.primary,
                  background: isDropdownActive() ? C.primary : 'transparent'
                }}
              >
                <span>PAGES</span>
                <ChevronDown size={12} className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 shadow-2xl z-[999] text-left overflow-hidden rounded-[20px]"
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
                              background: active ? 'rgba(67, 83, 61, 0.05)' : 'transparent',
                              textDecoration: 'none',
                              letterSpacing: '0.05em',
                            }}
                            onMouseEnter={e => {
                              e.currentTarget.style.background = 'rgba(67, 83, 61, 0.05)';
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

          {/* Right CTA Button (Desktop) */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <Link
              to="/trade-enquiry"
              className="px-4 py-2 xl:px-6 xl:py-2.5 text-[10.5px] xl:text-[11px] font-bold tracking-widest text-white uppercase rounded-full transition-all duration-300 hover:shadow-md hover:scale-[1.02]"
              style={{
                background: C.accent,
              }}
            >
              TRADE ENQUIRY
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 shrink-0 lg:hidden">
            <Link
              to="/trade-enquiry"
              className="px-4 py-2 text-[10px] font-bold tracking-widest text-white uppercase rounded-full"
              style={{ background: C.accent }}
            >
              ENQUIRY
            </Link>
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
            style={{ background: '#ffffff', fontFamily: "'Outfit', sans-serif" }}
          >
            {/* Drawer header */}
             <div style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', justifycontent: 'space-between', borderBottom: `1px solid ${C.border}` }}>
              <div className="flex-1 flex flex-col text-left">
                <span
                  className="text-[19px] font-semibold leading-none tracking-wide font-serif"
                  style={{ color: C.primary, fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}
                >
                  The Textile Loft
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  width: 36, height: 36,
                  background: 'rgba(67, 83, 61, 0.1)',
                  border: 'none',
                  display: 'flex', alignItems: 'center', justifycontent: 'center',
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
            
            {/* Mobile Socials */}
            <div className="px-6 py-6 border-t border-gray-100 flex items-center justify-center gap-4 bg-gray-50/50">
              {[
                { name: 'Facebook', svg: (<svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>) },
                { name: 'Instagram', svg: (<svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>) },
                { name: 'Pinterest', svg: (<svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.162 0 7.397 2.967 7.397 6.93 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" /></svg>) },
                { name: 'Twitter', svg: (<svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.986 0-.213 0-.427-.015-.64A9.936 9.936 0 0024 4.59z" /></svg>) },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  aria-label={social.name}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 border cursor-pointer shrink-0"
                  style={{
                    color: C.primary,
                    borderColor: 'rgba(90, 24, 39, 0.15)',
                    background: 'transparent',
                  }}
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
