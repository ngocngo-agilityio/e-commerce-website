'use client';

// Libs
import { useCallback, useMemo } from 'react';
import { Box, Flex, Heading, Text, Divider, Button } from '@chakra-ui/react';

// Actions
import { updateCartItemQuantity, removeCartItem } from '@actions';

// Hooks
import { useCustomToast } from '@hooks';

// Types
import { CartItem } from '@types';

// Utils
import { calculateTotalPrice, formatCurrency } from '@utils';

// Components
import { CartTable } from '@components';

interface CartItemClientProps {
  cartItems: CartItem[];
}

const CartItemsClient = ({ cartItems }: CartItemClientProps): JSX.Element => {
  const { showToast } = useCustomToast();

  const total = useMemo(() => calculateTotalPrice(cartItems), [cartItems]);
  const formattedTotal = formatCurrency(total);

  // TODO: Update later
  const handleCheckout = () => {};

  const handleRemoveCartItem = useCallback(
    async (cartId: string) => {
      const res = await removeCartItem(cartId);

      const { error } = res || {};

      if (error) {
        showToast(error);
      }
    },
    [showToast],
  );

  const handleChangeQuantity = useCallback(
    async (cartId: string, quantity: number) => {
      const res = await updateCartItemQuantity({ quantity, cartId });

      const { error } = res || {};

      if (error) {
        showToast(error);
      }
    },
    [showToast],
  );

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
