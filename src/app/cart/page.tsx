// Libs
import { Suspense } from 'react';
import { Container, Spinner } from '@chakra-ui/react';

// Apis
import { preloadGetCartItems } from '@apis';

// Constants
import { CART_PAGE_BREADCRUMB } from '@constants';

// Components
import { Breadcrumb } from '@components';

// Sections
import { CartItems } from '@sections';

const Cart = (): JSX.Element => {
  preloadGetCartItems();

  return (
    <Container pt="67px" pb="106px">
      <Breadcrumb breadcrumb={CART_PAGE_BREADCRUMB} />

      {/* TODO: Update later. Using Skeleton instead of Spinner */}
      <Suspense fallback={<Spinner />}>
        <CartItems />
      </Suspense>
    </Container>
  );
};

export default Cart;
