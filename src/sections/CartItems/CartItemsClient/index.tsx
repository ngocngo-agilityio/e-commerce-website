'use client';

// Libs
import { useMemo } from 'react';
import { Box, Flex, Heading, Text, Divider, Button } from '@chakra-ui/react';

// Types
import { CartItem } from '@types';

// Utils
import { calculateTotalPrice, formatCurrency } from '@utils';

// Components
import { CartTable } from '@components';

interface CartItemClient {
  cartItems: CartItem[];
}

const CartItemsClient = ({ cartItems }: CartItemClient): JSX.Element => {
  const total = useMemo(() => calculateTotalPrice(cartItems), [cartItems]);
  const formattedTotal = formatCurrency(total);

  // TODO: Update later
  const handleCheckout = () => {};

  // TODO: Update later
  const handleRemoveCartItem = () => {};

  // TODO: Update later
  const handleChangeQuantity = () => {};

  return (
    <Box mt="70px">
      <CartTable
        cart={cartItems}
        onCartItemRemove={handleRemoveCartItem}
        onQuantityChange={handleChangeQuantity}
      />
      <Heading mt="83px" mb="38px">
        Cart Totals
      </Heading>
      <Box w="531px" mb="41px">
        <Flex justifyContent="space-between" py="17px">
          <Text>Subtotal</Text>
          <Text>{formattedTotal}</Text>
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
          <Text>{formattedTotal}</Text>
        </Flex>
      </Box>

      <Button variant="checkoutBtn" w="262px" h="58px" onClick={handleCheckout}>
        Proceed to Checkout
      </Button>
    </Box>
  );
};

export default CartItemsClient;
