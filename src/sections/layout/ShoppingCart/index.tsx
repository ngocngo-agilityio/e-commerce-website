// APIs
import { getCartItems } from '@apis';

// Components
import { ShoppingCart } from '@components';

const ShoppingCartSection = async (): Promise<JSX.Element> => {
  // Get my cart

  const { data: myCart } = await getCartItems();

  const { cartItems = [] } = myCart || {};
  const cartItemQuantity = cartItems.length || 0;

  return <ShoppingCart cartItemQuantity={cartItemQuantity} />;
};

export default ShoppingCartSection;
