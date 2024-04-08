// Libs
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

// Apis
import { getProductDetail, getCategoryList, getTagList } from '@apis';

// Utils
import { formatCurrency } from '@utils';

// Constants
import { FALL_BACK_IMAGE } from '@constants';

// Components
import { Rating } from '@components';

// Sections
import AddToCard from './AddToCard';

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

  // Fetch data for categories
  const { data: categoryList = [] } = await getCategoryList({
    ids: categoryIds,
  });

  // Fetch data for tags
  const { data: tagList = [] } = await getTagList({ ids: tagIds });

  const originalPrice = formatCurrency(price);
  const discountedPrice = formatCurrency(discount);
  const categories = categoryList.map((item) => item.name).join(', ');
  const tags = tagList.map((item) => item.name).join(', ');

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
          <AddToCard sizes={sizes} product={product} />
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
              {categories}
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
              {tags}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default ProductDetail;
