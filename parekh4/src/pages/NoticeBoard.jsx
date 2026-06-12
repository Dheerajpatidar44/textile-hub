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
    <div className="pb-16 max-w-4xl mx-auto px-4">

      
      <div className="text-center py-10 mb-6">
        <h1 className="font-playfair text-4xl lg:text-5xl text-[#2d0a4e] font-bold">Notice Board</h1>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
        {notices.map((notice) => (
          <div
            key={notice.id}
            className={`group bg-white rounded-2xl border px-8 py-6 cursor-pointer flex items-center justify-between hover:shadow-lg transition-all duration-300 ${
              notice.isNew ? 'border-l-8 border-[#d8a5ad]' : 'border-gray-100'
            }`}
          >
            <div className="flex items-start gap-5">
              <div className={`p-3 rounded-full shrink-0 ${notice.isNew ? 'bg-[#d8a5ad]/10' : 'bg-gray-50'}`}>
                <Bell size={20} className={notice.isNew ? 'text-[#d8a5ad]' : 'text-gray-400'} />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">{notice.date}</span>
                  {notice.isNew && (
                    <span className="bg-[#d8a5ad] text-white text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-widest font-bold shadow-sm">NEW</span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-[#2d0a4e] group-hover:text-[#d8a5ad] transition-colors">{notice.title}</h3>
              </div>
            </div>
            <ChevronRight size={20} className="text-gray-300 group-hover:text-[#d8a5ad] transition-colors shrink-0" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default NoticeBoard;
