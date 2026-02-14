
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="bg-brand-orange text-white p-2 rounded font-bold">SSN</div>
            <span className="font-bold text-xl tracking-tight">SPEED SAFETY NETS</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Leading industrial provider of high-quality safety nets, bird control, and protective solutions. Trusted by thousands of residential and commercial clients.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-6 border-l-4 border-brand-orange pl-3">Quick Links</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><a href="#/" className="hover:text-brand-orange transition">Home</a></li>
            <li><a href="#/products" className="hover:text-brand-orange transition">Product Catalog</a></li>
            <li><a href="#/about" className="hover:text-brand-orange transition">About Company</a></li>
            <li><a href="#/contact" className="hover:text-brand-orange transition">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-6 border-l-4 border-brand-orange pl-3">Our Services</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>Construction Safety</li>
            <li>Bird Netting Solutions</li>
            <li>Shade Net Installations</li>
            <li>Sports Field Fencing</li>
            <li>Artificial Turf Layout</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-6 border-l-4 border-brand-orange pl-3">Contact Support</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              123 Industrial Park, Sector 4, Hyderabad
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              +91 9988 7766 55
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              sales@speedsafetynets.com
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} Speed Safety Nets. All rights reserved. Industrial Grade Protection.
      </div>
    </footer>
  );
};

export default Footer;
