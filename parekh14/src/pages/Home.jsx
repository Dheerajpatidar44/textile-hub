import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const featuredProducts = [
    {
      name: 'Royal Kanjivaram Silk Saree',
      category: 'Sarees',
      image: 'https://images.unsplash.com/photo-1705164453572-69b94a306f92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM3fHx8ZW58MHx8fHx8',
      desc: 'Woven with pure gold zari and fine mulberry silk, embodying traditional luxury.'
    },
    {
      name: 'Bespoke Heritage Sherwani',
      category: 'Formal & Ethnic Wear for Men',
      image: 'https://images.unsplash.com/photo-1678805408312-04e5fd7a9dcc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hlcnZhbml8ZW58MHx8MHx8fDA%3D',
      desc: 'Handcrafted embroidery on raw silk, designed for monumental celebrations.'
    },
    {
      name: 'Designer Handloom Kurti Set',
      category: 'Kurtis',
      image: 'https://images.unsplash.com/photo-1735553816867-88cd8496df58?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8',
      desc: 'A blend of contemporary silhouettes and artisanal handloom cotton.'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Top Action Bar & Hero Section with compact spacing */}
      <div className="space-y-4 -mt-6 lg:-mt-10">
        {/* Top Action Bar */}
        <div className="flex justify-end">
          <a
            href="/trade-enquiry"
            className="inline-flex items-center gap-3 bg-rosegold-500 hover:bg-rosegold-400 text-white px-8 py-3.5 font-bold uppercase tracking-widest transition-colors shadow-lg text-xs"
          >
            Trade Enquiry <ArrowRight size={16} />
          </a>
        </div>
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[450px] overflow-hidden shadow-2xl group border border-gray-200">
          <img
            src="images/hero.png"
            alt="Heritage Garments Hero"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 text-rosegold-500 mb-3"
            >
              <Sparkles size={16} />
              <span className="text-xs uppercase tracking-[0.3em] font-semibold">Est. 2026 / Chennai</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-playfair text-4xl md:text-6xl text-white leading-tight max-w-3xl font-bold uppercase tracking-wider border-0 pb-0 mb-0"
            >
              Timeless Threads, <br />
              <span className="text-rosegold-500 italic">Royal Elegance</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 text-gray-300 text-base md:text-lg max-w-2xl font-outfit leading-relaxed"
            >
              Discover a legacy of premium apparel, exquisite handlooms, and bespoke styling designed to define sophistication across generations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10"
            >
              <a href="/products" className="inline-flex items-center gap-3 bg-rosegold-500 text-pearl-100 px-8 py-4 font-semibold tracking-widest uppercase hover:bg-rosegold-400 transition-colors text-xs">
                Explore Collection <ArrowRight size={16} />
              </a>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Featured Collection Grid */}
      <section>
        <div className="flex justify-between items-end mb-10 border-b border-gray-200 pb-4">
          <div>
            <p className="text-rosegold-500 font-bold tracking-widest uppercase text-xs mb-2">Curated Masterpieces</p>
            <h2 className="font-playfair text-3xl text-gray-900 font-bold uppercase tracking-wide">Featured Collection</h2>
          </div>
          <a href="/products" className="inline-flex items-center gap-2 text-rosegold-500 hover:text-rosegold-400 transition-colors font-bold uppercase text-xs tracking-wider">
            View Catalogue <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((prod, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group flex flex-col bg-pearl-50 border border-gray-200 overflow-hidden hover:border-rosegold-500 transition-all duration-300 shadow-lg"
            >
              <div className="relative h-[220px] overflow-hidden">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6" />
                <span className="absolute top-4 left-4 bg-rosegold-500 text-pearl-100 text-[9px] uppercase tracking-widest px-3 py-1 font-bold">
                  {prod.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow bg-pearl-50">
                <h3 className="text-gray-900 font-playfair text-xl font-bold mb-2 group-hover:text-rosegold-500 transition-colors uppercase tracking-wide">{prod.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{prod.desc}</p>
                <a
                  href="/products"
                  className="inline-flex items-center gap-2 text-rosegold-500 hover:text-rosegold-400 font-bold uppercase text-xs tracking-wider border-b border-transparent hover:border-rosegold-500 w-fit pb-1 transition-all duration-200"
                >
                  View Details <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* e-Quotation & e-Auction Cards Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* e-Quotation Card */}
        <div className="relative overflow-hidden h-[240px] border border-gray-200 shadow-xl group">
          <img
            src="/equotation_banner.png"
            alt="e-Quotation"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f7f4ee]/95 via-[#f7f4ee]/85 to-transparent flex flex-col justify-center p-8 md:p-12" />
          <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12">
            <h3 className="font-playfair text-3xl font-bold text-gray-900 mb-2">
              <span className="font-outfit text-3xl font-normal lowercase">e</span>-Quotation
            </h3>
            <p className="text-gray-700 text-sm mb-6 max-w-[240px] leading-relaxed">
              Get instant wholesale prices in seconds.
            </p>
            <a
              href="/e-quotation"
              className="inline-flex items-center gap-2 bg-white text-rosegold-500 border border-gray-200 hover:bg-gray-50 px-6 py-3 font-semibold text-xs tracking-wider uppercase shadow-md w-fit transition-all duration-300"
            >
              Get Quote <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* e-Auction Card */}
        <div className="relative overflow-hidden h-[240px] border border-gray-200 shadow-xl group">
          <img
            src="/eauction_banner.png"
            alt="e-Auction"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#202720]/90 via-[#202720]/60 to-transparent flex flex-col justify-center p-8 md:p-12" />
          <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12">
            <h3 className="font-playfair text-3xl font-bold text-white mb-2">
              <span className="font-outfit text-3xl font-normal lowercase">e</span>-Auction
            </h3>
            <p className="text-gray-200 text-sm mb-6 max-w-[240px] leading-relaxed">
              Bid & win premium products.
            </p>
            <a
              href="/e-auction"
              className="inline-flex items-center gap-2 bg-white text-[#202720] hover:bg-gray-50 px-6 py-3 font-semibold text-xs tracking-wider uppercase shadow-md w-fit transition-all duration-300"
            >
              Join Auction <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
