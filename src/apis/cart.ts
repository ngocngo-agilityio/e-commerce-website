// Services
import { httpClient } from '@services';

// Types
import { CartItem } from '@types';

// Constants
import { API_PATH } from '@constants';

export const getCartItems = async (): Promise<{ data: CartItem[] }> => {
  try {
    const { data } = await httpClient.getRequest<CartItem[]>({
      endpoint: API_PATH.CARTS,
      configOptions: { next: { tags: [API_PATH.CARTS] } },
    });

    return { data: data || [] };
  } catch (error) {
    throw error;
  }
};

export const preloadGetCartItems = (): void => {
  getCartItems();
};
