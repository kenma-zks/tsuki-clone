export interface Product {
  id: string;
  title: string;
  discountedPrice: string;
  originalPrice: string;
  productStatus: string;
  colors: { name: string; value: string }[];
  description: string;
  details: string[];
  recentlyViewed: { image: string; title: string; id: string }[];
  images: { mainImage: string; previewImage: string }[];
}

export interface SalesProduct {
  id: string;
  title: string;
  image: string;
  discountedPrice: string;
  originalPrice: string;
  productStatus?: string;
  colors?: { name: string; value: string }[];
  size?: { name: string }[];
  description: string;
  details: string[];
  recentlyViewed: { image: string; title: string; id: string }[];
  images: { mainImage: string; previewImage: string }[];
}
