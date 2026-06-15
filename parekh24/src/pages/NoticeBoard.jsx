import { motion } from 'framer-motion';
import { Bell, ChevronRight } from 'lucide-react';

const C = { 
  primary: '#C5A377', 
  primaryDark: '#3D3025', 
  accent: '#C5A377', 
  bg: '#F6F1EA', 
  bgLight: '#FAF7F2', 
  border: '#E8E2D7', 
  textDark: '#3D3025', 
  textMid: '#3D3025', 
  textMuted: '#C5A377' 
};

const notices = [
  { id: 1, title: 'Annual General Meeting 2026', date: 'Nov 01, 2026', isNew: true },
  { id: 2, title: 'Warehouse Closure Notice for Maintenance (Ahmedabad Depot)', date: 'Oct 20, 2026', isNew: true },
  { id: 3, title: 'Introduction of e-Way Bill Integration in Partner Portal', date: 'Sep 15, 2026', isNew: true },
  { id: 4, title: 'Recruitment Drive for Zonal Sales Managers', date: 'Aug 22, 2026', isNew: true },
];

const NoticeBoard = () => {
  return (
    <div style={{ fontFamily: "'Jost', sans-serif", background: C.bg }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center"
        style={{ background: 'linear-gradient(135deg, #F6F1EA 0%, #E8E2D7 100%)', borderBottom: `1px solid ${C.border}` }}>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-normal text-4xl sm:text-5xl serif-title" style={{ color: C.textDark }}>Notice Board</h1>
          <div className="w-12 h-[2px] mx-auto mt-3 rounded-full" style={{ background: C.primary }} />
        </div>
      </div>

      <div className="pb-16 max-w-7xl mx-auto px-4 py-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="group rounded-2xl p-5 bg-white cursor-pointer flex flex-col justify-between transition-all duration-300 hover:shadow-md border"
              style={{
                borderColor: notice.isNew ? 'rgba(197, 163, 119, 0.3)' : C.border,
                borderTop: notice.isNew ? `4px solid ${C.primary}` : `1px solid ${C.border}`,
              }}
            >
              {/* Content */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border"
                    style={{ background: 'rgba(197, 163, 119, 0.08)', borderColor: 'rgba(197, 163, 119, 0.2)' }}>
                    <Bell size={18} color={C.primary} />
                  </div>
                  {notice.isNew && (
                    <span className="text-[9px] px-2.5 py-1 rounded-full font-bold uppercase tracking-widest"
                      style={{ color: C.primary, background: C.bg }}>
                      NEW
                    </span>
                  )}
                </div>
                <div className="flex flex-col mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider mb-2 opacity-70" style={{ color: C.textDark }}>{notice.date}</span>
                  <h3 className="text-[14px] font-bold leading-snug line-clamp-3" style={{ color: C.textDark }}>
                    {notice.title}
                  </h3>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 mt-auto border-t" style={{ borderColor: C.border }}>
                <span className="text-[11px] font-bold tracking-wide" style={{ color: C.primary }}>Read More</span>
                <ChevronRight size={16} className="shrink-0 transition-transform group-hover:translate-x-1" color={C.primary} />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default NoticeBoard;
