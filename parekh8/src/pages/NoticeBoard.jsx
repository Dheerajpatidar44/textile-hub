import React from 'react';
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
    <div style={{ fontFamily: "'Outfit', sans-serif", background: '#FAF4EE' }}>

      {/* Hero Banner */}
      <div className="relative h-32 sm:h-40 overflow-hidden flex items-center justify-center text-center"
        >
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          
          <h1 className="font-bold text-5xl sm:text-6xl text-[#303030]"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Notice Board
          </h1>
        </div>
      </div>

      <div className="pb-16 max-w-7xl mx-auto px-4 py-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="group rounded-2xl p-5 cursor-pointer flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{
                background: '#FFFFFF',
                border: notice.isNew ? '1.5px solid rgba(225,77,42,0.3)' : '1.5px solid rgba(225,77,42,0.1)',
                borderTop: notice.isNew ? '4px solid #E14D2A' : '1.5px solid rgba(225,77,42,0.1)',
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: notice.isNew ? 'rgba(225,77,42,0.12)' : 'rgba(225,77,42,0.06)', border: '1px solid rgba(225,77,42,0.2)' }}>
                    <Bell size={18} color={notice.isNew ? '#E14D2A' : '#6B6B6B'} />
                  </div>
                  {notice.isNew && (
                    <span className="text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-widest text-[#303030]"
                      >
                      NEW
                    </span>
                  )}
                </div>
                <div className="flex flex-col mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider mb-2" style={{ color: '#6B6B6B' }}>{notice.date}</span>
                  <h3 className="text-[15px] font-bold leading-snug transition-colors line-clamp-3"
                    style={{ fontFamily: "'Playfair Display', serif", color: '#303030' }}>
                    {notice.title}
                  </h3>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t mt-auto" style={{ borderColor: 'rgba(225,77,42,0.1)' }}>
                 <span className="text-[11px] font-bold tracking-wide" style={{ color: '#E14D2A' }}>Read More</span>
                 <ChevronRight size={16} className="shrink-0 transition-transform group-hover:translate-x-1" color="#E14D2A" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default NoticeBoard;
