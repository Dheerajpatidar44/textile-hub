import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const C = {
  primary: '#FAF8F5',     // Cream bg
  primaryDark: '#231F20', // Dark Charcoal text/bg
  accent: '#A3704C',      // Warm Gold/Bronze
  bg: '#FAF8F5',
  sand: '#F4EDE4',
  border: '#EAE5DE',
  soil: '#231F20',
  stone: '#5B5653',
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
    { name: 'Products', path: '/products' },
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
      className="w-full fixed top-0 left-0 z-50 transition-all duration-300 shadow-sm"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ── 1. Top Banner Bar (Dark Charcoal) ── */}
      <div
        className="w-full py-2 bg-[#231F20] text-[#FAF8F5] border-b border-[rgba(255,255,255,0.06)]"
      >
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 flex justify-between items-center text-[11px] sm:text-[12px] font-medium tracking-wide">
          <span>India's Most Trusted Textile Retail Group</span>
          
          {/* Social Media Links (Right Side) */}
          <div className="flex items-center gap-3.5">
            {[
              { name: 'Facebook', svg: (<svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>), href: '#' },
              { name: 'Instagram', svg: (<svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>), href: '#' },
              { name: 'Pinterest', svg: (<svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.162 0 7.397 2.967 7.397 6.93 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>), href: '#' },
              { name: 'Twitter', svg: (<svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>), href: '#' },
              { name: 'LinkedIn', svg: (<svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>), href: '#' },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                aria-label={social.name}
                className="transition-all duration-200 hover:scale-115 flex items-center justify-center"
                style={{ color: '#FAF8F5', opacity: 0.75 }}
                onMouseEnter={e => { e.currentTarget.style.color = '#A3704C'; e.currentTarget.style.opacity = '1'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#FAF8F5'; e.currentTarget.style.opacity = '0.75'; }}
              >
                {social.svg}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── 2. Main Navbar (Cream Background) ── */}
      <div
        className="w-full transition-all duration-300 py-3.5"
        style={{
          background: scrolled ? 'rgba(250, 248, 245, 0.98)' : '#FAF8F5',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 flex justify-between items-center">

          {/* Logo Brand: LoomCraft India */}
          <Link to="/" className="flex items-center gap-2.5 group shrink-0 text-left relative transition-all duration-300">
            {/* Logo Icon */}
            <div style={{
              width: 32, height: 32,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="12" stroke="#A3704C" strokeWidth="1.5" fill="none"/>
                <path d="M14 4 C14 4, 22 10, 22 14 C22 18, 14 24, 14 24 C14 24, 6 18, 6 14 C6 10, 14 4, 14 4Z" fill="rgba(163,112,76,0.15)" stroke="#A3704C" strokeWidth="1"/>
                <circle cx="14" cy="14" r="3" fill="#A3704C"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span
                className="text-[17px] sm:text-[19px] font-bold leading-none tracking-wide text-[#231F20]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                LoomCraft India
              </span>
              <span className="text-[7.5px] tracking-[0.22em] font-semibold mt-1 uppercase text-[#A3704C]">
                Textiles of India
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
                  className="relative px-1 py-0.5 text-[11px] lg:text-[12px] font-bold tracking-wider uppercase transition-all duration-200 whitespace-nowrap shrink-0"
                  style={{ color: active ? '#A3704C' : '#231F20' }}
                >
                  {item.name}
                  {active && (
                    <div className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#A3704C] rounded-full" />
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
                className="flex items-center gap-1 px-3 py-1.5 text-[11px] lg:text-[12px] font-bold tracking-wider uppercase transition-all duration-200 whitespace-nowrap cursor-pointer rounded-md"
                style={{ color: '#231F20', background: 'rgba(163, 112, 76, 0.08)' }}
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
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-60 rounded-xl shadow-lg z-[999] text-left overflow-hidden bg-[#FAF8F5] border border-[#EAE5DE]"
                  >
                    <div style={{ padding: '6px 0' }}>
                      {dropdownNavItems.map((item) => {
                        const active = isItemActive(item);
                        return (
                          <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => setDropdownOpen(false)}
                            className="flex items-center gap-3 px-5 py-2.5 text-[12px] font-semibold transition-all duration-200"
                            style={{
                              color: active ? '#A3704C' : '#5B5653',
                              background: active ? '#F4EDE4' : 'transparent',
                              borderLeft: active ? '3px solid #A3704C' : '3px solid transparent',
                              textDecoration: 'none',
                            }}
                            onMouseEnter={e => {
                              e.currentTarget.style.background = '#F4EDE4';
                              e.currentTarget.style.color = '#A3704C';
                              e.currentTarget.style.borderLeftColor = '#A3704C';
                            }}
                            onMouseLeave={e => {
                              if (!active) {
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.color = '#5B5653';
                                e.currentTarget.style.borderLeftColor = 'transparent';
                              } else {
                                e.currentTarget.style.background = '#F4EDE4';
                                e.currentTarget.style.color = '#A3704C';
                                e.currentTarget.style.borderLeftColor = '#A3704C';
                              }
                            }}
                          >
                            <span style={{
                              width: 5, height: 5, borderRadius: '50%',
                              background: active ? '#A3704C' : 'rgba(163, 112, 76, 0.3)',
                              flexShrink: 0, display: 'inline-block',
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
              className="hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-full text-[11px] lg:text-[12px] font-bold tracking-wider uppercase transition-all duration-300"
              style={{
                background: '#231F20',
                color: '#FAF8F5',
                border: '1px solid #231F20',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.background = '#A3704C';
                e.currentTarget.style.borderColor = '#A3704C';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = '#231F20';
                e.currentTarget.style.borderColor = '#231F20';
              }}
            >
              Trade Enquiry
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-xl border transition-all"
              style={{
                color: '#231F20',
                borderColor: '#EAE5DE',
                background: 'rgba(35, 31, 32, 0.04)',
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
            transition={{ type: 'tween', duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden fixed inset-0 top-0 z-40 flex flex-col"
            style={{ background: '#FAF8F5', fontFamily: "'DM Sans', sans-serif" }}
          >
            {/* Drawer header */}
            <div style={{ background: '#231F20', padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontStyle: 'normal', fontWeight: 700, color: '#FAF8F5', margin: 0 }}>
                  LoomCraft India
                </p>
                <p style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#A3704C', margin: 0, marginTop: 2, fontWeight: 600 }}>
                  Textiles of India
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#FAF8F5', cursor: 'pointer',
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
                      className="flex items-center justify-between px-4 py-3 rounded-xl text-[12.5px] font-bold tracking-wide border transition-all uppercase"
                      style={{
                        background: active ? '#F4EDE4' : '#FAF8F5',
                        borderColor: active ? '#A3704C' : '#EAE5DE',
                        color: active ? '#A3704C' : '#231F20',
                      }}
                    >
                      <span>{item.name}</span>
                      {active && <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#A3704C' }} />}
                    </Link>
                  );
                })}

                {/* Mobile Pages Accordion */}
                <div className="w-full">
                  <button
                    onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-[12.5px] font-bold uppercase tracking-wide border transition-all cursor-pointer"
                    style={{
                      background: '#FAF8F5',
                      borderColor: isDropdownActive() ? '#A3704C' : '#EAE5DE',
                      color: isDropdownActive() ? '#A3704C' : '#231F20',
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
                        transition={{ duration: 0.22, ease: 'easeInOut' }}
                        className="overflow-hidden mt-1.5 space-y-1.5 pl-3"
                      >
                        {dropdownNavItems.map((item) => {
                          const active = isItemActive(item);
                          return (
                            <Link
                              key={item.name}
                              to={item.path}
                              onClick={() => { setIsOpen(false); setMobileResourcesOpen(false); }}
                              className="flex items-center justify-between px-4 py-2.5 rounded-xl text-[11.5px] font-bold uppercase tracking-wide border transition-all"
                              style={{
                                background: active ? '#F4EDE4' : '#FAF8F5',
                                borderColor: active ? '#A3704C' : '#EAE5DE',
                                color: active ? '#A3704C' : '#5B5653',
                              }}
                            >
                              <span>{item.name}</span>
                              {active && <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#A3704C' }} />}
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
                  className="flex items-center justify-center gap-2 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white"
                  style={{ background: '#A3704C' }}
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
