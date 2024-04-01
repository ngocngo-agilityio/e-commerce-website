// Libs
import { memo } from 'react';
import { Box, Center, Text } from '@chakra-ui/react';
import Link from 'next/link';

// Assets
import { CartIcon } from '@assets';

// Constants
import { APP_ROUTERS } from '@constants';

interface ShoppingCartProps {
  cartItemQuantity?: number;
}

const ShoppingCart = ({
  cartItemQuantity = 0,
}: ShoppingCartProps): JSX.Element => {
  return (
    <Box pos="relative">
      <Link href={APP_ROUTERS.CART_PAGE} aria-label="cart-icon">
        <CartIcon />

        {cartItemQuantity > 0 && (
          <Center
            pos="absolute"
            bg="shoppingCart.bg"
            rounded="50%"
            w="20px"
            h="20px"
            top="-5px"
            left="50px"
          >
            <Text fontSize="2xs" fontWeight="bold" color="shoppingCart.color">
              {cartItemQuantity}
            </Text>
          </Center>
        )}
      </Link>
    </Box>
  );
};

export default memo(ShoppingCart);
