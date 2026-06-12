import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import { Bell, ChevronRight } from 'lucide-react';

const NoticeBoard = () => {
  const notices = [
    { id: 1, title: 'Annual General Meeting 2023', date: 'Nov 01, 2023', isNew: true },
    { id: 2, title: 'Warehouse Closure Notice for Maintenance (Mumbai Depot)', date: 'Oct 20, 2023', isNew: true },
    { id: 3, title: 'Introduction of e-Way Bill Integration in Partner Portal', date: 'Sep 15, 2023', isNew: false },
    { id: 4, title: 'Recruitment Drive for Zonal Sales Managers', date: 'Aug 22, 2023', isNew: false },
  ];

  return (
    <div>
      <PageHeader title="Notice Board" />

      <div className="bg-[#FAF7F0] py-24">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <div className="space-y-3">
            {notices.map((notice) => (
              <div
                key={notice.id}
                className={`group bg-white border-l-4 px-7 py-5 cursor-pointer flex items-center justify-between hover:shadow-[0_4px_20px_rgba(11,28,62,0.1)] transition-all duration-300 ${
                  notice.isNew ? 'border-[#D4A853]' : 'border-[#0B1C3E]/15'
                }`}
              >
                <div className="flex items-start gap-4">
                  <Bell size={16} className={`shrink-0 mt-1 ${notice.isNew ? 'text-[#D4A853]' : 'text-[#6B7A99]'}`} />
                  <div>
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="text-xs text-[#6B7A99] font-light">{notice.date}</span>
                      {notice.isNew && (
                        <span className="bg-[#D4A853]/15 text-[#D4A853] text-[0.55rem] px-2 py-0.5 uppercase tracking-widest font-medium">NEW</span>
                      )}
                    </div>
                    <h3 className="text-sm font-medium text-[#0B1C3E] group-hover:text-[#D4A853] transition-colors">{notice.title}</h3>
                  </div>
                </div>
                <ChevronRight size={16} className="text-[#0B1C3E]/20 group-hover:text-[#D4A853] transition-colors shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
