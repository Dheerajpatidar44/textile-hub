import { motion } from 'framer-motion';
import { FileText, Eye, Printer } from 'lucide-react';

const C = {
  primary: '#2A3B4C',        // Premium Olive Green
  primaryDark: '#1B2735',
  soil: '#2A3B4C',
  sand: '#FAF8F5',
  cream: '#FAF8F5',
  border: '#E6E4DF',
  stone: '#5E6E7D',
  accent: '#B8624E',         // Terracotta Accent
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
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
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
                padding: '24px',
                borderRadius: 20,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(67, 83, 61, 0.04)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="flex flex-col items-start gap-4 mb-5">
                <div style={{ width: 42, height: 42, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(67, 83, 61, 0.08)', borderRadius: '50%' }}>
                  <FileText size={18} color={C.accent} />
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 700, color: C.soil, margin: '0 0 6px' }}>{circular.title}</h3>
                  <div style={{ fontSize: 11, color: C.stone, fontWeight: 500 }}>Date: {circular.date}</div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-4 mt-auto border-t" style={{ borderColor: C.border }}>
                <button style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '8px 12px', fontSize: 11, cursor: 'pointer', border: `1.5px solid ${C.border}`, color: C.primary, background: 'transparent', fontFamily: "'Outfit', sans-serif", transition: 'all 0.2s ease', borderRadius: '50px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}
                  onMouseEnter={e => { e.currentTarget.style.background = C.primary; e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = C.primary; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = C.primary; e.currentTarget.style.borderColor = C.border; }}>
                  <Eye size={12} /> View
                </button>
                <button style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '8px 12px', fontSize: 11, cursor: 'pointer', border: `1.5px solid ${C.border}`, color: C.stone, background: 'transparent', fontFamily: "'Outfit', sans-serif", transition: 'all 0.2s ease', borderRadius: '50px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}
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
