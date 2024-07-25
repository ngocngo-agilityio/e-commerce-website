// Libs
import dynamic from 'next/dynamic';
import { Stack } from '@chakra-ui/react';

// Apis
import { getProductList } from '@apis';

// Constants
import { PRODUCT_PER_PAGE, SORT_BY } from '@constants';

// Components
import { ProductList } from '@components';

const Pagination = dynamic(() => import('@components/Pagination'));

interface Props {
  searchValue?: string;
  sortDirection?: string;
  categoryIds?: string[];
  currentPage?: string;
}

const Products = async ({
  searchValue,
  sortDirection,
  categoryIds,
  currentPage,
}: Props): Promise<JSX.Element> => {
  const queryConfig = {
    name: searchValue,
    sortDirection,
    sortBy: sortDirection && SORT_BY.NAME,
    categoryIds: categoryIds,
    page: currentPage,
    limit: PRODUCT_PER_PAGE,
  };

  // Fetch data for product list
  const { data: productList, total: productsTotal } =
    await getProductList(queryConfig);

  const pagesQuantity = Math.ceil(productsTotal / PRODUCT_PER_PAGE);

  return (
    <Stack spacing="50px">
      <ProductList data={productList} />
      {productsTotal > 0 && <Pagination pagesQuantity={pagesQuantity} />}
    </Stack>
  );
};

export default Products;
