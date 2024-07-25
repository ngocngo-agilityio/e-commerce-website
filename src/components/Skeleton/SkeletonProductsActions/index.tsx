// Libs
import { Flex, Skeleton } from '@chakra-ui/react';

const SkeletonProductActions = (): JSX.Element => {
  return (
    <Flex py="24px" gap="20px">
      {Array.from({ length: 3 }, (_, index) => (
        <Skeleton key={index} w="245px" h="48px" />
      ))}
    </Flex>
  );
};

export default SkeletonProductActions;
