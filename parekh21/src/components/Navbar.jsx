import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

const BRAND = {
  name: 'Ethnic Elegance',
  line1: 'Ethnic',
  line2: 'ELEGANCE',
};

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
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

  const mainLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'CONTACT US', path: '/contact' },
    { name: 'PRODUCT', path: '/products' },
    { name: 'OUR RETAIL MANAGEMENT', path: '/retail-management' },
    { name: 'e-QUOTATION', path: '/e-quotation' },
    { name: 'e-AUCTION', path: '/e-auction' },
    { name: 'TRADE CIRCULAR', path: '/trade-circular' },
  ];

  const moreLinks = [
    { name: 'BLOG PAGE', path: '/blog' },
    { name: 'NOTICE BOARD', path: '/notice-board' },
    { name: 'CAREER PAGE', path: '/career' },
    { name: 'CUSTOMER REVIEW', path: '/reviews' },
    { name: 'BUSINESS MEDIA GALLERY', path: '/gallery' },
    { name: 'FAQ PAGE', path: '/faq' },
  ];

  const isMoreActive = moreLinks.some(l => location.pathname === l.path);

  return (
    <header className="w-full sticky top-0 z-50 transition-all duration-300" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* ── BRAND HEADER ROW ── */}
      <div className={`w-full bg-white transition-all duration-300 ${scrolled ? 'shadow-sm py-1.5' : 'border-b py-2.5'}`}
        style={{ borderColor: '#E6D8C5' }}>
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo & Brand Name */}
          <Link to="/" className="flex items-center gap-2.5 group shrink-0">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center border group-hover:scale-105 transition-transform duration-300 shadow-sm"
              style={{ background: 'linear-gradient(135deg, #721C2B, #4A0E17)', borderColor: 'rgba(114,28,43,0.3)' }}
            >
              <svg viewBox="0 0 100 100" className="w-6 h-6 text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 35 C20 35, 50 20, 80 35 L80 55 C80 70, 65 80, 50 80 C35 80, 20 70, 20 55 Z"
                  stroke="currentColor" strokeWidth="4" fill="none" strokeLinejoin="round" />
                <path d="M30 45 L50 55 L70 45" stroke="#CDA75E" strokeWidth="3" strokeLinecap="round" />
                <circle cx="50" cy="55" r="4" fill="#CDA75E" />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xl font-black tracking-[0.06em] leading-none uppercase serif-title" style={{ color: '#330A10' }}>
                Ethnic Elegance
              </span>
              <span className="text-[8.5px] tracking-[0.28em] uppercase leading-tight font-extrabold mt-0.5" style={{ color: '#CDA75E' }}>
                textile hub
              </span>
            </div>
          </Link>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <Link
              to="/trade-enquiry"
              className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-md border"
              style={{ background: '#CDA75E', borderColor: '#CDA75E', color: '#330A10' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#FAF6F0'; e.currentTarget.style.color = '#721C2B'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#CDA75E'; e.currentTarget.style.color = '#330A10'; }}
            >
              <Phone size={12} />
              Trade Enquiry
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden focus:outline-none p-1.5 rounded-lg transition-colors"
              style={{ color: '#330A10' }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── NAVIGATION LINKS BAR (Desktop) ── */}
      <nav className="hidden md:block w-full shadow-md" style={{ background: '#721C2B', borderBottom: '1px solid rgba(74,14,23,0.3)' }}>
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-9">
            <div className="flex items-center gap-1">
              {mainLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="relative px-4 py-1.5 text-[11.5px] font-bold tracking-wider transition-colors duration-200"
                    style={{ color: isActive ? '#CDA75E' : 'rgba(255,255,255,0.92)' }}
                    onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = '#CDA75E'; }}
                    onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = 'rgba(255,255,255,0.92)'; }}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-4 right-4 h-[2.5px] rounded-full" style={{ background: '#CDA75E' }} />
                    )}
                  </Link>
                );
              })}

              {/* More Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsMoreOpen(true)}
                onMouseLeave={() => setIsMoreOpen(false)}
              >
                <button
                  className="relative flex items-center gap-1 px-4 py-1.5 text-[11.5px] font-bold tracking-wider transition-colors duration-200"
                  style={{ color: isMoreActive ? '#CDA75E' : 'rgba(255,255,255,0.92)' }}
                  onMouseEnter={e => { if (!isMoreActive) e.currentTarget.style.color = '#CDA75E'; }}
                  onMouseLeave={e => { if (!isMoreActive) e.currentTarget.style.color = 'rgba(255,255,255,0.92)'; }}
                >
                  MORE
                  <ChevronDown
                    size={12}
                    className={`transition-transform duration-200 ${isMoreOpen ? 'rotate-180' : ''}`}
                  />
                  {isMoreActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-[2.5px] rounded-full" style={{ background: '#CDA75E' }} />
                  )}
                </button>

                {isMoreOpen && (
                  <div className="absolute top-[30px] right-0 w-60 bg-white border rounded-xl shadow-xl overflow-hidden mt-0.5 py-1 z-50"
                    style={{ borderColor: '#E6D8C5' }}>
                    {moreLinks.map((link) => {
                      const isActive = location.pathname === link.path;
                      return (
                        <Link
                          key={link.name}
                          to={link.path}
                          className="block px-4 py-2.5 text-[12px] font-bold tracking-wider transition-all duration-150 text-left"
                          style={{
                            background: isActive ? '#FCEEF1' : 'transparent',
                            color: isActive ? '#721C2B' : '#330A10',
                          }}
                          onMouseEnter={e => { if (!isActive) { e.currentTarget.style.background = '#FAF6F0'; e.currentTarget.style.color = '#721C2B'; e.currentTarget.style.paddingLeft = '20px'; } }}
                          onMouseLeave={e => { if (!isActive) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#330A10'; e.currentTarget.style.paddingLeft = '16px'; } }}
                        >
                          {link.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* ── MOBILE DRAWER NAVIGATION ── */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[70px] bg-white z-40 flex flex-col" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          <div className="flex-1 overflow-y-auto px-4 py-6 pb-20 space-y-1 text-left">
            {mainLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between px-4 py-3.5 rounded-xl text-[13px] font-bold tracking-wider transition-all duration-200"
                  style={{
                    background: isActive ? '#FCEEF1' : 'transparent',
                    color: isActive ? '#721C2B' : '#330A10',
                    borderLeft: isActive ? '4px solid #721C2B' : '4px solid transparent',
                  }}
                >
                  <span>{link.name}</span>
                </Link>
              );
            })}

            <div className="h-px my-4" style={{ background: '#E6D8C5' }} />
            <p className="px-4 text-[9px] font-bold tracking-[0.2em] uppercase mb-2" style={{ color: '#7D6A6D' }}>More Pages</p>

            <div className="space-y-1 pl-2 text-left">
              {moreLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center px-4 py-3 rounded-lg text-[13px] font-bold tracking-wider transition-all duration-200"
                    style={{
                      background: isActive ? '#FAF6F0' : 'transparent',
                      color: isActive ? '#CDA75E' : '#7D6A6D',
                    }}
                  >
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </div>

            <div className="pt-6 px-4">
              <Link
                to="/trade-enquiry"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-md w-full"
                style={{ background: '#CDA75E', color: '#330A10' }}
              >
                <Phone size={13} />
                Trade Enquiry
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
