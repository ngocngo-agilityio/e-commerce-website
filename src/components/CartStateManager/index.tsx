'use client';

// Libs
import { useEffect } from 'react';

// Stores
import { useCartStore } from '@stores';

// Types
import { CartItem } from '@types';

interface Props {
  cartItems: CartItem[];
}

const CartStateManager = ({ cartItems }: Props) => {
  const updateCart = useCartStore((state) => state.updateCart);

  useEffect(() => {
    if (cartItems) {
      updateCart(cartItems);
    }
  }, [cartItems, updateCart]);
  return <></>;
};

export default CartStateManager;
