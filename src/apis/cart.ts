// Services
import { httpClient } from '@services';

// Types
import { ICart } from '@types';

// Constants
import { API_PATH } from '@constants';

// Utils
import { formatUrlWithQuery } from '@utils';

// Auth configs
import { auth } from '@auth';

export const getCartItems = async (): Promise<{ data: ICart }> => {
  try {
    const session = await auth();

    const userId = session?.user?.id || '';

    const endpoint = formatUrlWithQuery(API_PATH.CARTS, { userId });

    const res = await httpClient.getRequest<ICart[]>({
      endpoint,
      configOptions: { next: { tags: [API_PATH.CARTS] } },
    });

    const { data: carts = [] } = res || {};

    const cart = carts[0] || {};

    return { data: cart };
  } catch (error) {
    throw error;
  }
};
