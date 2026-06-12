import { FileText, Gavel, MessageSquare, Users, Clipboard, Link as LinkIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const shopCategories = [
    { name: 'Sarees', image: 'https://images.unsplash.com/photo-1610189044262-809228830252?auto=format&fit=crop&q=80&w=400' },
    { name: 'Leggings', image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&q=80&w=400' },
    { name: 'Kurtis', image: 'https://images.unsplash.com/photo-1583391733958-d25e07fac992?auto=format&fit=crop&q=80&w=400' },
    { name: 'Dress Suits', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=400' },
    { name: 'Bedsheets & Linen', image: 'https://images.unsplash.com/photo-1522771731478-44eb10e5c856?auto=format&fit=crop&q=80&w=400' },
    { name: 'Hosiery Items', image: 'https://images.unsplash.com/photo-1582142407894-ec85a1260a46?auto=format&fit=crop&q=80&w=400' },
    { name: 'Suiting', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=400' },
    { name: 'Shirting', image: 'https://images.unsplash.com/photo-1620012253295-c159d60d4af9?auto=format&fit=crop&q=80&w=400' },
    { name: 'Formal & Ethnic Wear for Women', image: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&q=80&w=400' },
    { name: 'Formal & Ethnic Wear for Men', image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=400' },
    { name: 'Formal & Ethnic Wear for Children', image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&q=80&w=400' },
    { name: 'Home Upholstery & Furnishing', image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=400' },
  ];

  const featuredCollections = [
    { name: 'NEW ARRIVALS', desc: 'Fresh Styles', image: 'https://images.unsplash.com/photo-1578932750294-f5075e85f44a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5ldyUyMGFycml2YWxzJTIwY2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D' },
    { name: 'WEDDING EDIT', desc: 'Timeless Elegance', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800' },
    { name: 'EVERYDAY ESSENTIALS', desc: 'Comfort & Style', image: '/images/about.png' },
    { name: 'FESTIVE COLLECTION', desc: 'Celebrate in Style', image: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&q=80&w=800' },
  ];

  const quickLinks = [
    { name: 'E-Quotation', icon: FileText, path: '/e-quotation' },
    { name: 'E-Auction', icon: Gavel, path: '/e-auction' },
    { name: 'Trade Enquiry', icon: MessageSquare, path: '/trade-enquiry' },
    { name: 'Retail Management', icon: Users, path: '/retail-management' },
    { name: 'Trade Circular', icon: LinkIcon, path: '/trade-circular' },
    { name: 'Notice Board', icon: Clipboard, path: '/notice-board' },
  ];

  return (
    <div className="w-full bg-[#f9f8f6] font-outfit pb-20">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] lg:h-[550px] bg-[#e8e2db] overflow-hidden">
        <img
          src="/images/heroimage.png"
          alt="Elegant Indian Woman in Saree"
          className="absolute right-0 top-0 w-2/3 h-full object-cover object-top opacity-90"
        />
        {/* Gradient fade from left to right to blend image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#e8e2db] via-[#e8e2db]/90 to-transparent w-2/3"></div>

        <div className="relative max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
          <div className="max-w-xl z-10 pl-4 md:pl-12">
            <h2 className="text-[#333333] text-[15px] font-bold tracking-[0.15em] uppercase mb-2">Fabrics That</h2>
            <h1 className="font-playfair text-[80px] text-[#1B484E] leading-[1.05] tracking-tight mb-6">
              INSPIRE <br /> GENERATIONS
            </h1>
            <p className="text-[#4a4a4a] text-[16px] leading-[1.6] font-medium mb-10 max-w-sm">
              India's most trusted textile retail mall offering<br />
              unmatched quality, variety and value.
            </p>
            <div className="flex gap-4">
              <Link to="/products" className="bg-[#1B484E] text-white px-6 py-3 rounded text-[11px] font-bold tracking-[0.05em] hover:bg-[#153a3f] transition-colors shadow-sm">
                EXPLORE COLLECTIONS
              </Link>
              <Link to="/trade-enquiry" className="border border-[#a0a0a0] text-[#333] px-6 py-3 rounded text-[11px] font-bold tracking-[0.05em] hover:border-[#1B484E] hover:text-[#1B484E] transition-colors">
                TRADE ENQUIRY
              </Link>
            </div>
          </div>

          {/* Floating Right Menu removed as requested */}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 mt-16 space-y-20">

        {/* Shop By Category */}
        <section>
          <h3 className="text-lg font-bold text-gray-800 mb-8 uppercase tracking-wide">Shop By Category</h3>
          <div className="relative overflow-hidden w-full py-4 group">
            <div className="flex animate-marquee gap-4 sm:gap-6 md:gap-8 w-max">
              {[...shopCategories, ...shopCategories].map((cat, idx) => (
                <Link to="/products" key={idx} className="flex flex-col items-center w-[75px] sm:w-[85px] md:w-[100px] shrink-0">
                  <div className="w-full h-[95px] sm:h-[110px] md:h-[130px] rounded-2xl md:rounded-[2rem] overflow-hidden mb-3 bg-gray-200 shadow-sm border border-gray-200">
                    <img src={cat.image} alt={cat.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="text-[9px] sm:text-[10px] md:text-[11px] font-bold text-[#4a4a4a] text-center leading-tight tracking-wide uppercase">{cat.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Collections */}
        <section>
          <h3 className="text-lg font-bold text-gray-800 mb-8 uppercase tracking-wide">Featured Collections</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCollections.map((collection, idx) => (
              <Link to="/products" key={idx} className="group relative w-full aspect-[4/5] rounded-lg overflow-hidden block">
                <img src={collection.image} alt={collection.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B484E]/90 via-[#1B484E]/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h4 className="text-white text-lg font-bold tracking-wide">{collection.name}</h4>
                  <p className="text-white/80 text-sm mb-4">{collection.desc}</p>
                  <span className="text-white text-xs font-semibold tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                    Shop Now <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Why Partner With Us */}
        <section className="relative w-full rounded-2xl overflow-hidden bg-[#faf8f5] shadow-sm border border-gray-100 flex items-stretch mt-8">
          <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 lg:w-2/5">
            <img
              src="https://images.unsplash.com/photo-1625471592808-3b848a6e9ffd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGZhYnJpY3N8ZW58MHx8MHx8fDA%3D"
              alt="Folded Fabrics"
              className="w-full h-full object-cover object-right"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#faf8f5] via-[#faf8f5]/90 to-transparent"></div>
          </div>

          <div className="relative z-10 p-8 md:p-12 w-full">
            <h3 className="text-[#333] text-[13px] font-bold tracking-[0.05em] uppercase mb-8">Why Partner With Us?</h3>
            <div className="grid grid-cols-2 gap-y-10 md:flex md:flex-row md:items-center md:gap-12 lg:gap-16">

              <div className="flex flex-col">
                <span className="font-playfair text-4xl md:text-[44px] text-[#1B484E] mb-2 leading-none tracking-tight">1200+</span>
                <span className="text-[#4a4a4a] text-[12px] font-bold tracking-wide">Retail Outlets</span>
              </div>

              <div className="hidden md:block w-[1px] h-12 bg-gray-200/80"></div>

              <div className="flex flex-col">
                <span className="font-playfair text-4xl md:text-[44px] text-[#1B484E] mb-2 leading-none tracking-tight">25,000+</span>
                <span className="text-[#4a4a4a] text-[12px] font-bold tracking-wide">Products</span>
              </div>

              <div className="hidden md:block w-[1px] h-12 bg-gray-200/80"></div>

              <div className="flex flex-col">
                <span className="font-playfair text-4xl md:text-[44px] text-[#1B484E] mb-2 leading-none tracking-tight">35+</span>
                <span className="text-[#4a4a4a] text-[12px] font-bold tracking-wide">Years of Trust</span>
              </div>

              <div className="hidden md:block w-[1px] h-12 bg-gray-200/80"></div>

              <div className="flex flex-col">
                <span className="font-playfair text-4xl md:text-[44px] text-[#1B484E] mb-2 leading-none tracking-tight">50,000+</span>
                <span className="text-[#4a4a4a] text-[12px] font-bold tracking-wide">Happy Retailers</span>
              </div>

            </div>
          </div>
        </section>

        {/* Latest From Our Blog */}
        <section className="mt-20">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4">
            <h3 className="text-lg font-bold text-gray-800 uppercase tracking-wide">Latest From Our Blog</h3>
            <Link to="/blog" className="text-[#1B484E] text-[13px] font-bold tracking-wide flex items-center group">
              View All Blogs <ArrowRight size={16} className="ml-1.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                title: "The Future of Sustainable Weaving",
                date: "June 10, 2026",
                image: "https://images.unsplash.com/photo-1705412877691-70f6913aaa1e?w=600&auto=format&fit=crop&q=60"
              },
              {
                title: "Elegance in Threads: The Fall Collection",
                date: "May 28, 2026",
                image: "https://images.unsplash.com/photo-1599753931952-654e960af582?w=600&auto=format&fit=crop&q=60"
              },
              {
                title: "Behind the Scenes: Crafting the Perfect Saree",
                date: "May 15, 2026",
                image: "https://plus.unsplash.com/premium_photo-1669977749819-d8737b4408f7?w=600&auto=format&fit=crop&q=60"
              }
            ].map((post, idx) => (
              <Link to="/blog" key={idx} className="group cursor-pointer flex flex-col">
                <div className="w-full aspect-[16/10] overflow-hidden rounded-2xl mb-5 shadow-sm">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                <h3 className="font-playfair font-bold text-xl text-[#333] mb-1.5 group-hover:text-[#1B484E] transition-colors leading-snug">
                  {post.title}
                </h3>
                
                <p className="text-gray-500 text-[13px] font-medium mb-4">
                  {post.date}
                </p>
                
                <div className="mt-auto pt-2">
                  <span className="flex items-center text-[#1B484E] font-bold text-[13px] tracking-wide group-hover:text-[#215A62] transition-colors">
                    Read More <ArrowRight size={16} className="ml-1.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
