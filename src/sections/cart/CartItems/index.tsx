// Apis
import { getCartItems } from '@apis';

// Sections
import CartItemsClient from '../CartItemsClient';

const CarItems = async (): Promise<JSX.Element> => {
  const { data: myCart } = await getCartItems();

  const { cartItems = [], id } = myCart || {};

  return <CartItemsClient cartItems={cartItems} cartId={id} />;
};

export default CarItems;
