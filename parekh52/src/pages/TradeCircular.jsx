import { motion } from 'framer-motion';
import { FileText, Eye, Printer } from 'lucide-react';

const C = {
  primary: '#0D6E6E',        // Deep Teal
  primaryDark: '#064040',
  soil: '#0D6E6E',
  sand: '#F8FAF9',
  cream: '#F8FAF9',
  border: '#E2EBEB',
  stone: '#5C7A7A',
  accent: '#E6A822',         // Golden Yellow
};

const circulars = [
  { id: 1, title: 'Revised Pricing for Silk Yarns - Q4', date: 'Oct 15, 2026', ref: 'TC/2026/45' },
  { id: 2, title: 'New Distributor Onboarding Guidelines', date: 'Sep 28, 2026', ref: 'TC/2026/42' },
  { id: 3, title: 'Festive Season Dispatch Schedule', date: 'Sep 10, 2026', ref: 'TC/2026/38' },
  { id: 4, title: 'GST Update on Handloom Products', date: 'Aug 05, 2026', ref: 'TC/2026/31' },
];

const TradeCircular = () => {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.cream, minHeight: '90vh' }} className="pt-2 pb-16">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-14 pt-0">

        {/* Page Title Section - minimized top space */}
        <div className="text-center mb-6 mt-1">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '44px', fontWeight: 500, color: C.soil, margin: 0 }}>Trade Circular</h1>
          <div style={{ width: 40, height: 1.5, background: C.accent, margin: '8px auto 0' }} />
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {circulars.map((circular) => (
            <motion.div
              key={circular.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group flex flex-col justify-between"
              style={{
                background: 'white',
                border: `1px solid ${C.border}`,
                padding: '30px',
                borderRadius: 24,
                boxShadow: '0 4px 20px rgba(13,110,110,0.02)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(13, 110, 110, 0.06)';
                e.currentTarget.style.borderColor = C.primary;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(13,110,110,0.02)';
                e.currentTarget.style.borderColor = C.border;
              }}
            >
              <div className="flex flex-col items-start gap-4 mb-6">
                <div style={{ width: 46, height: 46, display: 'flex', alignItems: 'center', justifycontent: 'center', background: 'rgba(13, 110, 110, 0.06)', borderRadius: '16px' }} className="flex justify-center items-center">
                  <FileText size={20} color={C.accent} />
                </div>
                <div>
                  <span style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.15em', color: C.stone, fontWeight: 700, display: 'block', marginBottom: 6 }}>
                    Ref: {circular.ref}
                  </span>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 700, color: C.soil, margin: '0 0 8px', lineHeight: 1.35 }}>
                    {circular.title}
                  </h3>
                  <div style={{ fontSize: 11, color: C.stone, fontWeight: 600 }}>Date: {circular.date}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-5 mt-auto border-t" style={{ borderColor: C.border }}>
                <button style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '10px 16px', fontSize: 11, cursor: 'pointer', border: `1.5px solid ${C.border}`, color: C.primary, background: 'transparent', fontFamily: "'Outfit', sans-serif", transition: 'all 0.2s ease', borderRadius: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}
                  onMouseEnter={e => { e.currentTarget.style.background = C.primary; e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = C.primary; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = C.primary; e.currentTarget.style.borderColor = C.border; }}>
                  <Eye size={12} /> View
                </button>
                <button style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '10px 16px', fontSize: 11, cursor: 'pointer', border: `1.5px solid ${C.border}`, color: C.stone, background: 'transparent', fontFamily: "'Outfit', sans-serif", transition: 'all 0.2s ease', borderRadius: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = C.accent; e.currentTarget.style.color = C.accent; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.stone; }}>
                  <Printer size={12} /> Print
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TradeCircular;
