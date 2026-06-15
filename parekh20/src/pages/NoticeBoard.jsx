import { motion } from 'framer-motion';
import { Bell, ChevronRight } from 'lucide-react';

const notices = [
  { id: 1, title: 'Annual General Meeting 2026', date: 'Nov 01, 2026', isNew: true },
  { id: 2, title: 'Warehouse Closure Notice for Maintenance (Mumbai Depot)', date: 'Oct 20, 2026', isNew: true },
  { id: 3, title: 'Introduction of e-Way Bill Integration in Partner Portal', date: 'Sep 15, 2026', isNew: true },
  { id: 4, title: 'Recruitment Drive for Zonal Sales Managers', date: 'Aug 22, 2026', isNew: true },
];

const NoticeBoard = () => {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: '#FAF9F6' }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#152E47]"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Notice Board
          </h1>
        </div>
      </div>

      <div className="pb-16 max-w-7xl mx-auto px-4 py-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="group rounded-2xl p-5 bg-white cursor-pointer flex flex-col justify-between transition-all duration-300 hover:shadow-md"
              style={{
                border: notice.isNew ? '1.5px solid rgba(95,111,94,0.3)' : '1.5px solid #E8E5DC',
                borderTop: notice.isNew ? '4px solid #244C73' : '1.5px solid #E8E5DC',
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: notice.isNew ? 'rgba(95,111,94,0.12)' : 'rgba(95,111,94,0.06)', border: '1px solid rgba(95,111,94,0.2)' }}>
                    <Bell size={18} color={notice.isNew ? '#244C73' : '#6B7280'} />
                  </div>
                  {notice.isNew && (
                    <span className="text-[9px] px-2.5 py-1 rounded-full font-bold uppercase tracking-widest text-[#244C73] bg-[#E8F1FA]"
                      >
                      NEW
                    </span>
                  )}
                </div>
                <div className="flex flex-col mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider mb-2 text-[#6B7280]">{notice.date}</span>
                  <h3 className="text-[14px] font-bold leading-snug transition-colors line-clamp-3 text-[#152E47]"
                    style={{ fontFamily: "'Playfair Display', serif" }}>
                    {notice.title}
                  </h3>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-[#E8E5DC]/60 mt-auto">
                 <span className="text-[11px] font-bold tracking-wide text-[#244C73]">Read More</span>
                 <ChevronRight size={16} className="shrink-0 transition-transform group-hover:translate-x-1" color="#244C73" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default NoticeBoard;
