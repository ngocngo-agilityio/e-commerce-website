// Libs
import { Box, Container, Flex, HStack } from '@chakra-ui/react';

// Assets
import { HamburgerIcon } from '@assets';

// Components
import { Logo, Navigation, ShoppingCart, UserProfile } from '@components';

const Header = (): JSX.Element => {
  // TODO: Update later
  const handleLogout = () => {};

  // TODO: Update later
  const cartItemQuantity = 1;

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
          <UserProfile onLogout={handleLogout} />
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
