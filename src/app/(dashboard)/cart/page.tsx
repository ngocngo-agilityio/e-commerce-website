// Libs
import { Suspense } from 'react';
import { Metadata } from 'next';
import { Container } from '@chakra-ui/react';

// Constants
import { CART_PAGE_BREADCRUMB } from '@constants';

// Components
import { Breadcrumb, SkeletonCartItems } from '@components';

// Sections
import { CartItems } from '@sections';

export const metadata: Metadata = {
  title: 'Cart',
  description:
    'Review the items in your cart and proceed to checkout quickly and securely.',
};

const Cart = (): JSX.Element => (
  <Container pt="67px" pb="106px">
    <Breadcrumb breadcrumb={CART_PAGE_BREADCRUMB} />

    <Suspense fallback={<SkeletonCartItems />}>
      <CartItems />
    </Suspense>
  </Container>
);

export default Cart;
