import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';
import FloatingChatbot from './FloatingChatbot';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen relative" style={{ background: '#FDF8F4' }}>
      <Navbar />
      <main className="flex-grow w-full transition-all duration-300">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <FloatingChatbot />
    </div>
  );
}
