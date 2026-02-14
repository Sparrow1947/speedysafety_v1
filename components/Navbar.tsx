
import React, { useState } from 'react';
import { useInquiry } from '../store/useInquiryStore';

const Navbar: React.FC = () => {
  const { itemCount } = useInquiry();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="#/" className="flex-shrink-0 flex items-center gap-2">
              <div className="bg-brand-orange text-white p-2 rounded-lg font-bold text-2xl">SSN</div>
              <div className="hidden md:block">
                <span className="text-brand-dark font-bold text-xl tracking-tight">SPEED SAFETY</span>
                <span className="text-brand-orange font-bold text-xl ml-1">NETS</span>
              </div>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#/" className="text-gray-700 hover:text-brand-orange font-medium transition">Home</a>
            <a href="#/products" className="text-gray-700 hover:text-brand-orange font-medium transition">Products</a>
            <a href="#/services" className="text-gray-700 hover:text-brand-orange font-medium transition">Services</a>
            <a href="#/about" className="text-gray-700 hover:text-brand-orange font-medium transition">About</a>
            <a href="#/contact" className="text-gray-700 hover:text-brand-orange font-medium transition">Contact</a>
            
            <a href="#/inquiry" className="relative group flex items-center bg-brand-dark text-white px-5 py-2.5 rounded-full hover:bg-brand-blue transition">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
              Inquiry List
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-orange text-white text-[10px] font-bold px-2 py-0.5 rounded-full animate-bounce">
                  {itemCount}
                </span>
              )}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <a href="#/inquiry" className="relative p-2 text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
              {itemCount > 0 && (
                <span className="absolute top-0 right-0 bg-brand-orange text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full">
                  {itemCount}
                </span>
              )}
            </a>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t py-4 px-6 space-y-4 shadow-lg animate-fade-in">
          <a href="#/" onClick={() => setIsOpen(false)} className="block text-gray-700 font-medium">Home</a>
          <a href="#/products" onClick={() => setIsOpen(false)} className="block text-gray-700 font-medium">Products</a>
          <a href="#/services" onClick={() => setIsOpen(false)} className="block text-gray-700 font-medium">Services</a>
          <a href="#/about" onClick={() => setIsOpen(false)} className="block text-gray-700 font-medium">About</a>
          <a href="#/contact" onClick={() => setIsOpen(false)} className="block text-gray-700 font-medium">Contact</a>
          <a href="#/inquiry" onClick={() => setIsOpen(false)} className="block bg-brand-dark text-white text-center py-2 rounded-lg font-medium">Inquiry List ({itemCount})</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
