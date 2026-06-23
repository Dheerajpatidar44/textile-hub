import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const C = {
  primary: '#3F5241',
  primaryDark: '#2C3A2D',
  accent: '#BBA178',
  accentLight: '#FAF5EB',
  bg: '#F5EFE6',
  border: '#E3DAD0',
  stone: '#5A665B',
  card: '#ffffff',
};

export default function Footer() {
  return (
    <footer style={{
      background: C.primaryDark,
      borderTop: `1px solid rgba(188,163,116,0.15)`,
      color: '#ffffff',
      fontFamily: "'Outfit', sans-serif",
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative glow */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: 400, height: 400, background: `radial-gradient(circle, rgba(188, 163, 116, 0.08) 0%, transparent 70%)`, filter: 'blur(60px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: 300, height: 300, background: `radial-gradient(circle, rgba(242, 236, 225, 0.05) 0%, transparent 70%)`, filter: 'blur(50px)', pointerEvents: 'none' }} />

      <div className="max-w-[95rem] mx-auto px-6 lg:px-14 pt-14 pb-6" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10 lg:gap-12 text-left">

          {/* ── Brand Column (Column 1) ── */}
          <div className="col-span-1">
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
              <div style={{ width: 42, height: 42, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.08)', borderRadius: '50%' }}>
                <svg width="26" height="26" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="45" stroke={C.accent} strokeWidth="1.5" fill="none" />
                  <path d="M50 18 L54 40 L76 40 L59 54 L65 76 L50 63 L35 76 L41 54 L24 40 L46 40 Z" stroke={C.accentLight} strokeWidth="2" fill={C.accent} fillOpacity="0.2" strokeLinejoin="round" />
                  <circle cx="50" cy="50" r="5" fill={C.accentLight} />
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 700, color: '#ffffff', lineHeight: 1.1, letterSpacing: '0.02em' }}>
                  Alankrit Threads
                </div>
                <div style={{ fontSize: 9, color: C.accentLight, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: 3 }}>
                  Premium Textile House
                </div>
              </div>
            </div>

            <p style={{ fontSize: 13.5, color: C.accentLight, lineHeight: 1.7, maxWidth: 300, marginBottom: 20, fontWeight: 400, opacity: 0.85 }}>
              Woven with pride. Delivered with purpose. Delivering unmatched variety, quality & value across India.
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: 10 }}>
              {[
                { name: 'Facebook', svg: (<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>) },
                { name: 'Instagram', svg: (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>) },
                { name: 'Pinterest', svg: (<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.162 0 7.397 2.967 7.397 6.93 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" /></svg>) },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  aria-label={social.name}
                  style={{ 
                     width: 32, height: 32, borderRadius: '50%', 
                     display: 'flex', alignItems: 'center', justifyContent: 'center',
                     border: `1px solid rgba(188,163,116,0.2)`,
                     color: C.accentLight,
                     textDecoration: 'none',
                     transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = C.accent; e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = `rgba(188,163,116,0.15)`; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(188,163,116,0.2)'; e.currentTarget.style.color = C.accentLight; e.currentTarget.style.background = 'transparent'; }}
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* ── COMPANY Column (Column 2) ── */}
          <div className="col-span-1">
            <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, fontWeight: 700, color: C.accent, marginBottom: 18, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
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
                    style={{ fontSize: 13, color: `rgba(242,236,225,0.75)`, textDecoration: 'none', display: 'flex', alignItems: 'center', transition: 'all 0.2s ease', fontWeight: 500, letterSpacing: '0.01em' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.paddingLeft = '4px'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(242,236,225,0.75)'; e.currentTarget.style.paddingLeft = '0'; }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── TRADE SERVICES Column (Column 3) ── */}
          <div className="col-span-1">
            <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, fontWeight: 700, color: C.accent, marginBottom: 18, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Trade Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
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
                    style={{ fontSize: 13, color: `rgba(242,236,225,0.75)`, textDecoration: 'none', display: 'flex', alignItems: 'center', transition: 'all 0.2s ease', fontWeight: 500, letterSpacing: '0.01em' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.paddingLeft = '4px'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(242,236,225,0.75)'; e.currentTarget.style.paddingLeft = '0'; }}
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
            <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, fontWeight: 700, color: C.accent, marginBottom: 18, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Contact Us
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, lineHeight: 1.5, fontWeight: 500 }}>
                <MapPin size={15} style={{ color: C.accent, flexShrink: 0, marginTop: 2 }} />
                <span style={{ color: 'rgba(242,236,225,0.85)' }}>123, Textile Market, Surat, Gujarat - 395002</span>
              </div>
              <a href="tel:+919876543210" style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: 'rgba(242,236,225,0.85)', textDecoration: 'none', lineHeight: 1.5, transition: 'color 0.2s ease', fontWeight: 500 }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(242,236,225,0.85)'}>
                <Phone size={15} style={{ color: C.accent, flexShrink: 0, marginTop: 2 }} />
                <span>+91 98765 43210</span>
              </a>
              <a href="mailto:info@alankritthreads.com" style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: 'rgba(242,236,225,0.85)', textDecoration: 'none', lineHeight: 1.5, transition: 'color 0.2s ease', fontWeight: 500 }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(242,236,225,0.85)'}>
                <Mail size={15} style={{ color: C.accent, flexShrink: 0, marginTop: 2 }} />
                <span>info@alankritthreads.com</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: `1px solid rgba(188,163,116,0.12)`, position: 'relative', zIndex: 1 }}>
        <div className="max-w-[95rem] mx-auto px-6 lg:px-14 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p style={{ fontSize: 11.5, color: 'rgba(242,236,225,0.55)', margin: 0, fontWeight: 500, letterSpacing: '0.04em' }}>
            © 2026 Alankrit Threads. All Rights Reserved.
          </p>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy Policy', 'Terms & Conditions'].map(item => (
              <a key={item} href="#" style={{ fontSize: 11, color: 'rgba(242,236,225,0.45)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s ease' }}
                onMouseEnter={e => e.currentTarget.style.color = 'rgba(242,236,225,0.85)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(242,236,225,0.45)'}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
