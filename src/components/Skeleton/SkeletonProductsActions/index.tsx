// Libs
import { Flex, Skeleton } from '@chakra-ui/react';

const SkeletonProductActions = (): JSX.Element => {
  return (
    <Flex
      py={{ base: '30px', md: '24px' }}
      flexDir={{ base: 'column', md: 'row' }}
      gap={{ base: '16px', md: '20px' }}
    >
      {Array.from({ length: 3 }, (_, index) => (
        <Skeleton
          key={index}
          w={{ base: 'full', md: '245px' }}
          h="48px"
          borderRadius="base"
        />
      ))}
    </Flex>
  );
};

export default SkeletonProductActions;
