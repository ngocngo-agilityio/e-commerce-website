// Mocks
import {
  MOCK_ERROR_MESSAGES,
  MOCK_CATEGORIES,
  MOCK_CATEGORIES_QUERY_CONFIGS,
  MOCK_ERROR_RESPONSE,
  MOCK_TAGS,
  MOCK_TAGS_QUERY_CONFIGS,
} from '@mocks';

// APIs
import { getCategoryList, getTagList } from '../category';

// Services
import { httpClient, ResponseData } from '@services';

// Types
import { Category, Tag } from '@types';

describe('Categories APIs', () => {
  describe('getCategoryList', () => {
    test('get categories successfully', async () => {
      jest
        .spyOn(httpClient, 'getRequest')
        .mockResolvedValue({ data: MOCK_CATEGORIES, totalCount: 6 });

      const res = await getCategoryList(MOCK_CATEGORIES_QUERY_CONFIGS);

      expect(res.data).toEqual(MOCK_CATEGORIES);
    });

    test('get categories with response is null value', async () => {
      jest
        .spyOn(httpClient, 'getRequest')
        .mockResolvedValue(null as unknown as ResponseData<Category[]>);

      const res = await getCategoryList();

      expect(res.data).toEqual([]);
    });

    test('get categories failed', async () => {
      jest
        .spyOn(httpClient, 'getRequest')
        .mockRejectedValue(MOCK_ERROR_RESPONSE);

      await expect(getCategoryList()).rejects.toThrow(MOCK_ERROR_MESSAGES);
    });
  });

  describe('getTagList', () => {
    test('get tags successfully', async () => {
      jest
        .spyOn(httpClient, 'getRequest')
        .mockResolvedValue({ data: MOCK_TAGS, totalCount: MOCK_TAGS.length });

      const res = await getTagList(MOCK_TAGS_QUERY_CONFIGS);

      expect(res.data).toEqual(MOCK_TAGS);
    });

    test('get tags with response is null value', async () => {
      jest
        .spyOn(httpClient, 'getRequest')
        .mockResolvedValue(null as unknown as ResponseData<Tag[]>);

      const res = await getTagList();

      expect(res.data).toEqual([]);
    });

    test('get tags failed', async () => {
      jest
        .spyOn(httpClient, 'getRequest')
        .mockRejectedValue(MOCK_ERROR_RESPONSE);

      await expect(getTagList()).rejects.toThrow(MOCK_ERROR_MESSAGES);
    });
  });
});
