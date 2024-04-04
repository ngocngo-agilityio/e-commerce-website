// Services
import { HttpRequestService } from '@services';

// Constants
import { API_PATH } from '@constants';
import { Product } from '@types';

interface Configs {
  name?: string;
  sortDirection?: string;
  sortBy?: string;
}

export const getProductList = async (
  queryConfig?: Configs,
): Promise<{ data: Product[] }> => {
  const queryParams = {
    name_like: queryConfig?.name,
    _order: queryConfig?.sortDirection,
    _sort: queryConfig?.sortBy,
  };

  const configs = {
    params: queryParams,
  };

  try {
    const res = await HttpRequestService.get<Product[]>(
      API_PATH.PRODUCTS,
      configs,
    );
    const { data } = res || {};

    return { data: data || [] };
  } catch (error) {
    throw error;
  }
};
