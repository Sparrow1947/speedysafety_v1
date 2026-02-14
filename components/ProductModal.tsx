
import React, { useState } from 'react';
import { Product } from '../types';
import { useInquiry } from '../store/useInquiryStore';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const { addItem } = useInquiry();
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState('');
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product, quantity, message);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
      <div className="absolute inset-0 bg-brand-dark/60 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl relative overflow-hidden flex flex-col md:flex-row animate-scale-up">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/80 p-2 rounded-full text-brand-dark hover:bg-brand-orange hover:text-white transition shadow-lg"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        {/* Image Section */}
        <div className="md:w-1/2 bg-gray-100 flex flex-col p-4 sm:p-8">
          <div className="flex-grow flex items-center justify-center rounded-xl overflow-hidden bg-white shadow-inner mb-4">
            <img 
              src={product.images[activeImage]} 
              alt={product.name} 
              className="max-h-[300px] md:max-h-[450px] object-contain w-full"
            />
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-3 justify-center">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition ${activeImage === idx ? 'border-brand-orange scale-110' : 'border-transparent opacity-60'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 p-6 sm:p-10 flex flex-col overflow-y-auto max-h-[80vh] md:max-h-[unset]">
          <div className="mb-6">
            <span className="text-brand-orange text-xs font-bold uppercase tracking-widest">{product.category}</span>
            <h2 className="text-3xl font-bold text-brand-dark mt-1">{product.name}</h2>
          </div>

          <div className="mb-8">
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3">Description</h4>
            <p className="text-gray-600 leading-relaxed whitespace-pre-line">
              {product.fullDescription}
            </p>
          </div>

          <div className="mt-auto space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Quantity Required</label>
                <div className="flex items-center border-2 border-gray-100 rounded-xl overflow-hidden">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-gray-50 transition">-</button>
                  <input 
                    type="number" 
                    value={quantity} 
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    className="w-full text-center font-bold text-brand-dark focus:outline-none"
                  />
                  <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-gray-50 transition">+</button>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Custom Requirements (Optional)</label>
              <textarea 
                placeholder="E.g. measurements, color, specific height requirements..."
                className="w-full p-4 border-2 border-gray-100 rounded-xl focus:border-brand-orange focus:outline-none transition min-h-[100px]"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <button 
              onClick={handleAdd}
              disabled={added}
              className={`w-full py-4 rounded-xl font-bold text-lg shadow-xl transition-all flex items-center justify-center gap-3 ${added ? 'bg-accent-green text-white' : 'bg-brand-orange text-white hover:bg-[#e66d15] transform active:scale-[0.98]'}`}
            >
              {added ? (
                <>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Added to Inquiry List
                </>
              ) : (
                <>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                  Add to Inquiry
                </>
              )}
            </button>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scale-up {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-scale-up {
          animation: scale-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ProductModal;
