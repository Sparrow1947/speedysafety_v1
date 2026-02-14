
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import Inquiry from './pages/Inquiry';
import About from './pages/About';
import Contact from './pages/Contact';
import { InquiryProvider } from './store/useInquiryStore';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '#/':
        return <Home />;
      case '#/products':
        return <Products />;
      case '#/services':
        return <Services />;
      case '#/inquiry':
        return <Inquiry />;
      case '#/about':
        return <About />;
      case '#/contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <InquiryProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {renderPage()}
        </main>
        <Footer />
      </div>
    </InquiryProvider>
  );
};

export default App;
