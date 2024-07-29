'use server';

// Libs
import { revalidateTag } from 'next/cache';

// Services
import { httpClient, ResponseData } from '@services';

// Types
import { CartItem, Product } from '@types';

// Constants
import { API_PATH, ERROR_MESSAGES } from '@constants';

type AddToCartRequest = {
  product: Product;
  quantity: number;
  cartId?: number;
};

type AddItemToCardRequest = Omit<CartItem, 'id' | 'total'>;

type UpdateToCardRequest = {
  quantity: number;
};

type UpdateCartQuantityRequest = { quantity: number; cartId: number };

export const addItem = (
  payload: AddItemToCardRequest,
): Promise<ResponseData<CartItem>> =>
  httpClient.postRequest<AddItemToCardRequest, CartItem>({
    endpoint: API_PATH.CARTS,
    body: payload,
  });

export const updateQuantity = (id: number, quantity: number) => {
  const endpoint = `${API_PATH.CARTS}/${id}`;
  const payload = {
    quantity: quantity,
  };

  return httpClient.patchRequest<UpdateToCardRequest, CartItem>({
    endpoint,
    body: payload,
  });
};

export const addToCart = async ({
  product,
  quantity,
  cartId,
}: AddToCartRequest): Promise<{ error: string } | void> => {
  try {
    /* If this product does not already exist in the cart, add it to the cart
       Else update quantity for this product in the cart
    */
    if (!cartId) {
      const { id: productId, name, image, price } = product || {};
      const data = {
        productId,
        name,
        image,
        price,
        quantity,
      };

      await addItem(data);

      revalidateTag(API_PATH.CARTS);
    } else {
      await updateQuantity(cartId, quantity);

      revalidateTag(API_PATH.CARTS);
    }
  } catch (error) {
    return { error: ERROR_MESSAGES.ADD_CART };
  }
};

export const updateCartItemQuantity = async ({
  quantity,
  cartId,
}: UpdateCartQuantityRequest): Promise<{ error: string } | void> => {
  try {
    await updateQuantity(cartId, quantity);

    revalidateTag(API_PATH.CARTS);
  } catch (error) {
    return { error: ERROR_MESSAGES.UPDATE_QUANTITY };
  }
};

export const removeCartItem = async (
  cartId: number,
): Promise<{ error: string } | void> => {
  try {
    const endpoint = `${API_PATH.CARTS}/${cartId}`;

    await httpClient.deleteRequest({ endpoint });

    revalidateTag(API_PATH.CARTS);
  } catch (error) {
    return { error: ERROR_MESSAGES.REMOVE_CART_ITEM };
  }
};
