// Libs
import { createWithEqualityFn } from 'zustand/traditional';

// Types
import { CartItem } from '@types';
import { persist } from 'zustand/middleware';

interface CartState {
  cartItems: CartItem[];
}

const CART_INIT_STATE: CartState = {
  cartItems: [],
};

interface CartStore extends CartState {
  updateCart: (cartItems: CartItem[]) => void;
  clearCart: () => void;
}

export const useCartStore = createWithEqualityFn<CartStore>()(
  persist<CartStore>(
    (set) => ({
      ...CART_INIT_STATE,

      updateCart: (cartItems: CartItem[]) => {
        set({ cartItems });
      },

      clearCart: () => {
        set({ ...CART_INIT_STATE });
      },
    }),
    { name: 'cart' },
  ),
);
