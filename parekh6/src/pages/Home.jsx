import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const shopCategories = [
    { name: 'Featured Sarees', image: 'https://images.unsplash.com/photo-1610189044262-809228830252?auto=format&fit=crop&q=80&w=400' },
    { name: 'Women\'s Ethnic Wear', image: 'https://images.unsplash.com/photo-1583391733958-d25e07fac992?auto=format&fit=crop&q=80&w=400' },
    { name: 'Men\'s Ethnic Wear', image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=400' },
    { name: 'Kids Collection', image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&q=80&w=400' },
    { name: 'Home Furnishing', image: 'https://images.unsplash.com/photo-1522771731478-44eb10e5c856?auto=format&fit=crop&q=80&w=400' },
  ];

  const featuredCollections = [
    { name: 'FEATURED SAREES', desc: 'Timeless Elegance', image: '/images/about.png' },
    { name: 'WOMEN\'S ETHNIC WEAR', desc: 'Grace & Beauty', image: '/images/image copy.png' },
    { name: 'MEN\'S ETHNIC WEAR', desc: 'Classic Tradition', image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=600' },
    { name: 'KIDS COLLECTION', desc: 'Joyful Styles', image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&q=80&w=600' },
  ];

  const reviews = [
    {
      name: "Neha Sharma, Mumbai",
      text: "Vastram Textile Mall offers an unmatched collection with premium quality and the finest designs. Truly a one-stop destination!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
    },
    {
      name: "Priya Patel, Surat",
      text: "I was amazed by the sheer variety of ethnic wear available. The quality is simply outstanding and the service is excellent.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
    }
  ];

  return (
    <div className="w-full bg-vastram-cream font-outfit pb-20">
      {/* Hero Section */}
      <section className="relative w-full h-[550px] bg-vastram-brown overflow-hidden">
        <img
          src="images/image.png"
          alt="Elegant Indian Woman in Saree"
          className="absolute inset-0 w-full h-full object-cover object-top opacity-100"
        />
        {/* Subtle full-width overlay to make text readable */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
          <div className="max-w-xl z-10 pl-4 md:pl-12">
            <h1 className="font-playfair text-[50px] md:text-[70px] text-vastram-gold leading-[1.1] tracking-tight mb-4">
              Heritage. <br /> Handcrafted. <br /> Timeless.
            </h1>
            <p className="text-vastram-cream/90 text-[18px] leading-[1.6] font-medium mb-10 max-w-sm">
              Explore our exclusive collection of Pure Elegance.
            </p>
            <div className="flex gap-4">
              <Link to="/products" className="bg-vastram-gold text-vastram-brown px-8 py-4 rounded-none text-[13px] font-bold tracking-[0.1em] hover:bg-vastram-gold-hover transition-colors shadow-sm uppercase">
                Explore Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 mt-20 space-y-24">

        {/* Shop By Category */}
        <section>
          <div className="flex justify-center mb-10">
            <div className="h-[1px] w-full max-w-md bg-vastram-border relative">
              <span className="absolute left-1/2 -top-3 -translate-x-1/2 bg-vastram-cream px-4 text-vastram-gold text-xl">✤</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {shopCategories.map((cat, idx) => (
              <Link to="/products" key={idx} className="flex flex-col items-center w-[120px] sm:w-[140px] md:w-[160px] group">
                <div className="w-full aspect-square rounded-none overflow-hidden mb-4 bg-vastram-light border border-vastram-border shadow-sm p-2 transition-all duration-300 group-hover:border-vastram-gold">
                  <div className="w-full h-full relative overflow-hidden">
                    <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
                <span className="text-[11px] font-bold text-vastram-text text-center tracking-[0.1em] uppercase group-hover:text-vastram-gold transition-colors">{cat.name}</span>
                <span className="mt-2 text-[10px] text-vastram-gold border border-vastram-gold px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity">EXPLORE</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Collections */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCollections.map((collection, idx) => (
              <Link to="/products" key={idx} className="group relative w-full aspect-square rounded-none overflow-hidden block border-4 border-vastram-light shadow-sm">
                <img src={collection.image} alt={collection.name} className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-vastram-brown/90 via-vastram-brown/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full text-center">
                  <h4 className="text-vastram-gold text-sm font-bold tracking-[0.15em] uppercase mb-1">{collection.name}</h4>
                  <p className="text-vastram-cream/80 text-xs tracking-wider mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">{collection.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full border-y border-vastram-border py-12">
          <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-8">
            <div className="flex flex-col items-center justify-center text-center">
              <span className="font-playfair text-3xl md:text-4xl text-vastram-gold mb-3">25+</span>
              <span className="text-vastram-text text-[11px] font-bold tracking-[0.1em] uppercase">Years of Excellence</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <span className="font-playfair text-3xl md:text-4xl text-vastram-gold mb-3">100+</span>
              <span className="text-vastram-text text-[11px] font-bold tracking-[0.1em] uppercase">Premium Brands</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <span className="font-playfair text-3xl md:text-4xl text-vastram-gold mb-3">5000+</span>
              <span className="text-vastram-text text-[11px] font-bold tracking-[0.1em] uppercase">Retail Outlets</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <span className="font-playfair text-3xl md:text-4xl text-vastram-gold mb-3">10L+</span>
              <span className="text-vastram-text text-[11px] font-bold tracking-[0.1em] uppercase">Happy Customers</span>
            </div>
          </div>
        </section>

        {/* Customer Reviews instead of Blogs */}
        <section className="bg-vastram-light p-8 md:p-12 border border-vastram-border">
          <div className="text-center mb-10">
            <h3 className="text-lg font-bold text-vastram-text uppercase tracking-widest">What Our Customers Say</h3>
            <div className="h-[2px] w-12 bg-vastram-gold mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {reviews.map((review, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 border border-vastram-border bg-vastram-cream/30 hover:bg-vastram-cream transition-colors duration-300">
                <div className="w-16 h-16 rounded-none overflow-hidden mb-4 border-2 border-vastram-gold">
                  <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-vastram-gold text-vastram-gold" />
                  ))}
                </div>
                <p className="font-playfair text-vastram-text text-lg italic mb-6 leading-relaxed">
                  "{review.text}"
                </p>
                <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-vastram-gold">— {review.name}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/reviews" className="text-vastram-text text-[12px] font-bold tracking-[0.1em] uppercase border-b border-vastram-text pb-1 hover:text-vastram-gold hover:border-vastram-gold transition-colors">
              View All Reviews
            </Link>
          </div>
        </section>

        {/* Quick Info Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12">
          <div className="p-8 border border-vastram-border bg-vastram-light flex flex-col justify-between group hover:border-vastram-gold transition-colors">
            <div>
              <h4 className="font-playfair text-xl text-vastram-text mb-4 uppercase">Latest Trade Circulars</h4>
              <p className="text-sm text-vastram-text/70 mb-6">Stay updated with our newest collections and trade policies.</p>
            </div>
            <Link to="/trade-circular" className="flex items-center text-[11px] font-bold tracking-widest text-vastram-gold uppercase group-hover:text-vastram-gold-hover">
              View All <ArrowRight size={14} className="ml-2" />
            </Link>
          </div>
          <div className="p-8 border border-vastram-border bg-vastram-light flex flex-col justify-between group hover:border-vastram-gold transition-colors">
            <div>
              <h4 className="font-playfair text-xl text-vastram-text mb-4 uppercase">Career Opportunities</h4>
              <p className="text-sm text-vastram-text/70 mb-6">Join our dynamic team and be a part of our growth story.</p>
            </div>
            <Link to="/career" className="flex items-center text-[11px] font-bold tracking-widest text-vastram-gold uppercase group-hover:text-vastram-gold-hover">
              View Openings <ArrowRight size={14} className="ml-2" />
            </Link>
          </div>
          <div className="p-8 border border-vastram-border bg-vastram-light flex flex-col justify-between group hover:border-vastram-gold transition-colors">
            <div>
              <h4 className="font-playfair text-xl text-vastram-text mb-4 uppercase">Get In Touch</h4>
              <p className="text-sm text-vastram-text/70 mb-2">📞 +91 79 6622 5500</p>
              <p className="text-sm text-vastram-text/70 mb-6">✉️ info@vastramtextile.com</p>
            </div>
            <Link to="/contact" className="flex items-center text-[11px] font-bold tracking-widest text-vastram-gold uppercase group-hover:text-vastram-gold-hover">
              Contact Us <ArrowRight size={14} className="ml-2" />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
