'use client';

// Libs
import { memo } from 'react';
import isEqual from 'react-fast-compare';
import { Table, Tbody, Td, Tr } from '@chakra-ui/react';

// Types
import { CartItem as ICartItem } from '@types';

// Components
import CartTableHeader from './CartTableHeader';
import CartItem from './CartItem';

interface Props {
  cart: ICartItem[];
  onRemoveProduct: (id: string) => void;
}

const CartTable = ({ cart = [], onRemoveProduct }: Props): JSX.Element => {
  return (
    <Table>
      <CartTableHeader />
      <Tbody>
        {cart.length > 0 ? (
          cart.map((item) => {
            const { id, name, image, price, quantity } = item || {};
            return (
              <CartItem
                key={id}
                id={id.toString()}
                name={name}
                image={image}
                price={price}
                quantity={quantity}
                onRemoveProduct={onRemoveProduct}
              />
            );
          })
        ) : (
          <Tr>
            <Td colSpan={6} textAlign="center" borderBottom="none">
              No products in your cart
            </Td>
          </Tr>
        )}
      </Tbody>
    </Table>
  );
};

export default memo(CartTable, isEqual);
