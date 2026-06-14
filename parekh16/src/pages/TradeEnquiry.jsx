import { motion } from 'framer-motion';

export default function TradeEnquiry() {
  return (
    <div className="pb-16 -mt-6 lg:-mt-10 max-w-4xl mx-auto px-4">
      {/* Page Header Banner */}
      <div className="w-full bg-rosegold-500 text-white py-10 px-6 mb-6 text-center relative overflow-hidden border-b-4 border-rosegold-400 shadow-md">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-transparent to-slate-900/40 z-0" />
        <div className="relative z-10">
          <h1 className="text-white border-0 pb-0 text-3xl md:text-4xl tracking-wider uppercase font-semibold m-0">Trade Enquiry</h1>
          <p className="text-teal-100 text-[10px] md:text-xs uppercase tracking-widest mt-2 font-medium">Bulk Orders & Wholesale Collaborations</p>
        </div>
      </div>

      <div className="text-center mb-8">
        <p className="max-w-2xl mx-auto text-gray-600 text-sm leading-relaxed">
          We welcome bulk orders, wholesale partnerships, and custom textile manufacturing requests. Fill out the form below to begin our collaboration.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 border border-gray-200 shadow-xl">
        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-6">
            <h3 className="font-playfair text-xl text-gray-900 border-b border-gray-200 pb-3 font-semibold uppercase tracking-wider">Company Details</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Company Name *</label>
                <input type="text" className="w-full px-4 py-3 bg-pearl-100 border border-gray-200 focus:outline-none focus:border-rosegold-500" required />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Contact Person *</label>
                <input type="text" className="w-full px-4 py-3 bg-pearl-100 border border-gray-200 focus:outline-none focus:border-rosegold-500" required />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Email Address *</label>
                <input type="email" className="w-full px-4 py-3 bg-pearl-100 border border-gray-200 focus:outline-none focus:border-rosegold-500" required />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Phone Number *</label>
                <input type="tel" className="w-full px-4 py-3 bg-pearl-100 border border-gray-200 focus:outline-none focus:border-rosegold-500" required />
              </div>
            </div>
          </div>

          <div className="space-y-6 pt-6">
            <h3 className="font-playfair text-xl text-gray-900 border-b border-gray-200 pb-3 font-semibold uppercase tracking-wider">Enquiry Details</h3>
            
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Interested Categories</label>
              <select className="w-full px-4 py-3 bg-pearl-100 border border-gray-200 focus:outline-none focus:border-rosegold-500 text-gray-700 text-sm">
                <option>Sarees</option>
                <option>Leggings</option>
                <option>Kurtis</option>
                <option>Suiting & Shirting</option>
                <option>Home Furnishing</option>
                <option>Multiple / Other</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Expected Order Volume</label>
              <select className="w-full px-4 py-3 bg-pearl-100 border border-gray-200 focus:outline-none focus:border-rosegold-500 text-gray-700 text-sm">
                <option>Small (Below 1000 meters / units)</option>
                <option>Medium (1000 - 5000 meters / units)</option>
                <option>Large (5000+ meters / units)</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Additional Requirements / Message</label>
              <textarea rows={5} className="w-full px-4 py-3 bg-pearl-100 border border-gray-200 focus:outline-none focus:border-rosegold-500 resize-none text-sm"></textarea>
            </div>
          </div>

          <button className="w-full bg-rosegold-500 text-white py-4 font-bold uppercase tracking-widest hover:bg-rosegold-400 transition-colors mt-8 shadow-md">
            Submit Trade Enquiry
          </button>
        </form>
      </div>
    </div>
  );
}
