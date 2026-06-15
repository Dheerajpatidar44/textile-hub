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
    <div className="pb-16 w-full max-w-4xl mx-auto px-6 py-10 md:py-14 text-left">
      {/* Direct Page Heading */}
      <div className="mb-10 border-b border-[#BD7B88]/20 pb-4">
        <h1 className="text-[#3D223B] text-3xl md:text-4xl tracking-wider uppercase font-bold m-0 font-playfair">
          Notice Board
        </h1>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
        {notices.map((notice) => (
          <div
            key={notice.id}
            className={`group bg-white border px-8 py-6 cursor-pointer flex items-center justify-between hover:shadow-lg transition-all duration-300 rounded-xl ${
              notice.isNew ? 'border-l-8 border-[#3D223B]' : 'border-[#BD7B88]/15'
            }`}
          >
            <div className="flex items-start gap-5">
              <div className={`p-3 shrink-0 rounded-lg ${notice.isNew ? 'bg-[#FAF4F6] border border-[#BD7B88]/15' : 'bg-pearl-100'}`}>
                <Bell size={20} className={notice.isNew ? 'text-[#3D223B]' : 'text-gray-400'} />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider font-outfit">{notice.date}</span>
                  {notice.isNew && (
                    <span className="bg-[#3D223B] text-white text-[9px] px-2 py-0.5 uppercase tracking-widest font-bold font-outfit rounded-sm shadow-sm">NEW</span>
                  )}
                </div>
                <h3 className="text-base font-semibold text-[#3D223B] group-hover:text-[#BD7B88] transition-colors uppercase tracking-wide font-playfair">
                  {notice.title}
                </h3>
              </div>
            </div>
            <ChevronRight size={20} className="text-gray-450 group-hover:text-[#BD7B88] transition-colors shrink-0" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default NoticeBoard;
