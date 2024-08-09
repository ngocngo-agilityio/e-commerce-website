// Types
import { ICartItem } from '@types';

// Mocks
import { MOCK_PRODUCT_LIST } from './product';

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
    product: MOCK_PRODUCT_LIST[0],
    quantity: 2,
  },
  {
    product: MOCK_PRODUCT_LIST[1],
    quantity: 1,
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

export const CREATE_CART_PAYLOAD = {
  cartItems: [],
  userId: '1',
};

export const UPDATE_CART_PAYLOAD = {
  cartItems: MOCK_CART_ITEMS,
  cartId: 2,
};
