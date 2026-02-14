
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onAddInquiry: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails, onAddInquiry }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden border border-gray-100 flex flex-col h-full">
      <div 
        className="relative h-56 overflow-hidden cursor-pointer"
        onClick={() => onViewDetails(product)}
      >
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-brand-dark/80 backdrop-blur-sm text-white text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full border border-white/20">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-bold text-lg text-brand-dark mb-1 group-hover:text-brand-orange transition-colors">
          {product.name}
        </h3>
        
        <div className="mb-3">
          {product.price ? (
            <div className="text-brand-green font-bold text-lg">
              ₹{product.price.amount} <span className="text-xs font-normal text-gray-500">/ per {product.price.unit}</span>
            </div>
          ) : (
            <div className="text-brand-orange font-bold text-sm uppercase tracking-tighter">
              Price on Request
            </div>
          )}
        </div>

        <p className="text-gray-500 text-sm line-clamp-2 mb-6 flex-grow">
          {product.shortDescription}
        </p>
        
        <div className="flex gap-2">
          <button 
            onClick={() => onViewDetails(product)}
            className="flex-1 py-2.5 rounded-lg border border-gray-200 text-brand-dark font-semibold text-sm hover:bg-gray-50 transition"
          >
            Details
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onAddInquiry(product);
            }}
            className="flex-1 py-2.5 rounded-lg bg-brand-orange text-white font-semibold text-sm hover:bg-[#e66d15] transition shadow-md shadow-orange-100"
          >
            Inquire
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
