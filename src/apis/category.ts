'use server';

// Services
import { HttpRequestService } from '@services';

// Constants
import { API_PATH } from '@constants';

// Types
import { Category, Tag } from '@types';

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

    const configs = {
      params: queryParams,
    };

    const res = await HttpRequestService.get<Category[]>(
      API_PATH.CATEGORIES,
      configs,
    );
    const { data } = res || {};

    return { data: data || [] };
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

    const configs = {
      params: queryParams,
    };

    const res = await HttpRequestService.get<Tag[]>(API_PATH.TAGS, configs);
    const { data } = res || {};

    return { data: data || [] };
  } catch (error) {
    throw error;
  }
};
