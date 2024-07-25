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
  const { data } = await getCartItems();

  return (
    <AddCartActionClient sizes={sizes} product={product} cartItems={data} />
  );
};

export default AddCartAction;
