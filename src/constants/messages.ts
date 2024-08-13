export const ERROR_MESSAGES = {
  REQUEST:
    'Request failed with error. Please help contact team to identify issue',
  SELECT_SIZE: 'Please select size to add this product to cart.',
  CREATE_CART: 'Your cart creation failed',
  ADD_CART: 'Adding product to your cart failed.',
  UPDATE_CART: 'Updating your cart failed.',
  UPDATE_QUANTITY: 'Updating quantity to your cart failed',
  REMOVE_CART_ITEM: 'Removing this product from your cart failed',
  FIELD_REQUIRED: (fieldName: string) => `${fieldName} is required`,
  FIELD_INVALID: (fieldName: string) => `Invalid format of ${fieldName}.`,
  PASSWORD_NOT_LONG: 'Password must be at least 8 characters.',
  PASSWORD_NOT_MATCH: 'Password and Confirm password do not match.',
  EMAIL_EXIST: 'Email already exists',
  USER_NOT_FOUND: 'User not found. Please check again.',
  UNKNOWN_ERROR: 'Something went wrong.',
};

export const SUCCESS_MESSAGES = {
  ADD_CART: 'Adding product to your cart successfully.',
  SIGN_UP: 'Your account just created successfully.',
  LOGIN: 'Login successfully.',
};
