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
      maxW="295px"
      transition="transform 0.3s ease-in-out"
      _hover={{ transform: 'scale(1.05)' }}
    >
      <CardBody>
        <Link href={APP_ROUTERS.PRODUCT_DETAIL_PAGE(id)} scroll={true}>
          <Box width="100%" pos="relative" aspectRatio="295 / 342">
            <Image
              src={image}
              alt="Product Image"
              border-radius="none"
              placeholder={FALL_BACK_IMAGE}
              objectFit="cover"
              fill
            />
          </Box>

          <Flex flexDir="column" alignItems="center" pt="16px">
            <Heading
              as="h3"
              fontSize="xl"
              lineHeight="tall"
              fontFamily="baloo"
              fontWeight="bold"
            >
              {name}
            </Heading>
            <Text mt="6px" as="span" size="xl" color="price">
              {formattedPrice}
            </Text>
          </Flex>
        </Link>
      </CardBody>
    </Card>
  );
};

export default memo(ProductCard);
