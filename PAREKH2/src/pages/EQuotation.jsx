import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import { FileText, CheckCircle, Clock } from 'lucide-react';

const EQuotation = () => {
  return (
    <div>
      <PageHeader title="e-Quotation" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Sample Quotations Section added above the form */}
        <div className="bg-brand-darkbrown text-white p-8 rounded-xl shadow-lg mb-8">
          <div className="flex items-center justify-between mb-6">
             <h3 className="text-2xl font-serif font-bold text-white">Recent Quotations</h3>
             <span className="text-sm bg-white/20 px-3 py-1 rounded-full text-brand-beige">Live Updates</span>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white/10 p-5 rounded-lg flex flex-col md:flex-row md:items-center justify-between border border-white/20 gap-4">
              <div className="flex items-start">
                <FileText className="text-brand-maroon w-8 h-8 mr-4 shrink-0 bg-white p-1.5 rounded-md" />
                <div>
                  <h4 className="font-bold text-lg text-white">Quote #QT-2023-891</h4>
                  <p className="text-sm text-gray-300 mt-1">Premium Silk Sarees (Qty: 500 pcs) for Retail Boutique</p>
                </div>
              </div>
              <div className="flex items-center text-sm font-medium bg-green-500/20 text-green-300 px-3 py-1.5 rounded-full whitespace-nowrap self-start md:self-auto">
                <CheckCircle className="w-4 h-4 mr-1.5" /> Approved
              </div>
            </div>

            <div className="bg-white/10 p-5 rounded-lg flex flex-col md:flex-row md:items-center justify-between border border-white/20 gap-4">
              <div className="flex items-start">
                <FileText className="text-brand-maroon w-8 h-8 mr-4 shrink-0 bg-white p-1.5 rounded-md" />
                <div>
                  <h4 className="font-bold text-lg text-white">Quote #QT-2023-892</h4>
                  <p className="text-sm text-gray-300 mt-1">Cotton Suiting Fabrics (Qty: 2000 meters)</p>
                </div>
              </div>
              <div className="flex items-center text-sm font-medium bg-yellow-500/20 text-yellow-300 px-3 py-1.5 rounded-full whitespace-nowrap self-start md:self-auto">
                <Clock className="w-4 h-4 mr-1.5" /> Processing
              </div>
            </div>
          </div>
        </div>

        {/* The Form Section */}
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-xl border border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text- mb-4">Request a New Quotation</h2>
            <p className="text-gray-600">Submit your specific product requirements to receive a formal e-Quotation from our sales team.</p>
          </div>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-maroon focus:border-brand-maroon p-3 border" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                <input type="text" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-maroon focus:border-brand-maroon p-3 border" required />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Product Category</label>
              <select className="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-maroon focus:border-brand-maroon p-3 border bg-white">
                <option>Sarees</option>
                <option>Suiting & Shirting</option>
                <option>Home Furnishing</option>
                <option>Ethnic Wear</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Expected Quantity</label>
              <input type="number" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-maroon focus:border-brand-maroon p-3 border" placeholder="e.g. 500 meters / 100 pieces" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Additional Specifications</label>
              <textarea rows="4" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-maroon focus:border-brand-maroon p-3 border" placeholder="Material preferences, color codes, delivery timeline..."></textarea>
            </div>
            
            <button type="submit" className="w-full bg-brand-maroon text-white font-bold py-4 px-6 rounded hover:bg-[#022c22] transition-colors shadow-lg">
              Generate Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EQuotation;
