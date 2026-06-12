import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import SectionTitle from '../components/ui/SectionTitle';
import { BarChart3, Users, Globe, Target } from 'lucide-react';

const RetailManagement = () => {
  return (
    <div>
      <PageHeader title="Our Retail Management" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionTitle 
          title="Excellence in Operations" 
          subtitle="Discover how we manage a vast network of retail supply chains to deliver unparalleled quality."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-light text-brand-maroon mb-4">
              <Globe className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-brand-darkbrown mb-2">Global Sourcing</h3>
            <p className="text-gray-600 text-sm">Procuring the finest yarns and fabrics from trusted international and domestic suppliers.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-light text-brand-maroon mb-4">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-brand-darkbrown mb-2">Quality Control</h3>
            <p className="text-gray-600 text-sm">Rigorous multi-stage quality checks ensuring only the best reaches our shelves.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-light text-brand-maroon mb-4">
              <BarChart3 className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-brand-darkbrown mb-2">Inventory Management</h3>
            <p className="text-gray-600 text-sm">State-of-the-art warehousing and real-time stock tracking for zero delays.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-light text-brand-maroon mb-4">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-brand-darkbrown mb-2">Customer Relations</h3>
            <p className="text-gray-600 text-sm">Dedicated B2B relationship managers to assist wholesale and retail partners.</p>
          </div>
        </div>

        <div className="bg-brand-darkbrown text-white rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-serif font-bold mb-6">Partnering for Growth</h2>
              <p className="text-gray-300 mb-6">
                Our retail management strategy focuses on mutual growth. We offer franchisee opportunities, shop-in-shop models, and bulk distribution channels. Our tech-enabled supply chain ensures that our partners always have access to the latest trends and stock availability.
              </p>
              <button className="self-start bg-brand-maroon text-white px-6 py-3 rounded font-bold hover:bg-[#022c22] transition-colors">
                Become a Partner
              </button>
            </div>
            <div className="h-full">
              <img 
                src="https://images.unsplash.com/photo-1584227185011-8071e6be12b5?auto=format&fit=crop&q=80&w=800" 
                alt="Retail Management" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetailManagement;
