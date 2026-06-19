import { Outlet, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';
import FloatingChatbot from './FloatingChatbot';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-sand text-primary-dark relative">
      {/* Top Navbar - Full Row Width */}
      <header 
        className="w-full h-16 flex items-center px-8 justify-between select-none fixed top-0 left-0 z-50"
        style={{ fontFamily: "'Outfit', sans-serif", background: '#064040', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}
      >
        <div className="flex items-center gap-3">
          {/* Elegant Mandala Brand Icon */}
          <div className="w-11 h-11 text-[#E6A822] flex items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="16" stroke="currentColor" strokeWidth="2" />
              {Array.from({ length: 8 }).map((_, i) => {
                const angle = (i * 360) / 8;
                return (
                  <g key={i} transform={`rotate(${angle} 50 50)`}>
                    <path d="M50 18 C58 28, 58 40, 50 48 Z" stroke="currentColor" strokeWidth="2" fill="none" />
                  </g>
                );
              })}
            </svg>
          </div>
          <div className="flex flex-col text-left">
            <span 
              className="text-[24px] font-bold tracking-[0.05em] text-[#FFFFFF] uppercase leading-none"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              SUTRANGI
            </span>
            <span className="text-[8px] tracking-[0.25em] text-[rgba(255,255,255,0.6)] font-bold uppercase leading-none mt-1">
              Textiles of India
            </span>
          </div>
        </div>

        {/* Trade Enquiry Button */}
        <Link
          to="/trade-enquiry"
          style={{
            background: '#E6A822',
            color: '#064040',
            padding: '10px 22px',
            borderRadius: '50px',
            fontSize: '11.5px',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            transition: 'all 0.3s ease',
            border: '1.5px solid transparent',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = '#FFFFFF';
            e.currentTarget.style.color = '#064040';
            e.currentTarget.style.borderColor = '#FFFFFF';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 255, 255, 0.15)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = '#E6A822';
            e.currentTarget.style.color = '#064040';
            e.currentTarget.style.borderColor = 'transparent';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          Trade Enquiry
        </Link>
      </header>

      {/* Main Body container below header */}
      <div className="flex flex-row flex-grow pt-16 w-full relative">
        {/* Permanent Left Sidebar */}
        <Navbar />
        
        {/* Right side page content panel */}
        <div className="flex-grow flex flex-col min-h-[calc(100vh-64px)] pl-[280px] w-full">
          {/* Page contents with minimal top padding as requested */}
          <main className="flex-grow w-full px-4 sm:px-8 py-4 transition-all duration-300">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
      
      <FloatingWhatsApp />
      <FloatingChatbot />
    </div>
  );
}

