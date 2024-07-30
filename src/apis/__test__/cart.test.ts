// Mocks
import { ERROR_MESSAGES, MOCK_CART_ITEMS, MOCK_ERROR_RESPONSE } from '@mocks';

// APIs
import { getCartItems, preloadGetCartItems } from '../cart';

// Services
import { httpClient, ResponseData } from '@services';

// Types
import { CartItem } from '@types';

describe('Cart APIs', () => {
  describe('getCartItems', () => {
    test('get cart items successfully', async () => {
      jest
        .spyOn(httpClient, 'getRequest')
        .mockResolvedValue({ data: MOCK_CART_ITEMS, totalCount: 1 });

      const res = await getCartItems();

      expect(res.data).toEqual(MOCK_CART_ITEMS);
    });

    test('get cart items with response is null value', async () => {
      jest
        .spyOn(httpClient, 'getRequest')
        .mockResolvedValue(null as unknown as ResponseData<CartItem[]>);

      const res = await getCartItems();

      expect(res.data).toEqual([]);
    });

    test('get cart items failed', async () => {
      jest
        .spyOn(httpClient, 'getRequest')
        .mockRejectedValue(MOCK_ERROR_RESPONSE);

      await expect(getCartItems()).rejects.toThrow(ERROR_MESSAGES);
    });
  });

  describe('preloadGetCartItems', () => {
    it('should call getCartItems', () => {
      jest
        .spyOn(httpClient, 'getRequest')
        .mockResolvedValue(null as unknown as ResponseData<CartItem[]>);

      preloadGetCartItems();
    });
  });
});
