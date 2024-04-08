// Services
import { HttpRequestService } from '@services';

// Types
import { CartItem } from '@types';

// Constants
import { API_PATH } from '@constants';

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
