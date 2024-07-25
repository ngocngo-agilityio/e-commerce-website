// Services
import { httpClient } from '@services';

// Constants
import { API_PATH } from '@constants';

// Types
import { Category, Tag } from '@types';

// Utils
import { formatUrlWithQuery } from '@utils';

interface Configs {
  ids?: string[];
  name?: string;
  sortDirection?: string;
  sortBy?: string;
  page?: string;
  limit?: number;
}

export const getCategoryList = async (
  queryConfig?: Configs,
): Promise<{ data: Category[] }> => {
  try {
    const queryParams = {
      name_like: queryConfig?.name,
      _order: queryConfig?.sortDirection,
      _sort: queryConfig?.sortBy,
      id: queryConfig?.ids,
      _page: queryConfig?.page,
      _limit: queryConfig?.limit,
    };

    const endpoint = formatUrlWithQuery(API_PATH.CATEGORIES, queryParams);

    const res = await httpClient.getRequest<Category[]>({
      endpoint,
    });

    const { data = [] } = res || {};

    return { data };
  } catch (error) {
    throw error;
  }
};

export const getTagList = async (
  queryConfig?: Configs,
): Promise<{ data: Tag[] }> => {
  try {
    const queryParams = {
      name_like: queryConfig?.name,
      _order: queryConfig?.sortDirection,
      _sort: queryConfig?.sortBy,
      id: queryConfig?.ids,
      _page: queryConfig?.page,
      _limit: queryConfig?.limit,
    };

    const endpoint = formatUrlWithQuery(API_PATH.TAGS, queryParams);

    const res = await httpClient.getRequest<Tag[]>({
      endpoint,
    });

    const { data = [] } = res || {};

    return { data };
  } catch (error) {
    throw error;
  }
};
