// Apis
import { getProductList } from '@apis';

// Constants
import { SORT_BY } from '@constants';

// Components
import { ProductList } from '@components';

interface Props {
  searchValue?: string;
  sortDirection?: string;
}

const Products = async ({
  searchValue,
  sortDirection,
}: Props): Promise<JSX.Element> => {
  const queryConfig = {
    name: searchValue,
    sortDirection,
    sortBy: sortDirection && SORT_BY.NAME,
  };

  // Fetch data for product list
  const { data } = await getProductList(queryConfig);

  return <ProductList data={data} />;
};

export default Products;
