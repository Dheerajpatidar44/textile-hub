import React, { useState } from 'react';
import PageHeader from '../components/ui/PageHeader';
import GalleryCard from '../components/cards/GalleryCard';

const MediaGallery = () => {
  const [filter, setFilter] = useState('All');

  const galleryItems = [
    { id: 1, type: 'Event', title: 'Annual Textile Expo 2023', image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800' },
    { id: 2, type: 'Store', title: 'Mumbai Flagship Store', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800' },
    { id: 3, type: 'Factory', title: 'Surat Weaving Unit', image: 'https://images.unsplash.com/photo-1610030469983-98e550905b0f?auto=format&fit=crop&q=80&w=800' },
    { id: 4, type: 'Product', title: 'New Silk Collection Launch', image: 'https://images.unsplash.com/photo-1583391733958-650fac5ecf7c?auto=format&fit=crop&q=80&w=800' },
    { id: 5, type: 'Store', title: 'Delhi Outlet Opening', image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e5?auto=format&fit=crop&q=80&w=800' },
    { id: 6, type: 'Event', title: 'International Buyers Meet', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800' },
  ];

  const filters = ['All', 'Store', 'Event', 'Factory', 'Product'];
  const filteredItems = filter === 'All' ? galleryItems : galleryItems.filter(item => item.type === filter);

  return (
    <div>
      <PageHeader title="Media Gallery" />

      <div className="bg-[#FAF7F0] py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2.5 text-xs uppercase tracking-widest font-medium transition-all duration-200 ${
                  filter === f
                    ? 'bg-[#0B1C3E] text-white'
                    : 'bg-white border border-[#0B1C3E]/15 text-[#6B7A99] hover:border-[#D4A853] hover:text-[#D4A853]'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredItems.map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaGallery;
