'use client';

// Libs
import { Show, Table, Tbody, Td, Tr } from '@chakra-ui/react';

// Types
import { ICartItem } from '@types';

// Components
import CartTableHeader from './CartTableHeader';
import CartItem from './CartItem';

interface Props {
  cart: ICartItem[];
  onCartItemRemove: (productId: number) => void;
  onQuantityChange: (productId: number, quantity: number) => void;
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
            const { product, quantity = 0 } = item || {};
            const { id, name = '', image = '', price = 0 } = product || {};

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

export default CartTable;
