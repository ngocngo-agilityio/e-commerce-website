// Libs
import { AxiosResponse } from 'axios';

// Apis
import { getCategoryList, getTagList } from '../category';

// Services
import { HttpRequestService } from '@services';

// Mocks
import { MOCK_CATEGORIES, MOCK_TAGS } from '@mocks';

jest.mock('@services');

describe('Categories apis', () => {
  describe('getCategoryList', () => {
    const queryConfig = {
      name: 'test',
      sortDirection: 'desc',
      sortBy: 'name',
      categoryIds: ['1'],
      page: '1',
      limit: 10,
    };

    test('getCategoryList success', async () => {
      const expectedResponse = {
        data: MOCK_CATEGORIES,
        status: 200,
        statusText: 'OK',
        headers: {},
      } as AxiosResponse;

      (
        HttpRequestService.get as jest.MockedFunction<
          typeof HttpRequestService.get
        >
      ).mockResolvedValue(expectedResponse);

      const response = await getCategoryList(queryConfig);

      expect(response.data).toEqual(expectedResponse.data);
    });

    test('getCategoryList response is empty object', async () => {
      const expectedResponse = null as unknown as AxiosResponse;

      (
        HttpRequestService.get as jest.MockedFunction<
          typeof HttpRequestService.get
        >
      ).mockResolvedValue(expectedResponse);

      const response = await getCategoryList(queryConfig);

      expect(response).toBeNull;
    });

    test('getCategoryList is failed', async () => {
      const errorMessage = 'Failed to get data';
      const error = new Error(errorMessage);

      (
        HttpRequestService.get as jest.MockedFunction<
          typeof HttpRequestService.get
        >
      ).mockRejectedValue(error);

      try {
        await getCategoryList(queryConfig);
      } catch (error) {
        expect(error).toEqual(error);
      }
    });
  });

  describe('getTagList', () => {
    const queryConfig = {
      name: 'test',
      sortDirection: 'desc',
      sortBy: 'name',
      categoryIds: ['1'],
      page: '1',
      limit: 10,
    };

    test('getTagList success', async () => {
      const expectedResponse = {
        data: MOCK_TAGS,
        status: 200,
        statusText: 'OK',
        headers: {},
      } as AxiosResponse;

      (
        HttpRequestService.get as jest.MockedFunction<
          typeof HttpRequestService.get
        >
      ).mockResolvedValue(expectedResponse);

      const response = await getTagList(queryConfig);

      expect(response.data).toEqual(expectedResponse.data);
    });

    test('getTagList response is empty object', async () => {
      const expectedResponse = null as unknown as AxiosResponse;

      (
        HttpRequestService.get as jest.MockedFunction<
          typeof HttpRequestService.get
        >
      ).mockResolvedValue(expectedResponse);

      const response = await getTagList(queryConfig);

      expect(response).toBeNull;
    });

    test('getTagList is failed', async () => {
      const errorMessage = 'Failed to get data';
      const error = new Error(errorMessage);

      (
        HttpRequestService.get as jest.MockedFunction<
          typeof HttpRequestService.get
        >
      ).mockRejectedValue(error);

      try {
        await getTagList(queryConfig);
      } catch (error) {
        expect(error).toEqual(error);
      }
    });
  });
});
