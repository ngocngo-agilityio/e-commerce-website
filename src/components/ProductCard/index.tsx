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
  id: number;
  name: string;
  image: string;
  price: number;
}

const ProductCard = ({ id, name, image, price }: Props): JSX.Element => {
  const formattedPrice = useMemo(() => formatCurrency(price), [price]);

  return (
    <Card
      maxW={{ base: '100%', md: '295px' }}
      transition="transform 0.3s ease-in-out"
      _hover={{ transform: 'scale(1.02)' }}
    >
      <CardBody>
        <Link href={APP_ROUTERS.PRODUCT_DETAIL_PAGE(id?.toString())} scroll>
          <Flex flexDir={{ base: 'row', md: 'column' }} gap="16px">
            <Box
              width={{ base: '30%', md: '100%' }}
              pos="relative"
              aspectRatio="295 / 342"
            >
              <Image
                src={image}
                alt="Product Image"
                border-radius="none"
                placeholder={FALL_BACK_IMAGE}
                fill
                objectFit="cover"
                sizes="(max-width: 768px) 25vw, 10vw"
              />
            </Box>

            <Flex flexDir="column" alignItems={{ base: 'start', md: 'center' }}>
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
          </Flex>
        </Link>
      </CardBody>
    </Card>
  );
};

export default memo(ProductCard);
