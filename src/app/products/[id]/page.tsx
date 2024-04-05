// Libs
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

// Constants
import { FALL_BACK_IMAGE } from '@constants';

// Components
import { Rating } from '@components';

// Sections
import SelectSize from './SelectSize';
import AddToCard from './AddToCard';

const ProductDetail = (): JSX.Element => {
  const image =
    'https://firebasestorage.googleapis.com/v0/b/ecommerce-fashion-16e2e.appspot.com/o/plain-white-shirt-1.webp?alt=media';

  const name = 'Plain White Shirt';
  const introduction =
    'A classic t-shirt never goes out of style. This is our most premium collection of shirt. This plain white shirt is made up of pure cotton and has a premium finish.';
  const rating = 4;
  const reviewNumber = 15;
  const originalPrice = '$69.00';
  const discountedPrice = '$59.00';
  const sizes = [
    { value: '1', label: 'Small', code: 'S' },
    { value: '2', label: 'Medium', code: 'M' },
    { value: '3', label: 'Large', code: 'L' },
    { value: '4', label: 'Extra Large', code: 'XL' },
  ];

  return (
    <Container>
      <Flex pr="82px" pt="30px" pb="100px" gap="48px" wrap="wrap">
        <Box w="550px" h="685px" position="relative">
          <Image
            src={image}
            alt="Product Image"
            placeholder={FALL_BACK_IMAGE}
            fill
            priority
          />
        </Box>

        <Flex flexDir="column" flex={1}>
          <Heading size="md" lineHeight="48px" mt="48px">
            {name}
          </Heading>
          <Flex mt="20px" gap="5px">
            <Rating rating={rating} />
            <Text size="md" color="productDetail.reviewNumber">
              ({reviewNumber})
            </Text>
          </Flex>
          <Flex gap="14px" mt="25px">
            <Text as="del" size="3xl" color="discountedPrice">
              {originalPrice}
            </Text>
            <Text size="3xl" color="price">
              {discountedPrice}
            </Text>
          </Flex>
          <Text mt="26px" mb="70px">
            {introduction}
          </Text>
          <SelectSize sizes={sizes} />
          <AddToCard />
          <Flex>
            <Text
              as="span"
              size="md"
              lineHeight="24px"
              color="productDetail.categoryTitle"
            >
              Category:&nbsp;
            </Text>
            <Text size="md" lineHeight="24px">
              Women, Polo, Casual
            </Text>
          </Flex>
          <Flex>
            <Text
              as="span"
              size="md"
              lineHeight="24px"
              color="productDetail.categoryTitle"
            >
              Tags:&nbsp;
            </Text>
            <Text size="md" lineHeight="24px">
              Modern, Design, cotton
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default ProductDetail;
