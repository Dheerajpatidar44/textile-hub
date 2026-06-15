import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: '#4A0E17', fontFamily: "'Plus Jakarta Sans', sans-serif", borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      {/* Accent top gold bar */}
      <div className="h-0.5 w-full" style={{ background: '#CDA75E' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 text-left">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shadow-md"
                style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
              >
                <svg viewBox="0 0 100 100" className="w-6 h-6 text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 35 C20 35, 50 20, 80 35 L80 55 C80 70, 65 80, 50 80 C35 80, 20 70, 20 55 Z"
                    stroke="currentColor" strokeWidth="4" fill="none" strokeLinejoin="round" />
                  <path d="M30 45 L50 55 L70 45" stroke="#CDA75E" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="50" cy="55" r="4" fill="#CDA75E" />
                </svg>
              </div>
              <div>
                <div className="text-white text-xl font-black tracking-wider leading-none uppercase serif-title">
                  Ethnic Elegance
                </div>
                <div className="text-[8.5px] tracking-widest uppercase mt-1 font-black" style={{ color: '#CDA75E' }}>
                  textile hub
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 font-medium" style={{ color: 'rgba(248,245,239,0.75)' }}>
              Your trusted partner in premium textiles, ethnic wear & home furnishing since generations. Spanning across 1200+ outlets in India.
            </p>
          </div>

          {/* Company links */}
          <div className="col-span-1">
            <h3 className="text-white text-base font-black mb-5 tracking-wide uppercase">Company</h3>
            <ul className="space-y-2.5">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Product Page', path: '/products' },
                { name: 'Trade Enquiry', path: '/trade-enquiry' },
                { name: 'Contact Us', path: '/contact' },
              ].map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-1.5 group font-semibold transition-colors duration-200 text-left"
                    style={{ color: 'rgba(248,245,239,0.85)' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#CDA75E'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(248,245,239,0.85)'}
                  >
                    <span className="w-1 h-1 rounded-full shrink-0 transition-colors" style={{ background: 'rgba(205,167,94,0.4)' }} />
                    <span className="truncate">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div className="col-span-1">
            <h3 className="text-white text-base font-black mb-5 tracking-wide uppercase">Services</h3>
            <ul className="space-y-2.5">
              {[
                { name: 'e-Quotation', path: '/e-quotation' },
                { name: 'e-Auction', path: '/e-auction' },
                { name: 'Trade Circular', path: '/trade-circular' },
                { name: 'Blog Page', path: '/blog' },
              ].map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-1.5 group font-semibold transition-colors duration-200 text-left"
                    style={{ color: 'rgba(248,245,239,0.85)' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#CDA75E'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(248,245,239,0.85)'}
                  >
                    <span className="w-1 h-1 rounded-full shrink-0" style={{ background: 'rgba(205,167,94,0.4)' }} />
                    <span className="truncate">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-white text-base font-black mb-5 tracking-wide uppercase">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0" color="#CDA75E" />
                <span className="text-sm leading-relaxed font-semibold text-left" style={{ color: 'rgba(248,245,239,0.85)' }}>
                  123 Premium Textile Avenue,<br />Fashion District, Chennai, TN, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="shrink-0" color="#CDA75E" />
                <span className="text-sm font-semibold" style={{ color: 'rgba(248,245,239,0.85)' }}>+91 6353778329</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="shrink-0" color="#CDA75E" />
                <span className="text-sm font-semibold" style={{ color: 'rgba(248,245,239,0.85)' }}>info@ethnicelegance.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-3"
          style={{ borderColor: 'rgba(255,255,255,0.08)' }}
        >
          <a href="tel:+916353778329" className="hover:underline text-xs font-black flex items-center gap-1.5 order-2 sm:order-1 transition-colors" style={{ color: '#CDA75E' }}>
            <Phone size={12} /> Call Us: +91 6353778329
          </a>
          <p className="text-xs tracking-wide font-semibold order-1 sm:order-2" style={{ color: 'rgba(248,245,239,0.6)' }}>
            © 2026 · All Rights Reserved · ETHNIC ELEGANCE
          </p>
        </div>
      </div>
    </footer>
  );
}
