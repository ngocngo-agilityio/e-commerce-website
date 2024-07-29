'use client';

// Libs
import { memo, useCallback, useMemo, useState } from 'react';
import { Box, Center, Flex, Hide, Show, Td, Tr, Text } from '@chakra-ui/react';
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
          <Flex gap={5} alignContent="center">
            <Center
              textAlign="left"
              cursor="pointer"
              w="fit-content"
              color="removeProduct"
              onClick={handleOpenConfirmModal}
            >
              x
            </Center>

            <Hide above="md">
              <Box w={20} h={20} pos="relative">
                <Image
                  src={image}
                  alt="Product Image"
                  fill
                  objectFit="cover"
                  sizes="(max-width: 768px) 25vw, 22vw"
                  priority
                />
              </Box>

              <Flex flexDir="column" gap={2} w="full">
                <Link href={APP_ROUTERS.PRODUCT_DETAIL_PAGE(id?.toString())}>
                  <Text fontFamily="baloo" style={{ fontWeight: 'bold' }}>
                    {name}
                  </Text>
                </Link>

                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  w="full"
                >
                  <Text> {formattedPrice}</Text>

                  <Counter
                    initialQuantity={quantity}
                    onQuantityChange={handleQuantityChange}
                  />
                </Flex>

                <Text color="cart.totalAmount">Total: {formattedTotal}</Text>
              </Flex>
            </Hide>
          </Flex>
        </Td>

        <Show above="md">
          <Td>
            <Box w={12} h={14} pos="relative">
              <Image
                src={image}
                alt="Product Image"
                fill
                objectFit="cover"
                sizes="(max-width: 768px) 25vw, 22vw"
                priority
              />
            </Box>
          </Td>
          <Td>
            <Link href={APP_ROUTERS.PRODUCT_DETAIL_PAGE(id?.toString())}>
              <Text fontFamily="baloo" style={{ fontWeight: 'bold' }}>
                {name}
              </Text>
            </Link>
          </Td>
          <Td>{formattedPrice}</Td>
          <Td>
            <Counter
              initialQuantity={quantity}
              onQuantityChange={handleQuantityChange}
            />
          </Td>
          <Td color="cart.totalAmount">{formattedTotal}</Td>
        </Show>
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
