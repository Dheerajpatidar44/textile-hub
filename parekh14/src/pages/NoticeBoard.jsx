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
    <div className="pb-16 -mt-8 max-w-4xl mx-auto px-4">

      
      <div className="text-center pt-0 pb-2 mb-4">
        <h1>Notice Board</h1>
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
                <Bell size={20} className={notice.isNew ? 'text-rosegold-500' : 'text-gray-400'} />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">{notice.date}</span>
                  {notice.isNew && (
                    <span className="bg-rosegold-500 text-pearl-100 text-[10px] px-2.5 py-0.5 uppercase tracking-widest font-bold shadow-sm">NEW</span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-rosegold-500 transition-colors">{notice.title}</h3>
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
