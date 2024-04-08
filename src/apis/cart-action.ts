'use server';

// Apis
import { addItem, updateQuantity } from './cart';

// Types
import { Product } from '@types';

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
  console.log('1');

  try {
    if (!cartId) {
      console.log('2');

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

    return { error: '' };
  } catch (error) {
    console.log('error', error);

    return { error: 'Add product to your cart failed.' };
  }
};
