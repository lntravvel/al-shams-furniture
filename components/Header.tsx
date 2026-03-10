
import React from 'react';

const SunIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-2xl sticky top-0 z-50 border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-amber-500 rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative w-14 h-14 bg-gradient-to-br from-teal-500 to-amber-500 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
              <SunIcon className="w-8 h-8 text-white" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-teal-400 via-cyan-300 to-amber-400 bg-clip-text text-transparent">
              الشمس للأثاث المدرسي
            </h1>
            <p className="text-xs text-gray-400 hidden md:block">جودة تدوم لأجيال</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#products" className="text-gray-300 hover:text-teal-400 transition-colors font-medium">منتجاتنا</a>
          <a href="#about" className="text-gray-300 hover:text-teal-400 transition-colors font-medium">عن الشركة</a>
          <a href="#contact" className="px-6 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full font-bold hover:shadow-lg hover:shadow-teal-500/30 hover:scale-105 transition-all duration-300">
            تواصل معنا
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
