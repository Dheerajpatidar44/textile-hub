import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';
import FloatingChatbot from './FloatingChatbot';
import { motion } from 'framer-motion';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDFBF7] text-[#103636] relative overflow-x-hidden">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, scale: 0.96, filter: 'blur(12px)', y: 30 }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        className="flex flex-col flex-grow w-full"
      >
        <main className="flex-grow w-full max-w-screen-2xl mx-auto transition-all duration-300 pt-[72px]">
          <Outlet />
        </main>
        <Footer />
      </motion.div>
      <FloatingWhatsApp />
      <FloatingChatbot />
    </div>
  );
}

