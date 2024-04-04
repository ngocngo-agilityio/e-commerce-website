// Apis
import { getProductList } from '@apis';

// Components
import { ProductList } from '@components';

interface Props {
  searchValue: string;
}

const Products = async ({ searchValue }: Props) => {
  const queryConfig = { name: searchValue };

  // Fetch data for product list
  const { data } = await getProductList(queryConfig);

  return <ProductList data={data} />;
};

export default Products;
