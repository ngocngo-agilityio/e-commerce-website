// Libs
import { memo } from 'react';
import isEqual from 'react-fast-compare';
import { Wrap, WrapItem, Text } from '@chakra-ui/react';

// Types
import { Product } from '@types';

// Mocks
import { PRODUCT_LIST } from '@mocks';

// Components
import { ProductCard } from '@components';

const ProductList = (): JSX.Element => {
  // TODO: Update later - Fetch products at here
  const data: Product[] = PRODUCT_LIST;

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

export default memo(ProductList, isEqual);
