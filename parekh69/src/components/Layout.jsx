import { Outlet, Link, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Chatbot from './Chatbot';
import { useState } from 'react';
import { Menu } from 'lucide-react';

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className={`min-h-screen bg-pearl-100 text-gray-800 flex flex-col relative ${isHome ? 'pt-0' : 'pt-10 lg:pt-12'}`}>
      {/* Top Fixed Navbar - Dynamic transparent or solid bg, shorter height (h-10 / h-12) */}
      <header className={`px-6 py-1.5 flex items-center justify-between fixed top-0 left-0 right-0 z-50 lg:h-12 h-10 w-full transition-all duration-300 ${
        isHome 
          ? 'bg-transparent border-b border-gray-200/10 shadow-none' 
          : 'bg-white border-b border-gray-200 shadow-sm'
      }`}>
        <div className="flex items-center gap-3">
          {/* Hamburger Menu button for mobile */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden cursor-pointer p-1 -ml-1 rounded-lg text-[#0C2E3A] hover:bg-gray-100/50 transition-colors"
            aria-label="Open menu"
          >
            <Menu size={18} />
          </button>

          {/* Logo and Branding - LoomLine retail mall */}
          <div className="flex items-center gap-2">
            <svg className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-[#0A5F73]" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 5C52 20 62 30 77 33C62 36 52 46 50 61C48 46 38 36 23 33C38 30 48 20 50 5Z" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="50" cy="49" r="3" />
            </svg>
            <span className="font-playfair text-[12px] sm:text-sm lg:text-base tracking-wider font-bold uppercase text-[#0C2E3A]">
              LoomLine retail mall
            </span>
          </div>
        </div>

        {/* Trade Enquiry Button */}
        <Link
          to="/trade-enquiry"
          className="bg-[#0A5F73] hover:bg-[#084E5F] text-white font-outfit text-[9px] sm:text-[10px] lg:text-xs font-semibold px-3.5 py-1.5 uppercase tracking-wider transition-all duration-300 rounded-lg shadow-sm"
        >
          Trade Enquiry
        </Link>
      </header>

      {/* Layout Content Body */}
      <div className="flex flex-1 w-full relative">
        {/* Sidebar Navigation - Starts below header */}
        <div
          className={`fixed top-10 lg:top-12 bottom-0 left-0 transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 transition duration-300 ease-in-out z-40 w-72 bg-white border-r border-gray-150 shadow-sm flex flex-col`}
        >
          <Sidebar closeSidebar={() => setIsSidebarOpen(false)} />
        </div>

        {/* Main Content Area */}
        <div className="flex-grow lg:ml-72 flex flex-col min-h-[calc(100vh-2.5rem)] lg:min-h-[calc(100vh-3rem)] bg-pearl-100 w-full overflow-hidden">
          <main className="flex-grow w-full overflow-x-hidden">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/916353778329"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-2xl hover:scale-105 transition-all duration-300 rounded-full border border-white/10 cursor-pointer"
        title="Chat on WhatsApp"
      >
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.488 1.459 5.416 1.46 5.538 0 10.043-4.508 10.046-10.048.002-2.684-1.04-5.207-2.936-7.106C17.276 1.562 14.757.519 12.01.519c-5.542 0-10.048 4.512-10.05 10.051-.001 1.996.523 3.948 1.52 5.657l-.999 3.65 3.737-.98c1.61.878 3.434 1.342 5.288 1.343zm12.306-7.37c-.305-.153-1.805-.89-2.083-.992-.279-.101-.482-.153-.684.153-.203.305-.786.992-.963 1.194-.178.203-.355.228-.66.076-.304-.153-1.286-.474-2.45-1.511-.905-.808-1.516-1.806-1.694-2.112-.178-.305-.019-.47.133-.621.137-.137.305-.355.457-.533.152-.178.203-.355.305-.508.102-.203.051-.381-.025-.533-.076-.153-.684-1.65-.937-2.26-.247-.595-.499-.515-.684-.524-.178-.008-.381-.01-.584-.01-.203 0-.533.076-.813.381-.279.305-1.066 1.042-1.066 2.542 0 1.5 1.091 2.946 1.243 3.149.153.203 2.148 3.28 5.204 4.602.727.314 1.294.502 1.737.643.73.232 1.393.2 1.918.12.585-.087 1.805-.738 2.059-1.452.254-.715.254-1.328.178-1.452-.076-.124-.279-.203-.584-.356z"/>
        </svg>
      </a>

      {/* Floating Chatbot */}
      <Chatbot />

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-35 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}
