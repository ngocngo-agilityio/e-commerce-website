// Mock
import { MOCK_CART_ITEMS } from '@mocks';

// Utils
import { calculateTotalPrice } from '../cart';

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
});
