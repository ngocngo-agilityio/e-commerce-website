// Services
import { HttpRequestService } from '@services';

// Constants
import { API_PATH } from '@constants';

// Types
import { Category } from '@types';

export const getCategoryList = async () => {
  try {
    const res = await HttpRequestService.get<Category[]>(API_PATH.CATEGORIES);
    const data = res.data || [];

    return { data };
  } catch (error) {
    throw error;
  }
};
