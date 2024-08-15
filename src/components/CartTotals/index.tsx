// Libs
import { memo } from 'react';
import { Box, Flex, Heading, Text, Divider, Button } from '@chakra-ui/react';

// Utils
import { formatCurrency } from '@utils';

interface ICartTotalsProps {
  total: number;
  onCheckout: () => void;
}

const CartTotals = ({ total, onCheckout }: ICartTotalsProps): JSX.Element => {
  const formattedTotal = formatCurrency(total);

  return (
    <>
      <Heading mt="83px" mb="38px" fontSize={{ base: '3xl', md: '4xl' }}>
        Cart Totals
      </Heading>
      <Box w={{ base: 'full', md: '531px' }} mb="41px">
        <Flex justifyContent="space-between" py="17px">
          <Text>Subtotal</Text>
          <Text>{formattedTotal}</Text>
        </Flex>
        <Divider />
        <Flex justifyContent="space-between" py="17px">
          <Text>ShippingFree</Text>
          <Text>FREE!!!</Text>
        </Flex>
        <Divider />
        <Flex justifyContent="space-between" py="17px">
          <Text fontFamily="arimo" fontWeight="bold">
            Total
          </Text>
          <Text>{formattedTotal}</Text>
        </Flex>
      </Box>

      <Button
        variant="checkoutBtn"
        w={{ base: '200px', md: '262px' }}
        h={{ base: '40px', md: '58px' }}
        fontSize={{ base: 'md', md: 'xl' }}
        onClick={onCheckout}
      >
        Proceed to Checkout
      </Button>
    </>
  );
};

export default memo(CartTotals);
