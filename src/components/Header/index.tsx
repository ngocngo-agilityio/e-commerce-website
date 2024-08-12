// Libs
import { Box, Container, HStack, Show, Hide, Flex } from '@chakra-ui/react';

// Assets
import { HamburgerIcon } from '@assets';

// APIs
import { getCartItems } from '@apis';

// Components
import { Logo, Navigation, ShoppingCart, UserProfile } from '@components';

const Header = async (): Promise<JSX.Element> => {
  // Get my cart

  const { data: myCart } = await getCartItems();

  const { cartItems = [] } = myCart || {};
  const cartItemQuantity = cartItems.length || 0;

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
          <ShoppingCart cartItemQuantity={cartItemQuantity} />

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
