// Services
import { HttpRequestService } from '@services';

// Constants
import { API_PATH } from '@constants';
import { Product } from '@types';

export const getProductList = async () => {
  try {
    const res = await HttpRequestService.get<Product[]>(API_PATH.PRODUCTS);
    const data = res.data || [];

    console.log('data', data);

    return { data, message: '' };
  } catch (error) {
    return { data: [], message: error };
  }
};
