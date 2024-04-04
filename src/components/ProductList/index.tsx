// Libs
import { Wrap, WrapItem, Text } from '@chakra-ui/react';

// Apis
import { getProductList } from '@apis';

// Components
import { ProductCard } from '@components';

interface Props {
  searchValue: string;
}

const ProductList = async ({ searchValue }: Props) => {
  const queryConfig = { name: searchValue };

  // Fetch data for product list
  const { data } = await getProductList(queryConfig);

  return (
    <>
      {data.length > 0 ? (
        <Wrap spacingX="44px" spacingY="48px">
          {data.map((product) => {
            const { id, name, image, price } = product || {};

            return (
              <WrapItem key={id}>
                <ProductCard
                  key={id}
                  id={id}
                  name={name}
                  image={image}
                  price={price}
                />
              </WrapItem>
            );
          })}
        </Wrap>
      ) : (
        <Text textAlign="center">No products in list</Text>
      )}
    </>
  );
};

export default ProductList;
