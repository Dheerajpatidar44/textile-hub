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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-4">
          {notices.map((notice) => (
            <div key={notice.id} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-brand-maroon hover:shadow-md transition-shadow cursor-pointer flex items-center justify-between group">
              <div className="flex items-start">
                <Bell className={`w-6 h-6 mr-4 shrink-0 mt-1 ${notice.isNew ? 'text-brand-maroon' : 'text-gray-400'}`} />
                <div>
                  <div className="flex items-center mb-1">
                    <span className="text-sm text-gray-500 font-medium">{notice.date}</span>
                    {notice.isNew && (
                      <span className="ml-3 bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded-full font-bold">NEW</span>
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-brand-maroon transition-colors">{notice.title}</h3>
                </div>
              </div>
              <ChevronRight className="text-gray-300 group-hover:text-brand-maroon transition-colors w-6 h-6 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
