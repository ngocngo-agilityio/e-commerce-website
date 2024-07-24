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

  async delete<T>(endpoint: string, configs?: AxiosRequestConfig): Promise<T> {
    try {
      const url = `${this.baseURL}${endpoint}`;
      const res = await axios.delete(url, configs);

      return res.data;
    } catch (error) {
      const errorMessage: string = getErrorMessageFromApi(error);

      throw errorMessage;
    }
  }
}

export const HttpRequestService = new HttpRequest();

type TRequest = {
  endpoint: string;
  configOptions?: RequestInit;
};

type TPostRequest<T> = TRequest & {
  body: T;
};

type TPutRequest<T> = TRequest & {
  body: T;
};

type TDeleteRequest<T> = TRequest & {
  body?: T;
};

type ResponseData<T> = {
  totalCount: number;
  data: T;
};

class HttpClient {
  private baseApi: string;

  constructor(baseUrl: string) {
    this.baseApi = baseUrl;
  }

  async request<T>({
    endpoint,
    configOptions,
  }: TRequest): Promise<ResponseData<T>> {
    console.log('endpoint', endpoint);

    const res = await fetch(this.baseApi + endpoint, configOptions);

    if (!res?.ok) {
      throw new Error(`An error has occurred: ${res?.statusText}`);
    }

    const contentType = res.headers.get('Content-Type') || '';
    const totalCountHeader = res.headers.get('x-total-count') || '0';
    const totalCount = +totalCountHeader;

    let result: T;

    if (contentType.includes('application/json')) {
      result = await res.json();
    } else {
      result = (await res.text()) as unknown as T;
    }

    return { totalCount, data: result };
  }

  async getRequest<T>({
    endpoint,
    configOptions,
  }: TRequest): Promise<ResponseData<T>> {
    const options: RequestInit = {
      method: 'GET',
      ...configOptions,
    };

    return this.request<T>({ endpoint, configOptions: options });
  }

  async postRequest<T, K>({
    endpoint,
    body,
    configOptions,
  }: TPostRequest<T>): Promise<ResponseData<K>> {
    const options: RequestInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      ...configOptions,
    };

    return this.request({ endpoint, configOptions: options });
  }

  async putRequest<T, K>({
    endpoint,
    body,
    configOptions,
  }: TPutRequest<T>): Promise<ResponseData<K>> {
    const options: RequestInit = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      ...configOptions,
    };

    return this.request<K>({ endpoint, configOptions: options });
  }

  async deleteRequest<T, K>({
    endpoint,
    body,
    configOptions,
  }: TDeleteRequest<T>): Promise<ResponseData<K>> {
    const options: RequestInit = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      ...configOptions,
    };

    return this.request<K>({ endpoint, configOptions: options });
  }
}

export const httpClient = new HttpClient(BASE_URL);
