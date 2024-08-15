'use client';

// Libs
import { useCallback, useMemo } from 'react';
import { Box } from '@chakra-ui/react';

// Actions
import { updateMyCart } from '@actions';

// Hooks
import { useCustomToast } from '@hooks';

// Types
import { ICartItem } from '@types';

// Utils
import { calculateTotalPrice } from '@utils';

// Components
import { CartTable, CartTotals } from '@components';

interface CartItemClientProps {
  cartId: number;
  cartItems: ICartItem[];
}

const CartItemsClient = ({
  cartItems,
  cartId,
}: CartItemClientProps): JSX.Element => {
  const { showToast } = useCustomToast();

  const total = useMemo(() => calculateTotalPrice(cartItems), [cartItems]);

  // TODO: Update later
  const handleCheckout = () => {};

  const handleRemoveCartItem = useCallback(
    async (productId: number) => {
      const newCartItems = cartItems.filter((cartItem) => {
        const { product } = cartItem || {};
        const { id } = product || {};

        return id !== productId;
      });
      const res = await updateMyCart(cartId, newCartItems);

      const { error } = res || {};

      if (error) {
        showToast(error);
      }
    },
    [cartId, cartItems, showToast],
  );

  const handleChangeQuantity = useCallback(
    async (productId: number, quantity: number) => {
      const newCartItems = cartItems.map((cartItem) => {
        const { product } = cartItem || {};
        const { id } = product || {};

        if (id === productId) {
          return {
            ...cartItem,
            quantity: quantity,
          };
        }

        return cartItem;
      });

      const res = await updateMyCart(cartId, newCartItems);

      const { error } = res || {};

      if (error) {
        showToast(error);
      }
    },
    [cartId, cartItems, showToast],
  );

  return (
    <Box mt="70px">
      <CartTable
        cart={cartItems}
        onCartItemRemove={handleRemoveCartItem}
        onQuantityChange={handleChangeQuantity}
      />
      <CartTotals total={total} onCheckout={handleCheckout} />
    </Box>
  );
};

export default CartItemsClient;
