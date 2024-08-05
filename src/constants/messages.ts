export const ERROR_MESSAGES = {
  REQUEST:
    'Request failed with error. Please help contact team to identify issue',
  SELECT_SIZE: 'Please select size to add this product to cart.',
  ADD_CART: 'Adding product to your cart failed.',
  UPDATE_QUANTITY: 'Updating quantity to your cart failed',
  REMOVE_CART_ITEM: 'Removing this product from your cart failed',
  FIELD_REQUIRED: (fieldName: string) => `${fieldName} is required`,
  FIELD_INVALID: (fieldName: string) => `Invalid format of ${fieldName}.`,
  PASSWORD_NOT_LONG: 'Password must be at least 8 characters.',
};

export const SUCCESS_MESSAGES = {
  ADD_CART: 'Adding product to your cart successfully.',
};
