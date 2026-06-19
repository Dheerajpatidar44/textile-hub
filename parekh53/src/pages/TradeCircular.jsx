import { motion } from 'framer-motion';
import { FileText, Eye, Printer } from 'lucide-react';

const C = {
  primary: '#e2b865',        // Gold
  primaryDark: '#0a0c10',
  soil: '#e2b865',
  sand: '#12151c',
  cream: '#12151c',
  border: '#2a3142',
  stone: '#a0aec0',
  accent: '#e2b865',         // Gold Accent
};

const circulars = [
  { id: 1, title: 'Revised Pricing for Silk Yarns - Q4', date: 'Oct 15, 2026', ref: 'TC/2026/45' },
  { id: 2, title: 'New Distributor Onboarding Guidelines', date: 'Sep 28, 2026', ref: 'TC/2026/42' },
  { id: 3, title: 'Festive Season Dispatch Schedule', date: 'Sep 10, 2026', ref: 'TC/2026/38' },
  { id: 4, title: 'GST Update on Handloom Products', date: 'Aug 05, 2026', ref: 'TC/2026/31' },
];

const TradeCircular = () => {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: C.cream, minHeight: '90vh' }} className="pt-2 pb-16">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-14 pt-0">

        {/* Page Title Section */}
        <div className="text-center mb-6 mt-1">
          <h1 style={{ fontFamily: "'Cinzel', serif", fontSize: '44px', fontWeight: 500, color: C.soil, margin: 0 }}>Trade Circular</h1>
          <div style={{ width: 40, height: 1.5, background: C.accent, margin: '8px auto 0' }} />
        </div>
  
        {/* Changed grid layout to horizontal row stack */}
        <div className="flex flex-col gap-6">
          {circulars.map((circular) => (
            <motion.div
              key={circular.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group flex flex-col md:flex-row justify-between items-stretch md:items-center p-8 gap-6"
              style={{
                background: '#1b202c',
                border: `1px solid ${C.border}`,
                borderRadius: '0px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.2)';
                e.currentTarget.style.borderColor = C.primary;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = C.border;
              }}
            >
              <div className="flex items-start gap-4 flex-grow">
                <div style={{ width: 46, height: 46, display: 'flex', alignItems: 'center', justifycontent: 'center', background: 'rgba(226, 184, 101, 0.08)', borderRadius: '0px' }} className="flex justify-center items-center shrink-0">
                  <FileText size={20} color={C.accent} />
                </div>
                <div>
                  <span style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.15em', color: C.stone, fontWeight: 700, display: 'block', marginBottom: 4 }}>
                    Ref: {circular.ref}
                  </span>
                  <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: 18, fontWeight: 700, color: C.soil, margin: '0 0 6px', lineHeight: 1.35 }}>
                    {circular.title}
                  </h3>
                  <div style={{ fontSize: 11, color: C.stone, fontWeight: 600 }}>Date: {circular.date}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0 min-w-[200px]">
                <button style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '10px 16px', fontSize: 11, cursor: 'pointer', border: `1.5px solid ${C.primary}`, color: '#12151c', background: C.primary, fontFamily: "'Plus Jakarta Sans', sans-serif", transition: 'all 0.2s ease', borderRadius: '0px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#12151c'; e.currentTarget.style.borderColor = 'white'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = C.primary; e.currentTarget.style.color = '#12151c'; e.currentTarget.style.borderColor = C.primary; }}>
                  <Eye size={12} /> View
                </button>
                <button style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '10px 16px', fontSize: 11, cursor: 'pointer', border: `1.5px solid ${C.border}`, color: C.stone, background: 'transparent', fontFamily: "'Plus Jakarta Sans', sans-serif", transition: 'all 0.2s ease', borderRadius: '0px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = C.accent; e.currentTarget.style.color = 'white'; }}
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
