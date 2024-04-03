// Libs
import { Suspense } from 'react';
import { Box, Container, Heading, Text } from '@chakra-ui/react';

// Components
import { Banner, ProductList, SkeletonProductList } from '@components';

const Products = (): JSX.Element => {
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

        <Suspense fallback={<SkeletonProductList />}>
          <ProductList />
        </Suspense>
      </Container>
    </Box>
  );
};

export default Products;
