import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';
import FloatingChatbot from './FloatingChatbot';
import FloatingSocials from './FloatingSocials';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-cream-100 text-[#222831] relative">
      <Navbar />
      <main className="flex-grow w-full max-w-screen-2xl mx-auto transition-all duration-300">
        <Outlet />
      </main>
      <Footer />
      <FloatingSocials />
      <FloatingWhatsApp />
      <FloatingChatbot />
    </div>
  );
}
