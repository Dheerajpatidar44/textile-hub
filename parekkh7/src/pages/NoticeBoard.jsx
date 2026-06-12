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
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#FDF6EC' }}>

      {/* Hero Banner */}
      <div className="relative h-32 sm:h-40 overflow-hidden flex items-center justify-center text-center"
        style={{ background: 'linear-gradient(135deg, #1A0A05 0%, #2C1810 60%, #3D2418 100%)' }}>
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle, #C9A227 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          
          <h1 className="font-bold text-5xl sm:text-6xl text-white"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Notice Board
          </h1>
        </div>
      </div>

      <div className="pb-16 max-w-4xl mx-auto px-4 py-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="group rounded-2xl px-6 py-5 cursor-pointer flex items-center justify-between transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                background: '#FFFBF5',
                border: notice.isNew ? '1.5px solid rgba(201,162,39,0.3)' : '1.5px solid rgba(201,162,39,0.1)',
                borderLeft: notice.isNew ? '4px solid #C9A227' : '1.5px solid rgba(201,162,39,0.1)',
              }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: notice.isNew ? 'rgba(201,162,39,0.12)' : 'rgba(201,162,39,0.06)', border: '1px solid rgba(201,162,39,0.2)' }}>
                  <Bell size={18} color={notice.isNew ? '#C9A227' : '#A68B7C'} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: '#A68B7C' }}>{notice.date}</span>
                    {notice.isNew && (
                      <span className="text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-widest text-white"
                        style={{ background: 'linear-gradient(135deg, #C9A227, #E2C65A)', color: '#1A0A05' }}>
                        NEW
                      </span>
                    )}
                  </div>
                  <h3 className="text-[15px] font-bold leading-snug transition-colors"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: '#2C1810' }}>
                    {notice.title}
                  </h3>
                </div>
              </div>
              <ChevronRight size={20} className="shrink-0 ml-4 transition-transform group-hover:translate-x-1" color="#C9A227" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default NoticeBoard;
