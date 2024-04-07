// Libs
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Container,
  Divider,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';

// Constants
import { APP_ROUTERS } from '@constants';

// Sections
import CartItems from './CartItems';
import Checkout from './Checkout';

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

      <Heading mt="83px" mb="38px">
        Cart Totals
      </Heading>
      <Box w="531px" mb="41px">
        <Flex justifyContent="space-between" py="17px">
          <Text>Subtotal</Text>
          <Text>$59.00</Text>
        </Flex>
        <Divider />
        <Flex justifyContent="space-between" py="17px">
          <Text>ShippingFree</Text>
          <Text>FREE!!!</Text>
        </Flex>
        <Divider />
        <Flex justifyContent="space-between" py="17px">
          <Text fontFamily="arimo" fontWeight="bold">
            Total
          </Text>
          <Text>$59.00</Text>
        </Flex>
      </Box>

      <Checkout />
    </Container>
  );
};

export default Cart;
