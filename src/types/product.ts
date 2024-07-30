export interface ProductSize {
  id: number;
  size: string;
  symbol: string;
}

export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  discount: number;
  rating: number;
  voteNumber: number;
  introduction: string;
  sizes: ProductSize[];
  categoryIds: number[];
  tagIds: number[];
}
