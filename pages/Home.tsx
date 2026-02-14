
import React from 'react';

const Home: React.FC = () => {
  const clients = [
    'Taj Hotels', 'Grand Hyatt', 'JW Marriott', 'Reliance Industries', 
    'Tata Group', 'Hiranandani', 'Lodha Group', 'Godrej Properties'
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" 
            alt="Safety Nets Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/60 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl space-y-8">
            <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/40 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">Est. 2014 | Quality Certified</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Premium <span className="text-brand-orange">Safety & Netting</span> Solutions.
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Speed Safety Nets specializes in industrial safety, bird control, and sports infrastructure. Trusted by India's leading hospitality and real estate giants.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#/products" className="bg-brand-orange hover:bg-[#e66d15] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl shadow-orange-900/40 transition-all transform hover:-translate-y-1">
                Explore Products
              </a>
              <a href="#/contact" className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:-translate-y-1">
                Request Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-white py-12 shadow-sm relative z-10 -mt-8 mx-auto w-full max-w-6xl rounded-2xl border border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
        {[
          { label: 'Projects Completed', value: '7,500+' },
          { label: 'Happy Clients', value: '15,000+' },
          { label: 'Years Experience', value: '10+' },
          { label: 'City Presence', value: 'Mumbai & Pan-India' },
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-3xl font-extrabold text-brand-dark">{stat.value}</div>
            <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Client Showcase */}
      <section className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-10">Our Prestigious Clients</h2>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-60">
            {clients.map(client => (
              <span key={client} className="text-xl font-bold text-brand-dark grayscale hover:grayscale-0 transition cursor-default">{client}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-dark">Our Core Expertise</h2>
          <div className="w-24 h-1.5 bg-brand-orange mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: 'Construction Safety', 
              desc: 'High-altitude fall protection systems for large-scale engineering projects and high-rise developments.',
              icon: '🏗️'
            },
            { 
              title: 'Bird Control', 
              desc: 'Humane, durable, and nearly invisible bird spikes and netting for residential and commercial ledges.',
              icon: '🐦'
            },
            { 
              title: 'Sports & Turf', 
              desc: 'Professional grade cricket nets, football turfs, and court fencing designed for performance.',
              icon: '🎾'
            },
          ].map((service, i) => (
            <div key={i} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed">{service.desc}</p>
              <a href="#/services" className="inline-flex items-center text-brand-orange font-bold mt-6 hover:gap-3 transition-all">
                Learn more <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-blue py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 italic">Ready to secure your premises?</h2>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-12">
            Professional installation. Authentic materials. 24-hour turnaround on quotations.
          </p>
          <a href="#/products" className="bg-white text-brand-blue hover:bg-brand-orange hover:text-white px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-xl">
            View Product Catalog
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
