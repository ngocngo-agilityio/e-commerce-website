// Mocks
import {
  ERROR_MESSAGES,
  MOCK_PRODUCTS_QUERY_CONFIGS,
  MOCK_ERROR_RESPONSE,
  MOCK_PRODUCT_LIST,
} from '@mocks';

// APIs
import { getProductList, getProductDetail } from '../product';

// Services
import { httpClient, ResponseData } from '@services';

// Types
import { Category, Tag } from '@types';

describe('Products APIs', () => {
  describe('getProductList', () => {
    test('get products successfully', async () => {
      jest.spyOn(httpClient, 'getRequest').mockResolvedValue({
        data: MOCK_PRODUCT_LIST,
        totalCount: MOCK_PRODUCT_LIST.length,
      });

      const res = await getProductList(MOCK_PRODUCTS_QUERY_CONFIGS);

      expect(res.data).toEqual(MOCK_PRODUCT_LIST);
    });

    test('get products with response is null value', async () => {
      jest
        .spyOn(httpClient, 'getRequest')
        .mockResolvedValue(null as unknown as ResponseData<Category[]>);

      const res = await getProductList();

      expect(res.data).toEqual([]);
    });

    test('get products failed', async () => {
      jest
        .spyOn(httpClient, 'getRequest')
        .mockRejectedValue(MOCK_ERROR_RESPONSE);

      await expect(getProductList()).rejects.toThrow(ERROR_MESSAGES);
    });
  });

  describe('getProductDetail', () => {
    test('get product details successfully', async () => {
      jest.spyOn(httpClient, 'getRequest').mockResolvedValue({
        data: MOCK_PRODUCT_LIST[0],
        totalCount: 1,
      });

      const res = await getProductDetail(MOCK_PRODUCT_LIST[0].id.toString());

      expect(res.data).toEqual(MOCK_PRODUCT_LIST[0]);
    });

    test('get tags with response is null value', async () => {
      jest
        .spyOn(httpClient, 'getRequest')
        .mockResolvedValue(null as unknown as ResponseData<Tag[]>);

      const res = await getProductDetail(MOCK_PRODUCT_LIST[0].id.toString());

      expect(res.data).toEqual(undefined);
    });

    test('get tags failed', async () => {
      jest
        .spyOn(httpClient, 'getRequest')
        .mockRejectedValue(MOCK_ERROR_RESPONSE);

      await expect(
        getProductDetail(MOCK_PRODUCT_LIST[0].id.toString()),
      ).rejects.toThrow(ERROR_MESSAGES);
    });
  });
});
