// Types
import { CartItem } from '@types';

export const calculateTotalPrice = (cartItems: CartItem[] = []) =>
  cartItems.reduce((acc, cartItem) => {
    const { price = 0, quantity = 1 } = cartItem || {};
    const itemPrice = price * quantity;

    return acc + itemPrice;
  }, 0);
