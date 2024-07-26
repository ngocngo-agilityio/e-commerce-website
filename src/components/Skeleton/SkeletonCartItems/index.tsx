import { Flex, Skeleton } from '@chakra-ui/react';

const SkeletonCartItems = (): JSX.Element => (
  <>
    <Flex flexDir="column" gap="4px" mt="70px">
      {Array.from({ length: 4 }).map((_, i) => (
        <Skeleton key={i} w="full" h="80px" />
      ))}
    </Flex>

    <Skeleton mt="83px" mb="38px" w="200px" h="50px" />

    <Flex w="531px" mb="41px" flexDir="column" gap="4px">
      {Array.from({ length: 3 }).map((_, i) => (
        <Skeleton key={i} h="54px" w="full" />
      ))}
    </Flex>

    <Skeleton w="262px" h="58px" />
  </>
);

export default SkeletonCartItems;
