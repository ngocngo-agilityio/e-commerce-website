'use client';

// Libs
import { memo, useCallback } from 'react';
import {
  Box,
  Center,
  Flex,
  Hide,
  Show,
  Td,
  Tr,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Utils
import { formatCurrency } from '@utils';

// Constants
import {
  APP_ROUTERS,
  FALL_BACK_IMAGE_PRODUCT,
  PLACEHOLDER_IMAGE,
} from '@constants';

// Components
import Counter from '@components/Counter';
import Image from '@components/Image';
const ConfirmModal = dynamic(() => import('@components/ConfirmModal'));

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
  const {
    isOpen: isOpenConfirmModal,
    onToggle: onToggleConfirmModal,
    onOpen: onOpenConfirmModal,
  } = useDisclosure();

  const total = price * quantity;
  const formattedPrice = formatCurrency(price);
  const formattedTotal = formatCurrency(total);

  const handleRemoveCartItem = useCallback(() => {
    onRemoveProduct(id);
    onToggleConfirmModal();
  }, [id, onRemoveProduct, onToggleConfirmModal]);

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
              onClick={onToggleConfirmModal}
            >
              x
            </Center>

            <Hide above="md">
              <Box w={20} h={20} pos="relative">
                <Image
                  src={image}
                  alt="Product Image"
                  placeholder={PLACEHOLDER_IMAGE}
                  fallbackSrc={FALL_BACK_IMAGE_PRODUCT}
                  fill
                  priority
                  sizes="(max-width: 768px) 25vw, 22vw"
                  style={{ objectFit: 'cover' }}
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
                    onOpenConfirmModal={onOpenConfirmModal}
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
                placeholder={PLACEHOLDER_IMAGE}
                fallbackSrc={FALL_BACK_IMAGE_PRODUCT}
                fill
                priority
                sizes="(max-width: 768px) 25vw, 22vw"
                style={{ objectFit: 'cover' }}
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
              onOpenConfirmModal={onOpenConfirmModal}
            />
          </Td>
          <Td color="cart.totalAmount" w={{ md: '150px', xl: '230px' }}>
            {formattedTotal}
          </Td>
        </Show>
      </Tr>
      {isOpenConfirmModal && (
        <ConfirmModal
          title="Delete"
          textCancel="No"
          textSubmit="Yes"
          message="Are you sure remove this product from your cart?"
          onSubmit={handleRemoveCartItem}
          onClose={onToggleConfirmModal}
        />
      )}
    </>
  );
};

export default memo(CartItem);
