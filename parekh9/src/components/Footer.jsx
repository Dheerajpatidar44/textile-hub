import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: '#FAF3EE', fontFamily: "'Plus Jakarta Sans', sans-serif", borderTop: '1px solid rgba(162,78,81,0.1)' }}>
      {/* Accent top bar */}
      <div className="h-0.5 w-full" style={{ background: '#A24E51' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shadow-md"
                style={{
                  background: 'linear-gradient(135deg, #772629 0%, #A24E51 100%)',
                  border: '1.5px solid #DFCCBF'
                }}
              >
                <svg viewBox="0 0 100 100" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="4">
                  <path d="M50 20 C60 40, 75 50, 80 50 C75 50, 60 60, 50 80 C40 60, 25 50, 20 50 C25 50, 40 40, 50 20 Z" />
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: "'Marcellus', serif" }} className="text-[#772629] text-xl font-bold tracking-wider leading-none">
                  VASTRAMALL
                </div>
                <div className="text-[8.5px] tracking-widest uppercase text-[#6F5547] mt-1 font-bold">
                  TEXTILES OF INDIA
                </div>
              </div>
            </div>
            <p className="text-[#6F5547] text-sm leading-relaxed mb-6">
              Your trusted partner in premium textiles, fashion and home furnishing since generations. Spanning across 1200+ outlets in India.
            </p>
          </div>

          {/* Reduced Links Section */}
          <div className="col-span-1 lg:col-span-1">
            <h3 style={{ fontFamily: "'Marcellus', serif" }} className="text-[#3C3430] text-lg font-bold mb-5 tracking-wide">Company</h3>
            <ul className="space-y-2.5">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Product Page', path: '/products' },
                { name: 'Trade Enquiry', path: '/trade-enquiry' },
                { name: 'Contact Us', path: '/contact' },
              ].map(link => (
                <li key={link.name}>
                  <Link to={link.path}
                    className="text-[#6F5547] text-sm hover:text-[#A24E51] transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#A24E51]/40 group-hover:bg-[#A24E51] transition-colors shrink-0" />
                    <span className="truncate font-semibold">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-1">
            <h3 style={{ fontFamily: "'Marcellus', serif" }} className="text-[#3C3430] text-lg font-bold mb-5 tracking-wide">Services</h3>
            <ul className="space-y-2.5">
              {[
                { name: 'e-Quotation', path: '/e-quotation' },
                { name: 'e-Auction', path: '/e-auction' },
                { name: 'Trade Circular', path: '/trade-circular' },
                { name: 'Blog Page', path: '/blog' },
              ].map(link => (
                <li key={link.name}>
                  <Link to={link.path}
                    className="text-[#6F5547] text-sm hover:text-[#A24E51] transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#A24E51]/40 group-hover:bg-[#A24E51] transition-colors shrink-0" />
                    <span className="truncate font-semibold">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 lg:col-span-1">
            <h3 style={{ fontFamily: "'Marcellus', serif" }} className="text-[#3C3430] text-lg font-bold mb-5 tracking-wide">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0" color="#A24E51" />
                <span className="text-[#6F5547] text-sm leading-relaxed font-semibold">123 Premium Textile Avenue,<br />Fashion District, Chennai, TN, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="shrink-0" color="#A24E51" />
                <span className="text-[#6F5547] text-sm font-semibold">+91 6353778329</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="shrink-0" color="#A24E51" />
                <span className="text-[#6F5547] text-sm font-semibold">info@textilemall.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-3"
          style={{ borderColor: 'rgba(162,78,81,0.15)' }}>
          <p className="text-[#6F5547] text-xs tracking-wide font-bold">© 2026 · All Rights Reserved · VASTRAMALL TEXTILES OF INDIA</p>
        </div>
      </div>
    </footer>
  );
}
