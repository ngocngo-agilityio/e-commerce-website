// Libs
import { Suspense } from 'react';
import { Container, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

// Apis
import { getProductDetail } from '@apis';

// Utils
import { formatCurrency } from '@utils';

// Constants
import { FALL_BACK_IMAGE } from '@constants';

// Components
import {
  Rating,
  SkeletonAddCartAction,
  SkeletonProductCategories,
} from '@components';

// Sections
import { AddCartAction, Categories, Tags } from '@sections';

interface Props {
  params: { id: string };
}

const ProductDetail = async ({ params }: Props): Promise<JSX.Element> => {
  const { id: productId } = params || {};

  // Fetch data for product details
  const { data: product } = await getProductDetail(productId);

  const {
    name,
    image,
    introduction,
    rating,
    voteNumber,
    price,
    discount,
    sizes,
    categoryIds,
    tagIds,
  } = product || {};

  const originalPrice = formatCurrency(price);
  const discountedPrice = formatCurrency(discount);

  return (
    <Container
      display="flex"
      pr="98px"
      pt="30px"
      pb="100px"
      gap="48px"
      flexWrap="wrap"
    >
      <Image
        src={image}
        alt="Product Image"
        placeholder={FALL_BACK_IMAGE}
        width={550}
        height={637}
        priority
      />

      <Flex flexDir="column" flex={1}>
        <Heading size="md" lineHeight="48px" mt="48px">
          {name}
        </Heading>
        <Flex mt="20px" gap="5px">
          <Rating rating={rating} />
          <Text size="md" color="productDetail.reviewNumber">
            ({voteNumber})
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

        <Suspense fallback={<SkeletonAddCartAction />}>
          <AddCartAction sizes={sizes} product={product} />
        </Suspense>

        <Suspense fallback={<SkeletonProductCategories />}>
          <Categories categoryIds={categoryIds} />
        </Suspense>

        <Suspense fallback={<SkeletonProductCategories />}>
          <Tags tagIds={tagIds} />
        </Suspense>
      </Flex>
    </Container>
  );
};

export default ProductDetail;
