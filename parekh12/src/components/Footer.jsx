import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: '#121216', fontFamily: "'Plus Jakarta Sans', sans-serif", borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      {/* Accent top gold bar */}
      <div className="h-0.5 w-full" style={{ background: '#C89B5F' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 flex items-center justify-center border border-[#C89B5F]/30 bg-white/5 shadow-md text-[#C89B5F]">
                <svg viewBox="0 0 100 100" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="5" width="90" height="90" stroke="currentColor" strokeWidth="2" />
                  <rect x="12" y="12" width="76" height="76" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3,3" className="opacity-70" />
                  <path d="M 50 22 L 50 78 M 22 50 L 78 50" strokeWidth="3" />
                  <path d="M 50 22 L 78 22" strokeWidth="3" />
                  <path d="M 78 50 L 78 78" strokeWidth="3" />
                  <path d="M 50 78 L 22 78" strokeWidth="3" />
                  <path d="M 22 50 L 22 22" strokeWidth="3" />
                  <circle cx="36" cy="36" r="2.5" fill="currentColor" stroke="none" />
                  <circle cx="64" cy="36" r="2.5" fill="currentColor" stroke="none" />
                  <circle cx="64" cy="64" r="2.5" fill="currentColor" stroke="none" />
                  <circle cx="36" cy="64" r="2.5" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-white text-lg font-bold tracking-wider leading-none uppercase">
                  Swastik
                </div>
                <div className="text-[8.5px] tracking-widest uppercase text-[#C89B5F] mt-1 font-bold">
                  TEXTILE MALL
                </div>
              </div>
            </div>
            <p className="text-[#FAF8F5]/80 text-sm leading-relaxed mb-6">
              Your trusted partner in premium textiles, ethnic wear & home furnishing since generations. Spanning across 1200+ outlets in India.
            </p>
          </div>

          {/* Company links */}
          <div className="col-span-1 lg:col-span-1">
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-white text-lg font-bold mb-5 tracking-wide">Company</h3>
            <ul className="space-y-2.5">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Product Page', path: '/products' },
                { name: 'Trade Enquiry', path: '/trade-enquiry' },
                { name: 'Contact Us', path: '/contact' },
              ].map(link => (
                <li key={link.name}>
                  <Link to={link.path}
                    className="text-[#FAF8F5]/90 hover:text-[#C89B5F] transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 bg-[#C89B5F]/40 group-hover:bg-[#C89B5F] transition-colors shrink-0" />
                    <span className="truncate font-semibold">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div className="col-span-1 lg:col-span-1">
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-white text-lg font-bold mb-5 tracking-wide">Services</h3>
            <ul className="space-y-2.5">
              {[
                { name: 'e-Quotation', path: '/e-quotation' },
                { name: 'e-Auction', path: '/e-auction' },
                { name: 'Trade Circular', path: '/trade-circular' },
                { name: 'Blog Page', path: '/blog' },
              ].map(link => (
                <li key={link.name}>
                  <Link to={link.path}
                    className="text-[#FAF8F5]/90 hover:text-[#C89B5F] transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 bg-[#C89B5F]/40 group-hover:bg-[#C89B5F] transition-colors shrink-0" />
                    <span className="truncate font-semibold">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 lg:col-span-1">
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-white text-lg font-bold mb-5 tracking-wide">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0" color="#C89B5F" />
                <span className="text-[#FAF8F5]/90 text-sm leading-relaxed font-semibold">123 Premium Textile Avenue,<br />Fashion District, Chennai, TN, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="shrink-0" color="#C89B5F" />
                <span className="text-[#FAF8F5]/90 text-sm font-semibold">+91 6353778329</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="shrink-0" color="#C89B5F" />
                <span className="text-[#FAF8F5]/90 text-sm font-semibold">info@swastiktextilemall.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-3"
          style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
          {/* Phone number placed on the left, copyright on the right */}
          <a href="tel:+916353778329" className="text-[#C89B5F] hover:underline text-xs font-bold flex items-center gap-1.5 order-2 sm:order-1">
            <Phone size={12} /> Call Us: +91 6353778329
          </a>
          <p className="text-[#FAF8F5]/70 text-xs tracking-wide font-semibold order-1 sm:order-2">
            © 2026 · All Rights Reserved · Swastik Textile Mall
          </p>
        </div>
      </div>
    </footer>
  );
}
