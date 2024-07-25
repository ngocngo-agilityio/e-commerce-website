// Libs
import { Skeleton } from '@chakra-ui/react';

const SkeletonAddCartAction = (): JSX.Element => {
  return (
    <>
      <Skeleton w="210px" h="48px" />
      <Skeleton w="165px" h="48px" mt="36px" mb="32px" />
    </>
  );
};

export default SkeletonAddCartAction;
