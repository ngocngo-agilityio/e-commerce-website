// Apis
import { getCategoryList } from '@apis';

// Sections
import { ProductListActionsClient } from '@sections';

const ProductListActions = async (): Promise<JSX.Element> => {
  // Fetch data for category list
  const { data: categories } = await getCategoryList();

  return <ProductListActionsClient categories={categories} />;
};

export default ProductListActions;
