

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#E5EFF2] border-t border-gray-300/40 text-[#0C2E3A] py-4 px-6 lg:px-16 shrink-0 font-outfit mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-4">
        <p className="text-[14px] uppercase tracking-widest font-bold text-[#4F6D7A] text-center">
          © 2026 LOOMLINE RETAIL MALL. ALL RIGHTS RESERVED.
        </p>


      </div>
    </footer>
  );
}
