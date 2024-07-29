'use client';

// Libs
import { memo, useCallback, useMemo, useState } from 'react';
import { Box, Td, Tr } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Utils
import { formatCurrency } from '@utils';

// Constants
import { APP_ROUTERS } from '@constants';

// Components
import { Counter } from '@components';
const ConfirmModal = dynamic(() => import('../../ConfirmModal'));

interface Props {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  onRemoveProduct: (id: number) => void;
  onQuantityChange: (id: number, quantity: number) => void;
}

const CartItem = ({
  id,
  name,
  image,
  price = 0,
  quantity = 1,
  onRemoveProduct,
  onQuantityChange,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const total = useMemo(() => price * quantity, [price, quantity]);
  const formattedPrice = useMemo(() => formatCurrency(price), [price]);
  const formattedTotal = useMemo(() => formatCurrency(total), [total]);

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

  const handleQuantityChange = useCallback(
    (quantity: number) => {
      onQuantityChange(id, quantity);
    },
    [id, onQuantityChange],
  );

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
          <Image
            src={image}
            alt="Product Image"
            width={48}
            height={56}
            priority
          />
        </Td>
        <Td style={{ fontWeight: 'bold' }}>
          <Link href={APP_ROUTERS.PRODUCT_DETAIL_PAGE(id.toString())}>
            {name}
          </Link>
        </Td>
        <Td>{formattedPrice}</Td>
        <Td>
          <Counter
            initialQuantity={quantity}
            onQuantityChange={handleQuantityChange}
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
