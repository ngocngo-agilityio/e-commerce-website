// Libs
import { Suspense } from 'react';
import { Box, Container, Heading, Text } from '@chakra-ui/react';

// Apis
import { getCategoryList } from '@apis';

// Components
import { Banner, SkeletonProductList } from '@components';

// Sections
import ProductList from './ProductList';
import ProductListActions from './ProductListActions';

interface Props {
  searchParams?: {
    name?: string;
    order?: string;
    categoryIds?: string;
  };
}

const Products = async ({ searchParams }: Props) => {
  const { name, order, categoryIds } = searchParams || {};
  const ids = categoryIds?.split(',');

  // Fetch data for category list
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
          <ProductList
            searchValue={name}
            sortDirection={order}
            categoryIds={ids}
          />
        </Suspense>
      </Container>
    </Box>
  );
};

export default Products;
