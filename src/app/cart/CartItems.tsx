'use client';

// Libs
import { useCallback, useMemo } from 'react';
import { Box, Flex, Heading, Text, Divider, Button } from '@chakra-ui/react';

// Apis
import { updateCartItemQuantity } from '@apis';

// Hooks
import { useCustomToast } from '@hooks';

// Stores
import { useCartStore } from '@stores';

// Utils
import { formatCurrency, calculateTotalPrice } from '@utils';

// Components
import { CartTable } from '@components';

const CartItems = (): JSX.Element => {
  const { showToast } = useCustomToast();

  // Cart store
  const cartItems = useCartStore((state) => state.cartItems);

  const total = useMemo(() => calculateTotalPrice(cartItems), [cartItems]);
  const formattedTotal = useMemo(() => formatCurrency(total), [total]);

  // TODO: Update later
  const handleRemoveProduct = () => {};

  // TODO: Update later
  const handleCheckout = () => {};

  const handleChangeQuantity = useCallback(
    async (id: string, quantity: number) => {
      const { error } = await updateCartItemQuantity({ quantity, cartId: id });

      if (error) {
        showToast(error);
      }
    },
    [showToast],
  );

  return (
    <>
      <CartTable
        cart={cartItems}
        onRemoveProduct={handleRemoveProduct}
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
    </>
  );
};

export default CartItems;
