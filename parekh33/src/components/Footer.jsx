import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Crown } from 'lucide-react';

const C = {
  primary: '#0a1c3a',
  primaryDark: '#050e1d',
  accent: '#d27265',
  border: 'rgba(255,255,255,0.1)',
  textFaint: 'rgba(255,255,255,0.5)',
  textMid: 'rgba(255,255,255,0.8)',
  soil: '#ffffff',
};

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #0a1c3a 0%, #1f3458 60%, #0a1c3a 100%)',
      borderTop: '1px solid rgba(210, 114, 101, 0.2)',
      color: C.textMid,
      fontFamily: "'DM Sans', sans-serif",
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background decoration */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(210, 114, 101, 0.08) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 255, 255, 0.04) 0%, transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none' }} />

      <div className="max-w-[90rem] mx-auto px-6 lg:px-14 py-14" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-10 text-left">

          {/* ── Brand Column (2 cols) ── */}
          <div className="col-span-2 lg:col-span-2">
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
              <div style={{ width: 44, height: 44, borderRadius: '10px 20px 10px 20px', background: 'rgba(210, 114, 101, 0.2)', border: '1.5px solid rgba(210, 114, 101, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Crown size={20} color="#d27265" />
              </div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: C.soil, lineHeight: 1.1 }}>
                  LOOMERA
                </div>
                <div style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.accent, fontWeight: 700, marginTop: 3 }}>
                  Textile Retail
                </div>
              </div>
            </div>

            <p style={{ fontSize: 13, color: C.textFaint, lineHeight: 1.7, maxWidth: 290, marginBottom: 20 }}>
              Delivering quality textiles with trust, tradition, and a commitment to excellence.
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: 10 }}>
              {[
                { name: 'Facebook',  svg: (<svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>) },
                { name: 'Instagram', svg: (<svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>) },
                { name: 'Pinterest', svg: (<svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.162 0 7.397 2.967 7.397 6.93 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>) },
                { name: 'Twitter',   svg: (<svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.986 0-.213 0-.427-.015-.64A9.936 9.936 0 0024 4.59z"/></svg>) },
                { name: 'LinkedIn',  svg: (<svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>) },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  aria-label={social.name}
                  style={{ width: 34, height: 34, borderRadius: '50%', background: 'rgba(210, 114, 101, 0.15)', border: '1px solid rgba(210, 114, 101, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.soil, textDecoration: 'none', transition: 'all 0.3s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.background = C.accent; e.currentTarget.style.borderColor = C.accent; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(210, 114, 101, 0.15)'; e.currentTarget.style.borderColor = 'rgba(210, 114, 101, 0.25)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* ── QUICK LINKS (1 col) ── */}
          <div className="col-span-1">
            <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 700, color: C.soil, marginBottom: 18, letterSpacing: '0.02em' }}>
              QUICK LINKS
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { name: 'About Us',               path: '/about' },
                { name: 'Contact Us',             path: '/contact' },
                { name: 'Product',                path: '/products' },
                { name: 'Our Retail Management',  path: '/retail-management' },
              ].map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    style={{ fontSize: 13, color: C.textMid, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6, transition: 'all 0.2s ease', fontWeight: 500 }}
                    onMouseEnter={e => { e.currentTarget.style.color = C.accent; e.currentTarget.style.paddingLeft = '4px'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = C.textMid; e.currentTarget.style.paddingLeft = '0'; }}
                  >
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(210, 114, 101, 0.6)', flexShrink: 0 }} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── INFORMATION (1 col) ── */}
          <div className="col-span-1">
            <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 700, color: C.soil, marginBottom: 18, letterSpacing: '0.02em' }}>
              INFORMATION
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { name: 'Privacy Policy',    path: '#' },
                { name: 'Terms & Conditions', path: '#' },
                { name: 'Return Policy',     path: '#' },
                { name: "FAQ's",             path: '/faq' },
              ].map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    style={{ fontSize: 13, color: C.textMid, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6, transition: 'all 0.2s ease', fontWeight: 500 }}
                    onMouseEnter={e => { e.currentTarget.style.color = C.accent; e.currentTarget.style.paddingLeft = '4px'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = C.textMid; e.currentTarget.style.paddingLeft = '0'; }}
                  >
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(210, 114, 101, 0.6)', flexShrink: 0 }} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── CONTACT US (1 col) ── */}
          <div className="col-span-1">
            <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 700, color: C.soil, marginBottom: 18, letterSpacing: '0.02em' }}>
              CONTACT US
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { icon: MapPin, val: '123, Textile Market, Surat, Gujarat - 395002', href: '#' },
                { icon: Phone,  val: '+91 98765 43210',         href: 'tel:+919876543210' },
                { icon: Mail,   val: 'hello@loomera.com',       href: 'mailto:hello@loomera.com' },
              ].map(({ icon: Icon, val, href }, i) => (
                <a
                  key={i}
                  href={href}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 12.5, color: C.textMid, textDecoration: 'none', lineHeight: 1.5, transition: 'color 0.2s ease' }}
                  onMouseEnter={e => e.currentTarget.style.color = C.accent}
                  onMouseLeave={e => e.currentTarget.style.color = C.textMid}
                >
                  <Icon size={14} style={{ color: C.accent, flexShrink: 0, marginTop: 2 }} />
                  <span>{val}</span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(210, 114, 101, 0.2)', position: 'relative', zIndex: 1, backgroundColor: '#B6665F' }}>
        <div className="max-w-[90rem] mx-auto px-6 lg:px-14 py-2.5 flex flex-col md:flex-row items-center justify-between gap-1 text-center">
          <p style={{ fontSize: 12, color: '#ffffff', margin: 0, fontWeight: 500, letterSpacing: '0.03em' }}>
            © 2025 Loomera Textile Retail. All Rights Reserved.
          </p>
          <p style={{ fontSize: 11, color: 'rgba(255, 255, 255, 0.8)', margin: 0 }}>
            Premium Textile Retail
          </p>
        </div>
      </div>
    </footer>
  );
}
