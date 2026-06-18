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
            style={{ background: 'rgba(35, 31, 32, 0.65)', backdropFilter: 'blur(6px)' }}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 12 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            style={{
              position: 'relative',
              background: '#FAF8F5',
              borderRadius: 16,
              maxWidth: 360,
              width: '100%',
              overflow: 'hidden',
              zIndex: 10,
              boxShadow: '0 24px 64px rgba(35, 31, 32, 0.15)',
              fontFamily: "'DM Sans', sans-serif",
              border: '1px solid #EAE5DE',
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute', top: 12, right: 12,
                width: 28, height: 28, borderRadius: '50%',
                background: 'rgba(35,31,32,0.05)', border: '1px solid rgba(35,31,32,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: '#5B5653', transition: 'all 0.2s',
                zIndex: 5,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(163,112,76,0.1)'; e.currentTarget.style.color = '#A3704C'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(35,31,32,0.05)'; e.currentTarget.style.color = '#5B5653'; }}
            >
              <X size={12} />
            </button>

            {/* Top image band */}
            <div style={{
              height: 120,
              background: 'linear-gradient(135deg, #231F20 0%, #3a3230 100%)',
              position: 'relative',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              overflow: 'hidden',
              borderBottom: '1px solid #EAE5DE',
            }}>
              {/* Subtle gold line pattern overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'radial-gradient(rgba(163,112,76,0.15) 1px, transparent 1px)',
                backgroundSize: '16px 16px',
              }} />
              {/* Logo icon */}
              <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                <div style={{
                  width: 48, height: 48,
                  borderRadius: '50%',
                  background: 'rgba(163,112,76,0.15)',
                  border: '1.5px solid rgba(163,112,76,0.4)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 8px',
                }}>
                  <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                    <circle cx="14" cy="14" r="12" stroke="#A3704C" strokeWidth="1.5" fill="none"/>
                    <path d="M14 4 C14 4, 22 10, 22 14 C22 18, 14 24, 14 24 C14 24, 6 18, 6 14 C6 10, 14 4, 14 4Z" fill="rgba(163,112,76,0.2)" stroke="#A3704C" strokeWidth="1"/>
                    <circle cx="14" cy="14" r="3" fill="#A3704C"/>
                  </svg>
                </div>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: '#FAF8F5', margin: 0, lineHeight: 1.2, letterSpacing: '0.02em' }}>
                  LoomCraft India
                </p>
              </div>
            </div>

            {/* Bottom content */}
            <div style={{ padding: '20px 20px 24px', textAlign: 'center' }}>
              <p style={{ color: '#231F20', fontSize: 16, fontWeight: 600, fontFamily: "'Playfair Display', serif", margin: '0 0 6px' }}>
                Welcome to LoomCraft India
              </p>
              <p style={{ color: '#5B5653', fontSize: 12.5, lineHeight: 1.6, margin: '0 0 20px' }}>
                Discover our curated collection of fine handloom fabrics, premium heritage sarees, and luxury home furnishings.
              </p>

              {/* Buttons */}
              <div style={{ display: 'flex', gap: 10 }}>
                <button
                  onClick={() => { setIsOpen(false); navigate('/products'); }}
                  style={{
                    flex: 1, padding: '10px 14px',
                    background: '#A3704C', color: '#FAF8F5',
                    border: 'none', borderRadius: 10,
                    fontSize: 12.5, fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.25s',
                    boxShadow: '0 4px 12px rgba(163,112,76,0.2)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#865A3C'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#A3704C'; }}
                >
                  Explore Collection
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  style={{
                    padding: '10px 14px',
                    background: 'transparent', color: '#5B5653',
                    border: '1.5px solid #EAE5DE', borderRadius: 10,
                    fontSize: 12.5, fontWeight: 500,
                    cursor: 'pointer', transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#F4EDE4'; e.currentTarget.style.borderColor = '#A3704C'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = '#EAE5DE'; }}
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

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
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <WelcomePopup />
    </Router>
  );
}

export default App;
