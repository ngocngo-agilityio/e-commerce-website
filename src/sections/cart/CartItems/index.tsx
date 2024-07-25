// Apis
import { getCartItems } from '@apis';

// Sections
import CartItemsClient from '../CartItemsClient';

const CarItems = async (): Promise<JSX.Element> => {
  const { data } = await getCartItems();

  return <CartItemsClient cartItems={data} />;
};

export default CarItems;
