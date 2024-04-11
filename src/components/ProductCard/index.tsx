// Libs
import { useMemo, memo } from 'react';
import { Card, CardBody, Heading, Flex, Text, Box } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';

// Constants
import { APP_ROUTERS, FALL_BACK_IMAGE } from '@constants';

// Utils
import { formatCurrency } from '@utils';

interface Props {
  id: string;
  name: string;
  image: string;
  price: number;
}

const ProductCard = ({ id, name, image, price }: Props): JSX.Element => {
  const formattedPrice = useMemo(() => formatCurrency(price), [price]);

  return (
    <Card
      w="295px"
      transition="transform 0.3s ease-in-out"
      _hover={{ transform: 'scale(1.05)' }}
    >
      <CardBody>
        <Link href={APP_ROUTERS.PRODUCT_DETAIL_PAGE(id)}>
          <Box w="295px" h="342px" position="relative">
            <Image
              src={image}
              alt="Product Image"
              border-radius="none"
              placeholder={FALL_BACK_IMAGE}
              fill
            />
          </Box>
        </Link>
        <Flex flexDir="column" alignItems="center" pt="16px">
          <Link href={APP_ROUTERS.PRODUCT_DETAIL_PAGE(id)}>
            <Heading
              as="h3"
              fontSize="xl"
              lineHeight="tall"
              fontFamily="baloo"
              fontWeight="bold"
            >
              {name}
            </Heading>
          </Link>

          <Text mt="6px" as="span" size="xl" color="price">
            {formattedPrice}
          </Text>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default memo(ProductCard);
