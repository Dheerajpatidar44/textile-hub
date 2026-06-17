import { motion } from 'framer-motion';
import { Bell, ChevronRight, Calendar } from 'lucide-react';

const C = {
  primary: '#1a1a2e',
  primaryDark: '#0f0f1c',
  soil: '#2d1a13',
  sand: '#efe3d5',
  cream: '#fdfaf6',
  border: '#e6dacb',
  stone: '#7c6a5e',
  accent: '#C9A455',
};

const notices = [
  { id: 1, title: 'Annual General Meeting 2026', date: 'Nov 01, 2026', isNew: true },
  { id: 2, title: 'Warehouse Closure Notice for Maintenance (Ahmedabad Depot)', date: 'Oct 20, 2026', isNew: true },
  { id: 3, title: 'Introduction of e-Way Bill Integration in Partner Portal', date: 'Sep 15, 2026', isNew: true },
  { id: 4, title: 'Recruitment Drive for Zonal Sales Managers', date: 'Aug 22, 2026', isNew: false },
];

export default function NoticeBoard() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.cream, minHeight: '100vh' }} className="pt-[80px] pb-20">

      <div className="max-w-[90rem] mx-auto px-6 lg:px-14 pt-0">

        {/* Page Title Section */}
        <div className="text-center mb-6">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 600, color: C.soil, margin: '0 0 12px' }}>
            Notice Board
          </h1>
          <div style={{ width: 50, height: 2, background: C.accent, borderRadius: 2, margin: '0 auto' }} />
        </div>
  
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="card-hover text-left"
              style={{
                borderRadius: 16, padding: '24px 22px',
                background: notice.isNew ? 'rgba(139, 94, 60, 0.04)' : 'white',
                cursor: 'pointer',
                display: 'flex', flexDirection: 'column',
                borderLeft: notice.isNew ? `4px solid ${C.accent}` : '4px solid transparent',
                border: `1px solid ${C.border}`,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(139, 94, 60, 0.08)';
                e.currentTarget.style.borderLeftColor = C.accent;
                e.currentTarget.style.transform = 'translateX(4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = notice.isNew ? 'rgba(139, 94, 60, 0.04)' : 'white';
                e.currentTarget.style.borderLeftColor = notice.isNew ? C.accent : 'transparent';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justify: 'space-between', marginBottom: 16 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, display: 'flex', alignItems: 'center', justify: 'center', background: 'rgba(139, 94, 60, 0.1)', border: `1px solid rgba(139, 94, 60, 0.2)` }}>
                    <Bell size={18} color={C.accent} />
                  </div>
                  {notice.isNew && (
                    <span style={{ fontSize: 9, padding: '3px 10px', borderRadius: 20, color: C.accent, background: C.sand, letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, border: `1px solid rgba(139, 94, 60, 0.2)` }}>
                      New
                    </span>
                  )}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                  <Calendar size={12} color={C.stone} />
                  <span style={{ fontSize: 11, color: C.stone, fontWeight: 400 }}>{notice.date}</span>
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 16, fontWeight: 600, color: C.soil, lineHeight: 1.45, margin: '0 0 16px' }}>
                  {notice.title}
                </h3>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justify: 'space-between', paddingTop: 14, marginTop: 'auto', borderTop: `1px solid ${C.border}` }}>
                <span style={{ fontSize: 12, color: C.primary, fontWeight: 500 }}>Read More</span>
                <ChevronRight size={15} color={C.primary} />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}



