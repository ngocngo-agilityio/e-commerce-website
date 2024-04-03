// Libs
import { useMemo, memo } from 'react';
import { Card, CardBody, Heading, Flex, Text, Box } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';

// Constants
import { APP_ROUTERS } from '@constants';

const ProductCard = (): JSX.Element => {
  const image =
    'https://firebasestorage.googleapis.com/v0/b/ecommerce-fashion-16e2e.appspot.com/o/plain-white-shirt-1.webp?alt=media';
  const name = 'Plain White Shirt';
  const price = '$29.00';

  return (
    <Card
      w="295px"
      transition="transform 0.3s ease-in-out"
      _hover={{ transform: 'scale(1.05)' }}
    >
      <CardBody>
        <Link href={'#'}>
          <Box w="295px" h="342px" position="relative">
            <Image
              src={image}
              alt="Product Image"
              border-radius="none"
              fill
              priority
            />
          </Box>
        </Link>
        <Flex mt="xs" justifyContent="space-between">
          <Heading as="h3" size="xs" color="productCard">
            <Link href={''}>{name}</Link>
          </Heading>
          <Flex alignItems="end">
            <Text
              size="sm"
              fontWeight="medium"
              ml="16px"
              whiteSpace="nowrap"
              color="productCard"
            >
              {price}
            </Text>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
