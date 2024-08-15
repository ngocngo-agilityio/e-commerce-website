// Libs
import { Suspense } from 'react';
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react';
import { notFound } from 'next/navigation';
import { Metadata, ResolvingMetadata } from 'next';

// Apis
import { getProductDetail } from '@apis';

// Utils
import { formatCurrency } from '@utils';

// Constants
import { FALL_BACK_IMAGE_PRODUCT, PLACEHOLDER_IMAGE } from '@constants';

// Components
import {
  Rating,
  SkeletonAddCartAction,
  SkeletonProductCategories,
  Image,
} from '@components';

// Sections
import { AddCartAction, Categories, Tags } from '@sections';

interface Props {
  params: { id: string };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const productId = params.id;

  // Fetch data
  const { data: product } = await getProductDetail(productId);

  const { name = '', image = '', introduction = '' } = product || {};

  // Optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: name,
    description: introduction,
    openGraph: {
      images: [image, ...previousImages],
    },
  };
}

const ProductDetail = async ({ params }: Props): Promise<JSX.Element> => {
  const { id: productId } = params || {};

  // Fetch data for product details
  const { data: product } = await getProductDetail(productId);

  if (!product) {
    return notFound();
  }

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
    <Container pr={{ md: '30px', lg: '98px' }} pt="30px" pb="100px">
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        gap={{ md: 6, lg: 12 }}
      >
        <GridItem>
          <Box w="full" aspectRatio="550/637" pos="relative">
            <Image
              src={image}
              alt="Product Image"
              placeholder={PLACEHOLDER_IMAGE}
              fallbackSrc={FALL_BACK_IMAGE_PRODUCT}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </Box>
        </GridItem>

        <GridItem display="flex" flexDir="column">
          <Heading size="md" lineHeight="48px" mt={{ base: 8, md: 6, lg: 12 }}>
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
          <Text mt="26px" mb={{ base: '35px', lg: '70px' }}>
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
        </GridItem>
      </Grid>
    </Container>
  );
};

export default ProductDetail;
