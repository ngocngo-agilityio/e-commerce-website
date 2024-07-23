// Libs
import { Container } from '@chakra-ui/react';

// Constants
import { CART_PAGE_BREADCRUMB } from '@constants';

// Components
import { Breadcrumb } from '@components';

// Sections
import CartItems from './CartItems';

const Cart = (): JSX.Element => {
  return (
    <Container pt="67px" pb="106px">
      <Breadcrumb breadcrumb={CART_PAGE_BREADCRUMB} />
      <CartItems />
    </Container>
  );
};

export default Cart;
