import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, FileText, Gavel, MessageSquare, Users, Clipboard, Link as LinkIcon, MapPin, Phone, Mail, Clock, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const heroSlides = [
    {
    image: '/images/hero3.png',
    tag: '1200+ Retail Outlets',
    heading: 'Experience\nThe Mall of\nTextiles',
    sub: "Step into India's grandest textile destination spanning 10M+ sq ft of retail space.",
    cta: 'About Us',
    ctaPath: '/about',
  },
  {
    image: '/images/hero1.png',
    tag: 'New Season Collection',
    heading: 'Tradition\nWoven with\nElegance',
    sub: "India's most trusted textile retail mall offering unmatched quality, variety and value.",
    cta: 'Explore Collections',
    ctaPath: '/products',
  },
  {
    image: '/images/hero2.png',
    tag: 'Premium Fabrics',
    heading: 'Fabrics That\nInspire\nGenerations',
    sub: 'Over 25,000 premium products curated for retailers, designers and fabric lovers.',
    cta: 'View Catalogue',
    ctaPath: '/products',
  },

];

const shopCategories = [
  { name: 'Sarees', iconUrl: 'https://img.icons8.com/ios/96/1A1A1A/saree.png' },
  { name: 'Kurtis', iconUrl: 'https://img.icons8.com/ios/96/1A1A1A/shirt.png' },
  { name: 'Leggings', iconUrl: 'https://img.icons8.com/ios/96/1A1A1A/trousers.png' },
  { name: 'Dress Suits', iconUrl: 'https://img.icons8.com/ios/96/1A1A1A/womens-suit.png' },
  { name: 'Bedsheets & Linen', iconUrl: 'https://img.icons8.com/ios/96/1A1A1A/bed.png' },
  { name: 'Hosiery Items', iconUrl: 'https://img.icons8.com/ios/96/1A1A1A/socks.png' },
  { name: 'Suiting', iconUrl: 'https://img.icons8.com/ios/96/1A1A1A/suit.png' },
  { name: 'Shirting', iconUrl: 'https://img.icons8.com/ios/96/1A1A1A/shirt.png' },
  { name: 'Women Wear', iconUrl: 'https://img.icons8.com/ios/96/1A1A1A/dress-front-view.png' },
  { name: 'Men Wear', iconUrl: 'https://img.icons8.com/ios/96/1A1A1A/polo-shirt.png' },
  { name: 'Children Wear', iconUrl: 'https://img.icons8.com/ios/96/1A1A1A/romper.png' },
  { name: 'Home Furnishing', iconUrl: 'https://img.icons8.com/ios/96/1A1A1A/sofa.png' },
];

const featuredCollections = [
  { name: 'NEW ARRIVALS', desc: 'Fresh Styles', image: 'https://images.unsplash.com/photo-1578932750294-f5075e85f44a?w=600&auto=format&fit=crop&q=60' },
  { name: 'WEDDING EDIT', desc: 'Timeless Elegance', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800' },
  { name: 'FESTIVE COLLECTION', desc: 'Celebrate in Style', image: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&q=80&w=800' },
  { name: 'SUMMER WEAR', desc: 'Beat the Heat', image: 'https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=600&auto=format&fit=crop&q=60' },
];

const promoBanners = [
  {
    tag: 'NEW ARRIVALS',
    title: 'Festive\nCollection',
    isScriptTitle: true,
    buttonType: 'solid',
    buttonText: 'SHOP NOW',
    bgImage: 'https://images.unsplash.com/photo-1773439877127-ecfe17c9eb62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGluJTIwZ3JlZW4lMjBrdXJ0aXxlbnwwfHwwfHx8MA%3D%3D0',
    color: '#FFFFFF',
    overlay: 'linear-gradient(to right, rgba(210,100,50,0.95) 0%, rgba(210,100,50,0.7) 40%, transparent 100%)'
  },
  {
    tag: 'M&F',
    title: 'Luxury\nHome\nFurnishing',
    isScriptTitle: false,
    buttonType: 'text',
    buttonText: 'EXPLORE NOW →',
    bgImage: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGx1eHVyeSUyMGhvbWUlMjBiZWR8ZW58MHx8MHx8fDA%3D',
    color: '#FFFFFF',
    overlay: 'linear-gradient(to right, rgba(60,80,80,0.85) 0%, rgba(60,80,80,0.6) 50%, transparent 100%)'
  },
  {
    tag: "M&M",
    title: "Men's\nPremium\nEthnic Wear",
    isScriptTitle: false,
    buttonType: 'text',
    buttonText: 'SHOP NOW →',
    bgImage: 'images/hero3.png',
    color: '#1A1A1A',
    overlay: 'linear-gradient(to right, rgba(250,245,240,0.95) 0%, rgba(250,245,240,0.8) 50%, transparent 100%)'
  }
];

const quickLinks = [
  { name: 'E-Quotation', icon: FileText, path: '/e-quotation', desc: 'Get instant price quotes' },
  { name: 'E-Auction', icon: Gavel, path: '/e-auction', desc: 'Participate & Win' },
  { name: 'Trade Enquiry', icon: MessageSquare, path: '/trade-enquiry', desc: 'Connect with our experts' },
  { name: 'Retail Management', icon: Users, path: '/retail-management', desc: 'Manage your retail' },
  { name: 'Trade Circular', icon: LinkIcon, path: '/trade-circular', desc: 'Latest circulars' },
  { name: 'Notice Board', icon: Clipboard, path: '/notice-board', desc: 'Important notices' },
];

const stats = [
  { value: '1200+', label: 'Retail Outlets' },
  { value: '25,000+', label: 'Products' },
  { value: '35+', label: 'Years of Trust' },
  { value: '50,000+', label: 'Happy Retailers' },
];

const blogPosts = [
  { title: 'The Future of Sustainable Weaving', date: 'June 10, 2026', image: 'https://images.unsplash.com/photo-1705412877691-70f6913aaa1e?w=600&auto=format&fit=crop&q=60' },
  { title: 'Elegance in Threads: The Fall Collection', date: 'May 28, 2026', image: 'https://images.unsplash.com/photo-1599753931952-654e960af582?w=600&auto=format&fit=crop&q=60' },
  { title: 'Behind the Scenes: Crafting the Perfect Saree', date: 'May 15, 2026', image: 'https://plus.unsplash.com/premium_photo-1669977749819-d8737b4408f7?w=600&auto=format&fit=crop&q=60' },
];

const reviews = [
  { text: "Textile Mall has been our trusted partner since years. The quality, prices and service are unmatched in the entire industry.", name: "Rajesh Sharma", role: "Retailer, Delhi", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
  { text: "The export compliance and material quality are world-class. Their zero-defect policy has secured our global supply chain perfectly.", name: "Ahmed Al-Sayed", role: "Gulf Textiles, UAE", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" },
  { text: "Highly impressed with their R&D. The custom high-tenacity fabric they developed exceeded all our durability benchmarks.", name: "Vikas Kulkarni", role: "National Solutions", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" },
];


export default function Home() {

  return (
    <div className="w-full" style={{ background: '#FAF4EE', fontFamily: "'Outfit', sans-serif" }}>

      {/* ── HERO BANNER ── */}
      <section className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px]">
        <img src="/images/image.png" alt="Hero Banner" className="absolute inset-0 w-full h-full object-cover object-top" />
        
        {/* Light gradient overlay to ensure text readability */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(250,244,238,0.95) 0%, rgba(250,244,238,0.7) 45%, transparent 80%)' }} />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 sm:px-10 flex items-center">
          <div className="max-w-2xl">
            <h1
              className="font-bold leading-[1.1] mb-5 text-[#1C1A19] whitespace-nowrap"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2.8rem, 5vw, 4.8rem)',
              }}
            >
              Tradition Woven<br />
              <span style={{ color: '#E14D2A' }}>Elegance Known</span>
            </h1>

            <p className="text-[#4B4B4B] text-[15px] sm:text-[17px] leading-[1.6] mb-8 font-medium max-w-lg whitespace-normal">
              Discover the perfect blend of timeless craftsmanship and modern design. Our exclusive collection offers unmatched quality, vibrant colors, and luxurious fabrics tailored to elevate your everyday style and special occasions alike.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-md text-[13px] font-bold tracking-[0.08em] uppercase transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl text-white"
                style={{ background: '#E14D2A' }}
              >
                EXPLORE COLLECTIONS <ArrowRight size={18} className="ml-2" />
              </Link>

              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64" alt="User" className="w-10 h-10 rounded-full border-2 border-[#FAF4EE] shadow-sm object-cover" />
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64" alt="User" className="w-10 h-10 rounded-full border-2 border-[#FAF4EE] shadow-sm object-cover" />
                  <div className="w-10 h-10 rounded-full border-2 border-[#FAF4EE] shadow-sm flex items-center justify-center text-[10px] font-bold text-white relative z-10" style={{ background: '#303030' }}>
                    50k+
                  </div>
                </div>
                <div>
                  <div className="flex text-[#E14D2A] text-sm mb-0.5 tracking-tighter">★★★★★</div>
                  <p className="text-[11px] font-bold text-[#4B4B4B]">Trusted by Retailers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-3 sm:gap-4 justify-center items-start">
          {shopCategories.map((cat, idx) => (
            <Link
              to="/products"
              key={idx}
              className="group flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-2 shadow-sm transition-transform duration-300 group-hover:scale-110" style={{ background: '#FFF0E6' }}>
                <img 
                  src={cat.iconUrl} 
                  alt={cat.name}
                  className="w-10 h-10 sm:w-11 sm:h-11 opacity-90 group-hover:opacity-100 transition-opacity" 
                />
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold leading-tight" style={{ color: '#303030' }}>
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── PROMO BANNERS ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {promoBanners.map((promo, idx) => (
            <Link
              to="/products"
              key={idx}
              className="relative rounded-xl overflow-hidden aspect-[16/9] md:aspect-auto md:h-[230px] shadow-sm hover:shadow-md transition-shadow duration-300 block"
            >
              <img src={promo.bgImage} alt="Promo" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: promo.overlay }} />
              <div className="relative z-10 h-full p-6 sm:p-7 flex flex-col justify-center">
                {promo.tag && (
                  <p className="text-[10px] font-bold tracking-widest uppercase mb-1 opacity-90" style={{ color: promo.color }}>{promo.tag}</p>
                )}
                <h3 
                  className={`leading-tight whitespace-pre-line ${promo.isScriptTitle ? 'text-[42px] font-normal mb-5' : 'text-[24px] font-bold mb-4'}`} 
                  style={{ color: promo.color, fontFamily: "'Playfair Display', serif" }}
                >
                  {promo.title}
                </h3>
                <div className="mt-auto md:mt-2">
                  {promo.buttonType === 'solid' ? (
                    <span className="inline-block bg-white text-[#303030] px-5 py-2.5 rounded-md text-[11px] font-bold tracking-wide shadow-sm hover:bg-gray-50 transition-colors">
                      {promo.buttonText}
                    </span>
                  ) : (
                    <span className="inline-block text-[11px] font-bold tracking-wide hover:opacity-80 transition-opacity" style={{ color: promo.color }}>
                      {promo.buttonText}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── FEATURED COLLECTIONS ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="flex items-center gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: '#1C1A19' }}>Featured Collections</h2>
          </div>
          <div className="flex-1 h-px ml-4" style={{ background: 'linear-gradient(90deg, rgba(225,77,42,0.4), transparent)' }} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredCollections.map((col, idx) => (
            <Link
              to="/products"
              key={idx}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden block shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={col.image}
                alt={col.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)' }} />
              <div className="absolute bottom-0 left-0 p-5 w-full">
                <p className="text-white text-lg font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{col.name}</p>
                <span className="inline-block bg-white text-[#303030] px-4 py-2 rounded-full text-[10px] font-bold tracking-wide transition-all duration-200 group-hover:bg-[#E14D2A] group-hover:text-white shadow-md">
                  EXPLORE
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>



      {/* ── CUSTOMER REVIEWS ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-center justify-center mb-8 text-center">
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase mb-1" style={{ color: '#E14D2A' }}>Testimonials</p>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: '#303030' }}>What Our Customers Say</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-7 rounded-2xl flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ background: '#FFFFFF', border: '1.5px solid rgba(225,77,42,0.2)' }}
            >
              <div className="mb-5">
                <Quote size={30} color="#E14D2A" className="rotate-180" fill="rgba(225,77,42,0.2)" />
              </div>
              <p className="leading-relaxed text-[15px] mb-8 flex-grow" style={{ color: '#4B4B4B' }}>
                {review.text}
              </p>
              <div className="flex items-center justify-between mt-auto pt-5 border-t" style={{ borderColor: 'rgba(225,77,42,0.15)' }}>
                <div className="flex items-center gap-3">
                  <img src={review.image} alt={review.name} className="w-11 h-11 rounded-full object-cover shadow-sm" style={{ border: '2px solid rgba(225,77,42,0.3)' }} />
                  <div>
                    <h4 className="font-bold text-[14px]" style={{ color: '#303030' }}>{review.name}</h4>
                    <p className="text-[11px] mt-0.5" style={{ color: '#6B6B6B' }}>{review.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CONTACT US SECTION ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row" style={{ background: '#FFFFFF', border: '1px solid rgba(225,77,42,0.2)' }}>
          <div className="p-8 lg:p-12 md:w-1/2 flex flex-col justify-center">
             <p className="text-[11px] font-bold tracking-[0.2em] uppercase mb-1" style={{ color: '#E14D2A' }}>Get In Touch</p>
             <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif", color: '#303030' }}>Contact Us</h2>
             <div className="space-y-6">
                {[
                  { icon: MapPin, label: 'Headquarters', lines: ['123 Premium Textile Avenue', 'Fashion District, Chennai, TN, India'] },
                  { icon: Phone, label: 'Call Us', lines: ['+91 6353778329'] },
                  { icon: Mail, label: 'Email Enquiries', lines: ['info@textilemall.com', 'sales@textilemall.com'] },
                ].map(({ icon: Icon, label, lines }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(225,77,42,0.15)', border: '1px solid rgba(225,77,42,0.3)' }}>
                      <Icon size={18} color="#E14D2A" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.18em] uppercase mb-1" style={{ color: '#E14D2A' }}>{label}</p>
                      {lines.map((line, i) => (
                        <p key={i} className="text-[14px]" style={{ color: '#4B4B4B' }}>{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
             </div>
          </div>
          <div className="md:w-1/2 min-h-[350px]">
            <iframe
              src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            />
          </div>
        </div>
      </section>



    </div>
  );
}
