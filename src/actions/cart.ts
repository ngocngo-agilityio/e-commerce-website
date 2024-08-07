'use server';

// Libs
import { revalidateTag } from 'next/cache';

// Services
import { httpClient } from '@services';

// Types
import { ICartItem } from '@types';

// Constants
import { API_PATH, ERROR_MESSAGES } from '@constants';

export const createCart = async (
  cartItems: ICartItem[],
  userId: string,
): Promise<{ error: string } | void> => {
  try {
    await httpClient.postRequest({
      endpoint: API_PATH.CARTS,
      body: { userId, cartItems },
    });

    revalidateTag(API_PATH.CARTS);
  } catch (error) {
    return { error: ERROR_MESSAGES.CREATE_CART };
  }
};

export const updateMyCart = async (
  cartId: number,
  cartItems: ICartItem[],
): Promise<{ error: string } | void> => {
  try {
    await httpClient.patchRequest({
      endpoint: `${API_PATH.CARTS}/${cartId}`,
      body: { cartItems },
    });

    revalidateTag(API_PATH.CARTS);
  } catch (error) {
    return { error: ERROR_MESSAGES.ADD_CART };
  }
};
