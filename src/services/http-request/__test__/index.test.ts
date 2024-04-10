// Libs
import axios from 'axios';

// Constants
import { ERROR_MESSAGES } from '@constants';

// Services
import { HttpRequestService } from '../index';

jest.mock('axios');

describe('HttpRequest', () => {
  let httpRequest: typeof HttpRequestService;

  beforeEach(() => {
    httpRequest = HttpRequestService;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('get', () => {
    test('makes a GET request with the correct URL and returns the response', async () => {
      const endpoint = '/users';
      const expectedResponse = {
        data: 'Mocked response',
        status: 200,
        statusText: 'OK',
        headers: {},
      };
      (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue(
        expectedResponse,
      );

      const response = await httpRequest.get<string>(endpoint);

      expect(axios.get).toHaveBeenCalledWith(`${endpoint}`, {});
      expect(response).toEqual(expectedResponse);
    });

    test('throws an error with the error message when the request fails', async () => {
      const endpoint = '/users';
      const errorMessage = 'Failed to get data';
      const error = new Error(errorMessage);
      (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValue(
        error,
      );

      try {
        await httpRequest.get(endpoint);
      } catch (error) {
        expect(error).toEqual(ERROR_MESSAGES.REQUEST);
      }
    });
  });

  describe('post', () => {
    test('makes a POST request with the correct URL, body, and returns the response data', async () => {
      const endpoint = '/users';
      const body = { name: 'Ngoc', age: 25 };
      const expectedResponseData = { id: 1, ...body };
      const expectedResponse = {
        data: expectedResponseData,
        status: 201,
        statusText: 'Created',
        headers: {},
        config: {},
      };
      (axios.post as jest.MockedFunction<typeof axios.post>).mockResolvedValue(
        expectedResponse,
      );

      const response = await httpRequest.post<
        typeof body,
        typeof expectedResponseData
      >(endpoint, body);

      expect(axios.post).toHaveBeenCalledWith(endpoint, body, undefined);
      expect(response).toEqual(expectedResponseData);
    });

    test('throws an error with the error message when the request fails', async () => {
      const endpoint = '/users';
      const body = { name: 'Ngoc', age: 25 };
      const errorMessage = 'Failed to create user';
      const error = new Error(errorMessage);
      (axios.post as jest.MockedFunction<typeof axios.post>).mockRejectedValue(
        error,
      );

      try {
        await httpRequest.post(endpoint, body, undefined);
      } catch (error) {
        expect(error).toEqual(ERROR_MESSAGES.REQUEST);
      }
    });
  });

  describe('patch', () => {
    test('makes a PATCH request with the correct URL, body, and returns the response data', async () => {
      const endpoint = '/users/1';
      const body = { name: 'Ngoc Ngo' };
      const expectedResponseData = { id: 1, ...body };
      const expectedResponse = {
        data: expectedResponseData,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {},
      };
      (
        axios.patch as jest.MockedFunction<typeof axios.patch>
      ).mockResolvedValue(expectedResponse);

      const response = await httpRequest.patch<
        typeof body,
        typeof expectedResponseData
      >(endpoint, body);

      expect(axios.patch).toHaveBeenCalledWith(endpoint, body, undefined);
      expect(response).toEqual(expectedResponseData);
    });

    test('throws an error with the error message when the request fails', async () => {
      const endpoint = '/users/1';
      const body = { name: 'Ngoc Ngo' };
      const errorMessage = 'Failed to update user';
      const error = new Error(errorMessage);
      (
        axios.patch as jest.MockedFunction<typeof axios.patch>
      ).mockRejectedValue(error);

      try {
        await httpRequest.patch(endpoint, body, undefined);
      } catch (error) {
        expect(error).toEqual(ERROR_MESSAGES.REQUEST);
      }
    });
  });

  describe('delete', () => {
    test('makes a DELETE request with the correct URL and returns the response data', async () => {
      const endpoint = '/users/1';
      const expectedResponseData = {};
      const expectedResponse = {
        data: expectedResponseData,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {},
      };
      (
        axios.delete as jest.MockedFunction<typeof axios.delete>
      ).mockResolvedValue(expectedResponse);

      const response =
        await httpRequest.delete<typeof expectedResponseData>(endpoint);

      expect(axios.delete).toHaveBeenCalledWith(endpoint, undefined);
      expect(response).toEqual(expectedResponseData);
    });

    test('throws an error with the error message when the request fails', async () => {
      const endpoint = '/users/1';
      const errorMessage = 'Failed to update user';
      const error = new Error(errorMessage);
      (
        axios.delete as jest.MockedFunction<typeof axios.delete>
      ).mockRejectedValue(error);

      try {
        await httpRequest.delete(endpoint, undefined);
      } catch (error) {
        expect(error).toEqual(ERROR_MESSAGES.REQUEST);
      }
    });
  });
});
