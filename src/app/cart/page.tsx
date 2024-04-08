// Libs
import { Breadcrumb, BreadcrumbItem, Container } from '@chakra-ui/react';
import Link from 'next/link';

// Constants
import { APP_ROUTERS } from '@constants';

// Sections
import CartItems from './CartItems';

const Cart = (): JSX.Element => {
  return (
    <Container pt="67px" pb="106px">
      <Breadcrumb mb="70px">
        <BreadcrumbItem>
          <Link href={APP_ROUTERS.PRODUCTS}>Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage color="currentPageBreadcrumb">
          <Link href={APP_ROUTERS.CART_PAGE}>Cart</Link>
        </BreadcrumbItem>
      </Breadcrumb>

      <CartItems />
    </Container>
  );
};

export default Cart;
