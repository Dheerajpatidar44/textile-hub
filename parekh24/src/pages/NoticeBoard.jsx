import { motion } from 'framer-motion';
import { Bell, ChevronRight } from 'lucide-react';

const C = { 
  primary: '#6E64B4', 
  primaryDark: '#252131', 
  accent: '#6E64B4', 
  bg: '#FAF9F5', 
  bgLight: '#FAF9F5', 
  border: '#E1DFEB', 
  textDark: '#252131', 
  textMid: '#252131', 
  textMuted: '#6E64B4' 
};

const notices = [
  { id: 1, title: 'Annual General Meeting 2026', date: 'Nov 01, 2026', isNew: true },
  { id: 2, title: 'Warehouse Closure Notice for Maintenance (Mumbai Depot)', date: 'Oct 20, 2026', isNew: true },
  { id: 3, title: 'Introduction of e-Way Bill Integration in Partner Portal', date: 'Sep 15, 2026', isNew: true },
  { id: 4, title: 'Recruitment Drive for Zonal Sales Managers', date: 'Aug 22, 2026', isNew: true },
];

const NoticeBoard = () => {
  return (
    <div style={{ fontFamily: "'Urbanist', sans-serif", background: C.bg }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center"
        style={{ background: 'linear-gradient(135deg, #FAF9F5 0%, #E1DFEB 100%)', borderBottom: `1px solid ${C.border}` }}>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-black text-4xl sm:text-5xl serif-title" style={{ color: C.textDark }}>Notice Board</h1>
          <div className="w-12 h-[2.5px] mx-auto mt-3 rounded-full" style={{ background: C.primary }} />
        </div>
      </div>

      <div className="pb-16 max-w-7xl mx-auto px-4 py-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="group rounded-2xl p-5 bg-white cursor-pointer flex flex-col justify-between transition-all duration-300 hover:shadow-md border"
              style={{
                borderColor: notice.isNew ? 'rgba(110, 100, 180, 0.3)' : C.border,
                borderTop: notice.isNew ? `4px solid ${C.primary}` : `1px solid ${C.border}`,
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border"
                    style={{ background: 'rgba(110, 100, 180, 0.08)', borderColor: 'rgba(110, 100, 180, 0.2)' }}>
                    <Bell size={18} color={C.primary} />
                  </div>
                  {notice.isNew && (
                    <span className="text-[9px] px-2.5 py-1 rounded-full font-black uppercase tracking-widest"
                      style={{ color: C.primary, background: C.bg }}>
                      NEW
                    </span>
                  )}
                </div>
                <div className="flex flex-col mb-4">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider mb-2 opacity-70" style={{ color: C.textDark }}>{notice.date}</span>
                  <h3 className="text-[14px] font-bold leading-snug line-clamp-3" style={{ color: C.textDark }}>
                    {notice.title}
                  </h3>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 mt-auto border-t" style={{ borderColor: C.border }}>
                <span className="text-[11px] font-black tracking-wide" style={{ color: C.primary }}>Read More</span>
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
