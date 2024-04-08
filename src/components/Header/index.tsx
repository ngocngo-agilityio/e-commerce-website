'use client';

// Libs
import { Box, Container, Flex, HStack } from '@chakra-ui/react';

// Stores
import { useCartStore } from '@stores';

// Assets
import { HamburgerIcon } from '@assets';

// Components
import { Logo, Navigation, ShoppingCart, UserProfile } from '@components';

const Header = (): JSX.Element => {
  // Cart Store
  const cartItems = useCartStore((state) => state.cartItems);
  const cartItemQuantity = cartItems.length || 0;

  return (
    <Container as="header">
      <Flex
        alignContent="center"
        wrap="wrap"
        justifyContent="space-between"
        pt="34px"
        pb="16px"
      >
        <HStack spacing="150px" wrap="wrap">
          <Logo />
          <Navigation />
        </HStack>

        <HStack spacing="25px" alignContent="center">
          <UserProfile />
          <ShoppingCart cartItemQuantity={cartItemQuantity} />

          <Box cursor="pointer">
            <HamburgerIcon />
          </Box>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Header;
