import { waitFor } from '@testing-library/react';

// Mocks
import {
  ADD_CART_PAYLOAD,
  MOCK_CART_ITEMS,
  MOCK_ERROR_RESPONSE,
  MOCK_SUCCESS_RESPONSE,
  MOCK_UPDATE_QUANTITY_CART_PAYLOAD,
} from '@mocks';

// Services
import { httpClient } from '@services';

// Constants
import { ERROR_MESSAGES } from '@constants';

// Types
import { Product } from '@types';

// APIs
import { addToCart, removeCartItem, updateCartItemQuantity } from '../cart';

const mockRevalidateTag = jest.fn();

jest.mock('next/cache', () => ({
  ...jest.requireActual('next/cache'),
  revalidateTag: () => mockRevalidateTag,
}));

describe('Cart actions', () => {
  describe('updateCartItemQuantity', () => {
    test('update quantity for the cart item successfully', async () => {
      jest
        .spyOn(httpClient, 'patchRequest')
        .mockResolvedValue(MOCK_SUCCESS_RESPONSE);

      await updateCartItemQuantity(MOCK_UPDATE_QUANTITY_CART_PAYLOAD);

      waitFor(() => expect(mockRevalidateTag).toHaveBeenCalled());
    });

    test('update quantity for the cart item failed', async () => {
      jest
        .spyOn(httpClient, 'patchRequest')
        .mockRejectedValue(MOCK_ERROR_RESPONSE);

      const res = await updateCartItemQuantity(
        MOCK_UPDATE_QUANTITY_CART_PAYLOAD,
      );

      expect(res?.error).toEqual(ERROR_MESSAGES.UPDATE_QUANTITY);
    });
  });

  describe('removeCartItem', () => {
    test('should remove cart item successfully', async () => {
      jest
        .spyOn(httpClient, 'deleteRequest')
        .mockResolvedValue(MOCK_SUCCESS_RESPONSE);

      await removeCartItem(MOCK_CART_ITEMS[0].id);

      waitFor(() => expect(mockRevalidateTag).toHaveBeenCalled());
    });

    test('should remove cart item failed', async () => {
      jest
        .spyOn(httpClient, 'deleteRequest')
        .mockRejectedValue(MOCK_ERROR_RESPONSE);

      const res = await removeCartItem(MOCK_CART_ITEMS[0].id);

      expect(res?.error).toEqual(ERROR_MESSAGES.REMOVE_CART_ITEM);
    });
  });

  describe('addToCart', () => {
    test('should add product to cart with that product has existed in cart successfully', async () => {
      jest
        .spyOn(httpClient, 'patchRequest')
        .mockResolvedValue(MOCK_SUCCESS_RESPONSE);

      await addToCart({ ...ADD_CART_PAYLOAD, cartId: MOCK_CART_ITEMS[0].id });

      waitFor(() => expect(mockRevalidateTag).toHaveBeenCalled());
    });

    test('should add product to cart with that product has NOT existed in cart successfully', async () => {
      jest
        .spyOn(httpClient, 'postRequest')
        .mockResolvedValue(MOCK_SUCCESS_RESPONSE);

      await addToCart({ ...ADD_CART_PAYLOAD });

      waitFor(() => expect(mockRevalidateTag).toHaveBeenCalled());
    });

    test('should add product to cart with that product has NOT existed in cart failed', async () => {
      const mockPayload = {
        quantity: 2,
        product: null as unknown as Product,
      };
      jest
        .spyOn(httpClient, 'postRequest')
        .mockRejectedValue(MOCK_ERROR_RESPONSE);

      const res = await addToCart(mockPayload);

      expect(res?.error).toEqual(ERROR_MESSAGES.ADD_CART);
    });
  });
});
