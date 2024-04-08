// Libs
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// Utils
import { getErrorMessageFromApi } from '@utils';

// Constants
import { BASE_URL } from '@constants';

class HttpRequest {
  private baseURL: string;

  constructor() {
    this.baseURL = BASE_URL;
  }

  async get<T>(
    endpoint: string,
    configs?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    try {
      const url = `${this.baseURL}${endpoint}`;
      const res = await axios.get(url, {
        ...configs,
      });

      return res;
    } catch (error) {
      const errorMessage: string = getErrorMessageFromApi(error);

      throw errorMessage;
    }
  }

  async post<TRequestBody, T>(
    endpoint: string,
    body: TRequestBody,
    configs?: AxiosRequestConfig,
  ): Promise<T> {
    try {
      console.log('endpoint', endpoint);

      const url = `${this.baseURL}${endpoint}`;
      const res = await axios.post(url, body, configs);

      return res.data;
    } catch (error) {
      const errorMessage: string = getErrorMessageFromApi(error);

      throw errorMessage;
    }
  }

  async patch<TRequestBody, T>(
    endpoint: string,
    body: TRequestBody,
    configs?: AxiosRequestConfig,
  ): Promise<T> {
    try {
      const url = `${this.baseURL}${endpoint}`;
      const res = await axios.patch(url, body, configs);

      return res.data;
    } catch (error) {
      const errorMessage: string = getErrorMessageFromApi(error);

      throw errorMessage;
    }
  }
}

export const HttpRequestService = new HttpRequest();
