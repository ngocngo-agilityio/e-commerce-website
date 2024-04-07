export interface ProductSize {
  id: string;
  size: string;
  symbol: string;
}

export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  discount: number;
  rating: number;
  voteNumber: number;
  introduction: string;
  sizes: ProductSize[];
}
