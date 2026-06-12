import React from 'react';
import PageHeader from '../components/ui/PageHeader';

const TradeEnquiry = () => {
  return (
    <div>
      <PageHeader title="Trade Enquiry" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-xl border border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-brand-darkbrown mb-4">Partner With Us</h2>
            <p className="text-gray-600">Fill out the form below for bulk orders, distributorship, or any business-related inquiries.</p>
          </div>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
                <input type="text" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-maroon focus:border-brand-maroon p-3 border" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contact Person *</label>
                <input type="text" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-maroon focus:border-brand-maroon p-3 border" required />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <input type="email" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-maroon focus:border-brand-maroon p-3 border" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                <input type="tel" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-maroon focus:border-brand-maroon p-3 border" required />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Enquiry Type *</label>
              <select className="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-maroon focus:border-brand-maroon p-3 border bg-white" required>
                <option value="">Select Enquiry Type</option>
                <option value="bulk">Bulk Order</option>
                <option value="distributor">Distributorship</option>
                <option value="export">Export Inquiry</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message / Requirements</label>
              <textarea rows="5" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-maroon focus:border-brand-maroon p-3 border" placeholder="Please detail your requirements..."></textarea>
            </div>
            
            <div className="pt-4">
              <button type="submit" className="w-full bg-brand-maroon text-white font-bold py-4 px-6 rounded hover:bg-red-900 transition-colors shadow-lg">
                Submit Enquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TradeEnquiry;
