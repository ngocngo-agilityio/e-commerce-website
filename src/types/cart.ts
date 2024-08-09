import { Product } from './product';

export type ICartItem = {
  product: Product;
  quantity: number;
};

export type ICart = {
  id: number;
  userId: string;
  cartItems: ICartItem[];
};
