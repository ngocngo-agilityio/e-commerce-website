'use server';

// Libs
import { revalidatePath } from 'next/cache';

// Services
import { HttpRequestService } from '@services';

// Types
import { CartItem, Product } from '@types';

// Constants
import { API_PATH, APP_ROUTERS, ERROR_MESSAGES } from '@constants';

interface AddToCartAction {
  product: Product;
  quantity: number;
  cartId?: string;
}

type AddItemToCardRequest = Omit<CartItem, 'id' | 'total'>;
interface UpdateToCardRequest {
  quantity: number;
}

export const addItem = (payload: AddItemToCardRequest): Promise<CartItem> => {
  return HttpRequestService.post<AddItemToCardRequest, CartItem>(
    API_PATH.CARTS,
    payload,
  );
};

export const updateQuantity = (id: string, quantity: number) => {
  const url = `${API_PATH.CARTS}/${id}`;
  const payload = {
    quantity: quantity,
  };

  return HttpRequestService.patch<UpdateToCardRequest, CartItem>(url, payload);
};

export const addToCart = async ({
  product,
  quantity,
  cartId,
}: AddToCartAction): Promise<{ error: string }> => {
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
    } else {
      await updateQuantity(cartId, quantity);
    }

    revalidatePath(APP_ROUTERS.CART_PAGE);

    return { error: '' };
  } catch (error) {
    return { error: ERROR_MESSAGES.ADD_CART };
  }
};

export const getCartItems = async (): Promise<{ data: CartItem[] }> => {
  try {
    const res = await HttpRequestService.get<CartItem[]>(API_PATH.CARTS);
    const { data } = res || {};

    return { data: data || [] };
  } catch (error) {
    throw error;
  }
};

export const updateCartItemQuantity = async ({
  quantity,
  cartId,
}: {
  quantity: number;
  cartId: string;
}): Promise<{ error: string }> => {
  try {
    await updateQuantity(cartId, quantity);

    revalidatePath(APP_ROUTERS.CART_PAGE);

    return { error: '' };
  } catch (error) {
    return { error: ERROR_MESSAGES.UPDATE_QUANTITY };
  }
};
