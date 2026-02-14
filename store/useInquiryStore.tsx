
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { InquiryItem, Product } from '../types';

interface InquiryContextType {
  items: InquiryItem[];
  addItem: (product: Product, quantity: number, message: string) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearInquiry: () => void;
  itemCount: number;
}

const InquiryContext = createContext<InquiryContextType | undefined>(undefined);

export const InquiryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<InquiryItem[]>([]);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('ssn_inquiry_list');
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load inquiry list", e);
      }
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('ssn_inquiry_list', JSON.stringify(items));
  }, [items]);

  const addItem = (product: Product, quantity: number, message: string) => {
    setItems(prev => {
      const existing = prev.find(i => i.product.id === product.id);
      if (existing) {
        return prev.map(i => i.product.id === product.id 
          ? { ...i, quantity: i.quantity + quantity, customMessage: message || i.customMessage } 
          : i
        );
      }
      return [...prev, { product, quantity, customMessage: message }];
    });
  };

  const removeItem = (productId: string) => {
    setItems(prev => prev.filter(i => i.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setItems(prev => prev.map(i => i.product.id === productId ? { ...i, quantity } : i));
  };

  const clearInquiry = () => setItems([]);

  const itemCount = items.reduce((acc, curr) => acc + 1, 0);

  return (
    <InquiryContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearInquiry, itemCount }}>
      {children}
    </InquiryContext.Provider>
  );
};

export const useInquiry = () => {
  const context = useContext(InquiryContext);
  if (!context) throw new Error('useInquiry must be used within an InquiryProvider');
  return context;
};
