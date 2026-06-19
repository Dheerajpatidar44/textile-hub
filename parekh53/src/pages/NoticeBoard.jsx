import { motion } from 'framer-motion';
import { Bell, ChevronRight, Calendar } from 'lucide-react';

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

const notices = [
  { id: 1, title: 'Annual General Meeting 2026', date: 'Nov 01, 2026', isNew: true },
  { id: 2, title: 'Warehouse Closure Notice for Maintenance (Ahmedabad Depot)', date: 'Oct 20, 2026', isNew: true },
  { id: 3, title: 'Introduction of e-Way Bill Integration in Partner Portal', date: 'Sep 15, 2026', isNew: true },
  { id: 4, title: 'Recruitment Drive for Zonal Sales Managers', date: 'Aug 22, 2026', isNew: false },
];

export default function NoticeBoard() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: C.cream, minHeight: '90vh' }} className="pt-2 pb-16">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-14 pt-0">

        {/* Page Title Section */}
        <div className="text-center mb-6 mt-1">
          <h1 style={{ fontFamily: "'Cinzel', serif", fontSize: '44px', fontWeight: 500, color: C.soil, margin: 0 }}>
            Notice Board
          </h1>
          <div style={{ width: 40, height: 1.5, background: C.accent, margin: '8px auto 0' }} />
        </div>

        {/* Changed grid layout to horizontal row stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-6"
        >
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="text-left"
              style={{
                padding: '24px 28px',
                background: '#1b202c',
                cursor: 'pointer',
                display: 'flex', flexDirection: 'column',
                borderRadius: '0px',
                border: `1px solid ${C.border}`,
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
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = C.border;
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div style={{ width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(226, 184, 101, 0.08)', borderRadius: '0px' }}>
                    <Bell size={18} color={C.accent} />
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <Calendar size={12} color={C.stone} />
                        <span style={{ fontSize: 11, color: C.stone, fontWeight: 500 }}>{notice.date}</span>
                      </div>
                      {notice.isNew && (
                        <span style={{ fontSize: 8, fontWeight: 700, padding: '2px 8px', background: 'rgba(226, 184, 101, 0.15)', color: C.primary, borderRadius: '0px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>New</span>
                      )}
                    </div>
                    <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: 18, fontWeight: 700, color: C.soil, lineHeight: 1.4, margin: 0 }}>
                      {notice.title}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center justify-end sm:justify-center border-t sm:border-t-0 pt-3 sm:pt-0 shrink-0" style={{ borderColor: C.border }}>
                  <span style={{ fontSize: 12, color: C.primary, fontWeight: 700, marginRight: 4 }}>Read More</span>
                  <ChevronRight size={15} color={C.primary} />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
