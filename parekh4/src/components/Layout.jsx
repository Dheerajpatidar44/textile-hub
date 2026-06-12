import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-pearl-100 text-gray-800">
      {/* Mobile Header / Hamburger */}
      <div className="lg:hidden fixed top-0 w-full bg-pearl-50 text-sapphire-900 z-50 flex items-center justify-between px-6 py-4 shadow-sm border-b border-pearl-100">
        <h1 className="font-playfair text-2xl tracking-wider font-bold">TEXMART</h1>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transition duration-300 ease-in-out z-40 w-72 bg-pearl-50 shadow-lg flex flex-col`}
      >
        <Sidebar closeSidebar={() => setIsSidebarOpen(false)} />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 lg:ml-72 flex flex-col min-h-screen transition-all duration-300">
        <main className="flex-grow pt-24 lg:pt-12 pb-16 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
          <Outlet />
        </main>
        <Footer />
      </div>
      
      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}
