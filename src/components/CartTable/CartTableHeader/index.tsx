// Libs
import { memo } from 'react';
import { Th, Thead, Tr } from '@chakra-ui/react';

const CartTableHeader = () => {
  return (
    <Thead>
      <Tr>
        <Th></Th>
        <Th></Th>
        <Th>Product</Th>
        <Th>Price</Th>
        <Th>Quantity</Th>
        <Th>Total</Th>
      </Tr>
    </Thead>
  );
};

export default memo(CartTableHeader);
