// Services
import { httpClient } from '@services';

// Constants
import { API_PATH } from '@constants';

// Types
import { Product } from '@types';

// Utils
import { formatUrlWithQuery } from '@utils';

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
  try {
    const queryParams = {
      name_like: queryConfig?.name,
      _order: queryConfig?.sortDirection,
      _sort: queryConfig?.sortBy,
      categoryIds_like: queryConfig?.categoryIds,
      _page: queryConfig?.page,
      _limit: queryConfig?.limit,
    };

    const endpoint = formatUrlWithQuery(API_PATH.PRODUCTS, queryParams);

    const { data, totalCount } = await httpClient.getRequest<
      ProductDataResponse[]
    >({
      endpoint,
    });

    return {
      data: data || [],
      total: totalCount || 0,
    };
  } catch (error) {
    throw error;
  }
};

export const getProductDetail = async (
  id: string,
): Promise<{ data: ProductDataResponse }> => {
  try {
    const { data } = await httpClient.getRequest<ProductDataResponse>({
      endpoint: `${API_PATH.PRODUCTS}/${id}`,
    });

    return { data };
  } catch (error) {
    throw error;
  }
};
