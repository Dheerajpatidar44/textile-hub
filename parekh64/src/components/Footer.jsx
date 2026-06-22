import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const C = {
  primary: '#5E3B43',       // Elegant Wine / Burgundy
  primaryLight: '#8C5E6B',  // Medium Wine / Rose
  primaryDark: '#3B2329',   // Deep Charcoal Burgundy
  accent: '#B59298',        // Pastel Dusty Rose
  gold: '#D4B26F',          // Champagne Gold highlight
  bg: '#FAF6F6',            // Linen Rose background
  border: '#EFE6E7',        // Soft Rose Gray Border
  stone: '#6E6466',         // Muted rose stone text
  soil: '#5E3B43',          // Primary Burgundy
};

export default function Footer() {
  return (
    <footer style={{
      background: C.primary, 
      borderTop: `1px solid rgba(255, 255, 255, 0.1)`,
      color: '#FFFFFF',
      fontFamily: "'Outfit', sans-serif",
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background decoration */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: 400, height: 400, background: 'radial-gradient(circle, rgba(212, 178, 111, 0.05) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

      <div className="max-w-[95rem] mx-auto px-6 lg:px-14 pt-16 pb-6" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10 lg:gap-12 text-left">

          {/* ── Brand Column (Column 1) ── */}
          <div className="col-span-1">
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{ width: 42, height: 42, background: 'rgba(255, 255, 255, 0.08)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={C.gold} strokeWidth="1.5">
                  <circle cx="12" cy="12" r="9" stroke={C.gold} strokeWidth="1.5" />
                  <path d="M12 2v20M2 12h20M5 5l14 14M5 19L14 10" stroke="#FFFFFF" strokeWidth="1" />
                  <circle cx="12" cy="12" r="4" fill={C.gold} />
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 700, color: '#FFFFFF', lineHeight: 1.1, letterSpacing: '0.02em' }}>
                  Navya Weaves
                </div>
                <div style={{ fontSize: 9, color: 'rgba(255, 255, 255, 0.7)', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: 3 }}>
                  Premium Textile House
                </div>
              </div>
            </div>

            <p style={{ fontSize: 13, color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.7, maxWidth: 300, marginBottom: 20 }}>
              Delivering unmatched variety, quality & value. Discover high-quality fabrics, heritage designs, and premium textiles.
            </p>
          </div>

          {/* ── COMPANY Column (Column 2) ── */}
          <div className="col-span-1">
            <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 700, color: C.gold, marginBottom: 20, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Notice Board', path: '/notice-board' },
                { name: 'Career Page', path: '/career' },
                { name: 'Business Media Gallery', path: '/gallery' },
                { name: 'FAQ', path: '/faq' },
              ].map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    style={{ fontSize: 13, color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none', display: 'flex', alignItems: 'center', transition: 'all 0.2s ease', fontWeight: 600, letterSpacing: '0.02em' }}
                    onMouseEnter={e => { e.currentTarget.style.color = C.gold; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)'; }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── TRADE SERVICES Column (Column 3) ── */}
          <div className="col-span-1">
            <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 700, color: C.gold, marginBottom: 20, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Trade Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { name: 'Retail Management', path: '/retail-management' },
                { name: 'Trade Enquiry', path: '/trade-enquiry' },
                { name: 'e-Quotation', path: '/e-quotation' },
                { name: 'e-Auction', path: '/e-auction' },
                { name: 'Trade Circular', path: '/trade-circular' },
              ].map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    style={{ fontSize: 13, color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none', display: 'flex', alignItems: 'center', transition: 'all 0.2s ease', fontWeight: 600, letterSpacing: '0.02em' }}
                    onMouseEnter={e => { e.currentTarget.style.color = C.gold; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)'; }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── CONTACT US Column (Column 4) ── */}
          <div className="col-span-1">
            <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 700, color: C.gold, marginBottom: 20, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Contact Us
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5, fontWeight: 600 }}>
                <MapPin size={16} style={{ color: C.gold, flexShrink: 0, marginTop: 2 }} />
                <span>123, Textile Market, Surat, Gujarat - 395002</span>
              </div>
              <a href="tel:+919876543210" style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none', lineHeight: 1.5, transition: 'color 0.2s ease', fontWeight: 600 }}
                onMouseEnter={e => e.currentTarget.style.color = C.gold}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)'}>
                <Phone size={16} style={{ color: C.gold, flexShrink: 0, marginTop: 2 }} />
                <span>+91 98765 43210</span>
              </a>
              <a href="mailto:info@navyaveaves.com" style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none', lineHeight: 1.5, transition: 'color 0.2s ease', fontWeight: 600 }}
                onMouseEnter={e => e.currentTarget.style.color = C.gold}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)'}>
                <Mail size={16} style={{ color: C.gold, flexShrink: 0, marginTop: 2 }} />
                <span>info@navyaveaves.com</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: `1px solid rgba(255, 255, 255, 0.08)`, position: 'relative', zIndex: 1, background: 'rgba(0,0,0,0.15)' }}>
        <div className="max-w-[95rem] mx-auto px-6 lg:px-14 py-3 flex items-center justify-center text-center">
          <p style={{ fontSize: 12, color: 'rgba(255, 255, 255, 0.55)', margin: 0, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            © 2026 Navya Weaves. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
