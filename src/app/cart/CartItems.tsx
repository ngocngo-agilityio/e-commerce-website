'use client';

// Components
import { CartTable } from '@components';

const CartItems = (): JSX.Element => {
  // TODO: Update later
  const handleRemoveProduct = () => {};

  const cart = [
    {
      id: '1',
      name: 'Plain White Shirt',
      image:
        'https://firebasestorage.googleapis.com/v0/b/ecommerce-fashion-16e2e.appspot.com/o/plain-white-shirt-1.webp?alt=media',
      price: 59,
      quantity: 2,
      total: 59,
    },
    {
      id: '2',
      name: 'Plain White Shirt',
      image:
        'https://firebasestorage.googleapis.com/v0/b/ecommerce-fashion-16e2e.appspot.com/o/plain-white-shirt-1.webp?alt=media',
      price: 59,
      quantity: 2,
      total: 59,
    },
  ];

  return <CartTable cart={cart} onRemoveProduct={handleRemoveProduct} />;
};

export default CartItems;
