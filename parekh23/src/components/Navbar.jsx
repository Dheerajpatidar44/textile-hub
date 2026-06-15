import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

const BRAND = {
  name: 'Elite Threads',
  line1: 'Elite',
  line2: 'THREADS',
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
    { name: 'ABOUT', path: '/about' },
    { name: 'PRODUCT', path: '/products' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const moreLinks = [
    { name: 'RETAIL MANAGEMENT', path: '/retail-management' },
    { name: 'e-QUOTATION', path: '/e-quotation' },
    { name: 'e-AUCTION', path: '/e-auction' },
    { name: 'TRADE CIRCULAR', path: '/trade-circular' },
    { name: 'BLOG', path: '/blog' },
    { name: 'NOTICE BOARD', path: '/notice-board' },
    { name: 'CAREER', path: '/career' },
    { name: 'REVIEWS', path: '/reviews' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'FAQ', path: '/faq' },
  ];

  const isMoreActive = moreLinks.some(l => location.pathname === l.path);

  return (
    <header className="w-full sticky top-0 z-50 transition-all duration-300" style={{ fontFamily: "'Outfit', sans-serif" }}>

      {/* ── SINGLE NAVBAR ROW ── */}
      <div className={`w-full bg-[#FAF6F0] transition-all duration-300 ${scrolled ? 'shadow-md py-2' : 'border-b py-4'}`}
        style={{ borderColor: '#E6D8C5' }}>
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center">
          
          {/* Logo & Brand Name */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center border group-hover:scale-105 transition-transform duration-300 shadow-sm"
              style={{ background: 'linear-gradient(135deg, #8B5A2B, #5A3A1F)', borderColor: 'rgba(139,90,43,0.3)' }}
            >
              <svg viewBox="0 0 100 100" className="w-6 h-6 text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 35 C20 35, 50 20, 80 35 L80 55 C80 70, 65 80, 50 80 C35 80, 20 70, 20 55 Z"
                  stroke="currentColor" strokeWidth="4" fill="none" strokeLinejoin="round" />
                <path d="M30 45 L50 55 L70 45" stroke="#CDA75E" strokeWidth="3" strokeLinecap="round" />
                <circle cx="50" cy="55" r="4" fill="#CDA75E" />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xl font-bold tracking-wide leading-none uppercase serif-title" style={{ color: '#3E2B21' }}>
                Elite Threads
              </span>
              <span className="text-[8.5px] tracking-[0.3em] uppercase leading-tight font-bold mt-1" style={{ color: '#CDA75E' }}>
                textile hub
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {mainLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative text-[12px] font-bold tracking-wider transition-colors duration-200 py-2"
                  style={{ color: isActive ? '#8B5A2B' : '#3E2B21' }}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = '#8B5A2B'; }}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = '#3E2B21'; }}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full" style={{ background: '#8B5A2B' }} />
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
                className="relative flex items-center gap-1 text-[12px] font-bold tracking-wider transition-colors duration-200 py-2"
                style={{ color: isMoreActive ? '#8B5A2B' : '#3E2B21' }}
                onMouseEnter={e => { if (!isMoreActive) e.currentTarget.style.color = '#8B5A2B'; }}
                onMouseLeave={e => { if (!isMoreActive) e.currentTarget.style.color = '#3E2B21'; }}
              >
                MORE
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${isMoreOpen ? 'rotate-180' : ''}`}
                />
                {isMoreActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full" style={{ background: '#8B5A2B' }} />
                )}
              </button>

              {isMoreOpen && (
                <div className="absolute top-full right-0 w-56 bg-white border rounded-xl shadow-xl overflow-hidden mt-1 py-2 z-50"
                  style={{ borderColor: '#E6D8C5' }}>
                  {moreLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <Link
                        key={link.name}
                        to={link.path}
                        className="block px-5 py-2.5 text-[11px] font-bold tracking-wider transition-all duration-150 text-left"
                        style={{
                          background: isActive ? '#F2E6DA' : 'transparent',
                          color: isActive ? '#8B5A2B' : '#3E2B21',
                        }}
                        onMouseEnter={e => { if (!isActive) { e.currentTarget.style.background = '#FAF6F0'; e.currentTarget.style.color = '#8B5A2B'; e.currentTarget.style.paddingLeft = '24px'; } }}
                        onMouseLeave={e => { if (!isActive) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#3E2B21'; e.currentTarget.style.paddingLeft = '20px'; } }}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <Link
              to="/trade-enquiry"
              className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-lg text-[11px] font-bold tracking-widest uppercase transition-all duration-300 shadow-sm border"
              style={{ background: '#8B5A2B', borderColor: '#8B5A2B', color: '#FFF' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#5A3A1F'; e.currentTarget.style.borderColor = '#5A3A1F'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#8B5A2B'; e.currentTarget.style.borderColor = '#8B5A2B'; }}
            >
              <Phone size={13} />
              Trade Enquiry
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden focus:outline-none p-2 rounded-lg transition-colors border"
              style={{ color: '#3E2B21', borderColor: '#E6D8C5', background: '#FFFFFF' }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── MOBILE DRAWER NAVIGATION ── */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[76px] bg-[#FAF6F0] z-40 flex flex-col" style={{ fontFamily: "'Outfit', sans-serif" }}>
          <div className="flex-1 overflow-y-auto px-6 py-8 pb-24 space-y-1 text-left">
            {mainLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between px-5 py-4 rounded-xl text-[13px] font-bold tracking-wider transition-all duration-200 bg-white shadow-sm mb-2 border"
                  style={{
                    borderColor: isActive ? '#8B5A2B' : '#E6D8C5',
                    color: isActive ? '#8B5A2B' : '#3E2B21',
                  }}
                >
                  <span>{link.name}</span>
                </Link>
              );
            })}

            <div className="h-px my-6" style={{ background: '#E6D8C5' }} />
            <p className="px-5 text-[10px] font-bold tracking-[0.2em] uppercase mb-4" style={{ color: '#8B7365' }}>More Pages</p>

            <div className="space-y-2 text-left">
              {moreLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center px-5 py-3 rounded-lg text-[12px] font-bold tracking-wider transition-all duration-200 border"
                    style={{
                      background: isActive ? '#FFFFFF' : 'transparent',
                      color: isActive ? '#8B5A2B' : '#543E31',
                      borderColor: isActive ? '#8B5A2B' : 'transparent',
                    }}
                  >
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </div>

            <div className="pt-8">
              <Link
                to="/trade-enquiry"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 py-4 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-md w-full"
                style={{ background: '#8B5A2B', color: '#FFF' }}
              >
                <Phone size={14} />
                Trade Enquiry
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
