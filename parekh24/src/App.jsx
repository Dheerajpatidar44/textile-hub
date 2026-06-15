import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import RetailManagement from './pages/RetailManagement';
import TradeEnquiry from './pages/TradeEnquiry';
import EQuotation from './pages/EQuotation';
import EAuction from './pages/EAuction';
import TradeCircular from './pages/TradeCircular';
import Blog from './pages/Blog';
import NoticeBoard from './pages/NoticeBoard';
import Career from './pages/Career';
import CustomerReview from './pages/CustomerReview';
import BusinessMediaGallery from './pages/BusinessMediaGallery';
import FAQ from './pages/FAQ';
import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';

function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 4500); // 3.7s preloader + 800ms delay
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-[#252131]/40 backdrop-blur-xs"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ type: 'spring', duration: 0.6 }}
            className="relative bg-[#FAF9F5] rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full flex flex-col md:flex-row border border-[#E1DFEB] text-left z-10"
            style={{ fontFamily: "'Urbanist', sans-serif" }}
          >
            {/* Close trigger */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-[#FAF9F5] border border-[#E1DFEB] flex items-center justify-center text-[#252131] hover:bg-[#6E64B4] hover:text-white transition-colors cursor-pointer"
            >
              <X size={15} />
            </button>

            {/* Left banner image */}
            <div className="w-full md:w-1/2 h-40 md:h-auto relative bg-[#252131]">
              <img 
                src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&auto=format&fit=crop&q=60" 
                alt="Artisan loom threads"
                className="absolute inset-0 w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#252131]/70 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-[#FAF9F5]">
                <span className="text-[9px] tracking-[0.25em] font-extrabold uppercase text-[#FAF9F5]/70 block mb-1">Eco-Luxe Heritage</span>
                <h4 className="font-normal text-lg serif-title tracking-tight text-[#FAF9F5]">Artisanal Textile Luxury</h4>
              </div>
            </div>

            {/* Right details content */}
            <div className="p-6 md:p-8 w-full md:w-1/2 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={14} className="text-[#6E64B4]" />
                <span className="text-[10px] font-extrabold tracking-[0.25em] uppercase text-[#6E64B4]">Special Greeting</span>
              </div>
              
              <h3 className="text-2xl font-normal text-[#252131] mb-2.5 serif-title tracking-tight">
                Welcome to Aura Loom
              </h3>
              
              <p className="text-[11.5px] text-[#252131]/80 leading-relaxed mb-5">
                Explore our fine range of sustainable fabrics, handcrafted silks, and premium textiles curated with heritage techniques.
              </p>

              <div className="p-4 rounded-xl border border-dashed border-[#6E64B4] bg-[#6E64B4]/5 text-center mb-5">
                <span className="text-[9px] uppercase tracking-widest font-extrabold opacity-60 block text-[#252131]">Exclusive Launch Offer</span>
                <span className="text-sm font-black tracking-widest text-[#6E64B4] uppercase block mt-1">15% Off Your First Order</span>
                <span className="text-[11.5px] font-black tracking-widest text-[#252131] uppercase block mt-2.5 bg-white/60 py-1.5 rounded border border-[#E1DFEB]">
                  CODE: AURALOOM15
                </span>
              </div>

              <button 
                onClick={() => {
                  setIsOpen(false);
                  navigate('/products');
                }}
                className="w-full py-3.5 rounded-xl font-bold tracking-widest uppercase text-white bg-[#6E64B4] hover:bg-[#252131] transition-all text-[10px] shadow-sm cursor-pointer"
              >
                Explore Collections
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Premium preloader timing
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<Products />} />
          <Route path="retail-management" element={<RetailManagement />} />
          <Route path="trade-enquiry" element={<TradeEnquiry />} />
          <Route path="e-quotation" element={<EQuotation />} />
          <Route path="e-auction" element={<EAuction />} />
          <Route path="trade-circular" element={<TradeCircular />} />
          <Route path="blog" element={<Blog />} />
          <Route path="notice-board" element={<NoticeBoard />} />
          <Route path="career" element={<Career />} />
          <Route path="reviews" element={<CustomerReview />} />
          <Route path="gallery" element={<BusinessMediaGallery />} />
          <Route path="faq" element={<FAQ />} />
        </Route>
      </Routes>
      {loading && <Preloader />}
      <WelcomePopup />
    </Router>
  );
}

export default App;

