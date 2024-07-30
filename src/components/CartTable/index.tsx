'use client';

// Libs
import { memo } from 'react';
import isEqual from 'react-fast-compare';
import { Show, Table, Tbody, Td, Tr } from '@chakra-ui/react';

// Types
import { CartItem as ICartItem } from '@types';

// Components
import CartTableHeader from './CartTableHeader';
import CartItem from './CartItem';

interface Props {
  cart: ICartItem[];
  onCartItemRemove: (cartId: number) => void;
  onQuantityChange: (cartId: number, quantity: number) => void;
}

const CartTable = ({
  cart = [],
  onCartItemRemove,
  onQuantityChange,
}: Props): JSX.Element => {
  return (
    <Table>
      <Show above="md">
        <CartTableHeader />
      </Show>

      <Tbody>
        {cart.length > 0 ? (
          cart.map((item) => {
            const {
              id,
              name = '',
              image = '',
              price = 0,
              quantity = 0,
            } = item || {};
            return (
              <CartItem
                key={id}
                id={id}
                name={name}
                image={image}
                price={price}
                quantity={quantity}
                onRemoveProduct={onCartItemRemove}
                onQuantityChange={onQuantityChange}
              />
            );
          })
        ) : (
          <Tr>
            <Td colSpan={6} textAlign="center" borderBottom="none">
              No products in your cart.
            </Td>
          </Tr>
        )}
      </Tbody>
    </Table>
  );
};

export default memo(CartTable, isEqual);
