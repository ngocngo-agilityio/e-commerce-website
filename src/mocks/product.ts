// Types
import { Product } from '@types';

export const MOCK_PRODUCT_CARD = {
  id: '1',
  name: 'Plain White Shirt',
  image:
    'https://firebasestorage.googleapis.com/v0/b/ecommerce-fashion-16e2e.appspot.com/o/plain-white-shirt.webp?alt=media',
  price: 29,
};

export const MOCK_PRODUCT_LIST: Product[] = [
  {
    id: 2,
    name: 'Black Polo Shirt',
    price: 49,
    discount: 24,
    sizes: [
      {
        id: 1,
        size: 'Small',
        symbol: 'S',
      },
      {
        id: 2,
        size: 'Medium',
        symbol: 'M',
      },
      {
        id: 3,
        size: 'Large',
        symbol: 'L',
      },
      {
        id: 4,
        size: 'Extra Large',
        symbol: 'XL',
      },
    ],
    rating: 4.3,
    voteNumber: 15,
    categoryIds: [2, 3, 4],
    tagIds: [1, 2, 3],
    image:
      'https://firebasestorage.googleapis.com/v0/b/ecommerce-fashion-16e2e.appspot.com/o/black-polo-shirt.webp?alt=media',
    introduction:
      'A classic t-shirt never goes out of style. This is our most premium collection of shirt. This plain white shirt is made up of pure cotton and has a premium finish.',
  },
  {
    id: 3,
    name: 'Plain White Shirt',
    price: 29,
    discount: 24,
    sizes: [
      {
        id: 1,
        size: 'Small',
        symbol: 'S',
      },
      {
        id: 2,
        size: 'Medium',
        symbol: 'M',
      },
      {
        id: 3,
        size: 'Large',
        symbol: 'L',
      },
      {
        id: 4,
        size: 'Extra Large',
        symbol: 'XL',
      },
    ],
    rating: 4.3,
    voteNumber: 15,
    categoryIds: [2, 3, 5],
    tagIds: [1, 2, 3],
    image:
      'https://firebasestorage.googleapis.com/v0/b/ecommerce-fashion-16e2e.appspot.com/o/plain-white-shirt.webp?alt=media',
    introduction:
      'A classic t-shirt never goes out of style. This is our most premium collection of shirt. This plain white shirt is made up of pure cotton and has a premium finish.',
  },
];

export const MOCK_PRODUCT_SIZES = [
  {
    id: '1',
    size: 'Small',
    symbol: 'S',
  },
  {
    id: '2',
    size: 'Medium',
    symbol: 'M',
  },
  {
    id: '3',
    size: 'Large',
    symbol: 'L',
  },
  {
    id: '4',
    size: 'Extra Large',
    symbol: 'XL',
  },
];
