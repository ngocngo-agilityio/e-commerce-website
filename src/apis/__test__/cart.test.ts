// Apis
import {
  addItem,
  addToCart,
  getCartItems,
  removeCartItem,
  updateCartItemQuantity,
  updateQuantity,
} from '../cart';

// Services
import { HttpRequestService } from '@services';

// Mocks
import {
  MOCK_ADD_ITEM_PAYLOAD,
  MOCK_CART_ITEMS,
  MOCK_PRODUCT_LIST,
} from '@mocks';
import { API_PATH } from '@constants';
import { AxiosResponse } from 'axios';

jest.mock('@services');

describe('cart apis', () => {
  describe('addItem', () => {
    test('addItem', () => {
      const payload = {
        ...MOCK_ADD_ITEM_PAYLOAD,
      };

      addItem(payload);

      expect(HttpRequestService.post).toHaveBeenCalledWith(
        API_PATH.CARTS,
        payload,
      );
    });
  });

  describe('updateQuantity', () => {
    test('updateQuantity', () => {
      const id = '1';
      const quantity = 2;

      updateQuantity(id, quantity);

      expect(HttpRequestService.patch).toHaveBeenCalled();
    });
  });

  describe('addToCart', () => {
    test('add a product that is not already existed in the cart', () => {
      const postHttpRequestService = jest.spyOn(HttpRequestService, 'post');
      const product = MOCK_PRODUCT_LIST[0];
      const quantity = 1;

      addToCart({ product, quantity });

      expect(postHttpRequestService).toHaveBeenCalled();
    });

    test('add a product that is already existed in the cart', () => {
      const patchHttpRequestService = jest.spyOn(HttpRequestService, 'patch');

      const product = MOCK_PRODUCT_LIST[0];
      const quantity = 1;
      const cartId = '1';

      addToCart({ product, quantity, cartId });

      expect(patchHttpRequestService).toHaveBeenCalled();
    });
  });

  describe('getCartItems ', () => {
    test('get cart items successfully', async () => {
      const expectedResponse = {
        data: MOCK_CART_ITEMS,
        status: 200,
        statusText: 'OK',
        headers: {},
      } as AxiosResponse;

      (
        HttpRequestService.get as jest.MockedFunction<
          typeof HttpRequestService.get
        >
      ).mockResolvedValue(expectedResponse);

      const response = await getCartItems();

      expect(response.data).toEqual(expectedResponse.data);
    });

    test('get cart item with response is empty object', async () => {
      const expectedResponse = null as unknown as AxiosResponse;

      (
        HttpRequestService.get as jest.MockedFunction<
          typeof HttpRequestService.get
        >
      ).mockResolvedValue(expectedResponse);

      const response = await getCartItems();

      expect(response).toBeNull;
    });

    test('get cart items failed', async () => {
      const errorMessage = 'Failed to get data';
      const error = new Error(errorMessage);

      (
        HttpRequestService.get as jest.MockedFunction<
          typeof HttpRequestService.get
        >
      ).mockRejectedValue(error);

      try {
        await getCartItems();
      } catch (error) {
        expect(error).toEqual(error);
      }
    });
  });

  describe('updateCartItemQuantity ', () => {
    test('update cart successfully', async () => {
      const quantity = 2;
      const cartId = '1';
      const expectedResponse = {
        data: MOCK_CART_ITEMS[0],
        status: 200,
        statusText: 'OK',
        headers: {},
      } as AxiosResponse;

      (
        HttpRequestService.patch as jest.MockedFunction<
          typeof HttpRequestService.patch
        >
      ).mockResolvedValue(expectedResponse);

      await updateCartItemQuantity({ quantity, cartId });
    });

    test('update cart items failed', async () => {
      const quantity = 2;
      const cartId = '1';
      const errorMessage = 'update cart items failed';
      const error = new Error(errorMessage);

      (
        HttpRequestService.patch as jest.MockedFunction<
          typeof HttpRequestService.patch
        >
      ).mockRejectedValue(error);

      try {
        await updateCartItemQuantity({ quantity, cartId });
      } catch (error) {
        expect(error).toEqual(error);
      }
    });
  });

  describe('removeCartItem ', () => {
    test('remove cart item successfully', async () => {
      const cartId = '1';
      const expectedResponse = {
        data: null,
        status: 200,
        statusText: 'OK',
        headers: {},
      } as AxiosResponse;

      (
        HttpRequestService.delete as jest.MockedFunction<
          typeof HttpRequestService.delete
        >
      ).mockResolvedValue(expectedResponse);

      await removeCartItem(cartId);
    });

    test('remove cart item failed', async () => {
      const cartId = '1';
      const errorMessage = 'remove cart items failed';
      const error = new Error(errorMessage);

      (
        HttpRequestService.patch as jest.MockedFunction<
          typeof HttpRequestService.patch
        >
      ).mockRejectedValue(error);

      try {
        await removeCartItem(cartId);
      } catch (error) {
        expect(error).toEqual(error);
      }
    });
  });
});
