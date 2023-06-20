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
