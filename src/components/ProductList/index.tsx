// Libs
import { memo } from 'react';
import isEqual from 'react-fast-compare';
import { Wrap, WrapItem, Text } from '@chakra-ui/react';

// Types
import { Product } from '@types';

// Components
import { ProductCard } from '@components';

interface Props {
  data: Product[];
}

const ProductList = ({ data = [] }: Props): JSX.Element => {
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

export default memo(ProductList, isEqual);
