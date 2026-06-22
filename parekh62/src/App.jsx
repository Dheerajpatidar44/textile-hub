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

// ─── Simple Welcome Popup ───
function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0"
            style={{ background: 'rgba(10, 24, 40, 0.4)', backdropFilter: 'blur(8px)' }}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 280, damping: 26 }}
            style={{
              position: 'relative',
              background: '#F4F8FC',
              maxWidth: 420,
              width: '100%',
              overflow: 'hidden',
              borderRadius: '24px',
              zIndex: 10,
              border: '1px solid #D0E1FD',
              boxShadow: '0 40px 80px rgba(10, 24, 40, 0.15)',
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute', top: 16, right: 16,
                width: 32, height: 32,
                background: 'transparent', border: 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: '#4A5568', transition: 'all 0.2s',
                borderRadius: '50%',
                zIndex: 5,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0, 0, 0, 0.05)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
            >
              <X size={20} />
            </button>

            {/* Body */}
            <div style={{ padding: '44px 32px 36px', textAlign: 'center' }}>
              {/* Logo icon */}
              <div style={{
                width: 64, height: 64, margin: '0 auto 20px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderRadius: '50%',
                background: 'rgba(30, 62, 98, 0.1)', }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#000B58" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="9" stroke="#000B58" strokeWidth="1.5" />
                  <path d="M12 2v20M2 12h20M5 5l14 14M5 19L14 10" stroke="#000B58" strokeWidth="1" />
                  <circle cx="12" cy="12" r="4" fill="#000B58" />
                </svg>
              </div>

              {/* Title */}
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 16, fontWeight: 600,
                color: '#000B58', margin: '0 0 6px', lineHeight: 1.25,
                letterSpacing: '0.15em',
                textTransform: 'uppercase'
              }}>
                Welcome to
              </h2>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 26, fontWeight: 700,
                color: '#000B58', margin: '0 0 6px', lineHeight: 1.2,
                letterSpacing: '0.04em',
              }}>
                SAANJH TEXTILES
              </h2>
              <h3 style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 10, fontWeight: 700,
                color: '#4A5568', margin: '0 0 18px', lineHeight: 1.2,
                letterSpacing: '0.25em',
                textTransform: 'uppercase'
              }}>
                Premium Textile House
              </h3>

              <div style={{ width: 48, height: 1.5, background: '#000B58', margin: '0 auto 20px' }} />

              <p style={{ color: '#4A5568', fontSize: 13.5, lineHeight: 1.6, margin: '0 0 32px', fontWeight: 500 }}>
                Discover our premium collections, customized e-auctions, and e-quotations. Explore heritage crafted textiles.
              </p>

              {/* Button */}
              <button
                onClick={() => { setIsOpen(false); navigate('/products'); }}
                style={{
                  width: '100%', padding: '14px 20px',
                  background: '#000B58',
                  color: '#ffffff',
                  border: 'none',
                  fontSize: 11, fontWeight: 700,
                  cursor: 'pointer',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  transition: 'all 0.25s',
                  borderRadius: '50px',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#4B70F5'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#000B58'; }}
              >
                Explore Collection
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
  const [appVisible, setAppVisible] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      
      {/* Premium Application Reveal Animation */}
      <AnimatePresence mode="wait">
        {appVisible && (
          <div
            key="main-app-content"
            className="w-full min-h-screen bg-[#FDFBF7]"
          >
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
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {loading && (
          <Preloader 
            onStartOut={() => setAppVisible(true)}
            onComplete={() => setLoading(false)} 
          />
        )}
      </AnimatePresence>
      <WelcomePopup />
    </Router>
  );
}

export default App;
