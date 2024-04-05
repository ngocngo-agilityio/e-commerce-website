// Services
import { HttpRequestService } from '@services';

// Constants
import { API_PATH } from '@constants';
import { Product } from '@types';

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
): Promise<{ data: Product[]; total: number }> => {
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
    const res = await HttpRequestService.get<Product[]>(
      API_PATH.PRODUCTS,
      configs,
    );
    const { data, headers } = res || {};

    return { data: data || [], total: headers['x-total-count'] || 0 };
  } catch (error) {
    throw error;
  }
};
