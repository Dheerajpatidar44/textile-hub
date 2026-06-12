import React from 'react';
import { motion } from 'framer-motion';
import { Bell, ArrowRight } from 'lucide-react';

const NoticeBoard = () => {
  const notices = [
    { id: 1, title: 'Annual General Meeting 2026', date: 'Nov 01, 2026', isNew: true },
    { id: 2, title: 'Warehouse Closure Notice for Maintenance (Mumbai Depot)', date: 'Oct 20, 2026', isNew: true },
    { id: 3, title: 'Introduction of e-Way Bill Integration in Partner Portal', date: 'Sep 15, 2026', isNew: true },
    { id: 4, title: 'Recruitment Drive for Zonal Sales Managers', date: 'Aug 22, 2026', isNew: true },
  ];

  return (
    <div className="pb-20 pt-12 max-w-7xl mx-auto px-6 bg-vastram-cream min-h-screen">
      
      <div className="text-center mb-16">
        <h1 className="font-playfair text-5xl text-vastram-brown">Notice Board</h1>
        <div className="h-[2px] w-12 bg-vastram-gold mx-auto mt-4"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {notices.map((notice) => (
          <div
            key={notice.id}
            className={`group bg-vastram-light rounded-none border border-vastram-border p-8 cursor-pointer flex flex-col justify-between hover:border-vastram-gold transition-all duration-300 aspect-square ${
              notice.isNew ? 'border-t-4 border-t-vastram-gold' : ''
            }`}
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-none ${notice.isNew ? 'bg-vastram-gold text-vastram-brown' : 'bg-vastram-border text-vastram-text/50'}`}>
                  <Bell size={24} />
                </div>
                {notice.isNew && (
                  <span className="bg-vastram-brown text-vastram-gold text-[9px] px-3 py-1 rounded-none uppercase tracking-widest font-bold">NEW</span>
                )}
              </div>
              
              <span className="text-[10px] text-vastram-text/60 font-bold uppercase tracking-[0.1em] block mb-3">
                {notice.date}
              </span>
              
              <h3 className="text-lg font-playfair font-bold text-vastram-text group-hover:text-vastram-gold transition-colors leading-snug">
                {notice.title}
              </h3>
            </div>
            
            <div className="mt-6 flex items-center text-[11px] font-bold tracking-widest text-vastram-text uppercase group-hover:text-vastram-gold transition-colors">
              Read Details <ArrowRight size={14} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default NoticeBoard;
