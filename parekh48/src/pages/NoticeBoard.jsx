import { motion } from 'framer-motion';
import { Bell, ChevronRight, Calendar } from 'lucide-react';

const C = {
  primary: '#1E3E37',        // Slate Navy
  primaryDark: '#112521',
  soil: '#1E3E37',
  sand: '#FAF7F0',
  cream: '#FAF7F0',
  border: '#EFECE6',
  stone: '#536E67',
  accent: '#E2A93E',         // Mauve
};

const notices = [
  { id: 1, title: 'Annual General Meeting 2026', date: 'Nov 01, 2026', isNew: true },
  { id: 2, title: 'Warehouse Closure Notice for Maintenance (Ahmedabad Depot)', date: 'Oct 20, 2026', isNew: true },
  { id: 3, title: 'Introduction of e-Way Bill Integration in Partner Portal', date: 'Sep 15, 2026', isNew: true },
  { id: 4, title: 'Recruitment Drive for Zonal Sales Managers', date: 'Aug 22, 2026', isNew: false },
];

export default function NoticeBoard() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: C.cream, minHeight: '90vh' }} className="pt-4 pb-16">
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
                background: 'white',
                cursor: 'pointer',
                display: 'flex', flexDirection: 'column',
                borderRadius: 20,
                border: `1px solid ${C.border}`,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(30, 62, 55, 0.04)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(30, 62, 55, 0.05)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                  <div style={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(30, 62, 55, 0.08)', borderRadius: '50%' }}>
                    <Bell size={16} color={C.accent} />
                  </div>
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
