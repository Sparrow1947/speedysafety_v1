
import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/products';
import { Category, Product } from '../types';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import { useInquiry } from '../store/useInquiryStore';

const CATEGORIES: Category[] = [
  'Artificial Grass', 'Bird Spike', 'Birds Nets', 'Carpet Grass', 'Football Turf', 
  'Grass Mats', 'Monsoon Shed', 'Nylon Hammock', 'PE Tarpaulin', 'PP Rope', 
  'Safety Nets', 'Shade Nets', 'Sports Nets'
];

const Products: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'category'>('name');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { addItem } = useInquiry();

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(p.category);
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            p.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return a.category.localeCompare(b.category);
    });
  }, [selectedCategories, searchQuery, sortBy]);

  const toggleCategory = (cat: Category) => {
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col md:flex-row gap-10">
        
        {/* Sidebar Filters */}
        <aside className="md:w-72 flex-shrink-0 space-y-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24 max-h-[85vh] overflow-y-auto">
            <div className="mb-8">
              <h3 className="text-lg font-bold text-brand-dark mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                Search
              </h3>
              <input 
                type="text" 
                placeholder="Product name..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-orange outline-none transition text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-brand-dark">Categories</h3>
                {selectedCategories.length > 0 && (
                  <button onClick={() => setSelectedCategories([])} className="text-xs text-brand-orange font-bold uppercase hover:underline">Clear</button>
                )}
              </div>
              <div className="flex flex-col gap-2">
                {CATEGORIES.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => toggleCategory(cat)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-medium transition-all ${
                      selectedCategories.includes(cat) 
                      ? 'bg-brand-orange text-white shadow-md' 
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-brand-dark mb-4">Sort</h3>
              <select 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm cursor-pointer"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'category')}
              >
                <option value="name">A-Z Name</option>
                <option value="category">Category</option>
              </select>
            </div>
          </div>
        </aside>

        {/* Main Grid */}
        <main className="flex-grow">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-brand-dark">Our Solutions</h1>
              <p className="text-gray-500 text-sm mt-1">Showing {filteredProducts.length} results</p>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
              {filteredProducts.map(p => (
                <ProductCard 
                  key={p.id} 
                  product={p} 
                  onViewDetails={setSelectedProduct} 
                  onAddInquiry={(prod) => addItem(prod, 1, '')}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your filters.</p>
              <button 
                onClick={() => { setSelectedCategories([]); setSearchQuery(''); }}
                className="mt-6 text-brand-orange font-bold underline"
              >
                Reset all filters
              </button>
            </div>
          )}
        </main>
      </div>

      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </div>
  );
};

export default Products;
