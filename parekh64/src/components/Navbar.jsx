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
  HelpCircle
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const C = {
  primary: '#5E3B43',       // Burgundy
  primaryLight: '#8C5E6B',  // Medium Burgundy
  primaryDark: '#3B2329',   // Deep Burgundy
  accent: '#BD9399',        // Pastel Rose
  gold: '#D4B26F',          // Champagne Gold
  bg: '#FAF6F6',            // Background
  border: '#EFE6E7',        // Soft Rose Gray Border
  stone: '#6E6466',         // Muted gray-rose text
};

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    onScroll();
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
    { name: 'BUSINESS MEDIA GALLERY', path: '/gallery', desc: 'View showrooms & events', icon: ImageIcon },
    { name: 'FAQ', path: '/faq', desc: 'Find quick support answers', icon: HelpCircle },
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
      {/* ── Top Notification Bar ── */}
      <div 
        className="w-full py-1.5 text-white flex justify-between items-center px-4 sm:px-8 lg:px-16"
        style={{ background: C.primary, fontSize: '11px', fontWeight: 600, letterSpacing: '0.05em' }}
      >
        <div className="hidden sm:block text-left opacity-90">
          India's Most Trusted Textile Retail Group
        </div>
        <div className="flex items-center gap-4 ml-auto sm:ml-0">
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
              className="opacity-90 hover:opacity-100 text-white transition-opacity flex items-center justify-center"
            >
              {social.svg}
            </a>
          ))}
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <div
        className="w-full transition-all duration-300 py-2.5 lg:py-3.5"
        style={{
          background: scrolled ? 'rgba(255, 255, 255, 0.95)' : '#FFFFFF',
          borderBottom: scrolled ? `1px solid ${C.border}` : `1px solid rgba(94, 59, 67, 0.06)`,
          boxShadow: scrolled ? '0 10px 30px rgba(94, 59, 67, 0.05)' : 'none',
          backdropFilter: scrolled ? 'blur(10px)' : 'none'
        }}
      >
        <div className="max-w-[95rem] mx-auto px-4 sm:px-8 lg:pl-6 lg:pr-14 flex justify-between items-center">

          {/* Logo Brand: Navya Weaves */}
          <Link to="/" className="flex items-center gap-3 group shrink-0 text-left">
            <div style={{
              width: 38, height: 38,
              display: 'flex', alignItems: 'center', justify: 'center',
            }}>
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke={C.primary} strokeWidth="1.5">
                <circle cx="12" cy="12" r="9" stroke={C.primary} strokeWidth="1.5" />
                <path d="M12 2v20M2 12h20M5 5l14 14M5 19L14 10" stroke={C.gold} strokeWidth="1.5" />
                <circle cx="12" cy="12" r="4" fill={C.primary} />
              </svg>
            </div>
            <div className="flex flex-col">
              <span
                className="text-[20px] font-bold leading-none tracking-[0.05em] font-serif uppercase whitespace-nowrap"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: C.primary }}
              >
                Navya Weaves
              </span>
              <span
                className="text-[8.5px] font-semibold tracking-[0.18em] uppercase mt-0.5 whitespace-nowrap"
                style={{ color: C.stone }}
              >
                Premium Textile House
              </span>
            </div>
          </Link>

          {/* Center Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-x-1">
            {directNavItems.map((item) => {
              const active = isItemActive(item);
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className="px-1 mx-2 text-[12px] xl:text-[13.5px] font-bold tracking-widest transition-all duration-300 relative py-1 hover:text-[#D4B26F] whitespace-nowrap"
                  style={{
                    color: active ? C.primary : 'rgba(94, 59, 67, 0.8)',
                  }}
                >
                  {item.name}
                  <span 
                    className="absolute bottom-0 left-0 h-[2px] bg-[#D4B26F] transition-all duration-300"
                    style={{
                      width: active ? '100%' : '0%',
                    }}
                  />
                </Link>
              );
            })}

            {/* Pages Mega Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1.5 px-1 mx-2 text-[12px] xl:text-[13.5px] font-bold tracking-widest transition-all duration-300 cursor-pointer bg-transparent border-none py-1 hover:text-[#D4B26F] whitespace-nowrap"
                style={{
                  color: isDropdownActive() ? C.primary : 'rgba(94, 59, 67, 0.8)',
                }}
              >
                <span>PAGES</span>
                <ChevronDown size={12} className={`transition-transform duration-350 ${dropdownOpen ? 'rotate-180 text-[#D4B26F]' : ''}`} />
              </button>

              {/* 3-Column Mega Dropdown Menu */}
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute top-full right-[-80px] mt-4 w-[630px] shadow-2xl z-[999] rounded-[24px] p-5 border text-left overflow-hidden"
                    style={{
                      background: 'rgba(255, 255, 255, 0.97)',
                      borderColor: '#EFE6E7',
                      backdropFilter: 'blur(16px)',
                    }}
                  >
                    {/* Visual Gold accents */}
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#5E3B43] via-[#D4B26F] to-[#5E3B43]" />

                    <div className="grid grid-cols-3 gap-3">
                      {dropdownNavItems.map((item) => {
                        const IconComponent = item.icon;
                        const active = isItemActive(item);
                        return (
                          <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => setDropdownOpen(false)}
                            className="flex items-center gap-3 p-2.5 rounded-xl transition-all duration-300 group/item text-decoration-none"
                            style={{
                              background: active ? 'rgba(94, 59, 67, 0.04)' : 'transparent',
                            }}
                          >
                            {/* Icon Wrapper */}
                            <div 
                              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border transition-colors duration-300"
                              style={{
                                background: active ? '#5E3B43' : 'rgba(94, 59, 67, 0.03)',
                                borderColor: active ? '#5E3B43' : '#EFE6E7',
                                color: active ? '#FFFFFF' : C.primary
                              }}
                            >
                              <IconComponent size={14} className="group-hover/item:text-[#D4B26F] transition-colors" />
                            </div>

                            {/* Label */}
                            <span 
                              className="text-[12px] font-bold tracking-wider group-hover/item:text-[#D4B26F] transition-colors"
                              style={{ color: active ? C.primary : '#3B2329' }}
                            >
                              {item.name.toLowerCase().startsWith('e-') ? (
                                <>
                                  <span className="lowercase">e</span>-{item.name.slice(2).toUpperCase()}
                                </>
                              ) : (
                                item.name.toUpperCase()
                              )}
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

          {/* Right CTA Button (Desktop) */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <Link
              to="/trade-enquiry"
              className="px-6 py-2.5 text-[11px] font-bold tracking-widest text-white uppercase rounded-full transition-all duration-300 hover:shadow-md hover:bg-[#D4B26F]"
              style={{
                background: C.primary,
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
              style={{ background: C.primary }}
            >
              ENQUIRY
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 transition-all border-none bg-transparent cursor-pointer"
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
            className="lg:hidden fixed top-0 left-0 right-0 z-40 flex flex-col h-[100dvh]"
            style={{ 
              background: C.bg, 
              fontFamily: "'Outfit', sans-serif" 
            }}
          >
            {/* Drawer header (Fixed, no shrink) */}
            <div style={{ 
              flexShrink: 0, 
              padding: '20px 24px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              borderBottom: `1px solid ${C.border}` 
            }}>
              <div className="flex-grow flex flex-col text-left">
                <span
                  className="text-[17px] font-bold leading-none tracking-wide font-serif uppercase"
                  style={{ 
                    color: C.primary, 
                    fontFamily: "'Cormorant Garamond', serif" 
                  }}
                >
                  Navya Weaves
                </span>
                <span
                  className="text-[7.5px] font-semibold tracking-wider uppercase mt-1"
                  style={{ color: C.stone }}
                >
                  Premium Textile House
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  width: 36, height: 36,
                  background: 'rgba(94, 59, 67, 0.05)',
                  border: 'none',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: C.primary, 
                  cursor: 'pointer',
                  borderRadius: '50%',
                }}
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 min-h-0 overflow-y-auto px-6 py-6 pb-28 space-y-2" style={{ WebkitOverflowScrolling: 'touch' }}>
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
                        background: active ? 'rgba(94, 59, 67, 0.05)' : 'transparent',
                        color: active ? C.primaryLight : C.primary,
                      }}
                    >
                      <span>{item.name}</span>
                    </Link>
                  );
                })}

                {/* Mobile Pages Accordion */}
                <div className="w-full text-left">
                  <button
                    onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                    className="w-full flex items-center justify-between px-4 py-3.5 text-[13px] font-bold tracking-wider transition-all cursor-pointer border-none bg-transparent"
                    style={{
                      color: isDropdownActive() ? C.primaryLight : C.primary,
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
                                background: active ? 'rgba(94, 59, 67, 0.04)' : 'transparent',
                                color: active ? C.primaryLight : C.stone,
                              }}
                            >
                                <span>
                                  {item.name.toLowerCase().startsWith('e-') ? (
                                    <>
                                      <span className="lowercase">e</span>-{item.name.slice(2).toUpperCase()}
                                    </>
                                  ) : (
                                    item.name.toUpperCase()
                                  )}
                                </span>
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Mobile Socials (Fixed, no shrink) */}
            <div className="px-6 py-6 border-t flex items-center justify-center gap-4 bg-black/5" style={{ 
              flexShrink: 0,
              borderTop: `1px solid ${C.border}`
            }}>
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
                    borderColor: 'rgba(94, 59, 67, 0.2)',
                    background: 'transparent',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = C.gold;
                    e.currentTarget.style.color = C.gold;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(94, 59, 67, 0.2)';
                    e.currentTarget.style.color = C.primary;
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
