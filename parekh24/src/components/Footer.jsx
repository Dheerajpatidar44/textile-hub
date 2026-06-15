import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

export default function Footer() {
  return (
    <footer style={{ background: '#3D3025', fontFamily: "'Jost', sans-serif" }}>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 text-left">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">

          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shadow-md"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <svg viewBox="0 0 100 100" className="w-6 h-6 text-[#F6F1EA]" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 35 C20 35, 50 20, 80 35 L80 55 C80 70, 65 80, 50 80 C35 80, 20 70, 20 55 Z"
                    stroke="currentColor" strokeWidth="4" fill="none" strokeLinejoin="round" />
                  <path d="M30 45 L50 55 L70 45" stroke="#F6F1EA" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="50" cy="55" r="4" fill="#C5A377" />
                </svg>
              </div>
              <div>
                <div className="text-white text-xl font-bold tracking-wider leading-none uppercase serif-title">
                  Shree Textile Mall
                </div>
                <div className="text-[8.5px] tracking-widest uppercase mt-1 font-bold" style={{ color: '#C5A377' }}>
                  premium textile hub
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 font-medium text-white/75">
              Your trusted partner in premium artisan textiles, sustainable handlooms, and luxury apparel. Spanning across 1000+ outlets in India.
            </p>
          </div>

          {/* Company links */}
          <div className="col-span-1">
            <h3 className="text-white text-base font-bold mb-6 tracking-wide uppercase serif-title">Company</h3>
            <ul className="space-y-3">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Product Page', path: '/products' },
                { name: 'Trade Enquiry', path: '/trade-enquiry' },
                { name: 'Contact Us', path: '/contact' },
              ].map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 group font-medium transition-colors duration-200 text-left text-white/80"
                    onMouseEnter={e => e.currentTarget.style.color = '#C5A377'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                  >
                    <span className="w-1 h-1 rounded-full shrink-0 transition-colors bg-white/30 group-hover:bg-[#C5A377]" />
                    <span className="truncate">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div className="col-span-1">
            <h3 className="text-white text-base font-bold mb-6 tracking-wide uppercase serif-title">Services</h3>
            <ul className="space-y-3">
              {[
                { name: 'e-Quotation', path: '/e-quotation' },
                { name: 'e-Auction', path: '/e-auction' },
                { name: 'Trade Circular', path: '/trade-circular' },
                { name: 'Blog Page', path: '/blog' },
              ].map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 group font-medium transition-colors duration-200 text-left text-white/80"
                    onMouseEnter={e => e.currentTarget.style.color = '#C5A377'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                  >
                    <span className="w-1 h-1 rounded-full shrink-0 transition-colors bg-white/30 group-hover:bg-[#C5A377]" />
                    <span className="truncate">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-white text-base font-bold mb-6 tracking-wide uppercase serif-title">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0" color="#C5A377" />
                <span className="text-sm leading-relaxed font-medium text-left text-white/80">
                  123 Shree Textile Avenue,<br />Fashion & Weaving District,<br />Ahmedabad, Gujarat, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="shrink-0" color="#C5A377" />
                <span className="text-sm font-medium text-white/80">+91 6353778329</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="shrink-0" color="#C5A377" />
                <span className="text-sm font-medium text-white/80">info@shreetextilemall.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-16 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderColor: 'rgba(255,255,255,0.08)' }}
        >
          <a href="tel:+916353778329" className="hover:underline text-xs font-bold flex items-center gap-1.5 transition-colors" style={{ color: '#C5A377' }}>
            <Phone size={12} /> Call Us: +91 6353778329
          </a>
          
          <div className="flex gap-5 items-center">
             <a href="#" className="text-white opacity-60 hover:opacity-100 hover:text-[#C5A377] transition-colors"><FacebookIcon /></a>
             <a href="#" className="text-white opacity-60 hover:opacity-100 hover:text-[#C5A377] transition-colors"><TwitterIcon /></a>
             <a href="#" className="text-white opacity-60 hover:opacity-100 hover:text-[#C5A377] transition-colors"><InstagramIcon /></a>
             <a href="#" className="text-white opacity-60 hover:opacity-100 hover:text-[#C5A377] transition-colors"><LinkedinIcon /></a>
          </div>

          <p className="text-xs tracking-wide font-medium text-center sm:text-right text-white/60">
            © 2026 · All Rights Reserved · SHREE TEXTILE MALL
          </p>
        </div>
      </div>
    </footer>
  );
}
