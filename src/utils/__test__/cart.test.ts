// Mock
import { MOCK_CART_ITEMS } from '@mocks';

// Utils
import { calculateTotalPrice } from '../cart';

// Types
import { CartItem } from '@types';

describe('calculateTotalPrice currency', () => {
  test('returns 0 when cartItems is empty', () => {
    const cartItems = undefined;

    const result = calculateTotalPrice(cartItems);

    expect(result).toEqual(0);
  });

  test('returns formatted currency', () => {
    const cartItems = MOCK_CART_ITEMS;

    const result = calculateTotalPrice(cartItems);

    expect(result).toEqual(138);
  });

  test('returns formatted currency correct if cart item is null', () => {
    const cartItems = [null as unknown as CartItem];

    const result = calculateTotalPrice(cartItems);

    expect(result).toEqual(0);
  });
});
