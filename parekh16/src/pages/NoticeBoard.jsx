import React from 'react';
import { motion } from 'framer-motion';
import { Bell, ChevronRight } from 'lucide-react';

const NoticeBoard = () => {
  const notices = [
    { id: 1, title: 'Annual General Meeting 2026', date: 'Nov 01, 2026', isNew: true },
    { id: 2, title: 'Warehouse Closure Notice for Maintenance (Mumbai Depot)', date: 'Oct 20, 2026', isNew: true },
    { id: 3, title: 'Introduction of e-Way Bill Integration in Partner Portal', date: 'Sep 15, 2026', isNew: true },
    { id: 4, title: 'Recruitment Drive for Zonal Sales Managers', date: 'Aug 22, 2026', isNew: true },
  ];

  return (
    <div className="pb-16 -mt-6 lg:-mt-10 max-w-4xl mx-auto px-4">
      {/* Page Header Banner */}
      <div className="w-full bg-rosegold-500 text-white py-10 px-6 mb-8 text-center relative overflow-hidden border-b-4 border-rosegold-400 rounded-3xl shadow-md">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-transparent to-slate-900/40 z-0" />
        <div className="relative z-10">
          <h1 className="text-white border-0 pb-0 text-3xl md:text-4xl tracking-wider uppercase font-semibold m-0">Notice Board</h1>
          <p className="text-teal-100 text-[10px] md:text-xs uppercase tracking-widest mt-2 font-medium">Official Corporate Announcements</p>
        </div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
        {notices.map((notice) => (
          <div
            key={notice.id}
            className={`group bg-white border px-8 py-6 cursor-pointer flex items-center justify-between hover:shadow-lg transition-all duration-300 ${
              notice.isNew ? 'border-l-8 border-rosegold-500' : 'border-gray-200'
            }`}
          >
            <div className="flex items-start gap-5">
              <div className={`p-3 shrink-0 ${notice.isNew ? 'bg-rosegold-500/10' : 'bg-pearl-100'}`}>
                <Bell size={20} className={notice.isNew ? 'text-rosegold-500' : 'text-gray-450'} />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">{notice.date}</span>
                  {notice.isNew && (
                    <span className="bg-rosegold-500 text-pearl-100 text-[9px] px-2 py-0.5 uppercase tracking-widest font-bold shadow-sm">NEW</span>
                  )}
                </div>
                <h3 className="text-base font-semibold text-gray-900 group-hover:text-rosegold-500 transition-colors uppercase tracking-wide">{notice.title}</h3>
              </div>
            </div>
            <ChevronRight size={20} className="text-gray-400 group-hover:text-rosegold-500 transition-colors shrink-0" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default NoticeBoard;
