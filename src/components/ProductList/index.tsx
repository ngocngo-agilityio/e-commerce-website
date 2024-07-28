// Libs
import { memo } from 'react';
import isEqual from 'react-fast-compare';
import { Text, Grid, GridItem } from '@chakra-ui/react';

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
        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(4, 1fr)"
          rowGap="48px"
          columnGap="20px"
        >
          {data.map((product) => {
            const { id, name, image, price } = product || {};

            return (
              <GridItem key={id}>
                <ProductCard
                  key={id}
                  id={id}
                  name={name}
                  image={image}
                  price={price}
                />
              </GridItem>
            );
          })}
        </Grid>
      ) : (
        <Text textAlign="center">No products in list</Text>
      )}
    </>
  );
};

export default memo(ProductList, isEqual);
