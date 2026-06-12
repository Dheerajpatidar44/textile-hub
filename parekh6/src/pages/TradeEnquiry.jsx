import { motion } from 'framer-motion';

export default function TradeEnquiry() {
  return (
    <div className="space-y-16">
      <div className="text-center py-12">
        
        <h1 className="font-playfair text-5xl text-vastram-brown">Trade Enquiry</h1>
        <p className="mt-6 max-w-2xl mx-auto text-vastram-brown/70">
          We welcome bulk orders, wholesale partnerships, and custom textile manufacturing requests. Fill out the form below to begin our collaboration.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white p-10 md:p-14 rounded-none shadow-xl border border-vastram-light">
        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-6">
            <h3 className="font-playfair text-2xl text-vastram-brown border-b border-vastram-light pb-4">Company Details</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-vastram-brown">Company Name *</label>
                <input type="text" className="w-full px-4 py-3 rounded-none bg-vastram-cream border border-vastram-light focus:outline-none focus:border-vastram-gold" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-vastram-brown">Contact Person *</label>
                <input type="text" className="w-full px-4 py-3 rounded-none bg-vastram-cream border border-vastram-light focus:outline-none focus:border-vastram-gold" required />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-vastram-brown">Email Address *</label>
                <input type="email" className="w-full px-4 py-3 rounded-none bg-vastram-cream border border-vastram-light focus:outline-none focus:border-vastram-gold" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-vastram-brown">Phone Number *</label>
                <input type="tel" className="w-full px-4 py-3 rounded-none bg-vastram-cream border border-vastram-light focus:outline-none focus:border-vastram-gold" required />
              </div>
            </div>
          </div>

          <div className="space-y-6 pt-6">
            <h3 className="font-playfair text-2xl text-vastram-brown border-b border-vastram-light pb-4">Enquiry Details</h3>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-vastram-brown">Interested Categories</label>
              <select className="w-full px-4 py-3 rounded-none bg-vastram-cream border border-vastram-light focus:outline-none focus:border-vastram-gold">
                <option>Sarees</option>
                <option>Leggings</option>
                <option>Kurtis</option>
                <option>Suiting & Shirting</option>
                <option>Home Furnishing</option>
                <option>Multiple / Other</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-vastram-brown">Expected Order Volume</label>
              <select className="w-full px-4 py-3 rounded-none bg-vastram-cream border border-vastram-light focus:outline-none focus:border-vastram-gold">
                <option>Small (Below 1000 meters / units)</option>
                <option>Medium (1000 - 5000 meters / units)</option>
                <option>Large (5000+ meters / units)</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-vastram-brown">Additional Requirements / Message</label>
              <textarea rows={5} className="w-full px-4 py-3 rounded-none bg-vastram-cream border border-vastram-light focus:outline-none focus:border-vastram-gold resize-none"></textarea>
            </div>
          </div>

          <button className="w-full bg-vastram-brown text-vastram-cream py-4 rounded-none font-medium tracking-wide hover:bg-vastram-gold hover:text-vastram-brown transition-colors mt-8">
            Submit Trade Enquiry
          </button>
        </form>
      </div>
    </div>
  );
}
