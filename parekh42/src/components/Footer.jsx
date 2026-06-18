import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const C = {
  primaryDark: '#231F20', // Dark Charcoal background
  accent: '#A3704C',      // Warm Gold/Bronze accent
  border: 'rgba(163, 112, 76, 0.2)',
  textFaint: 'rgba(250, 248, 245, 0.6)',
  textMid: 'rgba(250, 248, 245, 0.85)',
  soil: '#FAF8F5',
};

export default function Footer() {
  return (
    <footer style={{
      background: '#231F20',
      borderTop: `1px solid ${C.border}`,
      color: C.textMid,
      fontFamily: "'DM Sans', sans-serif",
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background decoration */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(163, 112, 76, 0.06) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 255, 255, 0.02) 0%, transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none' }} />

      <div className="max-w-[90rem] mx-auto px-6 lg:px-14 py-14" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left">

          {/* ── Brand Column ── */}
          <div className="col-span-2 lg:col-span-1">
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(163, 112, 76, 0.15)', border: '1.5px solid rgba(163, 112, 76, 0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="12" stroke="#A3704C" strokeWidth="1.5" fill="none"/>
                  <path d="M14 4 C14 4, 22 10, 22 14 C22 18, 14 24, 14 24 C14 24, 6 18, 6 14 C6 10, 14 4, 14 4Z" fill="rgba(163,112,76,0.15)" stroke="#A3704C" strokeWidth="1"/>
                  <circle cx="14" cy="14" r="3" fill="#A3704C"/>
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: C.soil, lineHeight: 1.1 }}>
                  LoomCraft India
                </div>
                <div style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#A3704C', fontWeight: 700, marginTop: 3 }}>
                  Textiles of India
                </div>
              </div>
            </div>

            <p style={{ fontSize: 13, color: C.textFaint, lineHeight: 1.7, maxWidth: 290, marginBottom: 20 }}>
              Connecting you with the richness of tradition through premium handloom cottons, heritage silks, and finest home textiles.
            </p>
          </div>

          {/* ── QUICK LINKS ── */}
          <div className="col-span-1">
            <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 700, color: C.soil, marginBottom: 18, letterSpacing: '0.02em' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { name: 'Home',                    path: '/' },
                { name: 'About Us',               path: '/about' },
                { name: 'Contact Us',             path: '/contact' },
                { name: 'Products',               path: '/products' },
                { name: 'Our Retail Management',  path: '/retail-management' },
              ].map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    style={{ fontSize: 13, color: C.textMid, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6, transition: 'all 0.2s ease', fontWeight: 500 }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#A3704C'; e.currentTarget.style.paddingLeft = '4px'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = C.textMid; e.currentTarget.style.paddingLeft = '0'; }}
                  >
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(163, 112, 76, 0.5)', flexShrink: 0 }} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── RESOURCES ── */}
          <div className="col-span-1">
            <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 700, color: C.soil, marginBottom: 18, letterSpacing: '0.02em' }}>
              Resources
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { name: 'Blog Page',         path: '/blog' },
                { name: 'Notice Board',      path: '/notice-board' },
                { name: 'Business Gallery',  path: '/gallery' },
                { name: 'Career Page',       path: '/career' },
                { name: "FAQ's",             path: '/faq' },
              ].map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    style={{ fontSize: 13, color: C.textMid, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6, transition: 'all 0.2s ease', fontWeight: 500 }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#A3704C'; e.currentTarget.style.paddingLeft = '4px'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = C.textMid; e.currentTarget.style.paddingLeft = '0'; }}
                  >
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(163, 112, 76, 0.5)', flexShrink: 0 }} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── CONTACT US ── */}
          <div className="col-span-1">
            <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 700, color: C.soil, marginBottom: 18, letterSpacing: '0.02em' }}>
              Contact Us
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { icon: MapPin, val: '123, Textile Market, Surat, Gujarat - 395002', href: '#' },
                { icon: Phone,  val: '+91 98765 43210',         href: 'tel:+919876543210' },
                { icon: Mail,   val: 'hello@loomcraftindia.com', href: 'mailto:hello@loomcraftindia.com' },
              ].map(({ icon: Icon, val, href }, i) => (
                <a
                  key={i}
                  href={href}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 12.5, color: C.textMid, textDecoration: 'none', lineHeight: 1.5, transition: 'color 0.2s ease' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#A3704C'}
                  onMouseLeave={e => e.currentTarget.style.color = C.textMid}
                >
                  <Icon size={14} style={{ color: '#A3704C', flexShrink: 0, marginTop: 2 }} />
                  <span>{val}</span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: `1px solid ${C.border}`, position: 'relative', zIndex: 1 }}>
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 py-3 flex flex-col md:flex-row items-center justify-between gap-2 text-center">
          <p style={{ fontSize: 12, color: C.soil, margin: 0, fontWeight: 500, letterSpacing: '0.03em' }}>
            © 2026 LoomCraft India. All Rights Reserved.
          </p>
          <p style={{ fontSize: 11, color: C.textFaint, margin: 0 }}>
            Premium Textile Retail
          </p>
        </div>
      </div>
    </footer>
  );
}
