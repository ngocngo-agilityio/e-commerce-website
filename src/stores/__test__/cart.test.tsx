// Libs
import { renderHook, act } from '@testing-library/react';

// Stores
import { useCartStore } from '../cart';

// Mocks
import { MOCK_CART_ITEMS } from '@mocks';

describe('useCartStore', () => {
  it('should update cart ', () => {
    const { result } = renderHook(() => useCartStore());

    act(() => {
      result.current.updateCart(MOCK_CART_ITEMS);
    });

    expect(result.current.cartItems).toEqual(MOCK_CART_ITEMS);
  });

  it('should clear products from cart', () => {
    const { result } = renderHook(() => useCartStore());

    act(() => {
      result.current.updateCart(MOCK_CART_ITEMS);
    });

    act(() => {
      result.current.clearCart();
    });

    expect(result.current.cartItems.length).toBe(0);
  });
});
