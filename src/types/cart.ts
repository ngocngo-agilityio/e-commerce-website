import { Product } from './product';

export interface CartItem {
  id: number;
  productId: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  total: number;
}

export type ICartItem = {
  product: Product;
  quantity: number;
};

export type ICart = {
  id: number;
  userId: string;
  cartItems: ICartItem[];
};
