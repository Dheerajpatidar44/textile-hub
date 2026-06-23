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
import { X } from 'lucide-react';

const C = {
  primary: '#0A5F73',
  dark: '#0C2E3A',
  accent: '#10859F',
  bg: '#F4F8F9',
  border: '#DDE8EB',
  card: '#ffffff',
  textMuted: '#4F6D7A'
};

// ─── Welcome Announcement Popup ───
function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Show popup after a delay, checking localStorage to prevent repeated annoyance
    const popupShown = localStorage.getItem('loomline_popup_shown_v1');
    if (!popupShown) {
      const timer = setTimeout(() => setIsOpen(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('loomline_popup_shown_v1', 'true');
  };

  const handleExplore = () => {
    handleClose();
    navigate('/products');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-[#0C2E3A]/40 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="relative bg-white w-full max-w-[420px] overflow-hidden rounded-2xl border border-[#DDE8EB] shadow-2xl z-10 font-outfit"
          >
            {/* Top Teal Accent Ribbon */}
            <div className="h-1 bg-gradient-to-r from-[#0C2E3A] via-[#10859F] to-[#0A5F73]" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-[#4F6D7A] hover:text-[#0C2E3A] hover:bg-gray-100 transition-all cursor-pointer z-20"
            >
              <X size={18} />
            </button>

            {/* Content Body */}
            <div className="p-8 text-center flex flex-col items-center">
              {/* Logo / Badge */}
              <div className="w-16 h-16 bg-[#F4F8F9] border border-gray-100 flex items-center justify-center rounded-full mb-5">
                <svg className="w-8 h-8 text-[#0A5F73]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M 10,50 C 30,20 70,80 90,50" />
                  <path d="M 10,30 C 30,60 70,40 90,70" strokeWidth="1.5" />
                  <circle cx="50" cy="50" r="4" fill="#10859F" />
                </svg>
              </div>

              {/* Tagline */}
              <p className="text-[10px] tracking-[0.25em] font-bold text-[#4F6D7A] uppercase mb-1.5">
                Welcome to
              </p>
              
              {/* Brand Title */}
              <h2 className="font-playfair text-3xl font-bold text-[#0C2E3A] mb-1.5 leading-tight tracking-wide">
                LoomLine
              </h2>
              
              <p className="text-[10px] tracking-[0.2em] font-semibold text-[#0A5F73] uppercase mb-5">
                retail mall
              </p>

              <div className="w-10 h-[1.5px] bg-[#0A5F73] mb-5" />

              <p className="text-[#4F6D7A] text-xs leading-relaxed max-w-[280px] mb-8">
                Experience premium textiles, customized e-auctions, and e-quotations. Explore our legacy-crafted handloom and apparel fabrics.
              </p>

              {/* Action Button */}
              <button
                onClick={handleExplore}
                className="w-full py-3.5 bg-[#0A5F73] hover:bg-[#084E5F] text-white font-bold text-[11px] uppercase tracking-widest transition-all duration-300 rounded-lg shadow-md cursor-pointer"
              >
                Explore Collections →
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// ─── Main Application Component ───
function AppContent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>
      {!loading && (
        <div className="w-full min-h-screen bg-[#F4F8F9]">
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
              <Route path="faq" element={<FAQ />} />
              <Route path="gallery" element={<BusinessMediaGallery />} />
            </Route>
          </Routes>
          <WelcomePopup />
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
