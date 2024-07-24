// Libs
import { Box, Container, HStack } from '@chakra-ui/react';

// Assets
import { HamburgerIcon } from '@assets';

// Components
import { Logo, Navigation, ShoppingCart, UserProfile } from '@components';

import { getCartItems } from '@apis';

const Header = async (): Promise<JSX.Element> => {
  // Get my cart
  const { data: cartItems } = await getCartItems();

  const cartItemQuantity = cartItems.length || 0;

  return (
    <Container
      as="header"
      display="flex"
      alignContent="center"
      flexWrap="wrap"
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
    </Container>
  );
};

export default Header;
