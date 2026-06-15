import { motion } from 'framer-motion';

export default function TradeEnquiry() {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-10 md:py-14 text-left">
      {/* Direct Page Heading (No Banner) */}
      <div className="mb-8 border-b border-[#BD7B88]/20 pb-4">
        <h1 className="text-[#3D223B] text-3xl md:text-4xl tracking-wider uppercase font-bold m-0 font-playfair">
          Trade Enquiry
        </h1>
      </div>

      <div className="mb-8">
        <p className="max-w-2xl text-[#7A6273] text-xs sm:text-sm leading-relaxed font-outfit">
          We welcome bulk orders, wholesale partnerships, and custom textile manufacturing requests. Fill out the form below to begin our collaboration.
        </p>
      </div>

      {/* Form Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 md:p-12 border border-[#BD7B88]/15 shadow-md rounded-2xl relative"
      >
        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-6">
            <h3 className="font-playfair text-xl text-[#3D223B] border-b border-gray-150 pb-3 font-semibold uppercase tracking-wider">
              Company Details
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[#3D223B] uppercase tracking-wider font-outfit block">
                  Company Name *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-[#FAF4F6] border border-[#BD7B88]/20 focus:outline-none focus:border-[#3D223B] focus:ring-1 focus:ring-[#3D223B]/10 rounded-lg text-sm transition-all"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[#3D223B] uppercase tracking-wider font-outfit block">
                  Contact Person *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-[#FAF4F6] border border-[#BD7B88]/20 focus:outline-none focus:border-[#3D223B] focus:ring-1 focus:ring-[#3D223B]/10 rounded-lg text-sm transition-all"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[#3D223B] uppercase tracking-wider font-outfit block">
                  Email Address *
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-[#FAF4F6] border border-[#BD7B88]/20 focus:outline-none focus:border-[#3D223B] focus:ring-1 focus:ring-[#3D223B]/10 rounded-lg text-sm transition-all"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[#3D223B] uppercase tracking-wider font-outfit block">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-[#FAF4F6] border border-[#BD7B88]/20 focus:outline-none focus:border-[#3D223B] focus:ring-1 focus:ring-[#3D223B]/10 rounded-lg text-sm transition-all"
                  required
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 pt-6">
            <h3 className="font-playfair text-xl text-[#3D223B] border-b border-gray-150 pb-3 font-semibold uppercase tracking-wider">
              Enquiry Details
            </h3>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-[#3D223B] uppercase tracking-wider font-outfit block">
                Interested Categories
              </label>
              <select className="w-full px-4 py-3 bg-[#FAF4F6] border border-[#BD7B88]/20 focus:outline-none focus:border-[#3D223B] focus:ring-1 focus:ring-[#3D223B]/10 rounded-lg text-[#3D223B] text-sm transition-all appearance-none cursor-pointer">
                <option>Sarees</option>
                <option>Leggings</option>
                <option>Kurtis</option>
                <option>Suiting & Shirting</option>
                <option>Home Furnishing</option>
                <option>Multiple / Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-[#3D223B] uppercase tracking-wider font-outfit block">
                Expected Order Volume
              </label>
              <select className="w-full px-4 py-3 bg-[#FAF4F6] border border-[#BD7B88]/20 focus:outline-none focus:border-[#3D223B] focus:ring-1 focus:ring-[#3D223B]/10 rounded-lg text-[#3D223B] text-sm transition-all appearance-none cursor-pointer">
                <option>Small (Below 1000 meters / units)</option>
                <option>Medium (1000 - 5000 meters / units)</option>
                <option>Large (5000+ meters / units)</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-[#3D223B] uppercase tracking-wider font-outfit block">
                Additional Requirements / Message
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 bg-[#FAF4F6] border border-[#BD7B88]/20 focus:outline-none focus:border-[#3D223B] focus:ring-1 focus:ring-[#3D223B]/10 rounded-lg text-sm transition-all resize-none"
              ></textarea>
            </div>
          </div>

          <button className="w-full bg-[#3D223B] hover:bg-[#4D2D4B] text-white py-4 rounded-xl font-bold uppercase tracking-widest transition-all duration-300 shadow-md cursor-pointer text-xs">
            Submit Trade Enquiry
          </button>
        </form>
      </motion.div>
    </div>
  );
}
