import { motion } from 'framer-motion';
import { FileText, Eye, Printer, Calendar } from 'lucide-react';

const C = {
  primary: '#0b3329',       // Dark Charcoal
  primaryLight: '#15473b',  // Medium Charcoal
  primaryDark: '#062c22',   // Deep Charcoal
  accent: '#bca374',        // Champagne Gold
  gold: '#bca374',
  bg: '#fcf8f2',
  border: '#eadacc',
  stone: '#4d5d59',
  soil: '#0b3329',
};

const circulars = [
  { id: 1, title: 'Revised Pricing for Silk Yarns - Q4', date: 'Oct 15, 2026', ref: 'TC/2026/45' },
  { id: 2, title: 'New Distributor Onboarding Guidelines', date: 'Sep 28, 2026', ref: 'TC/2026/42' },
  { id: 3, title: 'Festive Season Dispatch Schedule', date: 'Sep 10, 2026', ref: 'TC/2026/38' },
  { id: 4, title: 'GST Update on Handloom Products', date: 'Aug 05, 2026', ref: 'TC/2026/31' },
];

const TradeCircular = () => {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.bg, minHeight: '90vh' }} className="pt-2 pb-16">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-14 pt-0">

        {/* Page Title Section - minimized top space */}
        <div className="text-center mb-6 mt-2">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#bca374] uppercase mb-2 block">
            Updates
          </span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '38px', fontWeight: 700, color: C.soil, margin: 0, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
            Trade Circular
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.accent, margin: '8px auto 0' }} />
        </div>
  
        {/* Full-width stack */}
        <div className="flex flex-col gap-4 max-w-5xl mx-auto">
          {circulars.map((circular) => (
            <motion.div
              key={circular.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group flex flex-col md:flex-row md:items-center justify-between p-5 md:p-6 hover:translate-y-[-2px] transition-all"
              style={{
                background: 'white',
                border: `1px solid ${C.border}`,
                borderRadius: 16,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = C.accent;
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(43, 37, 32, 0.04)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = C.border;
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Left Side: Icon & Title */}
              <div className="flex items-center gap-4 flex-grow text-left">
                <div style={{ 
                  width: 44, height: 44, 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', 
                  background: 'rgba(197, 168, 128, 0.08)', 
                  borderRadius: '50%',
                  color: C.accent
                }} className="shrink-0">
                  <FileText size={20} />
                </div>
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 700, color: C.soil, margin: 0 }}>
                      {circular.title}
                    </h3>
                    <span style={{
                      fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.1em',
                      padding: '3px 8px', background: '#f5eee6', border: `1px solid ${C.border}`,
                      color: C.stone, fontWeight: 700, borderRadius: '4px'
                    }}>
                      Ref: {circular.ref}
                    </span>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 6 }}>
                    <Calendar size={12} color={C.stone} />
                    <span style={{ fontSize: 12, color: C.stone, fontWeight: 500 }}>Published: {circular.date}</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Action Buttons */}
              <div className="flex items-center gap-3 mt-4 md:mt-0 shrink-0 border-t md:border-none pt-4 md:pt-0" style={{ borderColor: C.border }}>
                <button style={{ 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, 
                  padding: '9px 18px', fontSize: 11, cursor: 'pointer', 
                  border: `1.5px solid ${C.border}`, color: C.primary, 
                  background: 'transparent', fontFamily: "'Outfit', sans-serif", 
                  transition: 'all 0.2s ease', borderRadius: 50, 
                  fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' 
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = C.primary; e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = C.primary; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = C.primary; e.currentTarget.style.borderColor = C.border; }}>
                  <Eye size={12} /> <span>View Circular</span>
                </button>
                <button style={{ 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, 
                  padding: '9px 18px', fontSize: 11, cursor: 'pointer', 
                  border: `1.5px solid ${C.border}`, color: C.stone, 
                  background: 'transparent', fontFamily: "'Outfit', sans-serif", 
                  transition: 'all 0.2s ease', borderRadius: 50, 
                  fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' 
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = C.accent; e.currentTarget.style.color = C.accent; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.stone; }}>
                  <Printer size={12} /> <span>Print</span>
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
