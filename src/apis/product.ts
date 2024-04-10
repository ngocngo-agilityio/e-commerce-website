'use server';

// Services
import { HttpRequestService } from '@services';

// Constants
import { API_PATH } from '@constants';
import { Product } from '@types';

interface ProductDataResponse extends Product {
  categoryIds: string[];
  tagIds: string[];
}

interface Configs {
  name?: string;
  sortDirection?: string;
  sortBy?: string;
  categoryIds?: string[];
  page?: string;
  limit?: number;
}

export const getProductList = async (
  queryConfig?: Configs,
): Promise<{ data: ProductDataResponse[]; total: number }> => {
  const queryParams = {
    name_like: queryConfig?.name,
    _order: queryConfig?.sortDirection,
    _sort: queryConfig?.sortBy,
    categoryIds_like: queryConfig?.categoryIds,
    _page: queryConfig?.page,
    _limit: queryConfig?.limit,
  };

  const configs = {
    params: queryParams,
  };

  try {
    const res = await HttpRequestService.get<ProductDataResponse[]>(
      API_PATH.PRODUCTS,
      configs,
    );
    const { data, headers } = res || {};

    return { data: data || [], total: headers?.['x-total-count'] || 0 };
  } catch (error) {
    throw error;
  }
};

export const getProductDetail = async (
  id: string,
): Promise<{ data: ProductDataResponse }> => {
  try {
    const res = await HttpRequestService.get<ProductDataResponse>(
      `${API_PATH.PRODUCTS}/${id}`,
    );
    const { data } = res || {};

    return { data };
  } catch (error) {
    throw error;
  }
};
