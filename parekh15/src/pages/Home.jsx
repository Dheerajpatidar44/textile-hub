import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const slides = [
  {
    image: "images/hero.png",
    subtitle: "OFFICIAL URBAN TEXTILE HUB",
    title: "Interweaving Tradition & Global Trade",
    desc: "Leading the global textile evolution by connecting artisans, manufacturers, and designers since 2007.",
    link: "/products"
  },
  {
    image: "/premium_saree_1781069280684.png",
    subtitle: "ARTISANAL QUALITY",
    title: "Handloom Heritage & Pure Silk",
    desc: "Woven with pure gold zari and fine mulberry silk, embodying traditional luxury and unmatched craftsmanship.",
    link: "/products"
  },
  {
    image: "/hero_fabric_1781069270214.png",
    subtitle: "GLOBAL ECOSYSTEM",
    title: "B2B Trade & Custom Fabrics",
    desc: "Experience world-class apparel designed with state-of-the-art manufacturing standards and raw hand-selected fibers.",
    link: "/products"
  }
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0
  })
};

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

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
      {/* Hero Section with compact spacing - No Top Action Bar */}
      <div className="-mt-6 lg:-mt-10">
        {/* Hero Section Split Layout (No Overlay Shadows and No Box Shadows) */}
        <section className="relative min-h-[480px] overflow-hidden group border border-gray-200 bg-[#01312b] p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          {/* Left Column (Text Content) */}
          <div className="w-full md:w-7/12 flex flex-col justify-center z-10 text-left text-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                <div className="inline-flex items-center gap-2 text-rosegold-400 bg-rosegold-500/10 px-3.5 py-1.5 border border-rosegold-500/20">
                  <Sparkles size={14} className="text-rosegold-500" />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">{slides[current].subtitle}</span>
                </div>

                <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white leading-tight font-semibold uppercase tracking-wider border-0 pb-0 mb-0">
                  {slides[current].title}
                </h1>

                <p className="text-gray-300 text-xs md:text-sm font-outfit leading-relaxed max-w-xl">
                  {slides[current].desc}
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <a href={slides[current].link} className="inline-flex items-center gap-3 bg-rosegold-500 text-pearl-100 px-6 py-3.5 font-semibold tracking-widest uppercase hover:bg-rosegold-400 transition-colors text-xs">
                    Explore Collection <ArrowRight size={14} />
                  </a>
                  <a href="/trade-enquiry" className="inline-flex items-center gap-3 border border-gray-650 text-white px-6 py-3.5 font-semibold tracking-widest uppercase hover:bg-white hover:text-slate-950 transition-all text-xs">
                    Enquire Now <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column (Image Card - No shadow overlays and No box shadow) */}
          <div className="w-full md:w-5/12 relative h-64 md:h-[350px] overflow-hidden bg-slate-900 border border-gray-800 shrink-0 flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 180, damping: 24 },
                  opacity: { duration: 0.4 }
                }}
                src={slides[current].image}
                alt={slides[current].title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-rosegold-500 hover:text-white text-white p-2.5 transition-all duration-300 z-10 opacity-0 group-hover:opacity-100"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={16} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-rosegold-500 hover:text-white text-white p-2.5 transition-all duration-300 z-10 opacity-0 group-hover:opacity-100"
            aria-label="Next Slide"
          >
            <ChevronRight size={16} />
          </button>

          {/* Bullet Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > current ? 1 : -1);
                  setCurrent(idx);
                }}
                className={`h-1.5 transition-all duration-300 ${
                  idx === current ? "w-6 bg-rosegold-500" : "w-1.5 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </section>
      </div>

      {/* Featured Collection Grid */}
      <section>
        <div className="flex justify-between items-end mb-10 border-b border-gray-200 pb-4">
          <div>
            <p className="text-rosegold-500 font-semibold tracking-widest uppercase text-xs mb-2">Curated Masterpieces</p>
            <h2 className="font-playfair text-3xl text-gray-900 font-semibold uppercase tracking-wide">Featured Collection</h2>
          </div>
          <a href="/products" className="inline-flex items-center gap-2 text-rosegold-500 hover:text-rosegold-400 transition-colors font-semibold uppercase text-xs tracking-wider">
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
                <h3 className="text-gray-900 font-playfair text-xl font-semibold mb-2 group-hover:text-rosegold-500 transition-colors uppercase tracking-wide">{prod.name}</h3>
                <p className="text-gray-655 text-sm leading-relaxed mb-6 flex-grow">{prod.desc}</p>
                <a
                  href="/products"
                  className="inline-flex items-center gap-2 text-rosegold-500 hover:text-rosegold-400 font-semibold uppercase text-xs tracking-wider border-b border-transparent hover:border-rosegold-500 w-fit pb-1 transition-all duration-200"
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
          <div className="absolute inset-0 bg-gradient-to-r from-pearl-100/95 via-pearl-100/85 to-transparent flex flex-col justify-center p-8 md:p-12" />
          <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12">
            <h3 className="font-playfair text-3xl font-semibold text-gray-900 mb-2">
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
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-transparent flex flex-col justify-center p-8 md:p-12" />
          <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12">
            <h3 className="font-playfair text-3xl font-semibold text-white mb-2">
              <span className="font-outfit text-3xl font-normal lowercase">e</span>-Auction
            </h3>
            <p className="text-gray-200 text-sm mb-6 max-w-[240px] leading-relaxed">
              Bid & win premium products.
            </p>
            <a
              href="/e-auction"
              className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-gray-50 px-6 py-3 font-semibold text-xs tracking-wider uppercase shadow-md w-fit transition-all duration-300"
            >
              Join Auction <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Our Heritage & Pillars Section */}
      <section className="bg-white border border-gray-200 p-8 md:p-12 shadow-xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-rosegold-500 font-semibold tracking-widest uppercase text-xs mb-3">Our Core Pillars</p>
          <h2 className="font-playfair text-3xl text-gray-900 font-semibold uppercase tracking-wide">Crafted For Modern Royalty</h2>
          <p className="text-gray-650 text-sm mt-3 leading-relaxed">
            Every initiative by Urban Textile Hub is a testament to our three core values: quality, craftsmanship, and sustainability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-pearl-100 border border-gray-200 hover:border-rosegold-500 transition-all duration-300">
            <span className="text-3xl text-rosegold-500 font-semibold block mb-4">01</span>
            <h4 className="font-playfair text-lg text-gray-900 font-semibold uppercase tracking-wider mb-2">Artisanal Heritage</h4>
            <p className="text-gray-655 text-xs leading-relaxed">
              We preserve centuries of traditional Indian handloom practices, partnering with master weavers to create fabrics of unmatched depth and beauty.
            </p>
          </div>

          <div className="p-6 bg-pearl-100 border border-gray-200 hover:border-rosegold-500 transition-all duration-300">
            <span className="text-3xl text-rosegold-500 font-semibold block mb-4">02</span>
            <h4 className="font-playfair text-lg text-gray-900 font-semibold uppercase tracking-wider mb-2">Uncompromised Quality</h4>
            <p className="text-gray-655 text-xs leading-relaxed">
              From pure gold zari to select long-staple cotton and Mulberry silk, our raw materials undergo multi-point inspection to ensure perfection.
            </p>
          </div>

          <div className="p-6 bg-pearl-100 border border-gray-200 hover:border-rosegold-500 transition-all duration-300">
            <span className="text-3xl text-rosegold-500 font-semibold block mb-4">03</span>
            <h4 className="font-playfair text-lg text-gray-900 font-semibold uppercase tracking-wider mb-2">Sustainable Future</h4>
            <p className="text-gray-655 text-xs leading-relaxed">
              We prioritize eco-friendly dyes, organic fabrics, and fair-wage labor standards to ensure that our carbon footprint is minimized.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
