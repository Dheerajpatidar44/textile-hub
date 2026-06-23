import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';
import FloatingChatbot from './FloatingChatbot';
import { motion } from 'framer-motion';

export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F6F8] text-[#5E6A7E] relative overflow-x-clip">
      <Navbar />
      <div className="flex flex-col flex-grow w-full">
        <main className={`flex-grow w-full max-w-screen-2xl mx-auto transition-all duration-300 ${isHome ? 'pt-0' : 'pt-[58px]'}`}>
          <Outlet />
        </main>
        <Footer />
      </div>
      <FloatingWhatsApp />
      <FloatingChatbot />
    </div>
  );
}

