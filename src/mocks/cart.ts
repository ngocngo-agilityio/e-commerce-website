// Types
import { CartItem as ICartItem } from '@types';

export const MOCK_CART_ITEM = {
  id: 1,
  name: 'Plain White Shirt',
  image:
    'https://firebasestorage.googleapis.com/v0/b/ecommerce-fashion-16e2e.appspot.com/o/black-polo-shirt.webp?alt=media',
  price: 69,
  quantity: 2,
};

export const MOCK_CART_ITEMS: ICartItem[] = [
  {
    id: 1,
    productId: 2,
    name: 'Plain White Shirt',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ecommerce-fashion-16e2e.appspot.com/o/black-polo-shirt.webp?alt=media',
    price: 69,
    quantity: 2,
    total: 69,
  },
];

export const MOCK_ADD_ITEM_PAYLOAD = {
  productId: 3,
  name: 'Plain White Shirt',
  image:
    'https://firebasestorage.googleapis.com/v0/b/ecommerce-fashion-16e2e.appspot.com/o/plain-white-shirt.webp?alt=media',
  price: 29,
  quantity: 3,
};
