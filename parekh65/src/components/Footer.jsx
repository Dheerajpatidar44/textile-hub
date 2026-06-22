import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const C = {
  primary: '#6B4226',
  primaryLight: '#9B6B4A',
  accent: '#C8966A',
  gold: '#C8966A',
  bg: '#F7F2EC',
  border: '#E8DDD0',
  stone: '#7A6558',
};

export default function Footer() {
  return (
    <footer style={{
      background: C.primary, 
      borderTop: `1px solid rgba(255, 255, 255, 0.08)`,
      color: '#FFFFFF',
      fontFamily: "'Outfit', sans-serif",
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background decoration */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: 400, height: 400, background: 'radial-gradient(circle, rgba(200, 150, 106, 0.06) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: 300, height: 300, background: 'radial-gradient(circle, rgba(200, 150, 106, 0.04) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

      <div className="max-w-[95rem] mx-auto px-6 lg:px-14 pt-16 pb-6" style={{ position: 'relative', zIndex: 1 }}>
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10 lg:gap-12 text-left mb-12">

          {/* ── Brand Column ── */}
          <div className="col-span-1">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{ width: 44, height: 44, background: 'rgba(255, 255, 255, 0.08)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(200,150,106,0.3)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#C8966A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 17l10 5 10-5" stroke="#C8966A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12l10 5 10-5" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 700, color: '#FFFFFF', lineHeight: 1.1, letterSpacing: '0.02em' }}>
                  Meraki Ethnic
                </div>
                <div style={{ fontSize: 9, color: 'rgba(255, 255, 255, 0.6)', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: 3 }}>
                  Premium Textile House
                </div>
              </div>
            </div>

            <p style={{ fontSize: 13, color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.7, maxWidth: 280, marginBottom: 0 }}>
              Delivering unmatched variety, quality & value. Discover high-quality fabrics, heritage designs, and premium textiles.
            </p>
          </div>

          {/* ── COMPANY Column ── */}
          <div className="col-span-1">
            <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, fontWeight: 700, color: C.gold, marginBottom: 20, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Our Journey', path: '/about' },
                { name: 'Notice Board', path: '/notice-board' },
                { name: 'Career Page', path: '/career' },
                { name: 'Business Media Gallery', path: '/gallery' },
                { name: 'FAQ', path: '/faq' },
              ].map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    style={{ fontSize: 13, color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', display: 'flex', alignItems: 'center', transition: 'all 0.2s ease', fontWeight: 500, letterSpacing: '0.02em' }}
                    onMouseEnter={e => { e.currentTarget.style.color = C.gold; e.currentTarget.style.paddingLeft = '4px'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'; e.currentTarget.style.paddingLeft = '0'; }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── TRADE SERVICES Column ── */}
          <div className="col-span-1">
            <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, fontWeight: 700, color: C.gold, marginBottom: 20, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Trade Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { name: 'e-Quotation', path: '/e-quotation' },
                { name: 'e-Auction', path: '/e-auction' },
                { name: 'Trade Circular', path: '/trade-circular' },
                { name: 'Trade Enquiry', path: '/trade-enquiry' },
                { name: 'Retail Management', path: '/retail-management' },
                { name: 'Private Label', path: '/retail-management' },
              ].map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    style={{ fontSize: 13, color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', display: 'flex', alignItems: 'center', transition: 'all 0.2s ease', fontWeight: 500, letterSpacing: '0.02em' }}
                    onMouseEnter={e => { e.currentTarget.style.color = C.gold; e.currentTarget.style.paddingLeft = '4px'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'; e.currentTarget.style.paddingLeft = '0'; }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── CONTACT US Column ── */}
          <div className="col-span-1">
            <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, fontWeight: 700, color: C.gold, marginBottom: 20, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Contact Us
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.5, fontWeight: 500 }}>
                <MapPin size={15} style={{ color: C.gold, flexShrink: 0, marginTop: 2 }} />
                <span>123, Textile Market, Ring Road, Surat, Gujarat - 395002</span>
              </div>
              <a href="tel:+919717543210" style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', lineHeight: 1.5, transition: 'color 0.2s ease', fontWeight: 500 }}
                onMouseEnter={e => e.currentTarget.style.color = C.gold}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}>
                <Phone size={15} style={{ color: C.gold, flexShrink: 0, marginTop: 2 }} />
                <span>+91 97175 43210</span>
              </a>
              <a href="mailto:info@merakiethnic.com" style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', lineHeight: 1.5, transition: 'color 0.2s ease', fontWeight: 500 }}
                onMouseEnter={e => e.currentTarget.style.color = C.gold}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}>
                <Mail size={15} style={{ color: C.gold, flexShrink: 0, marginTop: 2 }} />
                <span>info@merakiethnic.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 20, display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', justifyContent: 'space-between' }}>
          <p style={{ fontSize: 12, color: 'rgba(255, 255, 255, 0.45)', margin: 0, fontWeight: 500, letterSpacing: '0.04em' }}>
            © 2026 Meraki Ethnic. All Rights Reserved.
          </p>
          <div style={{ display: 'flex', gap: 16 }}>
            {['Facebook', 'Instagram', 'Pinterest', 'Twitter'].map(s => (
              <a key={s} href="#" aria-label={s} 
                style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = C.gold}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
              >{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
