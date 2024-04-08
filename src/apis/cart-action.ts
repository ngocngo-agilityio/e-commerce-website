'use server';

// Libs
import { revalidatePath } from 'next/cache';

// Services
import { HttpRequestService } from '@services';
import { addItem, updateQuantity } from './cart';

// Types
import { CartItem, Product } from '@types';

// Constants
import { API_PATH, APP_ROUTERS, ERROR_MESSAGES } from '@constants';

interface AddToCartAction {
  product: Product;
  quantity: number;
  cartId?: string;
}

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
