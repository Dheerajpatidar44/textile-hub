import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: '#244C73', fontFamily: "'Outfit', sans-serif", borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      {/* Accent top gold bar */}
      <div className="h-0.5 w-full" style={{ background: '#C5A880' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center border border-white/20 bg-white/10 shadow-md">
                <svg viewBox="0 0 100 100" className="w-6 h-6 text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer elegant borders */}
                  <rect x="8" y="8" width="84" height="84" rx="6" stroke="currentColor" strokeWidth="3" />
                  <rect x="14" y="14" width="72" height="72" rx="4" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" className="opacity-60" />
                  {/* Stylized Serif Letter 'U' */}
                  <path d="M36 26 V58 C36 68, 42 74, 50 74 C58 74, 64 68, 64 58 V26" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif" }} className="text-white text-xl font-bold tracking-wider leading-none">
                  URBAN FASHION
                </div>
                <div className="text-[8.5px] tracking-widest uppercase text-[#C5A880] mt-1 font-bold">
                  TEXTILE MALL
                </div>
              </div>
            </div>
            <p className="text-[#FAF9F6]/80 text-sm leading-relaxed mb-6 font-medium">
              Your trusted partner in premium textiles, ethnic wear & home furnishing since generations. Spanning across 1200+ outlets in India.
            </p>
          </div>

          {/* Company links */}
          <div className="col-span-1 lg:col-span-1">
            <h3 style={{ fontFamily: "'Playfair Display', serif" }} className="text-white text-lg font-bold mb-5 tracking-wide">Company</h3>
            <ul className="space-y-2.5">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Product Page', path: '/products' },
                { name: 'Trade Enquiry', path: '/trade-enquiry' },
                { name: 'Contact Us', path: '/contact' },
              ].map(link => (
                <li key={link.name}>
                  <Link to={link.path}
                    className="text-[#FAF9F6]/90 hover:text-[#C5A880] transition-colors duration-200 flex items-center gap-1.5 group font-medium"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#C5A880]/40 group-hover:bg-[#C5A880] transition-colors shrink-0" />
                    <span className="truncate font-semibold">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div className="col-span-1 lg:col-span-1">
            <h3 style={{ fontFamily: "'Playfair Display', serif" }} className="text-white text-lg font-bold mb-5 tracking-wide">Services</h3>
            <ul className="space-y-2.5">
              {[
                { name: 'e-Quotation', path: '/e-quotation' },
                { name: 'e-Auction', path: '/e-auction' },
                { name: 'Trade Circular', path: '/trade-circular' },
                { name: 'Blog Page', path: '/blog' },
              ].map(link => (
                <li key={link.name}>
                  <Link to={link.path}
                    className="text-[#FAF9F6]/90 hover:text-[#C5A880] transition-colors duration-200 flex items-center gap-1.5 group font-medium"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#C5A880]/40 group-hover:bg-[#C5A880] transition-colors shrink-0" />
                    <span className="truncate font-semibold">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 lg:col-span-1">
            <h3 style={{ fontFamily: "'Playfair Display', serif" }} className="text-white text-lg font-bold mb-5 tracking-wide">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0" color="#C5A880" />
                <span className="text-[#FAF9F6]/90 text-sm leading-relaxed font-semibold">123 Premium Textile Avenue,<br />Fashion District, Chennai, TN, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="shrink-0" color="#C5A880" />
                <span className="text-[#FAF9F6]/90 text-sm font-semibold">+91 6353778329</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="shrink-0" color="#C5A880" />
                <span className="text-[#FAF9F6]/90 text-sm font-semibold">info@urbanfashiontextile.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-3"
          style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          {/* Phone number placed on the left, copyright on the right */}
          <a href="tel:+916353778329" className="text-[#C5A880] hover:underline text-xs font-bold flex items-center gap-1.5 order-2 sm:order-1">
            <Phone size={12} /> Call Us: +91 6353778329
          </a>
          <p className="text-[#FAF9F6]/70 text-xs tracking-wide font-semibold order-1 sm:order-2">
            © 2026 · All Rights Reserved · URBAN FASHION TEXTILE
          </p>
        </div>
      </div>
    </footer>
  );
}
