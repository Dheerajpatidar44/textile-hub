import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingChatbot from './FloatingChatbot';
import FloatingWhatsApp from './FloatingWhatsApp';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-vastram-cream text-gray-800 relative">
      <Navbar />
      <main className="flex-grow w-full max-w-screen-2xl mx-auto transition-all duration-300">
        <Outlet />
      </main>
      <Footer />
      <FloatingChatbot />
      <FloatingWhatsApp />
    </div>
  );
}
