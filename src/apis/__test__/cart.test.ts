// Mocks
import {
  MOCK_ERROR_MESSAGES,
  MOCK_CART_ITEMS,
  MOCK_ERROR_RESPONSE,
} from '@mocks';

// APIs
import { getCartItems } from '../cart';

// Services
import { httpClient, ResponseData } from '@services';

// Types
import { ICartItem } from '@types';

// Auth Configs
import { auth } from '@configs/index';

jest.mock('@configs', () => ({
  ...jest.requireActual('@configs'),
  auth: jest.fn(),
}));

describe('Cart APIs', () => {
  describe('getCartItems', () => {
    test('get cart items successfully', async () => {
      (auth as jest.Mock).mockResolvedValue({
        session: { user: { id: '1' } },
      });

      jest
        .spyOn(httpClient, 'getRequest')
        .mockResolvedValue({ data: [MOCK_CART_ITEMS], totalCount: 1 });

      const res = await getCartItems();

      expect(res.data).toEqual(MOCK_CART_ITEMS);
    });

    test('get cart items with response is null value', async () => {
      (auth as jest.Mock).mockResolvedValue({
        session: { user: { id: null } },
      });

      jest
        .spyOn(httpClient, 'getRequest')
        .mockResolvedValue(null as unknown as ResponseData<ICartItem[]>);

      const res = await getCartItems();

      expect(res.data).toEqual({});
    });

    test('get cart items failed', async () => {
      (auth as jest.Mock).mockResolvedValue({
        session: { user: { id: '1' } },
      });

      jest
        .spyOn(httpClient, 'getRequest')
        .mockRejectedValue(MOCK_ERROR_RESPONSE);

      await expect(getCartItems()).rejects.toThrow(MOCK_ERROR_MESSAGES);
    });
  });
});
