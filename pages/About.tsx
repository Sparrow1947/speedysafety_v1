
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-orange/10 rounded-full"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-blue/10 rounded-full"></div>
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop" 
            alt="About Speed Safety Nets" 
            className="relative rounded-3xl shadow-2xl w-full h-[600px] object-cover"
          />
          <div className="absolute bottom-8 left-8 bg-white p-8 rounded-2xl shadow-xl max-w-[280px]">
            <div className="text-4xl font-extrabold text-brand-orange mb-2">10+</div>
            <div className="text-brand-dark font-bold text-lg leading-tight">Years as Industry Leaders</div>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <span className="text-brand-orange font-bold uppercase tracking-widest text-sm">Since 2014</span>
            <h1 className="text-5xl font-extrabold text-brand-dark mt-2 leading-tight">
              Speed Safety Nets: <br/>
              <span className="text-brand-orange">Professionalism & Integrity.</span>
            </h1>
          </div>

          <div className="p-6 bg-brand-light rounded-xl border border-orange-100">
            <h3 className="font-bold text-brand-dark mb-2">Company Credentials</h3>
            <ul className="text-sm space-y-2 text-gray-600">
              <li><strong>Proprietor:</strong> Mr. Subhan Shaikh</li>
              <li><strong>GST:</strong> 27CVNPS0055B1ZM</li>
              <li><strong>Base Location:</strong> Mumbai, Maharashtra</li>
            </ul>
          </div>

          <p className="text-gray-500 text-lg leading-relaxed">
            Speed Safety Nets is a premier industrial and residential netting organization. Our commitment to using high-tenacity UV-stabilized materials has earned us the trust of major corporations and over 15,000 satisfied clients.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 text-brand-orange rounded-xl flex items-center justify-center font-bold text-xl">01</div>
              <div>
                <h4 className="text-xl font-bold text-brand-dark mb-1">Standardized Quality</h4>
                <p className="text-gray-500 text-sm">All our netting solutions follow strict safety standards for tensioning and impact resistance.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-brand-blue rounded-xl flex items-center justify-center font-bold text-xl">02</div>
              <div>
                <h4 className="text-xl font-bold text-brand-dark mb-1">Pan-India Service</h4>
                <p className="text-gray-500 text-sm">Headquartered in Mumbai, we provide site surveys and installations across India for large-scale projects.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
