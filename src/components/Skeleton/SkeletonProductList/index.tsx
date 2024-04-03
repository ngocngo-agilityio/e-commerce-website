// Libs
import { Skeleton, Wrap, WrapItem } from '@chakra-ui/react';

const SkeletonProductList = (): JSX.Element => {
  return (
    <Wrap justify="space-between" spacingY="48px">
      {Array.from({ length: 8 }, (_, index) => (
        <WrapItem key={index}>
          <Skeleton w="295px" h="410px" />
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default SkeletonProductList;
