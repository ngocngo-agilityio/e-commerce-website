'use client';

// Libs
import { memo, useCallback, useState } from 'react';
import { Box, Input, Td, Tr } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Utils
import { formatCurrency } from '@utils';

// Constants
import { APP_ROUTERS } from '@constants';

// Components
const ConfirmModal = dynamic(() => import('../../ConfirmModal'));

interface Props {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  total: number;
  onRemoveProduct: (id: string) => void;
}

const CartItem = ({
  id,
  name,
  image,
  price,
  quantity,
  total,
  onRemoveProduct,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const formattedPrice = formatCurrency(price);
  const formattedTotal = formatCurrency(total);

  const handleOpenConfirmModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleCancel = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleRemoveCartItem = useCallback(() => {
    onRemoveProduct(id);
    setIsOpen(false);
  }, [id, onRemoveProduct]);

  return (
    <>
      <Tr>
        <Td pl={0}>
          <Box
            textAlign="left"
            cursor="pointer"
            w="fit-content"
            color="removeProduct"
            onClick={handleOpenConfirmModal}
          >
            x
          </Box>
        </Td>
        <Td>
          <Box w="48px" h="48px" pos="relative">
            <Image src={image} alt="Product Image" fill priority />
          </Box>
        </Td>
        <Td style={{ fontWeight: 'bold' }}>
          <Link href={APP_ROUTERS.PRODUCT_DETAIL_PAGE(id)}>{name}</Link>
        </Td>
        <Td>{formattedPrice}</Td>
        <Td>
          <Input
            variant="quantity"
            defaultValue={quantity}
            w="53px"
            h="42px"
            textAlign="center"
            borderColor="quantityInputBorder"
          />
        </Td>
        <Td>{formattedTotal}</Td>
      </Tr>
      {isOpen && (
        <ConfirmModal
          title="Delete"
          textCancel="No"
          textSubmit="Yes"
          message="Are you sure remove this product from your cart?"
          onSubmit={handleRemoveCartItem}
          onClose={handleCancel}
        />
      )}
    </>
  );
};

export default memo(CartItem);
