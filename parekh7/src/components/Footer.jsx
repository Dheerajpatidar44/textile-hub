import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const FacebookIcon = ({ size = 16, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = ({ size = 16, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TwitterIcon = ({ size = 16, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const YoutubeIcon = ({ size = 16, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

export default function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(135deg, #1A0A05 0%, #2C1810 100%)', fontFamily: "'DM Sans', sans-serif" }}>
      {/* Gold top bar */}
      <div className="h-0.5 w-full" style={{ background: 'linear-gradient(90deg, #9B2519, #C9A227, #E2C65A, #C9A227, #9B2519)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
                style={{ background: 'linear-gradient(135deg, #C9A227, #9B2519)' }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-white font-bold text-lg">T</span>
              </div>
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[#C9A227] text-xl font-bold tracking-wider">TEXTILE MALL</div>
                <div className="text-[9px] tracking-widest uppercase text-[#A68B7C]">Est. 1990</div>
              </div>
            </div>
            <p className="text-[#A68B7C] text-sm leading-relaxed mb-6">
              India's most trusted premium textile retail chain. Quality fabrics, timeless elegance, and unmatched service across 1200+ outlets.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { icon: FacebookIcon, label: 'Facebook', url: '#' },
                { icon: InstagramIcon, label: 'Instagram', url: '#' },
                { icon: TwitterIcon, label: 'Twitter', url: '#' },
                { icon: YoutubeIcon, label: 'YouTube', url: '#' },
              ].map(({ icon: Icon, label, url }) => (
                <a key={label} href={url} aria-label={label}
                  target="_blank" rel="noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ background: 'rgba(201,162,39,0.12)', border: '1px solid rgba(201,162,39,0.2)' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(201,162,39,0.3)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(201,162,39,0.12)'}
                >
                  <Icon size={15} color="#C9A227" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Section (2 columns on mobile) */}
          <div className="grid grid-cols-2 gap-6 lg:col-span-2">
            {/* Quick Links */}
            <div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[#C9A227] text-lg font-bold mb-5 tracking-wide">Quick Links</h3>
              <ul className="space-y-2.5">
                {[
                  { name: 'About Us', path: '/about' },
                  { name: 'Product Page', path: '/products' },
                  { name: 'Trade Enquiry', path: '/trade-enquiry' },
                  { name: 'e-Quotation', path: '/e-quotation' },
                  { name: 'e-Auction', path: '/e-auction' },
                  { name: 'Career Page', path: '/career' },
                ].map(link => (
                  <li key={link.name}>
                    <Link to={link.path}
                      className="text-[#A68B7C] text-sm hover:text-[#E2C65A] transition-colors duration-200 flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#C9A227]/40 group-hover:bg-[#C9A227] transition-colors shrink-0" />
                      <span className="truncate">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[#C9A227] text-lg font-bold mb-5 tracking-wide">Resources</h3>
              <ul className="space-y-2.5">
                {[
                  { name: 'Blog Page', path: '/blog' },
                  { name: 'Trade Circular', path: '/trade-circular' },
                  { name: 'Notice Board', path: '/notice-board' },
                  { name: 'Customer Review', path: '/reviews' },
                  { name: 'Media Gallery', path: '/gallery' },
                  { name: 'Contact Us', path: '/contact' },
                ].map(link => (
                  <li key={link.name}>
                    <Link to={link.path}
                      className="text-[#A68B7C] text-sm hover:text-[#E2C65A] transition-colors duration-200 flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#C9A227]/40 group-hover:bg-[#C9A227] transition-colors shrink-0" />
                      <span className="truncate">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[#C9A227] text-lg font-bold mb-5 tracking-wide">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0" color="#C9A227" />
                <span className="text-[#A68B7C] text-sm leading-relaxed">123 Premium Textile Avenue,<br />Chennai, TN, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="shrink-0" color="#C9A227" />
                <span className="text-[#A68B7C] text-sm">+91 6353778329</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="shrink-0" color="#C9A227" />
                <span className="text-[#A68B7C] text-sm">info@textilemall.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-3"
          style={{ borderColor: 'rgba(201,162,39,0.15)' }}>
          <p className="text-[#5C3B2C] text-xs tracking-wide">© 2026 · All Rights Reserved · TEXTILE MALL</p>
        </div>
      </div>
    </footer>
  );
}
