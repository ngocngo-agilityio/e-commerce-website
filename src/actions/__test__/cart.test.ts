import { waitFor } from '@testing-library/react';

// Mocks
import {
  MOCK_SUCCESS_RESPONSE,
  CREATE_CART_PAYLOAD,
  UPDATE_CART_PAYLOAD,
  MOCK_ERROR_RESPONSE,
} from '@mocks';

// Services
import { httpClient } from '@services';

// Constants
import { ERROR_MESSAGES } from '@constants';

// APIs
import { createCart, updateMyCart } from '../cart';

const mockRevalidateTag = jest.fn();

jest.mock('next/cache', () => ({
  ...jest.requireActual('next/cache'),
  revalidateTag: () => mockRevalidateTag,
}));

describe('Cart actions', () => {
  describe('createCart', () => {
    test('should create cart successfully', async () => {
      jest
        .spyOn(httpClient, 'postRequest')
        .mockResolvedValue(MOCK_SUCCESS_RESPONSE);

      await createCart(
        CREATE_CART_PAYLOAD.cartItems,
        CREATE_CART_PAYLOAD.userId,
      );

      waitFor(() => expect(mockRevalidateTag).toHaveBeenCalled());
    });

    test('should create cart failed', async () => {
      jest
        .spyOn(httpClient, 'postRequest')
        .mockRejectedValue(MOCK_ERROR_RESPONSE);

      const res = await createCart(
        CREATE_CART_PAYLOAD.cartItems,
        CREATE_CART_PAYLOAD.userId,
      );

      expect(res?.error).toEqual(ERROR_MESSAGES.CREATE_CART);
    });
  });

  describe('updateMyCart', () => {
    test('should update cart successfully', async () => {
      jest
        .spyOn(httpClient, 'patchRequest')
        .mockResolvedValue(MOCK_SUCCESS_RESPONSE);

      await updateMyCart(
        UPDATE_CART_PAYLOAD.cartId,
        UPDATE_CART_PAYLOAD.cartItems,
      );

      waitFor(() => expect(mockRevalidateTag).toHaveBeenCalled());
    });

    test('should create cart failed', async () => {
      jest
        .spyOn(httpClient, 'patchRequest')
        .mockRejectedValue(MOCK_ERROR_RESPONSE);

      const res = await updateMyCart(
        UPDATE_CART_PAYLOAD.cartId,
        UPDATE_CART_PAYLOAD.cartItems,
      );

      expect(res?.error).toEqual(ERROR_MESSAGES.UPDATE_CART);
    });
  });
});
