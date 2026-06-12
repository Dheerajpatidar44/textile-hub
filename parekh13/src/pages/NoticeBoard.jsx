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
    <div style={{ fontFamily: "'Outfit', sans-serif", background: '#FAF6F0' }}>

      {/* Hero Banner */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex items-center justify-center text-center">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#2A083E]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Notice Board
          </h1>
        </div>
      </div>

      <div className="pb-16 max-w-7xl mx-auto px-4 py-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="group p-5 bg-white cursor-pointer flex flex-col justify-between transition-all duration-300 hover:shadow-md rounded-2xl"
              style={{
                border: notice.isNew ? '1.5px solid rgba(197, 160, 89, 0.4)' : '1.5px solid #EADBC8',
                borderTop: notice.isNew ? '4px solid #C5A059' : '1.5px solid #EADBC8',
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 flex items-center justify-center shrink-0 rounded-lg"
                    style={{ background: notice.isNew ? 'rgba(197, 160, 89, 0.12)' : 'rgba(197, 160, 89, 0.06)', border: '1px solid rgba(197, 160, 89, 0.2)' }}>
                    <Bell size={18} color={notice.isNew ? '#C5A059' : '#786B80'} />
                  </div>
                  {notice.isNew && (
                    <span className="text-[9px] px-2.5 py-1 font-bold uppercase tracking-widest text-[#C5A059] bg-[#C5A059]/10 rounded"
                      >
                      NEW
                    </span>
                  )}
                </div>
                <div className="flex flex-col mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider mb-2 text-[#786B80]">{notice.date}</span>
                  <h3 className="text-[14px] font-bold leading-snug transition-colors line-clamp-3 text-[#2A083E]"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {notice.title}
                  </h3>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-[#EADBC8] mt-auto">
                 <span className="text-[11px] font-bold tracking-wide text-[#C5A059]">Read More</span>
                 <ChevronRight size={16} className="shrink-0 transition-transform group-hover:translate-x-1" color="#C5A059" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default NoticeBoard;
