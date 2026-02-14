
import React, { useState } from 'react';
import { useInquiry } from '../store/useInquiryStore';

const Inquiry: React.FC = () => {
  const { items, removeItem, updateQuantity, clearInquiry } = useInquiry();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    projectType: 'Residential',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log("Submitting inquiry for products:", items);
    console.log("Customer info:", formData);
    
    setIsSubmitted(true);
    clearInquiry();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isSubmitted) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center animate-fade-in">
        <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100">
          <div className="w-20 h-20 bg-green-100 text-accent-green rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          </div>
          <h1 className="text-3xl font-extrabold text-brand-dark mb-4">Inquiry Sent Successfully!</h1>
          <p className="text-gray-500 text-lg mb-10 leading-relaxed">
            Thank you for choosing Speed Safety Nets. Our representative will review your request and contact you at <b>{formData.email}</b> or <b>{formData.phone}</b> within 24 hours with a professional quotation.
          </p>
          <a href="#/products" className="inline-block bg-brand-orange text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-orange-200 transition-transform hover:-translate-y-1">
            Browse More Products
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col md:flex-row gap-10">
        
        {/* Left: Products List */}
        <div className="md:w-2/3">
          <div className="mb-8 flex justify-between items-center">
            <h1 className="text-3xl font-extrabold text-brand-dark">Inquiry Basket</h1>
            <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded-full text-sm font-bold">{items.length} Items</span>
          </div>

          {items.length > 0 ? (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.product.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-6 hover:shadow-md transition">
                  <div className="w-24 h-24 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0">
                    <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-lg text-brand-dark">{item.product.name}</h3>
                      <button 
                        onClick={() => removeItem(item.product.id)}
                        className="text-gray-400 hover:text-red-500 transition p-1"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                      </button>
                    </div>
                    <span className="text-xs font-bold text-brand-orange uppercase">{item.product.category}</span>
                    
                    {item.customMessage && (
                      <p className="mt-3 text-xs bg-gray-50 p-3 rounded-lg text-gray-500 border-l-4 border-brand-orange italic">
                        <span className="block font-bold text-brand-dark not-italic mb-1 uppercase tracking-tighter text-[10px]">Specific Requirements:</span>
                        "{item.customMessage}"
                      </p>
                    )}

                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-gray-400 uppercase">Quantity</span>
                        <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                          <button onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))} className="px-2 py-1 hover:bg-white transition text-brand-dark font-bold">-</button>
                          <span className="px-3 py-1 font-bold text-sm min-w-[30px] text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="px-2 py-1 hover:bg-white transition text-brand-dark font-bold">+</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              <button 
                onClick={clearInquiry}
                className="text-gray-400 hover:text-brand-orange text-sm font-semibold flex items-center gap-1 transition"
              >
                Clear all items from list
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-12 text-center border border-dashed border-gray-200">
              <div className="text-5xl mb-4">🛒</div>
              <h2 className="text-xl font-bold text-brand-dark mb-2">Your inquiry list is empty</h2>
              <p className="text-gray-500 mb-8">Please add some products to request a quotation.</p>
              <a href="#/products" className="bg-brand-orange text-white px-8 py-3 rounded-xl font-bold transition hover:bg-[#e66d15]">
                View Catalog
              </a>
            </div>
          )}
        </div>

        {/* Right: Contact Form */}
        <div className="md:w-1/3">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 sticky top-24">
            <h2 className="text-2xl font-bold text-brand-dark mb-6">Quote Request</h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Full Name</label>
                <input 
                  required
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-orange outline-none transition"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Email Address</label>
                <input 
                  required
                  type="email" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-orange outline-none transition"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Phone</label>
                  <input 
                    required
                    type="tel" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-orange outline-none transition"
                    placeholder="+91..."
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Project Type</label>
                  <select 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-brand-orange outline-none transition text-sm font-medium"
                    value={formData.projectType}
                    onChange={e => setFormData({...formData, projectType: e.target.value})}
                  >
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Industrial">Industrial</option>
                    <option value="Government">Government</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Site Location / City</label>
                <input 
                  required
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-orange outline-none transition"
                  placeholder="E.g. Jubilee Hills, Hyderabad"
                  value={formData.location}
                  onChange={e => setFormData({...formData, location: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Overall Project Message</label>
                <textarea 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-orange outline-none transition min-h-[100px]"
                  placeholder="Tell us about the project site, height requirements, etc..."
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-500 font-medium">Selected Solutions</span>
                  <span className="font-bold text-brand-dark px-3 py-1 bg-gray-100 rounded-lg">{items.length}</span>
                </div>
                
                <button 
                  type="submit"
                  disabled={items.length === 0}
                  className="w-full py-4 bg-brand-orange hover:bg-[#e66d15] disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-xl font-bold text-lg shadow-xl shadow-orange-100 transition-all transform hover:-translate-y-1 active:scale-[0.98]"
                >
                  Send Inquiry Request
                </button>
                <p className="text-[10px] text-gray-400 text-center mt-4 uppercase tracking-widest leading-relaxed">
                  Fast response guaranteed within 1 business day.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inquiry;
