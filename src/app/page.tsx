// Libs
import { Suspense } from 'react';
import { Box, Container, Heading, Text } from '@chakra-ui/react';

// Components
import {
  Banner,
  SkeletonProductList,
  SkeletonProductsActions,
} from '@components';

// Sections
import { ProductList, ProductListActions } from '@sections';

interface Props {
  searchParams?: {
    name?: string;
    order?: string;
    categoryIds?: string;
    page?: string;
  };
}

const Products = ({ searchParams }: Props) => {
  const {
    name = '',
    order = '',
    categoryIds = '',
    page = '1',
  } = searchParams || {};
  const ids = categoryIds?.split(',');

  return (
    <Box as="main">
      <Banner />

      <Container py={{ base: '30px', md: '43px' }}>
        <Heading as="h2" size="md" textAlign="center">
          Discover NEW Arrivals
        </Heading>
        <Text textAlign="center" size="2xl" lineHeight="48px" mb={4}>
          Recently added shirts!
        </Text>

        <Suspense fallback={<SkeletonProductsActions />}>
          <ProductListActions />
        </Suspense>

        <Suspense
          key={name + order + categoryIds + page}
          fallback={<SkeletonProductList />}
        >
          <ProductList
            searchValue={name}
            sortDirection={order}
            categoryIds={ids}
            currentPage={page}
          />
        </Suspense>
      </Container>
    </Box>
  );
};

export default Products;
