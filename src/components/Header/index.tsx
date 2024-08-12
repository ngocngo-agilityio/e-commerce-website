// Libs
import {
  Box,
  Container,
  HStack,
  Show,
  Hide,
  Flex,
  Skeleton,
} from '@chakra-ui/react';
import { Suspense } from 'react';

// Assets
import { HamburgerIcon } from '@assets';

// Components
import { Logo, Navigation, ShoppingCart, UserProfile } from '@components';

const Header = (): JSX.Element => {
  return (
    <Container
      as="header"
      display="flex"
      flexDir="column"
      gap={2}
      pt="34px"
      pb={{ base: 5, md: 4 }}
    >
      <Flex alignContent="center" justifyContent="space-between">
        <HStack spacing={{ md: '100px', lg: '150px' }} wrap="wrap">
          <Logo />
          <Show above="md">
            <Navigation />
          </Show>
        </HStack>

        <HStack spacing="25px" alignContent="center">
          <UserProfile />
          <Suspense fallback={<Skeleton w="24px" h="24px" />}>
            <ShoppingCart />
          </Suspense>

          <Box cursor="pointer">
            <HamburgerIcon />
          </Box>
        </HStack>
      </Flex>

      <Hide above="md">
        <Navigation />
      </Hide>
    </Container>
  );
};

export default Header;
