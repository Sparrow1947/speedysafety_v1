
import React from 'react';

const Services: React.FC = () => {
  const serviceList = [
    {
      id: 's1',
      title: 'Construction Safety Installation',
      icon: '🏗️',
      description: 'Full-cycle safety net installation for high-rise buildings, bridges, and industrial sites. We follow IS 11057 standards for safety net testing and installation.',
      features: ['Certified Technicians', 'Heavy Duty Steel Mounting', 'Periodic Safety Audits', 'Load Tested Anchorages']
    },
    {
      id: 's2',
      title: 'Professional Bird Proofing',
      icon: '🐦',
      description: 'Humane bird deterrent solutions including high-visibility netting, spikes, and specialized cabling for commercial facades and residential balconies.',
      features: ['Nylon & HDPE Options', 'Invisible Aesthetics', 'UV Protected Materials', '100% Effective Guarantee']
    },
    {
      id: 's3',
      title: 'Sports Field Infrastructure',
      icon: '🎾',
      description: 'Comprehensive netting solutions for cricket academies, football turfs, and golf ranges. Customized height and tensioning for professional use.',
      features: ['Impact Resistant Nets', 'Custom Frame Fabrication', 'Indoor & Outdoor Setup', 'Low Maintenance Designs']
    },
    {
      id: 's4',
      title: 'Industrial Shading Solutions',
      icon: '🌤️',
      description: 'Design and installation of large-span shade structures for car parks, loading bays, and employee recreation areas.',
      features: ['95% UV Blockage', 'Modular Designs', 'Multi-color Mesh', 'Weatherproof Framework']
    }
  ];

  return (
    <div className="bg-brand-light min-h-screen">
      {/* Header */}
      <section className="bg-brand-dark py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://picsum.photos/seed/blueprint/1200/400" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Our Engineering Services</h1>
          <p className="text-gray-300 text-lg">We don't just supply nets; we engineer safety systems tailored to your specific infrastructure requirements.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {serviceList.map((service) => (
            <div key={service.id} className="bg-white rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-2xl transition-all border border-gray-100 group">
              <div className="text-6xl mb-8 group-hover:scale-110 transition-transform duration-300 inline-block">{service.icon}</div>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">{service.title}</h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                {service.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                    <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    {feature}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="#/contact" className="px-6 py-3 bg-brand-orange text-white rounded-xl font-bold hover:bg-[#e66d15] transition shadow-lg shadow-orange-100">
                  Request Site Survey
                </a>
                <a href="#/products" className="px-6 py-3 border border-gray-200 text-brand-dark rounded-xl font-bold hover:bg-gray-50 transition">
                  View Relevant Products
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-dark">Our Installation Workflow</h2>
            <div className="w-20 h-1.5 bg-brand-orange mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Site Inspection', desc: 'Detailed measurement and hazard assessment of the site.' },
              { step: '02', title: 'System Design', desc: 'Custom structural design based on site-specific needs.' },
              { step: '03', title: 'Installation', desc: 'Certified mounting and tensioning of the netting system.' },
              { step: '04', title: 'Handover', desc: 'Quality inspection and safety certification handover.' },
            ].map((step, i) => (
              <div key={i} className="text-center relative">
                <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black text-brand-orange border-2 border-brand-orange/20 shadow-inner">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
