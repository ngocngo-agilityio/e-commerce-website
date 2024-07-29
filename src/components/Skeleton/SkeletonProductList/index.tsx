// Libs
import { Skeleton, Grid, GridItem } from '@chakra-ui/react';

const SkeletonProductList = (): JSX.Element => {
  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(4, 1fr)' }}
      rowGap={{ base: '20px', md: '48px' }}
      columnGap="20px"
    >
      {Array.from({ length: 8 }, (_, index) => (
        <GridItem key={index}>
          <Skeleton w="full" aspectRatio={{ base: '382/133', md: '295/410' }} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default SkeletonProductList;
