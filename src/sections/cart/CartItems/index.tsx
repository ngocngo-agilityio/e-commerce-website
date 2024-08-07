// Apis
import { getCartItems } from '@apis';

// Sections
import CartItemsClient from '../CartItemsClient';

const CarItems = async (): Promise<JSX.Element> => {
  const { data: myCart } = await getCartItems();

  const { cartItems = [] } = myCart || {};

  return <CartItemsClient cartItems={cartItems} />;
};

export default CarItems;
