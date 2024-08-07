// APIs
import { getCartItems } from '@apis';

// Types
import { Product, SizeOption } from '@types';

// Sections
import AddCartActionClient from '../AddCartActionClient';

interface AddCartActionProps {
  sizes: SizeOption[];
  product: Product;
}

const AddCartAction = async ({
  sizes,
  product,
}: AddCartActionProps): Promise<JSX.Element> => {
  const { data: myCart } = await getCartItems();

  const { cartItems = [], id } = myCart || {};

  return (
    <AddCartActionClient
      sizes={sizes}
      product={product}
      cartItems={cartItems}
      cartId={id}
    />
  );
};

export default AddCartAction;
