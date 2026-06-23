import React from 'react';
import { motion } from 'framer-motion';
import { Bell, ChevronRight } from 'lucide-react';

const NoticeBoard = () => {
  const notices = [
    { id: 1, title: 'Annual General Meeting 2026', date: 'Nov 01, 2026', isNew: true },
    { id: 2, title: 'Warehouse Closure Notice for Maintenance (Surat Depot)', date: 'Oct 20, 2026', isNew: true },
    { id: 3, title: 'Introduction of e-Way Bill Integration in Partner Portal', date: 'Sep 15, 2026', isNew: true },
    { id: 4, title: 'Recruitment Drive for Zonal Sales Managers', date: 'Aug 22, 2026', isNew: true },
  ];

  return (
    <div className="pb-16 w-full max-w-4xl mx-auto px-6 py-6 md:py-8 text-left font-outfit">
      {/* Compact Page Heading */}
      <div className="mb-8 border-b border-gray-200 pb-3">
        <h1 className="text-[#0C2E3A] text-2xl md:text-3xl tracking-wider uppercase font-bold m-0 font-playfair border-0 pb-0">
          Notice Board
        </h1>
      </div>

      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
        {notices.map((notice) => (
          <div
            key={notice.id}
            className={`group bg-white border px-6 py-5 cursor-pointer flex items-center justify-between hover:shadow-md transition-all duration-300 rounded-2xl ${
              notice.isNew ? 'border-l-4 border-[#0A5F73]' : 'border-gray-200'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className={`p-2.5 shrink-0 rounded-xl ${notice.isNew ? 'bg-[#F4F8F9] border border-gray-200' : 'bg-gray-50'}`}>
                <Bell size={18} className={notice.isNew ? 'text-[#0A5F73]' : 'text-gray-400'} />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1.5">
                  <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider font-outfit">{notice.date}</span>
                  {notice.isNew && (
                    <span className="bg-[#0A5F73] text-white text-[8px] px-2 py-0.5 uppercase tracking-widest font-bold font-outfit rounded-md shadow-sm">NEW</span>
                  )}
                </div>
                <h3 className="text-sm font-semibold text-[#0C2E3A] group-hover:text-[#0A5F73] transition-colors uppercase tracking-wider font-playfair">
                  {notice.title}
                </h3>
              </div>
            </div>
            <ChevronRight size={18} className="text-gray-400 group-hover:text-[#0A5F73] transition-colors shrink-0" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default NoticeBoard;
