import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Preloader from './components/Preloader';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import TradeEnquiry from './pages/TradeEnquiry';
import EQuotation from './pages/EQuotation';
import EAuction from './pages/EAuction';
import RetailManagement from './pages/RetailManagement';
import TradeCircular from './pages/TradeCircular';
import NoticeBoard from './pages/NoticeBoard';
import Career from './pages/Career';
import Blog from './pages/Blog';
import CustomerReview from './pages/CustomerReview';
import MediaGallery from './pages/MediaGallery';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Preloader>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/trade-enquiry" element={<TradeEnquiry />} />
            <Route path="/e-quotation" element={<EQuotation />} />
            <Route path="/e-auction" element={<EAuction />} />
            <Route path="/retail-management" element={<RetailManagement />} />
            <Route path="/trade-circular" element={<TradeCircular />} />
            <Route path="/notice-board" element={<NoticeBoard />} />
            <Route path="/career" element={<Career />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/customer-review" element={<CustomerReview />} />
            <Route path="/media-gallery" element={<MediaGallery />} />
          </Routes>
        </Layout>
      </Preloader>
    </Router>
  );
}

export default App;
