
export type Category = 
  | 'Artificial Grass' 
  | 'Bird Spike' 
  | 'Birds Nets' 
  | 'Carpet Grass' 
  | 'Football Turf' 
  | 'Grass Mats' 
  | 'Monsoon Shed' 
  | 'Nylon Hammock' 
  | 'PE Tarpaulin' 
  | 'PP Rope' 
  | 'Safety Nets' 
  | 'Shade Nets' 
  | 'Sports Nets'
  | 'Accessories';

export interface Product {
  id: string;
  name: string;
  category: Category;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  price?: {
    amount: number;
    unit: string;
  };
}

export interface InquiryItem {
  product: Product;
  quantity: number;
  customMessage: string;
}

export interface InquiryForm {
  name: string;
  email: string;
  phone: string;
  location: string;
  generalMessage: string;
}
