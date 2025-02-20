export const APP_ROUTERS = {
  HOME_PAGE: '/',
  CART_PAGE: '/cart',
  PRODUCT_DETAIL_PAGE: (id: string) => {
    return `/products/${id}`;
  },
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
};
