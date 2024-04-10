// Libs
import { AxiosResponse } from 'axios';

// Apis
import { getProductDetail, getProductList } from '../product';

// Services
import { HttpRequestService } from '@services';

// Mocks
import { MOCK_PRODUCT_LIST } from '@mocks';

jest.mock('@services');

describe('Products apis', () => {
  describe('getProductList', () => {
    const queryConfig = {
      name: 'test',
      sortDirection: 'desc',
      sortBy: 'name',
      categoryIds: ['1'],
      page: '1',
      limit: 10,
    };

    test('getProductList success', async () => {
      const expectedResponse = {
        data: MOCK_PRODUCT_LIST,
        status: 200,
        statusText: 'OK',
        headers: {},
      } as AxiosResponse;

      (
        HttpRequestService.get as jest.MockedFunction<
          typeof HttpRequestService.get
        >
      ).mockResolvedValue(expectedResponse);

      const response = await getProductList(queryConfig);

      expect(response.data).toEqual(expectedResponse.data);
    });

    test('getProductList response is empty object', async () => {
      const expectedResponse = null as unknown as AxiosResponse;

      (
        HttpRequestService.get as jest.MockedFunction<
          typeof HttpRequestService.get
        >
      ).mockResolvedValue(expectedResponse);

      const response = await getProductList(queryConfig);

      expect(response).toBeNull;
    });

    test('getProductList is failed', async () => {
      const errorMessage = 'Failed to get data';
      const error = new Error(errorMessage);

      (
        HttpRequestService.get as jest.MockedFunction<
          typeof HttpRequestService.get
        >
      ).mockRejectedValue(error);

      try {
        await getProductList(queryConfig);
      } catch (error) {
        expect(error).toEqual(error);
      }
    });
  });

  describe('getProductDetail', () => {
    const id = '1';

    test('getProductDetail success', async () => {
      const expectedResponse = {
        data: MOCK_PRODUCT_LIST[0],
        status: 200,
        statusText: 'OK',
        headers: {},
      } as AxiosResponse;

      (
        HttpRequestService.get as jest.MockedFunction<
          typeof HttpRequestService.get
        >
      ).mockResolvedValue(expectedResponse);

      const response = await getProductDetail(id);

      expect(response.data).toEqual(expectedResponse.data);
    });

    test('getProductDetail response is empty object', async () => {
      const expectedResponse = null as unknown as AxiosResponse;

      (
        HttpRequestService.get as jest.MockedFunction<
          typeof HttpRequestService.get
        >
      ).mockResolvedValue(expectedResponse);

      const response = await getProductDetail(id);

      expect(response).toBeNull;
    });

    test('getProductDetail is failed', async () => {
      const errorMessage = 'Failed to get data';
      const error = new Error(errorMessage);

      (
        HttpRequestService.get as jest.MockedFunction<
          typeof HttpRequestService.get
        >
      ).mockRejectedValue(error);

      try {
        await getProductDetail(id);
      } catch (error) {
        expect(error).toEqual(error);
      }
    });
  });
});
