import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const C = {
  primary: '#043e3d',        // Deep Teal Green
  primaryDark: '#022625',
  primaryLight: '#065452',
  accent: '#C39A58',         // Luxury Gold Accent
  gold: '#C39A58',
  border: '#E6E1D8',
  bg: '#FAF6F0',
};

export default function Footer() {
  return (
    <footer style={{
      background: C.primary,
      borderTop: `1px solid rgba(255,255,255,0.05)`,
      color: 'rgba(255,255,255,0.8)',
      fontFamily: "'Outfit', sans-serif",
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background decoration */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: 400, height: 400, background: 'radial-gradient(circle, rgba(255, 255, 255, 0.02) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

      <div className="max-w-[90rem] mx-auto px-6 lg:px-14 py-16" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 text-left">

          {/* ── Brand Column ── */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{ width: 42, height: 42, background: 'rgba(255, 255, 255, 0.05)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={C.accent} strokeWidth="1.5">
                  <circle cx="12" cy="12" r="9" stroke={C.accent} strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="6" stroke="#ffffff" strokeWidth="1.2" />
                  <path d="M12 3v18M3 12h18" stroke={C.accent} strokeWidth="0.5" />
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 700, color: 'white', lineHeight: 1.1, letterSpacing: '0.02em' }}>
                  Paridhi Textiles
                </div>
              </div>
            </div>

            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: 300, marginBottom: 24 }}>
              Preserving tradition, delivering elegance. Discover high-quality fabrics, heritage designs, and premium textiles crafted with absolute excellence.
            </p>


          </div>

          {/* ── QUICK LINKS ── */}
          <div className="col-span-1">
            <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 700, color: 'white', marginBottom: 20, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact Us', path: '/contact' },
                { name: 'Product Gallery', path: '/products' },
                { name: 'Our Retail Management', path: '/retail-management' },
              ].map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', display: 'flex', alignItems: 'center', transition: 'all 0.2s ease', fontWeight: 600, letterSpacing: '0.02em' }}
                    onMouseEnter={e => { e.currentTarget.style.color = C.accent; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── RESOURCES ── */}
          <div className="col-span-1">
            <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 700, color: 'white', marginBottom: 20, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Resources
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { name: 'Trade Enquiry', path: '/trade-enquiry' },
                { name: 'e-Quotation', path: '/e-quotation' },
                { name: 'e-Auction', path: '/e-auction' },
                { name: 'Trade Circular', path: '/trade-circular' },
                { name: 'Notice Board', path: '/notice-board' },
                { name: 'Careers', path: '/career' },
              ].map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', display: 'flex', alignItems: 'center', transition: 'all 0.2s ease', fontWeight: 600, letterSpacing: '0.02em' }}
                    onMouseEnter={e => { e.currentTarget.style.color = C.accent; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── CONTACT US ── */}
          <div className="col-span-1">
            <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 700, color: 'white', marginBottom: 20, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Contact Us
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { icon: MapPin, val: 'Paridhi Textiles, 456, Textile Boulevard, Surat, Gujarat - 395002', href: '#' },
                { icon: Phone, val: '1800 123 4567', href: 'tel:18001234567' },
                { icon: Mail, val: 'info@paridhitextiles.com', href: 'mailto:info@paridhitextiles.com' },
              ].map(({ icon: Icon, val, href }, i) => (
                <a
                  key={i}
                  href={href}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 13, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', lineHeight: 1.5, transition: 'color 0.2s ease', fontWeight: 600 }}
                  onMouseEnter={e => e.currentTarget.style.color = C.accent}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                >
                  <Icon size={16} style={{ color: C.accent, flexShrink: 0, marginTop: 2 }} />
                  <span>{val}</span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: `1px solid rgba(255,255,255,0.05)`, position: 'relative', zIndex: 1, background: 'rgba(0,0,0,0.1)' }}>
        <div className="max-w-[90rem] mx-auto px-6 lg:px-14 py-3 flex items-center justify-center text-center">
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            © 2026 Paridhi Textiles. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
