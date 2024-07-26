// Libs
import { Suspense } from 'react';
import { Container } from '@chakra-ui/react';

// Apis
import { preloadGetCartItems } from '@apis';

// Constants
import { CART_PAGE_BREADCRUMB } from '@constants';

// Components
import { Breadcrumb, SkeletonCartItems } from '@components';

// Sections
import { CartItems } from '@sections';

const Cart = (): JSX.Element => {
  preloadGetCartItems();

  return (
    <Container pt="67px" pb="106px">
      <Breadcrumb breadcrumb={CART_PAGE_BREADCRUMB} />

      <Suspense fallback={<SkeletonCartItems />}>
        <CartItems />
      </Suspense>
    </Container>
  );
};

export default Cart;
