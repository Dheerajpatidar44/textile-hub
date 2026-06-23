import { ArrowRight, ShieldCheck, Truck, Award, Headphones, ChevronRight, FileText, Gavel, BookOpen, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  // Categories matching original order
  const categoryList = [
    { name: 'Sarees', sub: 'Timeless Tradition', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=60' },
    { name: 'Leggings', sub: 'Comfort Fit', image: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=600&auto=format&fit=crop&q=60' },
    { name: 'Kurtis', sub: 'Everyday Grace', image: 'https://images.unsplash.com/photo-1669199814244-75e25eb1a1bd?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { name: 'Dress Suits', sub: 'Style Redefined', image: 'https://images.unsplash.com/photo-1631857455684-a54a2f03665f?w=600&auto=format&fit=crop&q=60' },
    { name: 'Bedsheets & Linen', sub: 'Pure & Natural', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&auto=format&fit=crop&q=60' },
    { name: 'Hosiery Items', sub: 'Soft & Cozy', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=600&auto=format&fit=crop&q=60' },
    { name: 'Suiting', sub: 'Executive Choice', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=60' },
    { name: 'Shirting', sub: 'Crisp & Modern', image: 'https://plus.unsplash.com/premium_photo-1691367279403-aaa787d264f6?q=80&w=687&auto=format&fit=crop' },
    { name: 'Formal & Ethnic Wear for Women', sub: 'Royal Celebrations', image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&auto=format&fit=crop&q=60' },
    { name: 'Formal & Ethnic Wear for Men', sub: 'Artisanal Heritage', image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&auto=format&fit=crop&q=60' },
    { name: 'Formal & Ethnic Wear for Children', sub: 'Kids Collection', image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&auto=format&fit=crop&q=60' },
    { name: 'Home Upholstery & Furnishing', sub: 'Home Decor', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format&fit=crop&q=60' }
  ];

  // Featured curated products matching original count & structure
  const featuredProducts = [
    {
      name: 'Royal Kanjivaram Silk Saree',
      category: 'Sarees',
      image: 'https://images.unsplash.com/photo-1705164453572-69b94a306f92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
      desc: 'Woven with pure gold zari and fine mulberry silk, embodying traditional luxury.'
    },
    {
      name: 'Bespoke Heritage Sherwani',
      category: 'Formal & Ethnic Wear for Men',
      image: 'https://images.unsplash.com/photo-1678805408312-04e5fd7a9dcc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
      desc: 'Handcrafted embroidery on raw silk, designed for monumental celebrations.'
    },
    {
      name: 'Designer Handloom Kurti Set',
      category: 'Kurtis',
      image: 'https://images.unsplash.com/photo-1735553816867-88cd8496df58?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
      desc: 'A blend of contemporary silhouettes and artisanal handloom cotton.'
    }
  ];

  const testimonials = [
    {
      stars: 5,
      text: "The quality and consistency LoomLine provides is unmatched. Highly recommended!",
      author: "Meena Collection",
      city: "Delhi"
    },
    {
      stars: 5,
      text: "Best variety, best prices and a very professional team. Great experience!",
      author: "Sagar Textiles",
      city: "Mumbai"
    },
    {
      stars: 5,
      text: "A partner we can rely on for every season and every trend. Excellent service.",
      author: "Rajesh Traders",
      city: "Surat"
    }
  ];

  return (
    <div className="w-full bg-[#F4F8F9] font-outfit text-left">
      {/* ─── Hero Section with Full Background Image ─── */}
      <section 
        className="w-full bg-cover bg-center bg-no-repeat relative overflow-hidden pt-20 pb-16 lg:pt-28 lg:pb-20 px-6 lg:px-16"
        style={{ backgroundImage: "url('/images/image.png')" }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Intro Texts (12 cols) */}
            <div className="lg:col-span-12 max-w-2xl space-y-6 text-left py-6">
              <span className="text-[10px] tracking-[0.25em] font-bold text-[#0A5F73] uppercase block">
                Premium Textiles. Crafted for Generations.
              </span>
              <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl text-[#0C2E3A] font-light leading-[1.1] mb-0 border-b-0 pb-0 uppercase">
                Where Every <br />
                Thread Tells <br />
                <span className="text-[#0A5F73] italic font-normal font-playfair lowercase">a Story.</span>
              </h1>
              <p className="text-[#0C2E3A] font-semibold text-xs sm:text-sm leading-relaxed max-w-md">
                Timeless fabrics. Thoughtful designs. Made for comfort. Made to last.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 bg-[#0A5F73] hover:bg-[#084E5F] text-white px-6 py-3 font-semibold tracking-widest uppercase text-[10px] transition-all duration-300 rounded-lg shadow-md shadow-[#0A5F73]/20"
                >
                  Explore Collections <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Signature Collections Section ─── */}
      <section className="bg-white border-y border-gray-200/60 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-10">
          <div className="space-y-2">
            <span className="text-[9px] font-bold text-[#0A5F73] uppercase tracking-[0.3em] block">Browse by</span>
            <h2 className="font-playfair text-2xl lg:text-3xl font-bold uppercase tracking-wider text-[#0C2E3A] flex items-center justify-center gap-3">
              <span className="h-[1px] w-8 bg-gray-300 hidden sm:inline-block" />
              Shop by Category
              <span className="h-[1px] w-8 bg-gray-300 hidden sm:inline-block" />
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categoryList.map((cat, idx) => (
              <Link
                to="/products"
                state={{ category: cat.name }}
                key={idx}
                className="group bg-[#F4F8F9] border border-gray-200/40 rounded-t-[100px] rounded-b-2xl p-2.5 hover:border-[#0A5F73]/30 hover:shadow-lg hover:bg-white transition-all duration-300 flex flex-col items-center"
              >
                {/* Arched image */}
                <div className="aspect-[3/4] w-full overflow-hidden rounded-t-[90px] rounded-b-xl relative bg-gray-100">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#0C2E3A]/5 group-hover:opacity-0 transition-opacity" />
                </div>
                {/* Text info */}
                <div className="pt-4 pb-2 text-center space-y-1">
                  <span className="text-[9px] font-bold text-[#0A5F73] uppercase tracking-wider block">
                    0{idx + 1}
                  </span>
                  <h4 className="font-playfair text-[11px] text-[#0C2E3A] font-bold uppercase tracking-wider group-hover:text-[#0A5F73] transition-colors truncate max-w-[120px]">
                    {cat.name}
                  </h4>
                  <p className="text-[8px] text-[#4F6D7A] font-semibold uppercase tracking-wider">
                    {cat.sub}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Secondary Info / Services Block ─── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="space-y-4">
          <span className="text-[9px] font-bold text-[#0A5F73] uppercase tracking-widest block">Our Trade Services</span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <Link to="/e-quotation" className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#0A5F73]/40 hover:shadow-md transition-all text-left space-y-3 block group shadow-xs">
              <FileText size={22} className="text-[#0A5F73]" />
              <h5 className="font-playfair font-bold text-sm  tracking-wider text-[#0C2E3A] group-hover:text-[#0A5F73]">e-Quotation</h5>
              <p className="text-[11px] text-[#4F6D7A] leading-relaxed">Get fast, accurate bulk price quotes for your fabric orders.</p>
            </Link>
            <Link to="/e-auction" className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#0A5F73]/40 hover:shadow-md transition-all text-left space-y-3 block group shadow-xs">
              <Gavel size={22} className="text-[#0A5F73]" />
              <h5 className="font-playfair font-bold text-sm  tracking-wider text-[#0C2E3A] group-hover:text-[#0A5F73]">e-Auction</h5>
              <p className="text-[11px] text-[#4F6D7A] leading-relaxed">Participate in transparent digital auctions for stock liquidation.</p>
            </Link>
            <Link to="/trade-circular" className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#0A5F73]/40 hover:shadow-md transition-all text-left space-y-3 block group shadow-xs">
              <BookOpen size={22} className="text-[#0A5F73]" />
              <h5 className="font-playfair font-bold text-sm  tracking-wider text-[#0C2E3A] group-hover:text-[#0A5F73]">Circulars</h5>
              <p className="text-[11px] text-[#4F6D7A] leading-relaxed">Stay updated with the latest market circulars and trade news.</p>
            </Link>
            <Link to="/trade-enquiry" className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#0A5F73]/40 hover:shadow-md transition-all text-left space-y-3 block group shadow-xs">
              <User size={22} className="text-[#0A5F73]" />
              <h5 className="font-playfair font-bold text-sm  tracking-wider text-[#0C2E3A] group-hover:text-[#0A5F73]">Private Label</h5>
              <p className="text-[11px] text-[#4F6D7A] leading-relaxed">Custom branding and private label manufacturing for your business.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Curated For You Section ─── */}
      <section className="bg-white py-16 border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-left space-y-10">
          <div className="border-b border-gray-200 pb-4 flex justify-between items-end">
            <div>
              <span className="text-[9px] font-bold text-[#0A5F73] uppercase tracking-[0.25em] block mb-1">Curated For You</span>
              <h2 className="font-playfair text-2xl text-[#0C2E3A] font-bold uppercase tracking-wider">Featured Handlooms</h2>
            </div>
            <Link
              to="/products"
              className="text-[9px] font-bold text-[#0A5F73] hover:text-[#0C2E3A] uppercase tracking-widest transition-colors flex items-center gap-1"
            >
              View Catalogue <ArrowRight size={11} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((prod, idx) => (
              <div
                key={idx}
                className="group flex flex-col bg-white border border-gray-200/80 overflow-hidden hover:shadow-xl hover:border-gray-300 rounded-2xl transition-all duration-300"
              >
                <div className="relative h-[240px] overflow-hidden bg-gray-100 shrink-0">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-white/95 text-[#0A5F73] border border-gray-200 text-[8px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md shadow-xs">
                    {prod.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow text-left space-y-3 bg-white">
                  <h3 className="text-[#0C2E3A] font-playfair text-base font-bold group-hover:text-[#0A5F73] transition-colors uppercase tracking-wider">
                    {prod.name}
                  </h3>
                  <p className="text-[#4F6D7A] text-[11px] leading-relaxed flex-grow">
                    {prod.desc}
                  </p>
                  <div className="pt-4">
                    <Link
                      to="/products"
                      className="inline-flex items-center gap-1.5 text-[9px] font-bold text-[#0A5F73] hover:text-[#0C2E3A] uppercase tracking-widest transition-colors"
                    >
                      Explore <ArrowRight size={11} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
