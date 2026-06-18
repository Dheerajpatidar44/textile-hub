import { motion } from 'framer-motion';
import { Bell, ChevronRight, Calendar } from 'lucide-react';

const C = {
  primary: '#222842',        // Slate Navy
  primaryDark: '#16192C',
  soil: '#222842',
  sand: '#FAF9FC',
  cream: '#FAF9FC',
  border: '#EAE7ED',
  stone: '#5C627A',
  accent: '#8D6F97',         // Mauve
};

const notices = [
  { id: 1, title: 'Annual General Meeting 2026', date: 'Nov 01, 2026', isNew: true },
  { id: 2, title: 'Warehouse Closure Notice for Maintenance (Ahmedabad Depot)', date: 'Oct 20, 2026', isNew: true },
  { id: 3, title: 'Introduction of e-Way Bill Integration in Partner Portal', date: 'Sep 15, 2026', isNew: true },
  { id: 4, title: 'Recruitment Drive for Zonal Sales Managers', date: 'Aug 22, 2026', isNew: false },
];

export default function NoticeBoard() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: C.cream, minHeight: '90vh' }} className="pt-10 pb-16">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-14 pt-0">

        {/* Page Title Section */}
        <div className="text-center mb-6">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '48px', fontWeight: 500, color: C.soil, margin: 0 }}>
            Notice Board
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.accent, margin: '12px auto 0' }} />
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
              style={{ padding: '24px 22px',
                background: notice.isNew ? 'rgba(141, 111, 151, 0.04)' : 'white',
                cursor: 'pointer',
                display: 'flex', flexDirection: 'column',
                borderRadius: 20,
                borderLeft: notice.isNew ? `4px solid ${C.accent}` : '4px solid transparent',
                border: `1px solid ${C.border}`,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(141, 111, 151, 0.08)';
                e.currentTarget.style.borderLeftColor = C.accent;
                e.currentTarget.style.transform = 'translateX(4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = notice.isNew ? 'rgba(141, 111, 151, 0.04)' : 'white';
                e.currentTarget.style.borderLeftColor = notice.isNew ? C.accent : 'transparent';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                  <div style={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(141, 111, 151, 0.08)', borderRadius: '50%' }}>
                    <Bell size={16} color={C.accent} />
                  </div>
                  {notice.isNew && (
                    <span style={{ fontSize: 9, padding: '3px 10px', color: C.accent, background: 'rgba(141, 111, 151, 0.1)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700, borderRadius: '50px' }}>
                      New
                    </span>
                  )}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                  <Calendar size={12} color={C.stone} />
                  <span style={{ fontSize: 11, color: C.stone, fontWeight: 500 }}>{notice.date}</span>
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 700, color: C.soil, lineHeight: 1.45, margin: '0 0 16px' }}>
                  {notice.title}
                </h3>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justify: 'space-between', paddingTop: 14, marginTop: 'auto', borderTop: `1px solid ${C.border}` }}>
                <span style={{ fontSize: 12, color: C.primary, fontWeight: 700 }}>Read More</span>
                <ChevronRight size={15} color={C.primary} />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
