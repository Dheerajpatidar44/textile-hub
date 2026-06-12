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

  const filteredItems = filter === 'All' ? galleryItems : galleryItems.filter(item => item.type === filter);

  return (
    <div>
      <PageHeader title="Business Media Gallery" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['All', 'Store', 'Event', 'Factory', 'Product'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === category 
                  ? 'bg-brand-maroon text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaGallery;
