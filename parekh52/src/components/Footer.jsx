const C = {
  primary: '#064040',        // Deepest Forest Teal
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
      {/* Bottom Bar containing only Copyright */}
      <div style={{ position: 'relative', zIndex: 1, background: 'rgba(0,0,0,0.1)' }}>
        <div className="max-w-[90rem] mx-auto px-6 lg:px-14 py-6 flex flex-col md:flex-row items-center justify-center text-center">
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            © 2026 SUTRANGI Textiles of India. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
