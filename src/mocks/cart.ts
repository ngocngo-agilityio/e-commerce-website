// Types
import { CartItem as ICartItem } from '@types';

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

export const MOCK_UPDATE_QUANTITY_CART_PAYLOAD = {
  quantity: 10,
  cartId: MOCK_CART_ITEMS[0].id,
};

export const ADD_CART_PAYLOAD = {
  product: MOCK_PRODUCT_LIST[0],
  quantity: 2,
};
