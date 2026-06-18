import { motion } from 'framer-motion';
import { Bell, ChevronRight, Calendar } from 'lucide-react';

const C = {
  primary: '#A3704C',      // Gold/Bronze accent
  primaryLight: '#C49272',
  soil: '#231F20',
  sand: '#F4EDE4',
  cream: '#FAF8F5',
  border: '#EAE5DE',
  stone: '#5B5653',
  accent: '#A3704C',
};

const notices = [
  { id: 1, title: 'Annual General Meeting 2026', date: 'Nov 01, 2026', isNew: true },
  { id: 2, title: 'Warehouse Closure Notice for Maintenance (Ahmedabad Depot)', date: 'Oct 20, 2026', isNew: true },
  { id: 3, title: 'Introduction of e-Way Bill Integration in Partner Portal', date: 'Sep 15, 2026', isNew: true },
  { id: 4, title: 'Recruitment Drive for Zonal Sales Managers', date: 'Aug 22, 2026', isNew: false },
];

export default function NoticeBoard() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.cream, minHeight: '100vh' }} className="pt-[110px] pb-20">

      {/* Page Title inside section with minimal gap */}
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14 mb-8 text-left">
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, color: C.soil, margin: 0 }}>
          Notice Board
        </h1>
        <div style={{ width: 44, height: 2, background: C.primary, borderRadius: 2, marginTop: 10 }} />
      </div>

      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-14">
  
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="text-left"
              style={{
                borderRadius: 16, padding: '24px 22px',
                background: notice.isNew ? 'rgba(163, 112, 76, 0.04)' : 'white',
                cursor: 'pointer',
                display: 'flex', flexDirection: 'column',
                borderLeft: notice.isNew ? `4px solid ${C.accent}` : '4px solid transparent',
                border: `1px solid ${C.border}`,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(163, 112, 76, 0.08)';
                e.currentTarget.style.borderLeftColor = C.accent;
                e.currentTarget.style.transform = 'translateX(4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = notice.isNew ? 'rgba(163, 112, 76, 0.04)' : 'white';
                e.currentTarget.style.borderLeftColor = notice.isNew ? C.accent : 'transparent';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, display: 'flex', alignItems: 'center', justify: 'center', background: 'rgba(163, 112, 76, 0.1)', border: `1px solid rgba(163, 112, 76, 0.2)` }}>
                    <Bell size={18} color={C.accent} />
                  </div>
                  {notice.isNew && (
                    <span style={{ fontSize: 9, padding: '3px 10px', borderRadius: 20, color: C.accent, background: C.sand, letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, border: `1px solid rgba(163, 112, 76, 0.2)` }}>
                      New
                    </span>
                  )}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                  <Calendar size={12} color={C.stone} />
                  <span style={{ fontSize: 11, color: C.stone, fontWeight: 400 }}>{notice.date}</span>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 600, color: C.soil, lineHeight: 1.45, margin: '0 0 16px' }}>
                  {notice.title}
                </h3>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 14, marginTop: 'auto', borderTop: `1px solid ${C.border}` }}>
                <span style={{ fontSize: 12, color: C.primary, fontWeight: 600 }}>Read More</span>
                <ChevronRight size={15} className="text-[#A3704C]" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
