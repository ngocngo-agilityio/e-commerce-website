'use client';

// Libs
import { useMemo } from 'react';
import { Box, Flex, Heading, Text, Divider, Button } from '@chakra-ui/react';

// Hooks
import { useCartStore } from '@stores';

// Utils
import { formatCurrency } from '@utils';

// Components
import { CartTable } from '@components';

const CartItems = (): JSX.Element => {
  // Cart store
  const cartItems = useCartStore((state) => state.cartItems);

  const total = useMemo(
    () =>
      cartItems.reduce((acc, cartItem) => {
        const { price = 0, quantity = 1 } = cartItem || {};
        const itemPrice = price * quantity;

        return acc + itemPrice;
      }, 0),
    [cartItems],
  );

  const formattedTotal = useMemo(() => formatCurrency(total), [total]);

  // TODO: Update later
  const handleRemoveProduct = () => {};

  // TODO: Update later
  const handleCheckout = () => {};

  return (
    <>
      <CartTable cart={cartItems} onRemoveProduct={handleRemoveProduct} />
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
    </>
  );
};

export default CartItems;
