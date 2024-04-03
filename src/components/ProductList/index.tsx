// Libs
import { Wrap, WrapItem, Text } from '@chakra-ui/react';

// Apis
import { getProductList } from '@apis';

// Components
import { ProductCard } from '@components';

const ProductList = async () => {
  // TODO: Update later - Fetch products at here
  const { data } = await getProductList();

  return (
    <>
      {data.length > 0 ? (
        <Wrap justify="space-between" spacingY="48px">
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
