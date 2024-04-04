// Libs
import { Suspense } from 'react';
import { Box, Container, Heading, Text } from '@chakra-ui/react';

// Apis
import { getCategoryList } from '@apis';

// Components
import {
  Banner,
  ProductList,
  SkeletonProductList,
  ProductListActions,
} from '@components';

const Products = async () => {
  const { data: categories } = await getCategoryList();

  return (
    <Box as="main">
      <Banner />

      <Container py="43px">
        <Heading as="h2" size="md" textAlign="center">
          Discover NEW Arrivals
        </Heading>
        <Text textAlign="center" size="2xl" lineHeight="48px">
          Recently added shirts!
        </Text>

        <ProductListActions categories={categories} />

        <Suspense fallback={<SkeletonProductList />}>
          <ProductList />
        </Suspense>
      </Container>
    </Box>
  );
};

export default Products;
