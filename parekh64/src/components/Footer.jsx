import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const C = {
  primary: '#2B2520',       // Charcoal
  accent: '#C5A880',        // Gold
  bg: '#FAF7F2',            // Soft Cream
  border: '#EAE5DB',        // Soft Border
  stone: '#6C625C',         // Muted Text
};

export default function Footer() {
  return (
    <footer style={{
      background: C.bg, 
      borderTop: `1px solid ${C.border}`,
      color: C.primary,
      fontFamily: "'Outfit', sans-serif",
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle background glow */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: 400, height: 400, background: 'radial-gradient(circle, rgba(197, 168, 128, 0.08) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

      <div className="max-w-[95rem] mx-auto px-6 lg:px-14 pt-16 pb-6" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10 lg:gap-12 text-left">

          {/* ── Brand Column (Column 1) ── */}
          <div className="col-span-1">
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{ width: 42, height: 42, background: 'rgba(43, 37, 32, 0.05)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="28" height="28" viewBox="0 0 100 100" fill="none">
                  <path d="M50 15 L56 38 L80 38 L60 52 L68 76 L50 62 L32 76 L40 52 L20 38 L44 38 Z" stroke={C.accent} strokeWidth="2" fill="none" strokeLinejoin="round" />
                  <circle cx="50" cy="50" r="10" stroke={C.primary} strokeWidth="1.5" />
                  <circle cx="50" cy="50" r="3" fill={C.accent} />
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 700, color: C.primary, lineHeight: 1.1, letterSpacing: '0.02em' }}>
                  Aarohi Fabrics
                </div>
                <div style={{ fontSize: 9, color: C.stone, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: 3 }}>
                  Premium Textile House
                </div>
              </div>
            </div>

            <p style={{ fontSize: 13, color: C.stone, lineHeight: 1.7, maxWidth: 300, marginBottom: 20, fontWeight: 500 }}>
              Delivering unmatched variety, quality & value. Discover high-quality fabrics, heritage designs, and premium textiles.
            </p>
          </div>

          {/* ── COMPANY Column (Column 2) ── */}
          <div className="col-span-1">
            <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 700, color: C.primary, marginBottom: 20, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
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
                    style={{ fontSize: 13.5, color: C.stone, textDecoration: 'none', display: 'flex', alignItems: 'center', transition: 'all 0.2s ease', fontWeight: 600, letterSpacing: '0.02em' }}
                    onMouseEnter={e => { e.currentTarget.style.color = C.accent; }}
                    onMouseLeave={e => { e.currentTarget.style.color = C.stone; }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── TRADE SERVICES Column (Column 3) ── */}
          <div className="col-span-1">
            <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 700, color: C.primary, marginBottom: 20, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
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
                    style={{ fontSize: 13.5, color: C.stone, textDecoration: 'none', display: 'flex', alignItems: 'center', transition: 'all 0.2s ease', fontWeight: 600, letterSpacing: '0.02em' }}
                    onMouseEnter={e => { e.currentTarget.style.color = C.accent; }}
                    onMouseLeave={e => { e.currentTarget.style.color = C.stone; }}
                  >
                    {link.name.toLowerCase().startsWith('e-') ? (
                      <>
                        <span style={{ textTransform: 'lowercase' }}>e</span>-{link.name.slice(2)}
                      </>
                    ) : (
                      link.name
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── CONTACT US Column (Column 4) ── */}
          <div className="col-span-1">
            <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 700, color: C.primary, marginBottom: 20, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Contact Us
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13.5, color: C.stone, lineHeight: 1.5, fontWeight: 600 }}>
                <MapPin size={16} style={{ color: C.accent, flexShrink: 0, marginTop: 2 }} />
                <span>123, Textile Market, Surat, Gujarat - 395002</span>
              </div>
              <a href="tel:+919876543210" style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13.5, color: C.stone, textDecoration: 'none', lineHeight: 1.5, transition: 'color 0.2s ease', fontWeight: 600 }}
                onMouseEnter={e => e.currentTarget.style.color = C.accent}
                onMouseLeave={e => e.currentTarget.style.color = C.stone}>
                <Phone size={16} style={{ color: C.accent, flexShrink: 0, marginTop: 2 }} />
                <span>+91 98765 43210</span>
              </a>
              <a href="mailto:info@aarohifabrics.com" style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13.5, color: C.stone, textDecoration: 'none', lineHeight: 1.5, transition: 'color 0.2s ease', fontWeight: 600 }}
                onMouseEnter={e => e.currentTarget.style.color = C.accent}
                onMouseLeave={e => e.currentTarget.style.color = C.stone}>
                <Mail size={16} style={{ color: C.accent, flexShrink: 0, marginTop: 2 }} />
                <span>info@aarohifabrics.com</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: `1px solid ${C.border}`, position: 'relative', zIndex: 1, background: 'rgba(43, 37, 32, 0.02)' }}>
        <div className="max-w-[95rem] mx-auto px-6 lg:px-14 py-4 flex items-center justify-center text-center">
          <p style={{ fontSize: 12, color: C.stone, margin: 0, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            © 2026 Aarohi Fabrics. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
