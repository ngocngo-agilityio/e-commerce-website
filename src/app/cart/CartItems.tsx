'use client';

// Libs
import { useCallback, useMemo } from 'react';
import { Box, Flex, Heading, Text, Divider, Button } from '@chakra-ui/react';

// Apis
import { updateCartItemQuantity, removeCartItem } from '@apis';

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

  const handleRemoveCartItem = useCallback(
    async (cartId: string) => {
      const { error } = await removeCartItem(cartId);

      if (error) {
        showToast(error);
      }
    },
    [showToast],
  );

  // TODO: Update later
  const handleCheckout = () => {};

  const handleChangeQuantity = useCallback(
    async (cartId: string, quantity: number) => {
      const { error } = await updateCartItemQuantity({ quantity, cartId });

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

      <Button variant="checkoutBtn" fontSize="20px" w="262px" h="58px" onClick={handleCheckout}>
        Proceed to Checkout
      </Button>
    </>
  );
};

export default CartItems;
